import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Nav';
import Home from './components/pages/Home';
import Alert from './components/layout/Alert';
import User from './components/users/User';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import NotFound from './components/pages/NotFound';
import './App.css';
import React from 'react';

// Functional component
const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            {/*Pass title and icon props to Nav component if needed*/}
            <Navbar />
            <div className='container'>
              <Alert />
              <Routes>
                <Route exact path='/' element={<Home />}></Route>
                {/* Route for about page */}
                <Route exact path='/about' element={<About />} />
                {/* Route for user page that takes in user prop and getUser prop */}
                <Route path={`/user/:userName`} element={<User />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
              {/* Pass searchUsers, clearUsers and showClear props up from Search component */}
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
