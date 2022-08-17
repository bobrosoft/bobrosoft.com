import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {MainPage} from '../MainPage/MainPage';
import {StyledApp} from './StyledApp';


const App: React.FC = () => {
  return (
    <StyledApp>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </StyledApp>
  );
};

export default App;
