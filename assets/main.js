var prefikslink = "/DunkShop";
if(window.location.pathname==prefikslink+"/index.html" || window.location.pathname==prefikslink+'/')
{


// REGULAR EXPRESIONS ____________________________________________________________________________________________________________________________

const regexIme = /^[A-ZČŠĆŽĐ][a-zčšćžđ]{2,15}(\s[A-ZČŠĆŽĐ][a-zčšćžđ]{2,15})?$/;

const regexPrezime = /^[A-ZČŠĆŽĐ][a-zčšćžđ]{3,20}(\s[A-ZČŠĆŽĐ][a-zčšćžđ]{3,20})?$/;

const regexMail = /^[a-z]((\.|-|)?[a-z0-9]){2,}@[a-z]((\.|-|)?[a-z0-9]+){2,}\.[a-z]{2,6}$/;

const regexSifra =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()?])[A-Za-z\d!@#$%^&*()?]{8,}$/;

// function provera()
// {
//     console.log(123);
//     if(!regEx.test(input.value))
//     {
//         input.classList.add("borderred");
//         input.nextElementSibling.classList.remove("d-none");
//         input.nextElementSibling.classList.add("d-block");
//     }
//     else
//     {
//         input.classList.add("bordergreen");
//         input.nextElementSibling.classList.remove("d-block");
//         input.nextElementSibling.classList.add("d-none");
//     }
// }

//  __________________________________________________________________________________________________________________________________
// MODAL REGISTER __________________________________________________________________________________________________________________________________
//  __________________________________________________________________________________________________________________________________

var dugmeZaRegistracijuJedan = document.getElementById("dugmeZaRegistracijuJedan");

var iks = document.getElementById("iks");

var dugmeZaPrijavuJedan = document.getElementById("dugmeZaPrijavuJedan");

var ikonicaPrijava = document.getElementById("ikonicaPrijava");

var modalRegistracija = document.getElementById("modalRegistracija");

var modalPrijava= document.getElementById("modalPrijava");

var brojGresaka = 0;

var brojGresakaPrijava = 0;
// OTVARANJE I ZATVARANJE MODALA

ikonicaPrijava.addEventListener("click",function()
{
    modalRegistracija.classList.remove("modalnone");
    modalRegistracija.classList.add("modalblock");
}
)

iks.addEventListener("click",function()
{
    modalRegistracija.classList.remove("modalblock");
    modalRegistracija.classList.add("modalnone");
}
)
dugmeZaPrijavuJedan.addEventListener("click",function()
{
    modalRegistracija.classList.remove("modalblock");
    modalRegistracija.classList.add("modalnone");
    modalPrijava.classList.remove("modalnone");
    modalPrijava.classList.add("modalblock");
}
)


// __________________________________________________________________________________________________________________________________________________
// PROVERA IMENA REGISTRACIJA___________________________________________________________________________________________________________________________

dugmeZaRegistracijuJedan.addEventListener("click",function()
{
    let inputImeRegistracija=document.getElementById("imeRegistracija");
    let textImeRegistracija=document.getElementById("textImeRegistracija");
    if(!regexIme.test(inputImeRegistracija.value))
    {
        inputImeRegistracija.classList.add("borderred");
        textImeRegistracija.classList.remove("d-none");
        textImeRegistracija.classList.add("d-block;");
        brojGresaka++;
    }
    else
    {
        inputImeRegistracija.classList.remove("borderred");
        inputImeRegistracija.classList.add("bordergreen");
        textImeRegistracija.classList.remove("d-block");
        textImeRegistracija.classList.add("d-none");
        brojGresaka=0;
    }

    let inputPrezimeRegistracija=document.getElementById("prezimeRegistracija");
    let textPrezimeRegistracija=document.getElementById("textPrezimeRegistracija");
    if(!regexPrezime.test(inputPrezimeRegistracija.value))
    {
        inputPrezimeRegistracija.classList.add("borderred");
        textPrezimeRegistracija.classList.remove("d-none");
        textPrezimeRegistracija.classList.add("d-block;");
        brojGresaka++;
    }
    else
    {
        inputPrezimeRegistracija.classList.remove("borderred");
        inputPrezimeRegistracija.classList.add("bordergreen");
        textPrezimeRegistracija.classList.remove("d-block");
        textPrezimeRegistracija.classList.add("d-none");
        brojGresaka=0;
    }

    let inputEmailRegistracija=document.getElementById("emailRegistracija");
    let textEmailRegistracija=document.getElementById("textEmailRegistracija");
    if(!regexMail.test(inputEmailRegistracija.value))
    {
        inputEmailRegistracija.classList.add("borderred");
        textEmailRegistracija.classList.remove("d-none");
        textEmailRegistracija.classList.add("d-block;")
        brojGresaka++;
    }
    else
    {
        inputEmailRegistracija.classList.remove("borderred");
        inputEmailRegistracija.classList.add("bordergreen");
        textEmailRegistracija.classList.remove("d-block");
        textEmailRegistracija.classList.add("d-none");
        brojGresaka=0;
    }

    let textLozinkaRegistracija=document.getElementById("textLozinkaRegistracija");
    let inputLozinkaRegistracija=document.getElementById("lozinkaRegistracija");
    if(!regexSifra.test(inputLozinkaRegistracija.value))
    {
        inputLozinkaRegistracija.classList.add("borderred");
        textLozinkaRegistracija.classList.remove("d-none");
        textLozinkaRegistracija.classList.add("d-block;");
        brojGresaka++;
    }
    else
    {
        inputLozinkaRegistracija.classList.remove("borderred");
        inputLozinkaRegistracija.classList.add("bordergreen");
        textLozinkaRegistracija.classList.remove("d-block");
        textLozinkaRegistracija.classList.add("d-none");
        brojGresaka=0;
    }

    let inputPotvrdaLozinkeRegistracija=document.getElementById("potvrdaLozinkeRegistracija");
    if(inputLozinkaRegistracija.value!=inputPotvrdaLozinkeRegistracija.value || inputPotvrdaLozinkeRegistracija.value=="")
    {
        inputPotvrdaLozinkeRegistracija.classList.add("borderred");
        inputPotvrdaLozinkeRegistracija.nextElementSibling.classList.remove("d-none");
        inputPotvrdaLozinkeRegistracija.nextElementSibling.classList.add("d-block");
        brojGresaka++;
    }
    else
    {
        inputPotvrdaLozinkeRegistracija.classList.remove("borderred");
        inputPotvrdaLozinkeRegistracija.classList.add("bordergreen");
        inputPotvrdaLozinkeRegistracija.nextElementSibling.classList.remove("d-block");
        inputPotvrdaLozinkeRegistracija.nextElementSibling.classList.add("d-none");
        brojGresaka=0;
    }

    var inputRadio=document.getElementsByName("pol");

    var polText=document.getElementById("polText");
    
    var daLiJeCekirano=false;
        for(let i=0; i<inputRadio.length; i++)
        {
            if(inputRadio[i].checked)
            {
                daLiJeCekirano=true;
            }
        }

    if(!daLiJeCekirano)
    {
        polText.classList.remove("d-none");
        polText.classList.add("d-block");
        brojGresaka++;
    }
    else if(daLiJeCekirano){
        polText.classList.remove("d-block");
        polText.classList.add("d-none");
        brojGresaka=0;
    }
    if(brojGresaka=0){
        modalRegistracija.classList.remove("modalblock");
        modalRegistracija.classList.add("modalnone");
    }
}
);

// MODAL PRIJAVA _______________________________________________________________________________________________________________________________________
// //  __________________________________________________________________________________________________________________________________

var iksPrijava = document.getElementById("iksPrijava");

iksPrijava.addEventListener("click",function()
{
    modalPrijava.classList.remove("modalblock");
    modalPrijava.classList.add("modalnone");
}
)

var dugmeZaPrijavuDva = document.getElementById("dugmeZaPrijavuDva");

var dugmeZaRegistracijuDva = document.getElementById("dugmeZaRegistracijuDva");

dugmeZaRegistracijuDva.addEventListener("click",function()
{
    modalPrijava.classList.remove("modalblock");
    modalPrijava.classList.add("modalnone");
    modalRegistracija.classList.remove("modalnone");
    modalRegistracija.classList.add("modalblock");
}
)

// PROVERA PODATAKA FORME ZA PRIJAVU ___________________________________________________________________________________________________________________________
// ______________________________________________________________________________________________________________________________________________________

dugmeZaPrijavuDva.addEventListener("click",function()
{
    let emailPrijava = document.getElementById("emailPrijava");
    let textEmailPrijava = document.getElementById("textEmailPrijava");
    if(!regexMail.test(emailPrijava.value))
    {
        emailPrijava.classList.add("borderred");
        textEmailPrijava.classList.remove("d-none");
        textEmailPrijava.classList.add("d-block");
        brojGresakaPrijava++;
    }
    else
    {
        emailPrijava.classList.add("bordergreen");
        textEmailPrijava.classList.remove("d-block");
        textEmailPrijava.classList.add("d-none");
        brojGresakaPrijava=0;
    }

    let lozinkaPrijava=document.getElementById("lozinkaPrijava");
    let textLozinkaPrijava=document.getElementById("textLozinkaPrijava");
    if(!regexSifra.test(lozinkaPrijava.value))
    {
        lozinkaPrijava.classList.add("borderred");
        textLozinkaPrijava.classList.remove("d-none");
        textLozinkaPrijava.classList.add("d-block");
        brojGresakaPrijava++;
    }
    else
    {
        lozinkaPrijava.classList.add("bordergreen");
        textLozinkaPrijava.classList.remove("d-block");
        textLozinkaPrijava.classList.add("d-none");
        brojGresakaPrijava=0;
    }

    if(brojGresakaPrijava==0)
    {
        modalPrijava.classList.remove("modalblock");
        modalPrijava.classList.add("modalnone");
    }
}
)

// SLIDER ________________________________________________________________________________________________________________________________________

var sliderOne = [
    {
        src:`assets/images/sprayground_1600x596_2.gif`,
        alt:`Gif`
    },
    {
        src:`assets/images/3x3.jpg`,
        alt:`3x3`
    },
    {
        src:`assets/images/1600x596_51.jpg`,
        alt:`Nike patika`
    },
    {
        src:`assets/images/1600x596_39.jpg`,
        alt:`Nike patike za kosarku`
    },
    {
        src:`assets/images/slider1_2.png`,
        alt:`3x3 lopta`
    }
];

var sliderOneContent = "";

for (const obj of sliderOne) {
    sliderOneContent+=`<div class="swiper-slide"><img src="${obj.src}" alt="${obj.alt}"/></div>`
}

document.getElementById("slider").innerHTML=sliderOneContent;

var swiper = new Swiper(".mySwiper", {
    autoplay:{delay:7000},
    loop:true,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });

// DRESOVI ____________________________________________________________________________________________________________________________________________

var dresovi = [
    {
        path:`assets/images/dresjedan.jpg`,
        brend:`Mitchell & Ness`,
        name:`NBA JERSEY GOLDEN STATE WARRIORS`,
        price:`13.790 RSD`
    },
    {
        path:`assets/images/dresdva.jpg`,
        brend:`Mitchell & Ness`,
        name:`UTAH JAZZ #12 JOHN STOCKTON 'WHITE'`,
        price:`13.790 RSD`
    },
    {
        path:`assets/images/drestri.jpg`,
        brend:`Mitchell & Ness`,
        name:`SWINGMAN JERSEY DETROIT PISTONS`,
        price:`13.790 RSD`
    },
    {
        path:`assets/images/drescetiri.jpg`,
        brend:`Mitchell & Ness`,
        name:`NBA SWINGMAN HOME JERSEY 98 GRIZZLIES `,
        price:`13.790 RSD`
    },
    {
        path:`assets/images/drespet.jpg`,
        brend:`Mitchell & Ness`,
        name:`NBA SWINGMAN ROAD JERSEY NEW JERSEY NETS`,
        price:`13.790 RSD`
    },
    {
        path:`assets/images/dressest.jpg`,
        brend:`Mitchell & Ness`,
        name:`NBA SWINGMAN JERSEY ORLANDO MAGIC`,
        price:`13.790 RSD`
    },
    {
        path:`assets/images/dressedam.jpg`,
        brend:`Mitchell & Ness`,
        name:`ORLANDO MAGIC #1 AFERNEE HARDAWAY`,
        price:`13.790 RSD`
    },
    {
        path:`assets/images/dresosam.jpg`,
        brend:`Mitchell & Ness`,
        name:`NBA SWINGMAN JERSEY SAN ANTONIO SPURS`,
        price:`13.790 RSD`
    },
    {
        path:`assets/images/dresdevet.jpg`,
        brend:`Mitchell & Ness`,
        name:`NBA SWINGMAN JERSEY BULLS 97`,
        price:`13.790 RSD`
    },
    {
        path:`assets/images/dresdeset.jpg`,
        brend:`Mitchell & Ness`,
        name:`NBA SWINGMAN JERSEY MINNESOTA TIMBERWOLVES`,
        price:`13.790 RSD`
    },
    {
        path:`assets/images/dresjedanaest.png`,
        brend:`Mitchell & Ness`,
        name:`SWINGMAN JERSEY SEATTLE SUPERSONICS`,
        price:`13.790 RSD`
    }
]

var dresoviContent = "";

for (const obj of dresovi) {
    dresoviContent+=`<div class="swiper-slide">
                    <img src="${obj.path}" alt="${obj.name}"/>
                    <h3 class="fw-normal dres-text text-sm-start text-center">${obj.brend}</h3>
                    <p class="fw-bold text-sm-start text-center">${obj.name}</p>
                    <p class="pb-3 text-sm-start text-center">${obj.price}</p>
                    </div>`
}

document.getElementById("dresovi").innerHTML=dresoviContent;

let swiperDresovi = new Swiper(".mySwiperDresovi", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints:{
        992:{
            slidesPerView:5
        },
        768:{
            slidesPerView:4
        },
        600:{
            slidesPerView:3
        },
        425:{
            slidesPerView:2
        },
        375:{
            slidesPerView:1
        },
        325:{
            slidesPerView:1
        }
    }
  });

