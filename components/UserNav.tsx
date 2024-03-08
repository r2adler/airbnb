/* eslint-disable @next/next/no-img-element */
import {} from "@radix-ui/react-dropdown-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { MenuIcon } from "lucide-react"
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

export const UserNav = async () => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full border px-2 py-2 lg:px-4 flex items-center gap-x-3">
          <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />
          <img
            className="rounded-full h-8 w-8 hidden lg:block"
            src={
              user?.picture ??
              "https://upload.wikimedia.org/wikipedia/commons/a/af/Default_avatar_profile.jpg"
            }
            alt="avatar"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {user ? (
          <DropdownMenuItem>
            <LogoutLink>Log out</LogoutLink>
          </DropdownMenuItem>
        ) : (
          <>
            <DropdownMenuItem>
              <RegisterLink>Register</RegisterLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LoginLink>Login</LoginLink>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
