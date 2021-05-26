var KolaPoleCheckbox = document.getElementsByName("kolo[]");
var Prislusenstvi = document.getElementsByName("radio[]");
var PocetKusuPole;
var PocetDnu;
var CelkovaCena;
var Cena;
var Vysledek;


function VypocitejCenu() {
    PocetDnu =parseInt(document.getElementById("VyberDny").value); 
    Cena=0;
    Vysledek=0;  
    for (var i = 0; i < KolaPoleCheckbox.length; i++) {
        if (KolaPoleCheckbox[i].checked) {
            Cena=parseInt(KolaPoleCheckbox[i].getAttribute("data-price"));
            var cenaAPocetDnu= Cena*PocetDnu;
            Vysledek+=cenaAPocetDnu*PocetKusuPole[i];
            console.log(PocetKusuPole[i]);
        }
    }
    VypocetPrirazkaPrislusenstvi();
}

function VypocetPrirazkaPrislusenstvi() {
    for (var i = 0; i < Prislusenstvi.length; i++) {
        if (Prislusenstvi[i].checked) {
            var Prirazka=parseFloat(Prislusenstvi[i].getAttribute("data-price"));
            CelkovaCena=Vysledek*Prirazka;            
            document.getElementById("VypocetCeny").value=parseFloat(CelkovaCena).toFixed(2);
        }
    }
}

function PocetKusu() {
    var horske = document.getElementById("pocet-horske").value;
    var detske = document.getElementById("pocet-detske").value; 
    var silnicni = document.getElementById("pocet-silnicni").value; 
    var gravel = document.getElementById("pocet-gravel").value;      
    PocetKusuPole=[horske,detske,silnicni,gravel];    
}


function Poslano() {
    OdhadCeny();
    if (ValidaceEmailu()) {
        document.getElementById("stavPoslani").textContent="Posláno";
    }
    else{
        document.getElementById("stavPoslani").textContent="Špatně vyplněný email znova";
    }
}

function OdhadCeny() {
    var Typ = parseInt(document.getElementById("OdhadCeny").value);
    console.log(Typ);
    var rozmezi = parseInt(CelkovaCena*0.7);
    console.log(rozmezi);
    if (parseInt(CelkovaCena) < parseInt(Typ) ) {
        document.getElementById("VlezlDoCeny").textContent="Váš odhad byl špatný"; 
    }
    else if (parseInt(Typ) > rozmezi){
        document.getElementById("VlezlDoCeny").textContent="Váš odhad byl DOBRÝ";
    }else
        document.getElementById("VlezlDoCeny").textContent="Váš odhad byl špatný";

}

function ValidaceEmailu() {
    var str = document.getElementById("email").value;
    if (str.includes("@")) {
        return true;
    }

}

