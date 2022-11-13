
const loading = document.getElementsByClassName("loading")[0];
const footer = document.getElementsByClassName("footer")[0]

const homec = document.getElementsByClassName("home")[0];
const seriesc = document.getElementsByClassName("series")[0];
const filmc = document.getElementsByClassName("film")[0];
const supportc = document.getElementsByClassName("support")[0];
const watchc = document.getElementsByClassName("watch")[0];
const lastaddc = document.getElementsByClassName("lastadd")[0];
const searchc = document.getElementsByClassName("search")[0];

const nav0 = document.querySelectorAll(".links li a")[0];
const nav1 = document.querySelectorAll(".links li a")[1];
const nav2 = document.querySelectorAll(".links li a")[2];
const nav3 = document.querySelectorAll(".links li a")[3];

const extranav = document.querySelectorAll(".links li a")[4];
const navsupport = document.querySelectorAll(".sub-menu li a")[0];
const navsearch = document.querySelectorAll(".searcha")[0];

const tableau = [nav0, nav1, nav3, navsupport, navsearch];
tableau.forEach(e => {
    e.onclick = function () {
        navLinks.style.left = "-100%";
    };
})


window.onload = async () => {
    // loading.style = "display: none;";


    $(`#result`).html(`<center><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br></center>`);
};

let e = "";
setInterval(async () => {


    const local = window.location.href.split("#")[1];
    if (local) {
        if (local && e === local) return;
        e = local;

        // page
        const type = local.split("=");
        if (type[0] === "page") {
            const page = local.split("=")[1];
            if (page === "home") {
                return home();
            } else if (page === "series") {
                return series();
            } else if (page === "film") {
                return film();
            } else if (page === "lastadd") {
                return lastadd();
            } else if (page === "support") {
                return support();
            } else if (page === "search") {
                return search();
            } else {
                return redirect();
            }
        } else if (type[0] === "watch") {
            if (local.split("%")[1]) {
                const id = type[1].split("%")[0];
                const saison = local.split("%")[1];
                const ep = local.split("%")[2];
                await watchep(id, saison, ep);
            } else {
                const id = type[1];
                await watch(id);
            }
        } else {
            e = "";
            return redirect();
        }


    } else {
        e = "";
        return home();
    };
}, 200);
function redirect() {
    history.back();
}

async function deleteAll() {
    // loading.style = "display: none;";
    footer.style = "display: none;";

    homec.style = "display: none;";
    seriesc.style = "display: none;";
    filmc.style = "display: none;";
    lastaddc.style = "display: none;";
    supportc.style = "display: none;";
    watchc.style = "display: none;";
    searchc.style = "display: none;";

    nav0.classList.remove("links-active");
    nav1.classList.remove("links-active");
    nav2.classList.remove("links-active");
    nav3.classList.remove("links-active");
    extranav.classList.remove("links-active");
    navsupport.classList.remove("links-active");

}
async function home() {
    await deleteAll();
    loading.style = "display: block;";
    nav0.classList.add("links-active");
    homec.style = "display: flex;";
    footer.style = "display: block;";
    $("#title0").html("Accueil - WishFlix");
    loading.style = "display: none;";
}
async function series() {
    await deleteAll();
    loading.style = "display: block;";
    await affiche_series();
    nav1.classList.add("links-active");
    seriesc.style = "display: block;";
    footer.style = "display: block;";
    $("#title0").html("Séries - WishFlix");
    loading.style = "display: none;";
}
async function film() {
    await deleteAll();
    loading.style = "display: block;";
    await affiche_film();
    nav2.classList.add("links-active");
    filmc.style = "display: block;";
    footer.style = "display: block;";
    $("#title0").html("Film - WishFlix");
    loading.style = "display: none;";
}
async function lastadd() {
    await deleteAll();
    loading.style = "display: block;";
    nav3.classList.add("links-active");
    lastaddc.style = "display: block;";
    footer.style = "display: block;";
    $("#title0").html("Derniers Ajouts - WishFlix");
    loading.style = "display: none;";
}
async function support() {
    await deleteAll();
    loading.style = "display: block;";
    extranav.classList.add("links-active");
    navsupport.classList.add("links-active");
    supportc.style = "display: block;";
    footer.style = "display: block;";
    $("#title0").html("Support - WishFlix");
    loading.style = "display: none;";
}

