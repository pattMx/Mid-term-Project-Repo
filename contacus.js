

const infoform = (preventForm) => {
    preventForm.preventDefault();

    let fullName = document.querySelector("#name").value;
    let message = document.querySelector("#message").value;
    
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
            title: fullName,
            userId: 1,
            body: message,
        }),
        headers: {
            "Content-type": "application/json",
            Accept: "text/plain, application/json",
        },
    })
        .then((response) => response.json())
        .then((formData) => console.log(formData))
        .then(() => inputs.reset())
        .catch((error) => console.log(error));
};

let inputs = document.querySelector("#email-contact");
inputs.addEventListener("submit", infoform);
