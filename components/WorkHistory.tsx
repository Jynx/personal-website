import Image, { StaticImageData } from 'next/image';
import {  BriefcaseIcon } from '@/components/Icons';

import omg from '../public/omg.png';
import i11 from '../public/i11.png';
import perf from '../public/perf.png';
import sap from '../public/sap.png';

interface Resume {
  company: string;
  title: string;
  logo: StaticImageData;
  start: string;
  end: string;
}

export default function WorkHistory() {
  let resume: Array<Resume> = [
    {
      company: 'One More Game',
      title: 'Sr Web Services and Platform Engineer',
      logo: omg,
      start: 'Aug 2021',
      end: 'Apr 2023',
    },
    {
      company: 'Inspire 11',
      title: 'Solutions Architect & Sr Software Engineer',
      logo: i11,
      start: 'Sep 2019',
      end: 'Aug 2021',
    },
    {
      company: 'Perficient',
      title: 'Sr. Technical Consultant & Technical Consultant',
      logo: perf,
      start: 'Nov 2016',
      end: 'Sep 2019',
    },
    {
      company: 'SAP Fieldglass',
      title: 'Java Developer',
      logo: sap,
      start: 'Jun 2015',
      end: 'Oct 2016',
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start} until ${role.end}`}
              >
                <time dateTime={role.start}>{role.start}</time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end}>{role.end}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  );
}
