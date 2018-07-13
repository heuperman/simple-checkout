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
    expect(sample.price).toEqual(1.99);
  });

  // As a shopper
  // So that I can buy an item
  // I would like to be able to scan items at the checkout
  it("allows user to scan items", function() {
    expect(checkout.scan(sample)).toEqual(1.99);
  });
});
