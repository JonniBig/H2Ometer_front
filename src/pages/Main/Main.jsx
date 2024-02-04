import React, { useState, useEffect } from 'react';
import { Loader, Welcome } from 'components';
import { LoaderStyledMain, StyledMainPageBackgroun } from './Main.styled';
import { useSelector } from 'react-redux';

const Main = () => {
  const [showLoader, setShowLoader] = useState(true);

  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  useEffect(() => {
    const loadData = async () => {
      setShowLoader(false);
    };
    loadData();
  }, []);

  return (
    <StyledMainPageBackgroun
      className={isDarkMode ? 'dark-mode' : 'light-mode'}
    >
      {showLoader ? (
        <LoaderStyledMain>
          <Loader />
        </LoaderStyledMain>
      ) : (
        <Welcome />
      )}
    </StyledMainPageBackgroun>
  );
};

export default Main;
