import { Box } from "@chakra-ui/react";
import ActiveLink from "./ActiveLink.js";
import Styles from "./Navbar.module.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <Box className={Styles.NavContainer}>
        <Box fontWeight="bold" fontSize="18px" color="#575757">
          <Link href="/">Top Home Loan Products</Link>
        </Box>
        <Box className={Styles.Navchild2}>
          <Box>
            <ActiveLink href="/" children="ALL"></ActiveLink>
          </Box>
          <Box>
            <ActiveLink href="/refinance" children="REFINANCE"></ActiveLink>
          </Box>
          <Box>
            <ActiveLink href="/fixedRate" children="FIXED RATE"></ActiveLink>
          </Box>
          <Box>
            <ActiveLink
              href="/firstBuyer"
              children="FIRST HOME BUYER"
            ></ActiveLink>
          </Box>
          <Box>
            <ActiveLink href="/nvestor" children="NVESTOR"></ActiveLink>
          </Box>
          <Box>
            <ActiveLink
              href="/nextBuyer"
              children="NEXT HOME BUYER"
            ></ActiveLink>
          </Box>
        </Box>
      </Box>
      {/* <Divider /> */}
    </>
  );
};

export { Navbar };
