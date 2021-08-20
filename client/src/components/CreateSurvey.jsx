import React, { useEffect, useState } from 'react';
import ShowQuestions from './ShowQuestions'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const allQuestions = [];

const CreateSurvey = () => {
  const [question, setQuestion] = useState('');
  const [questionCount, setQuestionCount] = useState(0);

  const addQuestion = () => {
    setQuestionCount(questionCount + 1);
    if (question) {
      allQuestions.push(question)
      setQuestion('');
      setQuestionCount(0);
    }
  }

  const finishSurvey = () => {
    // axios.post(allQuestions)
    console.log(allQuestions)
  }

  useEffect(() => {
    const listener = event => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        event.preventDefault();
        addQuestion()
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  });

  return (
    <div className="survey-container">
      <div className="create-survey">
        <div className="helper-text">
          <h2>Questions will be rated from 1-10</h2>
        </div>
        <TextField 
          name="question"
          label="Add some questions"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          inputProps={{min: 0, style: { textAlign: 'center' }}}
          error={question === '' && questionCount > 0}
          helperText={question === '' && questionCount > 0 ? 'Field cannot be empty' : ''}
          fullWidth
        />
        <div className="submit-spacer" />
        <Button
          className="submit-button"
          variant="outlined"
          onClick={() => finishSurvey()}
        >
          {'FINISH SURVEY'}
        </Button>
      </div>
      <ShowQuestions allQuestions={allQuestions} />
    </div>
  )};

export default CreateSurvey;