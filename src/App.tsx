import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero';
import { ProjectSection } from '@/components/project-section';
import { Footer } from '@/components/footer';
import ContactForm from '@/components/contact-form';
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="container mx-auto">
        <Header />
        <HeroSection />
        <div className="lg:flex">
          <ProjectSection />
          <div className="border-l-2 mx-3" />
          <ContactForm />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
