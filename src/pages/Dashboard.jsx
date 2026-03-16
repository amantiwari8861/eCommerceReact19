import useAuth from "../hook/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  return <div>Welcome {user?.name} on Dashboard</div>;
};

export default Dashboard;