async function search() {
    await deleteAll();
    loading.style = "display: block;";
    await affiche_search("all");
    searchc.style = "display: block;";
    footer.style = "display: block;";
    $("#title0").html("Search - WishFlix");
    loading.style = "display: none;";
}

async function watchep(id, s, e) {
    await deleteAll();
    loading.style = "display: block;";
    const info = (await axios.get(`/info/${id}`)).data;
    if (!info.length) {
        return nonwatch()
    } else {
        if (s === "f" && e === "f") {
            $("#title0").html(`${info[0].info.name} VF - WishFlix`);
            const video = info[0].info.video;

            $(".watch").html(`
            <center><br><br><br><br>
            <h1 id="home">${info[0].info.name} VF<br><br> </h1>
         
            <div class="video">
            <iframe class="responsive-iframe" src="${video}" allowfullscreen="" frameborder="0" sandbox = "allow-forms allow-pointer-lock allow-same-Origin allow-scripts allow-top-navigation" ></iframe>
          </div>
      
       </center><br><br><br><br><br><br>
        `);
            watchc.style = "display: block;";
            footer.style = "display: block;";
            loading.style = "display: none;";
        } else {
            let video = info[0].info.saison[Number(s) - 1].episode[Number(e) - 1];
            if (!video) {
                return nonwatch()
            } else {
                video = video.v;
                $("#title0").html(`${info[0].info.name} Saison ${s} Episode ${e} VF - WishFlix`);
                const maxep = info[0].info.saison[Number(s) - 1].episode.length || 0;

                $(".watch").html(`
            <center><br><br><br><br>
            <h1 id="home">${info[0].info.name} Saison ${s} Episode ${e} VF<br><br> </h1>

            <div class="video">
            <iframe class="responsive-iframe" src="${video}" allowfullscreen="" frameborder="0" sandbox = "allow-forms allow-pointer-lock allow-same-Origin allow-scripts allow-top-navigation" ></iframe>
          </div>
      

       ${Number(e) - 1 === 0 ? "" : `<a href="#watch=${info[0].id}%${s}%${Number(e) - 1}"><button id="btn">Episode précedent</button></a>`}
       ${Number(e) + 1 <= maxep ? `<a href="#watch=${info[0].id}%${s}%${Number(e) + 1}"><button id="btn">Episode suivant</button></a>` : ""}

       </center><br><br><br><br><br><br>

        `);
            }
            watchc.style = "display: block;";
            footer.style = "display: block;";
            loading.style = "display: none;";

        }
    }
};
function nonwatch() {

    $(`.watch`).html(`
    <center>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<span style='font-size:30px;font-weight:bold;text-align:center;color:#fff;'>Aucun film / Aucune series trouvée</span>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></center>`);
    watchc.style = "display: block;";
    footer.style = "display: block;";
    loading.style = "display: none;";
}
async function watch(id) {
    await deleteAll();
    loading.style = "display: block;";
    const info = (await axios.get(`/info/${id}`)).data;
    if (info.length === 0) {
        return nonwatch()
    } else {
        if (info[0].type === "series") {
            $("#title0").html(`${info[0].info.name} VF - WishFlix`);
            $(`.watch`).html(`<header class="affiche" style="background-image: url('${info[0].info.img.banner}');">
            <div class="affiche-content">
                <h1 class="affiche-title">${info[0].info.name} - VF</h1>
                <div class="affiche-buttons">
                    <a href="#page=support"><button style="color: #fff;background-color: #E50914; "
                            class="affiche-button">Signaler un problème</button></a>
                    <a target="_blanck" href="${info[0].info.allo}">
                        <button class="affiche-button" type="submit">Plus d'info</button>
                    </a>
                </div>
                <h1 class="affiche-description">
                ${400 < info[0].info.description.length ? `${info[0].info.description.substring(0, 400)}...` : info[0].info.description}
                </h1>
            </div>
            <div class="affiche-flou"></div>
        </header>
        <div class="location" id="home">
        ${info[0].info.saison.map(s => `
        <h1 id="home">Saison ${s.n}<br><br> </h1>
        <div class="box">${s.episode.map(e => `<a href="#watch=${info[0].id}%${s.n}%${e.n}"><img src="${info[0].info.img.pp}">Episode: ${e.n}</a>`).join(" ")}</div>
        `)}
        
        </div>
        `);
        } else {
            $("#title0").html(`${info[0].info.name} VF - WishFlix`);
            $(`.watch`).html(`<header class="affiche" style="background-image: url('${info[0].info.img.banner}');">
            <div class="affiche-content">
                <h1 class="affiche-title">${info[0].info.name} - VF</h1>
                <div class="affiche-buttons">
                    <a href="#page=support"><button style="color: #fff;background-color: #E50914; "
                            class="affiche-button">Signaler un problème</button></a>
                    <a target="_blanck" href="${info[0].info.allo}">
                        <button class="affiche-button" type="submit">Plus d'info</button>
                    </a>
                </div>
                <h1 class="affiche-description">
                ${400 < info[0].info.description.length ? `${info[0].info.description.substring(0, 400)}...` : info[0].info.description}
                </h1>
            </div>
            <div class="affiche-flou"></div>
        </header>
        <div class="location" id="home">
        <div class="box"><a href="#watch=${info[0].id}%f%f"><img src="${info[0].info.img.pp}">Film</a></div>
       }
        
        </div>
        `);
            // return watchep(info[0].id, "f", "f");
        }
    }
    watchc.style = "display: block;";
    footer.style = "display: block;";
    loading.style = "display: none;";
}
async function affiche_search(e) {
    e = e.toLowerCase();
    if (e === "all") {
        const all = (await axios.get("/all/all")).data;
        return $('#result').html(`<div class="location" id="home"><br><br><br><br><br><br>${await swiperrr(all)}</div>`)
    } else if (e === "series") {
        const all = (await axios.get("/all/series")).data;
        return $('#result').html(`<div class="location" id="home"><br><br><br><br><br><br>${await swiperrr(all)}</div>`)
    } else if (e === "film") {
        const all = (await axios.get("/all/film")).data;
        return $('#result').html(`<div class="location" id="home"><br><br><br><br><br><br>${await swiperrr(all)}</div>`)
    }
}

