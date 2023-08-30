import './Listitem.scss';
import { FaInbox } from 'react-icons/fa';

function Listitem(props) {

    const listClassName = `list__item ${props.active ? 'active' : ''}`;

    return (
        <li className={listClassName}>
            {props.icon}
            <p className='list__item__text'>{props.text}</p>
        </li>

    );
}

export default Listitem;