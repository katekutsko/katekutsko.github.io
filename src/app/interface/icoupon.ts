export interface ICoupon {
  id: number;
  name: string;
  description: string;
  detailedDescription: string;
  daysBeforeExpiration: number;
  price: number;
}
