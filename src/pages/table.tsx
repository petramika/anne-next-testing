import '@/app/globals.css';
import { Box, Typography } from '@mui/material';
import TableExample from '@/components/TableExample';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Nutrition } from '@/models/Nutrition';
import ROUTES from './api/routes';

const NutritionTable = () => {
  const [rows, setRows] = useState<Nutrition[]>();

  const initData = async () => {
    const { data: { message } } = await axios.get(ROUTES.api +  ROUTES.nutrition);
    setRows(message);
  };

  useEffect(() => {
    initData();
  }, []);
  
  return (
    <main className="min-h-screen p-10">
      <Box className="py-4">
        <Typography variant="h6"
          component="h2"
        >
          Example table Nutrition Facts
        </Typography>
      </Box>
      <Box>
        {rows && <TableExample rows={rows}/>}
      </Box>
    </main>
  );
};

export default NutritionTable;