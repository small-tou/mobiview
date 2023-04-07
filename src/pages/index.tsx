import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const mobileScreenSizes: any = {
    'iPhone-14': '390x844',
    'iPhone-Plus': '414x896',
    'iPhone-Pro-Max': '428x926',
    'iPhone-12-Mini': '360x780',
    iPad: '1024x768',
    'iPad-Pro': '1366x1024',
    'iPad-Mini': '1024x768',
  };
  const [width, setWidth] = useState(375);
  const [height, setHeight] = useState(812);
  const [url, setUrl] = useState('');
  const [screenSize, setScreenSize] = useState('iPhone-14' as string);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const _url = decodeURIComponent(query.get('url') as string);
    if (_url) setUrl(_url);
  }, []);

  function activeScreenSize(key: string) {
    const [width, height] = mobileScreenSizes[key].split('x');
    setWidth(Number(width));
    setHeight(Number(height));
    setScreenSize(key);
  }

  const [newURL, setNewURL] = useState('');

  return (
    <main
      className="flex flex-col items-center justify-center  "
      style={{
        background: '#eee',
      }}
    >
      <div className="flex flex-row items-center justify-center p-5 gap-10">
        {Object.keys(mobileScreenSizes).map((key) => (
          <a
            key={key}
            style={{
              fontSize: '14px',
              cursor: 'pointer',
            }}
            className={`${
              screenSize === key ? 'text-blue-500 text-bold' : 'text-black-500'
            } hover:text-blue-500`}
            onClick={() => {
              activeScreenSize(key);
            }}
          >
            {key}
          </a>
        ))}
      </div>
      {url && (
        <iframe
          src={url}
          style={{
            border: 'none',
            borderRadius: '15px',
            background: '#fff',
            width,
            height,
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            overflow: 'hidden',
          }}
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        ></iframe>
      )}

      <div className="flex flex-row items-center justify-center p-10 gap-10">
        <input
          type="text"
          className="border-2 border-gray-300 p-2"
          onChange={(e) => {
            setNewURL(e.target.value);
          }}
          placeholder="Enter URL"
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-md"
          onClick={() => {
            window.location.href = `/?url=${encodeURIComponent(newURL)}`;
          }}
        >
          Go to URL
        </button>
      </div>
    </main>
  );
}
