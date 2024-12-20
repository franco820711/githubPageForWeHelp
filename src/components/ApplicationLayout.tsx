interface ApplicationLayoutProps {
  children: React.ReactNode;
}

export const ApplicationLayout = ({ children }: ApplicationLayoutProps) => {
  return (
    <div className="min-h-screen py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[95%] sm:max-w-[85%] md:max-w-2xl lg:max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
        {children}
      </div>
    </div>
  );
};
