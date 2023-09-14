import React from "react";
import EzStoryUi from "../mainUi/EzStoryUi";
import EzDayUi from '../mainUi/EzDayUi'
import '../mainUi/mainUi.css';

const MainPage = () => {

  return (
    <div className="main-page">
      <EzDayUi />
      <EzStoryUi />
    </div>
  );
};

export default MainPage;
