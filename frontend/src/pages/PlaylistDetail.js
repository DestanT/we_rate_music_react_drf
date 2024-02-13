import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

import { useRedirect } from '../hooks/useRedirect';

import { axiosReq } from '../api/axiosDefaults';
import { useSetSpotifyPlayerUri } from '../contexts/SpotifyPlayerUriContext';

import Playlist from '../components/Playlist';
import Profile from '../components/Profile';
import { Rating, StickerStar } from '@smastrom/react-rating';
import StarRating from '../components/StarRating';

import styles from '../styles/PlaylistDetail.module.css';
import btnStyles from '../styles/Button.module.css';

const PlaylistDetail = () => {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState([]);
  const [ratings, setRatings] = useState([]);
  const setSpotifyPlayerUri = useSetSpotifyPlayerUri();
  const history = useHistory();

  useRedirect();

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const [{ data: playlist }, { data: ratings }] = await Promise.all([
          axiosReq.get(`playlists/${id}`),
          axiosReq.get(`ratings/?playlist=${id}`),
        ]);

        setPlaylist(playlist);
        setRatings(ratings);
        console.log(playlist);
        console.log(ratings);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPlaylist();
  }, [id]);

  const handleEdit = () => {
    history.push(`/playlist/${id}/edit`);
  };

  // NOTE: ATTACH THIS LOGIC TO ANOTHER BUTTON
  const updateSpotifyPlayerUri = (uri) => {
    setSpotifyPlayerUri(uri);
  };

  const myStyles = {
    itemShapes: StickerStar,
    activeFillColor: '#df604e',
    inactiveFillColor: '#df5f4e6e',
  };

  return (
    <>
      <Profile userId={playlist.owner_id} />
      <Container className={styles.Container}>
        <Row>
          <Col>
            <h2>{playlist.title}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Rating
              readOnly={true}
              value={playlist.average_rating || 0}
              style={{ maxWidth: 250, margin: 'auto' }}
              itemStyles={myStyles}
            />
            <p>
              <em>Average Rating: {playlist.average_rating || 0}</em>
            </p>
            <p>
              <em># of Ratings: {playlist.ratings_count}</em>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              variant='link'
              onClick={() => history.push(`/profile/${playlist.owner_id}`)}
              className={styles.Button}
            >
              <Playlist image={playlist.image} title={playlist.title} />
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>{playlist.description}</Col>
        </Row>
        <Row>
          <Col>
            <StarRating playlist={playlist} />
          </Col>
        </Row>

        {playlist.is_owner && (
          <>
            <br />
            <Row>
              <Col>
                <Button onClick={handleEdit} className={btnStyles.Button}>
                  Edit Playlist
                </Button>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default PlaylistDetail;
