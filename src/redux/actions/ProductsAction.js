import { productsData } from "../../data/productsData";


export const LAY_DANH_SACH_PRODUCTS = "LAY_DANH_SACH_PRODUCTS";

export const layDanhSachProducts = () => {
  return {
    type: LAY_DANH_SACH_PRODUCTS,
    arrProducts: productsData,
  };
};
