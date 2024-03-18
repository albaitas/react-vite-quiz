import { questionsData } from './data';
import { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';

function Home() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(questionsData[index]);
  const [lock, setLock] = useState(true);
  const [score, setScore] = useState(0);
  return (
    <>
      <h1>Quiz App</h1>
      <h3 className='blue'>
        {index + 1}. {data.question}
      </h3>
      <code>{data.example}</code>

      <ul>
        {data.options.map((option, i) => (
          <li key={i}>{option}</li>
        ))}
      </ul>
    </>
  );
}

export default Home;
