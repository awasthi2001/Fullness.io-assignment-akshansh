import { Box, Center, Image, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Card } from "../components/Card/Card";
import { Pagination } from "../components/Pagination";
import Styles from "../styles/common.module.css";

const FirstBuyer = () => {
  const [data, setdata] = useState([]);
  const [page, setPage] = useState(1);
  const [iserror, setiserror] = useState(false);
  const [totalpage, settotalpage] = useState(0);
  const [loading, setloading] = useState(false);
  const toast = useToast();
  let fetchApi = async () => {
    try {
      setloading(true);
      let res = await fetch(`/api/app?page=${page}&pageSize=6`);
      let res2 = await res.json();
      setdata(res2.data.hits);
      settotalpage(res2.data.meta.totalCount);
      setloading(false);
    } catch (error) {
      setiserror(true);
    }
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
  if (iserror) {
    return toast({
      title: "Error",
      description: "Something went wrong",
      status: "error",
      duration: 7000,
      position: "top",
      isClosable: true
    });
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
            isFirstHomeBuyersAvailable,
            gotoSiteUrl
          }) => {
            return firstHomeBuyers || isFirstHomeBuyersAvailable ? (
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
export default FirstBuyer;
