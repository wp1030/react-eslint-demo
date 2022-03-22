/* eslint-disable */
import { useState } from 'react';

function HereYouGo() {
  return "Greetings!"
}

console.log(HereYouGo())

const ModuleBefore = () => {
  var imgPath = "https://hacker.org.tw/img/";
  imgPath += 'hackers-logo.svg'

  let [height, setHeight] = useState(3 * new Date().getSeconds() + 1)
  let updateHeight = () => setHeight(height => height + 10)

  var containerStyle = {
    display: 'flex',
    margin: '20px',
    padding: '10px',
    justifyContent: 'center',
    background: "#c" + height % 100 + "10a",
    width: '70%',
    border: '2px solid',
    borderRadius: '20px'
  }

  return (
    <div style={containerStyle}>
      <div>
        <img
          style={{ height: height + 'px' }}
          src={imgPath}
        />
      </div>
      <button style={{ margin: '10px', height: '30px' }} onClick={updateHeight}>
        UPDATE {height}
      </button>
    </div >
  );
};

export default ModuleBefore;
