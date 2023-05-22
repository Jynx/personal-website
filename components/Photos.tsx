import clsx from 'clsx';
import Image from 'next/image';

export default function Photos(): JSX.Element {
  const rotations: Array<string> = [
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    'rotate-2',
    '-rotate-2',
  ];

  const imageNames = [
    'mexico.jpg',
    'sasha.jpeg',
    'image-3.jpg',
    'image-4.jpg',
    'image-5.jpg',
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {imageNames.map((imageName, imageIndex) => (
          <div
            key={imageName}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={'/' + imageName}
              width={640}
              height={640}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
