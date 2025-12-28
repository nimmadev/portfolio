import { Button } from '@/components/ui/button';

type IconNameType = {
  link: string;
  name: string;
};
export function IconName({ link, name }: IconNameType) {
  return (
    <div className="flex flex-col items-center gap-1">
      <img width={32} height={32} src={link} />
      {name}
    </div>
  );
}
