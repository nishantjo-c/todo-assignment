import todosSCSS from './styles/Todos.module.scss';
import List from './List.jsx';

function Todos(){
return (
    <>
        <p className={todosSCSS.para}> section</p>

        <div className={todosSCSS.section__container}>
            <div className={todosSCSS.section__container_todos}>
                <List />
            </div>
            <div className={todosSCSS.section__container_edit}>
                edit toto
            </div>
        </div>
        
    </>
)
}

export default Todos;