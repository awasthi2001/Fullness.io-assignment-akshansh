import { Button, Center } from "@chakra-ui/react";

export const Pagination = ({ page, setPage, totalpage }) => {
  return (
    <Center mt="30px" mb="30px">
      <Button
        mr="10px"
        colorScheme="blue"
        disabled={page === 1}
        onClick={() => {
          setPage((page) => page - 1);
        }}
      >
        PREV
      </Button>
      <Button mr="10px">{page}</Button>
      <Button
        disabled={page >= Math.ceil(totalpage / 6)}
        onClick={() => {
          setPage((page) => page + 1);
        }}
        colorScheme="blue"
      >
        NEXT
      </Button>
    </Center>
  );
};
