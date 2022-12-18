export default async function handler(req, res) {
    try {
      let { page, pageSize } = req.query;
      let res1 = await fetch(
        `https://api.ratecity.com.au/v2/home-loans?page=${page}&$pageSize=${pageSize}`,
        {
          headers: {
            "x-api-key": "MaDX2Oo31g3FLAHesYHtGa3rHe40uqkJ8TmbPJn9"
          }
        }
      );
      let res2 = await res1.json();
      res.status(200).json({ data: res2 });
    } catch (error) {
      res.status(500).send({
        message: "Something went wrong"
      });
    }
  }
  