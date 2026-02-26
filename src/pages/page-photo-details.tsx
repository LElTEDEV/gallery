import { useParams } from "react-router";

import Text from "../components/text";
import Skeleton from "../components/skeleton";
import Container from "../components/container";
import { PhotosNavigator } from "../contexts/photos/components/photos-navigator";
import { ImageFilePreview } from "../components/image-file-preview";
import Button from "../components/button";
import { AlbumsListSelectable } from "../contexts/albums/components/albums-list-selectable";

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
          <Text as="h2" variant="heading-large">
            {photo.title}
          </Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}

        <PhotosNavigator loading={isLoadingPhoto} />
      </header>

      <div className="grid grid-cols-[21rem_1fr] gap-24">
        <div className="space-y-3">
          {!isLoadingPhoto ? (
            <ImageFilePreview
              src={`/images/${photo?.imageId}`}
              title={photo?.title}
              imageClassName="h-[21rem]"
            />
          ) : (
            <Skeleton className="h-[21rem]" />
          )}

          {!isLoadingPhoto ? (
            <Button variant="destructive">Excluir</Button>
          ) : (
            <Skeleton className="w-20 h-10" />
          )}
        </div>

        <div className="py-3">
          <Text as="h3" variant="heading-medium" className="mb-7">
            Álbuns
          </Text>

          <AlbumsListSelectable photo={photo} albums={photo.albums} />
        </div>
      </div>
    </Container>
  );
}
