"use strict";

function Checkout() {
  this._basket = [];
}

Checkout.prototype.scan = function(item) {
  this._basket.push(item);
  return item.price;
};

Checkout.prototype.total = function() {
  var totalPrice = this._addPrices();
  return this._formatPrice(totalPrice);
};

Checkout.prototype._formatPrice = function(price) {
  return "£" + price;
};

Checkout.prototype._addPrices = function() {
  var total = 0;
  for ( var index in this._basket) {
    total += this._basket[index].price;
  }
  return total;
};
