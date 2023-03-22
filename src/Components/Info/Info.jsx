import { useState } from "react";
import React from "react";
import "./Info.scss";
import { AnimatePresence, motion } from "framer-motion";
function Info({ pokeObj }) {
  const [toggleState, setToggleState] = useState(1);
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd(index) {
    if (touchStart - touchEnd > 150 && toggleState == 1) {
      // do your stuff here for left swipe
      console.log("move right");

      toggleTab(2);
      // moveSliderRight();
    }

    if (touchStart - touchEnd < -150 && toggleState == 2) {
      // do your stuff here for right swipe
      console.log("move left");
      toggleTab(1);
      // moveSliderLeft();
    }
  }
  return (
    <div
      className="info"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="info__tabs">
        <div
          onClick={() => {
            toggleTab(1);
          }}
          className={toggleState == 1 ? "active-tabs" : ""}
        >
          About
        </div>
        <div
          onClick={() => {
            toggleTab(2);
          }}
          className={toggleState == 2 ? "active-tabs" : ""}
        >
          Stats
        </div>
      </div>

      <div className="info__info">
        <AnimatePresence mode="wait">
          {toggleState == 1 ? (
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              className={
                toggleState == 1 ? "info__about active-content" : "info__about"
              }
            >
              <div>
                <h1
                  style={{
                    color:
                      "var(--type-" +
                      pokeObj.pokemon_data.types[0].type.name +
                      ")",
                  }}
                >
                  Pokédex Data
                </h1>
                <div>
                  <span className="key">Species:</span>
                  <span>{pokeObj.name}</span>
                </div>
                <div>
                  <span className="key">Base XP:</span>
                  <span>{pokeObj.pokemon_data.base_experience}</span>
                </div>
                <div>
                  <span className="key">Height:</span>
                  <span style={{ textTransform: "none" }}>
                    {pokeObj.pokemon_data.height < 10
                      ? "0." + pokeObj.pokemon_data.height
                      : (pokeObj.pokemon_data.height + "").split("")[0] +
                        "." +
                        (pokeObj.pokemon_data.height + "").split("")[1]}
                    m
                  </span>
                </div>
                <div>
                  <span className="key">Weight:</span>
                  <span style={{ textTransform: "none" }}>
                    {pokeObj.pokemon_data.weight < 10
                      ? "0." + pokeObj.pokemon_data.weight
                      : (pokeObj.pokemon_data.weight + "").split("")[0] +
                        "." +
                        (pokeObj.pokemon_data.weight + "").split("")[1]}
                    kg
                  </span>
                </div>
                <div>
                  <span className="key">Abilities:</span>
                  <span>
                    {pokeObj.pokemon_data.abilities.map((ar, i) => {
                      if (i == pokeObj.pokemon_data.abilities.length - 1) {
                        return <span key={i}>{ar.ability.name}</span>;
                      } else {
                        return <span key={i}>{ar.ability.name + ","}</span>;
                      }
                    })}
                  </span>
                </div>
              </div>
            </motion.div>
          ) : toggleState == 2 ? (
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 200, opacity: 0 }}
              key={4321}
              className={
                toggleState == 2 ? "info__stats active-content" : "info__stats"
              }
            >
              <div className="info__stats__stats">
                {pokeObj.pokemon_data.stats.map((ar, i) => {
                  return (
                    <div className="info__stats__stats__box" key={i}>
                      <span className="key">
                        {ar.stat.name.includes("special")
                          ? "Sp-" + ar.stat.name.split("-")[1]
                          : ar.stat.name}
                      </span>
                      <span className="statAmt">{ar.base_stat}</span>
                      <div className="statfillTotal">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: ar.base_stat + "%" }}
                          transition={{ delay: 0.1 * i }}
                          className="statfill"
                          style={{
                            backgroundColor:
                              "var(--type-" +
                              pokeObj.pokemon_data.types[0].type.name +
                              ")",
                            height: "50%",
                          }}
                        ></motion.div>
                      </div>
                      <span
                        className="statTotal"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        100
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            ""
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Info;
