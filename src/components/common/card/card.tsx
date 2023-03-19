import { IChildrenStyleProps } from '../../../interfaces/common';
import './styles.scss';

const RMCard = ({ children, className = '' }: IChildrenStyleProps) => {
  return <div className={`rm-card-item ${className}`}>{children}</div>;
};

export default RMCard;
