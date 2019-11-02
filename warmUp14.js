/*
Say you have an array for which the i element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

var maxProfit = function(prices) {
	var obj = {}
	for( var i = 0 ; i < prices.length ; i++){
		obj[i] = prices[i];
	}
	obj.arrOfSell = [];
 	obj.arrOfBuy = [];
 	obj.buyOne = buyOne;
 	obj.sellOne = sellOne;
 	obj.profit = profit;


	return obj
};

var buyOne = function(day){
	this.arrOfBuy.push(this[day])
}
var sellOne = function(day){
	this.arrOfSell.push(this[day])
}
var profit = function(){
	var profit =[];
	var maxpro = 0;
	if(this.arrOfBuy.length===0 && this.arrOfSell.length===0 ){
		return " no transaction is done "
	}
	for ( var i = 0 ; i < this.arrOfSell.length ; i++){
		profit.push(this.arrOfSell[i]-this.arrOfBuy[i])
	};
	console.log(profit)
	for(var j = 0 ; j < profit.length ; j++ ){
		if(profit[j] > 0){
			maxpro = profit[j]
		}
	}
	return maxpro
}


var taha = maxProfit([1,2,3,4,5])

taha.sellOne(3)

taha.sellOne(4)

taha.buyOne(2)

taha.buyOne(1)