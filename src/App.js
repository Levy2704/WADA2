import "./styles/app.css";

import Navbar from "./components/Navbar.js";
import Cards from "./components/Cards.js";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Cards />
    </>
  );
}

export default App;
