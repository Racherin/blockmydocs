import logo from './logo.svg';
import './App.css';
import Landing from "./components/Landing"
import { Routes, Route, Link } from "react-router-dom";
import AddRecipient from "./components/AddRecipient"
import Nav from "./components/Nav"
import Verified from "./components/Verified";
import CreateProfile from "./components/CreateProfile"
import MyCerts from "./components/MyCerts"


function App() {
  return (
    <>
    <Nav />
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Landing />} />
        <Route path="/profile" element={<CreateProfile />} />
        <Route path="/mynetworks" element={<Landing />} />
        <Route path="/networks" element={<AddRecipient />} />
        <Route path="/mycerts" element={<MyCerts />} />

        <Route path="/QmSameHVVdL7UC926tYNxhoc3ViaYtaZiN71WwW9GD34p1" element={<Verified />} />

      </Routes>
      </>
  );
}

export default App;
