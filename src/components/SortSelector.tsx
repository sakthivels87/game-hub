import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";
import useGameQueryStore from "../store/gameQuery";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const onSelectSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const currentOrder = sortOrders.find((order) => order.value === sortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronRight />}>
        Order by: {currentOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortItem) => (
          <MenuItem
            key={sortItem.value}
            onClick={() => onSelectSortOrder(sortItem.value)}
          >
            {sortItem.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
