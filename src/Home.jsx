import { questionsData } from './data';
import { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import { playCorrectAnswer, playWrongAnswer, playQuizEnd } from './utils/playSound';
import { formatTime } from './utils/formatTime';

function Home() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(questionsData[index]);
  const [lock, setLock] = useState(true);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timerActive, setTimerActive] = useState(true);
  const [locked, setLocked] = useState(true);
  const [result, setResult] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  const [progress, setProgress] = useState(0);

  const next = useCallback(() => {
    if (index === questionsData.length - 1) {
      playQuizEnd();
      setResult(true);
      return 0;
    }
    setLock(true);
    setLocked(true);
    setSelectedOption(null);
    setTimerActive(true);
    setProgress(0);
    setIndex((prevIndex) => prevIndex + 1);
    setData(questionsData[index + 1]);
  }, [setLock, setSelectedOption, setTimerActive, setProgress, index]);

  useEffect(() => {
    const incrementProgress = () => {
      if (timerActive && progress < 200) {
        setProgress((prevProgress) => prevProgress + 10);
        setTotalTime((prevTotalTime) => prevTotalTime + 1);
      }
    };
    const timeoutId = setTimeout(() => {
      incrementProgress();
      if (progress >= 200) {
        next();
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [progress, timerActive, next]);

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

  const reset = () => {
    setIndex(0);
    setData(questionsData[0]);
    setLock(true);
    setLocked(true);
    setResult(false);
    setSelectedOption(null);
    setScore(0);
    setProgress(0);
    setTimerActive(true);
    setTotalTime(0);
  };

  return (
    <div className='container'>
      {result ? (
        <div className='result'>
          <h1 className='multicolortext'>Congratulations!!!</h1>
          <h3>
            You Scored <span className='blue'>{score}</span> out of <span className='blue'>{questionsData.length}</span>
          </h3>
          <h3>
            Total Time <span className='blue'>{formatTime(totalTime)}</span>
          </h3>
          <button onClick={reset}>Reset</button>
        </div>
      ) : (
        <>
          <h1>Quiz App</h1>
          <progress value={progress} max='200'></progress>
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
          <div className='question-number'>
            {index + 1} of {questionsData.length} questions
          </div>
        </>
      )}
    </div>
  );
}
export default Home;
