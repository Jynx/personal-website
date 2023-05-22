import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';

interface Props extends LinkProps {
  icon: React.ComponentType<React.ComponentPropsWithoutRef<'svg'>>;
}

export default function SocialLink({
  icon: Icon,
  href,
  ...props
}: Props): JSX.Element {
  return (
    <Link href={href} className="group -m-1 p-1" {...props}>
      <Icon
        className="h-6 w-6 fill-zinc-500 transition 
      group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
      />
    </Link>
  );
}

export const AboutSocialLink = ({
  className,
  href,
  children,
  icon: Icon,
}: {
  className: string;
  href: string;
  children: React.ReactNode;
  icon: React.ComponentType<React.ComponentPropsWithoutRef<'svg'>>;
}): JSX.Element => {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
};
