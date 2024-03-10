"use client"

import { categoryItems } from "@/lib/categoryItems"
import { Card, CardHeader } from "./ui/card"
import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

export const SelectedCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState<null | string>(null)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 mx-auto w-3/5 mb-32">
      <input type="hidden" name="categoryName" value={selectedCategory as string} /> {/* ?? */}
      {categoryItems.map((item) => (
        <div className="cursor-pointer" key={item.id}>
          <Card
            className={cn(selectedCategory === item.name && "border-primary")}
            onClick={() => setSelectedCategory(item.name)}
          >
            <CardHeader>
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <h3 className="font-medium">{item.title}</h3>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  )
}
