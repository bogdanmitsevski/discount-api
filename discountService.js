import { createDiscountMutation } from "./mutation.js";
import requestStructureShopify from "./requestStructure.js";
async function newDiscount(value) {
  try {
    const createdDiscount = await fetch(
      process.env.shopUrl + `/admin/api/2023-10/graphql.json`,
      requestStructureShopify(createDiscountMutation(value))
    ).then((response) => {
      return response.json();
    });
    return createdDiscount.data;
  } catch (e) {
    console.log(e.message || e);
    return e.message || e;
  }
}
export { newDiscount };
