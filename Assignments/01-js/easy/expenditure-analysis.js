/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let arr=[];
  let map = new Map();
  if(transactions.length==0){
    return arr;
  }
  for(let i=0;i<transactions.length;i++){

    if(map.has(transactions[i].category)){
      let val=map.get(transactions[i].category)+transactions[i].price;
      map.set(transactions[i].category,val);
    }else{
      map.set(transactions[i].category,transactions[i].price);;
    }
  }
  for(let [x,y] of map){

    let obj={};
    obj.category=x;
    obj.totalSpent=y;
    arr.push(obj);
  }
  return arr;
}

module.exports = calculateTotalSpentByCategory;
