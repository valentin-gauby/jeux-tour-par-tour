// creations de la map
const board = {
    rows: 10,
    columns: 20,
    obstacle: 40,
    drawTable: function () {
        let table = $("#board-game");
        table.html('');
        for (let i = 0; i < this.rows; i++) {
            $(`<tr id="row-${i}"></tr>`).appendTo(table);
            let currentRow = $(`#row-${i}`);
            for (let j = 0; j < this.columns; j++) {
                currentRow.append(`<td id="col-${i}${j}"></td>`)
            }
        }
    },

    //création d'un emplacement aléatoire.
    getallea: function () {
        return [parseInt(Math.random() * board.rows), parseInt(Math.random() * board.columns)];

    },

    //ajouter une cellule à l'emplacement aléatoire.
    getcellule: function (nom) {
        let getcell = false;
        while (getcell == false) {
            const cell = board.getallea();
            console.log(cell);
            if ($('tr').eq(cell[0]).find('td').eq(cell[1]).hasClass(nom) || $('tr').eq(cell[0]).find('td').eq(cell[1]).hasClass('perso') 
            || $('tr').eq(cell[0]).find('td').eq(cell[1]).hasClass('perso2') ||
                $('tr').eq(cell[0]).find('td').eq(cell[1]).hasClass('Obstacle') || $('tr').eq(cell[0]).find('td').eq(cell[1]).hasClass('droite')
                || $('tr').eq(cell[0]).find('td').eq(cell[1]).hasClass('gauche') || $('tr').eq(cell[0]).find('td').eq(cell[1]).hasClass('haut') 
                || $('tr').eq(cell[0]).find('td').eq(cell[1]).hasClass('bas')) {
                console.log("false  " + nom);
            }
            else {
                $('tr').eq(cell[0]).find('td').eq(cell[1]).addClass(nom);
                console.log('true  ' + nom);
                getcell = true;
                return cell;
            }
        }
    },

    //création de l'emplacement des obstacles des personnages et des armes.
    getobstacle: function () {
        for (let i = 0; i < this.obstacle; i++) {
            board.getcellule('Obstacle');
        }
    },

    getplayer1: function (perso) {
        position = board.getcellule("perso");
        perso.x = position[0];
        perso.y = position[1];
    },

    getplayer2: function (perso2) {
        position = board.getcellule("perso2");
        perso2.x = position[0];
        perso2.y = position[1];
    },

    arme1: function (hache) {
        position = board.getcellule("hache");
        hache.x = position[0];
        hache.y = position[1];
    },
    arme2: function (lance) {
        position = board.getcellule("lance");
        lance.x = position[0];
        lance.y = position[1];
    },
    arme3: function (dague) {
        position = board.getcellule("dague");
        dague.x = position[0];
        dague.y = position[1];
    },
    arme4: function (masse) {
        position = board.getcellule("masse");
        masse.x = position[0];
        masse.y = position[1];
    },

    //créations des cellules adjacentes des personnages.
    getadjacentecells: function (perso) {
        droiteTab = [];
        gaucheTab = [];
        hautTab = [];
        basTab = []
        for (let i = 0; i < 3; i++) {
            let droite = [perso.x, perso.y + i + 1];
            if ($('tr').eq(droite[0]).find('td').eq(droite[1]).hasClass("Obstacle")) {
                break;
            }
            else {
                $('tr').eq(droite[0]).find('td').eq(droite[1]).addClass('droite');
                droiteTab.push($('tr').eq(droite[0]).find('td').eq(droite[1]));
            }
        }

        for (let i = 0; i < 3; i++) {
            let gauche = [perso.x, perso.y - i - 1];
            if ($('tr').eq(gauche[0]).find('td').eq(gauche[1]).hasClass("Obstacle") || gauche[1] < 0) {
                break;
            }
            else {
                $('tr').eq(gauche[0]).find('td').eq(gauche[1]).addClass('gauche');
                gaucheTab.push($('tr').eq(gauche[0]).find('td').eq(gauche[1]));
            }
        }

        for (let i = 0; i < 3; i++) {
            let haut = [perso.x - i - 1, perso.y];
            if ($('tr').eq(haut[0]).find('td').eq(haut[1]).hasClass("Obstacle") || haut[0] < 0) {
                break;
            }
            else {
                $('tr').eq(haut[0]).find('td').eq(haut[1]).addClass('haut');
                hautTab.push($('tr').eq(haut[0]).find('td').eq(haut[1]));
            }
        }

        for (let i = 0; i < 3; i++) {
            let bas = [perso.x + i + 1, perso.y];
            if ($('tr').eq(bas[0]).find('td').eq(bas[1]).hasClass("Obstacle")) {
                break;
            }
            else {
                $('tr').eq(bas[0]).find('td').eq(bas[1]).addClass('bas');
                basTab.push($('tr').eq(bas[0]).find('td').eq(bas[1]));
            }
        }
    },

    // suppression des cellules adjacentes des personnages.
    innit: function () {
        $('td').removeClass('droite');
        $('td').removeClass('gauche');
        $('td').removeClass('haut');
        $('td').removeClass('bas');
    }
}