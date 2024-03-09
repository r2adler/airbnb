"use server"
import { redirect } from "next/navigation"
import prisma from "../lib/db"

export async function createAirbnbHome({ userId }: { userId: string }) {
  const data = await prisma.home.findFirst({
    where: { userId: userId },
    orderBy: { createdAt: "desc" },
  })

  if (!data) {
    const data = await prisma.home.create({
      data: { userId: userId },
    })

    return redirect(`/create/${data?.id}/structure`)
  } else if (
    !data.addedCategory &&
    !data.addedDescription &&
    !data.addedLocation
  ) {
    return redirect(`/create/${data?.id}/structure`)
  } else if (data.addedCategory && !data.addedDescription) {
    return redirect(`/create/${data?.id}/description`)
  }
}
