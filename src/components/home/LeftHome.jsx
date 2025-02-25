import { useSelector } from 'react-redux';
import Button from '../../shared/UI/button/Button';
import { LeftContainer, StyledButtonInformation } from './homeStyle';
import { scrollToElement } from '../../utils/shared/scrollUtils';

const LeftHome = () => {
  const { languageStore } = useSelector((state) => state.umra);
  const scrollToPriceSection = () => scrollToElement('priceSection');
  const scrollfooterContacts = () => scrollToElement('footerContacts');

  // Мультиязычные данные
  const textContent = languageStore
    ? {
        title: 'Балдарыңыз үчүн адал контент',
        subtitle: 'Исламга шайкеш видеолор',
        description:
          'Биздин платформада сиз балдарыңыз үчүн коопсуз жана адал видеолорду таба аласыз. Бардык контент Исламдын негизги принциптерине шайкеш келет жана пайдалуу билим берет.',
        priceQuality: 'Коопсуздук жана пайдалуу маалымат',
        startButton: 'Платформа тууралуу',
        infoButton: 'Толук маалымат алуу',
      }
    : {
        title: 'Исламский контент для ваших детей',
        subtitle: 'Видео в соответствии с Исламом',
        description:
          'Мы хотим создать платформу где вы найдете безопасные видео с Исламскими ценностьями для детей. Контент будет соответствовать основным принципам Ислама и приносит пользу в обучении детьям.',
        priceQuality: 'Безопасность и полезные знания',
        startButton: 'Подробнее о платформе',
        infoButton: 'Спонсировать',
      };

  return (
    <LeftContainer>
      <h3>{textContent.title}</h3>
      <h1>{textContent.subtitle}</h1>
      <h2>{textContent.priceQuality}</h2>
      <div className="line"></div>
      <p>{textContent.description}</p>
      <div className="buttonPapa">
        <Button onClick={scrollToPriceSection}>
          {textContent.startButton}
        </Button>
        <StyledButtonInformation onClick={scrollfooterContacts}>
          {textContent.infoButton}
        </StyledButtonInformation>
      </div>
    </LeftContainer>
  );
};

export default LeftHome;
