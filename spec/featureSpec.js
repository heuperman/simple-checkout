describe("Feature test", function() {
  var checkout;

  beforeEach(function() {
    checkout = new Checkout();
    sample = new Item("Sample",1.99);
  });

  // As a shopper
  // So I know how much an item costs
  // I would like to be able to see its price
  it("shows the price of each item", function() {
    expect(checkout.scan(sample)).toEqual(1.99);
  });
});
