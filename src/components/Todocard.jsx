import todocardSCSS from "./styles/Todocard.module.scss";
import addSvg from "../assets/plus.svg";
import { useDispatch, useSelector } from "react-redux";
import { createCard } from "../redux/cards";
import { useEffect, useState } from "react";
import { useRef } from "react";

export function Todocard({ list }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const inputTitle = useRef();
  const inputDescription = useRef();

  function handleClick() {
    setTitle("");
    setDescription("");
    inputTitle.current.value = "";
    inputDescription.current.value = "";
  }

  return (
    <div className={todocardSCSS.card}>
      <input
        type="text"
        placeholder="Add Todo"
        className={todocardSCSS.card__title}
        onChange={(e) => setTitle(e.target.value)}
        ref={inputTitle}
      />
      <img
        src={addSvg}
        alt="add"
        className={todocardSCSS.card__addIcon}
        onClick={() => {
          dispatch(createCard({ title, description, listId: list.id }));
          handleClick();
        }}
      />
      <input
        type="text"
        placeholder="Add Todo Description"
        className={todocardSCSS.card__description}
        onChange={(e) => setDescription(e.target.value)}
        ref={inputDescription}
      />
    </div>
  );
}

export function Card({ title, description, setVisible, card }) {
  return (
    <div className={todocardSCSS.card}>
      <p className={todocardSCSS.card__title}>{card.title}</p>

      <img
        src={addSvg}
        alt="add"
        className={todocardSCSS.card__addIcon}
        onClick={() => {}}
      />

      <p className={todocardSCSS.card__description}>{card.description}</p>
    </div>
  );
}
