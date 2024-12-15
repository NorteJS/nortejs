"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "../lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Workshops",
    href: "#workshops",
    description: "Aprenda com especialistas em workshops práticos e interativos.",
  },
  {
    title: "Palestras",
    href: "#talks",
    description: "Assista a palestras inspiradoras de líderes da indústria.",
  },
  {
    title: "Networking",
    href: "#networking",
    description: "Conecte-se com outros profissionais e expanda sua rede.",
  },
  {
    title: "Hackathon",
    href: "#hackathon",
    description: "Participe de desafios de programação e mostre suas habilidades.",
  },
]


export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-black text-white hover:bg-gray-800 hover:text-yellow-400">Eventos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-black">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-black text-white hover:bg-gray-800 hover:text-yellow-400">Sobre</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-black">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-yellow-400/50 to-yellow-400 p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium text-black">
                      NorteJS
                    </div>
                    <p className="text-sm leading-tight text-black">
                      Expandindo o horizonte do desenvolvimento web no Norte do Brasil.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="#mission" title="Nossa Missão">
                Promover o desenvolvimento web no Norte do Brasil.
              </ListItem>
              <ListItem href="#team" title="Equipe">
                Conheça os organizadores por trás do NorteJS.
              </ListItem>
              <ListItem href="#history" title="História">
                A jornada do NorteJS desde sua fundação.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="#sponsors" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-black text-white hover:bg-gray-800 hover:text-yellow-400")}>
              Patrocinadores
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#contact" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-black text-white hover:bg-gray-800 hover:text-yellow-400")}>
              Contato
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-yellow-400 focus:bg-gray-800 focus:text-yellow-400",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-white">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

