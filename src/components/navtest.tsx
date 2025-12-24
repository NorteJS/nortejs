import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Workshops",
    href: "/eventos/workshops",
    description: "Aprenda com especialistas em workshops práticos e interativos.",
  },
  {
    title: "Palestras",
    href: "/eventos/palestras",
    description: "Assista a palestras inspiradoras de líderes da indústria.",
  },
  {
    title: "Networking",
    href: "/eventos/networking",
    description: "Conecte-se com outros profissionais e expanda sua rede.",
  },
  {
    title: "Hackathon",
    href: "/eventos/hackathon",
    description: "Participe de desafios de programação e mostre suas habilidades.",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-black text-white  hover:text-yellow-400">
            Eventos
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 p-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-black">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger className="bg-black text-white hover:text-yellow-400 cursor-pointer">
            Sobre
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-black">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-yellow-400/50 to-yellow-400 p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                    href="/"
                  >
                    <div className="mb-2 text-lg font-medium sm:mt-4 text-black">NorteJS</div>
                    <p className="text-sm leading-tight text-black">
                      Expandindo o horizonte do desenvolvimento web no Norte do Brasil.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/sobre#mission" title="Nossa Missão">
                Promover o desenvolvimento web no Norte do Brasil.
              </ListItem>
              <ListItem href="/sobre#team" title="Equipe">
                Conheça os organizadores por trás do NorteJS.
              </ListItem>
              <ListItem href="/sobre#history" title="História">
                A jornada do NorteJS desde sua fundação.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-black text-white hover:text-yellow-400",
            )}
          >
            <Link href="/apoio">Apoiadores</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-black text-white  hover:text-yellow-400",
            )}
          >
            <Link href="/contato">Contato</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium text-white hover:text-yellow-400">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
