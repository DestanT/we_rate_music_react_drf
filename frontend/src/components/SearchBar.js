import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { axiosReq } from '../api/axiosDefaults';
import { fetchMoreData } from '../utils/dataUtils';

import Avatar from './Avatar';
import LoadingSpinner from './LoadingSpinner';
import InfiniteScroll from 'react-infinite-scroll-component';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/SearchBar.module.css';
import btnStyles from '../styles/Button.module.css';

function SearchBar({ onSearch, liveSearch = false }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const history = useHistory();

  const fetchItems = async () => {
    try {
      const { data } = await axiosReq.get(`profiles/?search=${searchQuery}`);
      setItems(data);
      setShowDropdown(true);
      setHasLoaded(true);
    } catch (err) {
      // console.log(err.response?.data);
    }
  };

  // This is function is disabled in the <Button> element, if liveSearch is truthy
  const handleSubmit = async (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleInputChange = async (e) => {
    const currentQuery = e.target.value;
    setSearchQuery(currentQuery);

    if (currentQuery === '') {
      setShowDropdown(false);
      return;
    }

    if (liveSearch) {
      await fetchItems();
    }
  };

  const dropdownResults = hasLoaded ? (
    <Container className={styles.DropdownMenu}>
      {items?.results.length ? (
        <InfiniteScroll
          dataLength={items.results.length}
          loader={<LoadingSpinner />}
          hasMore={!!items.next}
          next={() => fetchMoreData(items, setItems)}
          className={styles.InfiniteScroll}
        >
          {items.results.map((profile) => (
            <Row
              key={profile.id}
              className={styles.DropdownItem}
              onClick={() => {
                history.push(`/profile/${profile.id}`);
              }}
            >
              <Avatar src={profile.image} height={75} />
              <Col>{profile.owner}</Col>
            </Row>
          ))}
        </InfiniteScroll>
      ) : (
        <Row className={styles.DropdownItem}>
          <Col>No results found</Col>
        </Row>
      )}
    </Container>
  ) : (
    <Container className={styles.DropdownMenu}>
      <LoadingSpinner />
    </Container>
  );

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='searchForm' style={{ marginBottom: '0' }}>
          <InputGroup>
            <Form.Control
              type='text'
              placeholder={liveSearch ? 'Search for users' : 'Search Spotify'}
              onChange={handleInputChange}
              value={searchQuery}
            />
            <InputGroup.Append>
              {liveSearch ? null : (
                <Button type='submit' className={btnStyles.Button}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{ color: '#3d3d3d' }}
                    size='lg'
                  />
                </Button>
              )}
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
      {liveSearch && showDropdown && dropdownResults}
    </>
  );
}

export default SearchBar;
