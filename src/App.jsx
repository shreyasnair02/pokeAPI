import React from "react";
import pokemonData from "/src/data/Pokedata.js";
import Card from "./Components/Card/Card";
import "./index.scss";
import { FaSearchengin } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
function App() {
  const [origArr, setorigArr] = useState(pokemonData);
  const [query, setQuery] = useState("");
  const mobileView = window.innerWidth < 560 ? true : false;
  const filterdArr = origArr.filter((item) => {
    return item.name.toLowerCase().includes(query.toLowerCase());
  });
  return (
    <div className="page" style={{ marginTop: "25px" }}>
      <div className="page__title">
        <h1>Pokédex</h1>
      </div>
      <div className="page__search">
        <FaSearchengin size={30} strokeWidth="0.0001" className="searchIcon" />
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </div>
      <img
        src="/assets/Icons/pokeball.svg"
        alt=""
        style={{
          position: "fixed",
          filter: "opacity(3%)",
          left: "50%",
          top: "50%",
          width: mobileView ? "150%" : "50%",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
        }}
      />

      <motion.div className="wrapper">
        {filterdArr.map((ar, i) => {
          return <Card arr={ar} key={Number(ar.id)} id={i} />;
        })}
      </motion.div>
    </div>
  );
}

export default App;
