import Container from "../components/container";
import { AlbumsFilter } from "../contexts/albums/components/albums-filter";
import { PhotosList } from "../contexts/photos/components/photos-list";

export function PageHome() {
  return (
    <Container>
      <AlbumsFilter
        albums={[
          { id: "123", title: "Viagens" },
          { id: "123", title: "Comidas" },
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
