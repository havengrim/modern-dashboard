import Grid from '@mui/material/Grid2';
import { Card } from "@/components/ui/card";
import { IoBagHandle } from "react-icons/io5";
import BarChart from '@/components/BarChart';
import { SiMoneygram } from "react-icons/si";
import { FaFile } from "react-icons/fa6";
import BarChartGrowth from '@/components/BarChartGrowth';

const MainDashboard = () => {
  return (
    <section>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 9 }} className="p-6">
          <div><h1 className="text-xl font-bold text-gray-800 dark:text-foreground">Dashboard</h1></div>
          <div className='grid grid-cols-1 sm:grid-cols-3 py-5 gap-5'>
            <div className='flex flex-col gap-4'>
              <Card className='flex items-center p-6 justify-between'>
                <div className='flex gap-4 items-center'>
                  <IoBagHandle className='h-10 sm:w-6 xl:w-8 w-6 md:w-6 text-blue-500' />
                  <span className='text-base md:text-base  xl:text-xl sm:text-base font-medium'>Projects</span>
                </div>
                <span className='text-base md:text-base  xl:text-xl sm:text-base font-semibold'>932</span>
              </Card>
              <Card className='flex items-center p-6 justify-between'>
                <div className='flex gap-4 items-center'>
                  <SiMoneygram className='h-10 sm:w-6 w-6 xl:w-8   md:w-6 text-orange-500' />
                  <span className='text-base md:text-base   xl:text-xl sm:text-base font-medium'>Investment</span>
                </div>
                <span className='text-base  md:text-base  xl:text-xl sm:text-base font-semibold'>932</span>
              </Card>
            </div>
            <div>
              <div className='flex flex-col gap-4'>
                <Card className='flex items-center p-6 justify-between'>
                  <div className='flex gap-4 items-center'>
                    <FaFile className='h-10 sm:w-4 w-4 xl:w-6  md:w-4 text-yellow-500' />
                    <span className='text-base md:text-base  xl:text-xl  sm:text-base font-medium'>Files</span>
                  </div>
                  <span className='text-base md:text-base  xl:text-xl   sm:text-base font-semibold'>932</span>
                </Card>
                <Card className='flex items-center p-6 justify-between'>
                  <div className='flex gap-4 items-center'>
                    <IoBagHandle className='h-10 sm:w-6 w-6 xl:w-8 md:w-6 text-cyan-500' />
                    <span className='text-base sm:text-base xl:text-xl md:text-base font-medium'>Assets</span>
                  </div>
                  <span className='text-base sm:text-base md:text-base  xl:text-xl font-semibold'>932</span>
                </Card>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center h-full">
                <div className="w-full max-w-2xl bg-card border h-full rounded-lg shadow p-4">
                  <BarChart />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center ">
                <div className="w-full bg-card border h-full rounded-lg shadow p-4">
                  <BarChartGrowth />
                </div>
              </div>
        </Grid>

        <Grid size={{ xs: 12, md: 3 }} className="bg-gray-50 h-screen">
          
        </Grid>
      </Grid>
    </section>
  );
};

export default MainDashboard;
