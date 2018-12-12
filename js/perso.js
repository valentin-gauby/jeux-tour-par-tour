class personnage {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vie = 100;
        this.arme = "main";
        this.degat = 10;
    }

    //Deplace le joueur 1 sur la case adjacente sélectionner 
    deplacementJ1(game) {
        for (let i = 0; i < 3; i++) {
            $(droiteTab[i]).click(function () {
                $('tr').eq(perso.x).find('td').eq(perso.y).removeClass("perso");
                perso.y = perso.y + 1 + i;
                $('tr').eq(perso.x).find('td').eq(perso.y).addClass("perso");
                game.pj = 2;
                board.innit();
                perso.stopDeplacement(game);
            })

            $(gaucheTab[i]).click(function () {
                $('tr').eq(perso.x).find('td').eq(perso.y).removeClass("perso");
                perso.y = perso.y - 1 - i;
                $('tr').eq(perso.x).find('td').eq(perso.y).addClass("perso");
                game.pj = 2;
                board.innit();
                perso.stopDeplacement(game);
            })

            $(hautTab[i]).click(function () {
                $('tr').eq(perso.x).find('td').eq(perso.y).removeClass("perso");
                perso.x = perso.x - 1 - i;
                $('tr').eq(perso.x).find('td').eq(perso.y).addClass("perso");
                game.pj = 2;
                board.innit();
                perso.stopDeplacement(game);
            })

            $(basTab[i]).click(function () {
                $('tr').eq(perso.x).find('td').eq(perso.y).removeClass("perso");
                perso.x = perso.x + 1 + i;
                $('tr').eq(perso.x).find('td').eq(perso.y).addClass("perso");
                game.pj = 2;
                board.innit();
                perso.stopDeplacement(game);
            })
        }
    }

    //Deplace le joueur 2 sur la case adjacente sélectionner 
    deplacementJ2(game) {
        for (let i = 0; i < 3; i++) {
            $(droiteTab[i]).click(function () {
                $('tr').eq(perso2.x).find('td').eq(perso2.y).removeClass("perso2");
                perso2.y = perso2.y + 1 + i;
                $('tr').eq(perso2.x).find('td').eq(perso2.y).addClass("perso2");
                game.pj = 1;
                board.innit();
                perso2.stopDeplacement(game);
            })

            $(gaucheTab[i]).click(function () {
                $('tr').eq(perso2.x).find('td').eq(perso2.y).removeClass("perso2");
                perso2.y = perso2.y - 1 - i;
                $('tr').eq(perso2.x).find('td').eq(perso2.y).addClass("perso2");
                game.pj = 1;
                board.innit();
                perso2.stopDeplacement(game);
            })

            $(hautTab[i]).click(function () {
                $('tr').eq(perso2.x).find('td').eq(perso2.y).removeClass("perso2");
                perso2.x = perso2.x - 1 - i;
                $('tr').eq(perso2.x).find('td').eq(perso2.y).addClass("perso2");
                game.pj = 1;
                board.innit()
                perso2.stopDeplacement(game);
            })

            $(basTab[i]).click(function () {
                $('tr').eq(perso2.x).find('td').eq(perso2.y).removeClass("perso2");
                perso2.x = perso2.x + 1 + i;
                $('tr').eq(perso2.x).find('td').eq(perso2.y).addClass("perso2");
                game.pj = 1;
                board.innit();
                perso2.stopDeplacement(game);
            })
        }
    }

    //stop le déplacement du joueur qui vient de jouer.
    stopDeplacement(game) {
        for (let i = 0; i < 3; i++) {
            $(droiteTab[i]).off();
            $(gaucheTab[i]).off();
            $(hautTab[i]).off();
            $(basTab[i]).off();
        }
        game.boucle();
    }

    // Mets à jour la position, la vie, les armes et les dégâts des joueurs sur la page.
    statu() {
        $('#position-j1').text("Position : " + perso.x + "," + perso.y);
        $('#vie-j1').text("Vie : " + perso.vie);
        $('#arme-j1').text("Arme : " + perso.arme);
        $('#degat-j1').text("Degat : " + perso.degat);
        $('#position-j2').text("Position : " + perso2.x + "," + perso2.y);
        $('#vie-j2').text("Vie : " + perso2.vie);
        $('#arme-j2').text("Arme : " + perso2.arme);
        $('#degat-j2').text("Degat : " + perso2.degat);
    }

    // stop l'attaque et la def du joueur qui vient de jouer.
    stopcombat(game) {
        $("#attaqueJ1").off()
        $("#defenseJ1").off()
        $("#attaqueJ2").off()
        $("#defenseJ2").off()
        game.boucle();
    }
}