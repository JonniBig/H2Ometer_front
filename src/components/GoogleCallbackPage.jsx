import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react'

const GoogleCallbackPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const currentURL = window.location.href;

    const urlParams = new URLSearchParams(currentURL);

    const token = urlParams.get('token');

    if (token) {

      history.push('/');
    } else {
      console.error('Token is missing');
    }
  }, [dispatch, history]);

  return (
    <div>
     <p>authorization succes</p>
    </div>
  );
};

export default GoogleCallbackPage;
