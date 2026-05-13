import style from "./Store.module.css";
import Card from "./Card";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import { api } from "../../../api/storeApi";
import { apiQuery } from "../../../api/storeApiQuery";

export default function Store() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await api(apiQuery);

        setData(data.items);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, []);

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <div className={style.title}>
        <h1>Store</h1>
      </div>
      <div className={style.container}>
        {data.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
        <Outlet />
      </div>
    </>
  );
}
