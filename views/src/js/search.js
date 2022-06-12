$(document).ready(() => {
    $("#searchForm").on("submit", e => {
        let s = $("#searchText").val();
        if (s == "" || !s) return;
        get(s);
        e.preventDefault();
    });
});

function get(pp) {
    axios.get('https://moviestate.herokuapp.com/all/non')
        .then((response) => {
            let a = ""
            let array = []
            let output = ``
            response.data.slm.filter(rr => {
                if (rr.name.toLowerCase().includes(pp.toLowerCase()) || rr.name.toLowerCase() === pp.toLowerCase()) {
                    a = true, array.push(rr)
                }
            })
            if (a != "") {
                $.each(array, (index, e) => {
                    output += `
                    <div class="film">
                    <div class="cover"><a href="/film/${e.name}">
                        <div class="ma-lazy-wrapper"><img src="${e.pp}"
                            class="placeholder" /><img src="${e.pp}"
                            alt="${e.name}" /></div>
                      </a><span class="score">
                        ${e.star || 0} <svg viewBox="0 0 24 24">
                          <path
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z">
                          </path>
                        </svg></span></div>
                    <div class="info"><a href="/film/${e.name}" class="title">
                        <div class="limit">${e.name}</div>
                      </a>
                      <p class="year">${e.date}</p>
                    </div>
                  </div>
    `;
                })
                $('#home-movies').html(output);
            } else {
                output = `<br><h1 class="listing-film text-center d-none" style="padding-top:45px; padding-bottom: 450px">Film introuvable !</h1>`;
                $('#home-movies').html(output);
            }
        }).catch((err) => { console.log(err); });
}