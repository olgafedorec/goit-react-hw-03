import css from './SearchBox.module.css';

export default function SearchBox({ value, onSearch }) {
    return (
        <div>
            <p className={css.find}>Find contact by name</p>
            <input className={css.input} type="text" value={value} onChange={(evt) => onSearch(evt.target.value)}/>
        </div>
    )
}