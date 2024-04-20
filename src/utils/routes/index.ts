export interface PageType {
    id: number;
    url: string;
    text: string;
}

export const PAGES: PageType[] = [
  { id: 0, url: '/table', text: 'Table'},
  { id: 1, url: '/tableTanStack', text: 'Table Tan Stack'},
  { id: 2, url: '/drag-and-drop', text: 'Drag And Drop'},
];