import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import { Link } from '@/components/ui/link';
import { Button } from '@/components/ui/button';

type ProjectCardType = {
  name: string;
  description: string;
  photo?: string;
  links: { name: string; url: string; iconLink: string }[];
};
export function ProjectCard({
  name,
  description,
  photo,
  links,
}: ProjectCardType) {
  return (
    <Card className="min-w-75">
      <CardHeader>
        {name}
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <AspectRatio ratio={16 / 9} asChild>
          {photo ? (
            <img
              src={photo}
              alt="Project screenshot"
              className="rounded-md object-cover"
            />
          ) : (
            <div className="flex items-center justify-center rounded-md bg-muted">
              No Image
            </div>
          )}
        </AspectRatio>

        <div className="links flex gap-4 pt-2">
          {links.map(({ name, url, iconLink }) => (
            <div className="flex gap-2">
              <Button variant={'ghost'} size={'icon-sm'} asChild>
                <img src={iconLink} />
              </Button>
              <Link link={url} name={name} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
