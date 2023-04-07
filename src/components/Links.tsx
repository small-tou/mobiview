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
      link: 'https://chrome.google.com/webstore/detail/lazy-favorites/ejnnjbdiehpgikhapbembdllfmolknmi?hl=zh-CN&authuser=1',
      name: '懒人收藏夹',
      desc: '直接用时间作为收藏夹的分组依据，每个月创建一个文件夹，一键收藏网页到当前月份的文件夹中',
    },
    {
      link: 'https://marry3.love',
      name: 'Marry3.love',
      desc: 'Witness your Love in Web3 and get the Soulbound NFT Certificate on the chain',
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
