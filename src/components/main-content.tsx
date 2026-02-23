import type { ComponentProps } from "react";

interface MainContentProps extends ComponentProps<"main"> {}

export function MainContent({ children, ...props }: MainContentProps) {
  return (
    <main className="mt-20 pb-20" {...props}>
      {children}
    </main>
  );
}
