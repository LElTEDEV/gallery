import type { Album } from "../models/album";
import type { Photo } from "../../photos/models/photo";
import Text from "../../../components/text";
import { InputCheckbox } from "../../../components/input-checkbox";
import Divider from "../../../components/divider";
import Skeleton from "../../../components/skeleton";

interface AlbumsListSelectableProps {
  loading?: boolean;
  albums: Album[];
  photo: Photo;
}

export function AlbumsListSelectable({
  albums,
  loading,
  photo,
}: AlbumsListSelectableProps) {
  return (
    <ul className="flex flex-col gap-4">
      {!loading &&
        albums.length > 0 &&
        albums.map((album, index) => (
          <li key={album.id}>
            <div className="flex items-center justify-between gap-1">
              <Text variant="paragraph-large" className="truncate">
                {album.title}
              </Text>
              <InputCheckbox />
            </div>

            {index !== albums.length - 1 && <Divider className="mt-4" />}
          </li>
        ))}

      {loading &&
        Array.from({ length: 5 }).map((_, index) => (
          <li key={`albums-list-${index}`}>
            <Skeleton className="h-[2.5rem]" />
          </li>
        ))}
    </ul>
  );
}
