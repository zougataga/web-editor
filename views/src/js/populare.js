$(document).ready(function () {
  axios.get('https://moviestate.herokuapp.com/all/oui')
    .then((response) => {
      let movies = response.data.slm.slice(0, 7)
      let output = '';
      $.each(movies, (index, movie) => {
        output += `
        <div class="film">
        <div class="cover"><a href="/film/${movie.name}">
            <div class="ma-lazy-wrapper"><img src="${movie.pp}"
                class="placeholder" /><img src="${movie.pp}"
                alt="${movie.name}" /></div>
          </a></div>
        <div class="info"><a href="/film/${movie.name}" class="title">
            <div class="limit">${movie.name}</div>
          </a>
          <p class="year">${movie.date}</p>
        </div>
      </div>
        `;

      });
      $('#populare-movies').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
});