import {FaCode} from 'react-icons/fa6';
import styles from '../styles/header.module.scss';

export default function Header(){
    return (
        <div className={styles.header}>
            <a className={styles.logo} href='/'>
                <FaCode />
                <span>Dani</span>
            </a>
            <a href='https://on.contra.com/NRp6HR' className={styles.btn} target='_blank' rel='noreferrer'>Contact</a>
        </div>
    )
}