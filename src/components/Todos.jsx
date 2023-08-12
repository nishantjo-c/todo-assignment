import todosSCSS from "./styles/Todos.module.scss";
import List from "./List.jsx";
import Todotitle from "./Todotitle";
import { useSelector } from "react-redux";
import AddList from "./AddList";

function Todos() {
  const { lists } = useSelector((state) => state.card);
  console.log(lists);
  return (
    <>
      <p className={todosSCSS.para}> section</p>

      <div className={todosSCSS.section__container}>
        <div className={todosSCSS.section__container_todos}>
          {lists.map((list, index) => (
            <div className={todosSCSS.section__container_eachList} key={index}>
              <List key={list.id} list={list} />
            </div>
          ))}
          <AddList />
        </div>
        <div className={todosSCSS.section__container_edit}>edit toto</div>
      </div>
    </>
  );
}

export default Todos;
