import { Center, Text, Paper } from '@mantine/core';

const EmptyCard = () => {
  return (
    <Center sx={{ marginTop: 20 }}>
      <Paper shadow="xs" p="md" withBorder>
        <Text fw={700} fz="lg">
          Nenhuma transação cadastrada!
        </Text>
      </Paper>
    </Center>
  );
};

export default EmptyCard;
