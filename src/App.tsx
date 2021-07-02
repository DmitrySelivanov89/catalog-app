import Gallery from './components/Gallery/Gallery';

import './App.scss';

export interface ImageSchema {
  url: string;
  title: string;
  aspectRatio?: 'landscape' | 'portrait';
}

function App() {
  const imagesSchema: ImageSchema[] = [
    { url: 'https://source.unsplash.com/random', title: 'Галерея'},
    { url: 'https://source.unsplash.com/random', title: 'Галерея' },
    { url: 'https://source.unsplash.com/random', title: 'Галерея', aspectRatio: 'portrait' },
    { url: 'https://source.unsplash.com/random', title: 'Галерея' },
    { url: 'https://source.unsplash.com/random', title: 'Галерея' },
    { url: 'https://source.unsplash.com/random', title: 'Галерея', aspectRatio: 'landscape' },
    { url: 'https://source.unsplash.com/random', title: 'Галерея' },
    { url: 'https://source.unsplash.com/random', title: 'Галерея' },
    { url: 'https://source.unsplash.com/random', title: 'Галерея' },
    { url: 'https://source.unsplash.com/random', title: 'Галерея' },
  ];

  return (
    <div className='App'>
      <Gallery images={imagesSchema} />
    </div>
  );
}

export default App;
