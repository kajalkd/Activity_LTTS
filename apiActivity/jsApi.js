function fetchData(){
    fetch('https://api.github.com/users')
    .then(response => {
        if(!response.ok){
            throw Error("ERROR");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const html = data.map(user => {
            return `
            <div class = "user">
            <p><img id = "img" src = "${user.avatar_url}" alt="image loading" <img></p>
            <p>ID: ${user.id}</p>
            </div>
            `
        })
        .join("");
        console.log(html);
        document
        .querySelector('#appapi')
        .insertAdjacentHTML("afterbegin", html);
    })
    .catch(error => {
        console.log(error);
    });
}

// Fetch API
fetchData(); 

