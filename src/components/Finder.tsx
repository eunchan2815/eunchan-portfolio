import finderLogo from '../assets/FinderBigIcon.svg';
import finderPreview1 from '../assets/FinderPreview1.svg';
import finderPreview2 from '../assets/FinderPreview2.svg';
import Divider from './Divider';
import OpenButton from './OpenButton';

const Finder = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 text-white py-24 px-6">
        <div className="font-[500] text-[35px]">
            Project
            <div className='py-14 flex flex-row gap-8'>
              <img src={finderLogo}/>	
              <div className='flex flex-col '>
                <p>Finder - 분실물</p>
                <p>찾기 플렛폼</p>
                <p className='font-[400] text-[28px] py-1'>찾죠?</p>
                {OpenButton("https://github.com/Team-Able/finder-ios")}
              </div>
            </div>

            <div className="font-[500] text-[35px] py-14">
              Introduce
              <p className='font-[300] text-[22px] py-2'>Finder는 Team-Connect의 인턴 프로젝트로 진행 하였으며 학생들의<br/> 
              분실물을 찾아주고 댓글이나 글쓰기를 통해 서로 컨텍 할 수 있는 서비스 입니다.</p>
            </div>


            <div className="font-[500] text-[35px] py-6">
              My Task
              <p className='font-[300] text-[22px] py-2 px-5'>
                <li>iOS 팀장, iOS개발 담당 </li>
                <li>사용자 주변의 분실물 및 최근 분실물 목록 조회 구현</li>
                <li>카카오맵을 이용한 맵 구현 </li>
                <li>글 검색 및 글쓰기 구현</li>
                <li>검색 기능 구현</li>
                <li>내글, 내댓글 조회 구현</li>
                <li>서버통신 로직 및 MVVM 패턴 구현</li>
                <li>프로필 수정 및 로그아웃 구현</li>

              </p>
            </div>

            <div className="font-[500] text-[35px] py-6">
              Stack
              <p className='font-[300] text-[22px] py-2 px-5'>
                <li>Swift & SwiftUI </li>
                <li>Alamofire</li>
                <li>MVVM</li>
                <li>Kakao-Map</li>
                <li>swift-concurency</li>
              </p>
            </div>

            <div className='font-[500] text-[35px] py-6'>
              Preview
              <img src={finderPreview1} className='py-4'/>
              <img src={finderPreview2} className='py-4'/>
            </div>

            <Divider/>
        </div>
      </div>
    </div>
  )
}

export default Finder
