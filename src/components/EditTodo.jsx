import editTodoSCSS from "./styles/EditTodoSCSS.module.scss";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCard } from "../redux/cards";

export default function EditTodo({
  setTitle,
  setDescription,
  title,
  description,
  titlePlaceholder,
  descriptionPlaceholder,
}) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const { cardID, listID } = useSelector((state) => state.card);
  const dispatch = useDispatch();

  return (
    <>
      <h3 className={editTodoSCSS.form__title}>Edit Todo</h3>
      <form
        type="submit"
        className={editTodoSCSS.form__container}
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(updateCard({ title, description, listID, cardID }));
          // console.log(e.target[0].value, e.target[1].value);
          titleRef.current.value = "";
          descriptionRef.current.value = "";
        }}
      >
        <input
          type="text"
          placeholder={titlePlaceholder}
          ref={titleRef}
          className={editTodoSCSS.form__container_title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          type="text"
          placeholder={descriptionPlaceholder}
          ref={descriptionRef}
          className={editTodoSCSS.form__container_description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="submit"
          value="save"
          className={editTodoSCSS.form__container_save}
        />
      </form>
    </>
  );
}
