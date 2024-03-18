import { questionsData } from './data';
import { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';

function Home() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(questionsData[index]);
  return (
    <>
      <h1>Quiz App</h1>

      <ul>
        {data.options.map((option, i) => (
          <li key={i}>{option}</li>
        ))}
      </ul>
    </>
  );
}

export default Home;
