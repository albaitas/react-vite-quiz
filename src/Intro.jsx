function Intro({ onClick }) {
  return (
    <div className='container'>
      <h1 className='center'>Instruction</h1>
      <p className='text'>In this quiz you have to answer 100 questions out of which 35 questions are practical.</p>
      <p className='text'>
        You will have 20 seconds for each question. If you do not answer the question within the given time, your answer will be considered incorrect and the next question will be
        displayed automatically.
      </p>
      <button onClick={onClick}>Start</button>
    </div>
  );
}
export default Intro;
