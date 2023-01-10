import { useEffect, useRef } from "react";

import "./HeaderContent.scss";
import Typed from 'typed.js';

const HeaderContent = () => {

	const el = useRef(null);
	const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
            'Я начинающий front-end разработчик.',
            'Примите меня пж на работу(((((((',
          ],
          typeSpeed: 50,
          backSpeed: 50,
          loop: true
        };
        
        typed.current = new Typed(el.current, options);
        
        return () => {
          typed.current.destroy();
        }
    },[])




    return(
        <section>
            <h3>Привет, меня зовут</h3>
            <h1>Авад Ислам.</h1><br/>
            <h1 ref={el}>Я начинающий front-end разработчик.</h1>
            <p>На этой странице вы сможете подробнее познакомиться с моими работами</p>
            <button>Портфолио</button>
        </section>
    )
}

export default HeaderContent;