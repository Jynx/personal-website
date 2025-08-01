import Head from 'next/head';
import Image, { StaticImageData } from 'next/image';
import Card from '@/components/Card';
import SimplePageLayout from '@/components/layout/SimplePageLayout';
import { LinkIcon } from '@/components/icons/Icons';
import clsx from 'clsx';

import omg from '../../public/omg.png';
import cabin from '../../public/cabin.png';
import train from '../../public/train.png';
import unreal from '../../public/Ureallogo.png';
import sunder from '../../public/sunder.svg'
import wild from '../../public/wild.webp'

interface Project {
  name: string;
  description: string;
  link: {
    href: string;
    label: string;
  };
  logo: StaticImageData;
}
const projects: Array<Project> = [
  {
    name: 'Wildgate',
    description: 'Collaborated on Dreamhaven SDK development for an Epic PvPvE spaceshooter',
    link: {
      href: 'https://playwildgate.com/en-us',
      label: 'Website',
    },
    logo: wild,
  },
  {
    name: 'Sunderfolk',
    description: 'Collaborated on Dreamhaven SDK development for an shared turn-based tactical RGP',
    link: {
      href: 'https://www.dreamhaven.com/games/sunderfolk',
      label: 'Website',
    },
    logo: sunder,
  },
  {
    name: 'One More Game Account Site',
    description: 'Minimal Account website we used for alpha testing at OMG',
    link: {
      href: 'https://www.linkedin.com/in/steven-volocyk/overlay/1635527339051/single-media-viewer/?profileId=ACoAABCLT9wBOGqGT_D6Gz7ukNnCiw6svt-NN7c',
      label: 'Website',
    },
    logo: omg,
  },
  {
    name: 'GR Town',
    description: 'College Project - A 3D winter town built using legacy OpenGL.',
    link: {
      href: 'https://github.com/Jynx/UW_Madison_ComputerGraphics_GrTown',
      label: 'github.com',
    },
    logo: cabin,
  },
  {
    name: 'GR Train',
    description: 'College Project - Take a ride on the 3D train! (Also legacy open GL)',
    link: {
      href: 'https://github.com/Jynx/UW_Madison_ComputerGraphics_Train_Project',
      label: 'github.com',
    },
    logo: train,
  },
  {
    name: 'Microsoft Playfab PaaS Unreal and Web Service integrations',
    description: "Basic Unreal auth flows with Playfab using blueprints and UI widgets, and a basic web service levarging the Playfab SDK to expose player profile information",
    link: {
      href: 'https://youtu.be/7rwzKJN9qw0',
      label: 'youtube.com',
    },
    logo: unreal,
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Steve Volocyk</title>
        <meta name="description" content="Things I’ve made" />
      </Head>
      <SimplePageLayout
        title="Where the tinkering happens."
        intro="I’ve worked on many different small and large-scale projects over the years but these are some of the most memorable, hilarious (open GL college projects), or educational to date."
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
                  className={clsx("h-15 w-15", project.name == "Wildgate" ? "bg-gray-800" : "")}
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link target="_blank" href={project.link.href}>{project.name}</Card.Link>
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
