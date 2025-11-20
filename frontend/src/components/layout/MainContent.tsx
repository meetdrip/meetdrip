import { ReactNode } from 'react';

interface MainContentProps {
  children: ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <div className="p-4 lg:p-8 max-w-7xl mx-auto w-full">
      {children}
    </div>
  );
}

