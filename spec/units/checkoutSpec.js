describe("Checkout", function() {
  var checkout;
  var sample;


beforeEach(function() {
  checkout = new Checkout();
  sample = { "product": "sample", "price": 1.99 };
});

  describe(".scan", function() {
    it("returns the price of an item", function() {
      expect(checkout.scan(sample)).toEqual(1.99);
    });
  });
});
