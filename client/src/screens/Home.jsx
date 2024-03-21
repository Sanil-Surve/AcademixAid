import Navbar from "../components/Navbar";

const Home = () => {
  const user = "Sanil Surve" // `${firstName}`
  return (
    <>
       <Navbar user={user} />
    </>
  )
}

export default Home
