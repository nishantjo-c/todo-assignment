import listSCSS from "./styles/List.module.scss";
import { Todocard } from "./Todocard";
import Todotitle from "./Todotitle";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "./Todocard";

function List({
  list,
  title,
  description,
  setTitlePlaceholder,
  setDescriptionPlaceholder,
}) {
  const dispatch = useDispatch();
  // console.log(title, description);

  return (
    <div className={listSCSS.wrapper}>
      <div className={listSCSS.wrapper__column}>
        <Todotitle list={list} />
      </div>

      <div className={listSCSS.wrapper__row}>
        <Todocard list={list} />
        {list.listcards.map((card) => {
          return (
            <Card
              key={card.id}
              card={card}
              list={list}
              title={title}
              description={description}
              setTitlePlaceholder={setTitlePlaceholder}
              setDescriptionPlaceholder={setDescriptionPlaceholder}
            />
          );
        })}
      </div>
    </div>
  );
}

export default List;
