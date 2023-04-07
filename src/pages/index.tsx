import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const mobileScreenSizes: any = {
    'iphone-14': '390x844',
    'iphone-plus': '414x896',
    'iphone-pro-max': '428x926',
    'iphone-12-mini': '360x780',
    ipad: '1024x768',
    'ipad-pro': '1366x1024',
    'ipad-mini': '1024x768',
  };
  const [width, setWidth] = useState(375);
  const [height, setHeight] = useState(812);
  const [url, setUrl] = useState('');
  const [screenSize, setScreenSize] = useState('iphone-14' as string);

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
      <div className="flex flex-row items-center justify-center p-10 gap-10">
        {Object.keys(mobileScreenSizes).map((key) => (
          <a
            key={key}
            style={{
              fontSize: '14px',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
            className={`${
              screenSize === key ? 'text-blue-500' : 'text-black-500'
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
