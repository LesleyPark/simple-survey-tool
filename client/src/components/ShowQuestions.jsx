import React, { useEffect, useState } from 'react';

const ShowQuestions = ( {allQuestions} ) => {
  return (
    <div className="questions-container">
      {allQuestions.map(question => {
        return (
          <div className="question">
            {question}
          </div>
        )}
      )}
    </div>
  )};

export default ShowQuestions;