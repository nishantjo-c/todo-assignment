import todotitleSCSS from "./styles/Todotitle.module.scss";
import addSvg from "../assets/plus.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createList } from "../redux/cards";
import { useRef } from "react";

export default function AddList() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const { lists } = useSelector((state) => state.card);
  const titleRef = useRef();

  function handleClick() {
    console.log(title);
    dispatch(createList(title));
    setTitle("");
    titleRef.current.value = "";
  }

  return (
    <div className={todotitleSCSS.listcontainer}>
      <input
        type="text"
        className={todotitleSCSS.listcontainer__addTodo}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        ref={titleRef}
      />

      <img
        src={addSvg}
        alt="add"
        className={todotitleSCSS.listcontainer__addIcon}
        type="button"
        onClick={(e) => {
          handleClick(e);
        }}
      />
    </div>
  );
}
