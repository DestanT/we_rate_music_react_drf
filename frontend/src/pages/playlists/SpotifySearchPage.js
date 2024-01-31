import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useSpotifyAuth } from '../../hooks/useSpotifyAuth';
import { getUsersProfile } from '../../api/spotifyApi/getUsersProfile';
import { searchForItem } from '../../api/spotifyApi/searchForItem';
import SearchBar from '../../components/SearchBar';
import Playlist from '../../components/Playlist';

const SpotifySearchPage = () => {
  const [searchResults, setSearchResults] = useState();
  const { handleAuthentication } = useSpotifyAuth();

  const handleSearch = async (searchQuery) => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${searchQuery}&type=artist`,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          },
        }
      );
      const data = await response.json();
      setSearchResults(data.artists.items);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Spotify Page</h1>
      <SearchBar onSearch={handleSearch} />
      <Button onClick={handleAuthentication}>Authenticate</Button>
      <Button onClick={getUsersProfile}>get profile</Button>
      <Button onClick={searchForItem}>searchForItem</Button>
      <Container>
        <Row>
          {searchResults?.map((result) => (
            <Playlist
              key={result.id}
              title={result.name}
              image={result.images[0]?.url}
              url={result.external_urls.spotify}
              iframe_uri={result.uri}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SpotifySearchPage;
