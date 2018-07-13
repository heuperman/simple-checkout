describe("Item", function() {
  var sample;


beforeEach(function() {
  sample = new Item("sample", 5.99);
});

  describe(".price", function() {
    it("returns the price of an item", function() {
      expect(sample.price).toEqual(5.99);
    });
  });
});
