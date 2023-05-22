import clsx from 'clsx';

const OuterContainer = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element => {
  return (
    <div className={clsx('sm:px-8', className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  );
};

const InnerContainer = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  );
};

export const Container = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <OuterContainer className={className} {...props}>
      <InnerContainer className={className}>{children}</InnerContainer>
    </OuterContainer>
  );
};

Container.Outer = OuterContainer;
Container.Inner = InnerContainer;
