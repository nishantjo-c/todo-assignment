import homeSCSS from './styles/Home.module.scss';
import Navigation from './Navigation';
import Todos from './Todos';

function Home(){
    return (
        <div className={homeSCSS.main}>
            <div className={homeSCSS.main__navigation}>
                <Navigation />
            </div>

            <div className={homeSCSS.main__todos}>
                <Todos />
            </div>
        </div>
    )
}

export default Home;