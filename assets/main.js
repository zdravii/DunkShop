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

// REGULAR EXPRESIONS ____________________________________________________________________________________________________________________________

const regexIme = /^[A-ZČŠĆŽĐ][a-zčšćžđ]{2,15}(\s[A-ZČŠĆŽĐ][a-zčšćžđ]{2,15})?$/;

const regexPrezime = /^[A-ZČŠĆŽĐ][a-zčšćžđ]{3,20}(\s[A-ZČŠĆŽĐ][a-zčšćžđ]{3,20})?$/;

const regexMail = /^[a-z]((\.|-|)?[a-z0-9]){2,}@[a-z]((\.|-|)?[a-z0-9]+){2,}\.[a-z]{2,6}$/;

const regexSifra =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()?])[A-Za-z\d!@#$%^&*()?]{8,}$/;

// MODAL REGISTER __________________________________________________________________________________________________________________________________

var myBtn = document.getElementById("myBtn");

var myModal = document.getElementById("myModal");

var mtBtnClose = document.getElementById("myBtnClose");

var myBtnRegister = document.getElementById("myBtnRegister");

myBtn.addEventListener("click",function()
{
    myModal.classList.remove("modalnone");
    myModal.classList.add("modalblock");
}
)

myBtnClose.addEventListener("click",function()
{
    myModal.classList.remove("modalblock");
    myModal.classList.add("modalnone");
}
)

// myBtnRegister.addEventListener("click",function()
// {
//     myModal.classList.remove("modalblock");
//     myModal.classList.add("modalnone");
// }
// )

// PROVERA PODATAKA FORME ___________________________________________________________________________________________________________________________

// IME ______________________________________________________________________________________________________________________________________________

var ime = document.getElementById("ime");
var regexime = document.getElementById("regexime");

myBtnRegister.addEventListener("click",function()
{
    if(!regexIme.test(ime.value)){
        ime.classList.add("borderred");
        regexime.classList.remove("regextextnone");
        regexime.classList.add("regextextblock");
    }
    else{
        ime.classList.remove("borderred");
        ime.classList.add("bordergreen");
        regexime.classList.add("regextextnone");
        regexime.classList.remove("regextextblock");
    }
    
}
)

// PREZIME  ____________________________________________________________________________________________________________________________________________

var prezime = document.getElementById("prezime");
var regexprezime = document.getElementById("regexprezime");

myBtnRegister.addEventListener("click",function()
{
    if(!regexPrezime.test(prezime.value)){
        prezime.classList.add("borderred");
        regexprezime.classList.remove("regextextnone");
        regexprezime.classList.add("regextextblock");
    }
    else{
        prezime.classList.remove("borderred");
        prezime.classList.add("bordergreen");
        regexprezime.classList.add("regextextnone");
        regexprezime.classList.remove("regextextblock");
    }
}
)

// EMAIL  ______________________________________________________________________________________________________________________________________________

var email = document.getElementById("email");
var regexemail = document.getElementById("regexemail");

myBtnRegister.addEventListener("click",function()
{
    if(!regexMail.test(email.value)){
        email.classList.add("borderred");
        regexemail.classList.remove("regextextnone");
        regexemail.classList.add("regextextblock");
    }
    else{
        email.classList.remove("borderred");
        email.classList.add("bordergreen");
        regexemail.classList.add("regextextnone");
        regexemail.classList.remove("regextextblock");
    }
}
)

// SIFRA  _____________________________________________________________________________________________________________________________________________

var sifra = document.getElementById("lozinka");
var regexlozinka = document.getElementById("regexlozinka");

myBtnRegister.addEventListener("click",function()
{
    if(!regexSifra.test(sifra.value)){
        sifra.classList.add("borderred");
        regexlozinka.classList.remove("regextextnone");
        regexlozinka.classList.add("regextextblock");
    }
    else{
        sifra.classList.remove("borderred");
        sifra.classList.add("bordergreen");
        regexlozinka.classList.add("regextextnone");
        regexlozinka.classList.remove("regextextblock");
    }
}
)

// POTVRDA SIFRE  _____________________________________________________________________________________________________________________________________

var potvrdasifre = document.getElementById("potvrdalozinke");
var regexpotvrdalozinka = document.getElementById("regexpotvrdalozinke");

myBtnRegister.addEventListener("click",function()
{
    if(sifra.value != potvrdasifre.value || potvrdasifre.value==""){
        potvrdasifre.classList.add("borderred");
        regexpotvrdalozinke.classList.remove("regextextnone");
        regexpotvrdalozinke.classList.add("regextextblock");
    }
    else{
        potvrdasifre.classList.remove("borderred");
        potvrdasifre.classList.add("bordergreen");
        regexpotvrdalozinke.classList.add("regextextnone");
        regexpotvrdalozinke.classList.remove("regextextblock");
    }
}
)

// RADIO  ____________________________________________________________________________________________________________________________________________

var pol = document.getElementsByName("pol");
var regexpol = document.getElementById("regexpol");

myBtnRegister.addEventListener("click",function()
{
    let statusVrednost = "";
    for(let i = 0; i < pol.length; i++){
        if(pol[i].checked){
            statusVrednost = pol[i].value;
            break;
        }
    }
    if(statusVrednost){
        regexpol.classList.remove("regextextnone");
        regexpol.classList.add("regextextblock");
    }
}
)

// MODAL LOGIN _______________________________________________________________________________________________________________________________________

var myModalLog = document.getElementById("myModalLog");

var myBtnLog = document.getElementById("myBtnLog");

var myBtnCloseLog = document.getElementById("myBtnCloseLog");



myBtnLog.addEventListener("click",function()
{
    myModal.classList.remove("modalblock");
    myModal.classList.add("modalnone");
    myModalLog.classList.remove("modalnone");
    myModalLog.classList.add("modalblock");
}
)

myBtnCloseLog.addEventListener("click",function()
{
    myModalLog.classList.remove("modalblock");
    myModalLog.classList.add("modalnone");
}
)

myBtnLogtwo.addEventListener("click",function()
{
    myModalLog.classList.remove("modalblock");
    myModalLog.classList.add("modalnone");
}
)

myBtnRegistertwo.addEventListener("click",function()
{
    myModal.classList.add("modalblock");
    myModal.classList.remove("modalnone");
    myModalLog.classList.add("modalnone");
    myModalLog.classList.remove("modalblock");
}
)



// DIV ZA NAVIGACIJU ___________________________________________________________________________________________________________________________________

var navPath = [`#dresovilink`,'#patikelink','#dodacilink','#oautoru.html',`#`];
var navName = [`Dresovi`,`Patike`,`Dodaci`,`Brendovi`,`Autor`];
var navContent = "";

for (let i=0;i<navPath.length;i++) {
    navContent += `<li class="nav-item"><a class="nav-link fw-bold fs-5" href="${navPath[i]}">${navName[i]}</a></li>`;
}

document.getElementById("myNav").innerHTML=navContent;

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
        h3:`Mitchell & Ness`,
        pone:`NBA JERSEY GOLDEN STATE WARRIORS`,
        ptwo:`13.790 RSD`
    },
    {
        path:`assets/images/dresdva.jpg`,
        h3:`Mitchell & Ness`,
        pone:`UTAH JAZZ #12 JOHN STOCKTON 'WHITE'`,
        ptwo:`13.790 RSD`
    },
    {
        path:`assets/images/drestri.jpg`,
        h3:`Mitchell & Ness`,
        pone:`SWINGMAN JERSEY DETROIT PISTONS`,
        ptwo:`13.790 RSD`
    },
    {
        path:`assets/images/drescetiri.jpg`,
        h3:`Mitchell & Ness`,
        pone:`NBA SWINGMAN HOME JERSEY 98 GRIZZLIES `,
        ptwo:`13.790 RSD`
    },
    {
        path:`assets/images/drespet.jpg`,
        h3:`Mitchell & Ness`,
        pone:`NBA SWINGMAN ROAD JERSEY NEW JERSEY NETS`,
        ptwo:`13.790 RSD`
    },
    {
        path:`assets/images/dressest.jpg`,
        h3:`Mitchell & Ness`,
        pone:`NBA SWINGMAN JERSEY ORLANDO MAGIC`,
        ptwo:`13.790 RSD`
    },
    {
        path:`assets/images/dressedam.jpg`,
        h3:`Mitchell & Ness`,
        pone:`ORLANDO MAGIC #1 AFERNEE HARDAWAY`,
        ptwo:`13.790 RSD`
    },
    {
        path:`assets/images/dresosam.jpg`,
        h3:`Mitchell & Ness`,
        pone:`NBA SWINGMAN JERSEY SAN ANTONIO SPURS`,
        ptwo:`13.790 RSD`
    },
    {
        path:`assets/images/dresdevet.jpg`,
        h3:`Mitchell & Ness`,
        pone:`NBA SWINGMAN JERSEY BULLS 97`,
        ptwo:`13.790 RSD`
    },
    {
        path:`assets/images/dresdeset.jpg`,
        h3:`Mitchell & Ness`,
        pone:`NBA SWINGMAN JERSEY MINNESOTA TIMBERWOLVES`,
        ptwo:`13.790 RSD`
    },
    {
        path:`assets/images/dresjedanaest.png`,
        h3:`Mitchell & Ness`,
        pone:`SWINGMAN JERSEY SEATTLE SUPERSONICS`,
        ptwo:`13.790 RSD`
    }
]

