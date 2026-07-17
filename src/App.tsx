/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import News from './pages/News';
import Contact from './pages/Contact';

export default function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gioi-thieu" element={<About />} />
          <Route path="dich-vu" element={<Services />} />
          <Route path="du-an" element={<Projects />} />
          <Route path="tin-tuc" element={<News />} />
          <Route path="lien-he" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HelmetProvider>
  );
}
