import { useState } from "react";
import InputBar from "../components/InputBar";
import Navbar from "../components/Navbar";

const Home = () => {
  const user = `Sanil Surve` // `${firstName}`
  const [savedQuestion, setSavedQuestion] = useState('')

  const handleSave = (question) => {
      setSavedQuestion(question)
  }


  return (
    <>
       <Navbar user={user} />
       <InputBar onSubmit={handleSave}/>
       {savedQuestion && <p>{savedQuestion}</p>}
    </>
  )
}

export default Home
