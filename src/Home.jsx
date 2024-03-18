import { questionsData } from './data';
import { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';

function Home() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(questionsData[index]);
  return <></>;
}

export default Home;
