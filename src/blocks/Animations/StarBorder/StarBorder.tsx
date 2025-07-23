import React from 'react';

type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: React.CSSProperties['animationDuration'];
  thickness?: number;
};

const StarBorder = <T extends React.ElementType = 'button'>({
  as,
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 1,
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || 'button';

  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-[20px] ${className}`}
      {...(rest as React.ComponentPropsWithoutRef<T>)}
      style={{
        padding: `${thickness}px 0`,
        ...(rest.style as React.CSSProperties),
      }}
    >
      <div
        className="
        absolute
        w-[200%]
        h-[40%]
        opacity-70
        bottom-[-20%]
        right-[-50%]
        rounded-full
        animate-star-movement-bottom
        z-0
      "
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="
        absolute
        w-[200%]
        h-[40%]
        opacity-70
        top-[-20%]
        left-[-50%]
        rounded-full
        animate-star-movement-top
        z-0
      "
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className="relative z-1 bg-transparent p-0">{children}</div>
    </Component>
  );
};

export default StarBorder;
