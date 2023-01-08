import { useState } from "react";
import "./App.css";
import Alert from "./Compnents/Alert";
import Navbar from "./Compnents/Navbar";
import Textform from "./Compnents/Textform";
import About from "./Compnents/About";
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(()=>{
      setAlert(null);
    },1500)
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been disabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been Enabled", "success");
      // document.title="TextUtils-Dark Mode"
    }
  };
  return (
    <>
        <Router>
      <Navbar
        title="TextUtils"
        abouttext="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about"
           element={<About mode={mode}/>}>
          </Route>
          <Route exact path="/"
        element={<Textform showAlert={showAlert} heading="TextUtils- Word Counter | Character Counter" mode={mode} />}>
          </Route>
        </Routes>
      </div>
        </Router>
    </>
  );
}

export default App;
