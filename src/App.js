import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';
import Alert from './components/Alert';
// import About from './components/About';

function App() {
  const [mode, setmode] = useState("light");
  const [colorState, setColorState] = useState("white");
  const [alert, setAlert] = useState(null);

  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type
    })
  }
  function toggleMode() {
    if (mode === "light") {
      setmode('dark');
      document.body.style.backgroundColor = " rgb(16, 32, 56)	";
      showAlert("dark mode has enabled", " success")
      setColorState("rgb(29, 41, 59")
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode is enabled", " success");
      setColorState("white")
    }
  }

    return (<>

      <Navbar title="Text utils" aboutext="About TextUtils" toggleMode={toggleMode} mode={mode} home="Home" />
      <Alert alert="This is an alert" colorState={colorState} />
      <div className="container my-3">
        <Textforms heading="Enter the Text to Analyze" mode={mode} />
        {/* <About/> */}
      </div>
    </>)
  }
  export default App;
