import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PartnersPage from './pages/PartnersPage';
import SolutionsPage from './pages/SolutionsPage';
import SolutionDetailPage from './pages/SolutionDetailPage';
import ContactPage from './pages/ContactPage';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="partners" element={<PartnersPage />} />
        <Route path="solutions" element={<SolutionsPage />} />
        <Route path="solutions/:solutionId" element={<SolutionDetailPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}