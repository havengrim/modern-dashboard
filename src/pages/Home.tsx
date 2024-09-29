import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const Home = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow ml-20"> {/* Adjusting for Sidebar width */}
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