//   SLIDER PATIKE ___________________________________________________________________________________________________________________________________

var patike = [
    {
        path:`assets/images/patikejedan.png`,
        brend:`Jordan`,
        name:`WMNS JORDAN MVP 678 'DESERT SAND'`,
        price:`22.290 RSD`
    },
    {
        path:`assets/images/patikedva.png`,
        brend:`Jordan`,
        name:`JORDAN MVP 678 'CARDINAL'`,
        price:`22.290 RSD`
    },
    {
        path:`assets/images/patiketri.png`,
        brend:`Jordan`,
        name:`JORDAN MVP 678 'RAPTORS'`,
        price:`22.290 RSD`
    },
    {
        path:`assets/images/patikecetiri.jpg`,
        brend:`Jordan`,
        name:`JORDAN JUMPMAN TWO TREY 'BRED'`,
        price:`19.690 RSD`
    },
    {
        path:`assets/images/patikepet.jpg`,
        brend:`Jordan`,
        name:`AIR JORDAN 38 'AQUA'`,
        price:`26.290 RSD`
    },
    {
        path:`assets/images/patikesest.jpg`,
        brend:`Jordan`,
        name:`AIR JORDAN 38 'FADEAWAY'`,
        price:`26.290 RSD`
    },
    {
        path:`assets/images/patikesedam.png`,
        brend:`Jordan`,
        name:`JORDAN 38 'FUNDAMENTAL'`,
        price:`26.290 RSD`
    },
    {
        path:`assets/images/patikeosam.jpg`,
        brend:`Jordan`,
        name:`AIR JORDAN 38 'FIBA'`,
        price:`26.290 RSD`
    },
    {
        path:`assets/images/patikedevet.png`,
        brend:`Jordan`,
        name:`LUKA 2 'SPACE HUNTER'`,
        price:`17.090 RSD`
    },
    {
        path:`assets/images/patikedeset.png`,
        brend:`Jordan`,
        name:`JORDAN PRO STRONG 'PLAYOFFS'`,
        price:`19.690 RSD`
    },
    {
        path:`assets/images/patikejedanaest.png`,
        brend:`Jordan`,
        name:`JORDAN ONE TAKE 4 'DARK BURGUNDY`,
        price:`13.190 RSD`
    }
]

