const {
  NormalDrug,
  OldBottleOfWine,
  GrannyRecipe,
  InsulinVial,
} = require("../src/drugs");

class Inventory {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateEfficiency() {
    for (let i = 0; i < this.drugs.length; i++) {
      this.drugs[i].updateEfficiency();
    }
    return this.drugs;
  }
}

module.exports = {
  Inventory,
};