var dresoviContent = "";

for (const obj of dresovi) {
    dresoviContent+=`<div class="swiper-slide">
                    <img src="${obj.path}" alt="${obj.pone}"/>
                    <h3 class="fw-normal dres-text">${obj.h3}</h3>
                    <p class="fw-bold text-start">${obj.pone}</p>
                    <p class="pb-3 text-start">${obj.ptwo}</p>
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
            slidesPerView:3
        },
        375:{
            slidesPerView:2
        },
        325:{
            slidesPerView:2
        }
    }
  });

//   SLIDER PATIKE ___________________________________________________________________________________________________________________________________

var patike = [
    {
        path:`assets/images/patikejedan.png`,
        h3:`Jordan`,
        pone:`WMNS JORDAN MVP 678 'DESERT SAND'`,
        ptwo:`22.290 RSD`
    },
    {
        path:`assets/images/patikedva.png`,
        h3:`Jordan`,
        pone:`JORDAN MVP 678 'CARDINAL'`,
        ptwo:`22.290 RSD`
    },
    {
        path:`assets/images/patiketri.png`,
        h3:`Jordan`,
        pone:`JORDAN MVP 678 'RAPTORS'`,
        ptwo:`22.290 RSD`
    },
    {
        path:`assets/images/patikecetiri.jpg`,
        h3:`Jordan`,
        pone:`JORDAN JUMPMAN TWO TREY 'BRED'`,
        ptwo:`19.690 RSD`
    },
    {
        path:`assets/images/patikepet.jpg`,
        h3:`Jordan`,
        pone:`AIR JORDAN 38 'AQUA'`,
        ptwo:`26.290 RSD`
    },
    {
        path:`assets/images/patikesest.jpg`,
        h3:`Jordan`,
        pone:`AIR JORDAN 38 'FADEAWAY'`,
        ptwo:`26.290 RSD`
    },
    {
        path:`assets/images/patikesedam.png`,
        h3:`Jordan`,
        pone:`JORDAN 38 'FUNDAMENTAL'`,
        ptwo:`26.290 RSD`
    },
    {
        path:`assets/images/patikeosam.jpg`,
        h3:`Jordan`,
        pone:`AIR JORDAN 38 'FIBA'`,
        ptwo:`26.290 RSD`
    },
    {
        path:`assets/images/patikedevet.png`,
        h3:`Jordan`,
        pone:`LUKA 2 'SPACE HUNTER'`,
        ptwo:`17.090 RSD`
    },
    {
        path:`assets/images/patikedeset.png`,
        h3:`Jordan`,
        pone:`JORDAN PRO STRONG 'PLAYOFFS'`,
        ptwo:`19.690 RSD`
    },
    {
        path:`assets/images/patikejedanaest.png`,
        h3:`Jordan`,
        pone:`JORDAN ONE TAKE 4 'DARK BURGUNDY`,
        ptwo:`13.190 RSD`
    }
]

