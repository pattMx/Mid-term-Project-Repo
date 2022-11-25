
const jsonapiproject = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((result) => {
            document.querySelector(".simplify-title").innerText = result[0].title.slice(0,20);
            document.querySelector(".simplify-bigtext").innerText = result[0].body;
        });
};

jsonapiproject();

const jsonapiotherprojects = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((result) => {
            let apiinfo = "";
            result.slice(1, 4).forEach((element, index) => {
                apiinfo += `
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
            document.querySelector(".grid-recentProjects").innerHTML += apiinfo;
        });
};
jsonapiotherprojects();