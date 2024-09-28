import spicyBrew from "../assets/SpicyBrew.jpg";
import classicCut from "../assets/classic-cut-portfolio.jpg";
import conqur from "../assets/conqur-img.jpg";
import restaurantShowcaser from "../assets/restaurant-showcaser-img.jpg";
import simpleTodo from "../assets/simple-todo-img.jpg";

type projectData = {
  img: string;
  title: string;
  description: string;
  skills: string[];
  source?: string;
  link?: string;
};

export const projectsData: projectData[] = [
  {
    img: spicyBrew,
    title: "Spicy Brew",
    description: "Spicy Brew, a demo e-coffee store webapp built using NextJS.",
    skills: ["NextJS", "Sass", "React", "Typescript"],
    source: "https://github.com/deniyaldanidan/spicy-brew",
    link: "https://spicy-brew.vercel.app",
  },
  {
    img: classicCut,
    title: "Classic Cut Barbers",
    description: "A landing page built using React to promote a barber shop.",
    skills: ["react", "typescript", "sass"],
    source: "https://github.com/deniyaldanidan/classic-cut-lp/",
    link: "https://classic-cut.netlify.app/",
  },
  {
    img: conqur,
    title: "Conqur Landing Page",
    description:
      "Promo landing page developed for Conqur - An upcoming project management tool for freelancers.",
    skills: ["react", "Typescript", "NextJS", "tailwindcss", "mailchimp"],
    link: "https://conqur-promo.vercel.app/",
    source: "https://github.com/deniyaldanidan/conqur-launch-landing",
  },
  {
    img: restaurantShowcaser,
    title: "Restaurant showcaser App",
    description:
      "An app build for a restaurant to manage/showcase its food-menus & manage table-bookings.",
    skills: [
      "typescript",
      "react",
      "nextjs",
      "tailwindcss",
      "mysql",
      "JWT-Auth",
      "drizzle-ORM",
      "mailchimp",
      "vercel",
      "react-query",
    ],
    source: "https://github.com/deniyaldanidan/restaurant-showcaser",
    link: "https://restaurant-showcaser.vercel.app/",
  },
  {
    img: simpleTodo,
    title: "My Tskr",
    description: "A simple project/task management app.",
    skills: [
      "typescript",
      "react",
      "nextjs",
      "tailwindcss",
      "mysql",
      "vercel",
      "Jwt-Auth",
      "drizzle-ORM",
      "react-query",
    ],
    source: "https://github.com/deniyaldanidan/simple-todo1-next-drizzle",
    link: "https://my-tskr.vercel.app/",
  },
];
