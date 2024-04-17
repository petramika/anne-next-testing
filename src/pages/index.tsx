import Image from 'next/image';
import '@/app/globals.css';
import { Box, Link } from '@mui/material';
import NextLink from 'next/link';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Box className="flex flex-col justify-between">
        <Box className="flex justify-center">
          <Image
            src="/pear.svg"
            alt="Crisp Pear"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </Box>
        <Box component="section"
          sx={{ p: 2, border: '1px dashed grey' }}
        >
          <Link href="/table"
            component={NextLink}
            variant="body2"
          >
            Table
          </Link>
        </Box>
        <Box component="section"
          sx={{ p: 2, border: '1px dashed grey' }}
        >
          <Link href="/tableTanStack"
            component={NextLink}
            variant="body2"
          >
            Table TanStack
          </Link>
        </Box>
      </Box>

      <Box className="py-3">
        Test Rendering!
        <Box className="flex justify-center">{[1, 2, 3].reduce((partialSum, a) => partialSum + a, 0)}</Box>
      </Box>
      
    </main>
  );
};

export default Home;