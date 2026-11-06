import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  wide?: boolean;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  wide = false,
  className = "",
  children,
  ...props
}) => {
  return (
    <div
      className={`mx-auto px-4 sm:px-6 lg:px-8 w-full ${
        wide ? "max-w-[1770px]" : "max-w-[1410px]"
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

