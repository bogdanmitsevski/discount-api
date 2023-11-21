function requestStructureShopify(args) {
  const requestOptionsShopify = {
    method: "post",
    headers: {
      "Content-Type": "application/graphql",
      "X-Shopify-Access-Token": process.env.accessToken,
    },
    body: args,
  };
  return requestOptionsShopify;
}

export default requestStructureShopify;
