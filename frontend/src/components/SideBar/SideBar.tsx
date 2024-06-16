import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
  } from "@/components/ui/sheet"
import { ADMIN_MENU } from "./sideBar.constants"
import { Link } from "react-router-dom"
import { useSideBarStore } from "@/libs/store/zustand/useSideBar";

export const SideBar = () => {
  const isOpen = useSideBarStore(state => state.isOpen)
  const toggle = useSideBarStore(state => state.toggle)

  return (
    <div className="container">
      <div className="adminTitle">
        <Sheet open={isOpen} onOpenChange={toggle}>
          <SheetContent className="bg-black" side="left">
            <SheetHeader >
              <SheetTitle className="text-white">Admin Menu</SheetTitle>
            </SheetHeader>
            <div className="text-white">
              <ul>
                  {
                      ADMIN_MENU.map((el, i)=>(
                          <li key={i}>
                              <Link 
                                onClick={toggle}
                                to={el.redirect}>
                                {el.label}
                              </Link>
                          </li>
                      ))
                  }
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
