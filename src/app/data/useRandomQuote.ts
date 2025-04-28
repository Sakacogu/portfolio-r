import { useState, useEffect } from 'react';
import quotes from './../data/quotes';

export default function useRandomQuote(): [string, () => void] {
    const [idx, setIdx] = useState(() => Math.floor(Math.random() * quotes.length));
  
    useEffect(() => {
      setIdx(Math.floor(Math.random() * quotes.length));
    }, []);
  
    const next = () => setIdx(i => (i + 1) % quotes.length);
    return [quotes[idx], next];
  }