class combat {
    constructor(defJ1, defJ2) {
        this.map = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
            [1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1,],
            [1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1,],
            [1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1,],
            [1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1,],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,]
        ];
        this.defJ1 = defJ1;
        this.defJ2 = defJ2;
    }

    //Supprime la map pour commencer le combat entre les deux personnages
    combatMap(game) {
        $("#board-game").hide('slow');
        $("#board-game").remove('#board-game');
        $('body').append('<div id="newcontent-game"><table id="newBoard-game"></table></div>');
        perso.stopDeplacement(game);
        if (game.pj == 1) {
            game.pj = 4;
        }
        else if (game.pj == 2) {
            game.pj = 3;
        }
        perso2.stopDeplacement(game)
        arene.newMap();
        $('td').css('background-color', 'transparent');
    }

    // Créé l’arène de combat 
    newMap() {
        let newTable = $("#newBoard-game");
        newTable.html('');
        for (let y = 0; y < this.map.length; y++) {
            $(`<tr id="wall-${y}"></tr>`).appendTo(newTable);
            let currentRow = $(`#wall-${y}`);
            for (let x = 0; x < this.map.length; x++) {
                currentRow.append(`<td id="colle-${y}${x}"></td>`)
            }
        }
    }

    /* Si un des deux perso tombe a zéro de vie supprime la map et crée un bouton pour recommencer,
     tant que les joueurs ont de la vie le combat continue, si un joueur se défend la prochaine attaque contre lui sera diminué de 50%. */
    bataille(game) {
        if (perso.vie <= 0) {
            $("#newBoard-game").remove('#newBoard-game');
            $('body').append('<p id = gameOverJ1  onclick=" location.reload()" >Le joeur 1 a perdu ! </p>');
            $('body').append('<button id="rejouer"  onclick=" location.reload()">rejouer</button>');
        }
        else if (perso2.vie <= 0) {
            $("#newBoard-game").remove('#newBoard-game');
            $('body').append('<p id = gameOverJ2>Le joeur 2 a perdu !</p>');
            $('body').append('<button id="rejouer"  onclick=" location.reload()">rejouer</button>');
        }
        else if (game.pj == 3) {
            $('h1').append('<p id = tour> Au joeur 1 de jouer !</p>');

            $("#attaqueJ1").click(function () {
                if (arene.defJ2 == 1) {
                    console.log('attaque j2 et il def');
                    perso2.vie = perso2.vie - (perso.degat / 2);
                    arene.defJ2 = 0;
                }
                else if (arene.defJ2 == 0) {
                    console.log('attaque j2 et il ne def pas');
                    perso2.vie = perso2.vie - perso.degat;
                }
                game.pj = 4;
                perso.stopcombat(game);
                $("#tour").remove('#tour');
            })

            $("#defenseJ1").click(function () {
                arene.defJ1 = 1
                console.log('j1 def ' + arene.defJ1);
                game.pj = 4;
                perso.stopcombat(game);
                $("#tour").remove('#tour');
            })
        }
        else if (game.pj == 4) {
            $('h1').append('<p id = tour> Au joeur 2 de jouer !</p>');

            $("#attaqueJ2").click(function () {
                if (arene.defJ1 == 1) {
                    console.log('attaque j1 et il deff');
                    perso.vie = perso.vie - (perso2.degat / 2);
                    arene.defJ1 = 0;
                }
                else if (arene.defJ1 == 0) {
                    console.log('attaque j1 et il ne def pas');
                    perso.vie = perso.vie - perso2.degat;
                }
                game.pj = 3;
                perso.stopcombat(game);
                $("#tour").remove('#tour');
            })

            $("#defenseJ2").click(function () {
                arene.defJ2 = 1
                console.log('j2 def ' + arene.defJ2);
                game.pj = 3;
                perso.stopcombat(game);
                $("#tour").remove('#tour');
            })
        }
    }
}