import * as React from "react";

import { cn } from "@/lib/utils";

function Titleh1({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      data-slot="title"
      className={cn(
        " text-white  border border-gray-100/20 bg-white/10 p-4 rounded-md text-center ",
        className
      )}
      {...props}
    />
  );
}

function Titleh2({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      data-slot="sub-title"
      className={cn(
        " font-bold text-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 bg-white/10 px-6 py-3 rounded-xl shadow-lg mt-4 text-center ",
        className
      )}
      {...props}
    />
  );
}

function Titleh3({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="small-title"
      className={cn(
        " font-bold text-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 bg-white/10 px-6 py-3 rounded-xl shadow-lg mt-4 text-center ",
        className
      )}
      {...props}
    />
  );
}

function P({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="small-title"
      className={cn(
        "border border-gray-100/20 bg-white/10 p-4 rounded-md mt-4 text-center ",
        className
      )}
      {...props}
    />
  );
}
function Span({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="small-title"
      className={cn(
        " font-bold text-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 bg-white/10 px-6 py-3 rounded-xl shadow-lg mt-4 text-center ",
        className
      )}
      {...props}
    />
  );
}
function A({ href, ...props }: React.ComponentProps<"a">) {
  return (
    <a
      href={href}
      data-slot="small-title"
      className={cn(
        " font-bold text-white  border border-gray-100/20 bg-white/10 p-2 rounded-xl shadow-lg mt-4 text-center "
      )}
      {...props}
    />
  );
}

export { A, P, Span, Titleh1, Titleh2, Titleh3 };
