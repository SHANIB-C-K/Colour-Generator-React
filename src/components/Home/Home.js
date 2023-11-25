import React from "react";

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
    </>
  );
};

export default Home;
