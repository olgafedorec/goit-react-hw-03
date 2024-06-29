import css from './Contact.module.css';
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";

export default function Contact({ contact: { id, name, number }, onDelete }) {
    return (
        <div className={css.container}>
            <ul className={css.list}>
                <li className={css.item}><BsFillPersonFill className={css.icon} size={20} /> {name}</li>
                <li className={css.item}><BsFillTelephoneFill /> {number}</li>
            </ul>
            <button className={css.button} onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}