import skoolLogo from '../assets/SkoolBigLogo.svg'
import skoolPreview from '../assets/SkoolPreview.svg'
import OpenButton from './OpenButton';

const Skool = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 text-white py-24 px-6">
        <div className="font-[500] text-[35px]">
            Project
            <div className='py-14 flex flex-row gap-8'>
              <img src={skoolLogo}/>	
              <div className='flex flex-col '>
                <p>밥 시간표 자리뽑기?</p>
                <p>다 스클로 해결!</p>
                <p className='font-[400] text-[28px] py-1'>교육</p>
                {OpenButton("https://github.com/eunchan2815/Skool")}
              </div>
            </div>

            <div className="font-[500] text-[35px] py-14">
              Introduce
              <p className='font-[300] text-[22px] py-2'>스클은 밥 시간표 자리뽑기를 제공하는 플렛폼으로 나이스 api를 사용하였으며 <br/>
              개인 프로젝트로 진행하였습니다</p>
            </div>


            <div className="font-[500] text-[35px] py-6">
              My Task
              <p className='font-[300] text-[22px] py-2 px-5'>
                <li>iOS개발 담당 </li>
                <li>시간표 개발</li>
                <li>급식표 개발</li>
                <li>자리뽑기 개발</li>
                <li>neis api를 사용해 서버 통신</li>
                <li>MVVM 아키텍쳐 구현</li>

              </p>
            </div>

            <div className="font-[500] text-[35px] py-6">
              Stack
              <p className='font-[300] text-[22px] py-2 px-5'>
                <li>Swift & SwiftUI </li>
                <li>Alamofire</li>
                <li>MVVM</li>
                <li>neisAPI</li>
                <li>firebase</li>
                <li>swift-concurency</li>
              </p>
            </div>

            <div className='font-[500] text-[35px] py-6'>
              Preview
              <img src={skoolPreview} className='py-4'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skool
