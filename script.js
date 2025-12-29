document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("animes");

  fetch("https://api.jikan.moe/v4/anime?page=1")
    .then(res => res.json())
    .then(json => {
      const html = json.data.map(anime => `
        <article class="anime-card">
          <img src="${anime.images.jpg.image_url}" alt="${anime.title}" width="150">
          <h3>${anime.title}</h3>
          <p>Episodios: ${anime.episodes ?? "N/A"}</p>
        </article>
      `).join("");

      contenedor.innerHTML = html;
    })
    .catch(err => {
      contenedor.innerHTML = "<p>Error cargando animes 😢</p>";
      console.error(err);
    });
});
