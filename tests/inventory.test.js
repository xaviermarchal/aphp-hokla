const { Inventory } = require("../src/inventory");
const { OldBottleOfWine, InsulinVial } = require("../src/drugs");

describe("Hokla inventory", function () {
  it("should increase of 1 the efficiency of an old bottle of wine when efficiency is updated", function () {
    const drugs = [new OldBottleOfWine(2, 0)];

    const hoklaAPHP = new Inventory(drugs);
    const updatedDrugs = hoklaAPHP.updateEfficiency();

    const oldBottleOfWine = updatedDrugs[0];
    expect(oldBottleOfWine.name).toBe("Old bottle of wine");
    expect(oldBottleOfWine.useBefore).toBe(1);
    expect(oldBottleOfWine.efficiency).toBe(1);
  });

  describe("Insulin vial", function () {
    it("should decrement of 2 the efficiency of an insuline vial when efficiency is updated", function () {
      const drugs = [new InsulinVial(15, 20)];

      const hoklaAPHP = new Inventory(drugs);
      const updatedDrugs = hoklaAPHP.updateEfficiency();

      const insulinVial = updatedDrugs[0];
      expect(insulinVial.name).toBe("Insulin vial");
      expect(insulinVial.useBefore).toBe(14);
      expect(insulinVial.efficiency).toBe(18);
    });

    it("should decrement of 3 the efficiency of an insuline vial when efficiency is updated", function () {
      const drugs = [new InsulinVial(5, 49)];

      const hoklaAPHP = new Inventory(drugs);
      const updatedDrugs = hoklaAPHP.updateEfficiency();

      const insulinVial = updatedDrugs[0];
      expect(insulinVial.name).toBe("Insulin vial");
      expect(insulinVial.useBefore).toBe(4);
      expect(insulinVial.efficiency).toBe(46);
    });
  });
});
