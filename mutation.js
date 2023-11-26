function createDiscountMutation(discountValue) {
  return `
    mutation {
        discountCodeBasicCreate(basicCodeDiscount: {
           usageLimit: 1,
          title: "${Date.now().toString().toUpperCase()}discount",
          startsAt: "2019-01-01",
          customerSelection: {
            all: true
          }
          code: "${(Date.now() + "code").toUpperCase()}",
          customerGets: {
            value: {
              discountAmount:  {
                amount: ${Number(discountValue)},
                appliesOnEachItem: false
              }
            }
            items: {
                all: true
            },
          }}) {
          userErrors { field message code }
          codeDiscountNode {
            id
              codeDiscount {
              ... on DiscountCodeBasic {
                title
                summary
                status
                codes (first:10) {
                  edges {
                    node {
                      code
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;
}

export { createDiscountMutation };
