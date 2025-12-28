import { Introduction } from '@/components/hero-left';
import { TechStack } from './hero-right';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="flex flex-col px-4 pt-5 min-h-[80vh] gap-10  sm:flex-row  sm:items-center"
    >
      <Introduction />
      <TechStack />
    </section>
  );
}
