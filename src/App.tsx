import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero';
import { ProjectSection } from '@/components/project-section';
import { Footer } from '@/components/footer';
import ContactForm from '@/components/contact-form';
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <HeroSection />
      <div className="">
        <ProjectSection />
        <div className="border-l-2" />
        <ContactForm />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
