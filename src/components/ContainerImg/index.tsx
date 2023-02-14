import { Image, Box } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import imagelandpage from '../../assets/Images/imagelandpage.png';

const ContainerImg = () => {
  const isMobile = useMediaQuery('(max-width: 900px)');
  return (
    <Box
      sx={{
        display: isMobile ? 'none' : 'block',
        maxWidth: 800,
        maxHeight: 800,
        padding: 10,
      }}
    >
      <Image src={imagelandpage} radius="sm"></Image>
    </Box>
  );
};

export default ContainerImg;
