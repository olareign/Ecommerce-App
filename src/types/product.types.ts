export interface IProductType {
  id: number;
  name: string;
  brand: string;
  image: string;
  currentPrice: number;
  originalPrice: number;
  discount: number;
  savings: number;
};

export interface IProductDBType {
    [category: string]: {
        id: number;
        name: string;
        brand?: string;
        image: string;
        currentPrice: number;
        originalPrice: number;
        discount: number;
        savings: number;
    }[];
}

export interface ICategoryType {
    id: number;
    name: string;
    image: string;
}

export interface IBrand {
    id: number;
    name: string;
    discount: string;
    bgColor: string;
    textColor: string;
    logoBackground: string;
    logoText: string;
    phoneColor: string;
}


export interface IBrandType {
    [category: string]: IBrand[];
}