import { Card, Group, Box, Text } from '@mantine/core';
import {
  IconArrowUpCircle,
  IconCircleArrowDown,
  IconCurrencyDollar,
} from '@tabler/icons-react';
import { useTransactionContext } from '../../contexts/transactionContext';
import { useMediaQuery } from '@mantine/hooks';

interface CardTotalProps {
  type: string;
  value: number;
}

const CardTotal = ({ type, value }: CardTotalProps) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { formatValue } = useTransactionContext();

  const cardStyleBlack = {
    width: 325,
    minWidth: 180,
    height: 100,
    backgroundColor: '#2D303D',
    color: 'white',
  };

  const cardStyleWhite = {
    width: 325,
    height: 100,
    minWidth: 180,
  };

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
      <Text size={isMobile ? 'md' : 'xl'} weight="700" sx={{ marginTop: 10 }}>
        {formatValue(String(value))}
      </Text>
    </Card>
  );
};

export default CardTotal;
