import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import MainDashboard from "./MainDashboard";

const Home = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow sm:ml-20 m-0"> {/* Adjusting for Sidebar width */}
        <Navbar />
         <MainDashboard />
      </div>
    </div>
  );
};

export default Home;
