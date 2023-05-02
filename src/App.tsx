import { useEffect, useState } from 'react';
import { localStorageDetector } from 'typesafe-i18n/detectors';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Inicio } from './components/Inicio';
import TypesafeI18n from './i18n/i18n-react';
import { detectLocale } from './i18n/i18n-util';
import { loadLocaleAsync } from './i18n/i18n-util.async';
import { Nosotros } from './components/Nosotros';
import { Servicios } from './components/Servicios';
import { Contacto } from './components/Contacto';
import { Productos } from './components/Productos';

const detectedLocale = detectLocale(localStorageDetector);

const App = () => {
  const [wasLoaded, setWasLoaded] = useState(false);

  useEffect(() => {
    loadLocaleAsync(detectedLocale).then(() => setWasLoaded(true));
  }, []);

  if (!wasLoaded) return null;

  return (
    <TypesafeI18n locale={detectedLocale}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes >
          <Route index element={<Inicio />} />
          <Route path='nosotros' element={<Nosotros />} />
          <Route path='servicios' element={<Servicios />} />
          <Route path='contacto' element={<Contacto />} />
          <Route path='productos' element={<Productos />} />
        </Routes>
      </BrowserRouter>
    </TypesafeI18n>
  );
};

export default App;
