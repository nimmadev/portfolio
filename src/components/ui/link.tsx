type link = {
  link: string;
  name: string;
  copy?: boolean;
};
export function Link({ link, name, copy = false }: link) {
  const onClick = async () =>
    copy && (await navigator.clipboard.writeText(link));

  return (
    <a
      href={link}
      className="transition-all duration-200 hover:underline hover:underline-offset-4 hover:opacity-70"
      onClick={onClick}
    >
      {name}
    </a>
  );
}
