import listSCSS from './styles/List.module.scss';
import addSvg from '../assets/plus.svg';
import Todocard from './Todocard';
import { useState } from 'react';

function List(){
    const [card, setCard] = useState([])

    function handleClick(){
        setCard([...card, <Todocard key={card.length} />])

    }
    
    return (
        <div className={listSCSS.listcontainer}>
            <input type="text" placeholder='Add Todo-List' className={listSCSS.listcontainer__addTodo} />
            <img src={addSvg} alt="add" className={listSCSS.listcontainer__addIcon} onClick={handleClick} />
            
            {card.map((each) => {
                return each;
                })
            }
        </div>
    )
}

export default List;