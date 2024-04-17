import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Nutrition } from '@/models/Nutrition';

interface TableExampleProps {
    rows: Nutrition[]
}

const TableExample = ({rows}: TableExampleProps)  => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({name, calories, fat, carbs, protein}) => (
            <TableRow
              key={name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th"
                scope="row"
              >
                {name}
              </TableCell>
              <TableCell align="right">{calories}</TableCell>
              <TableCell align="right">{fat}</TableCell>
              <TableCell align="right">{carbs}</TableCell>
              <TableCell align="right">{protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableExample;