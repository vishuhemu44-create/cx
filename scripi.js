const movies = [
    {name:"Inception", lang:"English", time:"medium", sub:"Free", img:"https://via.placeholder.com/300?text=Inception"},
    {name:"Interstellar", lang:"English", time:"long", sub:"Premium", img:"https://via.placeholder.com/300?text=Interstellar"},
    {name:"3 Idiots", lang:"Hindi", time:"medium", sub:"Free", img:"https://via.placeholder.com/300?text=3+Idiots"},
    {name:"Jawan", lang:"Hindi", time:"medium", sub:"Premium", img:"https://via.placeholder.com/300?text=Jawan"},
    {name:"Vikram", lang:"Tamil", time:"medium", sub:"Premium", img:"https://via.placeholder.com/300?text=Vikram"},
    {name:"RRR", lang:"Telugu", time:"long", sub:"Premium", img:"https://via.placeholder.com/300?text=RRR"}
];

function showMovies() {
    const lang = document.getElementById("language").value;
    const time = document.getElementById("duration").value;
    const sub = document.getElementById("subscription").value;
    const result = document.getElementById("result");

    const filtered = movies.filter(m =>
        m.lang === lang &&
        m.time === time &&
        (sub === "Premium" || m.sub === "Free")
    );

    if(filtered.length === 0){
        result.innerHTML = "<p>No movies found</p>";
        return;
    }

    result.innerHTML = `
        <div class="movie-grid">
        ${filtered.map(m => `
            <div class="movie-card"
                style="background-image:url('${m.img}')"
                onclick="openMovie('${m.name}','${m.lang}','${m.sub}')">
                <span>${m.name}</span>
            </div>
        `).join("")}
        </div>
    `;
}

function openMovie(name, lang, sub) {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "flex";
    document.getElementById("movieTitle").innerText = name;
    document.getElementById("movieInfo").innerText =
        `Language: ${lang} | Subscription: ${sub}`;
}

function goBack() {
    document.getElementById("page2").style.display = "none";
    document.getElementById("page1").style.display = "flex";
}
