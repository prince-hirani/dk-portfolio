import { Route, Routes } from "react-router-dom";
import Home from "./home";
import AboutMe from "./aboutMe";
import MyWork from "./myWork";
import ContactMe from "./contactMe";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about-me" element={<AboutMe />} />
      <Route path="my-work" element={<MyWork />} />
      <Route path="contact-me" element={<ContactMe />} />
    </Routes>
  );
}

export default Pages;
