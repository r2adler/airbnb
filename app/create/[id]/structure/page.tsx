import { createCategoryPage } from "@/app/actions"
import { SelectedCategory } from "@/components/SelectedCategory"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function StructureRoute({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          Which of these best describe your Home?
        </h2>
      </div>

      <form action={createCategoryPage}>
        <input type="hidden" name="homeId" value={params.id} /> {/* ?? */}
        <SelectedCategory />
        <div className="fixed w-full bottom-0 z-10 border-t bg-white h-24">
          <div className="flex justify-between items-center mx-auto px-5 lg:px-10 h-full">
            <Button variant={"secondary"} size="lg" type="button" asChild>
              <Link href="/">Cancel</Link>
            </Button>
            <Button size={"lg"}>Save</Button>
          </div>
        </div>
      </form>
    </>
  )
}
