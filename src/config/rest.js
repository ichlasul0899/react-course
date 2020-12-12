export default {
  LOGIN: '/login',
  PRODUCT: '/product',
  PRODUCTBYID: (id) => {
    return `product/${id}`;
  },
};
