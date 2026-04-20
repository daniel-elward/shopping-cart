import { Outlet, useOutletContext } from "react-router";
import style from "./Store.module.css";
import { useState, useEffect } from "react";
import Card from "../storePage/card/Card";

export default function Store() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const [cart, setCart] = useOutletContext();

  const apiQuery = `{
                items(types: [injectors, meds]) {
                  id
                  name
                  description
                  basePrice
                  iconLink
                  image512pxLink
                  types
              }
            }`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.tarkov.dev/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: apiQuery,
          }),
        })
          .then((response) => response.json())
          .then((result) => {
            // console.log(result.data.items);
            typeof result.data.items;

            setData(result.data.items);
            setLoading(false);
          });
      } catch (error) {
        setError(error.message);
        setLoading(false);
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <h1>Store Page</h1>
      <div className={style.container}>
        {data.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
        <Outlet context={[cart, setCart]} />
      </div>
    </>
  );
}
