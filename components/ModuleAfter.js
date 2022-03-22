import { useState } from 'react';


const HereYouGo = () => 'Greetings!';

console.log(HereYouGo());

const ModuleAfter = () => {
  let imgPath = 'https://hacker.org.tw/img/';
  imgPath += 'hackers-logo.svg';

  const [height, setHeight] = useState(3 * new Date().getSeconds() + 1);
  const updateHeight = () => setHeight(height => height + 10);

  const containerStyle = {
    display: 'flex',
    margin: '20px',
    padding: '10px',
    justifyContent: 'center',
    background: `#c${height % 100}10a`,
    width: '70%',
    border: '2px solid',
    borderRadius: '20px',
  };

  return (
    <div style={containerStyle}>
      <div>
        <img
          style={{ height: `${height}px` }}
          src={imgPath}
        />
      </div>
      <button style={{ margin: '10px', height: '30px' }} onClick={updateHeight}>
        UPDATE {height}
      </button>
    </div >
  );
};

export default ModuleAfter;
