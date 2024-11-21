import { db } from "@/db"
import { router } from "../__internals/router"
import { privateProcedure } from "../procedures"
import { startOfMonth } from "date-fns"

export const categoryRouter = router({
  getEventCategories: privateProcedure.query(async ({ c, ctx }) => {
    const categories = await db.eventCategory.findMany({
      where: { userId: ctx.user.id },
      select: {
        id: true,
        name: true,
        emoji: true,
        color: true,
        updatedAt: true,
        createdAt: true,
      },
      orderBy: { updatedAt: "desc" },
    })

    // const categoriesWithCounts = await Promise.all(
    //   categories.map(async (category) => {
    //     const now = new Date()
    //     const firstDayOfMonth = startOfMonth(now)

    //     const [] = await Promise.all([
    //       db.event.findMany({
    //         where: {
    //           EventCategory: { id: category.id },
    //           createdAt: { gte: firstDayOfMonth },
    //         },
    //         select: { fields: true },
    //         distinct: ["fields"],
    //       }).then ((event) => {
    //         const fieldNames = new Set<string>()
    //         event.forEach((event)=>{
    //           Object.keys(event.fields as object).forEach((fieldNames)=>{
    //             fieldNames.add(fieldNames)
    //           })
    //         })
    //       })
    //     ])
    //   })
    // )

    return c.json({})
  }),
})
