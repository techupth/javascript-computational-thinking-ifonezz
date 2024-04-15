let orders = [
  {
    id: 1,
    customerName: "Brenn Hugk",
    productName: "Chocolate - Milk, Callets",
    productPrice: 94690,
    productQuantity: 35,
    creditCardType: "solo",
  },
  {
    id: 2,
    customerName: "Celia Dary",
    productName: "Bread - Pumpernickle, Rounds",
    productPrice: 10746,
    productQuantity: 87,
    creditCardType: "jcb",
  },
  {
    id: 3,
    customerName: "Toinette Blindermann",
    productName: "Bar - Granola Trail Mix Fruit Nut",
    productPrice: 94191,
    productQuantity: 31,
    creditCardType: "switch",
  },
  {
    id: 4,
    customerName: "Anjela Joannet",
    productName: "Cheese - Parmesan Cubes",
    productPrice: 5131,
    productQuantity: 96,
    creditCardType: "diners-club-carte-blanche",
  },
  {
    id: 5,
    customerName: "Kennith Bussons",
    productName: "Wine - White, Pinot Grigio",
    productPrice: 94432,
    productQuantity: 75,
    creditCardType: "jcb",
  },
  {
    id: 6,
    customerName: "Birdie Shepland",
    productName: "Tomato Paste",
    productPrice: 5845,
    productQuantity: 65,
    creditCardType: "visa-electron",
  },
  {
    id: 7,
    customerName: "Willyt Helks",
    productName: "Asparagus - Green, Fresh",
    productPrice: 89253,
    productQuantity: 26,
    creditCardType: "laser",
  },
  {
    id: 8,
    customerName: "Bill Champion",
    productName: "Wine - Red, Harrow Estates, Cab",
    productPrice: 922100,
    productQuantity: 40,
    creditCardType: "china-unionpay",
  },
  {
    id: 9,
    customerName: "Cris Druce",
    productName: "Bar Mix - Lemon",
    productPrice: 83104,
    productQuantity: 6,
    creditCardType: "jcb",
  },
  {
    id: 10,
    customerName: "Darnell O'Currine",
    productName: "Lime Cordial - Roses",
    productPrice: 99041,
    productQuantity: 75,
    creditCardType: "visa-electron",
  },
];

// Start coding here
function checkTotalAmountOfOrders(orders) {
  let result = {
    id:0,
    price:""
  };
  let temp = 0;
  for(let i = 0; i < orders.length; i++) {
    if(i == 0) {
      let sumTotalProductId1 = calculateTotalPrice(orders[0].productPrice,orders[0].productQuantity);
      let sumTotalProductId2 = calculateTotalPrice(orders[1].productPrice,orders[1].productQuantity);
      if(sumTotalProductId1 > sumTotalProductId2){
        temp = sumTotalProductId1;
        result.id = orders[0].id;
        result.price = sumTotalProductId1;
      } else {
        temp = sumTotalProductId2;
        result.id = orders[1].id;
        result.price = sumTotalProductId1;
      }
    } else {
      let sumTotalProductIdX = calculateTotalPrice(orders[i].productPrice,orders[i].productQuantity);
      if(temp < sumTotalProductIdX) {
        temp = sumTotalProductIdX;
        result.id = orders[i].id;
        result.price = sumTotalProductIdX;
      }
    }
  }
  return result;
}

function calculateTotalPrice(price,quantity){
  return price*quantity;
}

let result = checkTotalAmountOfOrders(orders);
console.log("The most expensive order is order id "+ result.id + " ("+result.price+") Baht" );
