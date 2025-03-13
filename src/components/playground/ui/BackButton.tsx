'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/shared/Button';

interface BackButtonProps {
  text?: string;
  href?: string;
}

export function BackButton({ text = 'Back', href }: BackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    } else {
      router.back();
    }
  };

  return (
    <Button variant="back" onClick={handleClick} isBack>
      {text}
    </Button>
  );
}
