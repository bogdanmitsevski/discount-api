import { newDiscount } from "./discountService.js";

class DiscountController {
  async createDiscount(req, res) {
    try {
      const createdCode = await newDiscount(
        req.body.total_price - req.body.part_payment
      );
      console.log(
        "Discount code was created",
        createdCode.discountCodeBasicCreate.codeDiscountNode.codeDiscount.codes
          .edges[0].node.code
      );
      res
        .status(200)
        .json(
          createdCode.discountCodeBasicCreate.codeDiscountNode.codeDiscount
            .codes.edges[0].node.code
        );
    } catch (e) {
      console.log(e.message || e);
      res.status(400).json(e);
    }
  }
}

export default new DiscountController();
