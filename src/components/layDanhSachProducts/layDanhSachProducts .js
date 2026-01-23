import arrProducts from "../data/products";

export const layDanhSachProducts = () => {
  return {
    type: "LAY_DANH_SACH_PRODUCTS",
    arrProducts: arrProducts,
  };
};
