import StockData from '../StockData';
import CandlestickFinder from './CandlestickFinder';

export default class BullishSpinningTop extends CandlestickFinder {
    constructor() {
        super();
        this.name = 'BullishSpinningTop';
        this.requiredCount  = 1;
    }
    logic (data:StockData) {
        let daysOpen  = data.open[0];
        let daysClose = data.close[0];
        let daysHigh  = data.high[0];
        let daysLow   = data.low[0];

        let bodyLength           = Math.abs(daysClose-daysOpen);
        let isBullish            = daysClose > daysOpen;
        let upperShadowLength    = Math.abs(daysHigh-daysClose);
        let lowerShadowLength    = Math.abs(daysOpen-daysLow);
        let isBullishSpinningTop = bodyLength < upperShadowLength && 
                                 bodyLength < lowerShadowLength && isBullish;

        return isBullishSpinningTop;
    }
}

export function bullishspinningtop(data:StockData) {
  return new BullishSpinningTop().hasPattern(data);
}