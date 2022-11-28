const { Inventory, Drug } = require("../src/hokla");

describe("Hokla", function () {
  it("should foo", function () {
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
    expect(updatedDrugs[0].name).toBe("fixme");
  });
});
