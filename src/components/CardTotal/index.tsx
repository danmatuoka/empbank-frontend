import { Card, Group, Box, Text } from '@mantine/core';
import {
  IconArrowUpCircle,
  IconCircleArrowDown,
  IconCurrencyDollar,
} from '@tabler/icons-react';

interface CardTotalProps {
  type: string;
  value: string;
}

const cardStyleBlack = {
  width: 325,
  height: 110,
  backgroundColor: '#2D303D',
  color: 'white',
};

const cardStyleWhite = {
  width: 325,
  height: 110,
};

const CardTotal = ({ type, value }: CardTotalProps) => {
  return (
    <Card
      shadow="sm"
      p="lg"
      radius="md"
      withBorder
      sx={type === 'Total' ? cardStyleBlack : cardStyleWhite}
    >
      <Group sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Text weight="400">{type}</Text>
        {type === 'Entradas' && <IconArrowUpCircle color="green" />}
        {type === 'Saidas' && <IconCircleArrowDown color="red" />}
        {type === 'Total' && <IconCurrencyDollar color="#00B37E" />}
      </Group>
      <Text size="xl" weight="700" sx={{ marginTop: 10 }}>
        {value}
      </Text>
    </Card>
  );
};

export default CardTotal;
