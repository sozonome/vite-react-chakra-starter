import { Button } from '@/components/ui/button';
import { Box, Flex, Image, Link } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';

export const CTASection = () => (
  <Box textAlign="center">
    <Flex marginY={4} justifyContent="center" gridGap={2}>
      <Link
        _hover={undefined}
        href="https://github.com/new?template_name=vite-react-chakra-starter&template_owner=sozonome"
      >
        <Button size="sm">Use This Template</Button>
      </Link>
      <Link
        _hover={undefined}
        href="https://github.com/sozonome/vite-react-chakra-starter"
      >
        <Button size="sm" variant="outline">
          <AiFillGithub /> Open in Github
        </Button>
      </Link>
    </Flex>
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