async function affiche_series() {
    let outpout = "";
    const affiche_series = (await axios.get("/affiche/series")).data;
    if (!affiche_series) {
        $(`.series`).html(`
        < center >
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <span style='font-size:30px;font-weight:bold;text-align:center;color:#fff;'>Aucune series trouvée</span>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></center>`);
    } else {
        outpout += `<header class="affiche" style="background-image: url('${affiche_series.info.img.banner}');">
    <div class="affiche-content">
        <h1 class="affiche-title">${affiche_series.info.name}</h1>
        <div class="affiche-buttons">
            <a href="#watch=${affiche_series.id}"><button style="color: #000;background-color: #e6e6e6; "
                    class="affiche-button">Lecture</button></a>
            <a target="_blanck" href="${affiche_series.info.allo}">
                <button class="affiche-button" type="submit">Plus d'info</button>
            </a>
        </div>
        <h1 class="affiche-description">
        ${400 < affiche_series.info.description.length ? `${affiche_series.info.description.substring(0, 400)}...` : affiche_series.info.description}
        </h1>
    </div>
    <div class="affiche-flou"></div>
</header>`;
        let reco = [];
        let pop = [];
        let srs = [];
        const series = (await axios.get("/all/series")).data;
        series.forEach(e => {
            if (e.info.reco) reco.push(e);
            else if (e.info.popular) pop.push(e);
            else srs.push(e);
        });
        outpout += `
                <div class="location" id="home">

                    <h1 id="home">Populaire sur WishFlix<br><br> </h1>
                        ${!pop.length ? "<span style='font-weight:bold;text-align:center;color:#fff;'>Aucun film trouvée</span>" : `${await swiperrr(pop)}`}

                        <h1 id="home">Recommandations<br>ㅤ</h1>
                        ${!reco.length ? "<span style='font-weight:bold;text-align:center;color:#fff;'>Aucun film trouvée</span>" : `${await swiperrr(reco)}`}

                        <h1 id="serie">Autre Séries<br>ㅤ</h1>
                        ${!srs.length ? "<span style='font-weight:bold;text-align:center;color:#fff;'>Aucun film trouvée</span>" : `${await swiperrr(srs)}`}

                    </div>


                        `;

        return $(".series").html(outpout)
    }
}

