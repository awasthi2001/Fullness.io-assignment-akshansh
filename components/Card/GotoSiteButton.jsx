import { Button } from "@chakra-ui/react";
import { BsArrowRightCircle } from "react-icons/bs";

export const GotoSiteButton = ({ gotoSiteUrl }) => {
  return (
    <a href={gotoSiteUrl}>
      <Button colorScheme="green" size="md" width="130px" height="45px">
        Go to Site
        <BsArrowRightCircle
          style={{
            marginLeft: "3px"
          }}
        />
      </Button>
    </a>
  );
};
