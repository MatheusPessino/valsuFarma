export interface ProductLog{
    id?: number;
    dt_update: Date;
    name_old: string;
    name_new: string;
    description_old: string;
    description_new: string;
    price_old: number;
    price_new: number;
    stock_old: number;
    stock_new: number;
    category_old: number;
    category_new: number;
    brand_old: number;
    brand_new: number;
}