var patikeContent = "";

for (const obj of patike) {
    patikeContent+=`<div class="swiper-slide">
                    <img src="${obj.path}" alt="${obj.name}"/>
                    <h3 class="fw-normal dres-text text-sm-start text-center">${obj.brend}</h3>
                    <p class="fw-bold text-sm-start text-center">${obj.name}</p>
                    <p class="pb-3 text-sm-start text-center">${obj.price}</p>
                    </div>`
}

document.getElementById("patike").innerHTML=patikeContent

let swiperPatike = new Swiper(".mySwiperPatike", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints:{
        992:{
            slidesPerView:5
        },
        768:{
            slidesPerView:4
        },
        600:{
            slidesPerView:3
        },
        425:{
            slidesPerView:2
        },
        375:{
            slidesPerView:1
        },
        325:{
            slidesPerView:1
        }
    }
  });

// GDE NAS MOZETE NACI _____________________________________________________________________________________________________________________________

var mesta = [
    {
        id:`beograd`,
        h3:`BEOGRAD`,
        p:`BW Galerija`
    },
    {
        id:`podgorica`,
        h3:`Podgorica`,
        p:`Šeika Zajeda 13`
    },
    {
        id:`bec`,
        h3:`BEČ`,
        p:`Gupendorfer Str. 57`
    }
]

