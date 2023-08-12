import todosSCSS from "./styles/Todos.module.scss";
import List from "./List.jsx";
import Todotitle from "./Todotitle";
import { useSelector } from "react-redux";
import AddList from "./AddList";
import EditTodo from "./EditTodo";
import { useState } from "react";

function Todos() {
  const { lists } = useSelector((state) => state.card);

  // Lifted states for edit!!!
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titlePlaceholder, setTitlePlaceholder] = useState("");
  const [descriptionPlaceholder, setDescriptionPlaceholder] = useState("");

  // console.log(title, description);
  return (
    <>
      <p className={todosSCSS.para}>Section</p>

      <div className={todosSCSS.section__container}>
        <div className={todosSCSS.section__container_todos}>
          {lists.map((list, index) => (
            <div className={todosSCSS.section__container_eachList} key={index}>
              <List
                key={list.id}
                list={list}
                title={title}
                description={description}
                setTitlePlaceholder={setTitlePlaceholder}
                setDescriptionPlaceholder={setDescriptionPlaceholder}
              />
            </div>
          ))}
          <AddList />
        </div>
        <div className={todosSCSS.section__container_edit}>
          <EditTodo
            setTitle={setTitle}
            setDescription={setDescription}
            title={title}
            description={description}
            titlePlaceholder={titlePlaceholder}
            descriptionPlaceholder={descriptionPlaceholder}
          />
        </div>
      </div>
    </>
  );
}

export default Todos;
