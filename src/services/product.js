import BaseService from './baseService';
import API from '../config/rest';

const getProduct = (search, limit, offset) => {
  return BaseService.get(API.PRODUCT, {
    params: {
      limit,
      offset,
      search,
    },
  });
};
const getProductById = (id) => {
  return BaseService.get(API.PRODUCTBYID(id));
};

export default { getProduct, getProductById };
