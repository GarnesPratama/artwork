"use strict";

/**
 * A set of functions called "actions" for `leaderboards`
 */

module.exports = {
  getListLeaderBoard: async (ctx, res, next) => {
    try {
      const data = await strapi.entityService.findMany(
        "plugin::users-permissions.user",
        // @ts-ignore
        {
          // @ts-ignore
          populate: "avatar",
          // @ts-ignore
          fields: ["id", "username", "collection_card"],
          sort: { collection_card: "desc" },
        }
      );
      return {
        status: 200,
        message: "Get All Leaderboard Data Success",
        data: data,
      };
    } catch (error) {
      ctx.badRequest("Post report controller error", error);
    }
  },
};
