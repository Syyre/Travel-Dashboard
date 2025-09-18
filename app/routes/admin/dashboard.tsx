import { Header } from "components";
import React from "react";

const user = { name: "John Doe" };

const Dashboard = () => {
  return (
    <main>
      <Header
        title={`Welcome ${user?.name ?? "Guest"}`}
        description="Track activity, trends and popular destinations in real time"
      />
    </main>
  );
};

export default Dashboard;
