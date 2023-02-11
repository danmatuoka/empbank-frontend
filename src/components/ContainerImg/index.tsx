import { Image, Box } from '@mantine/core';
import imagelandpage from '../../assets/Images/imagelandpage.png';

const ContainerImg = () => {
  return (
    <Box sx={{ maxWidth: 800, maxHeight: 800, padding: 10 }}>
      <Image src={imagelandpage} radius="sm"></Image>
    </Box>
  );
};

export default ContainerImg;
