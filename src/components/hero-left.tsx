import { Button } from '@/components/ui/button';
import { Link } from '@/components/ui/link';
export function Introduction() {
  return (
    <div className="text sm:w-[60svw]">
      <h2 className="text-7xl font-bold">NIMMA SINGH</h2>
      <p className="text-3xl font-bold">I’m a Full-Stack Developer</p>
      <p className="info text-3xl">
        I build modern web applications using React, JavaScript, Express, and
        PostgreSQL.
      </p>
      <div className="links flex gap-4 pt-4">
        <Link link="https://github.com/nimmadev" name="GitHub" />
        <Link link="https://www.linkedin.com/in/nimma-dev/" name="LinkedIn" />
        <Link
          link="mailto:nimma.dev.india@gmail.com"
          name="Email Me"
          copy={true}
        />
      </div>

      <div className="navigation-button flex gap-4 pt-4">
        <Button>Contact Me</Button>
        <Button asChild variant={'secondary'}>
          <a href="#projects">Projects</a>
        </Button>
      </div>
    </div>
  );
}
