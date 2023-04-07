import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import { Text } from '@nextui-org/react';
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
    <div
      className="flex flex-column items-center justify-center main-body"
      style={{
        width: '100vw',
        height: '100vh',
        background: '#F7F7F7',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: '500px',
          maxWidth: '1000px',
        }}
      >
        <Text
          h1
          size={40}
          css={{
            textGradient: '45deg, $purple600 0%, $pink600 100%',
            letterSpacing: '0.03em',
          }}
        >
          MobiView.Pro
        </Text>

        <div
          className="flex flex-row items-center justify-center p-5 "
          style={{
            width: '460px',
            gap: '15px',
            flexWrap: 'wrap',
          }}
        >
          {Object.keys(mobileScreenSizes).map((key) => (
            <a
              key={key}
              style={{
                fontSize: '18px',
                cursor: 'pointer',
                width: '200px',
                height: '90px',
                borderRadius: '10px',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                color: '#fff',
                justifyContent: 'center',
              }}
              className={`${
                screenSize === key ? 'bg-blue-500 text-bold' : 'bg-gray-500'
              } hover:bg-blue-500`}
              onClick={() => {
                activeScreenSize(key);
              }}
            >
              {key}
            </a>
          ))}
        </div>
        <div className="flex flex-row items-center justify-center p-10 gap-5">
          <input
            type="text"
            className="border-2 border-gray-300 p-2"
            onChange={(e) => {
              setNewURL(e.target.value);
            }}
            style={{
              width: '280px',
              borderRadius: '8px',
              padding: '10px 20px',
            }}
            placeholder="Enter URL"
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-md"
            onClick={() => {
              window.location.href = `/?url=${encodeURIComponent(newURL)}`;
            }}
            style={{
              padding: '10px 20px',
            }}
          >
            Go to URL
          </button>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
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
          ></iframe>
        )}
      </div>
    </div>
  );
}
