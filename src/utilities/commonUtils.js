import Home from "../PortifolioContainer/Home/Home";
import AboutMe from  '../PortifolioContainer/AboutMe/AboutMe';
import Resume from '../PortifolioContainer/Resume/Resume';
import Projects from  '../PortifolioContainer/Projects/Projects';
import ContactMe from "../PortifolioContainer/ContactMe/ContactMe";
import Footer from "../PortifolioContainer/Footer/Footer";

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "About",
    component: AboutMe,
  },
  {
    screen_name: "Resume",
    component: Resume,
  },
  {
    screen_name: "Projects",
    component: Projects,
  },
  {
    screen_name: "Contact",
    component: ContactMe,
  },
  {
    screen_name: "",
    component: Footer,
  },
]

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }
  return -1;
}