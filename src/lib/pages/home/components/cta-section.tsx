import { Button } from '@/components/ui/button';
import { Box, Flex, Image, Link } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';

export const CTASection = () => (
  <Box textAlign="center">
    <Link
      _hover={undefined}
      href="https://github.com/sozonome/vite-react-chakra-starter"
    >
      <Button size="sm">
        <AiFillGithub /> Open in Github
      </Button>
    </Link>
    <Flex marginY={4} justifyContent="center" gridGap={2}>
      <Link
        aria-label="Deploy to Vercel"
        target="_blank"
        rel="noopener noreferrer"
        href="https://vercel.com/import/git?s=https://github.com/sozonome/vite-react-chakra-starter"
      >
        <Image
          src="https://vercel.com/button"
          height="32px"
          alt="Vercel deploy button"
        />
      </Link>
      <Link
        aria-label="Deploy to Netlify"
        target="_blank"
        rel="noopener noreferrer"
        href="https://app.netlify.com/start/deploy?repository=https://github.com/sozonome/vite-react-chakra-starter"
      >
        <Image
          src="https://www.netlify.com/img/deploy/button.svg"
          alt="Netlify deploy button"
          height="32px"
        />
      </Link>
    </Flex>
  </Box>
);
