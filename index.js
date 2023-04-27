const commencer = document.querySelector(".start")
const recommencer = document.querySelector(".restart")
const grille = document.querySelector(".grille")
const main = document.querySelector(".main")
const meilleur = document.querySelector(".meilleur")
let colonne = 6;
let ligne = 7;
let finDeJeux = false
let tableauCalculePositions = []
const joueur1 = "rouge";
const joueur2 = "jaune";
let aToiDeJouer = joueur1;

commencer.addEventListener("click", launchTheGame)

function launchTheGame() {
    meilleur.classList.add("hidden")
    grille.classList.remove("hidden")
    commencer.classList.add("hidden")
    for(let c = 0; c < colonne; c++) {
        let col = [];
        for(let l = 0; l < ligne; l++) {  
            col.push('-')
            let cercle = document.createElement("div")
            cercle.id = c.toString() + '-' + l.toString();
            cercle.classList.add("cercle")
            cercle.addEventListener('click', afficherJeton)
            grille.append(cercle)  
        }
        tableauCalculePositions.push(col)
    }
    commencer.classList.add("hidden")
}

function afficherJeton() {
    let leChangementCMnt = this.id.split('-')
    let l = parseInt(leChangementCMnt[0])
    let c = parseInt(leChangementCMnt[1])
    let position = document.getElementById(l.toString() + '-' + c.toString())
    if(finDeJeux) {
        finDeJeux = false;
        return
    }
    if(aToiDeJouer == joueur1) {   
        for(let i = l; i < ligne - 1; i++) {
            if(tableauCalculePositions[l][c] == "rouge" || tableauCalculePositions[l][c] == "jaune") {
                return
            }
            if(i === ligne - 2 || tableauCalculePositions[l+1][c] == "rouge" || tableauCalculePositions[l+1][c] == "jaune") {
                position = document.getElementById(l .toString() + '-' + c.toString())
                tableauCalculePositions[l][c] = aToiDeJouer; 
                position.classList.add("pieceDuJoueur1")
                aToiDeJouer = joueur2
                finDePartie()    
            }
            l++
        }
    }
    if(aToiDeJouer == joueur2) {   
        for(let i = l; i < ligne - 1; i++) {
            if(tableauCalculePositions[l][c] == "rouge" || tableauCalculePositions[l][c] == "jaune") {
                return
            }
            if(i === ligne - 2 || tableauCalculePositions[l+1][c] == "rouge" || tableauCalculePositions[l+1][c] == "jaune") {
                position = document.getElementById(l.toString() + '-' + c.toString())
                tableauCalculePositions[l][c] = aToiDeJouer; 
                position.classList.add("pieceDuJoueur2")
                aToiDeJouer = joueur1
                finDePartie()    
            }
            l++
        }
    }
}


function finDePartie() {
    for(let l = 0; l < 3; l++) {
        for(let c = 0; c <= colonne; c++) {
            if(tableauCalculePositions[l][c] !== '-') {
                if(tableauCalculePositions[l][c] === tableauCalculePositions[l+1][c] &&
                    tableauCalculePositions[l+1][c] === tableauCalculePositions[l+2][c] &&
                    tableauCalculePositions[l+2][c] === tableauCalculePositions[l+3][c]) {
                    gagnant(l, c);
                    return
                }
            }
        }
    }
    for(let l = 0; l < ligne - 1; l++) {
        for(let c = 0; c < colonne - 1; c++) {
            if(tableauCalculePositions[l][c] != '-') {
                if(tableauCalculePositions[l][c] === tableauCalculePositions[l][c+1] &&
                    tableauCalculePositions[l][c+1] === tableauCalculePositions[l][c+2] &&
                    tableauCalculePositions[l][c+2] === tableauCalculePositions[l][c+3]) {
                    gagnant(l, c);
                    return
                }
            }
        }
    }
    for(let l = 5; l >= 3; l--) {
        for(let c = 0; c < 4; c++) {
            if(tableauCalculePositions[l][c] != '-') {
                if(tableauCalculePositions[l][c] === tableauCalculePositions[l-1][c+1] &&
                    tableauCalculePositions[l-1][c+1] === tableauCalculePositions[l-2][c+2] &&
                    tableauCalculePositions[l-2][c+2] === tableauCalculePositions[l-3][c+3]) {
                    gagnant(l, c);
                    return
                }
            }
        }
    }
    for(let l = 5; l >=  3; l--) {
        for(let c = 6; c >= 3; c--) {
            if(tableauCalculePositions[l][c] != '-') {
                if(tableauCalculePositions[l][c] === tableauCalculePositions[l-1][c-1] &&
                    tableauCalculePositions[l-1][c-1] === tableauCalculePositions[l-2][c-2] &&
                    tableauCalculePositions[l-2][c-2] === tableauCalculePositions[l-3][c-3]) {
                    gagnant(l, c);
                    return
                }
            }
        }
    }
}



function gagnant(l, c) {
    const joueur12 = "joueur 1 est le meilleur"
    const joueur22 = "joueur 2 est le meilleur"
    let p = document.querySelector(".texte-recommencer")
    grille.classList.add("hidden")
        meilleur.classList.remove("hidden")
        while (grille.firstChild) {
            grille.removeChild(grille.firstChild);
        }
    if(tableauCalculePositions[l][c] === "rouge") {
        grille.classList.add("hidden")
        meilleur.classList.remove("hidden")
        p.innerText = joueur12
    } else {
        grille.classList.add("hidden")
        meilleur.classList.remove("hidden")
        p.innerText = joueur22
    }
    tableauCalculePositions = []
    recommencer.addEventListener("click", launchTheGame)
    finDeJeux = true;
}