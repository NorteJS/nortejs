// "use client";
// import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
// import { cn } from "@/lib/utils";
// import Link from "next/link";
// import Image from "next/image";

// export function NavbarDemo() {
//   return (
//     <div className="relative w-full flex items-center justify-center">
//       <Navbar className="top-2" />
//       <p className="text-black dark:text-white">
//         The Navbar will show on top of the page
//       </p>
//     </div>
//   );
// }
// function Navbar({ className }: { className?: string }) {
//   const [active, setActive] = useState<string | null>(null);

//   return (
//     <div
//       className={cn(
//         "fixed top-4 inset-x-0 mx-auto z-50 flex justify-between items-center max-w-4xl px-4 sm:px-6 lg:px-8",
//         className
//       )}
//     >
//       {/* Logo Responsivo */}
//       <Image
//         src="/logo.svg"
//         className="rounded-md hidden sm:block"
//         alt="Logo"
//         width={100}
//         height={20}
//         priority
//       />
//       {/* Botão para abrir menu em dispositivos menores */}
//       <button
//         className="sm:hidden flex items-center text-black dark:text-white"
//         onClick={() => setActive(active === "menu" ? null : "menu")}
//       >
//         <span className="sr-only">Abrir menu</span>
//         ☰
//       </button>
//       {/* Menu Responsivo */}
//       <Menu setActive={setActive}>
//         <MenuItem setActive={setActive} active={active} item="Sobre">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/web-dev">Contato</HoveredLink>
//             <HoveredLink href="/interface-design">Parceiros</HoveredLink>
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Eventos">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/hobby">Hobby</HoveredLink>
//             <HoveredLink href="/individual">Individual</HoveredLink>
//             <HoveredLink href="/team">Team</HoveredLink>
//             <HoveredLink href="/enterprise">Enterprise</HoveredLink>
//           </div>
//         </MenuItem>
//       </Menu>
//     </div>
//   );
// }
