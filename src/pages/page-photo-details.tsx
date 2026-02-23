import { useParams } from "react-router";

import Text from "../components/text";
import Skeleton from "../components/skeleton";
import Container from "../components/container";
import { PhotosNavigator } from "../contexts/photos/components/photos-navigator";

export function PagePhotoDetails() {
  const { id } = useParams() as { id: string };
  const isLoadingPhoto = false;
  const photo = {
    id: "123",
    title: "Olá Mundo",
    imageId: "portrait-tower.png",
    albums: [
      { id: "123", title: "Album 1" },
      { id: "321", title: "Album 2" },
      { id: "123123", title: "Album 3" },
    ],
  };

  return (
    <Container>
      <header className="flex items-center justify-between gap-8 mb-8">
        {!isLoadingPhoto ? (
          <Text variant="heading-large">{photo.title}</Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}

        <PhotosNavigator loading={isLoadingPhoto} />
      </header>
    </Container>
  );
}
