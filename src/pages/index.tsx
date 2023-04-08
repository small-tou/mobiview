import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import { Link, Text, Tooltip } from '@nextui-org/react';
import toast from 'react-hot-toast';
import Links from '../components/Links';
const inter = Inter({ subsets: ['latin'] });
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
export default function Home() {
  const mobileScreenSizes: any = {
    'iPhone-14': '390x844',
    'iPhone-14-Plus': '414x896',
    'iPhone-Pro-Max': '428x926',
    'iPhone-12-Mini': '360x780',
    'iPad-Mini': '1024x768',
    iPad: '1024x768',
    'iPad-Pro-11': '1194x834',
    'iPad-Pro-12.9': '1366x1024',
  };
  const [width, setWidth] = useState(375);
  const [height, setHeight] = useState(812);
  const [url, setUrl] = useState('https://mobiview-pro.gitbook.io/about/');
  const [screenSize, setScreenSize] = useState('iPhone-14' as string);

  const router = useRouter();
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query && query.get('url')) {
      const _url = decodeURIComponent(query.get('url') as string);
      if (_url) setUrl(_url);
    }
    if (query && query.get('size')) {
      const _size = query.get('size') as string;
      if (_size) activeScreenSize(_size);
    }
  }, [router.query.url, router.query.size]);

  function activeScreenSize(key: string) {
    const [width, height] = mobileScreenSizes[key].split('x');
    setWidth(Number(width));
    setHeight(Number(height));
    setScreenSize(key);
    const query = new URLSearchParams(window.location.search);
    if (query) {
      query.set('size', key);
    }
    window.history.replaceState({}, '', `/?${query.toString()}`);
  }

  function goURL() {
    let _newURL = newURL;
    if (!_newURL) {
      toast.error('Please enter a valid URL');
      return;
    }
    if (!_newURL.startsWith('http')) {
      toast.error('Please enter a valid URL with http or https protocol');
      return;
    }
    const query = new URLSearchParams(window.location.search);
    query.set('url', encodeURIComponent(newURL));
    query.set('size', screenSize);
    window.location.href = `/?${query.toString()}`;
  }

  const [newURL, setNewURL] = useState('');

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/mobile.png" />
        <title>MobiView.Pro</title>
        <meta
          name="description"
          content="Preview and share your site with mobile style"
        />
      </Head>
      <div
        className="flex flex-column items-center justify-center main-body"
        style={{
          width: '100vw',
          height: '100vh',
          background: '#F7F7F7',
          justifyContent: 'space-evenly',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Link href="/">
            <Text
              h1
              size={30}
              css={{
                textGradient: '45deg, $purple600 0%, $pink600 100%',
                letterSpacing: '0.02em',
              }}
            >
              Mobiview.pro
            </Text>
          </Link>
          <Text
            size={16}
            css={{
              color: '#666',
              letterSpacing: '0.03em',
            }}
          >
            Preview and share your site with mobile style
          </Text>

          <div
            className="flex flex-row items-center justify-center p-5 "
            style={{
              width: '460px',
              gap: '15px',
              flexWrap: 'wrap',
              marginTop: '20px',
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
          <div
            className="flex flex-row items-center justify-center gap-5"
            style={{
              marginTop: '20px',
            }}
          >
            <input
              type="text"
              className="border-2 border-gray-300 p-2"
              onChange={(e) => {
                setNewURL(e.target.value);
              }}
              style={{
                width: '294px',
                borderRadius: '8px',
                padding: '10px 20px',
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  goURL();
                }
              }}
              placeholder="Enter your URL (with https://)"
            />
            <button
              className="bg-blue-500 text-white p-2 rounded-md"
              onClick={() => {
                goURL();
              }}
              style={{
                padding: '10px 20px',
              }}
            >
              Go URL
            </button>
          </div>
          <div
            className="flex flex-row items-center justify-center"
            style={{
              fontSize: '12px',
              marginTop: '20px',
            }}
          >
            Some website not support be embeded will not effect.
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              margin: '20px 0 40px 0',
            }}
          >
            <a
              href="https://github.com/0xYootou/mobiview"
              style={{}}
              target="_blank"
            >
              <Tooltip content="Github code" color={'success'}>
                <svg
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                >
                  <path
                    d="M64 512c0 195.2 124.8 361.6 300.8 422.4 22.4 6.4 19.2-9.6 19.2-22.4v-76.8c-134.4 16-140.8-73.6-150.4-89.6-19.2-32-60.8-38.4-48-54.4 32-16 64 3.2 99.2 57.6 25.6 38.4 76.8 32 105.6 25.6 6.4-22.4 19.2-44.8 35.2-60.8-144-22.4-201.6-108.8-201.6-211.2 0-48 16-96 48-131.2-22.4-60.8 0-115.2 3.2-121.6 57.6-6.4 118.4 41.6 124.8 44.8 32-9.6 70.4-12.8 112-12.8 41.6 0 80 6.4 112 12.8 12.8-9.6 67.2-48 121.6-44.8 3.2 6.4 25.6 57.6 6.4 118.4 32 38.4 48 83.2 48 131.2 0 102.4-57.6 188.8-201.6 214.4 22.4 22.4 38.4 54.4 38.4 92.8v112c0 9.6 0 19.2 16 19.2C832 876.8 960 710.4 960 512c0-246.4-201.6-448-448-448S64 265.6 64 512z"
                    fill="#040000"
                  ></path>
                </svg>
              </Tooltip>
            </a>

            <a
              onClick={() => {
                navigator.clipboard.writeText(
                  `MobiView.Pro - Preview or share your website on mobile devices. https://mobiview.pro/?url=${encodeURIComponent(
                    url
                  )}`
                );
                toast.success('Copied to clipboard successfully!');
              }}
            >
              <Tooltip content="Copy marketing spread slogan" color={'success'}>
                <svg
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                >
                  <path
                    d="M96.1 575.7a32.2 32.1 0 1 0 64.4 0 32.2 32.1 0 1 0-64.4 0Z"
                    fill="#4D4D4D"
                    p-id="4542"
                  ></path>
                  <path
                    d="M742.1 450.7l-269.5-2.1c-14.3-0.1-26 13.8-26 31s11.7 31.3 26 31.4l269.5 2.1c14.3 0.1 26-13.8 26-31s-11.7-31.3-26-31.4zM742.1 577.7l-269.5-2.1c-14.3-0.1-26 13.8-26 31s11.7 31.3 26 31.4l269.5 2.1c14.3 0.2 26-13.8 26-31s-11.7-31.3-26-31.4z"
                    fill="#4D4D4D"
                    p-id="4543"
                  ></path>
                  <path
                    d="M736.1 63.9H417c-70.4 0-128 57.6-128 128h-64.9c-70.4 0-128 57.6-128 128v128c-0.1 17.7 14.4 32 32.2 32 17.8 0 32.2-14.4 32.2-32.1V320c0-35.2 28.8-64 64-64H289v447.8c0 70.4 57.6 128 128 128h255.1c-0.1 35.2-28.8 63.8-64 63.8H224.5c-35.2 0-64-28.8-64-64V703.5c0-17.7-14.4-32.1-32.2-32.1-17.8 0-32.3 14.4-32.3 32.1v128.3c0 70.4 57.6 128 128 128h384.1c70.4 0 128-57.6 128-128h65c70.4 0 128-57.6 128-128V255.9l-193-192z m0.1 63.4l127.7 128.3H800c-35.2 0-64-28.8-64-64v-64.3h0.2z m64 641H416.1c-35.2 0-64-28.8-64-64v-513c0-35.2 28.8-64 64-64H671V191c0 70.4 57.6 128 128 128h65.2v385.3c0 35.2-28.8 64-64 64z"
                    fill="#4D4D4D"
                    p-id="4544"
                  ></path>
                </svg>
              </Tooltip>
            </a>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {url && (
            <iframe
              src={url}
              style={{
                borderRadius: '25px',
                background: '#fff',
                width,
                height,
                boxShadow: '0 0 15px rgba(0,0,0,0.2)',
                overflow: 'hidden',
                border: '6px solid #333',
              }}
            ></iframe>
          )}
        </div>
      </div>
      {/* <Links /> */}
    </>
  );
}
