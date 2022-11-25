
const jsonapi = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((result) => {
            let apiinfo = "";
            result.slice(0,3).forEach((element, index) => {
                apiinfo += `
            <div class="cards-recentProjects" role="list-item">
                <div>
                    <img
                    class="img-recentProjects"
                    src="./imagenes/projects-section/${index + 1}.jpg"
                    alt="project-image-1"/>
                </div>
                    <h4 class="project-title">${element.title}</h4>
                    <p class="project-description">${element.body}</p>
                    <a href="./projects.html">Learn More</a>
                </div>
            `;
        });
        document.querySelector(".grid-recentProjects").innerHTML +=
        apiinfo;
        });
}
jsonapi();