"use strict";

function Checkout() {
  this._basket = [];
}

Checkout.prototype.scan = function(item) {
  this._basket.push(item);
  return item.price;
};

Checkout.prototype.total = function() {
  var totalPrice = 0;
  for ( var index in this._basket) {
    totalPrice += this._basket[index].price;
  }
  return totalPrice;
};
