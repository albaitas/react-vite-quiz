export const formatTime = (totalTime) => {
  const minutes = `${Math.floor(totalTime / 60)}`.padStart(2, '0');
  const seconds = `${totalTime - minutes * 60}`.padStart(2, '0');
  return `${minutes}:${seconds}`;
};
