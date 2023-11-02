import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('Enter text');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChnage = (event) => {
    console.log('Handle on Change');
    setText(event.target.value);
  };

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChnage}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <p>Buttton Click Event: {text}</p>
    </div>
  );
}
