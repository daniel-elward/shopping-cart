import { Outlet } from "react-router";
import style from "./Home.module.css";

export default function Home() {
  return (
    <>
      {/* <div className={style.hero}>
        <img src="src/assets/bear-wallpaper-2000.jpg" alt="" />
      </div> */}
      <div className={style.container}>
        <h1>ESCAPE FROM TARKOV</h1>
        <h2>PMC ONLINE STORE</h2>
        <h3>Welcome, Comrade.</h3>
        <p>
          In Tarkov, survival doesn’t end when the raid does. Every PMC knows
          the real fight often continues in the market—finding the right gear,
          securing key items, and staying one step ahead of everyone else can
          make all the difference.
        </p>
        <p>
          This platform was built for that exact purpose. A faster, cleaner way
          to browse and trade the Flea Market without getting lost in the noise.
          Whether you’re after weapons, armor, or valuable barter items,
          everything is organized to get you what you need quickly so you can
          get back into the fight.
        </p>
        <p>
          No wasted time. No clutter. Just direct access to the gear that keeps
          you alive out there.
        </p>

        <p>
          Stay sharp, stay supplied and remember—fortune favors the prepared.
        </p>

        <Outlet />
      </div>
    </>
  );
}
