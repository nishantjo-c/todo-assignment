import todotitleSCSS from './styles/Todotitle.module.scss';
import addSvg from '../assets/plus.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setListCard, setListTitle } from '../redux/cards';
import {Todocard, Card} from './Todocard';


export default function Todotitle() {

    const [title, setTitle] = useState('');
    const [visible, setVisible] = useState(false);
    const [id, setId] = useState(0);

    const dispatch = useDispatch();
    const { listcard,listtitle } = useSelector(state => state.card);
    

    const handleClick = (e) => {
        dispatch(setListTitle([...listtitle ,{title: title}]));
        setVisible(true);
    }

    useEffect(()=> {
        console.log(listtitle)
    }, [listtitle])

    return (
    <div className={todotitleSCSS.listcontainer}>
            <input type="text" placeholder='Add Todo-List' className={todotitleSCSS.listcontainer__addTodo}
                    onChange={(e) => {
                        setTitle(e.target.value);
                        
                    }} 
                    />

            <img src={addSvg} alt="add" className={todotitleSCSS.listcontainer__addIcon} type="button"
                    onClick={(e) => {
                        handleClick(e);
                        // dispatch(setListCard([...listcard, <Todocard key={listcard.length} />]))
                    }} 
                />
        {listcard.map((each,key) => {
            return (<Card key={key} 
                            title={each.title} 
                            description={each.description}
                            setVisible={setVisible}
                        />)})}
        {<Todocard  setVisible={setVisible} />}
        {/* {visible && <Todocard setVisible={setVisible} />} */}
    </div>)
}