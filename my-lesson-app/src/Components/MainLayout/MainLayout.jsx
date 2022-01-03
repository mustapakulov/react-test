import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Section from "../Section/Section";

const MainLayout = () => {
  let arr = [1, "2", "react", "js"];

  return (
    <div>
      <Navbar />
      <Section />
      <Footer arr={arr} />
    </div>
  );
};

export default MainLayout;
