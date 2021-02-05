
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
                listItem.classList.add('repositorio');
                listItem.setAttribute('data-tippy-content', `${userInfo.description}`);
                listItem.innerHTML = ` 
                <a class="green" href="${userInfo.html_url}" target="_blank">
                <span class="icon-github1"></span> ${userInfo.name}
                </a> 
                `;
                fragment.appendChild(listItem);
            }
            parrafo.appendChild(fragment);
        })
        .catch((err) => console.log(err));
}

ejectProyect();