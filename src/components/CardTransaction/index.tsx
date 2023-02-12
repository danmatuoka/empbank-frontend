import { Card, Container, Group, Text } from '@mantine/core';
const CardTransaction = () => {
  return (
    <Container size="lg" sx={{ marginTop: 20 }}>
      <Card
        withBorder
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Group>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: 'green',
            }}
          ></div>
          <Text>Título</Text>
        </Group>
        <Group position="apart" sx={{ width: '55%' }}>
          <Text>Valor</Text>
          <Text>Categoria</Text>
          <Text>Data</Text>
        </Group>
      </Card>
    </Container>
  );
};

export default CardTransaction;
