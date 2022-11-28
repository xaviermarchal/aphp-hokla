const { Inventory, Drug } = require("../src/hokla");

describe("Hokla inventory", function () {
  it("should update date of pre-emption and efficiency for each type of drug", function () {
    const drugs = [
      new Drug("Normal Drug", 10, 20),
      new Drug("Old bottle of wine", 2, 0),
      new Drug("Normal Drug 2", 5, 7),
      new Drug("Granny recipe", 0, 150),
      new Drug("Granny recipe", -1, 80),
      new Drug("Insulin vial", 15, 20),
      new Drug("Insulin vial", 10, 49),
      new Drug("Insulin vial", 5, 49),
      // this ARN Vaccine Drug does not work properly yet
      new Drug("ARN Vaccine", 3, 6),
    ];

    const hoklaAPHP = new Inventory(drugs);
    const updatedDrugs = hoklaAPHP.updateEfficiency();

    const normalDrug = updatedDrugs[0];
    expect(normalDrug.name).toBe("Normal Drug");
    expect(normalDrug.useBefore).toBe(9);
    expect(normalDrug.efficiency).toBe(19);

    // Old bottle of wine
    const oldBottleOfWine = updatedDrugs[1];
    expect(oldBottleOfWine.name).toBe("Old bottle of wine");
    expect(oldBottleOfWine.useBefore).toBe(1);
    expect(oldBottleOfWine.efficiency).toBe(1);

    const grannyRecipe = updatedDrugs[3];
    expect(grannyRecipe.name).toBe("Granny recipe");
    expect(grannyRecipe.useBefore).toBe(0);
    expect(grannyRecipe.efficiency).toBe(150);

    const grannyRecipe2 = updatedDrugs[4];
    expect(grannyRecipe2.name).toBe("Granny recipe");
    expect(grannyRecipe2.useBefore).toBe(-1);
    expect(grannyRecipe2.efficiency).toBe(80);

    const insulinVial = updatedDrugs[5];
    expect(insulinVial.name).toBe("Insulin vial");
    expect(insulinVial.useBefore).toBe(14);
    expect(insulinVial.efficiency).toBe(18);

    const insulinVial2 = updatedDrugs[6];
    expect(insulinVial2.name).toBe("Insulin vial");
    expect(insulinVial2.useBefore).toBe(9);
    expect(insulinVial2.efficiency).toBe(47);

    const insulinVial3 = updatedDrugs[7];
    expect(insulinVial3.name).toBe("Insulin vial");
    expect(insulinVial3.useBefore).toBe(4);
    expect(insulinVial3.efficiency).toBe(46);
  });
});