var mestaContent="";

for (const obj of mesta) {
    mestaContent += `<div class="col-10 col-md-3 p-0 m-0" id="${obj.id}"><div class="tamno"><h3 class="text-light fs-1">${obj.h3}</brend><p class="text-light fs-2">${obj.p}</p></div></div>`
}

document.getElementById("mestajedan").innerHTML=mestaContent;

// SLIDER DODACI ___________________________________________________________________________________________________________________________________

var dodaci = [
    {
        path:`assets/images/dodacijedan.png`,
        brend:`Under Armour`,
        name:`UA PERFORMANCE HEADBAND 'BLACK'`,
        price:`1.090 RSD`
    },
    {
        path:`assets/images/dodacidva.png`,
        brend:`Under Armour`,
        name:`UA PERFORMANCE WRISTBANDS 'BLACK'`,
        price:`990 RSD`
    },
    {
        path:`assets/images/dodacitri.png`,
        brend:`Under Armour`,
        name:`UA HEATGEAR CREW 3PK 'STEEL / WHITE'`,
        price:`2.090 RSD`
    },
    {
        path:`assets/images/dodacicetiri.png`,
        brend:`Under Armour`,
        name:`UA HEATGEAR LOW CUT 'GRAY/WHITE/BLACK'`,
        price:`1.790 RSD`
    },
    {
        path:`assets/images/dodacipet.png`,
        brend:`Adidas`,
        name:`3-STRIPES LINEAR HALF-CREW CUSHIONED SOCKS 'WHITE'`,
        price:`1.190 RSD`
    },
    {
        path:`assets/images/dodacisest.jpg`,
        brend:`Nike`,
        name:`FREAK EVERYDAY PLUS CUSHIONED BASKETBALL CREW SOCKS 'WHITE'`,
        price:`1.992 RSD`
    },
    {
        path:`assets/images/dodacisedam.jpg`,
        brend:`Nike`,
        name:`FREAK EVERYDAY PLUS CUSHIONED BASKETBALL CREW SOCKS 'BLACK'`,
        price:`1.992 RSD`
    },
    {
        path:`assets/images/dodaciosam.jpg`,
        brend:`Adidas`,
        name:`ADIZERO ANKLE SOCKS 'WHITE'`,
        price:`1.990 RSD`
    },
    {
        path:`assets/images/dodacidevet.jpg`,
        brend:`Wilson`,
        name:`NBA AUTHENTIC`,
        price:`8.290 RSD`
    },
    {
        path:`assets/images/dodacideset.png`,
        brend:`Nike`,
        name:`NIKE UTILITY TRAINING GYMSACK 'BLACK'`,
        price:`3.390 RSD`
    },
    {
        path:`assets/images/dodacijedanaest.png`,
        brend:`Nike`,
        name:`UTILITY POWER TRAINING DUFFEL BAG 'BLACK'`,
        price:`8.190 RSD`
    },
    {
        path:`assets/images/dodacidvanaest.png`,
        brend:`Nike`,
        name:`BRASILIA 9.5 TRAINING DUFFEL BAG 'BLACK'`,
        price:`5.490 RSD`
    }
]

