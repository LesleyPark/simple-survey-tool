import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const CreateSurvey = () => {
  const [question, setQuestion] = useState('');

  useEffect(() => {
    const listener = event => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        event.preventDefault();
        console.log(question)
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  });

  return (
    <div className="create-survey">
      <div className="helper-text">
        <h2>Questions will be rated from 1-10</h2>
      </div>
      <TextField 
        name="question"
        label="Enter question"
        onChange={(event) => setQuestion(event.target.value)}
        inputProps={{min: 0, style: { textAlign: 'center' }}}
        fullWidth
      />
      <div className="submit-spacer" />
      <Button
        className="submit-button"
        variant="outlined"
      >
        {'FINISH SURVEY'}
      </Button>
    </div>
  )};

export default CreateSurvey;