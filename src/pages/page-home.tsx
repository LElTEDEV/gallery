import Container from "../components/container";
import { PhotosList } from "../contexts/photos/components/photos-list";
import { AlbumsFilter } from "../contexts/albums/components/albums-filter";

export function PageHome() {
  return (
    <Container>
      <AlbumsFilter
        albums={[
          { id: "123", title: "Viagem" },
          { id: "321", title: "Natureza" },
        ]}
      />

      <PhotosList
        photos={[
          {
            id: "123",
            title: "Olá Mundo",
            imageId: "portrait-tower.png",
            albums: [
              { id: "123", title: "Album 1" },
              { id: "321", title: "Album 2" },
              { id: "123123", title: "Album 3" },
            ],
          },
        ]}
      />
    </Container>
  );
}