async function affiche_film() {
    let outpout = "";
    const film = (await axios.get("/affiche/film")).data;
    if (!film) {
        return $(`.film`).html(`<center><br><br><br><br><br><br><br><br><br><br><br><br><br><span style='font-size:30px;font-weight:bold;text-align:center;color:#fff;'>Aucun film trouvée</span><br><br><br><br><br><br><br><br><br><br><br><br><br></center>`);
    } else {
        outpout += `<header class="affiche" style="background-image: url('${film.info.img.banner}');">
    <div class="affiche-content">
        <h1 class="affiche-title">${film.info.name}</h1>
        <div class="affiche-buttons">
            <a href="#watch=${film.id}"><button style="color: #000;background-color: #e6e6e6; "
                    class="affiche-button">Lecture</button></a>
            <a target="_blanck" href="${film.info.allo}">
                <button class="affiche-button" type="submit">Plus d'info</button>
            </a>
        </div>
        <h1 class="affiche-description">
        ${400 < film.info.description.length ? `${film.info.description.substring(0, 400)}...` : film.info.description}
        </h1>
    </div>
    <div class="affiche-flou"></div>
</header>`;
        let reco = [];
        let pop = [];
        let comedie = [];
        let heros = [];
        let classique = [];
        let srs = [];
        const filmm = (await axios.get("/all/film")).data;
        filmm.forEach(e => {
            if (e.info.reco) reco.push(e);
            else if (e.info.popular) pop.push(e);
            else if (e.info.comedie) comedie.push(e);
            else if (e.info.heros) heros.push(e);
            else if (e.info.classique) classique.push(e);
            else srs.push(e);
        });
        //         <div style="position:relative; height:400px">
        //    <div style="position:absolute;z-index:1">
        //       <img src="images/greenhouse.jpg">
        //    </div>
        //    <div style="position:absolute;top:360px; width:600px; height:400px; z-index:2;font-size:200%">
        //       <center><b>Ma maison...</b></center>
        //     </div>
        // </div>
        //   <div class="box">${!heros.length ? "<span style='font-weight:bold;text-align:center;color:#fff;'>Aucun film trouvée</span>" : heros.map(e => `<a href="#watch=${e.id}"><img src="${e.info.img.pp}">${e.info.name}</a>`).join(" ")}</div>

        outpout += `
                            <div class="location" id="home">

                                <h1 id="home">Populaire sur WishFlix<br><br> </h1>
                                    ${!pop.length ? "<span style='font-weight:bold;text-align:center;color:#fff;'>Aucun film trouvée</span>" : `${await swiperrr(pop)}`}

                                    <h1 id="home">Recommandations<br>ㅤ</h1>
                                    ${!reco.length ? "<span style='font-weight:bold;text-align:center;color:#fff;'>Aucun film trouvée</span>" : `${await swiperrr(reco)}`}

                                    <h1 id="home">Classique<br>ㅤ</h1>
                                    ${!classique.length ? "<span style='font-weight:bold;text-align:center;color:#fff;'>Aucun film trouvée</span>" : `${await swiperrr(classique)}`}

                                    <h1 id="home">Comédies<br>ㅤ</h1>
                                    ${!comedie.length ? "<span style='font-weight:bold;text-align:center;color:#fff;'>Aucun film trouvée</span>" : `${await swiperrr(comedie)}`}

                                    <h1 id="home">Super-héros<br>ㅤ</h1>
                                    ${!heros.length ? "<span style='font-weight:bold;text-align:center;color:#fff;'>Aucun film trouvée</span>" : `${await swiperrr(heros)}`}

                                    <h1 id="serie">Autre Film<br>ㅤ</h1>
                                    ${!srs.length ? "<span style='font-weight:bold;text-align:center;color:#fff;'>Aucun film trouvée</span>" : `${await swiperrr(srs)}`}

                                </div>


                                    `;


        return $(".film").html(outpout)
    }
}
async function swiperrr(a, r) {
    const idd = await randomString(16);
    if (!r) a.sort(() => Math.random() - 0.5);
    let i = 0;
    let page = [];
    let affiche = [];
    a.forEach(e => {
        if (i === 6) i = 0, page.push(affiche), affiche = [];
        affiche.push(e);
        i++;
    });
    if (i != 0) page.push(affiche);

    let result = `
                                    <div class="swiper ${idd}">
                                        <div class="swiper-wrapper">
                                            ${page.map(o => `<div class="swiper-slide"><div class="box">${o.map(e => `<a href="#watch=${e.id}"><img src="${e.info.img.pp}">${27 < e.info.name.length ? `${e.info.name.substring(0, 27)}...` : e.info.name}</a>`).join(" ")}</div></div>`).join(" ")}
                                        </div>
                                        <div class="swiper-button-next"></div>
                                        <div class="swiper-button-prev"></div>
                                        <div class="swiper-pagination"></div>
                                    </div>

                                    <script>
                                        var swiper = new Swiper(".${idd}", {
                                            loop: true,
                                        autoplay: {
                                            delay: 2500,
                                        disableOnInteraction: false,
      },
                                        pagination: {
                                            el: ".swiper-pagination",
                                        type: "progressbar",
},
                                        navigation: {
                                            nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev",
},
});
                                    </script>
                                    `;
    return result;
}
async function randomString(length) {
    if (!length);
    var result = '';
    var characters = 'OXPPD4EDEPDEPDELDPpxedePDEDEDKEdkdekdedldlelDAZFDTEFEZFGZEFHBZEDbhfzefehbfhbeDCFERFERVGFBMNYJLKYUKMIUKIUPKLfferpoegepgerFRGFHRPFHPEFPEFREGREGERGERGERTGRTGCDFEFDEF';
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    };
    if (result === '') return;
    else return result;
};

