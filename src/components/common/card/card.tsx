import { IChildrenStyleProps } from '../../../interfaces/common';
import './styles.scss';

const RMCard = ({ children, className = '', keyName }: IChildrenStyleProps) => {
  return (
    <div key={keyName} className={`rm-card-item ${className}`}>
      {children}
    </div>
  );
};

export default RMCard;
