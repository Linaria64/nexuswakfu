import * as React from "react";

import { cn } from "@/lib/utils";

function Container({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn("  flex flex-col w-full mx-auto", className)}
      {...props}
    />
  );
}

export { Container };
