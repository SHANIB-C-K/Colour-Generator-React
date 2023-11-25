import React, { useState } from "react";
import SingleColor from "../SingleColour/SingleColor";
import Values from "values.js";

const Home = () => {
  const [list, setList] = useState(new Values("#f15025").all(10));

  return (
    <>
      <section className="container">
        <h3>Colour Generator</h3>
        <form>
          <input type="text" placeholder="#f15025"></input>
          <button className="btn">Submit</button>
        </form>
      </section>

      <section className="colors">
        {list.map((color, index) => (
          <SingleColor
            key={index}
            {...color}
            index={index}
            hexColor={color.hex}
          />
        ))}
      </section>
    </>
  );
};

export default Home;
