import React, { useState, useEffect } from 'react';
import { Loader, Welcome } from 'components';
import { LoaderStyledMain, StyledMainPageBackgroun } from './Main.styled';

const Main = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setShowLoader(false);
    };
    loadData();
  }, []);

  return (
    <StyledMainPageBackgroun>
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
