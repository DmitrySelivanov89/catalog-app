import Gallery from './components/Gallery/Gallery';

import './App.scss';

export interface ImageSchema { url: string; aspectRatio?: 'landscape' | 'portrait' }

function App() {
  const imagesSchema: ImageSchema[] = [
    { url: 'https://source.unsplash.com/random' },
    { url: 'https://source.unsplash.com/random' },
    { url: 'https://source.unsplash.com/random', aspectRatio: 'portrait' },
    { url: 'https://source.unsplash.com/random' },
    { url: 'https://source.unsplash.com/random' },
    { url: 'https://source.unsplash.com/random', aspectRatio: 'landscape' },
    { url: 'https://source.unsplash.com/random' },
    { url: 'https://source.unsplash.com/random' },
  ]

  return (
    <div className='App'>
      <Gallery images={imagesSchema} />
    </div>
  );
}

export default App;
