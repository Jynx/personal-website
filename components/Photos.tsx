import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';

import mexico from '../public/mexico.jpg';
import sasha from '../public/sasha.jpeg';
import games from '../public/games.jpg';
import keeb from '../public/keeb2.png';
import smokies from '../public/smokies.jpg';

export default function Photos(): JSX.Element {
  const rotations: Array<string> = [
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    'rotate-2',
    '-rotate-2',
  ];

  const imageNames: Array<StaticImageData> = [
    mexico,
    sasha,
    games,
    keeb,
    smokies,
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {imageNames.map((imageName, imageIndex) => (
          <div
            key={imageName.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={imageName}
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
