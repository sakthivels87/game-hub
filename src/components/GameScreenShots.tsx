import React from "react";
import useScreenShoots from "../hooks/useScreenShots";
import { Card, Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
  gameId: number;
}
const GameScreenShots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenShoots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
      {data?.results.map((img) => (
        <Image key={img.id} src={img.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
