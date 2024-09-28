import styles from "../styles/tech-stack.module.scss";

export default function TechStack() {
  return (
    <div className={styles.section}>
      <h1 className={styles.section_title}>About Me</h1>
      <div className={styles.contents}>
        <div className={styles.sec_1}>
          <div className={styles.sub_title}>A little about me</div>
          <div className={styles.sec_content}>
            "I'm Deniyal Dani, a web developer driven by a relentless pursuit of
            innovation and creativity. With a keen eye for detail and a passion
            for clean code, I thrive on transforming complex ideas into elegant
            and user-friendly digital solutions. I believe that every project is
            an opportunity to push boundaries and deliver exceptional results.
            When I'm not coding, you can find me exploring new technologies,
            perfecting my craft, and continuously seeking ways to exceed
            expectations. Let's collaborate and turn your vision into a digital
            masterpiece."
          </div>
        </div>
        <div className={styles.sec_2}>
          <div className={styles.sub_title}>Some of the tools i use:</div>
          <div className={styles.sec_list}>
            <div>
              <strong>Languages:</strong>
              <span>Javascript, Typescript.</span>
            </div>
            <div>
              <strong>Frontend:</strong>
              <span>Html, Css, Sass, Tailwind, React, NextJS.</span>
            </div>
            <div>
              <strong>Backend:</strong>
              <span>
                NodeJS, ExpressJS, socket.io, postgresql, mysql, MongoDB.
              </span>
            </div>
            <div>
              <strong>Others:</strong>
              <span>Git, Github, Vercel, Figma, Inkscape.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
