import { useEffect, useState } from "react";
import useSWR from "swr";

const LastSalesPage = () => {

  const [sales, setSales] = useState();
  // const [loading, setLoading] = useState(false);

  const { data, error } = useSWR(
    'https://next-datafetching-42faa-default-rtdb.firebaseio.com/sales.json',
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if(data) {
      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedSales);
    }
  }, [data]);

  // this is replaced by useSWR
  // useEffect(() => {
  //   setLoading(true);
  //   fetch('https://next-datafetching-42faa-default-rtdb.firebaseio.com/sales.json')
  //     .then((res) => res.json())
  //     .then(data => {
  //       // the data got from firebase will not be an array bu an obj
  //       const transformedSales = [];

  //       for (const key in data) {
  //         transformedSales.push({
  //           id: key,
  //           username: data[key].username,
  //           volume: data[key].volume,
  //         });
  //       }
  //       setSales(transformedSales);
  //       setLoading(false);
  //     });
  // }, []);

  if(error) {
    return <p>Failed to load.</p>;
  }

  if(!data || !sales) {
    return <p>Loading....</p>;
  }

  return (
    <div>
      <ul>
        {sales.map((sale) => (
          <li key={sale.id}>
            {sale.username} - ${sale.volume}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LastSalesPage;

// client side data fetching
