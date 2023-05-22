import Image from 'next/image';
import { ArrowDownIcon, BriefcaseIcon } from '@/components/Icons';
import Button from '@/components/Button';

interface Resume {
  company: string;
  title: string;
  logo: any;
  start: string;
  end: string;
}

export default function WorkHistory() {
  let resume: Array<Resume> = [
    {
      company: 'One More Game',
      title: 'Sr Web Services and Platform Engineer',
      logo: '/omg.png',
      start: '2021',
      end: 'April 2023',
    },
    {
      company: 'Inspire 11',
      title: 'Solutions Architect & Sr Software Engineer',
      logo: '/i11.png',
      start: '2019',
      end: '2021',
    },
    {
      company: 'Perficient',
      title: 'Sr. Technical Consultant & Technical Consultant',
      logo: '/perf.png',
      start: '2016',
      end: '2019',
    },
    {
      company: 'SAP Fieldglass',
      title: 'Java Developer',
      logo: '/sap.png',
      start: '2014',
      end: '2016',
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
              <Image src={role.logo} alt="" className="h-7 w-7" width={64} height={64} unoptimized />
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
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  );
}
