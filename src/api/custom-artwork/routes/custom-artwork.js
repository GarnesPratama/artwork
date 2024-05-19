module.exports = {
  routes: [
    {
      method: "GET",
      path: "/custom-artwork",
      handler: "custom-artwork.exampleAction",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
