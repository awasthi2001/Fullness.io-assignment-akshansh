import { CheckIcon } from "@chakra-ui/icons";
import { Box, Checkbox, Image, Link, Stack, Text } from "@chakra-ui/react";
import Styles from "./Card.module.css";
import { GotoSiteButton } from "./GotoSiteButton";

export const Card = ({
  name,
  advertisedRate,
  comparisonRate,
  companyLogo,
  pros,
  gotoSiteUrl
}) => {
  return (
    <Box className={Styles.Container}>
      <Box className={Styles.name}>
        <Text>{name}</Text>
      </Box>
      <hr className={Styles.hr} />
      <Box className={Styles.rateContainer}>
        <Box display="flex" flexDirection="column">
          <Text className={Styles.rateType}>Advertised Rate</Text>
          <Text className={Styles.Rate}>{advertisedRate}%</Text>
        </Box>
        <Box>
          <Text className={Styles.rateType}>Comparison Rate</Text>
          <Text className={Styles.Rate}>{comparisonRate}%</Text>
        </Box>
      </Box>
      <hr className={Styles.hr} />
      <Stack className={Styles.pros}>
        {pros.map((ele) => {
          return (
            <Text>
              <CheckIcon marginRight="5px" /> {ele}
            </Text>
          );
        })}
      </Stack>
      <Box className={Styles.CheckBoxContainer}>
        <Checkbox size="md">
          <span className={Styles.spanText}>Compare</span>
        </Checkbox>
        <Link _hover="none" href={gotoSiteUrl} className={Styles.LinkMore}>
          More Information
        </Link>
      </Box>
      <Box className={Styles.FaviconContainer}>
        <Image width="120px" height="40px" src={companyLogo} />
        <GotoSiteButton gotoSiteUrl={gotoSiteUrl} />
      </Box>
    </Box>
  );
};
