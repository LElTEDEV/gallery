import { Link } from "react-router";
import type { ComponentProps } from "react";

import Container from "./container";
import Logo from "../assets/images/galeria-plus-full-logo.svg?react";
import Button from "./button";

interface MainHeaderProps extends ComponentProps<typeof Container> {}

export function MainHeader({ ...props }: MainHeaderProps) {
  return (
    <Container
      as="header"
      className="flex justify-between items-center gap-10 mt-9"
      {...props}
    >
      <Link to="/">
        <Logo className="h-5" />
      </Link>

      <div className="flex items-center gap-3">
        <Button>Nova foto</Button>
        <Button variant="secondary">Criar álbum</Button>
      </div>
    </Container>
  );
}
