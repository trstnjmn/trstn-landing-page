import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import {getRandomSnesButtonColor} from "./utilities/snesRandomColors";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#skills",
    label: "Skills",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#certifications",
    label: "Certifications",
  },
];

const goToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
  });}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-card bg-card" >
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="md:py-4 py-6 px-8 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <h1 className="ml-2 font-bold md:text-4xl text-2xl text-ocean-color">
              <a
                  rel="noreferrer noopener"
                  onClick={goToTop}
              >
                TrstnJmn
              </a>
            </h1>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet
                open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="ml-4 p-0 snes-button">
                <Menu
                  className="flex md:hidden h-6 w-6"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-2xl my-8">
                    TrstnJmn
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-8 mt-4">
                  {routeList.map(({ href, label }) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={`p-1 ${getRandomSnesButtonColor()}`}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-6">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className="snes-link has-galaxy-color p-0"
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">

            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
