import React from 'react';

interface WordLimitProps {
  text: string;
  limit: number;
}

const WordLimitComponent: React.FC<WordLimitProps> = ({ text, limit }) => {
  const words = text.split(' ');
  const truncatedText = words.slice(0, limit).join(' ');
  const isTruncated = words.length > limit;

  return (
    <div>
      <p>{isTruncated ? truncatedText + '...' : text}</p>
    </div>
  );
}

export default WordLimitComponent;
