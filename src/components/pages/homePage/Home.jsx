import { Outlet } from "react-router";
import style from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div className={style.cardWrapper}>
        <div className={style.card}>
          <img src="src/assets/pmc.jpg" alt="PMC operator" />
        </div>

        <div className={style.card}>
          <img src="src/assets/knight.jpg" alt="EFT boss: Knight" />
        </div>

        <div className={style.card}>
          <img src="src/assets/killa.jpg" alt="EFT boss: Killa" />
        </div>
      </div>

      <div className={style.container}>
        <h1>ESCAPE FROM TARKOV</h1>
        <h2>PMC ONLINE STORE</h2>
        <h3>Welcome, Comrade.</h3>
        <p>
          In the chaos of Tarkov, survival isn’t about firepower—it’s about
          endurance. This is the domain of Therapist, where every item serves
          one purpose, keeping you alive!
        </p>

        <p>
          Clean kits, reliable injectors and tools to patch wounds when seconds
          matter. No noise, no nonsense—just what works.
        </p>

        <p>
          Take what you need, prepare wisely, and make sure you’re still
          breathing when it’s over.
        </p>

        <p>
          Stay sharp, stay supplied and remember—fortune favors the prepared.
        </p>

        <Outlet />
      </div>
    </>
  );
}
