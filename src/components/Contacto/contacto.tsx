import { ReactElement, useState } from 'react';
import { useI18nContext } from '../../i18n/i18n-react';
import './styles.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';

const Contacto = (): ReactElement => {
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const { LL } = useI18nContext();

  const handleChange = (e: any): void => {
    setSubmitDisabled(!e.target.checked);
  };

  const handleSubmit = (e: any): void => {
    const div = document.getElementById('confirmation-div');

    if (div) {
      div.style.display = 'block';

      setTimeout(() => {
        div.style.display = 'none';
        e.target.reset();
        setSubmitDisabled(true);
      }, 11000);
    }
  };

  return (
    <div className='home-container'>
      <Header activeOption=''></Header>
      <div className='top-image'>
        <div className='top-inner-content'>
          <div>
            <h1>{LL.contacto.headerTitle()}</h1>
          </div>
        </div>
        <div className='top-inner-content'>
          <img src='static/images/imgContacto.png'></img>
        </div>
      </div>

      <div className='about-us-container contacto map'>
        <div className='about-us-item'>
          <h1>{LL.contacto.hablemosTitle()}</h1>
          <p>{LL.contacto.hablemosDescripcion()}</p>
          <div className='row img'>
            <img src='static/images/imgContact2.png'></img>
          </div>
        </div>
        <div className='about-us-item'>
          <div className='confirmation' id='confirmation-div'>
            {LL.contacto.confirmacionContacto()}
          </div>
          <form
            className='form-contact'
            action='https://public.herotofu.com/v1/66864960-bc22-11ed-a65b-75998c42b1fc'
            method='POST'
            target='_blank'
            onSubmit={handleSubmit}
          >
            <div className='row'>
              <label htmlFor='name'>{LL.contacto.nombre()}</label>
              <input
                type='text'
                className='form-control'
                name='name'
                required
              />
            </div>
            <div className='row'>
              <label htmlFor='email'>{LL.contacto.email()}</label>
              <input
                type='email'
                className='form-control'
                name='email'
                pattern='[^@\s]+@[^@\s]+\.[^@\s]+'
                required
              />
            </div>
            <div className='row'>
              <label htmlFor='message'>{LL.contacto.mensaje()}</label>
              <textarea
                className='form-control text-area'
                name='message'
                required
              />
            </div>
            <div className='form-footer'>
              <div className='checkbox-container'>
                <input type='checkbox' onChange={handleChange} />
                <span className='checkbox-text'>
                  {LL.contacto.aceptarTyC()}
                </span>
              </div>
              <input
                type='submit'
                value={LL.contacto.enviar()}
                disabled={submitDisabled}
              />
            </div>
          </form>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Contacto;
