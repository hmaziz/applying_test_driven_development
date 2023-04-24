class ShareSaleException extends Error {
  constructor(message) {
    super(message);
    this.name = 'ShareSaleException';
  }
}

class StockPortfolio {
  constructor() {
    this.portfolio = {};
  }

  //2.1
  addStock(tickerSymbol, shares) {
    this.portfolio[tickerSymbol] = shares;
  }
  //2.2
  isEmpty(){ 
    return Object.keys(this.portfolio).length === 0;
  }
  //2.3
  uniqueTickers(){
    return Object.keys(this.portfolio).length;
  }
  //2.4
  purchasingStocks(tickerSymbol, shares){ 
    this.portfolio[tickerSymbol] += shares;
  }
  //2.5
  sellingStocks(tickerSymbol, shares){
    if (shares > this.portfolio[tickerSymbol]) {
      throw new ShareSaleException('');
    }
    this.portfolio[tickerSymbol] -= shares;
  }

  //2.6
  getShares(tickerSymbol){ 
    return this.portfolio[tickerSymbol];
  }

  //2.7
  retainingOwnedSymbols() {
    for (const tickerSymbol in this.portfolio) {
      if (this.portfolio[tickerSymbol] === 0) {
        delete this.portfolio[tickerSymbol];
      }
}
  }
}


module.exports = StockPortfolio;
