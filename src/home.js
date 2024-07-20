import vegetablesImg from "./vegetables.jpg"

export function createHome() {
    const contentContainer = document.getElementById('content');
    const homeTab = document.getElementById("home");
    const aboutTab = document.getElementById("about");
    const menuTab = document.getElementById("menu");

    homeTab.classList.add("clicked")
    aboutTab.classList.remove("clicked")
    menuTab.classList.remove("clicked")

    contentContainer.innerHTML = ""

    // Create the hero section
    const heroDiv = document.createElement('div');
    heroDiv.className = 'hero';
    const headline = document.createElement("h1")
    headline.textContent = "Parthenon Restaurant"
    const pTag = document.createElement("p")
    pTag.textContent = "Taste the best traditional Greek cuisine, under the shade of one of the Seven Wonders of the Ancient World."
    contentContainer.appendChild(heroDiv);
    heroDiv.appendChild(headline);
    heroDiv.appendChild(pTag);

    // Create the main section
    const mainDiv = document.createElement('div');
    mainDiv.className = 'main';
    const mainContentDiv = document.createElement('div');
    const vegImg = document.createElement('img');
    vegImg.src = vegetablesImg
    vegImg.alt = "fresh vegetables"
    mainContentDiv.classList.add("main-content");
    const mainContentText = document.createElement("p")
    mainContentText.textContent = "We use only the freshest and finest products the Greek land has to offer."
    mainContentDiv.appendChild(mainContentText)
    mainDiv.appendChild(vegImg);

    mainDiv.appendChild(mainContentDiv);
    contentContainer.appendChild(mainDiv);

    // Create the hours section
    const hoursDiv = document.createElement('div');
    hoursDiv.className = 'hours';
    hoursDiv.innerHTML = `
        <ul> Open at:
            <li>Monday - Friday: <span>11am to 1am</span></li>
            <li>Saturday: <span>10am to 1am</span></li>
            <li>Sunday: <span>11am to 12pm</span></li>
        </ul>
    `;
    contentContainer.appendChild(hoursDiv);
}
