"use client";

import dynamic from "next/dynamic";

const IconCloud = dynamic(() => import("@/components/ui/icon-cloud"), {
  ssr: false,
});

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function IconJsTs() {
  return (
    <div className="relative flex h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] lg:h-[360px] lg:w-[360px] items-center justify-center overflow-hidden rounded-lg">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
