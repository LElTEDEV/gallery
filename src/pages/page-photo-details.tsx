import { useParams } from "react-router";

import Text from "../components/text";

export function PagePhotoDetails() {
  const { id } = useParams() as { id: string };

  return (
    <div>
      <Text variant="heading-medium">Página detalhe da foto: {id}</Text>
    </div>
  );
}
