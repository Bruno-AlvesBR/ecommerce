import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { Theme } from '@mui/material';

const CardSkeleton: React.FC = (theme: Theme) => (
  <Box
    display="flex"
    flexDirection="column"
    sx={{
      background: theme?.palette?.common?.white,
      border: `0.5px solid #000`,
      '&:not(:last-of-type)': { margin: '0px 26px 0px 0px' },
    }}
    minWidth={300}
    maxWidth={300}
    minHeight={320}
    maxHeight={320}
    borderRadius="5px"
    overflow="hidden"
  >
    <Skeleton
      component={Box}
      variant="rectangular"
      m="10px 83px 15px 83px"
      width={135}
      height={135}
      borderRadius="3px"
    />
    <Skeleton
      component={Box}
      variant="rectangular"
      margin="0px auto"
      width="100%"
      maxWidth={230}
      height={20}
      borderRadius="3px"
    />
    <Skeleton
      component={Box}
      variant="rectangular"
      margin="9px auto 0px auto"
      width="100%"
      maxWidth={90}
      height={20}
      borderRadius="3px"
    />
    <Box
      display="flex"
      flexDirection="row"
      m={4}
      justifyContent="space-between"
    >
      {[{}, {}, {}]?.map((_, index) => (
        <Skeleton
          key={index}
          component={Box}
          variant="rectangular"
          style={{ border: `0.5px solid #000` }}
          width="100%"
          height={60}
          maxWidth={60}
          borderRadius="5px"
        />
      ))}
    </Box>
  </Box>
);

export default CardSkeleton;
