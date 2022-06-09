import tutorspree from "./Assets/Projects/tutorspree.PNG";
import warehouse from "./Assets/Projects/warehouse.PNG";
import machanicShop from "./Assets/Projects/machanic.PNG";



export const PROJECTS = [
  {
    image: warehouse,
    name: "Unity WareHouse",
    technologyUsed: "ReactJs, React Router, Firebase, Javascript, MongoDB, ExpressJS, Nodejs,React Bootstarp",
    description: "This is wearhouse website. Here one can store ther all goods. We provide online shipment, export, emport.",
    url: "https://warehouse-d5a66.web.app/",
  },

  {
    image: tutorspree,
    name: "tutorspree",
    technologyUsed: "ReactJs,React Router, Firebase, Javascript, MongoDB, ExpressJS",
    description: "This is a self depended website",
    url: "https://tutorspree.web.app/",
  },
  {
    image: machanicShop,
    name: "Machanic Shop",
    technologyUsed: "ReactJs, React Router, Firebase, Javascript, MongoDB, ExpressJS, Tailwind CSS, Daisy UI, React query",
    description: " Have Admin/ User panel Admin can see the all products, added products, delete products user can log in by name email or google once user loged in they can see their informationuser can added item and cencel their product",
    url: "https://machanic-shop.web.app/",
  },
];

export const SKILLS = [
  { name: "ReactJs", initialRating: 4 },
  { name: "JavaScript", initialRating: 4 },


  { name: "Nodejs", initialRating: 3 },

  { name: "Html", initialRating: 4 },
  { name: "CSS", initialRating: 4 },

  { name: "Git", initialRating: 4 },
];

export const TOOLS = ["Visual Studio Code", "Git", "Chrome DevTools", "Npm (Node Package Manager)", "Atom", "Sublime Text", "Heroku", "Postman"]
