import { Button, Center } from "@chakra-ui/react";
import { Box, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Styles from "../styles/common.module.css";
import { Card } from "../components/Card/Card.jsx";
import { Pagination } from "../components/Pagination";
export default function Home() {
  const [data, setdata] = useState([]);
  const [page, setPage] = useState(1);
  const [totalpage, settotalpage] = useState(0);
  const [loading, setloading] = useState(false);
  let fetchAll = async () => {
    try {
      setloading(true);
      let res = await fetch(
        `https://api.ratecity.com.au/v2/home-loans?page=${page}&pageSize=6`,
        {
          headers: {
            "x-api-key": "MaDX2Oo31g3FLAHesYHtGa3rHe40uqkJ8TmbPJn9"
          }
        }
      );
      let res2 = await res.json();
      setdata(res2.hits);
      settotalpage(res2.meta.totalCount);
      setloading(false);
    } catch (error) {}
  };
  useEffect(() => {
    fetchAll();
  }, [page]);

  if (loading) {
    return (
      <Center mt="150">
        <Image src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"></Image>
      </Center>
    );
  }
  return (
    <Box className={Styles.Container}>
      <Box className={Styles.ChildContainer}>
        {data.map(
          ({
            uuid,
            name,
            advertisedRate,
            comparisonRate,
            companyFavicon,
            pros,
            companyLogo,
            id,
            gotoSiteUrl
          }) => {
            return (
              <Card
                key={uuid + Date.now() + id}
                gotoSiteUrl={gotoSiteUrl}
                name={name}
                pros={pros}
                advertisedRate={advertisedRate}
                companyLogo={companyLogo}
                comparisonRate={comparisonRate}
              />
            );
          }
        )}
      </Box>
      <Pagination page={page} setPage={setPage} totalpage={totalpage} />
    </Box>
  );
}
