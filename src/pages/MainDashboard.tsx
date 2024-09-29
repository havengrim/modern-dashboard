import Grid from '@mui/material/Grid2';

const MainDashboard = () => {
  return (
    <section className="p-6">
      <h1 className="text-xl font-bold text-gray-800 dark:text-foreground">Dashboard</h1>
      <Grid container spacing={2}>
        {/* Main content grid covering 10/12 of the width */}
        <Grid size={{ xs: 10, md: 9 }}>
            <div className='flex w-full justify-between'>
               <div className='grid grid-cols-2 w-full'>
                    <div>heyyyy</div>
                    <div>heyyyy</div>
                    <div>heyyyy</div>
                    <div>heyyyy</div>
               </div>
               <div>sds</div>
            </div>
        </Grid>
        {/* Sidebar grid */}
        <Grid size={{ xs: 2, md: 3 }}>
          sdsd
        </Grid>
      </Grid>
    </section>
  );
};

export default MainDashboard;
