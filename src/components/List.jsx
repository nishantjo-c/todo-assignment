import listSCSS from "./styles/List.module.scss";
import { Todocard } from "./Todocard";
import Todotitle from "./Todotitle";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setListCard, setListTitle } from "../redux/cards";
import { Card } from "./Todocard";

function List({ list }) {
  const { listcard, listtitle } = useSelector((state) => state.card);
  // console.log(listcard)
  const dispatch = useDispatch();

  // console.log(listtitle)

  return (
    <div className={listSCSS.wrapper}>
      <div className={listSCSS.wrapper__column}>
        <Todotitle list={list} />
      </div>
      <Todocard list={list} />
      {list.listcards.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </div>
  );
}

export default List;
