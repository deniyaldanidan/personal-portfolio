import spicyBrew from '../assets/SpicyBrew.jpg';
import classicCut from '../assets/classic-cut-portfolio.jpg';

type projectData = {
    img: string,
    title: string,
    description: string,
    skills: string[],
    source ?: string,
    link ?: string
}

export const projectsData:projectData[] = [
    {
        img: spicyBrew,
        title: "Spicy Brew",
        description: "Spicy Brew, a demo e-coffee store webapp built using NextJS.",
        skills: ["NextJS", "Sass", "React", "Typescript"],
        source: "https://github.com/deniyaldanidan/spicy-brew",
        link: "https://spicy-brew.vercel.app"
    },
    {
        img: classicCut,
        title: "Classic Cut Barbers",
        description: "A landing page built using React to promote a barber shop.",
        skills: ["react", "typescript", "sass"],
        source: "https://github.com/deniyaldanidan/classic-cut-lp/",
        link: "https://classic-cut.netlify.app/"
    }
]