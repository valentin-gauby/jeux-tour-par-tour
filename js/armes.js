class weapon {
    constructor(nom, degat) {
        this.nom = nom;
        this.degat = degat;
    }

    /* Permets de prendre une arme sur le plateau et de déposer l'arme déjà en main les dégâts 
    et l'arme du personnage sont alors modifiées en fonction de la nouvelle arme. */

    armement(charPersonnage, charArme1, charArme2, charArme3, charArme4, personnage, arme1, arme2, arme3, arme4) {
        if ($(charPersonnage).hasClass(charArme1)) {
            $('td').removeClass(charArme1);
            $('tr').eq(personnage.x).find('td').eq(personnage.y).addClass(personnage.arme)
            console.log("arme  " + perso.arme);
            personnage.degat = arme1.degat;
            personnage.arme = charArme1;
        } 
        else if ($(charPersonnage).hasClass(charArme2)) {
            $('td').removeClass(charArme2);
            $('tr').eq(personnage.x).find('td').eq(personnage.y).addClass(personnage.arme)
            console.log("arme  " + perso.arme);
            personnage.degat = arme2.degat;
            personnage.arme = charArme2;
        }
        else if ($(charPersonnage).hasClass(charArme3)) {
            $('td').removeClass(charArme3);
            $('tr').eq(personnage.x).find('td').eq(personnage.y).addClass(personnage.arme)
            console.log("arme  " + perso.arme);
            personnage.degat = arme3.degat;
            personnage.arme = charArme3;
        }
        else if ($(charPersonnage).hasClass(charArme4)) {
            $('td').removeClass(charArme4);
            $('tr').eq(personnage.x).find('td').eq(personnage.y).addClass(personnage.arme)
            console.log("arme  " + perso.arme);
            personnage.degat = arme4.degat;
            personnage.arme = charArme4;
        }

    }
}
