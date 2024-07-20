import oldPic from "./old.jpg"
export function createAbout() {
    const contentContainer = document.getElementById('content');
    const homeTab = document.getElementById("home");
    const aboutTab = document.getElementById("about");
    const menuTab = document.getElementById("menu");

    aboutTab.classList.add("clicked")
    homeTab.classList.remove("clicked")
    menuTab.classList.remove("clicked")

    contentContainer.innerHTML = ""
    // Create the main section
    const main2Div = document.createElement('div');
    main2Div.className = 'main';
    main2Div.innerHTML = `
    <img src=${oldPic} alt="">
    <div class="main-content">
        <p>Our story begins back in 1948, with Anna and Bill Papadopoulos.
            Continued for 4 generations,
            currently managed by Maria and John Papadopoulos
        </p>
    </div>
`;
    contentContainer.appendChild(main2Div);

    // Create the testimonials section
    const testimonialsDiv = document.createElement('div');
    testimonialsDiv.className = 'testimonials';
    testimonialsDiv.innerHTML = `
    <div class="card">
        <p>I walked by, smelled like home, walked in</p>
        <p>- Random passerby</p>
    </div>
    <div class="card">
        <p>A meal here, best treat to one's self</p>
        <p>- Regular customer</p>
    </div>
    <div class="card">
        <p>Great people, awesome food!</p>
        <p>- Neighborhood stray dog</p>
    </div>
`;
    contentContainer.appendChild(testimonialsDiv);


}