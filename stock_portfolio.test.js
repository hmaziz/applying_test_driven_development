
const StockPortfolio = require('./stock_portfolio')
const { ShareSaleException } = require('./stock_portfolio.js');

//tests for 2.2
describe('all tests for stock_portfolio', () => {
  let portfolio;

  beforeEach(() => {
    portfolio = new StockPortfolio();
  });

  //tests for 2.2
  describe('isEmpty() -- method testing', () => {
    test('returns true for an empty portfolio', () => {
      expect(portfolio.isEmpty()).toBe(true);
    });
    test('returns false for a non-empty portfolio', () => {
      portfolio.addStock('AAPL', 10);
      expect(portfolio.isEmpty()).toBe(false);
    });
  });

  //tests for 2.1 
  describe('addStock() -- method testing', () => {
    test('adds a new stock to the portfolio', () => {
      portfolio.addStock('AAPL', 10);
      expect(portfolio.portfolio).toEqual({ 'AAPL': 10 });
    });
    test('adds multiple stocks to the portfolio', () => {
      portfolio.addStock('AAPL', 10);
      portfolio.addStock('GOOG', 5);
      portfolio.addStock('AMZN', 2);
      expect(portfolio.portfolio).toEqual({ 'AAPL': 10, 'GOOG': 5, 'AMZN': 2 });
    });
  });

  //tests for 2.3
  describe('uniqueTickers()--method testing', () => {
    test('returns 0 for an empty portfolio', () => {
      expect(portfolio.uniqueTickers()).toBe(0);
    });
  });

  //tests for 2.4
  describe('purchasingStocks()--method testing', () => { 
    test('adds shares to an existing symbol when purchasing additional shares of that stock', () => {
      portfolio.addStock('AAPL', 5);
      portfolio.purchasingStocks('AAPL', 10);
      expect(portfolio.portfolio).toEqual({ 'AAPL': 15})
    });
  });

  //tests for 2.5
  describe('sellingStocks()--method testing', () => { 
    test('removes shares to an existing symbol when purchasing additional shares of that stock', () => {
      portfolio.addStock('AAPL', 10);
      portfolio.sellingStocks('AAPL', 5);
      expect(portfolio.portfolio).toEqual({ 'AAPL': 5})
    });
  })

  //tests for 2.6
  describe('getShares()--method testing', () => { 
    test('gets the number of shares associated with a specific ticker symbol', () => {
      portfolio.addStock('AAPL', 10);
      expect(portfolio.getShares('AAPL')).toBe(10);
    });
  });

  //tests for 2.7
  describe('retainingOwnedSymbols()--method testing', () => { 
    test('testing stock not owned', () => {
      portfolio.addStock('AAPL', 0);
      portfolio.addStock('MSFT', 10);
      portfolio.retainingOwnedSymbols();
      expect(portfolio.portfolio).toEqual({ 'MSFT' : 10 });
    });
});

  describe('sellingStocks()--method testing--ShareSaleException', () => { 
    test('throws exception when attempting to sell more shares than owned', () => {
      portfolio.addStock('AAPL', 10);
      expect(() => { portfolio.sellingStocks('AAPL', 20);}).toThrow(ShareSaleException);
    });
  });
});
