import { ReactElement } from 'react';
import './styles.scss';

type CardProps = {
  icon: string;
  title: string;
  bodyText: string;
};

const Card = ({ icon, title, bodyText }: CardProps): ReactElement => {
  return (
    <div className='card-container'>
      <div className='icon'>{icon && <img src={icon} alt='icon'></img>}</div>
      <div className='title'>{title}</div>
      <div className='bodyText'>{bodyText}</div>
    </div>
  );
};

export default Card;
