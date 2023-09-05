import styles from '../styles/cta.module.scss';

export default function CTA() {
    return (
        <div className={styles.cta}>
            <div className={styles.left}>
                <div className={styles.title}>Ready to Collaborate?</div>
                <div className={styles.sub}>Ready to bring your digital ideas to life? I'm here to turn your vision into reality. Let's create exceptional web experiences that leave a lasting impression.</div>
            </div>
            <a href="https://on.contra.com/NRp6HR" rel='noreferrer' target='_blank'>Contact</a>
        </div>
    )
}