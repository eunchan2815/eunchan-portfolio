import memoaLogo from '../assets/MEMOABigIcon.svg'
import memoaPreview1 from '../assets/MEMOAPreview1.svg'
import memoaPreview2 from '../assets/MEMOAPreview2.svg'
import Divider from './Divider'
import OpenButton from './OpenButton';

const MEMOA = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 text-white py-24 px-6">
        <div className="font-[500] text-[35px]">
            Project
            <div className='py-14 flex flex-row gap-8'>
              <img src={memoaLogo}/>	
              <div className='flex flex-col '>
                <p>메모아 - 학생들을</p>
                <p>위한 플렛폼</p>
                <p className='font-[400] text-[28px] py-1'>교육</p>
                {OpenButton("https://github.com/B9ND/memoa-ios")}
              </div>
            </div>

            <div className="font-[500] text-[35px] py-14">
              Introduce
              <p className='font-[300] text-[22px] py-2'>메모아는 Team-B1ND의 인턴 프로젝트로 진행하였으며 학생들이<br/> 
              메모를 서로 공유하고 팔로우 및 연락까지 가능한<br/>학생들에게 꼭 필요한 플렛폼 입니다.</p>
            </div>


            <div className="font-[500] text-[35px] py-6">
              My Task
              <p className='font-[300] text-[22px] py-2 px-5'>
                <li>iOS 팀장, iOS개발 담당 </li>
                <li>메모 작성(글쓰기) 구현</li>
                <li>검색 기능 구현</li>
                <li>팔로우 팔로잉 구현</li>
                <li>프로필 수정 및 로그아웃 / 회원탈퇴 구현</li>
                <li>북마크 기능 구현 </li>
                <li>글 상세보기 구현</li>
                <li>서버통신 및 상세 로직 등 MVVM 아키텍쳐 구현</li>

              </p>
            </div>

            <div className="font-[500] text-[35px] py-6">
              Stack
              <p className='font-[300] text-[22px] py-2 px-5'>
                <li>Swift & SwiftUI </li>
                <li>Alamofire</li>
                <li>MVVM</li>
                <li>MarkDown</li>
                <li>swift-concurency</li>
              </p>
            </div>

            <div className='font-[500] text-[35px] py-6'>
              Preview
              <img src={memoaPreview1} className='py-4'/>
              <img src={memoaPreview2} className='py-4'/>
            </div>

            <Divider/>
        </div>
      </div>
    </div>
  )
}

export default MEMOA
