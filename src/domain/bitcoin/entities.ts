export type RateInfo = {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
};

export type BitcoinInfo = {
  time: {
    updatedISO: string;
  };
  disclaimer: string;
  chartName: string;
  bpi: {
    USD: RateInfo;
    GBP: RateInfo;
    EUR: RateInfo;
  };
};
