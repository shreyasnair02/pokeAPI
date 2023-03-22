import React from "react";
import "./card.scss";
import TypeCard from "./TypeCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Card(props) {
  const navigate = useNavigate();
  return (
    <motion.div
      onClick={() => {
        navigate("/" + (props.arr.id + 1));
      }}
      className={"card__" + props.arr.pokemon_data.types[0].type.name + " card"}
      layout
    >
      <div className="card__details">
        <div className="card__details__info">
          <span className="card__details__id">#{props.arr.id + 1}</span>
          <span className="card__details__name">{props.arr.name}</span>
          <div className="card__details__types">
            {props.arr.pokemon_data.types.map((type, i) => {
              return <TypeCard type={type} layoutId={i} key={i}></TypeCard>;
            })}
          </div>
        </div>
      </div>
      <div className="card__images">
        <img src="/assets/Icons/pokeball.svg" alt="" height={170} />
        <img
          className="poke"
          src={
            props.arr.pokemon_data.sprites.other["official-artwork"]
              .front_default
          }
          alt=""
          width={"200px"}
        />
      </div>
    </motion.div>
  );
}

export default Card;
