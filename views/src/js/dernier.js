$(document).ready(function () {
  axios.get('https://moviestate.herokuapp.com/all/non')
    .then((response) => {
      let movies = response.data.slm.slice(0, 14)
      let output = '';
      $.each(movies, (index, movie) => {
        output += `
        <div class="film">
        <div class="cover"><a href="/film/${movie.name}">
            <div class="ma-lazy-wrapper"><img src="${movie.pp}"
                class="placeholder" /><img src="${movie.pp}"
                alt="${movie.name}" /></div>
          </a><span class="score">
            ${movie.star || 0} <svg viewBox="0 0 24 24">
              <path
                d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z">
              </path>
            </svg></span></div>
        <div class="info"><a href="/film/${movie.name}" class="title">
            <div class="limit">${movie.name}</div>
          </a>
          <p class="year">${movie.date}</p>
        </div>
      </div>
        `;
      });
      $('#dernier-movies').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
});