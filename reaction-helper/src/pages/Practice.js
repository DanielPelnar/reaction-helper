import React, { useEffect, useState } from "react";

const Practice = ({ selectedOptions, selectTime }) => {
  const [action, setAction] = useState("**Loading...");

  useEffect(() => {
    const interval = setInterval(() => {
      let index = Math.floor(Math.random() * selectedOptions.length);

      // if the same like last time, randomly choose again (20 tries is enough even for small selection):
      for (let i = 0; i < 20; i++) {
        if (selectedOptions[index] === action) {
          index = Math.floor(Math.random() * selectedOptions.length);
        }
      }

      setAction(selectedOptions[index]);
      //setTarget(Math.floor(Math.random() * 3) + 1);
    }, selectTime);
    return () => clearInterval(interval);
  });

  // Set the overflow property to 'hidden' to prevent the page from scrolling
  document.documentElement.style.overflow = "hidden";

  // TODO:
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

  // useEffect(() => {
  //   const handleMousewheel = (event) => {
  //     if (event.deltaY > 0) {
  //       // console.log('Scrolling down');
  //       if (event.metaKey || event.ctrlKey) {
  //         console.log('Scrolling down + holding CTRL');
  //       }
  //     } else if (event.deltaY < 0) {
  //       // console.log('Scrolling up');
  //       if (event.metaKey || event.ctrlKey) {
  //         console.log('Scrolling up + holding CTRL');
  //       }
  //     }
  //   };

  //   window.addEventListener('mousewheel', handleMousewheel);

  //   // Return a cleanup function that removes the event listener
  //   return () => {
  //     window.removeEventListener('mousewheel', handleMousewheel);
  //   };
  // }, []);

  return (
    <div className="center">
      <div className="arena123_target">{action.slice(0, 2)}</div>
      <div className="action">{action.slice(2)}</div>
    </div>
  );
};

export default Practice;
