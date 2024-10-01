import Grid from '@mui/material/Grid2';
import { Card } from "@/components/ui/card";
import { IoBagHandle } from "react-icons/io5";
import BarChart from '@/components/BarChart';
import { SiMoneygram } from "react-icons/si";
import { FaFile } from "react-icons/fa6";
import BarChartGrowth from '@/components/BarChartGrowth';
import PieChartProfile from '@/components/PieChartProfile';
import { CardContent } from '@mui/material';
import LineChart from '@/components/LineChart';
import { IoIosStar } from "react-icons/io";
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import ServerStatusChart from '@/components/ServerStatusChart';
import { fakeUsers } from '@/modules/FakerData';
import ShortTimeline from '@/components/ShortTimeline';

const MainDashboard = () => {

  const StarRating = ({ rating }: { rating: number }) => {
    const totalStars = 5;
    const starsArray = Array.from({ length: totalStars }, (_, index) => {
        return index < rating ? <IoIosStar key={index} className="text-yellow-500" /> : <IoIosStar key={index} className="text-gray-300" />;
    });

    return <div className="flex">{starsArray}</div>;
};

  return (
    <section>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 12, lg: 9 }} className="p-6">
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
                <div className="w-full  bg-card border h-full rounded-xl shadow p-4">
                  <BarChart />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full bg-card border h-full rounded-xl shadow p-4">
              <BarChartGrowth />
            </div>
          </div>

          <div className='grid grid-cols-12 py-6 gap-5'>
              <div className='col-span-12 md:col-span-4'>
                <Card>
                  <CardContent>
                    <div className="h-96"> {/* Set a specific height for the Pie Chart */}
                      <PieChartProfile />
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className='col-span-12 md:col-span-8'>
                <Card>
                  <CardContent>
                    <div className="h-96"> {/* Set the same height for the Line Chart */}
                      <LineChart />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
              <div  className="flex flex-col">
                <h3 className="text-lg font-bold text-gray-800 dark:text-foreground">User Reviews</h3>
                <div className='grid sm:grid-cols-3 grid-cols-1 gap-5 mt-5'>
                  <Card>
                    <CardContent>
                      <div className='flex flex-col gap-4 justify-center'>
                        <div className='flex gap-2 items-center'>
                            <Avatar className="!h-8 !w-8" >
                              <AvatarImage src="https://github.com/shadcn.png"  />
                              <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <div>
                            <span className='text-sm text-gray-800 dark:text-foreground'>Belle Epoque</span>
                            <StarRating rating={4} />
                          </div>
                        </div>
                        <span className='text-sm text-gray-500'>
                          Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent>
                      <div className='flex flex-col gap-4 justify-center'>
                        <div className='flex gap-2 items-center'>
                            <Avatar className="!h-8 !w-8" >
                              <AvatarImage src="https://github.com/shadcn.png"  />
                              <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <div>
                            <span className='text-sm text-gray-800 dark:text-foreground'>Belle Epoque</span>
                            <StarRating rating={4} />
                          </div>
                        </div>
                        <span className='text-sm text-gray-500'>
                          Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent>
                      <div className='flex flex-col gap-4 justify-center'>
                        <div className='flex gap-2 items-center'>
                            <Avatar className="!h-8 !w-8" >
                              <AvatarImage src="https://github.com/shadcn.png"  />
                              <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <div>
                            <span className='text-sm text-gray-800 dark:text-foreground'>Belle Epoque</span>
                            <StarRating rating={5} />
                          </div>
                        </div>
                        <span className='text-sm text-gray-500'>
                          Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
        </Grid>


        <Grid size={{ xs: 12, md: 12, lg: 3  }} className="p-6 bg-gray-50 dark:bg-background dark:sm:bg-gray-900">
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-foreground">Server Status</h3>
              <div className="min-h-[50vh] lg:min-h-[40vh] sm:min-h-[50vh] xl:min-h-[35vh] md:min-h-[50vh]">
                {/* Use min-h instead of h */}
                <ServerStatusChart />
              </div>
            </div>

            <div className="flex flex-col mt-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-gray-800 dark:text-foreground">Contacts</h3>
                <span className="text-xs text-blue-500 cursor-pointer">View all</span>
              </div>

              <div className="grid sm:grid-cols-4 grid-cols-2 gap-2 mt-4 gap-x-4 gap-y-4">
                {fakeUsers.map((user, index) => (
                  <div key={index} className="flex flex-col gap-2 items-center cursor-pointer">
                    <Avatar className="!h-8 !w-8 border-2 border-gray-300">
                      <AvatarImage src={user.avatar} alt={`${user.initials}'s avatar`} />
                      <AvatarFallback>{user.initials}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-semibold text-gray-500">{user.firstName}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className='flex flex-col mt-6'>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-gray-800 dark:text-foreground">Messages</h3>
                <span className="text-xs text-blue-500 cursor-pointer">View all</span>
              </div>
              <div className='flex flex-col gap-4 mt-6'>
              {fakeUsers.map((user, index) => (
                <div className='flex gap-3' key={index}>
                    <Avatar className="!h-8 !w-8 border-2 border-gray-300">
                      <AvatarImage src={user.avatar} alt={`${user.initials}'s avatar`} />
                      <AvatarFallback>{user.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                       <span className='text-sm font-semibold text-gray-500'>{user.fullName}</span>
                       <p className="text-xs text-gray-400 truncate w-full  sm:max-w-[18rem] lg:max-w-[10rem] max-w-[13rem]">{user.description}</p>
                    </div>
                </div>
              ))}
              </div>
            </div>

            <div className='flex flex-col mt-6'>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-gray-800 dark:text-foreground">Recent Actvity</h3>
              </div>
              <div className='flex justify-start items-start'>
                <ShortTimeline />
              </div>
            </div>
          </div>
        </Grid>

      </Grid>
    </section>
  );
};

export default MainDashboard;
