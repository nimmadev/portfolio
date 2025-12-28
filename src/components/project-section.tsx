import { ProjectCard } from '@/components/ui/project-card';

export function ProjectSection() {
  return (
    <section className="p-4  sm:w-[60svw]">
      <h2 id="projects" className="flex gap-2 text-5xl font-medium pb-4">
        <span className="text-muted-foreground">#</span> Projects
      </h2>

      <div className="cards flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        <ProjectCard
          name="Social Website"
          description="A Twitter-like social platform featuring full CRUD functionality for posts, messages, likes, comments, user profiles, and followers."
          photo="https://picsum.photos/800/450"
          links={[
            {
              url: 'github.com',
              name: 'github',
              iconLink: 'https://cdn.simpleicons.org/github/white',
            },
            {
              url: 'google.com',
              name: 'website',
              iconLink: 'https://cdn.simpleicons.org/chromewebstore/white',
            },
          ]}
        />
        <ProjectCard
          name="Social Website api"
          description="A RESTful API powering a Twitter-like social application, supporting CRUD operations for users, posts, messages, likes, comments, and followers."
          links={[
            {
              url: 'github.com',
              name: 'github',
              iconLink: 'https://cdn.simpleicons.org/github/white',
            },
            {
              url: 'google.com',
              name: 'website',
              iconLink: 'https://cdn.simpleicons.org/chromewebstore/white',
            },
          ]}
        />
      </div>
    </section>
  );
}
