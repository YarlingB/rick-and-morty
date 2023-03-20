import { Children, FC } from 'react';
import { IRMCharactersWrapperProps } from 'interfaces/common';
import RMCard from '../card/card';

import './styles.scss';

const RMCharactersWrapper: FC<IRMCharactersWrapperProps> = ({
  children,
  characters,
}) => {
  const [header, content, footer] = Children.toArray(children);

  return (
    <RMCard className='characters_wrapper' keyName='wrapper-card-key'>
      {header && <>{header}</>}
      {characters && (
        <section className='characters_section'>
          {content && <>{content}</>}
        </section>
      )}
      {footer && <>{footer}</>}
    </RMCard>
  );
};

export default RMCharactersWrapper;
