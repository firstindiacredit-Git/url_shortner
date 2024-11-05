import Header from "@/components/header";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center   mt-10">
  <marquee >
    <span className="text-gradient">
      Copyright @ 2024 Pizeonfly | All Rights Reserved
    </span>
  </marquee>
</div>

    </div>
  );
};

export default AppLayout;
