import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export function ModeSwitch() {
  const { theme, setTheme } = useTheme();
  const isChecked = theme == 'light';

  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="theme-mode">
        <Moon className="h-[1.2rem] w-[1.2rem] scale-100" />
      </Label>
      <Switch
        id="theme-mode"
        onCheckedChange={(checked) => {
          console.log(checked);
          setTheme(checked === true ? 'light' : 'dark');
        }}
        defaultChecked={isChecked}
      />
      <Label htmlFor="theme-mode">
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100" />
      </Label>
    </div>
  );
}
