import Gallery from './components/Gallery/Gallery';

import './App.scss';

export interface ImageSchema {
  url: string;
  title: string;
  aspectRatio?: 'landscape' | 'portrait';
}

function App() {
  const imagesSchema: ImageSchema[] = [
    { url: 'https://source.unsplash.com/random', title: 'Вилочные погрузчики'},
    { url: 'https://source.unsplash.com/random', title: 'Вилочные погрузчики' },
    { url: 'https://source.unsplash.com/random', title: 'Вилочные погрузчики', aspectRatio: 'portrait' },
    { url: 'https://source.unsplash.com/random', title: 'Вилочные погрузчики' },
    { url: 'https://source.unsplash.com/random', title: 'Вилочные погрузчики' },
    { url: 'https://source.unsplash.com/random', title: 'Вилочные погрузчики', aspectRatio: 'landscape' },
    { url: 'https://source.unsplash.com/random', title: 'Вилочные погрузчики' },
    { url: 'https://source.unsplash.com/random', title: 'Вилочные погрузчики' },
    { url: 'https://source.unsplash.com/random', title: 'Вилочные погрузчики' },
    { url: 'https://source.unsplash.com/random', title: 'Вилочные погрузчики' },
  ];

  return (
    <div className='App'>
      <Gallery images={imagesSchema} />
    </div>
  );
}

export default App;
