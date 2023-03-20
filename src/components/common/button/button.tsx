import { IRMButtonProps } from 'interfaces/common';
import { FC } from 'react';
import './styles.scss';

const RMButton: FC<IRMButtonProps> = ({
  type,
  onClick,
  children,
  className = '',
  size = 'md',
  color = 'primary',
  variant = 'contained',
  title = '',
}) => {
  const baseClasses = [variant, color, size].join(' ');

  return (
    <button
      type={type || 'button'}
      title={title}
      className={`rm_button ${baseClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RMButton;
