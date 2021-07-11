document.addEventListener("DOMContentLoaded", () => {
    const handleFormSubmit = function (event) {
        event.preventDefault();

        const filmList = document.querySelector('#film-list');

        const newFilm = document.createElement("li");
        newFilm.textContent = `${event.target.title.value} ${event.target.director.value} ${event.target.genre.value}`;
        filmList.appendChild(newFilm);

        form.reset();
    };

    const form = document.querySelector("#new-item-form");
    form.addEventListener("submit", handleFormSubmit);
    const newButton = document.createElement("button");
    newButton.textContent = "Delete";
    const body = document.querySelector("body");
    body.appendChild(newButton);

    const handleDeleteSubmit = function (event) {
        const filmlist = document.querySelector("#film-list");

    };

    const deleteAllButton = document.querySelector("#delete-all");
    deleteAllButton.addEventListener("click", handleDeleteSubmit);
    
})