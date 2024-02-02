import React, { useEffect, useState } from 'react';
import { LoaderStyledHome, StyledHomePage } from './Home.styled';




import { Calendar, TodayList, DailyNorma, DailyProgress } from 'components';






const Home = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setShowLoader(false);
    };
    loadData();
  }, []);
  return (
    <StyledHomePage>
      {showLoader ? (
        <LoaderStyledHome>
          <Loader />
        </LoaderStyledHome>
      ) : (
        <div className="conteiner">
          <div className="div1">
            <DailyNorma />
            <div className="bottle-image"></div>
            <DailyProgress />
          </div>
          <div className="div2">
            <TodayList />
            <Calendar />
          </div>
        </div>
      )}
    </StyledHomePage>
  );
};

export default Home;