$(".default_option").click(function () {
    let a = false;
    var classList = $('.dropdown ul').attr('class')
    if (classList) {
        $(".dropdown ul").removeClass("active");
    } else {
        $(".dropdown ul").addClass("active");
    }
});

$(".dropdown ul li").click(function () {
    var text = $(this).text();
    $(".default_option").text(text);
    affiche_search(text)
    $(".dropdown ul").removeClass("active");
});

$(".search_field .bx").click(function () {
    gosearch();
});
$(".input").keydown(function (e) {
    if (e.keyCode == 13) {
        gosearch();
    }
});

async function gosearch() {
    const type = $(".default_option").text().toLowerCase();
    const text = $(".input").val();
    if (!text || text && text.startsWith(" ") && text.endsWith(" ")) return nonsearch();;
    const vtxt = text.toLowerCase();
    if (type === "all") {
        const all = (await axios.get("/all/all")).data;
        go(all)
    } else if (type === "series") {
        const all = (await axios.get("/all/series")).data;
        go(all)
    } else if (type === "film") {
        const all = (await axios.get("/all/film")).data;
        go(all)
    }
    function go(all) {
        if (!all.length) {
            return nonsearch();
        } else {
            const result = all.filter(e => e.info.name.toLowerCase() === vtxt || e.info.name.toLowerCase().includes(vtxt));
            if (!result.length) {
                return nonsearch();
            } else {
                $("#result").html(`<br><br><br><br><br><br>
              <div class="location" id="home">
<div class="box">${result.map(e => `<a href="#watch=${e.id}"><img src="${e.info.img.pp}">${e.info.name}</a>`).join(" ")}</div>
</div>`)
            }
        }
    }
    function nonsearch() {
        $(`#result`).html(`<center><br><br><br><br><br><br><br><br><br><br>
    <span style='font-size:30px;font-weight:bold;text-align:center;color:#fff;'>${type === "all" ? "Aucun film / Aucune séries trouvée" : `Aucun${type === "series" ? "e" : ""} ${type} trouvée</span>`}
    <br><br><br></center>`);
    }
}
