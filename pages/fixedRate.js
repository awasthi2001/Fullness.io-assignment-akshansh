import { Box, Center, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Card } from "../components/Card/Card";
import { Pagination } from "../components/Pagination";
import Styles from "../styles/common.module.css";
const FixedRate = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalpage, settotalpage] = useState(0);
  let fetchApi = async () => {
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
    fetchApi();
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
            firstHomeBuyers,
            gotoSiteUrl
          }) => {
            return firstHomeBuyers ? (
              <Card
                key={uuid}
                name={name}
                gotoSiteUrl={gotoSiteUrl}
                pros={pros}
                advertisedRate={advertisedRate}
                companyLogo={companyLogo}
                comparisonRate={comparisonRate}
              />
            ) : null;
          }
        )}
      </Box>
      <Pagination page={page} setPage={setPage} totalpage={totalpage} />
    </Box>
  );
};
export default FixedRate;
