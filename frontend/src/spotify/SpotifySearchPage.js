import React, { useEffect, useState } from 'react';

import { useSetSpotifyPlayerUri } from '../contexts/SpotifyPlayerUriContext';
import { useSpotifyAuth } from './useSpotifyAuth';
import { useCurrentUser } from '../contexts/CurrentUserContext';
import { useRedirect } from '../hooks/useRedirect';
import { getRefreshToken } from '../utils/spotifyAuthUtils';

import Profile from '../components/Profile';
import SearchBar from '../components/SearchBar';
import Playlist from '../components/Playlist';
import AddPlaylistButton from './AddPlaylistButton';
import ModalWindow from '../components/ModalWindow';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import styles from '../styles/SpotifySearchPage.module.css';

const SpotifySearchPage = () => {
  useRedirect();

  const { handleAuthentication } = useSpotifyAuth();
  const setSpotifyPlayerUri = useSetSpotifyPlayerUri();
  const currentUser = useCurrentUser();
  const [searchResults, setSearchResults] = useState();
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    setModalShow(false);
    // Loads the last search from local storage, if it exists
    const lastSearch = localStorage.getItem('lastSearch');
    if (lastSearch) {
      setSearchResults(JSON.parse(lastSearch));
    }

    // Delay - to allow useSpotityAuth the time to set access_token to localStorage (Blunt force fix)
    const delay = setTimeout(() => {
      // Checks if the user has access_token in local storage
      const access_token = localStorage.getItem('access_token');
      if (!access_token) {
        setModalShow(true);
      }
    }, 1000);

    // Cleanup
    return () => {
      clearTimeout(delay);
    };
  }, []);

  const handleSearch = async (searchQuery) => {
    setErrors({});
    // Empty search field
    if (!searchQuery) {
      setErrors({ message: 'Search field is empty' });
      setShowAlert(true);
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    try {
      // Refreshes the access token before every search
      await getRefreshToken();

      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${searchQuery}&type=album%2Cplaylist%2Cartist&limit=50`,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          },
          signal: signal,
        }
      );
      const data = await response.json();

      // Combine the items from albums, playlists, and artists
      const combinedData = [
        ...(data.albums?.items || []),
        ...(data.playlists?.items || []),
        ...(data.artists?.items || []),
      ];

      setSearchResults(combinedData);

      // Saves the search results to local storage for later use
      if (combinedData.length) {
        localStorage.setItem('lastSearch', JSON.stringify(combinedData));
      }
    } catch (error) {
      setErrors({
        message: error.response?.data || 'An error occurred in fetching',
      });
      setShowAlert(true);
    }

    // Cleanup - in case of early unmounting
    return () => {
      controller.abort();
    };
  };

  const updateSpotifyPlayerUri = (uri) => {
    setSpotifyPlayerUri(uri);
  };

  return (
    <>
      {currentUser?.profile_id && <Profile userId={currentUser?.profile_id} />}
      <Container className={styles.Container}>
        <SearchBar onSearch={handleSearch} />
        {showAlert && errors?.message && (
          <Alert
            variant='warning'
            onClose={() => setShowAlert(false)}
            dismissible
          >
            {errors.message}
          </Alert>
        )}
        <Container>
          <Row>
            {searchResults?.length ? (
              searchResults?.map((result) => (
                <Col
                  className={styles.PaddingReset}
                  key={result.id}
                  xs={4}
                  md={3}
                >
                  <Button
                    variant='link'
                    onClick={() => updateSpotifyPlayerUri(result.uri)}
                    className={styles.PaddingReset}
                  >
                    <Playlist
                      image={result.images[0]?.url}
                      title={result.name}
                    />
                  </Button>
                  <Row>
                    <Col className={styles.MarginBottom}>
                      <p className={styles.Margin}>{result.name}</p>
                      <AddPlaylistButton playlistData={result} />
                    </Col>
                  </Row>
                </Col>
              ))
            ) : (
              <p>No search stored results...</p>
            )}
          </Row>
        </Container>
      </Container>

      <ModalWindow
        show={modalShow}
        onHide={() => setModalShow(false)}
        onConfirm={handleAuthentication}
        title={'You will be redirected to Spotify'}
        body='Please authenticate this app with your Spotify account to take full advantage of its features. Once you are authenticated, you will be redirected back to the app. Thank you!'
      />
    </>
  );
};

export default SpotifySearchPage;
