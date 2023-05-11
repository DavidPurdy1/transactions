import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  createUser: publicProcedure // create a user after signup with the given input being pulled out of clerk
    .input(z.object({ name: z.string(), image: z.string().optional(), username: z.string(), email: z.string() }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.user.create({
        data: {
          name: input.name,
        },
      });
    }
  ),
});
