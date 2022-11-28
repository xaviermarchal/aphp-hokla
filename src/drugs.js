class Drug {
  constructor(name, useBefore, efficiency) {
    this.name = name;
    this.useBefore = useBefore;
    this.efficiency = efficiency;
  }
  updateEfficiency() {}
}

class NormalDrug extends Drug {
  constructor(name, useBefore, efficiency) {
    super(name, useBefore, efficiency);
  }
  updateEfficiency() {
    if (this.efficiency > 0) {
      this.efficiency = this.efficiency - 1;
    }
    this.useBefore = this.useBefore - 1;
  }
}

class OldBottleOfWine extends Drug {
  constructor(useBefore, efficiency) {
    super("Old bottle of wine", useBefore, efficiency);
  }
  updateEfficiency() {
    if (this.efficiency < 100) {
      this.efficiency = this.efficiency + 1;
    }
    this.useBefore = this.useBefore - 1;
  }
}

class GrannyRecipe extends Drug {
  constructor(useBefore, efficiency) {
    super("Granny recipe", useBefore, efficiency);
  }
  updateEfficiency() {}
}

class InsulinVial extends Drug {
  constructor(useBefore, efficiency) {
    super("Insulin vial", useBefore, efficiency);
  }
  updateEfficiency() {
    if (this.useBefore > 0) {
      this.efficiency = this.efficiency - 1;
      if (this.useBefore < 31) {
        this.efficiency = this.efficiency - 1;
      }
      if (this.useBefore < 8) {
        this.efficiency = this.efficiency - 1;
      }
      this.useBefore = this.useBefore - 1;
    } else {
      this.efficiency = 0;
    }
  }
}

module.exports = {
  NormalDrug,
  OldBottleOfWine,
  GrannyRecipe,
  InsulinVial,
};
