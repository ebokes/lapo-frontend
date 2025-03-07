export interface CardRequestTableType {
  id: number;
  branch: string;
  initiator: string;
  quantity: string;
  batch: number;
  dateRequested: string;
  status?: any;
}
export interface RecentCardRequestTableType {
  id: number;
  branch: string;
  cardType: string;
  quantity: string;
  status?: any;
}
