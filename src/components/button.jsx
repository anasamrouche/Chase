import { useState } from 'react';

export default function Button(props) {
        const {active, setActive, count, setCount, setReset} = props;
        const [position, setPosition] = useState({
        top: Math.random() * 100,
        left: Math.random() * 100,
    });

    const Click = () => {
        setReset(true);
        if (count < 2 && !active) {
            setActive(true);
        }
        if (count === 2) {
            setActive(false);
        }
        console.log(active);
        setCount(a => a + 1);
        console.log(count);
        setPosition({
        top: Math.random() * 100,
        left: Math.random() * 100,
        });
    };

  return (
    <div
      style={{
        position: "absolute",
        top: `${position.top}vh`,
        left: `${position.left}vw`,
      }}
    >
      <label>Click to chase :</label>
      <input type="button" value="Click !" onClick={Click} />
    </div>
  );
}