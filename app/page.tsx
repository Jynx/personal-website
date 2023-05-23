import { Container } from '@/components/Container';
import SocialLink from '@/components/SocialLink';
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons';
import Photos from '@/components/Photos';
import WorkHistory from '@/components/WorkHistory';

export default function Home() {
  return (
    <>
      <main>
        <Container className="mt-9">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Software developer, tinkerer, gamer.
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              I’m Steve, a software engineer and gamer based in of Chicago. I
              have over nine years of experience developing software platforms
              and large-scale web applications, having both lead and been
              members of teams that delivered software built to support video
              games, player support, accounts, financial, medical, e-commerce,
              helpdesk and social networking systems.
            </p>
            <div className="mt-6 flex gap-6">
              <SocialLink
                href="https://github.com/Jynx"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
              />
              <SocialLink
                href="https://www.linkedin.com/in/steven-volocyk/"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
              />
            </div>
          </div>
        </Container>
        <Photos />
        <Container className="mt-24 md:mt-28">
          <WorkHistory />
        </Container>
      </main>
    </>
  );
}
