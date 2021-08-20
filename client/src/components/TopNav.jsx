import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

const TopNav = () => (
  <div className="top-nav">
    <AppBar position="static">
      <Toolbar>
        <Button
          className="button"
          color="inherit"
          onClick={() => {
            window.location = '/results';
          }}
        >
          {'View Results'}
        </Button>
      </Toolbar>
    </AppBar>
  </div>
);
  
export default TopNav;