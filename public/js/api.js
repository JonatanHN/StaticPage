function ejectProyect() {
    axios({
            method: "GET",
            url: "https://api.github.com/users/jonatanhn/repos",
        })
        .then((res) => {
            console.log(res.data);
            const parrafo = document.getElementById("namerepo");
            const fragment = document.createDocumentFragment();
            for (const userInfo of res.data) {
                const listItem = document.createElement("div");
                listItem.innerHTML = ` 
                <p data-tippy-content="${userInfo.description}"><span class="icon-github1"></span> ${userInfo.name}</p> 
                <br>
                <a href="${userInfo.html_url}" data-tippy-content="Ver el repositorio" style="color:#fff;" 
                target="_blank">Visualizar</a>`;
                fragment.appendChild(listItem);
            }
            parrafo.appendChild(fragment);
        })
        .catch((err) => console.log(err));
}

ejectProyect();