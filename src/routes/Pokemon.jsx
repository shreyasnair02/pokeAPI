import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import pokemonData from "/src/data/Pokedata.js";
import "./Pokemon.scss";
import TypeCard from "/src/Components/Card/TypeCard";
import { IoChevronBackOutline } from "react-icons/io5";
import Info from "../Components/Info/Info";
import { useState } from "react";
function Pokemon() {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const pokeObj = pokemonData[Number(id) - 1];

  const [width, setWidth] = useState((80 / 100) * window.innerWidth);
  return (
    <div
      className={
        "card__" + pokeObj.pokemon_data.types[0].type.name + " pokemon_page"
      }
    >
      <IoChevronBackOutline
        onClick={() => navigate(-1)}
        size={60}
        color={"#eee"}
        className="srsva"
      />

      <h1
        className="hero__banner"
        style={{
          color:
            "var(--surface-" + pokeObj.pokemon_data.types[0].type.name + ")",
          // fontSize: width /5,
        }}
      >
        {pokeObj.name}
      </h1>
      <section className="hero">
        <div className="hero__card">
          <div className="hero__card__images">
            <img
              className="hero__card__images__hero_image"
              src={
                pokeObj.pokemon_data.sprites.other["official-artwork"]
                  .front_default
              }
            />

            <div className="hero__card__images__circle">
              <span
                style={{
                  background:
                    "var(--surface-" +
                    pokeObj.pokemon_data.types[0].type.name +
                    ")",
                }}
              ></span>
            </div>
          </div>
          <div className="hero__card__details">
            <span className=" card__details__id hero__card__details_id">
              {pokeObj.id + 1 < 10
                ? "#00" + (pokeObj.id + 1)
                : pokeObj.id + 1 < 100
                ? "#0" + (pokeObj.id + 1)
                : "#" + pokeObj.id + 1}
            </span>
            <span className=" card__details__name hero__card__details_name ">
              {pokeObj.name}
            </span>
            <div className=" card__details__types hero__card__types ">
              {pokeObj.pokemon_data.types.map((type, i) => {
                return <TypeCard type={type} key={i}></TypeCard>;
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <Info pokeObj={pokeObj} style={{ display: "flex" }}></Info>
      </section>
    </div>
  );
}

export default Pokemon;
