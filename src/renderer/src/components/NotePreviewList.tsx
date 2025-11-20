import { noteMock } from '@/store/mocks';
import { ComponentProps } from 'react';

export const NotePreviewList = ({ className }: ComponentProps<'ul'>) => {
  return (
    <ul className={className}>
      {noteMock.map((note) => (
        <li key={note.title}>{note.title}</li>
      ))}
    </ul>
  );
};
