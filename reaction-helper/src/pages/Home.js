import { Link } from "react-router-dom";
import React from "react";
import { GiSwordsEmblem, GiSpinningSword } from "react-icons/gi";

const Home = ({
  selectedOptions,
  setSelectedOptions,
  selectTime,
  setSelectTime,
}) => {
  const options = [
    "1 TARGET",
    "2 TARGET",
    "3 TARGET",
    "1 CC",
    "2 CC",
    "3 CC",
    "1 CASTING",
    "2 CASTING",
    "3 CASTING",
    "1 FOCUS",
    "2 FOCUS",
    "3 FOCUS",
    "P1 TARGET",
    "P2 TARGET",
    "P3 TARGET",
    "P1 DISPEL",
    "P2 DISPEL",
    "P3 DISPEL",
  ];

  const handleChange = (e) => {
    const options = Array.from(e.target.selectedOptions).map((o) => o.value);
    setSelectedOptions(options);
  };

  // TODO: (user will be allowed to set up their own keybinding to practice)
  //// Test :
  // function getKeyCombination(event) {
  //     // Use the event object to build the key combination string
  //     let combination = '';
  //     if (event.location === 3) {
  //       // If the key is on the numeric keypad, add "Num Lock + " to the combination
  //       combination += 'Num Lock + ';
  //     }
  //     if (event.shiftKey) {
  //       combination += 'SHIFT + ';
  //     }
  //     if (event.ctrlKey) {
  //       combination += 'CTRL + ';
  //     }
  //     if (event.altKey) {
  //       combination += 'ALT + ';
  //     }
  //     if (event.type === 'wheel') {
  //       // For mouse wheel events, add the direction of the wheel scroll to the combination
  //       if (event.deltaY < 0) {
  //         combination += 'mouse wheel up + ';
  //       } else if (event.deltaY > 0) {
  //         combination += 'mouse wheel down + ';
  //       }
  //     } else if (event.type === 'mousedown' && event.which === 2) {
  //       // For mouse down events with the middle mouse button, add "mouse wheel click" to the combination
  //       combination += 'mouse wheel click + ';
  //     } else {
  //       // For other events, add the key that was pressed to the combination
  //       combination += event.key;
  //     }
  //     console.log(combination);
  //     return combination;
  //   }
  //
  // const [shortcut, setShortcut] = useState('');

  // const handleKeyDown = (event) => {
  //   // Prevent the default behavior of the key combination
  //   event.preventDefault();

  //   // Get the key combination the user pressed
  //   const combination = getKeyCombination(event);
  //   // Update the state with the key combination
  //   setShortcut(combination);
  // }

  // const handleWheel = (event) => {
  //   // Prevent the default behavior of the mouse wheel event
  //   event.preventDefault();

  //   // Get the key combination the user pressed
  //   const combination = getKeyCombination(event);
  //   // Update the state with the key combination
  //   setShortcut(combination);
  // }

  // const handleMouseDown = (event) => {
  //   // Prevent the default behavior of the mouse down event
  //   event.preventDefault();

  //   // If the event is a mouse wheel click, get the key combination the user pressed
  //   if (event.which === 2) {
  //     const combination = getKeyCombination(event);
  //     // Update the state with the key combination
  //     setShortcut(combination);
  //   }
  // }

  const handleTimeChange = (event) => {
    setSelectTime(event.target.value);
  };

  return (
    <div className="home-page-center">
      <h1>
        Practice Keybinds for World of Warcraft Arena <GiSwordsEmblem />
      </h1>
      <div className="text">
        This is a tool for practicing arena keybinds in World of Warcraft. It
        can be challenging to get used to using arena-specific keybinds in the
        fast-paced and chaotic environment of arena combat. Practicing them at
        your own pace can be a good way to build muscle memory and improve your
        reaction times. It's also helpful that you can choose the speed at which
        you practice, as this can allow you to gradually increase the difficulty
        and better prepare yourself for real matches. Simply choose the speed
        and select what you want to practice (hold CTRL to select more options).
        If you have a question or would like to provide feedback, visit{" "}
        <a href="https://www.reddit.com/r/worldofpvp/comments/104zpds/there_are_just_not_enough_players_wanting_to_play/">
          this post
        </a>{" "}
        on the World of Warcraft PVP subreddit (r/worldofpvp).
      </div>

      <div className="text2">
        <form>
          <label>
            Pick the speed of the practice:
            <select
              className="select2"
              value={selectTime}
              onChange={handleTimeChange}
            >
              <option value="1000">1 second</option>
              <option value="2000">2 seconds</option>
              <option value="3000">3 seconds</option>
              <option value="4000">4 seconds</option>
              <option value="5000">5 seconds</option>
            </select>
          </label>
        </form>
      </div>

      {/* <h3>Explanation of practice options</h3>
        <ul>
            <li>1 TARGET: Practise your keybind which allows you to target arena enemy 1</li>
            <li>2 TARGET: Practise your keybind which allows you to target arena enemy 2</li>
            <li>3 TARGET: Practise your keybind which allows you to target arena enemy 3</li>
            <li>1 CC: Practise your keybind which allows you to CC arena enemy 1</li>
            <li>2 CC: Practise your keybind which allows you to CC arena enemy 2</li>
            <li>3 CC: Practise your keybind which allows you to CC arena enemy 3</li>
            <li>1 CASTING: Practise your keybind which allows you to interrupt cast of arena enemy 1</li>
            <li>2 CASTING: Practise your keybind which allows you to interrupt cast of arena enemy 2</li>
            <li>3 CASTING: Practise your keybind which allows you to interrupt cast of arena enemy 3</li>
            <li>1 FOCUS: Practise your keybind which allows you to make arena enemy 1 your focus</li>
            <li>2 FOCUS: Practise your keybind which allows you to make arena enemy 2 your focus</li>
            <li>3 FOCUS: Practise your keybind which allows you to make arena enemy 3 your focus</li>
            <li>P1 TARGET: Practise your keybind which allows you to make party player 1 (self) your target</li>
            <li>P2 TARGET: Practise your keybind which allows you to make party player 2 your target</li>
            <li>P3 TARGET: Practise your keybind which allows you to make party player 3 your target</li>
            <li>P1 DISPEL: Practise your keybind which allows you to dispel party player 1 (self)</li>
            <li>P2 DISPEL: Practise your keybind which allows you to dispel party player 2</li>
            <li>P3 DISPEL: Practise your keybind which allows you to dispel party player 3</li>
        </ul> */}

      <h3>Select what you want to practice (hold CTRL) and start</h3>

      <div className="div-container">
        <div className="div-rows">
          <select
            className="select1"
            multiple
            size={options.length}
            value={selectedOptions}
            onChange={handleChange}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="div-rows">
          <Link style={{ textDecoration: "none" }} to="/practice">
            <button
              disabled={selectedOptions.length === 0}
              title={
                "Before you can start your practice, you need to first select at least one of the options above."
              }
            >
              Start Your Practice <GiSpinningSword />
            </button>
          </Link>
        </div>
      </div>

      {/* <p className="text">You selected: {selectedOptions.join(', ')}</p> */}

      {/* TODO: */}
      {/* <button
      onClick={() => {
        // When the button is clicked, add event listeners for the keydown, wheel, and mousedown events
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('wheel', handleWheel);
        window.addEventListener('mousedown', handleMouseDown);
      }}
      onBlur={() => {
        // When the button loses focus, remove the event listeners
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('wheel', handleWheel);
        window.removeEventListener('mousedown', handleMouseDown);
      }}
    >
      {shortcut ? `Shortcut: ${shortcut}` : 'Click to set shortcut'}
    </button> */}

      {/* {selectedOptions.length === 0 ? (
      <div className="text">...</div>
    ) : (
        <Link to="/practice"><button disabled={selectedOptions.length === 0}>Start Your Practice</button></Link>
    )} */}


    
    </div>
  );
};

export default Home;
