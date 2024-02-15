import styles from '../styles/NavBar.module.css';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import {
  faStar,
  faPeopleGroup,
  faUserPlus,
  faRightToBracket,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useCurrentUser } from '../contexts/CurrentUserContext';
import Avatar from './Avatar';

const NavBar = () => {
  const currentUser = useCurrentUser();

  const loggedOutIcons = (
    <>
      <Nav className='ml-auto flex-row'>
        <NavLink
          className={styles.NavLink}
          activeClassName={styles.Active}
          to='/signin'
        >
          {/* Signin icon */}
          <FontAwesomeIcon
            className={styles.MarginRight}
            icon={faRightToBracket}
            size='2xl'
          />
          Login
        </NavLink>
        <NavLink
          className={styles.NavLink}
          activeClassName={styles.Active}
          to='/signup'
        >
          {/* Signup icon */}
          <FontAwesomeIcon
            className={styles.MarginRight}
            icon={faUserPlus}
            size='2xl'
          />
          Sign Up!
        </NavLink>
      </Nav>
    </>
  );
  const loggedInIcons = (
    <>
      <Nav className='mr-auto'>
        <NavLink
          className={styles.NavLink}
          activeClassName={styles.Active}
          to='/global'
        >
          {/* All playlists */}
          <FontAwesomeIcon icon={faGlobe} size='2xl' />
        </NavLink>
      </Nav>

      <Nav className='mr-auto'>
        <NavLink
          className={styles.NavLink}
          activeClassName={styles.Active}
          to='/feed'
        >
          {/* Group/Follow icon */}
          <FontAwesomeIcon icon={faPeopleGroup} size='2xl' />
        </NavLink>
      </Nav>

      <Nav>
        <NavLink
          className={styles.NavLink}
          to={`/profile/${currentUser?.profile_id}`}
        >
          {/* Profile image */}
          <Avatar src={currentUser?.profile_image} height={40} />
        </NavLink>
      </Nav>

      <Nav className='ml-auto'>
        <NavLink
          className={styles.NavLink}
          activeClassName={styles.Active}
          to='/rated-playlists'
        >
          {/* Star icon */}
          <FontAwesomeIcon icon={faStar} size='2xl' />
        </NavLink>
      </Nav>

      <Nav className='ml-auto'>
        <NavLink className={styles.NavLink} to='/spotify-search'>
          {/* Spotify link */}
          <FontAwesomeIcon
            icon={faSpotify}
            style={{ color: '#1db954' }}
            size='2xl'
          />
        </NavLink>
      </Nav>
    </>
  );

  const navBarPosition = currentUser ? 'bottom' : 'top';

  return (
    <Navbar
      className={styles.CustomBackground}
      expand='md'
      fixed={navBarPosition}
    >
      <Container>{currentUser ? loggedInIcons : loggedOutIcons}</Container>
    </Navbar>
  );
};

export default NavBar;
