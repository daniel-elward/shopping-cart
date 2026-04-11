import { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.tarkov.dev/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `{
                items(types: [injectors, meds]) {
                        id
                        name
                        description
                        basePrice
                        iconLink
                        image512pxLink
                        types
                    }
                }
            }`,
          }),
        });

        const result = await response.json();

        if (result.errors) {
          throw new Error(result.errors[0].message);
        }

        setLoading(false);
        console.log(result);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Lorem ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quas
        minus asperiores nesciunt ut nihil voluptatum vel praesentium sint iure!
        Atque ullam pariatur temporibus saepe aut! Placeat illum repellat
        consequatur.
      </p>
    </div>
  );
}

//   items(lang: en) {
//     id
//     name
//     description
//     basePrice
//     iconLink
//   }
