import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const searchGameRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchGameRef.current) onSearch(searchGameRef.current.value);
      }}
      className="searchInputForm"
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={searchGameRef}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
