import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export default function Avatar({
  large = false,
  className,
  ...props
}: {
  large?: boolean;
  className?: string;
}): JSX.Element {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, 'pointer-events-auto')}
      {...props}
    >
      <Image
        src={'/personal-avatar.jpg'}
        width={large ? 64 : 36}
        height={large ? 64 : 36}
        alt=""
        sizes={large ? '4rem' : '2.25rem'}
        className={clsx(
          'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800',
          large ? 'h-16 w-16' : 'h-9 w-9'
        )}
        priority
      />
    </Link>
  );
}

export const AvatarContainer = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <div
      className={clsx(
        className,
        'h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10'
      )}
      {...props}
    />
  );
};
