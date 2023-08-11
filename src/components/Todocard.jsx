import todocardSCSS from "./styles/Todocard.module.scss";
import addSvg from "../assets/plus.svg";
import { useDispatch, useSelector } from "react-redux";
import { setListCard, setListTitle, createCard } from "../redux/cards";
import { useEffect, useState } from "react";

export function Todocard({ setVisible, list }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const { listcard, listtitle } = useSelector((state) => state.card);

  // function handleClick(){
  //     console.log(listcard)
  // }
  useEffect(() => {
    console.log(listtitle[0]);
  }, [listtitle]);

  return (
    <div className={todocardSCSS.card}>
      <input
        type="text"
        placeholder="Add Todo"
        className={todocardSCSS.card__title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <img
        src={addSvg}
        alt="add"
        className={todocardSCSS.card__addIcon}
        onClick={() => {
          dispatch(createCard({ title, description, listId: list.id }));
          // dispatch(
          //   setListCard([
          //     ...listcard,
          //     { title: title, description: description },
          //   ])
          // );
          // dispatch(setListTitle([{...listtitle[0],data: {title: title, description: description}}]));
          // console.log(listtitle[0])
          // setVisible(false);
          // handleClick();
        }}
      />
      <input
        type="text"
        placeholder="Add Todo Description"
        className={todocardSCSS.card__description}
        onChange={(e) => setDescription(e.target.value)}
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
        onClick={() => {
          // setVisible(true);
          // console.log()
        }}
      />

      <p className={todocardSCSS.card__description}>{card.description}</p>
    </div>
  );
}
