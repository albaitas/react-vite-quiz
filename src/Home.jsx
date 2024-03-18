import { questionsData } from './data';
import { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import { playCorrectAnswer, playWrongAnswer, playQuizEnd } from './utils/playSound';

function Home() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(questionsData[index]);
  const [lock, setLock] = useState(true);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timerActive, setTimerActive] = useState(true);
  const [locked, setLocked] = useState(true);

  const next = useCallback(() => {
    setLock(true);
    setLocked(true);
    setSelectedOption(null);
    setTimerActive(true);
    setIndex((prevIndex) => prevIndex + 1);
    setData(questionsData[index + 1]);
  }, [setLock, setSelectedOption, setTimerActive, index]);

  const handleOptionClick = (value) => {
    if (lock) {
      setSelectedOption(value);
      setLock(false);
      setTimerActive(false);
      setLocked(false);
      if (data.ans === value) {
        playCorrectAnswer();
        setScore((prev) => prev + 1);
      } else {
        playWrongAnswer();
      }
    }
  };

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
            onClick={() => handleOptionClick(i)}
          >
            {option}
          </li>
        ))}
      </ul>
      <button disabled={locked} onClick={next}>
        Next
      </button>
    </>
  );
}

export default Home;
