import { questionsData } from './data';
import { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';

function Home() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(questionsData[index]);
  const [lock, setLock] = useState(true);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timerActive, setTimerActive] = useState(true);

  return (
    <>
      <h1>Quiz App</h1>
      <h3 className='blue'>
        {index + 1}. {data.question}
      </h3>
      <code>{data.example}</code>

      <ul>
        {data.options.map((option, i) => (
          <li
            key={i}
            className={classNames({
              correct: i === data.ans && selectedOption !== null,
              wrong: i === selectedOption && i !== data.ans
            })}
          >
            {option}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
