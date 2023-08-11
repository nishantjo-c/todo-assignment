import todosSCSS from './styles/Todos.module.scss';
import List from './List.jsx';
import Todotitle from './Todotitle';
import { useSelector } from 'react-redux';


function Todos(){
    const { listtitle } = useSelector(state => state.card);
return (
    <>
        <p className={todosSCSS.para}> section</p>

        <div className={todosSCSS.section__container}>
            <div className={todosSCSS.section__container_todos}>
                <List />
                {/* {listtitle.map((each,key) => <List key={key} />)} */}
            </div>
            <div className={todosSCSS.section__container_edit}>
                edit toto
            </div>
        </div>
        
    </>
)
}

export default Todos;