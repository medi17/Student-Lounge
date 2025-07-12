import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const skeletonFoodCard = () => {
     return (
          <Box sx={{ width: 260, marginRight: 0.5, my: 5 }}>
               <Skeleton variant="rounded" sx={{borderTopRightRadius:"25px", borderTopLeftRadius:"25px"}} width={260} height={180} />
               <Box sx={{ pt: 0.5 }}>
                    <Skeleton width="40%" />
                    <Skeleton width="70%" />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
               </Box>
          </Box>
     )
}

export default skeletonFoodCard
