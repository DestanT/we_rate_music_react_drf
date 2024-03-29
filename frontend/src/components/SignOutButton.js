import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';
import { removeLocalStorageItems } from '../utils/dataUtils';

import { useSetCurrentUser } from '../contexts/CurrentUserContext';
import ModalWindow from './ModalWindow';

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/SignOutButton.module.css';
import btnStyles from '../styles/Button.module.css';

const SignOutButton = () => {
  const setCurrentUser = useSetCurrentUser();
  const [modalShow, setModalShow] = useState(false);
  const history = useHistory();

  const handleSignOut = async () => {
    try {
      await axios.post('/dj-rest-auth/logout/');
      setCurrentUser(null);
      removeLocalStorageItems();
      setModalShow(false);
      history.push('/');
    } catch (err) {
      // console.log(err.response?.data);
    }
  };

  return (
    <>
      <OverlayTrigger
        placement='bottom'
        overlay={<Tooltip id='sign-out-tooltip'>Sign Out</Tooltip>}
      >
        <Button
          onClick={() => setModalShow(true)}
          className={btnStyles.TransparentButton}
        >
          <FontAwesomeIcon
            className={styles.FontAwesomeIcon}
            icon={faPowerOff}
            size='xl'
          />
        </Button>
      </OverlayTrigger>

      <ModalWindow
        show={modalShow}
        onHide={() => setModalShow(false)}
        onConfirm={handleSignOut}
        title='Sign out?'
        body='Are you sure you want to sign out?'
      />
    </>
  );
};

export default SignOutButton;
