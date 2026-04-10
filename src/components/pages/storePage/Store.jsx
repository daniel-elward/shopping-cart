import { Outlet } from "react-router";

export default function Store() {
  return (
    <div>
      <h1>Store page</h1>
      <Outlet />
    </div>
  );
}
