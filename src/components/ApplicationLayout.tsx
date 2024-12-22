interface ApplicationLayoutProps {
  children: React.ReactNode;
}

export const ApplicationLayout = ({ children }: ApplicationLayoutProps) => {
  return (
    <div className="min-h-screen pt-6 sm:pt-8 md:pt-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[95%] sm:max-w-[85%] md:max-w-5xl lg:max-w-7xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
        {children}
      </div>
    </div>
  );
};
