import { useState, useEffect } from 'react';
import { getCookie, setCookie } from './../lib/cookies';

export default function useVisitorCount(): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let c = parseInt(localStorage.getItem('visitorCount') || '0', 10) || 0;
    if (!getCookie('hasVisited')) {
      c += 1;
      localStorage.setItem('visitorCount', c.toString());
      setCookie('hasVisited', 'true', 1);
    }
    setCount(c);
  }, []);

  return count;
}
