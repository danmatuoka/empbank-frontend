import { Card, Container, Group, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useTransactionContext } from '../../contexts/transactionContext';

export interface ITransactionProps {
  title: string;
  value: string;
  category: string;
  type: string;
  created_at: string;
}

const CardTransaction = ({
  title,
  category,
  value,
  created_at,
  type,
}: ITransactionProps) => {
  const { formatData, formatValue } = useTransactionContext();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Container size="lg" sx={{ marginTop: 20 }}>
      <Card
        withBorder
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Group>
          <div
            style={
              type === 'entrada'
                ? {
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    backgroundColor: 'green',
                  }
                : {
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    backgroundColor: 'red',
                  }
            }
          ></div>
          <Text>{title}</Text>
        </Group>
        <Group
          position="apart"
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'flex-end',
            width: '55%',
          }}
        >
          <Text sx={type == 'entrada' ? { color: 'green' } : { color: 'red' }}>
            {type == 'entrada'
              ? `${formatValue(value)}`
              : `- ${formatValue(value)}`}
          </Text>
          <Text>{category}</Text>
          <Text>{formatData(created_at)}</Text>
        </Group>
      </Card>
    </Container>
  );
};

export default CardTransaction;
