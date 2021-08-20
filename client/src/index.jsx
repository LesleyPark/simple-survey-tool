import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TopNav from './components/TopNav';
import CreateSurvey from './components/CreateSurvey';
import axios from 'axios';

const App = () => {
  const [startSurvey, setStartSurvey] = useState(false);
  const [title, setTitle] = useState('');
  const [submitCount, setSubmitCount] = useState(0);

  const handleSubmit = () => {
    setSubmitCount(submitCount + 1);
    if (title) {
      setStartSurvey(true);
      axios.post(title);
    }
  }

  return (
    <div className="app">
      <TopNav />
      { startSurvey ? 
        <CreateSurvey />
      : 
        <div className="start-survey">
          <TextField 
            name="title"
            label="Give your survey a name"
            onChange={(event) => setTitle(event.target.value)}
            inputProps={{min: 0, style: { textAlign: 'center' }}}
            error={title === '' && submitCount > 0}
            helperText={title === '' && submitCount > 0 ? 'Field cannot be empty' : ''}
            fullWidth
          />
          <div className="create-spacer" />
          <Button
            className="create-button"
            color="inherit"
            variant="contained"
            onClick={() => {
              handleSubmit();
            }}
          >
            {'CREATE SURVEY'}
          </Button>
        </div>
      }
      {/* <CreateSurvey /> */}
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'))