var dodaciContent = "";

for (const obj of dodaci) {
    dodaciContent+=`<div class="swiper-slide">
                    <img src="${obj.path}" alt="${obj.name}"/>
                    <h3 class="fw-normal dres-text text-sm-start text-center">${obj.h3}</h3>
                    <p class="fw-bold text-sm-start text-center">${obj.name}</p>
                    <p class="pb-3 text-sm-start text-center">${obj.price}</p>
                    </div>`
}

document.getElementById("dodaci").innerHTML=dodaciContent;

let swiperDodaci = new Swiper(".mySwiperDodaci", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints:{
        992:{
            slidesPerView:5
     
        },
        768:{
            slidesPerView:4

        },
        600:{
            slidesPerView:3

        },
        425:{
            slidesPerView:2

        },
        375:{
            slidesPerView:1

        },
        325:{
            slidesPerView:1
        }
    }
  });


}

var footerLinkovi = [`Privatnost i kolačići`,`Dostava`,`Uslovi korišćenja i prodaje`,`Zamene`,`Reklamacije`,`Pravo na odustajanje`,`Namena i održavanje odeće`];

var footerLinkoviContent= ""

for (const text of footerLinkovi) {
    footerLinkoviContent+=`<li><a href="#">${text}</a></li>`
}
document.getElementById("footerLinkoviJedan").innerHTML=footerLinkoviContent

