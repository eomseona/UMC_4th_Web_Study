import Header from '../components/Header'
import {useState} from 'react'
import '../css/Common.css';
import '../css/Main.css'
import { useNavigate } from 'react-router-dom';
import GoogleLoginButton from '../components/GoogleLoginButton';
function MainPage (){
  let qnas = [
    '넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을 수상한 넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다.마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하실 수 있습니다.', '넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다.저렴한 월 요금으로 원하는 시간에 원하는 만큼 즐길 수 있습니다. 무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 시리즈와 영화가 제공됩니다.',
    '스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한 디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십 요금은 월 5,500원부터 17,000원까지 다양합니다. 추가 비용이나 약정이 없습니다.',
    '광고형 멤버십은 저렴한 요금으로 영화와 시리즈를 즐길 수 있는 방법입니다. 제한된 수의 중간 광고와 함께 좋아하는 콘텐츠를 스트리밍할 수 있습니다(일부 위치 및 디바이스 제한 적용). 저장 기능은 지원되지 않으며, 라이선스 제한으로 인해 일부 영화와 시리즈를 이용할 수 없습니다.',
    '언제 어디서나 시청할 수 있습니다. 넷플릭스 계정으로 로그인하면 PC에서 netflix.com을 통해 바로 시청할 수 있으며, 인터넷이 연결되어 있고 넷플릭스 앱을 지원하는 디바이스(스마트 TV, 스마트폰, 태블릿, 스트리밍 미디어 플레이어, 게임 콘솔 등)에서도 언제든지 시청할 수 있습니다. iOS, Android, Windows 10용 앱에서는 좋아하는 시리즈를 저장할 수도 있습니다. 저장 기능을 이용해 이동 중이나 인터넷에 연결할 수 없는 곳에서도 시청하세요. 넷플릭스는 어디서든 함께니까요.',
     '넷플릭스는 부담 없이 간편합니다. 성가신 계약도, 약정도 없으니까요. 멤버십 해지도 온라인에서 클릭 두 번이면 완료할 수 있습니다. 해지 수수료도 없으니 원할 때 언제든 계정을 시작하거나 종료하세요.',
     '멤버십에 넷플릭스 키즈 환경이 포함되어 있어 자녀가 자기만의 공간에서 가족용 시리즈와 영화를 즐기는 동안 부모가 이를 관리할 수 있습니다. 키즈 프로필과 더불어 PIN 번호를 이용한 자녀 보호 기능도 있어, 자녀가 시청할 수 있는 콘텐츠의 관람등급을 제한하고 자녀의 시청을 원치 않는 특정 작품을 차단할 수도 있습니다.'

    ]
  let navigate = useNavigate();
  return (
    <div id="mainwrap">
    <Header/>
    <BeginIntro/>
    <div id="enjoyintvintrowrap" className="contentswrap" >
      <div className="contents contentswidth" >
        <div className="texts">
          <h2>
            TV로 즐기세요.
          </h2>
          <p>
            스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.
          </p>
        </div>
        <div className="media">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" width="100%" />
          <div className="mediavideo">
            <video autoPlay="autoplay" muted="muted" loop>
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="divider">

      </div>
    </div>
    <div id="watchdeviceintrowrap" className="contentswrap">
      <div className="contents contentswidth">
        <div className="media">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" width="100%" />
          <div className="mediavideo">
            <video autoplay="autoplay" muted="muted" loop>
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="texts">
          <h2>
            다양한 디바이스에서 시청하세요.
          </h2>
          <p>
            각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요. 추가 요금이 전혀 없습니다.
          </p>
        </div>
      </div>
      <div className="divider">

      </div>
    </div>
    <div id="makekidsprofileintrowrap" className="contentswrap">
      <div className="contents contentswidth" >
        <div className="texts">
          <h2>
            어린이 전용 프로필을 만들어 보세요.
          </h2>
          <p>
            자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다.
          </p>
        </div>
        <div className="media">
          <img src="https://occ-0-993-988.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABe3Dqef6rg30BxYraI75i97IeQjD0YxUuToAnSA23dl0XQFrjXaFTWIB0HHy4TH_s094NU-9IjLpE_96AvWpTZTAQOR_icyEYcsB.png?r=acf" width="100%" />
        </div>
      </div>
      <div className="divider">

      </div>
    </div>
    <div id="offlinewatchintrowrap" className="contentswrap">
      <div className="contents contentswidth">
        <div className="media">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" width="100%" />
          <div id="wacthintropos">
            <div className="image">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" />

            </div>
            <div className="texts">
              <div className="text1">
                기묘한 이야기
              </div>
              <div className="text2">
                저장 중...
              </div>
            </div>
            <div className="downloadlogo">

            </div>
          </div>
        </div>
        <div className="texts">
          <h2>
            즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요.
          </h2>
          <p>
            광고 없는 멤버십에서만 이용 가능합니다.
          </p>
        </div>

      </div>
      <div className="divider">

      </div>
    </div>
    <div id="qnaintrowrap">
      <div className="contents">
        <div className="qnawrap">
          <h2 >
            자주 묻는 질문
          </h2>
          <div id="qnacontents" >
            <Qnas/>
            <div className = "inputemailwrap">
              <div className = "inputemailinside">
                <form className = "inputemailform">
                  <h3> 시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.   </h3>
                  <div className = "inputemail">
                    <div className="begininput">
                      <div className="inputword">
                        이메일을 입력하세요
                      </div>
                    </div>
                    <button className="beginbutton" onClick = {()=>{navigate('/contents')}}>
                      시작하기{'>'}
                    </button>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}
function BeginIntro(){
  let navigate = useNavigate();
  return (
    <div id="beginintrowrap">
      <div className="background">
        <div className="contents">
          <div className="beginword1">
            <h1>
              영화와 시리즈를 무제한으로.
            </h1>
          </div>
          <div className="beginword2">
            다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
          </div>
          <div className="beginword3">
            시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.
          </div>
          <div className='begininputcon'>
            <div className="begininput">
              <div className="inputword">
                이메일을 입력하세요
              </div>
            </div>
            <button className="beginbutton" onClick={()=>{navigate('/contents')}}>
              시작하기{'>'}
            </button>
          </div>
        </div>
        
      </div>
    </div>
  )
}
function Qnas(){
function Test({title,content,i}){
  let [clicked,setclicked] = useState(false);
  return(
    <li>
          <h3 onClick = {()=>{setclicked(!clicked);}
        }>
          <button>
            <span>{title}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clip-rule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path>
            </svg>
          </button>
      </h3>
        <div id = "qnahiddencontent"  className={(clicked)?"showqnahidden":"hideqnahidden"}>
          {content}
        </div>
    </li>

  )
}

let [qnas,setqnas] = useState([
  {title:'넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?',
  content:'넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을 수상한 넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다.마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하실 수 있습니다.',
  clicked:false
},
{title:'넷플릭스란 무엇인가요?',
  content:'넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다.<br><br>저렴한 월 요금으로 원하는 시간에 원하는 만큼 즐길 수 있습니다. 무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 시리즈와 영화가 제공됩니다.',
  clicked:false
},
{title:'넷플릭스 요금은 얼마인가요?',
  content:'스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한 디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십 요금은 월 5,500원부터 17,000원까지 다양합니다. 추가 비용이나 약정이 없습니다.',
  clicked:false
},
{title:'광고형 멤버쉽은 뭐가 다른가요?',
  content:'광고형 멤버십은 저렴한 요금으로 영화와 시리즈를 즐길 수 있는 방법입니다. 제한된 수의 중간 광고와 함께 좋아하는 콘텐츠를 스트리밍할 수 있습니다(일부 위치 및 디바이스 제한 적용). 저장 기능은 지원되지 않으며, 라이선스 제한으로 인해 일부 영화와 시리즈를 이용할 수 없습니다.',
  clicked:false
},
{title:'어디에서 시청할 수 있나요?',
  content:'언제 어디서나 시청할 수 있습니다. 넷플릭스 계정으로 로그인하면 PC에서 netflix.com을 통해 바로 시청할 수 있으며, 인터넷이 연결되어 있고 넷플릭스 앱을 지원하는 디바이스(스마트 TV, 스마트폰, 태블릿, 스트리밍 미디어 플레이어, 게임 콘솔 등)에서도 언제든지 시청할 수 있습니다.<br><br> iOS, Android, Windows 10용 앱에서는 좋아하는 시리즈를 저장할 수도 있습니다. 저장 기능을 이용해 이동 중이나 인터넷에 연결할 수 없는 곳에서도 시청하세요. 넷플릭스는 어디서든 함께니까요.',
  clicked:false
},
{title:'멤버쉽을 해지하려면 어떻게 하나요?',
  content:'넷플릭스는 부담 없이 간편합니다. 성가신 계약도, 약정도 없으니까요. 멤버십 해지도 온라인에서 클릭 두 번이면 완료할 수 있습니다. 해지 수수료도 없으니 원할 때 언제든 계정을 시작하거나 종료하세요.',
  clicked:false
},
{title:'아이들이 넷플릭스를 봐도 좋을까요?',
  content:'멤버십에 넷플릭스 키즈 환경이 포함되어 있어 자녀가 자기만의 공간에서 가족용 시리즈와 영화를 즐기는 동안 부모가 이를 관리할 수 있습니다.<br><br> 키즈 프로필과 더불어 PIN 번호를 이용한 자녀 보호 기능도 있어, 자녀가 시청할 수 있는 콘텐츠의 관람등급을 제한하고 자녀의 시청을 원치 않는 특정 작품을 차단할 수도 있습니다.',
  clicked:false
}

]) 

  return(
    <ul>
    {
     
      qnas&&qnas.map(function(a,i){
        return(
          <Test title={qnas[i].title} content = {qnas[i].content}  key={i}/>
        
        )
      }
      )
    }
  </ul>
  );
 
  }
  export default MainPage;