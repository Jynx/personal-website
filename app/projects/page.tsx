import Head from 'next/head';
import Image from 'next/image';
import Card from '@/components/Card';
import SimplePageLayout from '@/components/SimplePageLayout';
import { LinkIcon } from '@/components/Icons';

const projects = [
  {
    name: 'GR Town',
    description: 'A wonderful 3D winter town built using legacy OpenGL',
    link: {
      href: 'https://github.com/Jynx/UW_Madison_ComputerGraphics_GrTown',
      label: 'github.com',
    },
    logo: '/cabin.png',
  },
  {
    name: 'GR Train',
    description:
      'Take a ride on the 3D train! (Also legacy open GL)',
    link: { href: 'https://github.com/Jynx/UW_Madison_ComputerGraphics_Train_Project', label: 'github.com' },
    logo: '/train.png',
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Spencer Sharp</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimplePageLayout
        title="Where the tinkering happens."
        intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  width={64}
                  height={64}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimplePageLayout>
    </>
  );
}
