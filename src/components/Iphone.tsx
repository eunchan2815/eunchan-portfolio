import iphone from '../assets/iPhone.svg';
import dodamIcon from '../assets/DodamIcon.svg';
import memoaIcon from '../assets/MEMOALogo.svg';
import finderIcon from '../assets/FinderLogo.svg';
import skoolIcon from '../assets/SkoolIcon.svg';
import mailIcon from '../assets/MailLogo.svg';
import githubIcon from '../assets/GithubIcon.svg';
import notionIcon from '../assets/NotionIcon.svg';
import instagramIcon from '../assets/InstagramIcon.svg';
import { IphoneProps } from '../types/IphoneProps';

const topIcon = [ 
  { img: dodamIcon, name: '도담도담' },
  { img: memoaIcon, name: 'MEMOA' },
  { img: finderIcon, name: 'Finder' },
  { img: skoolIcon, name: 'Skool' },
];

const dockIcon = [
  { img: mailIcon, name: 'Mail', onClick: () => window.open('mailto:kimeunchan2815@gmail.com') },
  { img: githubIcon, name: 'Github', onClick: () => window.open('https://github.com/eunchan2815')},
  { img: notionIcon, name: 'Notion', onClick: () => window.open('https://succinct-breakfast-604.notion.site/177cba4137ad80c78dd7e91a19d7f19e')},
  { img: instagramIcon, name: 'Instagram', onClick: () => window.open('https://www.instagram.com/eunchan_chan_cham/')},
];

const Iphone: React.FC<IphoneProps> = ({ onTopIconClick }) => {
  return (
    <div className="relative w-fit">
      <img src={iphone} alt="iPhone" className="w-full" />

      <div className="absolute top-30 left-0 right-0 mx-auto w-4/5 px-6">
        <div className="grid grid-cols-4 gap-4">
          {topIcon.map((icon, index) => (
            <div key={index} className="flex flex-col items-center space-y-1"
            onClick={() => onTopIconClick && onTopIconClick(icon.name)}
            >
              <img src={icon.img} className="w-15 h-15" alt={icon.name}/>
              <span className="text-xs font-medium text-white">{icon.name}</span>
            </div>
          ))}
        </div>
      </div>ㅂ

      <div className="absolute bottom-25 left-0 right-0 mx-auto w-4/5 px-6">
        <div className="grid grid-cols-4 gap-4">
          {dockIcon.map((icon, index) => (
            <div key={index} className="flex flex-col items-center space-y-1">
              <img src={icon.img} className="w-15 h-15" 
              onClick={icon.onClick}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Iphone;