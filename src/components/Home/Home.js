import React from "react";
import SingleColor from "../SingleColour/SingleColor";

const Home = () => {
  return (
    <>
      <section className="container">
        <h3>Colour Generator</h3>
        <form>
          <input type="text" placeholder="#f15025"></input>
          <button className="btn">Submit</button>
        </form>
      </section>

      <section className="color">
        <SingleColor />
      </section>
    </>
  );
};

export default Home;
