import { useState } from "react";
import InputBar from "../components/InputBar";
import Navbar from "../components/Navbar";

const Home = ({ firstName }) => {
  const user = `${firstName}`; // `${firstName}`
  const [savedQuestion, setSavedQuestion] = useState([]);

  const handleSave = (question) => {
    // setSavedQuestion(question);
    setSavedQuestion([...savedQuestion, question]);
  };

  return (
    <>
      <Navbar user={user} />
      <InputBar onSubmit={handleSave} />
      {/* {savedQuestion && <p>{savedQuestion}</p>} */}
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
