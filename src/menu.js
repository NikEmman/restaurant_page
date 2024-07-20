import ntolmadakia from "./ntolmadakia.jpg"
import gemista from "./gemista.jpg"
import ntakos from "./ntakos.jpg"
import mousakas from "./mousakas.jpg"
import keftes from "./keftes.jpg"
import salad from "./salad.jpg"


export function createMenu() {
    const contentContainer = document.getElementById('content');
    const homeTab = document.getElementById("home");
    const aboutTab = document.getElementById("about");
    const menuTab = document.getElementById("menu");

    menu.classList.add("clicked")
    aboutTab.classList.remove("clicked")
    homeTab.classList.remove("clicked")

    contentContainer.innerHTML = ""

    // Create the hero-2 section
    const hero2Div = document.createElement('div');
    hero2Div.className = 'hero-2';
    hero2Div.innerHTML = `
    <h1>Visit Parthenon and taste... Greece!</h1>
    <p>The widest and finest food selection</p>
`;
    contentContainer.appendChild(hero2Div);

    // Create the food section
    const foodDiv = document.createElement('div');
    foodDiv.className = 'food';
    foodDiv.innerHTML = `
    <img src=${ntolmadakia} alt="ntolmadakia dish">
    <img src=${gemista} alt="gemista dish">
    <img src=${ntakos} alt="ntakos dish">
    <img src=${mousakas} alt="mousakas dish">
    <img src=${keftes} alt="keftes dish">
    <img src=${salad} alt="salad dish">
`;
    contentContainer.appendChild(foodDiv);

    // Create the menu section (empty for now)
    const menuDiv = document.createElement('div');
    menuDiv.className = 'menu';
    contentContainer.appendChild(menuDiv);
}