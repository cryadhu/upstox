import { Get } from "@/network/api";
import { HoldingsResponse } from "@/types/response/holdings/Holdings";
import { useEffect, useState } from "react";

const useGetHoldings = () => {
  const [data, setData] = useState<HoldingsResponse>({});
  const [loading, setLoading] = useState(true);

  async function getHoldings() {
    try {
      /* Since we don't have any endpoint, setting the endpoint to empty */
      const response = await Get<HoldingsResponse>("");
      setData(response.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getHoldings();
  }, []);

  return { data, loading };
};

export default useGetHoldings;
