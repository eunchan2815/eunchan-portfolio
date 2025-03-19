import dodamLogo from '../assets/DodamBigIcon.svg';
import DodamPreview1 from '../assets/DodamPreview1.svg'
import DodamPreview2 from '../assets/DodamPreview2.svg'
import Divider from './Divider';
import OpenButton from './OpenButton';

const Project = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 text-white py-24 px-6">
        <div className="font-[500] text-[35px]">
            Project
            <div className='py-14 flex flex-row gap-8'>
              <img src={dodamLogo}/>	
              <div className='flex flex-col '>
                <p>도담도담 - 스마트 학교</p>
                <p>관리서비스</p>
                <p className='font-[400] text-[28px] py-1'>교육</p>
                {OpenButton("https://apps.apple.com/kr/app/%EB%8F%84%EB%8B%B4%EB%8F%84%EB%8B%B4-%EC%8A%A4%EB%A7%88%ED%8A%B8-%ED%95%99%EA%B5%90-%EA%B4%80%EB%A6%AC-%EC%84%9C%EB%B9%84%EC%8A%A4/id6482977790")}
              </div>
            </div>

            <div className="font-[500] text-[35px] py-14">
              Introduce
              <p className='font-[300] text-[22px] py-2'>도담도담은 대구소프트웨어마이스터고등학교의<br/> B1ND-Team에서 개발한 스마트
              학교 관리 서비스로<br/>9년동안 유지보수 및 개발을 진행중입니다.</p>
            </div>

            <div className="font-[500] text-[35px] py-6">
              My Task
              <p className='font-[300] text-[22px] py-2 px-5'>
                <li>동아리 기능 추가 </li>
                <li>iOS 팀장, iOS개발 담당 </li>
                <li>동아리 승인 제안 신청 및 유지보수중에 있음</li>
              </p>
            </div>

            <div className="font-[500] text-[35px] py-6">
              Stack
              <p className='font-[300] text-[22px] py-2 px-5'>
                <li>Swift & SwiftUI </li>
                <li>Alamofire & Moya </li>
                <li>MVVM</li>
                <li>Tuist</li>
                <li>SwiftInject</li>
                <li>clean-architecture</li>
                <li>swift-concurency</li>
              </p>
            </div>

            <div className='font-[500] text-[35px] py-6'>
              Preview
              <img src={DodamPreview1} className='py-4'/>
              <img src={DodamPreview2} className='py-4'/>
            </div>

            <Divider/>
        </div>
      </div>
    </div>
  )
}

export default Project
