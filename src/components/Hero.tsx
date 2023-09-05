import styles from '../styles/hero.module.scss';


export default function Hero() {
    return (
        <div className={styles.section}>
            <div className={styles.job_title}>Fullstack Web Developer</div>
            <div className={styles.title}>Hi, I'm Deniyal Dani</div>
            <div className={styles.sub_text}> A web developer passionate about crafting stunning online experiences. Check out my work and let's craft something extraordinary together.</div>
            <div className={styles.btn_grps}>
                <a href="https://on.contra.com/NRp6HR" rel='noreferrer' target='_blank'>Contact</a>
                <a href="#projects">Projects</a>
            </div>
            <div className={styles.swipe_text}>Swipe</div>
            <div className={styles.swipe_btn}>
                <span></span>
            </div>
        </div>
    );
}
