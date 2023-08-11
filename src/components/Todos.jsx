import todosSCSS from "./styles/Todos.module.scss";
import List from "./List.jsx";
import Todotitle from "./Todotitle";
import { useSelector } from "react-redux";
import AddList from "./AddList";

function Todos() {
  const { listtitle, lists } = useSelector((state) => state.card);
  console.log(lists);
  return (
    <>
      <p className={todosSCSS.para}> section</p>

      <div className={todosSCSS.section__container}>
        <div className={todosSCSS.section__container_todos}>
          {lists.map((list) => (
            <List key={list.id} list={list} />
          ))}
          <AddList />

          {/* <List />
          {listtitle.map((each, key) => (
            <List key={key} />
          ))} */}
        </div>
        <div className={todosSCSS.section__container_edit}>edit toto</div>
      </div>
    </>
  );
}

export default Todos;
