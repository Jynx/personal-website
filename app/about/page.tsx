import Image from 'next/image';
import { AboutSocialLink } from '@/components/SocialLink';
import { Container } from '@/components/Container';
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons';
import { MailIcon } from '@/components/Icons';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Steve Volocyk</title>
        <meta name="description" content="About Me" />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src="/personal-avatar.jpg"
                alt=""
                height="1024"
                width="1024"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Steve Volocyk. I live in Chicago, where I create experiences
              through code.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                When I was 6, I designed my first game called &quot;Space Dork
                2000&quot;, and boy was it <i>Impressive</i>. Heavily influenced
                by Space Quest and Hero Quest, staple adventure games of that
                time period, you played as a main character trapped in a world
                of aliens, monsters, ...and apparently a ridiculous amount of
                fart jokes? At least that&apos;s what the 2 page word document
                (now framed on my wall) describes. It seems crazy looking back
                on it now, but I was 6, I was proud of it, and it would have a
                profound impact on my life.
              </p>
              <p>
                When I wasn&apos;t preoccupied with designing crazy games, you
                would find me tinkering with computers (as it was the thing that
                allowed me to play games). I still vividly remember installing a
                &quot;scuzzy&quot; drive with my father on our family computer.
                He claimed it would rocket us into the peripherals stratosphere,
                and he was right. I had never seen loading screens that short.
              </p>
              <p>
                I soon realized that most of my interests were centered around
                games, computers, and building things in general. Those
                interests lead to my pursuit of a degree in Computer Science,
                which allowed me to complete the ultimate gamer trifecta of
                playing, assembling, and programming.
              </p>
              <p>
                Today, I&apos;m still a gamer, tinkerer, and builder. I have
                developed software for a wide array of industries and
                communities, including games, player support, accounts, banking,
                ecommerce, social networking, and more. While I have developed
                many different types of software, my most memorable and
                impactful work has been developing software and tools that
                helped foster and support gaming communities.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <AboutSocialLink
                href="https://github.com/Jynx"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </AboutSocialLink>
              <AboutSocialLink
                href="https://www.linkedin.com/in/steven-volocyk/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </AboutSocialLink>
              <AboutSocialLink
                href="mailto:hotdegs@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                hotdegs@gmail.com
              </AboutSocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
