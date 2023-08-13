import todocardSCSS from "./styles/Todocard.module.scss";
import addSvg from "../assets/plus.svg";
import editSvg from "../assets/editSvg.svg";
import profileSvg from "../assets/profileSvg.svg";
import trashSvg from "../assets/trashSvg.svg";
import { useDispatch, useSelector } from "react-redux";
import { createCard, setCardID, setListID, deleteCard } from "../redux/cards";
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

export function Card({
  title,
  description,
  setVisible,
  card,
  list,
  setTitlePlaceholder,
  setDescriptionPlaceholder,
}) {
  const { cardID, listID } = useSelector((state) => state.card);

  const dispatch = useDispatch();
  // console.log(title, description);

  return (
    <div className={todocardSCSS.card}>
      <div className={todocardSCSS.card__flexedheader}>
        <img src={profileSvg} alt="add" />
        <p className={todocardSCSS.card__title}>{card.title}</p>
        <img
          src={trashSvg}
          alt="trash"
          className={todocardSCSS.card__trashIcon}
          onClick={() => {
            // console.log(card.id, " ", list.id);
            dispatch(setCardID(card.id));
            dispatch(setListID(list.id));
            dispatch(deleteCard());
          }}
        />

        <img
          src={editSvg}
          alt="add"
          className={todocardSCSS.card__editIcon}
          onClick={() => {
            dispatch(setCardID(card.id));
            dispatch(setListID(list.id));
            setTitlePlaceholder(card.title);
            setDescriptionPlaceholder(card.description);
          }}
        />
      </div>

      <p className={todocardSCSS.card__description}>{card.description}</p>
    </div>
  );
}
