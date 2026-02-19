import type { ComponentProps } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import XIcon from "../assets/icons/x.svg?react";

import Card from "./card";
import Text from "./text";
import ButtonIcon from "./button-icon";
import Divider from "./divider";

export const Dialog = DialogPrimitive.Root;

export const DialogTrigger = DialogPrimitive.Trigger;

export const DialogClose = DialogPrimitive.Close;

export function DialogContent({
  className,
  ref,
  children,
  ...props
}: ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPrimitive.Portal>
      <DialogOverlay />

      <DialogPrimitive.Content
        className={`
            fixed left-[50%] top-[50%] w-full max-w-[32rem]
            z-[60] translate-x-[-50%] translate-y-[-50%]
        `}
        ref={ref}
        {...props}
      >
        <Card size="lg" variant="primary">
          {children}
        </Card>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

export function DialogOverlay({
  className,
  ref,
  ...props
}: ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className="fixed inset-0 z-50 bg-background-secondary/60 backdrop-blur-sm"
      {...props}
    ></DialogPrimitive.Overlay>
  );
}

export function DialogHeader({ children, ...props }: ComponentProps<"div">) {
  return (
    <>
      <header className="flex items-center justify-between" {...props}>
        <DialogPrimitive.Title>
          <Text variant="heading-medium" className="flex-1">
            {children}
          </Text>
        </DialogPrimitive.Title>

        <DialogClose asChild>
          <ButtonIcon icon={XIcon} variant="ghost" />
        </DialogClose>
      </header>

      <Divider className="mt-1.5 mb-5" />
    </>
  );
}

export function DialogBody({ children, ...props }: ComponentProps<"div">) {
  return <div {...props}>{children}</div>;
}

export function DialogFooter({ children, ...props }: ComponentProps<"div">) {
  return (
    <div {...props}>
      <Divider className="mt-5 mb-1.5" />

      <footer className="flex items-center justify-end gap-3">
        {children}
      </footer>
    </div>
  );
}
