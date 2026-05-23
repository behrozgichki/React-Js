import React, { useState } from 'react'

const App = () => {
    const [num , setNum] = useState(0)

    function changeCounter(feature) {
        if (feature === 'add') {
            setNum(num + 1)
            console.log('add' , num );
            
        }else{
            num > 0 ?
            setNum(num - 1) : null
            console.log('less' , num);
        
        }
    }
  const progress = Math.min((num / 100) * 100, 100);

  return (
    <div className="screen">

      <div className="bg-circle one"></div>
      <div className="bg-circle two"></div>

      <div className="card">

        <p className="label">SMART COUNTER</p>

        <div className="ring">
          <div
            className="fill"
            style={{
              background: `conic-gradient(
              #8b5cf6 ${progress}%,
              rgba(255,255,255,.08) ${progress}%
              )`,
            }}
          >
            <div className="center">

              <h1>{num}</h1>

              <span>LIVE VALUE</span>

            </div>
          </div>
        </div>

        <div className="controls">

          <button
            className="minus"
            onClick={() => changeCounter("less")}
          >
            −
          </button>

          <button
            className="plus"
            onClick={() => changeCounter("add")}
          >
            +
          </button>

        </div>

      </div>

    </div>
  );
}

export default App