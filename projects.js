
const getInfoJson = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((res) => {
            document.querySelector(".project-page-title").innerText = res[0].title.slice(0,20);
            document.querySelector(".project-text-text").innerText = res[0].body;
        });
};

getInfoJson();

const getOtherProjects = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((res) => {
            let externalApiInfo = "";
            let newArray = res.slice(1, 4);
            newArray.forEach((element, index) => {
                let title = element.title.slice(0, 20);
                externalApiInfo += `
                <div class="cards-recentProjects" role="list-item">
                <div>
                <img class="img-recentProjects" src="./imagenes/projects-section/${index + 2}.jpg" alt="project-image-1"/>
                </div>
                <h4 class="project-title">${title}</h4>
                <p class="project-description">${element.body}</p>
                <a href="./projects.html">Learn More</a>
                </div>
                `;
            });
            document.querySelector(".grid-recentProjects").innerHTML += externalApiInfo;
        });
};
getOtherProjects();