var patikeContent = "";

for (const obj of patike) {
    patikeContent+=`<div class="swiper-slide">
                    <img src="${obj.path}" alt="${obj.pone}"/>
                    <h3 class="fw-normal dres-text">${obj.h3}</h3>
                    <p class="fw-bold text-start">${obj.pone}</p>
                    <p class="pb-3 text-start">${obj.ptwo}</p>
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
            slidesPerView:3
        },
        375:{
            slidesPerView:2
        },
        325:{
            slidesPerView:2
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
    mestaContent += `<div class="col-lg-4 p-0 m-0" id="${obj.id}"><div class="tamno"><h3 class="text-light fs-1">${obj.h3}</h3><p class="text-light fs-2">${obj.p}</p></div></div>`
}

document.getElementById("mestajedan").innerHTML=mestaContent;

// SLIDER DODACI ___________________________________________________________________________________________________________________________________

var dodaci = [
    {
        path:`assets/images/dodacijedan.png`,
        h3:`Under Armour`,
        pone:`UA PERFORMANCE HEADBAND 'BLACK'`,
        ptwo:`1.090 RSD`
    },
    {
        path:`assets/images/dodacidva.png`,
        h3:`Under Armour`,
        pone:`UA PERFORMANCE WRISTBANDS 'BLACK'`,
        ptwo:`990 RSD`
    },
    {
        path:`assets/images/dodacitri.png`,
        h3:`Under Armour`,
        pone:`UA HEATGEAR CREW 3PK 'STEEL / WHITE'`,
        ptwo:`2.090 RSD`
    },
    {
        path:`assets/images/dodacicetiri.png`,
        h3:`Under Armour`,
        pone:`UA HEATGEAR LOW CUT 'GRAY/WHITE/BLACK'`,
        ptwo:`1.790 RSD`
    },
    {
        path:`assets/images/dodacipet.png`,
        h3:`Adidas`,
        pone:`3-STRIPES LINEAR HALF-CREW CUSHIONED SOCKS 'WHITE'`,
        ptwo:`1.190 RSD`
    },
    {
        path:`assets/images/dodacisest.jpg`,
        h3:`Nike`,
        pone:`FREAK EVERYDAY PLUS CUSHIONED BASKETBALL CREW SOCKS 'WHITE'`,
        ptwo:`1.992 RSD`
    },
    {
        path:`assets/images/dodacisedam.jpg`,
        h3:`Nike`,
        pone:`FREAK EVERYDAY PLUS CUSHIONED BASKETBALL CREW SOCKS 'BLACK'`,
        ptwo:`1.992 RSD`
    },
    {
        path:`assets/images/dodaciosam.jpg`,
        h3:`Adidas`,
        pone:`ADIZERO ANKLE SOCKS 'WHITE'`,
        ptwo:`1.990 RSD`
    },
    {
        path:`assets/images/dodacidevet.jpg`,
        h3:`Wilson`,
        pone:`NBA AUTHENTIC`,
        ptwo:`8.290 RSD`
    },
    {
        path:`assets/images/dodacideset.png`,
        h3:`Nike`,
        pone:`NIKE UTILITY TRAINING GYMSACK 'BLACK'`,
        ptwo:`3.390 RSD`
    },
    {
        path:`assets/images/dodacijedanaest.png`,
        h3:`Nike`,
        pone:`UTILITY POWER TRAINING DUFFEL BAG 'BLACK'`,
        ptwo:`8.190 RSD`
    },
    {
        path:`assets/images/dodacidvanaest.png`,
        h3:`Nike`,
        pone:`BRASILIA 9.5 TRAINING DUFFEL BAG 'BLACK'`,
        ptwo:`5.490 RSD`
    }
]

var dodaciContent = "";

for (const obj of dodaci) {
    dodaciContent+=`<div class="swiper-slide">
                    <img src="${obj.path}" alt="${obj.pone}"/>
                    <h3 class="fw-normal dres-text">${obj.h3}</h3>
                    <p class="fw-bold text-start">${obj.pone}</p>
                    <p class="pb-3 text-start">${obj.ptwo}</p>
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
            slidesPerView:3
        },
        375:{
            slidesPerView:2
        },
        325:{
            slidesPerView:2
        }
    }
  });