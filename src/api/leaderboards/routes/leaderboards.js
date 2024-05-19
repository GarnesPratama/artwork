module.exports = {
  routes: [
    {
      method: "GET",
      path: "/leaderboards",
      handler: "leaderboards.getListLeaderBoard",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

// module.exports = {
//   routes: [
//     {
//       method: "GET",
//       path: "/leader",
//       handler: "leaderboards.getListLeaderBoard",
//       config: {
//         policies: [],
//         midlewares: [],
//       },
//     },
//   ],
// };
