import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

type Status =
  | ''
  | 'Sending...'
  | 'Message sent successfully ✅'
  | 'Submission failed ❌'
  | 'Network error ❌';

interface Web3FormsResponse {
  success: boolean;
  message?: string;
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY as string);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data: Web3FormsResponse = await res.json();

      if (data.success) {
        setStatus('Message sent successfully ✅');
        form.reset();
      } else {
        setStatus('Submission failed ❌');
      }
    } catch {
      setStatus('Network error ❌');
    }
  };

  return (
    <Card className="max-w-md  m-4">
      <CardHeader>
        <CardTitle>Contact Me</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" rows={4} required />
          </div>

          <Button type="submit" className="w-full">
            Send Message
          </Button>

          {status && (
            <p className="text-sm text-center text-muted-foreground">
              {status}
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
