import { IBannerProps } from '../../../interfaces/common';
import './styles.scss';

const RMBanner = ({ imgSource, children }: IBannerProps) => {
  return (
    <section className={'section__banner'}>
      <div className={'section_main_img'}>
        <div className={'section_image'}>
          <img src={imgSource} alt='banner' className={'section__img'} />
        </div>
      </div>
      {children && <div className={'section__banner__div'}>{children}</div>}
    </section>
  );
};

export default RMBanner;
