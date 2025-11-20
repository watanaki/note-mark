import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export const Siderbar = ({ className, children, ...props }: ComponentProps<'aside'>) => {
  return (
    <aside className={twMerge('w-[250px] overflow-auto', className)} {...props}>
      {children}
    </aside>
  );
};

export const Content = ({ children, className, ref, ...props }: ComponentProps<'div'>) => {
  return (
    <div ref={ref} className={twMerge('flex-1 h-full overflow-auto', className)} {...props}>
      {children}
    </div>
  );
};

export const RootLayout = ({ className, children, ...props }: ComponentProps<'main'>) => {
  return (
    <main className={twMerge('flex flex-row h-screen', className)} {...props}>
      {children}
    </main>
  );
};
