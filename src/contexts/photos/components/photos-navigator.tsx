import { useNavigate } from "react-router";
import type { ComponentProps } from "react";

import Button from "../../../components/button";
import Skeleton from "../../../components/skeleton";
import ButtonIcon from "../../../components/button-icon";

import ArrowLeft from "../../../assets/icons/chevron-left.svg?react";
import ArrowRight from "../../../assets/icons/chevron-right.svg?react";

interface PhotosNavigatorProps extends ComponentProps<"div"> {
  previousPhotoId?: string;
  nextPhotoId?: string;
  loading?: boolean;
}

export function PhotosNavigator({
  previousPhotoId,
  nextPhotoId,
  loading,
  ...props
}: PhotosNavigatorProps) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-2" {...props}>
      {!loading ? (
        <>
          <ButtonIcon
            icon={ArrowLeft}
            variant="secondary"
            disabled={!previousPhotoId}
            onClick={() => navigate(`/fotos/${previousPhotoId}`)}
          />

          <Button
            icon={ArrowRight}
            variant="secondary"
            disabled={!nextPhotoId}
            onClick={() => navigate(`/fotos/${nextPhotoId}`)}
          >
            Próxima imagem
          </Button>
        </>
      ) : (
        <>
          <Skeleton className="w-10 h-10" />
          <Skeleton className="w-20 h-10" />
        </>
      )}
    </div>
  );
}
