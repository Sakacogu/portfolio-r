import { useState, useEffect } from 'react';
import { getCookie, setCookie } from './../lib/cookies';

export default function useVisitorCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let c = parseInt(localStorage.getItem('visitorCount')||'0',10)||0;
    if (!getCookie('hasVisited')) {
      c++;
      localStorage.setItem('visitorCount', ''+c);
      setCookie('hasVisited','true',1);
    }
    setCount(c);
  },[]);

  return count;
}
