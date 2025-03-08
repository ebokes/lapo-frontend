export interface CardProfileType {
  id: number;
  cardName: string;
  currency: string;
  expiration: string;
  binPrefix: number;
  dateCreated: string;
  action?: any;
}

export interface CardFeesType {
  id: number;
  name: any;
  value: any;
  frequency: any;
  currency: any;
  time: any;
  accountPad?: any;
  account?: any;
}
