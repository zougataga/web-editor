const film = [

    // Popular
    {
        name: "Red notice",
        description: "Lorsqu’Interpol déclenche une Alerte Rouge – destinée à traquer et capturer les criminels les plus recherchés au monde –, le FBI fait appel à son meilleur profiler, John Hartley. Il se retrouve contraint de s’associer au plus grand voleur d’œuvres d’art au monde.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=262468.html",
        popular: true,
        img: {
            pp: "https://fr.web.img4.acsta.net/c_310_420/pictures/21/10/21/15/41/2023058.jpg",
            banner: "https://www.ecranlarge.com/media/cache/1600x1200/uploads/articles/001/404/133/red-notice-ryan-reynolds-gal-gadot-red-notice-1387043-large.jpeg"
        },
        video: "https://uqload.com/embed-cdqxqcrjzhlf.html"
    }, {
        name: "Avatar",
        img: {
            pp: "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/78/95/70/19485155.jpg",
            banner: "https://epipoca.com.br/wp-content/uploads/2022/05/avatarww2.jpg"
        },
        popular: true,
        video: "https://uqload.com/embed-ow6devj0hdhk.html",
        description: "Malgré sa paralysie, Jake Sully, un ancien marine immobilisé dans un fauteuil roulant, est resté un combattant au plus profond de son être. Il est recruté pour se rendre à des années-lumière de la Terre, sur Pandora, où de puissants groupes industriels exploitent un minerai rarissime destiné à résoudre la crise énergétique sur Terre. Parce que l'atmosphère de Pandora est toxique pour les humains, ceux-ci ont créé le Programme Avatar, qui permet à des pilotes humains de lier leur esprit à un avatar, un corps biologique commandé à distance, capable de survivre dans cette atmosphère létale. Ces avatars sont des hybrides créés génétiquement en croisant l'ADN humain avec celui des Na'vi, les autochtones de Pandora.Sous sa forme d'avatar, Jake peut de nouveau marcher. On lui confie une mission d'infiltration auprès des Na'vi, devenus un obstacle trop conséquent à l'exploitation du précieux minerai. Mais tout va changer lorsque Neytiri, une très belle Na'vi, sauve la vie de Jake...",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=61282.html",
    },
    {
        name: "Titanic",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=5818.html",
        popular: true,
        img: {
            banner: "https://imgsrc.cineserie.com/2021/09/hero-image.fill_.size_1248x702.v1623364674.jpg?ver=1",
            pp: "https://fr.web.img6.acsta.net/c_310_420/pictures/19/10/25/11/18/5224976.jpg",
        },
        video: "https://uqload.com/embed-spb368w2j7nm.html",
        description: "Southampton, 10 avril 1912. Le paquebot le plus grand et le plus moderne du monde, réputé pour son insubmersibilité, le \"Titanic\", appareille pour son premier voyage. Quatre jours plus tard, il heurte un iceberg. A son bord, un artiste pauvre et une grande bourgeoise tombent amoureux.",
    },
    {
        name: "Top Gun",
        popular: true,
        img: {
            pp: "https://fr.web.img4.acsta.net/c_310_420/pictures/15/06/12/12/58/422779.jpg",
            banner: "https://media.sudouest.fr/10910530/1000x500/topgun.jfif?v=1652870593",
        },
        video: "https://uqload.com/embed-x1rannm1fumb.html",
        description: "Jeune as du pilotage et tête brûlée d'une école réservée à l'élite de l'aéronavale US (\"Top Gun\"), Pete Mitchell, dit \"Maverick\", tombe sous le charme d'une instructrice alors qu'il est en compétition pour le titre du meilleur pilote...",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=2133.html",
    }, {
        name: "Pixels",
        video: "https://uqload.com/embed-v202wze7j729.html",
        description: "À l’époque de leur jeunesse, dans les années 80, Sam Brenner, Will Cooper, Ludlow Lamonsoff et Eddie « Fire Blaster » Plant ont sauvé le monde des milliers de fois… en jouant à des jeux d’arcade à 25 cents la partie. Mais aujourd’hui, ils vont devoir le faire pour de vrai… Lorsque des aliens découvrent des vidéos d’anciens jeux et les prennent pour une déclaration de guerre, ils lancent l’assaut contre la Terre. Ces mêmes jeux d’arcade leur servent de modèles pour leurs attaques. Cooper, qui est désormais Président des États-Unis, fait alors appel à ses vieux potes pour empêcher la destruction de la planète par PAC-MAN, Donkey Kong, Galaga, Centipede et les Space Invaders… Les gamers pourront compter sur l’aide du lieutenant-colonel Violet Van Patten, une spécialiste qui va leur fournir des armes uniques...",
        popular: true,
        img: {
            pp: "https://fr.web.img3.acsta.net/c_310_420/pictures/15/06/19/11/04/234477.jpg",
            banner: "https://images.cinefil.com/movies/1047738.webp",
        },
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=202798.html",
    },
    {
        name: "Matrix 4",
        popular: true,
        img: {
            banner: "https://br.atsit.in/it/wp-content/uploads/2022/01/the-matrix-resurrections-4k-blu-ray-in-uscita-a-marzo.jpg",
            pp: "https://fr.web.img2.acsta.net/c_310_420/pictures/21/11/17/17/24/3336846.jpg",
        },
        video: "https://uqload.com/embed-jlh4cwu4zany.html",
        description: "MATRIX RESURRECTIONS nous replonge dans deux réalités parallèles – celle de notre quotidien et celle du monde qui s’y dissimule. Pour savoir avec certitude si sa réalité propre est une construction physique ou mentale, et pour véritablement se connaître lui-même, M. Anderson devra de nouveau suivre le lapin blanc. Et si Thomas... Neo... a bien appris quelque chose, c’est qu’une telle décision, quoique illusoire, est la seule manière de s’extraire de la Matrice – ou d’y entrer... Bien entendu, Neo sait déjà ce qui lui reste à faire. Ce qu’il ignore en revanche, c’est que la Matrice est plus puissante, plus sécurisée et plus redoutable que jamais. Comme un air de déjà vu...",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=254560.html",
    },
    {
        name: "Men in Black 4",
        img: {
            banner: "https://hitek.fr/img/up_o/1106790155/hitek_f9ec2536d215f0150a931493651a2bac_1561121538.jpeg",
            pp: "https://fr.web.img6.acsta.net/c_310_420/pictures/19/04/25/11/42/1533005.jpg",
        },
        popular: true,
        video: "https://uqload.com/embed-8fdzgptf0i8z.html",
        description: "Chargés de protéger la Terre de toute infraction extraterrestre et de réguler l'immigration intergalactique sur notre planète, les Men in black ou MIB opèrent dans le plus grand secret. Vêtus de costumes sombres et équipés des toutes dernières technologies, ils passent inaperçus aux yeux des humains dont ils effacent régulièrement la mémoire récente : la présence d'aliens sur notre sol doit rester secrète.Récemment séparé de son vieux partenaire, retourné à la vie civile sans aucun souvenir de sa vie d'homme en noir, K, le plus expérimenté des agents du MIB décide de former J, un jeune policier. Ensemble, ils vont affronter une nouvelle menace : Edgar le cafard...",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=210317.html",
    },


    // reco
    {
        name: "Intouchable",
        reco: true,
        img: {
            banner: "https://static.lpnt.fr/images/2015/10/18/2266903lpw-2266910-article-square-format-jpg_3113645_660x281.jpg",
            pp: "https://fr.web.img6.acsta.net/medias/nmedia/18/82/69/17/19806656.jpg",
        },
        video: "https://uqload.com/embed-imtk5prxs7ke.html",
        description: "A la suite d’un accident de parapente, Philippe, riche aristocrate, engage comme aide à domicile Driss, un jeune de banlieue tout juste sorti de prison. Bref la personne la moins adaptée pour le job. Ensemble ils vont faire cohabiter Vivaldi et Earth Wind and Fire, le verbe et la vanne, les costumes et les bas de survêtement... Deux univers vont se télescoper, s’apprivoiser, pour donner naissance à une amitié aussi dingue, drôle et forte qu’inattendue, une relation unique qui fera des étincelles et qui les rendra... Intouchables.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=182745.html",
    },
    {
        name: "Suicide squad",
        description: "Les pires méchants de l’univers DC Comics réunis dans un même film.C'est tellement jouissif d'être un salopard ! Face à une menace aussi énigmatique qu'invincible, l'agent secret Amanda Waller réunit une armada de crapules de la pire espèce. Armés jusqu'aux dents par le gouvernement, ces Super-Méchants s'embarquent alors pour une mission-suicide. Jusqu'au moment où ils comprennent qu'ils ont été sacrifiés. Vont-ils accepter leur sort ou se rebeller ?",
        reco: true,
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=144185.html",
        img: {
            pp: "https://fr.web.img3.acsta.net/c_310_420/pictures/16/07/12/15/47/166170.jpg",
            banner: "https://www.telerama.fr/sites/tr_master/files/styles/simplecrop1000/public/medias/2016/08/media_145965/suicide-squad-se-prend-une-raclee-et-c-est-bien-merite%2CM361050.jpg?itok=C7CF_tLe"
        },
        video: "https://uqload.com/embed-49rb9c4xxkpb.html"
    },
    {
        name: "The Suicide squad",
        description: "Bienvenue en enfer - aka Belle Reve, la prison dotée du taux de mortalité le plus élevé des États-Unis d'Amérique. Là où sont détenus les pires super-vilains, qui feront tout pour en sortir - y compris rejoindre la super secrète et la super louche Task Force X. La mission mortelle du jour ? Assemblez une belle collection d'escrocs, et notamment Bloodsport, Peacemaker, Captain Boomerang, Ratcatcher 2, Savant, King Shark, Blackguard, Javelin et la psychopathe préférée de tous :Harley Quinn. Armez-les lourdement et jetez-les (littéralement) sur l'île lointaine et bourrée d'ennemis de Corto Maltese. Traversant une jungle qui grouille d'adversaires et de guerilleros à chaque tournant, l'Escouade est lancée dans une mission de recherche et de destruction, avec le seul Colonel Rick Flag pour les encadrer sur le terrain… et la technologie du gouvernement dans leurs oreilles, afin qu'Amanda Waller puisse suivre le moindre de leurs mouvements. Comme toujours, un faux pas est synonyme de mort (que ce soit des mains de leurs opposants, d'un coéquipier ou de Waller elle-même). Si quelqu'un veut parier, mieux vaut miser contre eux - et contre eux tous.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=245535.html",
        reco: true,
        img: {
            pp: "https://fr.web.img5.acsta.net/c_310_420/pictures/21/03/26/16/42/1810776.jpg",
            banner: "https://www.dcplanet.fr/wp-content/uploads/2021/11/the-suicide-squad.jpg"
        },
        video: "https://uqload.com/embed-9ggjiiptuy1y.html"
    },
    {
        name: "Paddington",
        img: {
            banner: "https://www.intofilm.org/intofilm-production/scaledcropped/970x546https%3A/s3-eu-west-1.amazonaws.com/images.cdn.filmclub.org/film__18107-paddington--hi_res-6bbc1719.jpg/film__18107-paddington--hi_res-6bbc1719.jpg",
            pp: "https://fr.web.img3.acsta.net/c_310_420/pictures/14/12/05/10/53/508053.jpg",
        },
        reco: true,
        video: "https://uqload.com/embed-8v82s1ju3429.html",
        description: "Paddington raconte l'histoire d'un jeune ours péruvien fraîchement débarqué à Londres, à la recherche d'un foyer et d'une vie meilleure. Il réalise vite que la ville de ses rêves n'est pas aussi accueillante qu'il croyait. Par chance, il rencontre la famille Brown et en devient peu à peu un membre à part entière.      ",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=207487.html",
    }, {
        name: "Paddington 2",
        img: {
            banner: "https://cdn2.daily-movies.ch/wp-content/uploads/2017/03/daily-movies.ch-Paddington2-4.jpg",
            pp: "https://fr.web.img6.acsta.net/c_310_420/pictures/17/11/14/10/08/1496521.jpg",
        },
        reco: true,
        video: "https://uqload.com/embed-8v3s6vwjyqfw.html",
        description: "Paddington coule des jours heureux chez les Brown, sa famille d’adoption, dans un quartier paisible de Londres, où il est apprécié de tous. Alors qu’il recherche un cadeau exceptionnel pour les cent ans de sa tante adorée, il repère un magnifique livre animé, très ancien, chez un antiquaire. Pas de temps à perdre : il enchaîne les petits boulots pour pouvoir l’acheter ! Mais lorsque le précieux ouvrage est volé, Paddington est accusé à tort et incarcéré. Convaincus de son innocence, les Brown se lancent dans une enquête pour retrouver le coupable…",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=242201.html",
    },
    {
        name: "Aladin",
        video: "https://uqload.com/embed-3oc2z8ev764x.html",
        description: "Quand un charmant garçon des rues du nom d’Aladdin cherche à conquérir le cœur de la belle, énigmatique et fougueuse princesse Jasmine, il fait appel au tout puissant Génie, le seul qui puisse lui permettre de réaliser trois vœux, dont celui de devenir le prince Ali pour mieux accéder au palais…",
        reco: true,
        img: {
            pp: "https://fr.web.img6.acsta.net/c_310_420/pictures/19/04/19/09/29/4029006.jpg",
            banner: "https://www.disneyphile.fr/wp-content/uploads/2020/02/aladdin-2-scaled.jpg",
        },
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=250865a.html",
    },
    {
        name: "Bac Nord",
        description: "2012. Les quartiers Nord de Marseille détiennent un triste record :la zone au taux de criminalité le plus élevé de France. Poussée par sa hiérarchie, la BAC Nord, brigade de terrain, cherche sans cesse à améliorer ses résultats. Dans un secteur à haut risque, les flics adaptent leurs méthodes, franchissant parfois la ligne jaune. Jusqu'au jour où le système judiciaire se retourne contre eux…",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=274530.html",
        reco: true,
        img: {
            pp: "https://fr.web.img6.acsta.net/c_310_420/pictures/21/06/07/13/11/2832970.jpg",
            banner: "https://img.lemde.fr/2021/08/16/143/0/1325/881/664/0/75/0/93015c5_726648545-1.jpg"
        },
        video: "https://uqload.com/embed-cl96ijd3fnq5.html"
    },
    {
        name: "Free Guy",
        description: "Un employé de banque, découvrant un jour qu’il n’est en fait qu’un personnage d’arrière-plan dans un jeu vidéo en ligne, décide de devenir le héros de sa propre histoire, quitte à la réécrire.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=251824.html",
        reco: true,
        img: {
            pp: "https://fr.web.img2.acsta.net/c_310_420/pictures/21/06/23/18/09/1919284.jpg",
            banner: "https://cdn1.naekranie.pl/media/cache/article-cover/2021/12/6_619e04cfb47b8_61b0af28de573.jpeg"
        },
        video: "https://uqload.com/embed-sw2i9efsbd6b.html"
    },


    // comedie
    {
        name: "Le Diner des Cons",
        video: "https://uqload.com/embed-zgdxky2i2lji.html",
        description: "Tous les mercredis, Pierre Brochant et ses amis organisent un dîner où chacun doit amener un con. Celui qui a trouvé le plus spectaculaire est declaré vainqueur. Ce soir, Brochant exulte, il est sur d'avoir trouvé la perle rare, un con de classe mondiale: Francois Pignon, comptable au ministère des Finances et passionné de modèles réduits en allumettes. Ce qu'il ignore c'est que Pignon est passe maître dans l'art de déclencher des catastrophes.",
        comedie: true,
        img: {
            pp: "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/36/10/96/19649758.jpg",
            banner: "https://www.programme-tv.net/imgre/fit/~1~tel~2022~06~23~cfa559b6-1f89-492d-bc30-bfa041a26c66.jpeg/1200x600/crop-from/top/quality/80/le-diner-de-cons-tf1-comment-le-film-de-jacques-veber-est-devenu-culte.jpg",
        },
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=2133.html",
    },
    {
        name: "Les Profs",
        video: "https://uqload.com/embed-bthgc9pme3q2.html",
        description: "Avec ses 12% de réussite au bac, le lycée Jules Ferry est le pire lycée de France. Ayant déjà épuisé toutes les méthodes conventionnelles, l’Inspecteur d’Académie, au désespoir, s’en remet aux conseils de son Adjoint. Ce dernier lui propose de recruter une équipe de professeurs selon une nouvelle formule : aux pires élèves, les pires profs pour soigner le mal par le mal… C’est sa dernière chance de sauver l’établissement, à condition de dépasser le seuil des 50% de réussite au bac. L'inspecteur accepte, pour le meilleur... et pour le pire.",
        comedie: true,
        img: {
            pp: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/95/14/16/20455360.jpg",
            banner: "https://www.slate.fr/sites/default/files/styles/1200x680/public/les-profs-2_0.jpg",
        },
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=210211.html",
    },
    {
        name: "Les Profs 2",
        video: "https://uqload.com/embed-n7k8sdad8h73.html",
        description: "Les pires Profs de France débarquent en Angleterre pour une mission ultra-secrète. Avec Boulard, le Roi des cancres, ils sont parachutés dans le meilleur lycée du pays, et ils vont appliquer leurs célèbres méthodes sur la future élite de la nation. L'enjeu est énorme : de leur réussite dépendra l'avenir du Royaume tout entier... Cette année : aux meilleurs élèves, les pires profs quand même !!!",
        comedie: true,
        img: {
            pp: "https://fr.web.img5.acsta.net/c_310_420/pictures/15/06/01/14/20/400975.jpg",
            banner: "https://images.midilibre.fr/api/v1/images/view/5b48982f8fe56f45791cf12a/large/image.jpg",
        },
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=224323.html",
    },
    {
        name: "Taxi",
        comedie: true,
        img: {
            banner: "https://cdn-europe1.lanmedia.fr/var/europe1/storage/images/europe1/culture/taxi-retour-sur-une-saga-phenomene-en-images-3623105/47627204-1-fre-FR/Taxi-retour-sur-une-saga-phenomene-en-images.jpg",
            pp: "https://fr.web.img3.acsta.net/c_310_420/medias/nmedia/00/02/49/22/affiche.jpg",
        },
        video: "https://uqload.com/embed-jzn0jnxrtq01.html",
        description: "Daniel est un fou du volant. Cet ex-livreur de pizzas est aujourd'hui chauffeur de taxi et sait échapper aux radars les plus perfectionnés. Pourtant, un jour, il croise la route d'Emilien, policier recalé pour la huitième fois à son permis de conduire. Pour conserver son taxi, il accepte le marché que lui propose Emilien : l'aider à démanteler un gang de braqueurs de banques qui écume les succursales de la ville à bord de puissants véhicules. Road-movie urbain sur un scénario de Luc Besson, également producteur.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=17106.html",
    }, {
        name: "Taxi 2",
        comedie: true,
        img: {
            banner: "https://media.gqmagazine.fr/photos/5ba94472eb155f001203af4e/16:9/w_1280,c_limit/la_peugeot_406_de_taxi_2_a___t___vendu_7980.jpeg",
            pp: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/63/24/72/18962752.jpg",
        },
        video: "https://uqload.com/embed-83iqt19l8cuh.html",
        description: "La ravissante Lily va enfin présenter Daniel à son père, un important général de l'armée française. Or, Daniel est retardé par une femme enceinte qui accouche dans son taxi. Malgré tout, le jeune homme réussit à séduire son simili-beau-père, mais le repas est brusquement interrompu car le général doit accueillir le Ministre japonais de la défense. Daniel le conduit à l'aéroport à une vitesse record. Il y retrouve son copain Emilien, policier toujours aussi dévoué, mais guère efficace.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=23460.html",
    }, {
        name: "Taxi 3",
        comedie: true,
        img: {
            banner: "https://images.cinefil.com/movies/206927_1600x450.webp",
            pp: "https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/00/02/57/84/affiche.jpg",
        },
        video: "https://uqload.com/embed-6tylmceed246.html",
        description: "Marseille, à l'approche de Noël. Daniel ne cesse de rajouter des gadgets à son taxi. Au point de faire passer son bolide avant sa compagne, Lilly, qui décide de retourner vivre chez ses parents. Petra, elle, reproche à Emilien d'avoir la tête ailleurs. Celui-ci enrage en effet de ne pas avoir encore arrêté le gang des pères Noël, qui multiplie les braquages depuis huit mois.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=41230.html",
    }, {
        name: "Taxi 4",
        comedie: true,
        img: {
            banner: "https://m.media-amazon.com/images/M/MV5BZjNhZTZmNWQtNmEzMi00NWE0LWIxOTUtMjUwZGVmOGQ5ZmZmXkEyXkFqcGdeQXVyMTk5MjkzMjU@._V1_.jpg",
            pp: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/63/73/33/18723066.jpg",
        },
        video: "https://uqload.com/embed-p5izpz1fvqyl.html",
        description: "De l'eau a coulé sous les ponts depuis la dernière aventure de Daniel et Emilien : les deux hommes sont désormais pères de famille et ont du mal à s'occuper de leurs fils, deux sacrés canailles. Une chose n'a pas changé cependant : Emilien est toujours le policier le plus maladroit et malchanceux de Marseille et Daniel le conducteur de taxi le plus rapide. Les deux hommes vont devoir faire équipe afin d'arrêter un terrifiant braqueur de banque surnommé \"Le Belge\"...",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=112452.html",
    }, {
        name: "Taxi 5",
        comedie: true,
        img: {
            banner: "https://resize.programme-television.ladmedia.fr/r/670,670/img/var/premiere/storage/images/tele-7-jours/news-tv/taxi-5-canal-franck-gastambide-prend-les-commandes-de-la-franchise-4626667/94950560-1-fre-FR/Taxi-5-Canal-Franck-Gastambide-prend-les-commandes-de-la-franchise.jpg",
            pp: "https://fr.web.img6.acsta.net/c_310_420/pictures/18/03/09/12/16/2548759.jpg",
        },
        video: "https://uqload.com/embed-5mmnqd3xzar8.html",
        description: "Sylvain Marot, super flic parisien et pilote d’exception, est muté contre son gré à la Police Municipale de Marseille. L’ex-commissaire Gibert, devenu Maire de la ville et au plus bas dans les sondages, va alors lui confier la mission de stopper le redoutable « Gang des Italiens », qui écume des bijouteries à l’aide de puissantes Ferrari.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=250627.html",
    },

    // Super heros
    {
        name: "Shazam",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=126922.html",
        img: {
            pp: "https://fr.web.img2.acsta.net/c_310_420/pictures/19/03/11/16/43/1722757.jpg",
            banner: "https://www.ecranlarge.com/uploads/image/001/380/shazam-photo-zachary-levi-1380861.jpg",
        },
        heros: true,
        video: "https://uqload.com/embed-eupw80wpv1c9.html",
        description: "On a tous un super-héros qui sommeille au fond de soi… il faut juste un peu de magie pour le réveiller. Pour Billy Batson, gamin débrouillard de 14 ans placé dans une famille d'accueil, il suffit de crier \"Shazam !\" pour se transformer en super-héros.Ado dans un corps d'adulte sculpté à la perfection, Shazam s'éclate avec ses tout nouveaux superpouvoirs. Est-il capable de voler ? De voir à travers n'importe quel type de matière ? De faire jaillir la foudre de ses mains ? Et de sauter son examen de sciences sociales ? Shazam repousse les limites de ses facultés avec l'insouciance d'un enfant. Mais il lui faudra maîtriser rapidement ses pouvoirs pour combattre les forces des ténèbres du Dr Thaddeus Sivana…",
    },
    {
        name: "Avengers",
        description: `Lorsque Nick Fury, le directeur du S.H.I.E.L.D., l'organisation qui préserve la paix au plan mondial, cherche à former une équipe de choc pour empêcher la destruction du monde, Iron Man, Hulk, Thor, Captain America, Hawkeye et Black Widow répondent présents. Les Avengers ont beau constituer la plus fantastique des équipes, il leur reste encore à apprendre à travailler ensemble, et non les uns contre les autres, d'autant que le redoutable Loki a réussi à accéder au Cube Cosmique et à son pouvoir illimité...`,
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=130440.html",
        img: {
            pp: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/85/31/58/20042068.jpg",
            banner: "https://radiodisneyclub.fr/wp-content/uploads/2021/01/Avengers.jpg"
        },
        heros: true,
        video: "https://uqload.com/embed-0cmkr66zwzkm.html"
    },
    {
        name: "AVENGERS: L'ÈRE D'ULTRON",
        description: `Alors que Tony Stark tente de relancer un programme de maintien de la paix jusque-là suspendu, les choses tournent mal et les super-héros Iron Man, Captain America, Thor, Hulk, Black Widow et Hawkeye vont devoir à nouveau unir leurs forces pour combattre le plus puissant de leurs adversaires : le terrible Ultron, un être technologique terrifiant qui s’est juré d’éradiquer l’espèce humaine. Afin d’empêcher celui-ci d’accomplir ses sombres desseins, des alliances inattendues se scellent, les entraînant dans une incroyable aventure et une haletante course contre le temps…`,
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=198488.html",
        img: {
            pp: "https://fr.web.img2.acsta.net/c_310_420/pictures/15/02/24/18/29/161927.jpg",
            banner: "https://oblikon.net/wp-content/uploads/avengers_ultron4.jpg"
        },
        heros: true,
        video: "https://uqload.com/embed-oimk5gvxf5kv.html"
    },
    {
        name: "AVENGERS: INFINITY WAR",
        description: `Les Avengers et leurs alliés devront être prêts à tout sacrifier pour neutraliser le redoutable Thanos avant que son attaque éclair ne conduise à la destruction complète de l’univers.`,
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=218265.html",
        img: {
            pp: "https://fr.web.img3.acsta.net/c_310_420/pictures/18/03/16/14/42/0611719.jpg",
            banner: "https://static.lpnt.fr/images/2018/04/30/14660841lpw-14660855-article-jpg_5204515_660x287.jpg"
        },
        heros: true,
        video: "https://uqload.com/embed-tgjvcb27n37t.html"
    },
    {
        name: "AVENGERS: ENDGAME",
        description: `Thanos ayant anéanti la moitié de l’univers, les Avengers restants resserrent les rangs dans ce vingt-deuxième film des Studios Marvel, grande conclusion d’un des chapitres de l’Univers Cinématographique Marvel.`,
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=232669.html",
        img: {
            pp: "https://fr.web.img6.acsta.net/c_310_420/pictures/19/04/04/09/04/0472053.jpg",
            banner: "https://www.comicsblog.fr/images/news/crop2_avengers-endgame-costume1.jpg"
        },
        heros: true,
        video: "https://uqload.com/embed-mzn8kib63wvz.html"
    },
    {
        name: "ANT-MAN",
        description: `Scott Lang, cambrioleur de haut vol, va devoir apprendre à se comporter en héros et aider son mentor, le Dr Hank Pym, à protéger le secret de son spectaculaire costume d’Ant-Man, afin d’affronter une effroyable menace…`,
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=130438.html",
        img: {
            pp: "https://fr.web.img2.acsta.net/c_310_420/pictures/15/05/06/16/05/305731.jpg",
            banner: "https://www.nerdface.it/wp-content/uploads/2021/07/ant-man.jpg"
        },
        heros: true,
        video: "https://uqload.com/embed-901sk7xm7e7p.html"
    },
    {
        name: "Les Gardiens de la Galaxie",
        description: "Peter Quill est un aventurier traqué par tous les chasseurs de primes pour avoir volé un mystérieux globe convoité par le puissant Ronan, dont les agissements menacent l’univers tout entier. Lorsqu’il découvre le véritable pouvoir de ce globe et la menace qui pèse sur la galaxie, il conclut une alliance fragile avec quatre aliens disparates :Rocket, un raton laveur fin tireur, Groot, un humanoïde semblable à un arbre, l’énigmatique et mortelle Gamora, et Drax le Destructeur, qui ne rêve que de vengeance. En les ralliant à sa cause, il les convainc de livrer un ultime combat aussi désespéré soit-il pour sauver ce qui peut encore l’être …",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=196604.html",
        img: {
            pp: "https://fr.web.img3.acsta.net/c_310_420/pictures/14/08/04/15/09/405662.jpg",
            banner: "https://imgr.cineserie.com/2020/12/les-gardiens-de-la-galaxie-un-film-disney-et-une-serie.png?imgeng=/f_jpg/cmpr_0/w_2588/h_1454/m_cropbox&ver=1"
        },
        heros: true,
        video: "https://uqload.com/embed-u16u5g59uvot.html"
    },
    {
        name: "Shang Chi",
        description: "Shang-Chi va devoir affronter un passé qu’il pensait avoir laissé derrière lui lorsqu’il est pris dans la toile de la mystérieuse organisation des dix anneaux.      ",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=270144.html",
        img: {
            pp: "https://fr.web.img6.acsta.net/c_310_420/pictures/21/08/25/11/54/3128925.jpg",
            banner: "https://www.comicsblog.fr/images/news/crop2_review-shang-chi-01.jpg"
        },
        heros: true,
        video: "https://uqload.com/embed-jfriyaqrguqh.html"
    },
    {
        name: "Doctor Strange",
        description: "Doctor Strange suit l'histoire du Docteur Stephen Strange, talentueux neurochirurgien qui, après un tragique accident de voiture, doit mettre son égo de côté et apprendre les secrets d'un monde caché de mysticisme et de dimensions alternatives. Basé à New York, dans le quartier de Greenwich Village, Doctor Strange doit jouer les intermédiaires entre le monde réel et ce qui se trouve au-delà, en utlisant un vaste éventail d'aptitudes métaphysiques et d'artefacts pour protéger le Marvel Cinematic Universe.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=130533.html",
        img: {
            pp: "https://fr.web.img6.acsta.net/c_310_420/pictures/16/09/09/08/57/518191.jpg",
            banner: "https://resize-europe1.lanmedia.fr/r/622,311,forcex,center-middle/img/var/europe1/storage/images/europe1/culture/4-bonnes-raisons-daller-voir-doctor-strange-au-cinema-2882471/29515469-1-fre-FR/4-bonnes-raisons-d-aller-voir-Doctor-Strange-au-cinema.jpg"
        },
        heros: true,
        video: "https://uqload.com/embed-n5tka0oklesj.html"
    },
    {
        name: "DOCTOR STRANGE: IN THE MULTIVERSE OF MADNESS",
        description: "Dans ce nouveau film Marvel Studios, l’univers cinématographique Marvel déverrouille et repousse les limites du multivers encore plus loin. Voyagez dans l’inconnu avec Doctor Strange, qui avec l’aide d’anciens et de nouveaux alliés mystiques, traverse les réalités hallucinantes et dangereuses du multivers pour affronter un nouvel adversaire mystérieux.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=251390.html",
        img: {
            pp: "https://fr.web.img3.acsta.net/c_310_420/pictures/22/04/08/10/30/1779137.jpg",
            banner: "https://pbs.twimg.com/media/FRzjiuwUUAATq7X?format=jpg&name=900x900"
        },
        heros: true,
        video: "https://uqload.com/embed-we2figlqjgm4.html"
    },
    {
        name: "Spider-Man",
        description: `Orphelin, Peter Parker est élevé par sa tante May et son oncle Ben dans le quartier Queens de New York. Tout en poursuivant ses études à l'université, il trouve un emploi de photographe au journal Daily Bugle. Il partage son appartement avec Harry Osborn, son meilleur ami, et rêve de séduire la belle Mary Jane.Cependant, après avoir été mordu par une araignée génétiquement modifiée, Peter voit son agilité et sa force s'accroître et se découvre des pouvoirs surnaturels. Devenu Spider Man, il décide d'utiliser ses nouvelles capacités au service du bien.Au même moment, le père de Harry, le richissime industriel Norman Osborn, est victime d'un accident chimique qui a démesurément augmenté ses facultés intellectuelles et sa force, mais l'a rendu fou. Il est devenu le Bouffon Vert, une créature démoniaque qui menace la ville. Entre lui et Spider Man, une lutte sans merci s'engage.`,
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=29007.html",
        img: {
            pp: "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/00/00/00/33/spiderman.jpg",
            banner: "https://img.phonandroid.com/2021/12/spdier-man-2002.jpg"
        },
        heros: true,
        video: "https://uqload.com/embed-biaptbc9tnyv.html"
    },
    {
        name: "Spider-Man 2",
        description: "Ecartelé entre son identité secrète de Spider Man et sa vie d'étudiant, Peter Parker n'a pas réussi à garder celle qu'il aime, Mary Jane, qui est aujourd'hui comédienne et fréquente quelqu'un d'autre. Guidé par son seul sens du devoir, Peter vit désormais chacun de ses pouvoirs à la fois comme un don et comme une malédiction. Par ailleurs, l'amitié entre Peter et Harry Osborn est elle aussi menacée. Harry rêve plus que jamais de se venger de Spider Man, qu'il juge responsable de la mort de son père. La vie de Peter se complique encore lorsque surgit un nouvel ennemi :le redoutable Dr Otto Octavius. Cerné par les choix et les épreuves qui engagent aussi bien sa vie intime que l'avenir du monde, Peter doit affronter son destin et faire appel à tous ses pouvoirs afin de se battre sur tous les fronts...",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=46112.html",
        img: {
            pp: "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/35/16/02/18380826.jpg",
            banner: "https://thumb.canalplus.pro/http/unsafe/%7BresolutionXY%7D/filters:quality(%7BimageQualityPercentage%7D)/img-hapi.canalplus.pro:80/ServiceImage/ImageID/52701725"
        },
        heros: true,
        video: "https://uqload.com/embed-xx6ix7ywmg98.html"
    },
    {
        name: "Spider-Man 3",
        description: "Peter Parker a enfin réussi à concilier son amour pour Mary-Jane et ses devoirs de super-héros. Mais l'horizon s'obscurcit. La brutale mutation de son costume, qui devient noir, décuple ses pouvoirs et transforme également sa personnalité pour laisser ressortir l'aspect sombre et vengeur que Peter s'efforce de contrôler.Sous l'influence de son costume, Peter devient trop sûr de lui et commence à négliger ses proches. Contraint de choisir entre le pouvoir si séduisant de ce nouveau costume et la compassion qui le caractérisait avant, Peter va faire face à ses démons lorsqu'il affrontera deux des pires méchants de l'histoire, l'Homme-sable et Vénom, dont l'extraordinaire puissance et la soif de vengeance menacent Peter et tous ceux qui lui sont chers.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=56136.html",
        img: {
            pp: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/35/62/65/18754165.jpg",
            banner: "https://images.bauerhosting.com/legacy/empire-tmdb/films/559/images/4dLA0LgN7tOMSsGwSUSZM7VG7AP.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill"
        },
        heros: true,
        video: "https://uqload.com/embed-fcwaedo6w9ft.html"
    },
    {
        name: "The Amazing Spider Man",
        description: "Abandonné par ses parents lorsqu’il était enfant, Peter Parker a été élevé par son oncle Ben et sa tante May. Il est aujourd’hui au lycée, mais il a du mal à s’intégrer. Comme la plupart des adolescents de son âge, Peter essaie de comprendre qui il est et d’accepter son parcours. Amoureux pour la première fois, lui et Gwen Stacy découvrent les sentiments, l’engagement et les secrets. En retrouvant une mystérieuse mallette ayant appartenu à son père, Peter entame une quête pour élucider la disparition de ses parents, ce qui le conduit rapidement à Oscorp et au laboratoire du docteur Curt Connors, l’ancien associé de son père. Spider Man va bientôt se retrouver face au Lézard, l’alter ego de Connors. En décidant d’utiliser ses pouvoirs, il va choisir son destin…",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=128188.html",
        img: {
            pp: "https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/18/83/19/35/20158079.jpg",
            banner: "https://www.badtaste.it/cinema/wp-content/uploads/sites/1/2022/07/the-amazing-spider-man.jpg"
        },
        heros: true,
        video: "https://uqload.com/embed-sqt2zp80lxuv.html"
    },
    {
        name: "THE AMAZING SPIDER MAN: LE DESTIN D'UN HÉROS",
        description: "Ce n’est un secret pour personne que le combat le plus rude de Spider Man est celui qu’il mène contre lui-même en tentant de concilier la vie quotidienne de Peter Parker et les lourdes responsabilités de Spider Man. Mais Peter Parker va se rendre compte qu’il fait face à un conflit de bien plus grande ampleur. Être Spider Man, quoi de plus grisant ? Peter Parker trouve son bonheur entre sa vie de héros, bondissant d’un gratte-ciel à l’autre, et les doux moments passés aux côté de Gwen. Mais être Spider Man a un prix :il est le seul à pouvoir protéger ses concitoyens new-yorkais des abominables méchants qui menacent la ville.  Face à Electro, Peter devra affronter un ennemi nettement plus puissant que lui.  Au retour de son vieil ami Harry Osborn, il se rend compte que tous ses ennemis ont un point commun :OsCorp.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=192186.html",
        img: {
            pp: "https://fr.web.img2.acsta.net/c_310_420/pictures/14/04/08/14/38/427284.jpg",
            banner: "https://www.comics1.com/wp-content/uploads/2020/08/the-amazing-spider-man-2.jpg"
        },
        heros: true,
        video: "https://uqload.com/embed-uy0zehqh9fjr.html"
    },
    {
        name: "Spider-Man Homecoming",
        description: "Après ses spectaculaires débuts dans Captain America :Civil War, le jeune Peter Parker découvre peu à peu sa nouvelle identité, celle de Spider Man, le super-héros lanceur de toile. Galvanisé par son expérience avec les Avengers, Peter rentre chez lui auprès de sa tante May, sous l’œil attentif de son nouveau mentor, Tony Stark. Il s’efforce de reprendre sa vie d’avant, mais au fond de lui, Peter rêve de se prouver qu’il est plus que le sympathique super héros du quartier. L’apparition d’un nouvel ennemi, le Vautour, va mettre en danger tout ce qui compte pour lui...",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=209778.html",
        img: {
            pp: "https://fr.web.img6.acsta.net/c_310_420/pictures/17/05/24/15/35/100661.jpg",
            banner: "https://thumb.canalplus.pro/http/unsafe/%7BresolutionXY%7D/filters:quality(%7BimageQualityPercentage%7D)/img-hapi.canalplus.pro:80/ServiceImage/ImageID/71432709"
        },
        heros: true,
        video: "https://uqload.com/embed-mtxpgt2267pr.html"
    },
    {
        name: "Spider-Man Far From Home",
        description: "L'araignée sympa du quartier décide de rejoindre ses meilleurs amis Ned, MJ, et le reste de la bande pour des vacances en Europe. Cependant, le projet de Peter de laisser son costume de super-héros derrière lui pendant quelques semaines est rapidement compromis quand il accepte à contrecoeur d'aider Nick Fury à découvrir le mystère de plusieurs attaques de créatures, qui ravagent le continent !",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=222291.html",
        img: {
            pp: "https://fr.web.img3.acsta.net/c_310_420/pictures/19/06/13/15/28/4575985.jpg",
            banner: "https://www.disneyphile.fr/wp-content/uploads/2019/06/Spider-Man-Nicky-Fury-Mysterio.jpg"
        },
        heros: true,
        video: "https://uqload.com/embed-58ixlp9konzu.html"
    },
    {
        name: "Spider-Man No Way Home",
        description: "Pour la première fois dans son histoire cinématographique, Spider Man, le héros sympa du quartier est démasqué et ne peut désormais plus séparer sa vie normale de ses lourdes responsabilités de super-héros. Quand il demande de l'aide à Doctor Strange, les enjeux deviennent encore plus dangereux, le forçant à découvrir ce qu'être Spider Man signifie véritablement.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=256880.html",
        img: {
            pp: "https://fr.web.img2.acsta.net/c_310_420/pictures/21/11/16/10/01/4860598.jpg",
            banner: "https://www.geekslands.fr/wp-content/uploads/2021/12/Spider-Man-No-Way-Home-Trailer-Turned-Into-Epic-Multiverse-Poster-Art.jpg"
        },
        heros: true,
        video: "https://uqload.com/embed-k382kifkc4fk.html"
    },
    {
        name: "Deadpool",
        description: "Deadpool, est l'anti-héros le plus atypique de l'univers Marvel. A l'origine, il s'appelle Wade Wilson :un ancien militaire des Forces Spéciales devenu mercenaire. Après avoir subi une expérimentation hors norme qui va accélérer ses pouvoirs de guérison, il va devenir Deadpool. Armé de ses nouvelles capacités et d'un humour noir survolté, Deadpool va traquer l'homme qui a bien failli anéantir sa vie.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=146349.html",
        img: {
            pp: "https://fr.web.img2.acsta.net/c_310_420/pictures/16/01/19/16/49/249124.jpg",
            banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ABiYSjQmPCLCyWDCINuSz9Ww2qy_z2liW17rA4VMO0ciErzp3HS9phtScguNfblgGtw&usqp=CAU"
        },
        heros: true,
        video: "https://uqload.com/embed-c4m7pnhixg0u.html"
    },
    {
        name: "Deadpool 2",
        description: "L’insolent mercenaire de Marvel remet le masque ! Plus grand, plus-mieux, et occasionnellement les fesses à l’air, il devra affronter un Super-Soldat dressé pour tuer, repenser l’amitié, la famille, et ce que signifie l’héroïsme – tout en bottant cinquante nuances de culs, car comme chacun sait, pour faire le Bien, il faut parfois se salir les doigts.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=245006.html",
        img: {
            pp: "https://fr.web.img2.acsta.net/c_310_420/pictures/18/04/06/16/26/2317955.jpg",
            banner: "https://www.lemagducine.fr/wp-content/uploads/2018/05/Deadpool-2-film-David-Leitch-critique-movie-with-Ryan-Reynolds-Josh-Brolin-Morena-Baccarin.jpg"
        },
        heros: true,
        video: "https://uqload.com/embed-93hpsbfhh29v.html"
    },
    {
        name: "Wonder Woman",
        description: "C'était avant qu'elle ne devienne Wonder Woman, à l'époque où elle était encore Diana, princesse des Amazones et combattante invincible. Un jour, un pilote américain s'écrase sur l'île paradisiaque où elle vit, à l'abri des fracas du monde. Lorsqu'il lui raconte qu'une guerre terrible fait rage à l'autre bout de la planète, Diana quitte son havre de paix, convaincue qu'elle doit enrayer la menace. En s'alliant aux hommes dans un combat destiné à mettre fin à la guerre, Diana découvrira toute l'étendue de ses pouvoirs… et son véritable destin.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=173720.html",
        img: {
            pp: "https://fr.web.img6.acsta.net/c_310_420/pictures/17/05/09/17/15/350974.jpg",
            banner: "https://www.lemagducine.fr/wp-content/uploads/2018/05/Deadpool-2-film-David-Leitch-critique-movie-with-Ryan-Reynolds-Josh-Brolin-Morena-Baccarin.jpg"
        },
        heros: true,
        video: "https://uqload.com/embed-8g9v4ho4royv.html"
    },
    {
        name: "Wonder Woman 1984",
        description: "Suite des aventures de Diana Prince, alias Wonder Woman, Amazone devenue une super-héroïne dans notre monde. Après la Première guerre mondiale, direction les années 80 ! Cette fois, Wonder Woman doit affronter deux nouveaux ennemis, particulièrement redoutables :Max Lord et Cheetah.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=256588.html",
        img: {
            pp: "https://fr.web.img2.acsta.net/c_310_420/pictures/20/12/07/17/38/1866668.jpg",
            banner: "https://www.leparisien.fr/resizer/Q6ObAi1ArFTxnso3BEIX8BNEbts=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/GQB2IA3WHU7O7EYZUZ4B4EVAOM.jpg"
        },
        heros: true,
        video: "https://uqload.com/embed-tldqh3tk9p0k.html"
    },
    {
        name: "Justice League",
        description: "Après avoir retrouvé foi en l'humanité, Bruce Wayne, inspiré par l'altruisme de Superman, sollicite l'aide de sa nouvelle alliée, Diana Prince, pour affronter un ennemi plus redoutable que jamais. Ensemble, Batman et Wonder Woman ne tardent pas à recruter une équipe de méta-humains pour faire face à cette menace inédite. Pourtant, malgré la force que représente cette ligue de héros sans précédent – Batman, Wonder Woman, Aquaman, Cyborg et Flash –, il est peut-être déjà trop tard pour sauver la planète d'une attaque apocalyptique…      ",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=126527.html",
        img: {
            pp: "https://fr.web.img5.acsta.net/c_310_420/pictures/17/10/31/10/29/4837499.jpg",
            banner: "https://fr.web.img5.acsta.net/newsv7/21/04/26/16/59/5624746.jpg"
        },
        heros: true,
        video: "https://uqload.com/embed-mnbo80h3wrmx.html"
    },
    {
        name: "Man of Steel",
        description: "Un petit garçon découvre qu'il possède des pouvoirs surnaturels et qu'il n'est pas né sur Terre. Plus tard, il s'engage dans un périple afin de comprendre d'où il vient et pourquoi il a été envoyé sur notre planète. Mais il devra devenir un héros s'il veut sauver le monde de la destruction totale et incarner l'espoir pour toute l'humanité.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=123348.html",
        img: {
            pp: "https://fr.web.img6.acsta.net/c_310_420/pictures/210/081/21008110_20130524125237634.jpg",
            banner: "http://filmint.nu/wp-content/uploads/2013/06/Man-of-Steel-Movie-2013-Poster.jpg"
        },
        heros: true,
        video: "https://uqload.com/embed-n4udhnu3todq.html"
    },
    {
        name: "Thor",
        description: "Thor :Le Monde des ténèbres nous entraîne dans les nouvelles aventures de Thor, le puissant Avenger, qui lutte pour sauver la Terre et les neuf mondes d’un mystérieux ennemi qui convoite l’univers tout entier… Après les films Marvel Thor et Avengers, Thor se bat pour restaurer l’ordre dans le cosmos, mais une ancienne race, sous la conduite du terrible Malekith, un être assoiffé de vengeance, revient pour répandre les ténèbres. Confronté à un ennemi que même Odin et Asgard ne peuvent contrer, Thor doit s’engager dans son aventure la plus dangereuse et la plus personnelle, au cours de laquelle il va devoir s’allier au traître Loki pour sauver non seulement son peuple et ceux qui lui sont chers, mais aussi l’univers lui-même.      ",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=129477.html",
        img: {
            pp: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/77/96/35/19701393.jpg",
            banner: "https://i0.wp.com/alarencontreduseptiemeart.com/wp-content/uploads/2018/03/Thor.jpg?fit=1200%2C630&ssl=1"
        },
        heros: true,
        video: "https://uqload.com/embed-732mp2061r6f.html"
    },
    {
        name: "THOR: LE MONDE DES TÉNÈBRES",
        description: "Thor :Le Monde des ténèbres nous entraîne dans les nouvelles aventures de Thor, le puissant Avenger, qui lutte pour sauver la Terre et les neuf mondes d’un mystérieux ennemi qui convoite l’univers tout entier… Après les films Marvel Thor et Avengers, Thor se bat pour restaurer l’ordre dans le cosmos, mais une ancienne race, sous la conduite du terrible Malekith, un être assoiffé de vengeance, revient pour répandre les ténèbres. Confronté à un ennemi que même Odin et Asgard ne peuvent contrer, Thor doit s’engager dans son aventure la plus dangereuse et la plus personnelle, au cours de laquelle il va devoir s’allier au traître Loki pour sauver non seulement son peuple et ceux qui lui sont chers, mais aussi l’univers lui-même.      ",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=193108.html",
        img: {
            pp: "https://fr.web.img5.acsta.net/c_310_420/pictures/210/407/21040735_20130916181657638.jpg",
            banner: "https://static.hitek.fr/img/actualite/ill_m/1383645088/maxresdefault-46.jpg"
        },
        heros: true,
        video: "https://uqload.com/embed-remarup65952.html"
    },
    {
        name: "THOR: RAGNAROK",
        description: "Privé de son puissant marteau, Thor est retenu prisonnier sur une lointaine planète aux confins de l’univers. Pour sauver Asgard, il va devoir lutter contre le temps afin d’empêcher l’impitoyable Hela d’accomplir le Ragnarök – la destruction de son monde et la fin de la civilisation asgardienne. Mais pour y parvenir, il va d’abord devoir mener un combat titanesque de gladiateurs contre celui qui était autrefois son allié au sein des Avengers :l’incroyable Hulk…",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=223252.html",
        img: {
            pp: "https://fr.web.img6.acsta.net/c_310_420/pictures/17/08/24/17/34/098917.jpg",
            banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtUkVOHkow1h4dvP9gG_mg-it0PmtTx3uxBMwv0b-gg4X9eyUz-_tSHzLSrDUEZ6X0KK0&usqp=CAU"
        },
        heros: true,
        video: "https://uqload.com/embed-rxc2a94ms15v.html"
    },
    {
        name: "THOR: LOVE AND THUNDER",
        description: "Alors que Thor est en pleine introspection et en quête de sérénité, sa retraite est interrompue par un tueur galactique connu sous le nom de Gorr, qui s’est donné pour mission d’exterminer tous les dieux. Pour affronter cette menace, Thor demande l’aide de Valkyrie, de Korg et de son ex-petite amie Jane Foster, qui, à sa grande surprise, manie inexplicablement son puissant marteau, le Mjolnir. Ensemble, ils se lancent dans une dangereuse aventure cosmique pour comprendre les motivations qui poussent Gorr à la vengeance et l’arrêter avant qu’il ne soit trop tard.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=275207.html",
        img: {
            pp: "https://fr.web.img5.acsta.net/c_310_420/pictures/22/05/24/11/16/2411535.jpg",
            banner: "https://www.ecranlarge.com/media/cache/resolve/1600x1200/uploads/articles/001/433/328/thor-love-and-thunder-affiche-1433333-large.jpg"
        },
        heros: true,
        video: "https://uqload.com/embed-u45i466x12mn.html"
    },
    {
        name: "Captain Marvel",
        description: "Captain Marvel raconte l’histoire de Carol Danvers qui va devenir l’une des super-héroïnes les plus puissantes de l’univers lorsque la Terre se révèle l’enjeu d’une guerre galactique entre deux races extraterrestres.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=141110.html",
        img: {
            pp: "https://fr.web.img6.acsta.net/c_310_420/pictures/18/12/03/08/53/5968896.jpg",
            banner: "https://www.sird.eu/wp-content/uploads/2022/09/Brie-Larson-aborde-lavenir-du-MCU-en-tant-que-capitaine.jpg"
        },
        heros: true,
        video: "https://uqload.com/embed-7zp5j0m9h51j.html"
    },
    {
        name: "Venom",
        description: "Possédé par un symbiote qui agit de manière autonome, le journaliste Eddie Brock devient le protecteur létal Venom.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=138473.html",
        img: {
            pp: "https://fr.web.img6.acsta.net/c_310_420/pictures/18/09/20/10/41/4338768.jpg",
            banner: "https://www.tomsguide.fr/content/uploads/sites/2/2018/12/venom.jpg"
        },
        heros: true,
        video: "https://uqload.com/embed-vocjfkf0x3dt.html"
    },
    {
        name: "Venom: Let There Be Carnage",
        description: "Tom Hardy est de retour sur grand écran sous les traits de Venom, l'un des personnages les plus complexes de l'univers Marvel.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=269758.html",
        img: {
            pp: "https://fr.web.img6.acsta.net/c_310_420/pictures/21/09/01/11/19/0900123.jpg",
            banner: "https://www.geekslands.fr/wp-content/uploads/2021/09/Venom-2-Runtime.jpg"
        },
        heros: true,
        video: "https://uqload.com/embed-9mxqunbwjpvx.html"
    },
    {
        name: "Les Eternels",
        description: "En 2001, la jeune Qiao est amoureuse de Bin, petit chef de la pègre locale de Datong. Alors que Bin est attaqué par une bande rivale, Qiao prend sa défense et tire plusieurs coups de feu. Elle est condamnée à cinq ans de prison. A sa sortie, Qiao part à la recherche de Bin et tente de renouer avec lui. Mais il refuse de la suivre. Dix ans plus tard, à Datong, Qiao est célibataire, elle a réussi sa vie en restant fidèle aux valeurs de la pègre. Bin, usé par les épreuves, revient pour retrouver Qiao, la seule personne qu’il ait jamais aimée…",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=136316.html",
        img: {
            pp: "https://fr.web.img5.acsta.net/c_310_420/pictures/21/10/13/10/33/5985249.jpg",
            banner: "https://www.geekslands.fr/wp-content/uploads/2021/09/Venom-2-Runtime.jpghttps://www.radiofrance.fr/s3/cruiser-production/2021/11/91ee56bd-b9c5-4adf-aaaa-130dce235d13/1200x680_eternels-marvel.jpg"
        },
        heros: true,
        video: "https://uqload.com/embed-qnj0bfke40uj.html"
    },
    {
        name: "Aquaman",
        description: "Les origines d’un héros malgré lui, dont le destin est d’unir deux mondes opposés, la terre et la mer. Cette histoire épique est celle d’un homme ordinaire destiné à devenir le roi des Sept Mers.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=208692.html",
        img: {
            pp: "https://fr.web.img5.acsta.net/c_310_420/pictures/18/12/13/12/12/2738771.jpg",
            banner: "https://static.hitek.fr/img/actualite/ill_m/2019367966/edfiszkb2q1nsa5jve7q.jpg"
        },
        heros: true,
        video: "https://uqload.com/embed-vx0hpztpk8q6.html"
    },
    {
        name: "Hulk",
        description: "Au cours d'une opération scientifique qui a mal tourné, le docteur Bruce Banner est exposé à une surdose de radiations nucléaires. Miraculeusement indemne, il sort néanmoins affecté de cette douloureuse expérience et développe le pouvoir de se transformer en Hulk, un monstre vert à la force surhumaine et à la rage incontrôlable. Cette créature ne se manifeste que lorsque ce dernier est soumis à une intense émotion.Mis au ban de la société, le docteur Banner est obligé de se cacher pour ne pas faire subir aux autres sa métamorphose. Le général Ross, le père de Betty, l'ex-petite amie de Bruce, est chargé de stopper le monstre par tous les moyens. Glenn Talbot, rival scientifique de Banner, est également sur les traces de Hulk. Lorsque Betty découvre que la créature a un rapport avec les recherches du père de Bruce, elle devient la seule à pouvoir comprendre ce qu'est Hulk...",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=34509.html",
        img: {
            pp: "https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/00/02/54/34/affiche2.jpg",
            banner: "https://geeko-media.lesoir.be/wp-content/uploads/2021/10/hulk-1068x580.jpg"
        },
        heros: true,
        video: "https://uqload.com/embed-61cmy2p6unq1.html"
    },
    {
        name: "L'Incroyable Hulk",
        description: "Le scientifique Bruce Banner cherche désespérément un antidote aux radiations gamma qui ont créé Hulk. Il vit dans l'ombre, toujours amoureux de la belle Betty Ross et parcourt la planète à la recherche d'un remède.La force destructrice de Hulk attire le Général Thunderbolt Ross et son bras droit Blonsky qui rêvent de l'utiliser à des fins militaires. Ils tentent de développer un sérum pour créer des soldats surpuissants.De retour aux Etats-Unis, Bruce Banner se découvre un nouvel ennemi. Après avoir essayé le sérum expérimental, Blonsky est devenu L'Abomination, un monstre incontrôlable dont la force pure est même supérieure à celle de Hulk. Devenu fou, il s'est transformé en plein coeur de New York.Pour sauver la ville de la destruction totale, Bruce Banner va devoir faire appel au monstre qui sommeille en lui...",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=114820.html",
        img: {
            pp: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/65/69/21/18949753.jpg",
            banner: "https://thumb.canalplus.pro/http/unsafe/%7BresolutionXY%7D/filters:quality(%7BimageQualityPercentage%7D)/img-hapi.canalplus.pro:80/ServiceImage/ImageID/98051681"
        },
        heros: true,
        video: "https://uqload.com/embed-samixp0pbc7o.html"
    },
    {
        name: "Green Lantern",
        description: "Dans un univers aussi vaste que mystérieux, une force aussi petite que puissante est en place depuis des siècles :des protecteurs de la paix et de la justice appelés Green Lantern Corps, une confrérie de guerriers qui a juré de maintenir l’ordre intergalactique, et dont chaque membre porte un anneau lui conférant des super-pouvoirs. Mais quand un ennemi du nom de Parallax menace de rompre l’équilibre entre les forces de l’univers, leur destin et celui de la Terre repose sur leur dernière recrue, le premier humain jamais choisi :Hal Jordan. Hal est un pilote d’essai talentueux et imprudent, mais les Green Lanterns ont un peu de respect pour les humains, qui n’ont jamais exploité les pouvoirs infinis de l’anneau auparavant. Hal est clairement la pièce manquante du puzzle et il possède, en plus de sa détermination et de sa volonté, une chose qu’aucun des autres membres n’a jamais eu :son humanité. Soutenu par son amour d’enfance, le pilote Carol Ferris, Hal doit rapidement maîtriser ses nouveaux pouvoirs et vaincre ses peur, pour prouver qu’il n’est pas que la clé pour vaincre Parallax… mais peut-être le plus grand Green Lantern de tous les temps.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=132150.html",
        img: {
            pp: "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/71/59/31/19759992.jpg",
            banner: "https://fr.web.img2.acsta.net/newsv7/19/10/30/08/29/3651889.jpg"
        },
        heros: true,
        video: "https://uqload.com/embed-plwsu5xas9ml.html"
    },

    // classique
    {
        name: "Star Wars 1",
        description: "Avant de devenir un célèbre chevalier Jedi, et bien avant de se révéler l’âme la plus noire de la galaxie, Anakin Skywalker est un jeune esclave sur la planète Tatooine. La Force est déjà puissante en lui et il est un remarquable pilote de Podracer. Le maître Jedi Qui-Gon Jinn le découvre et entrevoit alors son immense potentiel.Pendant ce temps, l’armée de droïdes de l’insatiable Fédération du Commerce a envahi Naboo, une planète pacifique, dans le cadre d’un plan secret des Sith visant à accroître leur pouvoir. Pour défendre la reine de Naboo, Amidala, les chevaliers Jedi vont devoir affronter le redoutable Seigneur Sith, Dark Maul.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=20754.html",
        classique: true,
        img: {
            pp: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/35/83/29/20017378.jpg",
            banner: "https://images.ladepeche.fr/api/v1/images/view/5c36605d3e45465f726f9358/large/image.jpg"
        },
        video: "https://uqload.com/embed-gv85blttit0v.html",
    }, {
        name: "Star Wars 2",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=29014.html",
        classique: true,
        img: {
            banner: "https://images5.alphacoders.com/339/thumb-1920-339226.jpg",
            pp: "https://fr.web.img3.acsta.net/c_310_420/medias/nmedia/00/02/34/81/affclones.jpg"
        },
        video: "https://uqload.com/embed-34iwobljd7ee.html",
        description: "Depuis le blocus de la planète Naboo par la Fédération du commerce, la République, gouvernée par le Chancelier Palpatine, connaît une véritable crise. Un groupe de dissidents, mené par le sombre Jedi comte Dooku, manifeste son mécontentement envers le fonctionnement du régime. Le Sénat et la population intergalactique se montrent pour leur part inquiets face à l'émergence d'une telle menace.Certains sénateurs demandent à ce que la République soit dotée d'une solide armée pour empêcher que la situation ne se détériore davantage. Parallèlement, Padmé Amidala, devenue sénatrice, est menacée par les séparatistes et échappe de justesse à un attentat. Le Padawan Anakin Skywalker est chargé de sa protection. Son maître, Obi-Wan Kenobi, part enquêter sur cette tentative de meurtre et découvre la constitution d'une mystérieuse armée de clones...",
    }, {
        name: "Star Wars 3",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=40623.html",
        classique: true,
        img: {
            banner: "https://fr.web.img5.acsta.net/newsv7/20/11/16/15/59/4068012.jpg",
            pp: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/35/53/23/18423997.jpg",
        },
        video: "https://uqload.com/embed-0ljktzhh690z.html",
        description: "La Guerre des Clones fait rage. Une franche hostilité oppose désormais le Chancelier Palpatine au Conseil Jedi. Anakin Skywalker, jeune Chevalier Jedi pris entre deux feux, hésite sur la conduite à tenir. Séduit par la promesse d'un pouvoir sans précédent, tenté par le côté obscur de la Force, il prête allégeance au maléfique Darth Sidious et devient Dark Vador.Les Seigneurs Sith s'unissent alors pour préparer leur revanche, qui commence par l'extermination des Jedi. Seuls rescapés du massacre, Yoda et Obi Wan se lancent à la poursuite des Sith. La traque se conclut par un spectaculaire combat au sabre entre Anakin et Obi Wan, qui décidera du sort de la galaxie.",
    }, {
        name: "Star Wars 4",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=25801.html",
        classique: true,
        img: {
            banner: "https://www.numerama.com/wp-content/uploads/2016/09/star-wars-1.jpg",
            pp: "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/35/41/59/18422600.jpg",
        },
        video: "https://uqload.com/embed-ktddysf9gwew.html",
        description: "Il y a bien longtemps, dans une galaxie très lointaine... La guerre civile fait rage entre l'Empire galactique et l'Alliance rebelle. Capturée par les troupes de choc de l'Empereur menées par le sombre et impitoyable Dark Vador, la princesse Leia Organa dissimule les plans de l'Etoile Noire, une station spatiale invulnérable, à son droïde R2-D2 avec pour mission de les remettre au Jedi Obi-Wan Kenobi. Accompagné de son fidèle compagnon, le droïde de protocole C-3PO, R2-D2 s'échoue sur la planète Tatooine et termine sa quête chez le jeune Luke Skywalker. Rêvant de devenir pilote mais confiné aux travaux de la ferme, ce dernier se lance à la recherche de ce mystérieux Obi-Wan Kenobi, devenu ermite au coeur des montagnes désertiques de Tatooine...",
    }, {
        name: "Star Wars 5",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=25802.html",
        classique: true,
        img: {
            banner: "https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2020-05/ESB.JPG",
            pp: "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/00/02/44/28/empire.jpg",
        },
        video: "https://uqload.com/embed-gu3632v3wl8m.html",
        description: "Malgré la destruction de l'Etoile Noire, l'Empire maintient son emprise sur la galaxie, et poursuit sans relâche sa lutte contre l'Alliance rebelle. Basés sur la planète glacée de Hoth, les rebelles essuient un assaut des troupes impériales. Parvenus à s'échapper, la princesse Leia, Han Solo, Chewbacca et C-3P0 se dirigent vers Bespin, la cité des nuages gouvernée par Lando Calrissian, ancien compagnon de Han. Suivant les instructions d'Obi-Wan Kenobi, Luke Skywalker se rend quant à lui vers le système de Dagobah, planète marécageuse où il doit recevoir l'enseignement du dernier maître Jedi, Yoda. Apprenant l'arrestation de ses compagnons par les stormtroopers de Dark Vador après la trahison de Lando, Luke décide d'interrompre son entraînement pour porter secours à ses amis et affronter le sombre seigneur Sith...",
    }, {
        name: "Star Wars 6",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=25803.html",
        classique: true,
        img: {
            banner: "https://static.hitek.fr/img/42/2015/12/fb_7773769005-star-wars.jpg",
            pp: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/35/41/62/18422602.jpg",
        },
        video: "https://uqload.com/embed-evpygcm7kbmb.html",
        description: "L'Empire galactique est plus puissant que jamais :la construction de la nouvelle arme, l'Etoile de la Mort, menace l'univers tout entier... Arrêté après la trahison de Lando Calrissian, Han Solo est remis à l'ignoble contrebandier Jabba Le Hutt par le chasseur de primes Boba Fett. Après l'échec d'une première tentative d'évasion menée par la princesse Leia, également arrêtée par Jabba, Luke Skywalker et Lando parviennent à libérer leurs amis.Han, Leia, Chewbacca, C-3PO et Luke, devenu un Jedi, s'envolent dès lors pour une mission d'extrême importance sur la lune forestière d'Endor, afin de détruire le générateur du bouclier de l'Etoile de la Mort et permettre une attaque des pilotes de l'Alliance rebelle. Conscient d'être un danger pour ses compagnons, Luke préfère se rendre aux mains de Dark Vador, son père et ancien Jedi passé du côté obscur de la Force.",
    }, {
        name: "Star Wars 7",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=215097.html",
        classique: true,
        img: {
            banner: "http://images.genius.com/86486882d5ea1bf81a3adfc0ec996dee.1000x500x1.jpg",
            pp: "https://fr.web.img2.acsta.net/c_310_420/pictures/15/10/18/18/56/052074.jpg",
        },
        video: "https://uqload.com/embed-gy87vyby414z.html",
        description: "IDans une galaxie lointaine, très lointaine, un nouvel épisode de la saga Star Wars, 30 ans après les événements du Retour du Jedi.",
    }, {
        name: "Star Wars 8",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=215099.html",
        classique: true,
        img: {
            banner: "https://3238leblogdemarvelll-1278.kxcdn.com/wp-content/uploads/2017/12/star-wars-8-les-derniers-jedi-banniere-sans-texte-scaled.jpg",
            pp: "https://fr.web.img4.acsta.net/c_310_420/pictures/17/10/10/04/58/2061488.jpg",
        },
        video: "https://uqload.com/embed-vsmgq262kdbu.html",
        description: "Il y a bien longtemps, dans une galaxie très lointaine... La guerre civile fait rage entre l'Empire galactique et l'Alliance rebelle. Capturée par les troupes de choc de l'Empereur menées par le sombre et impitoyable Dark Vador, la princesse Leia Organa dissimule les plans de l'Etoile Noire, une station spatiale invulnérable, à son droïde R2-D2 avec pour mission de les remettre au Jedi Obi-Wan Kenobi. Accompagné de son fidèle compagnon, le droïde de protocole C-3PO, R2-D2 s'échoue sur la planète Tatooine et termine sa quête chez le jeune Luke Skywalker. Rêvant de devenir pilote mais confiné aux travaux de la ferme, ce dernier se lance à la recherche de ce mystérieux Obi-Wan Kenobi, devenu ermite au coeur des montagnes désertiques de Tatooine...",
    }, {
        name: "Star Wars 9",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=215094.html",
        classique: true,
        img: {
            banner: "https://img.filmsactu.net/datas/films/s/t/star-wars-episode-ix/xl/star-wars-episode-ix-5df8f67e0d6ae.jpg",
            pp: "https://fr.web.img5.acsta.net/c_310_420/pictures/20/10/02/12/21/3764004.png"
        },
        video: "https://uqload.com/embed-oj0jnh94fqos.html",
        description: "La conclusion de la saga Skywalker. De nouvelles légendes vont naître dans cette bataille épique pour la liberté.",
    },
    {
        name: "Harry Poter 1",
        classique: true,
        img: {
            pp: "https://fr.web.img6.acsta.net/c_310_420/pictures/18/07/02/17/25/3643090.jpg",
            banner: "https://static1.ozap.com/articles/2/53/08/42/@/4557722-daniel-radcliffe-dans-harry-potter-a-l-opengraph_1200-2.jpg",
        },
        video: "https://uqload.com/embed-w3wvt620zngq.html",
        description: "Le jour de son onzième anniversaire, Harry reçoit la visite inattendue d'un homme gigantesque se nommant Rubeus Hagrid. Celui-ci lui révèle qu'il est en fait le fils de deux puissants magiciens...",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=29276.html",
    }, {
        name: "Harry Poter 2",
        classique: true,
        img: {
            pp: "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/00/02/53/35/affiche0.jpg",
            banner: "https://fr.web.img4.acsta.net/videothumbnails/13/12/12/15/18/346706.jpg",
        },
        video: "https://uqload.com/embed-1lewn3mp95jc.html",
        description: "Alors que l'oncle Vernon, la tante Pétunia et son cousin Dudley reçoivent d'importants invités à dîner, Harry Potter est contraint de passer la soirée dans sa chambre. Dobby, un elfe, fait alors son apparition. Il lui annonce que de terribles dangers menacent l'école de Poudlard et qu'il ne doit pas y retourner en septembre. Harry refuse de le croire.Mais sitôt la rentrée des classes effectuée, ce dernier entend une voix malveillante. Celle-ci lui dit que la redoutable et légendaire Chambre des secrets est à nouveau ouverte, permettant ainsi à l'héritier de Serpentard de semer le chaos à Poudlard. Les victimes, retrouvées pétrifiées par une force mystérieuse, se succèdent dans les couloirs de l'école, sans que les professeurs - pas même le populaire Gilderoy Lockhart - ne parviennent à endiguer la menace. Aidé de Ron et Hermione, Harry doit agir au plus vite pour sauver Poudlard.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=41245.html",
    }, {
        name: "Harry Poter 3",
        classique: true,
        img: {
            pp: "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/35/23/41/18378380.jpg",
            banner: "https://thumb.canalplus.pro/http/unsafe/1280x720/filters:quality(80)/img-hapi.canalplus.pro:80/ServiceImage/ImageID/67054147",
        },
        video: "https://uqload.com/embed-6i6yll660koy.html",
        description: "Sirius Black, un dangereux sorcier criminel, s'échappe de la sombre prison d'Azkaban avec un seul et unique but :retrouver Harry Potter, en troisième année à l'école de Poudlard. Selon la légende, Black aurait jadis livré les parents du jeune sorcier à leur assassin, Lord Voldemort, et serait maintenant déterminé à tuer Harry...",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=46865.html",
    }, {
        name: "Harry Poter 4",
        classique: true,
        img: {
            pp: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/35/52/34/18450888.jpg",
            banner: "https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-05/montage_hp4_poster.jpg",
        },
        video: "https://uqload.com/embed-pf7iae4ys05z.html",
        description: "La quatrième année à l'école de Poudlard est marquée par le \"Tournoi des trois sorciers\". Les participants sont choisis par la fameuse \"coupe de feu\" qui est à l'origine d'un scandale. Elle sélectionne Harry Potter alors qu'il n'a pas l'âge légal requis !Accusé de tricherie et mis à mal par une série d'épreuves physiques de plus en plus difficiles, ce dernier sera enfin confronté à Celui dont on ne doit pas prononcer le nom, Lord V.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=53756.html",
    }, {
        name: "Harry Poter 5",
        classique: true,
        img: {
            pp: "https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/18/36/32/70/18778375.jpg",
            banner: "https://ayther.fr/wp-content/uploads/2020/05/harry-potter-5-age.jpg",
        },
        video: "https://uqload.com/embed-bfrcu9g9d28r.html",
        description: "Alors qu'il entame sa cinquième année d'études à Poudlard, Harry Potter découvre que la communauté des sorciers ne semble pas croire au retour de Voldemort, convaincue par une campagne de désinformation orchestrée par le Ministre de la Magie Cornelius Fudge. Afin de le maintenir sous surveillance, Fudge impose à Poudlard un nouveau professeur de Défense contre les Forces du Mal, Dolorès Ombrage, chargée de maintenir l'ordre à l'école et de surveiller les faits et gestes de Dumbledore. Prodiguant aux élèves des cours sans grand intérêt, celle qui se fait appeler la Grande Inquisitrice de Poudlard semble également décidée à tout faire pour rabaisser Harry. Entouré de ses amis Ron et Hermione, ce dernier met sur pied un groupe secret, \"L'Armée de Dumbledore\", pour leur enseigner l'art de la défense contre les forces du Mal et se préparer à la guerre qui s'annonce...",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=58608.html",
    }, {
        name: "Harry Poter 6",
        classique: true,
        img: {
            pp: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/65/64/35/19116952.jpg",
            banner: "https://imgsrc.cineserie.com/2020/05/harry-potter-et-le-prince-de-sang-mele-sur-tf1-un-debut-different-par-rapport-au-livre.jpg?ver=1",
        },
        video: "https://uqload.com/embed-rs40uk1813in.html",
        description: "L'étau démoniaque de Voldemort se resserre sur l'univers des Moldus et le monde de la sorcellerie. Poudlard a cessé d'être un havre de paix, le danger rode au coeur du château... Mais Dumbledore est plus décidé que jamais à préparer Harry à son combat final, désormais imminent. Ensemble, le vieux maître et le jeune sorcier vont tenter de percer à jour les défenses de Voldemort. Pour les aider dans cette délicate entreprise, Dumbledore va relancer et manipuler son ancien collègue, le Professeur Horace Slughorn, qu'il croit en possession d'informations vitales sur le jeune Voldemort. Mais un autre \"mal\" hante cette année les étudiants :le démon de l'adolescence ! Harry est de plus en plus attiré par Ginny, qui ne laisse pas indifférent son rival, Dean Thomas ; Lavande Brown a jeté son dévolu sur Ron, mais oublié le pouvoir \"magique\" des chocolats de Romilda Vane ; Hermione, rongée par la jalousie, a décidé de cacher ses sentiments, vaille que vaille. L'amour est dans tous les coeurs - sauf un. Car un étudiant reste étrangement sourd à son appel. Dans l'ombre, il poursuit avec acharnement un but aussi mystérieux qu'inquiétant... jusqu'à l'inévitable tragédie qui bouleversera à jamais Poudlard.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=116305.html",
    }, {
        name: "Harry Poter 7 Partie 1",
        classique: true,
        img: {
            pp: "https://fr.web.img3.acsta.net/c_310_420/medias/nmedia/18/69/69/81/19590744.jpg",
            banner: "https://imgr.cineserie.com/2022/08/harry-potter-et-les-reliques-de-la-mort-partie-1-les-coulisses-de-la-bataille-des-sept-potters.jpg?imgeng=/f_jpg/cmpr_0/w_1280/h_720/m_cropbox&ver=1",
        },
        video: "https://uqload.com/embed-dks9d8ewb0lc.html",
        description: "Le pouvoir de Voldemort s'étend. Celui-ci contrôle maintenant le Ministère de la Magie et Poudlard. Harry, Ron et Hermione décident de terminer le travail commencé par Dumbledore, et de retrouver les derniers Horcruxes pour vaincre le Seigneur des Ténèbres. Mais il reste bien peu d'espoir aux trois sorciers, qui doivent réussir à tout prix.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=126693.html",
    }, {
        name: "Harry Poter 7 Partie 2",
        classique: true,
        img: {
            pp: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/78/64/49/19762436.jpg",
            banner: "https://aws.vdkimg.com/film/3/2/2/0/322018_backdrop_scale_1280xauto.jpg",
        },
        video: "https://uqload.com/embed-ppl0xfl0yrf6.html",
        description: "Dans la 2e Partie de cet épisode final, le combat entre les puissances du bien et du mal de l’univers des sorciers se transforme en guerre sans merci. Les enjeux n’ont jamais été si considérables et personne n’est en sécurité. Mais c’est Harry Potter qui peut être appelé pour l’ultime sacrifice alors que se rapproche l’ultime épreuve de force avec Voldemort.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=134925.html",
    },
    {
        name: "Matrix 1",
        classique: true,
        img: {
            banner: "https://i0.wp.com/alarencontreduseptiemeart.com/wp-content/uploads/2017/07/Matrix-1.jpg?resize=640%2C280",
            pp: "https://fr.web.img4.acsta.net/c_310_420/medias/04/34/49/043449_af.jpg",
        },
        video: "https://uqload.com/embed-sojn5nrnfqkc.html",
        description: "Programmeur anonyme dans un service administratif le jour, Thomas Anderson devient Neo la nuit venue. Sous ce pseudonyme, il est l'un des pirates les plus recherchés du cyber-espace. A cheval entre deux mondes, Neo est assailli par d'étranges songes et des messages cryptés provenant d'un certain Morpheus. Celui-ci l'exhorte à aller au-delà des apparences et à trouver la réponse à la question qui hante constamment ses pensées : qu'est-ce que la Matrice ? Nul ne le sait, et aucun homme n'est encore parvenu à en percer les defenses. Mais Morpheus est persuadé que Neo est l'Elu, le libérateur mythique de l'humanité annoncé selon la prophétie. Ensemble, ils se lancent dans une lutte sans retour contre la Matrice et ses terribles agents...",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=19776.html",
    }, {
        name: "Matrix 2",
        classique: true,
        img: {
            banner: "https://www.lascimmiapensa.com/wp-content/uploads/2020/09/matrix.jpg",
            pp: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/00/02/53/34/affiche.jpg",
        },
        video: "https://uqload.com/embed-0ub36kjcm73j.html",
        description: "Neo apprend à mieux contrôler ses dons naturels, alors même que Sion s'apprête à tomber sous l'assaut de l'Armée des Machines. D'ici quelques heures, 250 000 Sentinelles programmées pour anéantir notre espèce envahiront la dernière enclave humaine de la Terre.Mais Morpheus galvanise les citoyens de Sion en leur rappelant la Parole de l'Oracle : il est encore temps pour l'Elu d'arrêter la guerre contre les Machines. Tous les espoirs se reportent dès lors sur Neo. Au long de sa périlleuse plongée au sein de la Matrix et de sa propre destinée, ce dernier sera confronté à une résistance croissante, une vérité encore plus aveuglante, un choix encore plus douloureux que tout ce qu'il avait jamais imaginé.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=28540.html",
    }, {
        name: "Matrix 3",
        classique: true,
        img: {
            banner: "https://fr.web.img6.acsta.net/medias/nmedia/18/35/14/18/18364930.jpg",
            pp: "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/35/14/64/18364977.jpg",
        },
        video: "https://uqload.com/embed-rwfz76t9pbg5.html",
        description: "La longue quête de liberté des rebelles culmine en une bataille finale explosive. Tandis que l'armée des Machines sème la désolation sur Zion, ses citoyens organisent une défense acharnée. Mais pourront-ils retenir les nuées implacables des Sentinelles en attendant que Neo s'approprie l'ensemble de ses pouvoirs et mette fin à la guerre ?L'agent Smith est quant à lui parvenu à prendre possession de l'esprit de Bane, l'un des membres de l'équipage de l'aéroglisseur. De plus en plus puissant, il est désormais incontrôlable et n'obéit plus aux Machines : il menace de détruire leur empire ainsi que le monde réel et la Matrice...",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=28546.html",
    },
    {
        name: "Pirate des Caraibes",
        classique: true,
        img: {
            banner: "https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/175/pirates-des-caraibes-la-malediction-du-black-pearl-photo-johnny-depp-orlando-bloom-1175722.jpg",
            pp: "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/35/07/46/affiche2.jpg",
        },
        video: "https://uqload.com/embed-snc0x67d192l.html",
        description: "Dans la mer des Caraïbes, au XVIIe siècle, Jack Sparrow, flibustier gentleman, voit sa vie idyllique basculer le jour où son ennemi, le perfide capitaine Barbossa, lui vole son bateau, le Black Pearl, puis attaque la ville de Port Royal, enlevant au passage la très belle fille du gouverneur, Elizabeth Swann. L'ami d'enfance de celle-ci, Will Turner, se joint à Jack pour se lancer aux trousses du capitaine.Mais Will ignore qu'une malédiction frappe Barbossa et ses pirates. Lorsque la lune brille, ils se transforment en morts-vivants. Leur terrible sort ne prendra fin que le jour où le fabuleux trésor qu'ils ont amassé sera restitué...",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=46117.html",
    }, {
        name: "Pirate des Caraibes 2",
        classique: true,
        img: {
            banner: "https://imgsrc.cineserie.com/2020/09/pirates-des-caraibes-2-lundi-28-septembre-sur-w9-le-black-pearl-a-ete-reconstruit-grandeur-nature-1.jpg?ver=1",
            pp: "https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/18/36/00/56/18604499.jpg",
        },
        video: "https://uqload.com/embed-0cbxk4pkt39x.html",
        description: "Dans ce nouvel opus de l'aventure Pirates des Caraïbes, le toujours aussi excentrique pirate Jack Sparrow est confronté subitement à son passé. Treize ans auparavant, Jack signait un pacte avec Davey Jones, le maître des sept mers, dont l'esprit maléfique n'a d'égal que son apparence tentaculaire. En échange de son âme, ce dernier lui promettait le commandement du mythique Black Pearl...Aujourd'hui, Jones vient donc récupérer sa dette. Mais donner son âme à Jones est sans issue, il n'y a pas de rédemption possible, c'est devenir comme tous les membres de son équipage maudit, un fantôme au physique aussi repoussant que terrifiant. Pour éviter ce sort funeste auquel Jack ne tient pas vraiment, il n'a qu'une solution : retrouver le coffre maudit de Jones où sont cachés les âmes emprisonnées...",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=57138.html",
    }, {
        name: "Pirate des Caraibes 3",
        classique: true,
        img: {
            banner: "https://focus.nouvelobs.com/2020/02/27/12/0/1280/640/1377/667/75/0/b68327d_rUj_slEt1ubxMLtRgozzn3O9.jpg",
            pp: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/62/88/97/18754731.jpg",
        },
        video: "https://uqload.com/embed-fh1cbnhczkjg.html",
        description: "L'âge d'or de la piraterie touche à sa fin. Même le terrifiant Vaisseau Fantôme et son capitaine maudit Davy Jones servent à présent Lord Cutler Beckett et la Compagnie anglaise des Indes Orientales. L'invincible Hollandais Volant écume désormais les sept mers, massacrant sans pitié pirates de tous bords et sabordant leurs navires.Will Turner, Elizabeth Swann et le capitaine Barbossa n'ont qu'une seule chance de résister à Beckett et à son armada destructrice : ils doivent rassembler les Neuf Seigneurs de la Cour des Frères, mais l'un des membres les plus éminents, le capitaine Jack Sparrow, manque à l'appel.Will, Elizabeth et Barbossa, secondés par Tia Dalma, Pintel et Ragetti, doivent faire voile vers des mers orientales inconnues, pour affronter un pirate chinois, le capitaine Sao Feng, et s'emparer des cartes qui les conduiront au-delà des limites du monde connu, là où Jack est retenu...",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=57139.html",
    }, {
        name: "Pirate des Caraibes 4",
        classique: true,
        img: {
            banner: "https://www.geekslands.fr/wp-content/uploads/2020/03/wallper-POTC4-Jack-Angelica-Blackbeard-and-Barbossa-pirates-of-the-caribbean-24532938-2454-1245.jpg",
            pp: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/79/98/60/19713505.jpg",
        },
        video: "https://uqload.com/embed-ak42i1zmdw03.html",
        description: "Dans cette histoire pleine d’action, où vérité, trahison, jeunesse éternelle et mort forment un cocktail explosif, le capitaine Jack Sparrow retrouve une femme qu’il a connue autrefois. Leurs liens sont-ils faits d’amour ou cette femme n’est-elle qu’une aventurière sans scrupules qui cherche à l’utiliser pour découvrir la légendaire Fontaine de Jouvence ? Lorsqu’elle l’oblige à embarquer à bord du Queen Anne’s Revenge, le bateau du terrible pirate Barbe-Noire, Jack ne sait plus ce qu’il doit craindre le plus : le redoutable maître du bateau ou cette femme surgie de son passé...",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=139812.html",
    }, {
        name: "Pirate des Caraibes 5",
        classique: true,
        img: {
            banner: "https://fr.web.img5.acsta.net/r_1280_720/newsv7/19/10/28/11/32/3145813.jpg",
            pp: "https://fr.web.img6.acsta.net/c_310_420/pictures/17/03/02/10/13/106609.jpg",
        },
        video: "https://uqload.com/embed-6sdah3jyqhgu.html",
        description: "Les temps sont durs pour le Capitaine Jack, et le destin semble même vouloir s’acharner lorsqu’un redoutable équipage fantôme mené par son vieil ennemi, le terrifiant Capitaine Salazar, s’échappe du Triangle du Diable pour anéantir tous les flibustiers écumant les flots… Sparrow compris ! Le seul espoir de survie du Capitaine Jack est de retrouver le légendaire Trident de Poséidon, qui donne à celui qui le détient tout pouvoir sur les mers et les océans. Mais pour cela, il doit forger une alliance précaire avec Carina Smyth, une astronome aussi belle que brillante, et Henry, un jeune marin de la Royal Navy au caractère bien trempé. À la barre du Dying Gull, un minable petit rafiot, Sparrow va tout entreprendre pour contrer ses revers de fortune, mais aussi sauver sa vie face au plus implacable ennemi qu’il ait jamais eu à affronter…",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=189525.html",
    },
    {
        name: "Men in Black",
        img: {
            banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqxos-Xo8wxgc1owMPP7JUHr52Ncych6-j7jL8LlmPNwOhe6i3auz-9w7z74yCYHqbrIc&usqp=CAU",
            pp: "https://fr.web.img3.acsta.net/c_310_420/pictures/14/05/26/16/57/120603.jpg",
        },
        classique: true,
        video: "https://uqload.com/embed-u8mmjeevpga2.html",
        description: "Chargés de protéger la Terre de toute infraction extraterrestre et de réguler l'immigration intergalactique sur notre planète, les Men in black ou MIB opèrent dans le plus grand secret. Vêtus de costumes sombres et équipés des toutes dernières technologies, ils passent inaperçus aux yeux des humains dont ils effacent régulièrement la mémoire récente : la présence d'aliens sur notre sol doit rester secrète.Récemment séparé de son vieux partenaire, retourné à la vie civile sans aucun souvenir de sa vie d'homme en noir, K, le plus expérimenté des agents du MIB décide de former J, un jeune policier. Ensemble, ils vont affronter une nouvelle menace : Edgar le cafard...",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=10700.html",
    }, {
        name: "Men in Black 2",
        img: {
            banner: "http://img.over-blog-kiwi.com/1/58/91/76/20180427/ob_e14a3c_men-in-black-ii.png",
            pp: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/00/02/33/46/af.jpg",
        },
        classique: true,
        video: "https://uqload.com/embed-9vmpe57eapm2.html",
        description: ".En quatre années passées à protéger la Terre de toutes sortes d'invasion extraterrestre, l'agent J, qui travaille secrètement au quartier général des Men in black, n'a toujours pas trouvé de partenaire avec qui faire équipe. A la suite d'un crime étrange impliquant des extraterrestres, l'agence découvre l'existence d'un redoutable complot menaçant notre planète. Serleena, une maléfique séductrice qui a pris l'apparence d'un top-model en lingerie fine, est prête à tout pour accomplir son sinistre dessein. J a absolument besoin des services de K, son ancien partenaire qui n'a plus aucun souvenir des MIB et travaille dorénavant à la Poste. J va devoir par tous les moyens le faire sortir de sa retraite.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=28355.html",
    }, {
        name: "Men in Black 3",
        img: {
            banner: "https://assets1.ignimgs.com/2018/12/25/men-in-black-3-03-1545721386093.jpg",
            pp: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/89/36/03/20072335.jpg",
        },
        classique: true,
        video: "https://uqload.com/embed-nj6stjfcwo3w.html",
        description: "En quinze ans de carrière chez les Men in Black, l’agent J a vu beaucoup de phénomènes inexplicables… Mais rien, pas même le plus étrange des aliens, ne le laisse aussi perplexe que son partenaire, le sarcastique K.Lorsque la vie de K et le destin de la Terre sont menacés, l’agent J décide de remonter le temps pour remettre les choses en ordre. Il va alors découvrir qu’il existe certains secrets de l’univers que K ne lui a jamais révélés. Il est cette fois obligé de faire équipe avec l’agent K, plus jeune, pour sauver la vie de son partenaire, l’agence, et l’avenir même de l’humanité…",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=139622.html",
    },


    // autre
    {
        name: "Les Animaux Fantastiques",
        img: {
            banner: "https://www.ecranlarge.com/media/cache/637x252/uploads/articles/000/970/230/les-animaux-fantastiques-affiche-imax-968981-large.jpg",
            pp: "https://fr.web.img6.acsta.net/c_310_420/pictures/16/10/11/09/32/205295.jpg",
        },
        video: "https://uqload.com/embed-a2qpbjno0wjb.html",
        description: "LNew York, 1926. Le monde des sorciers est en grand danger. Une force mystérieuse sème le chaos dans les rues de la ville : la communauté des sorciers risque désormais d'être à la merci des Fidèles de Salem, groupuscule fanatique des Non-Maj’ (version américaine du \"Moldu\") déterminé à les anéantir. Quant au redoutable sorcier Gellert Grindelwald, après avoir fait des ravages en Europe, il a disparu… et demeure introuvable.Ignorant tout de ce conflit qui couve, Norbert Dragonneau débarque à New York au terme d'un périple à travers le monde : il a répertorié un bestiaire extraordinaire de créatures fantastiques dont certaines sont dissimulées dans les recoins magiques de sa sacoche en cuir – en apparence – banale. Mais quand Jacob Kowalski, Non-Maj’ qui ne se doute de rien, libère accidentellement quelques créatures dans les rues de la ville, la catastrophe est imminente. Il s'agit d'une violation manifeste du Code International du Secret Magique dont se saisit l'ancienne Auror Tina Goldstein pour récupérer son poste d'enquêtrice. Et la situation s'aggrave encore lorsque Percival Graves, énigmatique directeur de la Sécurité du MACUSA (Congrès Magique des États-Unis d'Amérique), se met à soupçonner Norbert… et Tina.Norbert, Tina et sa sœur Queenie, accompagnés de leur nouvel ami Non-Maj’ Jacob, unissent leurs forces pour retrouver les créatures disséminées dans la nature avant qu'il ne leur arrive malheur. Mais nos quatre héros involontaires, dorénavant considérés comme fugitifs, doivent surmonter des obstacles bien plus importants qu’ils n’ont jamais imaginé. Car ils s'apprêtent à affronter des forces des ténèbres qui risquent bien de déclencher une guerre entre les Non-Maj’ et le monde des sorciers.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=223940.html",
    }, {
        name: "Les Animaux Fantastiques 2",
        img: {
            banner: "https://www.telerama.fr/sites/tr_master/files/styles/simplecrop1000/public/animaux_fantastiques_-_les_crimes_de_grindelwald_2018-visuel_01_0.jpg?itok=Xm2a1dJg",
            pp: "https://fr.web.img4.acsta.net/c_310_420/pictures/18/10/10/11/16/4794693.jpg",
        },
        video: "https://uqload.com/embed-88zgyiv5lmco.html",
        description: "1927. Quelques mois après sa capture, le célèbre sorcier Gellert Grindelwald s'évade comme il l'avait promis et de façon spectaculaire. Réunissant de plus en plus de partisans, il est à l'origine d'attaque d'humains normaux par des sorciers et seul celui qu'il considérait autrefois comme un ami, Albus Dumbledore, semble capable de l'arrêter. Mais Dumbledore va devoir faire appel au seul sorcier ayant déjoué les plans de Grindelwald auparavant : son ancien élève Norbert Dragonneau. L'aventure qui les attend réunit Norbert avec Tina, Queenie et Jacob, mais cette mission va également tester la loyauté de chacun face aux nouveaux dangers qui se dressent sur leur chemin, dans un monde magique plus dangereux et divisé que jamais.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=228086.html",
    }, {
        name: "Jumanji",
        img: {
            banner: "https://nerdpai.com/wp-content/uploads/2017/06/Jumanji-1995.jpg",
            pp: "https://fr.web.img6.acsta.net/c_310_420/pictures/14/08/14/12/20/198981.jpg",
        },
        video: "https://uqload.com/embed-ou4xibav2qig.html",
        description: "Lors d'une partie de Jumanji, un jeu très ancien, le jeune Alan est propulsé sous les yeux de son amie d'enfance, Sarah, dans un étrange pays. Il ne pourra s'en échapper que lorsqu'un autre joueur reprendra la partie et le libèrera sur un coup de dés. Vingt-six ans plus tard, il retrouve le monde réel par le coup de dés de deux autres jeunes joueurs.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=13970.html",
    }, {
        name: "Jumanji: Bienvenue dans la jungle",
        img: {
            banner: "https://static.hitek.fr/img/actualite/2018/04/12/fb_jumanji-benvenuti-nella-giungla-supera-wonder-woman-boxoffice-mondiale-v3-319080-1280x720.jpg",
            pp: "https://fr.web.img4.acsta.net/c_310_420/pictures/17/11/07/13/40/0517792.jpg",
        },
        video: "https://uqload.com/embed-rrwzksmocf1p.html",
        description: "Le destin de quatre lycéens en retenue bascule lorsqu’ils sont aspirés dans le monde de Jumanji. Après avoir découvert une vieille console contenant un jeu vidéo dont ils n’avaient jamais entendu parler, les quatre jeunes se retrouvent mystérieusement propulsés au cœur de la jungle de Jumanji, dans le corps de leurs avatars. Ils vont rapidement découvrir que l’on ne joue pas à Jumanji, c’est le jeu qui joue avec vous… Pour revenir dans le monde réel, il va leur falloir affronter les pires dangers et triompher de l’ultime aventure. Sinon, ils resteront à jamais prisonniers de Jumanji…",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=210318.html",
    }, {
        name: "Jumanji: next level",
        img: {
            banner: "https://thumbor.sd-cdn.fr/YeIZd3v5IViHsMmA8AchEFjJZoU=/1200x630/cdn.sd-cdn.fr/comiga/2019/12/jumanji-next-level-critique-film.jpg",
            pp: "https://fr.web.img2.acsta.net/c_310_420/pictures/19/11/07/12/52/2054035.jpg",
        },
        video: "https://uqload.com/embed-oiopiqbsu2oa.html",
        description: "L'équipe est de retour mais le jeu a changé. Alors qu'ils retournent dans Jumanji pour secourir l'un des leurs, ils découvrent un monde totalement inattendu. Des déserts arides aux montagnes enneigées, les joueurs vont devoir braver des espaces inconnus et inexplorés, afin de sortir du jeu le plus dangereux du monde.",
        allo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=262124.html",
    },

]

module.exports = film;