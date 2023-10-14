import React, { useState } from 'react';

function WordCounter()
{
  const [text, setText] = useState('');

  function handleChange(event)
  {
    setText(event.target.value);    //updates the text state variable whenever input is given
  }

  function countWords()
  {
    if (text.trim() === '')
    {
      return 0;
    }
    return text.trim().split(/\s+/).length;
  }

  return (
    <div className="container">
      <h1 className="heading">Responsive Paragraph Word Counter</h1>
      <div className="textarea-container">
        <textarea
          className="textarea"
          rows="5"
          cols = "20"
          value={text}
          onChange={handleChange}
          placeholder='Enter the text here'
        />
      </div>
      <p className="word-count">Word count: {countWords()}</p>
    </div>
  );
}

export default WordCounter;