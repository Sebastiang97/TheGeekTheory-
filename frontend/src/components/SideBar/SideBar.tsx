import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { ADMIN_MENU } from "./sideBar.constants"
import { Link } from "react-router-dom"
import { useState } from "react";

export const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <div className="adminTitle">
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="bg-orange-600">Open</SheetTrigger>
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
                                  onClick={() => setOpen(!open)}
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
