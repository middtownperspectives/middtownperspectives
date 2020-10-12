import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

import HomePage from './pages/HomePage';
import ThesisPage from './pages/ThesisPage';
import ResumePage from './pages/ResumePage';
import PhotographyPage from './pages/PhotographyPage';
import DesignPage from './pages/DesignPage';
import DevelopmentPage from './pages/DevelopmentPage';
import PlaylistPage from './pages/PlaylistPage';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/middtownperspectives" component={HomePage} />
            <Route path="/middtownperspectives/thesis" component={ThesisPage} />
            <Route path="/middtownperspectives/resume" component={ResumePage} /> 
            <Route path="/middtownperspectives/photography" component={PhotographyPage} /> 
            <Route path="/middtownperspectives/design" component={DesignPage} /> 
            <Route path="/middtownperspectives/development" component={DevelopmentPage} /> 
            <Route path="/middtownperspectives/playlist" component={PlaylistPage} /> 
            <Route path="/middtownperspectives/about" component={AboutPage} /> 
            <Route component={NotFoundPage} />
          </Switch>
        </main> 
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
