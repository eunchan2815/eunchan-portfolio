const Introduce = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 text-white top-40 px-6">
        <p className="font-[500] text-[42px]">Profile</p>
        <div className="flex flex-col">
          <div className="font-[500] text-[40px]">
            " 모두에게 행복을 " <br/>
            <p className="font-[400] text-[40px]">iOS 개발자 김은찬입니다.</p>
            <p className="font-[300] text-[25px]">2024 ~ ing</p>
          </div>
          
          <div className="font-[500] text-[35px] py-14">
            Who
            <p className="font-[300] text-[22px] py-2">대구소프트웨어마이스터고등학교에 재학중인 <br/>
            iOS 개발자 김은찬입니다.
            </p>
          </div>

          <div className="font-[500] text-[35px] py-14">
            Activity

            <div className="font-[300] text-[22px] py-2">
              1학년
              <p className="px-5">
                <li>2024 대구소프트웨어 마이스터고 입학</li>
                <li>학생들을 위한 SNS MEMOA 개발</li>
                <li>분실물 찾기 Finder 개발</li>
              </p>
            </div>

            <div className="font-[300] text-[22px] py-2">
              2학년
              <div className="px-5">
                <li>Team-B1ND에서 도담도담 개발 및 유지보수</li>
                <li>Team-Connect에서 Qbick 개발 및 유지보수 </li>
              </div>
            </div>
          </div>

            <div className="font-[500] text-[35px] py-14">
            Skills & Tools
              <div className="font-[300] text-[22px] py-2 px-5">
                <li>Swift / SwiftUI</li>
                <li>Tuist / MVVM / clean-architecture</li>
                <li>Alamofire & Moya</li>
                <li>SwiftInject</li>  
              </div>
            </div>

            <div className="font-[500] text-[35px] py-14">
            Award
              <div className="font-[300] text-[22px] py-2 px-5">
                <li>제 29회 앱잼(APPJAM) - 생활/개발자 - 장려상 수상</li>                
              </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Introduce
