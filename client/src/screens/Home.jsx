import { useState } from "react";

import InputBar from "../components/InputBar";
import Navbar from "../components/Navbar";
import "../styles/Home.css";

const Home = () => {
  const [savedQuestion, setSavedQuestion] = useState([]);

  const handleSave = (question) => {
    //make api call to the server
    setSavedQuestion([...savedQuestion, question]);
  };

  return (
    <>
      <Navbar />
      <InputBar onSubmit={handleSave} />
      {savedQuestion.length > 0 && (
        <ul>
          {savedQuestion.map((question, index) => (
            <li key={index}>
              <p>{question}</p> <button>Get Answer</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;
