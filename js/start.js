$(function () {
  // cree les personnages et les armes.
  perso = new personnage(null, null);
  perso2 = new personnage(null, null);
  hache = new weapon('hache', 30);
  lance = new weapon('lance', 25);
  dague = new weapon('dague', 23);
  masse = new weapon('masse', 40);
  arene = new combat(0, 0);
  //cree l'emplacement des personnages et des armes.
  board.drawTable();
  board.getplayer1(perso);
  board.getadjacentecells(perso);
  board.getplayer2(perso2);
  board.getobstacle();
  board.arme1(hache);
  board.arme2(lance);
  board.arme3(dague);
  board.arme4(masse);
  //cree la "boucle" de jeux.
  game = new game(1);

});
class game {
  constructor(pj) {
    this.pj = pj;
    this.boucle();
  }
  /* 
  Va rebooter à chaque fois qu'un personnage à joué.
  pj = 1 : joueur 1 -- Remets à jour les déplacements l'arme et la caractéristique du personnage.
  pj = 2 : joueur 2 -- Remets à jour les déplacements l'arme et la caractéristique du personnage.
  pj = 3 : joueur 1 -- lance la méthode combats et mets à jour les caractéristiques du personnage.
  pj = 4 : joueur 2 -- lance la méthode combats et mets à jour les caractéristiques du personnage.
   */
  boucle() {
    if (this.pj == 1) {
      board.getadjacentecells(perso);
      perso.deplacementJ1(this);
      console.log(this.pj);
      perso.statu();
      hache.armement(".perso", "hache", "lance", "dague", "masse", perso, hache, lance, dague, masse);
      if ($('tr').eq(perso.x).find('td').eq(perso.y + 1).hasClass("perso2") || $('tr').eq(perso.x).find('td').eq(perso.y - 1).hasClass("perso2")
        || $('tr').eq(perso.x - 1).find('td').eq(perso.y).hasClass("perso2") || $('tr').eq(perso.x + 1).find('td').eq(perso.y).hasClass("perso2")) {
        arene.combatMap(this);
      }
    }
    else if (this.pj == 2) {
      board.getadjacentecells(perso2);
      perso2.deplacementJ2(this);
      console.log(this.pj);
      perso.statu();
      hache.armement(".perso2", "hache", "lance", "dague", "masse", perso2, hache, lance, dague, masse);
      if ($('tr').eq(perso2.x).find('td').eq(perso2.y + 1).hasClass("perso") || $('tr').eq(perso2.x).find('td').eq(perso2.y - 1).hasClass("perso")
        || $('tr').eq(perso2.x - 1).find('td').eq(perso2.y).hasClass("perso") || $('tr').eq(perso2.x + 1).find('td').eq(perso2.y).hasClass("perso")) {
        arene.combatMap(this);
      }
    }
    else if (this.pj == 3) {
      perso.statu();
      arene.bataille(this);
    }
    else if (this.pj == 4) {
      perso.statu();
      arene.bataille(this);
    }
  }
}
