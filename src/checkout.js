"use strict";

function Checkout() {

}

Checkout.prototype.scan = function(item) {
  return item.price;
};
