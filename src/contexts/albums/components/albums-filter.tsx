import type { ComponentProps } from "react";
import Button from "../../../components/button";
import Text from "../../../components/text";
import type { Album } from "../models/album";
import Skeleton from "../../../components/skeleton";

interface AlbumsFilterProps extends ComponentProps<"div"> {
  albums: Album[];
  loading?: boolean;
}

export function AlbumsFilter({ albums, loading, ...props }: AlbumsFilterProps) {
  return (
    <div className="flex items-center gap-3.5 overflow-x-auto" {...props}>
      <Text variant="heading-small">Álbuns</Text>

      <div className="flex items-center gap-3">
        {!loading ? (
          <>
            <Button size="sm" className="cursor-pointer" variant="ghost">
              Todos
            </Button>
            {albums.map((album) => (
              <Button
                key={album.id}
                size="sm"
                className="cursor-pointer"
                variant="ghost"
              >
                {album.title}
              </Button>
            ))}
          </>
        ) : (
          Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={`album-button-${index}`} className="w-28 h-7" />
          ))
        )}
      </div>
    </div>
  );
}
