type Product = {
  id?: string;
  name: string;
  specs: string[];
  settings: string[];
  price: string;
  extra_info: string;
  quantity?: number;
  category_id: string;
  creator_id: string;
  creation_date?: Date;
};

export default Product;
