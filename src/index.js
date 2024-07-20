import { createHome } from "./home.js";
import { createAbout } from "./about.js";
import { createMenu } from "./menu.js";
import "./style.css";


const contentContainer = document.getElementById('content');
const homeTab = document.getElementById("home");
const aboutTab = document.getElementById("about");
const menuTab = document.getElementById("menu");

homeTab.addEventListener("click", createHome)
menuTab.addEventListener("click", createMenu)
aboutTab.addEventListener("click", createAbout)
createHome(homeTab);