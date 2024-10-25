document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("addMovieBtn").addEventListener("click", function () {
        const movieInput = document.getElementById("movieInput");
        const movieTitle = movieInput.value;

        if (movieTitle) {
            const li = document.createElement("li");
            li.textContent = movieTitle;

            document.getElementById("movieList").appendChild(li);
            movieInput.value = "";
        }
    });
});

