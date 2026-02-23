import { useCallback, useState, type ChangeEvent } from "react";

import { InputText } from "./input-text";
import { debounce } from "../helpers/utils";

import SearchIcon from "../assets/icons/search.svg?react";

export function PhotosSearch() {
  const [inputValue, setInputValue] = useState("");

  const debuncedSetValue = useCallback(
    debounce((value: string) => console.log(value), 200),
    [],
  );

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setInputValue(value);
    debuncedSetValue(value);
  }

  return (
    <InputText
      icon={SearchIcon}
      placeholder="Buscar fotos"
      className="flex-1"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
}
