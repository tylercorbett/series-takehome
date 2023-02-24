var {expect} = require('chai');
var {Shop, Item} = require('../src/rose_garden.js');
describe("Rose Garden", function() {

  it("should foo", function() {
    const roseGarden = new Shop([ new Item("foo", 0, 0) ]);
    const items = roseGarden.updateQuality();
    expect(items[0].name).to.equal("fixme");
  });

});
