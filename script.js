//javascript iteration

var nBaris;
var i;

//for
function buatBaris() {
    document.getElementById("result").innerHTML = "";

    nBaris = document.getElementById("number").value;
    
    for(i = 1; i <= nBaris; i++) {
        document.getElementById("result").innerHTML += "baris " + i + "<br>";
    }
}

//do-while
var angka, baris, belumTigaBaris;

function ulangTerus() {
    document.getElementById("hasil").innerHTML = "";
    
    //var angka hanya untuk nomor saja
    angka = document.getElementById("nomor").value;
    //var baris untuk mengecek baris
    baris = 1;
    belumTigaBaris = true; //boolean

    do {
        document.getElementById("hasil").innerHTML += "baris " + angka + "<br>"
        
        if(baris == 3) {
            belumTigaBaris = false;
        } else {
            baris++; //sama saja dengan baris = baris + 1
            angka++;
        }
        
    } while(belumTigaBaris)
}