var footerLinkoviDva = [`Podaci o pravnom licu`,`Tabela veličina`];

var footerLinkoviDvaContent= ""

for (const text of footerLinkoviDva) {
    footerLinkoviDvaContent+=`<li><a href="#">${text}</a></li>`
}
document.getElementById("footerLinkoviDva").innerHTML=footerLinkoviDvaContent

var footerLinkoviTri = [`Besplatna dostava*`,`Dostava u celoj RS traje 2-4 dana`,`Brzi odgovori`,`Korisnička podrška`,`Promocija bball kulture`];

var footerLinkoviTriContent= ""

for (const text of footerLinkoviTri) {
    footerLinkoviTriContent+=`<li><a href="#">${text}</a></li>`
}
document.getElementById("footerLinkoviTri").innerHTML=footerLinkoviTriContent

console.log("1");


var footerKartice = [
    {
        src:`assets/images/american-express-credit.jpg`,
        alt:`American express kartica`
    },
    {
        src:`assets/images/discover-card-logo.png`,
        alt:`Discover kartica`
    },
    {
        src:`assets/images/klarna-logo.png`,
        alt:`Klarna kartica`
    },
    {
        src:`assets/images/Visa-Logo-card.png`,
        alt:`Visa kartica`
    }
]

var footerKarticeContent="";

