import { Outlet } from "react-router";
import style from "./Store.module.css";
import { useState, useEffect } from "react";
import Card from "../storePage/card/Card";

export default function Store() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

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
            const cleanData = result.data.items.slice(0, 43);
            console.log(cleanData);
            setData(cleanData);
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
          return (
            <Card
              key={item.id}
              name={item.name}
              price={item.basePrice}
              image={item.image512pxLink}
              desc={item.description}
            />
          );
        })}
        <Outlet />
      </div>
    </>
  );
}
