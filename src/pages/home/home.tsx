import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import RMBanner from 'components/common/banner/banner';
import RMButton from 'components/common/button/button';
import useRMCharacters from '../../hooks/useRMCharacters/useRMCharacters';

import RMCharactersWrapper from 'components/common/charactersWrapper/charactersWrapper';
import RMCharactersHeader from 'components/common/charactersWrapper/charactersHeader/charactersHeader';
import RMCharactersFooter from 'components/common/charactersWrapper/charactersFooter/charactersFooter';

import ROUTES from 'routes/routes';
import RMCharactersContent from 'components/common/charactersWrapper/charactersContent/charactersContent';
import RMCharacterCard from 'components/common/characterCard/characterCard';
import logo from '../../assets/rick-morty-logo.svg';
import './styles.scss';

const HomePage = () => {
  const navigate = useNavigate();
  const { data: rmCharacters, error, loading } = useRMCharacters();
  const ref = useRef<HTMLElement>(null);
  const handleScrollClick = () => {
    if (ref) {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handlePlayClick = () => {
    navigate(`${ROUTES.PLAY}`);
  };
  return (
    <>
      <RMBanner imgSource='/images/rm-main-bg.png'>
        <section className='banner_container'>
          <img src={logo} className='banner-logo' alt='logo' />
          <h1 className='section_banner__h1'>Juego de memoria</h1>
          <RMButton
            className='scroll_button'
            variant='none'
            size='none'
            onClick={handleScrollClick}
          >
            <strong className='scroll_text'> Scroll</strong>
            <span />
          </RMButton>
        </section>
      </RMBanner>
      {loading || error !== undefined ? (
        <p>Something went wrong</p>
      ) : (
        <section className='characters_section' ref={ref}>
          <RMCharactersWrapper characters={rmCharacters}>
            <RMCharactersHeader>
              <p className='card_title'>Personajes</p>
            </RMCharactersHeader>
            <RMCharactersContent>
              {rmCharacters.map(({ name, image, species, status, id }) => (
                <>
                  <RMCharacterCard
                    id={id}
                    className='single_character'
                    image={image}
                    name={name}
                    species={species}
                    status={status}
                  />
                  <RMCharacterCard
                    id={id}
                    className='single_character'
                    image={image}
                    name={name}
                    species={species}
                    status={status}
                  />
                </>
              ))}
            </RMCharactersContent>
            <RMCharactersFooter>
              <RMButton
                onClick={handlePlayClick}
                className='play_button'
                variant='outlined'
                color='primary'
              >
                <p>JUGAR</p>
              </RMButton>
            </RMCharactersFooter>
          </RMCharactersWrapper>
        </section>
      )}
    </>
  );
};

export default HomePage;
