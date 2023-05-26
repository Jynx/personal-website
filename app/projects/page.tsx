import Head from 'next/head';
import Image, { StaticImageData } from 'next/image';
import Card from '@/components/Card';
import SimplePageLayout from '@/components/layout/SimplePageLayout';
import { LinkIcon } from '@/components/icons/Icons';

import omg from '../../public/omg.png';
import cabin from '../../public/cabin.png';
import train from '../../public/train.png';
import scarfy from '../../public/scarfy.png';
import unreal from '../../public/Ureallogo.png';

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
    name: 'One More Game Account Site',
    description: 'Minimal Account website we used for alpha testing at OMG',
    link: {
      href: 'https://login.onemoregame.com',
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
    name: '2D Side Scroller',
    description: 'Side scroller based on tutorial from gamedev.tv',
    link: {
      href: 'https://github.com/Jynx/demo-sidescroller',
      label: 'github.com',
    },
    logo: scarfy,
  },
  {
    name: 'Unreal Engine Blueprint basics',
    description: 'Basic projectile exercise based on tutorial from gamedev.tv',
    link: {
      href: 'https://www.youtube.com/watch?v=yTgSTlZjYWY',
      label: 'youtube.com',
    },
    logo: unreal,
  },
  {
    name: 'Unreal Engine Basic Platformer',
    description: 'Basic platformer based on tutorial from gamedev.tv',
    link: {
      href: 'https://youtu.be/ElK1qkcuwPc',
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
