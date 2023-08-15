import todotitleSCSS from "./styles/Todotitle.module.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteList, updateList } from "../redux/cards";
import trashSvg from "../assets/trashSvg.svg";

export default function Todotitle({ list }) {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const { listcards } = list;

  // console.log(listcards);

  return (
    <div className={todotitleSCSS.listcontainer}>
      <input
        type="text"
        placeholder={list.title}
        className={todotitleSCSS.listcontainer__addTodo}
        onChange={(e) => {
          // setTitle(e.target.value);
          dispatch(updateList({ title: e.target.value, id: list.id }));
        }}
      />
      <img
        src={trashSvg}
        alt="delete-title"
        className={todotitleSCSS.listcontainer__trashicon}
        onClick={() => dispatch(deleteList(list.id))}
      />
    </div>
  );
}
