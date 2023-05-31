import { FaLessThan, FaGreaterThan } from 'react-icons/fa';
import styles from '../css/Login.module.css';
import { useNavigate } from 'react-router-dom';
import GoogleLoginButton from '../components/GoogleLoginButton';
import { useState,useEffect } from 'react';
function LoginPage(){
  let navigate = useNavigate();
  let [res,setres] = useState([]);
  let [logined,setlogined] = useState(false);
  let [stored,setstored] = useState(JSON.parse(localStorage.getItem("logined")));
  useEffect(()=>{  
    if(res.length!==0){
      setlogined(true);
      localStorage.setItem("logined", JSON.stringify(res));
      setstored(JSON.parse(localStorage.getItem("logined")))
      navigate('/')
    }
    if(stored!==null){
      setlogined(true);
    }
    console.log(stored)
  },[res]);

  return(
    <div id={styles.mainwrap}>
    <div id={styles.headerwrap}>
        <header>

          <div className={styles.icon} onClick = {()=>{navigate("/")}}>
            <img src='./images/headericon.png' ></img>
          </div>

          
        </header>
      </div>
      <div className = {styles.loginback}>
        <img className = {styles.loginbackimg} src = "https://assets.nflxext.com/ffe/siteui/vlv3/ceb3b1eb-2673-4dd9-a6e3-0cd7a5e130ee/d110b57b-6acd-48f7-9626-01e92c747b19/KR-ko-20230522-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        srcset = "https://assets.nflxext.com/ffe/siteui/vlv3/ceb3b1eb-2673-4dd9-a6e3-0cd7a5e130ee/d110b57b-6acd-48f7-9626-01e92c747b19/KR-ko-20230522-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/ceb3b1eb-2673-4dd9-a6e3-0cd7a5e130ee/d110b57b-6acd-48f7-9626-01e92c747b19/KR-ko-20230522-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/ceb3b1eb-2673-4dd9-a6e3-0cd7a5e130ee/d110b57b-6acd-48f7-9626-01e92c747b19/KR-ko-20230522-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
        />
        <div className = {styles.loginbackgrad}>
        </div>
         <div className = {styles.loginbox}>
          {(logined===false)?(<div className = {styles.logincontentsbox}>
            <h2 className = {styles.logincontentsname}>로그인</h2>
            <form className = {styles.loginform}>
              <input type = "text" placeholder="이메일 주소" className = {styles.logininput}/>
              <input type = "text" placeholder="비밀 번호" className = {styles.logininput}/>
              <button className = {styles.loginbutton}>로그인</button>
              <div className = {styles.loginsocial}>
              <GoogleLoginButton setres = {setres}/>
              </div>
              <div className = {styles.loginjoincon}>
              <span>Netlix 회원이 아니신가요? </span><span className = {styles.joinbutton} onClick = {()=>{navigate("/join")}}>지금 가입하세요</span>
              </div>
            
            </form>
          </div>):(<div className = {styles.logincontentsbox}>   
          <h2 className = {styles.logincontentsname}>로그인 정보</h2>
          <div className={styles.loginsocialinfoscon}>
            <div className={styles.loginsocialinfos}>
              이메일: {stored.email}<br/><br/>
              성: {stored.family_name}<br/><br/>
              이름: {stored.given_name}<br/>
              </div>
              </div>
          </div>)}
      </div>
      </div>
     
    </div>)
}
export default LoginPage;