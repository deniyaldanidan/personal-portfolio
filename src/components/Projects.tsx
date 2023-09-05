import styles from '../styles/projects.module.scss';
import { BiLinkExternal, BiCodeAlt } from 'react-icons/bi';
import { projectsData } from '../data/data';



const Card = ({ data }: { data: typeof projectsData[0] }) => {
    return (
        <div className={styles.card}>
            <div className={styles.card_img_content}>
                <img src={data.img} alt={data.title} className={styles.card_img} />
            </div>
            <div className={styles.card_content}>
                <div className={styles.card_title}>{data.title}</div>
                <div className={styles.card_descr}>{data.description}</div>
                <div className={styles.card_skills}>
                    {
                        data.skills.map(skill => <span key={skill}>{skill}</span>)
                    }
                </div>
                <div className={styles.card_links}>
                    {
                        data?.link?.length ? (
                            <a href={data.link} target="_blank" rel="noreferrer">
                                <BiLinkExternal />
                                <span>Website</span>
                            </a>
                        ) : ""
                    }
                    {
                        data?.source?.length ? (
                            <a href={data.source} target='_blank' rel="noreferrer">
                                <BiCodeAlt />
                                <span>Source</span>
                            </a>
                        ) : ""
                    }
                </div>
            </div>
        </div>
    )
}

export default function Projects() {
    return (
        <div className={styles.section} id='projects'>
            <h1 className={styles.section_title}>Recent Projects</h1>
            <div className={styles.content}>
                {
                    projectsData.map(prjct => <Card key={prjct.title} data={prjct} />)
                }
            </div>
        </div>
    )
}