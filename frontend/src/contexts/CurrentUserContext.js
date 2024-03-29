// CREDIT: Code taken from Code Institute's 'Moments' walkthrough project
import React from 'react';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';
import { axiosReq, axiosRes } from '../api/axiosDefaults';
import {
  removeLocalStorageItems,
  shouldRefreshToken,
} from '../utils/dataUtils';

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    handleMount();
  }, []);

  useMemo(() => {
    axiosReq.interceptors.request.use(
      async (config) => {
        if (shouldRefreshToken()) {
          try {
            await axios.post('/dj-rest-auth/token/refresh/');
          } catch (err) {
            // console.log(err.request);
            setCurrentUser((prevCurrentUser) => {
              if (prevCurrentUser) {
                history.push('/signin');
              }
              return null;
            });
            removeLocalStorageItems();
            return config;
          }
        }
        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );

    axiosRes.interceptors.response.use(
      (response) => response,
      async (err) => {
        if (err?.response?.status === 401) {
          try {
            await axios.post('/dj-rest-auth/token/refresh/');
          } catch (err) {
            setCurrentUser((prevCurrentUser) => {
              if (prevCurrentUser) {
                history.push('/signin');
              }
              return null;
            });
            removeLocalStorageItems();
          }
          return axios(err.config);
        }
        return Promise.reject(err);
      }
    );
  }, [history]);

  const handleMount = async () => {
    try {
      const { data } = await axiosRes.get('dj-rest-auth/user/');
      setCurrentUser(data);
    } catch (err) {
      // console.log(err.request);
    }
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        {children}
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
};