for (const content of footerKartice) {
    footerKarticeContent+=`<div class="col-3"><img src="${content.src}" alt="${content.alt}"></div>`
}

document.getElementById("footerKarticeJedan").innerHTML=footerKarticeContent;

var footerKarticeDva = [
    {
        src:`assets/images/MasterCard.png`,
        alt:`MasterCard kartica`
    },
    {
        src:`assets/images/paypal-logo-card.png`,
        alt:`Pay pal`
    }
]

var footerKarticeDvaContent="";

for (const content of footerKarticeDva) {
    footerKarticeDvaContent+=`<div class="col-3"><img src="${content.src}" alt="${content.alt}" class="d-block"></div>`
}

document.getElementById("footerKarticeDva").innerHTML=footerKarticeDvaContent;

$(document).ready(function () {
    setTimeout(function () {
        $("#loader").animate(
            {
                opacity: 0 
            }, 1000, function () {
            $(this).css("display", "none");

            $("body").animate({ opacity: 1 }, 1500);
        });
    }, 1700); 
});

$(document).ready(function () {
    setTimeout(function () {
        $("#loaderAutor").animate(
            {
                opacity: 0 
            }, 1000, function () {
            $(this).css("display", "none");

            $("body").animate({ opacity: 1 }, 1500);
        });
    }, 1700); 
});
// DIV ZA NAVIGACIJU ___________________________________________________________________________________________________________________________________

var navPath = [`#dresovilink`,'#patikelink','#dodacilink','oautoru.html'];
var navName = [`Dresovi`,`Patike`,`Dodaci`,`Autor`];
var navContent = "";

for (let i=0;i<navPath.length;i++) {
    navContent += `<li class="nav-item"><a class="nav-link fw-bold fs-5" href="${navPath[i]}">${navName[i]}</a></li>`;
}

document.getElementById("myNav").innerHTML=navContent;

    // DIV PRE HEADERA
    var beforeHText = [ 
        {
            icon:`<i class="fa-solid fa-globe mt-1 me-2 text-light mr-1"></i>`,
            text:`Brza isporuka`
        },
        {
            icon:`<i class="fa-solid fa-basketball mt-1 me-2 text-light mr-1"></i>`,
            text:`Premium oprema`
        },
        {
            icon:`<i class="fa-solid fa-rotate mt-1 me-2 text-light"></i>`,
            text:`30-dana proces povratka`
        }
    ];
    
    var beforeHContent = "";
    
    for (const obj of beforeHText) {
        beforeHContent+=`<div class="col-lg-3 d-flex justify-content-center pt-3">
                        ${obj.icon}
                        <p class="text-light">${obj.text}</p>
                        </div>`;
    }
    document.getElementById("before-h").innerHTML=beforeHContent;
    
    // DIV ZA IKONICE U HEADERU KOJE NISU DINAMICKI ISPISANE JER JE JEDNA MORALA DA BUDE BUTTON I DA IMA DOGADJAJ NA KLIK
    // var headerIcon = [`<i id="myBtn" class="fa-solid fa-user fs-4 text-dark"></i>`,`<i class="fa-solid fa-cart-shopping fs-4"></i>`]
    
    
    // var headerIconContent = "";
    
    // for (const ico of headerIcon) {
    //     headerIconContent +=`<div class="col-lg-2">
    //     ${ico}
    //     </div>`
    // }
    // document.getElementById("header").innerHTML=headerIconContent;