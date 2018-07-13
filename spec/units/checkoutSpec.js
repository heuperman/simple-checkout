describe("Checkout", function() {
  var checkout;
  var sample;


beforeEach(function() {
  checkout = new Checkout();
  sample = { "product": "sample", "price": 2.99 };
});

  describe(".scan", function() {
    it("returns the price of an item", function() {
      expect(checkout.scan(sample)).toEqual(2.99);
    });
  });

  describe(".total", function() {
    it("returns the total price of all scanned items in a readable format", function() {
      for (i = 0; i < 3; i++) { checkout.scan(sample); }
      expect(checkout.total()).toEqual("£8.97");
    });
  });

  describe("_formatPrice", function() {
    it("returns a number as string including a £ symbol", function() {
      expect(checkout._formatPrice(2.99)).toEqual("£2.99");
    });
  });

  describe("_addPrices", function() {
    it("returns the total price of all scanned items", function() {
      for (i = 0; i < 3; i++) { checkout.scan(sample); }
      expect(checkout._addPrices()).toEqual(8.97);
    });
  });
});
