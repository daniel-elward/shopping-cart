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
          You’ve done well to find me. Out there, bullets are cheap—but staying
          alive? That costs more than most are willing to pay. I’ve seen too
          many operators bleed out over a mistake that could’ve been fixed with
          the right tools. Not you. Not if you’re smart enough to come prepared.
        </p>
        <p>
          I don’t deal in rifles or ammunition. Leave that to the amateurs and
          warmongers. My trade is survival—the kind that keeps your hands steady
          after a bad hit and your vision clear when the world starts to fade.
          Injectors to push your limits, kits to close wounds, splints to keep
          you moving, and everything you need to stop the bleeding before it’s
          too late. Clean, reliable, effective.
        </p>
        <p>
          You won’t find chaos here like the rest of Tarkov’s market. What I
          offer is simple: access to the supplies that keep you alive when
          things go wrong—and they always go wrong. Take what you need, and make
          sure you’re still breathing when the raid ends.
        </p>

        <p>
          Stay sharp, stay supplied and remember—fortune favors the prepared.
        </p>

        <Outlet />
      </div>
    </>
  );
}
