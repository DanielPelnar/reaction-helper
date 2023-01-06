import React, { useEffect, useState } from 'react';
import './index.css';

// (event.metaKey || event.ctrlKey)
// (event.key === 'Ctrl' || event.key === 'Meta')
const list = ["TARGET", "CASTING", "CC", "FOCUS"];

function App() {
  const [action, setAction] = useState('');
  const [target, setTarget] = useState("Beginning in 5 seconds...");

  useEffect(() => {
    const interval = setInterval(() => {
      const index = Math.floor(Math.random() * list.length);
      setAction(list[index]);
      setTarget(Math.floor(Math.random() * 3) + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   const handleWheel = (event) => {
  //     if (event.metaKey || event.ctrlKey) {
  //       if (event.deltaY < 0) {
  //         document.body.style.backgroundColor = 'red';
  //       } else if (event.deltaY > 0) {
  //         document.body.style.backgroundColor = 'blue';
  //       }
  //     }
  //   };

  //   document.addEventListener('wheel', handleWheel);

  //   return () => {
  //     document.removeEventListener('wheel', handleWheel);
  //   };
  // }, []);

  // Set the overflow property to 'hidden' to prevent the page from scrolling
  document.documentElement.style.overflow = 'hidden';

  return (
      <div className="center">
        <div className="arena123_target">{target}</div>
        <div className="action">{action}</div>
      </div>
  );

}

export default App;
