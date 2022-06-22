import { useEffect, useState } from "react";

const LastSalesPage = () => {

  const [sales, setSales] = useState();
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    fetch('https://next-datafetching-42faa-default-rtdb.firebaseio.com/sales.json')
      .then((res) => res.json())
      .then(data => {
        // the data got from firebase will not be an array bu an obj
        const transformedSales = [];

        for (const key in data) {
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }
        setSales(transformedSales);
        setLoading(false);
      });
  }, []);

  if(loading) {
    return(
      <div>
        <p>Loading....</p>
      </div>
    );
  }

  // to give some time for useEffect to execute the loading state as sales is undefined
  if(!sales) {
    return (
      <div>
        <p>No data yet!</p>
      </div>
    );
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
