// un livre
export default class Livre {
  constructor(id, titre, prix, qtestock) {
    this._id = id;
    this._titre = titre;
    this._prix = prix;
    this._qtestock = qtestock;
  }

  get titre() {
    return this._titre;
  }
  get qtestock() {
    return this._qtestock;
  }
  get prix() {
    return this._prix;
  }
  get id() {
    return this._id;
  }

  //Supprimer 1 à la qte en stock d’un libre présent dans la librairie
  //(si la qte devient nulle alors supprimer le produit)
  diminuerQteStock() {
    this._qtestock = this.qtestock - 1;
  }

  //augmenter de 1 à la qte en stock d’un livre
  augmenterQteStock() {
    this._qtestock = this.qtestock + 1;
  }

  //Afficher details livre
  pourAfficher() {
    return ` ${this._titre} coûte ${this._prix}€ et ${this._qtestock} sont en stock`;
  }
}
