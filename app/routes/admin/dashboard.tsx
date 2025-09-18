import { Header, StatsCard, TripCard } from "components";
import React from "react";

const user = { name: "John Doe" };
const dashboardStats = {
  totalUsers: 12540,
  usersJoined: { currentMonth: 300, lastMonth: 400 },
  totalTrips: 3400,
  tripsCreated: { currentMonth: 340, lastMonth: 280 },
  userRole: { total: 62, currentMonth: 25, lastMonth: 15 },
};

const { totalUsers, usersJoined, totalTrips, tripsCreated, userRole } =
  dashboardStats;

const Dashboard = () => {
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"}`}
        description="Track activity, trends and popular destinations in real time"
      />
      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <StatsCard
            headerTitle="Total Users"
            total={totalUsers}
            currentMonthCount={usersJoined.currentMonth}
            lastMonthCount={usersJoined.lastMonth}
          />
          <StatsCard
            headerTitle="Total Trips"
            total={totalTrips}
            currentMonthCount={tripsCreated.currentMonth}
            lastMonthCount={tripsCreated.lastMonth}
          />
        </div>
      </section>
      <TripCard />
    </main>
  );
};

export default Dashboard;
