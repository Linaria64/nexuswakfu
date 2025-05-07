import * as React from "react";

import { cn } from "@/lib/utils";

function Container({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        " text-card-foreground flex flex-col w-full mx-auto  rounded-xl  py-6 shadow-sm",
        className
      )}
      {...props}
    />
  );
}

export { Container };
