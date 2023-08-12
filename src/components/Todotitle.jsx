import todotitleSCSS from "./styles/Todotitle.module.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
          setTitle(e.target.value);
        }}
      />
    </div>
  );
}
