import { ModeSwitch } from './mode-toggle';

export function Header() {
  return (
    <header className="flex justify-between items-center-safe px-4">
      <h1 className="self-start text-4xl font-bold">ND</h1>
      <div className="self-end my-auto">
        <ModeSwitch />
      </div>
    </header>
  );
}
