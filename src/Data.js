import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaDribbble, FaInstagram, FaLinkedin, FaBootstrap } from "react-icons/fa";
import { DiJavascript, DiJavascript1, DiMongodb } from "react-icons/di";
import { SiExpress, SiMysql, SiTailwindcss, SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import portfolio from "./assets/portfolio-big.jpg"
import work1 from "./assets/blog.png";
import work2 from "./assets/tech.png";
import work3 from "./assets/tresure.png";
import work4 from "./assets/work1.png";
import work5 from "./assets/grocery.png";
import work6 from "./assets/wed.png";
import work7 from "./assets/native.png";
import work8 from "./assets/weather.png";
import work9 from "./assets/bderp.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [

  <FaInstagram />,
  <FaLinkedin />,
  <BsMedium />
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Adel Md. Adnan"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+959883271929"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "aturjoy4@gmail.com"
  }
]

export const icons = [<DiJavascript1 />, <FaReact />, <FaNodeJs />, <SiExpress />, <SiMysql />, <DiMongodb />, <SiTailwindcss />,<FaBootstrap/>]

export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Junior Web Developer",
    company: "demo.xyz"
  },
  {
    di: 2,
    year: "2022",
    position: "Junior Web Developer",
    company: "demo.xyz"
  },
  {
    id: 3,
    year: "2022",
    position: "Junior Web Developer",
    company: "demo.xyz"
  }
]
export const finishes = [
  {
    id: 1,
    number: '1+',
    itemName: "Years Of Experience"
  },
  {
    id: 2,
    number: "000+",
    itemName: "Satisfied Customers"
  },
  {
    id: 3,
    number: "30+",
    itemName: "Website Items"
  },
 
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "Adnan Blogs",
    live_link: "https://adnan-blogs.vercel.app/",
    github_link: "https://github.com/AdnanTurjoy/adnan-blogs",
    category: "web"
  },
  {
    id: 2,
    img: work2,
    name: "Tech Mart",
    live_link: "https://tech-mart.netlify.app/",
    github_link: "https://github.com/AdnanTurjoy/tech-mart",
    category: "web"
  },
  {
    id: 3,
    img: work3,
    name: "The Treasure Chest",
    live_link: "https://adnanturjoy.github.io/the-treasure-chest",
    github_link: "https://github.com/AdnanTurjoy/the-treasure-chest",
    category: "design"
  },
  {
    id: 4,
    img: work4,
    name: "REST API",
    live_link: "",
    github_link: "https://github.com/AdnanTurjoy/User-with-file-upload-REST-API-using-Express-MongoDB",
    category: "app"
  },
  {
    id: 5,
    img: work5,
    name: "Grocery List",
    live_link: "https://grocery-list-adnan.netlify.app/",
    github_link: "https://github.com/AdnanTurjoy/GroceryList-ADD-delete-React",
    category: 'app'
  },
  {
    id: 6,
    img: work6,
    name: "Too Young to Wed",
    live_link: "",
    github_link: "https://github.com/zubayer-salehin/tooyoungtowed-client-side/tree/impact/adnan",
    category: "design"
  },
  {
    id: 7,
    img: work7,
    name: "React Native Note",
    live_link: "https://adnan-react-native-notes.netlify.app/",
    github_link: "https://github.com/AdnanTurjoy/react-native-notes",
    category: "app"
  },
  {
    id: 8,
    img: work8,
    name: "Weather App",
    live_link: "https://react-weather-at.netlify.app/",
    github_link: "https://github.com/AdnanTurjoy/weather-using-openWeather-api",
    category: "web"
  },
  {
    id: 9,
    img: work9,
    name: "Billing/shopping Address",
    live_link: "https://adnan-bd-erp.netlify.app/",
    github_link: "https://github.com/AdnanTurjoy/bd-erp",
    category: "web"
  }
]


export const workNavs = [
  "All", "Web", "App", "Design"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Mohammadpur, Dhaka"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "aturjoy4@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+8800000000000"
  }
]
