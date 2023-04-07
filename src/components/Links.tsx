import { Link, Tooltip } from '@nextui-org/react';

export default function Links() {
  const links = [
    {
      link: 'https://mobiview.pro',
      name: 'Mobiview.pro',
      desc: 'Preview and share your site with mobile style',
    },
    {
      link: 'https://chrome.google.com/webstore/detail/chatgpt-anywhere-chat-on/jcfkfnhebnhaldhlgfiaglpcjkdikbhc?hl=zh-CN&authuser=1',
      name: 'ChatGPT Anywhere',
      desc: 'A Chrome extension that allows you to chat with ChatGPT anywhere. anytime. anypage.',
    },
    {
      link: 'https://waitlist.wtf/',
      name: 'Waitlist.wtf',
      desc: "The waitlist of waitlist's list",
    },
    {
      link: 'https://chrome.google.com/webstore/detail/neon-work-clock-newtab/ikckgihkcenlmafeeheiadmdlpfppaij',
      name: 'Neon Work Clock',
      desc: '在新的标签页中显示一个漂亮的显示工作状态和时间的霓虹灯界面，可以控制是否在工作中，并统计工作时间等',
    },
    {
      link: 'https://wp-pc-wallpaper.vercel.app/',
      name: 'WP PC Wallpaper',
      desc: 'A wallpaper/banner generator for Wonderpals NFT Holders',
    },
    {
      link: 'https://idea3.link/',
      name: 'Idea3.link',
      desc: 'Make more ideas reality',
    },
    {
      link: 'https://www.measuring.world/',
      name: 'Measuring.world',
      desc: 'Measuring the crypto metaverse world',
    },
  ];
  return (
    <div
      style={{
        borderTop: '1px solid #efefef',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          padding: '10px 0',
          height: '50px',
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'flex-start',
          color: '#444',
          fontSize: '14px',
        }}
      >
        {links.map((link) => (
          <Tooltip content={link.desc} key={link.link} color={'success'}>
            <Link
              href={link.link}
              target="_blank"
              css={{
                padding: '4px 10px',
                fontWeight: '500',
                color: '#333',
                '&:hover': {
                  background: '#eee',
                  borderRadius: '5px',
                },
              }}
            >
              {link.name}
            </Link>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
