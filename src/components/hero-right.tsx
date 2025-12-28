import { IconName } from '@/components/ui/icon-name';

export function TechStack() {
  return (
    <div className="border-2 rounded-2xl p-4">
      <h3 className="text-4xl text-center pb-4">My Tools</h3>

      <div className="flex  flex-wrap gap-4 justify-center">
        {/* Frontend */}
        <IconName link="https://cdn.simpleicons.org/react/light" name="React" />
        <IconName
          link="https://cdn.simpleicons.org/nextdotjs/red"
          name="Next.js"
        />
        <IconName
          link="https://cdn.simpleicons.org/javascript/light"
          name="JavaScript"
        />
        <IconName
          link="https://cdn.simpleicons.org/typescript/light"
          name="TypeScript"
        />
        <IconName
          link="https://cdn.simpleicons.org/tailwindcss/light"
          name="Tailwind CSS"
        />
        <IconName
          link="https://cdn.simpleicons.org/python/light"
          name="Python"
        />

        {/* Backend */}
        <IconName
          link="https://cdn.simpleicons.org/node.js/light"
          name="Node.js"
        />
        <IconName
          link="https://cdn.simpleicons.org/express/lightblue"
          name="Express"
        />
        <IconName
          link="https://cdn.simpleicons.org/fastapi/light"
          name="FastApi"
        />

        {/* Database */}
        <IconName
          link="https://cdn.simpleicons.org/prisma/light"
          name="PrismaSql"
        />
        <IconName
          link="https://cdn.simpleicons.org/postgresql/light"
          name="PostgreSQL"
        />

        {/* Tools */}
        <IconName link="https://cdn.simpleicons.org/git/light" name="Git" />
        <IconName
          link="https://cdn.simpleicons.org/github/light"
          name="GitHub"
        />
        <IconName
          link="https://cdn.simpleicons.org/docker/light"
          name="Docker"
        />
      </div>
    </div>
  );
}
