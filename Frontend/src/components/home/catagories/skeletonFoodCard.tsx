import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const skeletonFoodCard = () => {
     return (
          <Box sx={{ minWidth: 290, border:"thin", borderWidth: 2 }}>
               <Skeleton variant="rounded" sx={{borderTopRightRadius:"25px", borderTopLeftRadius:"25px"}} width={290} height={180} />
               <Box sx={{ pt: 0.5}}>
                    <Skeleton sx={{mx:"90px"}} />
                    <Skeleton sx={{mx:"70px"}}/>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton height={80} sx={{mx:"40px",my:"30px", borderRadius:"25px"}}/>
               </Box>
          </Box>
     )
}

export default skeletonFoodCard
