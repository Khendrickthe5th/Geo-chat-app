import './App.css';
import Main from "./pages/Main"
import Modal from "./pages/Modal"
import React, {useState} from "react"
import {Routes, Route, BrowserRouter as Router} from "react-router-dom"


function App() {
  // const [ChatContactsVisible, setChatContactsVisible] = useState(true)
  const [username, setUsername] = useState(null)

  // const toggleChatContactsVisible = ()=>{
  //   setChatContactsVisible(!ChatContactsVisible)
  // }

  return (
    <Router>
    <section className="App">
    {/* <Modal setUsername={setUsername}/> */}
      <Routes>
      <Route path="/" element={<Modal setUsername={setUsername}/>} />
      <Route path="main" element={<Main username={username} />} />
      </Routes>
    </section>
    </Router>
  );
}

export default App;
