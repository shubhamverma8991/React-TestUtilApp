import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { useState } from "react";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // Variable //
  let websiteName = "Soul's";
  // let welcomeAlert = "Welcome to Soul's Website";
  // ! Mode State and Use State
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      console.log("Mode right Now " + mode);
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      console.log("Mode right Now " + mode);
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  };

  // const colorSwitch = () => {
  //   setMode();
  // };
  // ! Alert State and UseState
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  //  it returns JSX
  return (
    <>
      <Router>
        <Navbar title={websiteName} mode={mode} switch={toggleMode} />
        <div className="container">
          <Alert alert={alert} />
        </div>
        <Routes>
          {/**
           * /users -- component 1
           * /users/about -- component 2
           */}
          <Route excat path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm heading={"To Study State"} mode={mode} showAlert={showAlert} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
