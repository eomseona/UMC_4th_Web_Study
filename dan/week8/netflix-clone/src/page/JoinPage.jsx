import { FaLessThan, FaGreaterThan } from 'react-icons/fa';
import styles from '../css/Login.module.css';
import { useNavigate } from 'react-router-dom';
function JoinPage(){
  let navigate = useNavigate();
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
          <div className = {styles.logincontentsbox}>
            <h2 className = {styles.logincontentsname}>회원가입</h2>
            <form className = {styles.loginform}>
              <input type = "text" placeholder="이메일 주소" className = {styles.logininput}/>
              <input type = "text" placeholder="비밀 번호" className = {styles.logininput}/>
              <input type = "text" placeholder="주소" className = {styles.logininput}/>
              <input type = "text" placeholder="나이" className = {styles.logininput}/>
              <button className = {styles.loginbutton}>회원 가입</button>
              
            </form>
          </div>
      </div>
      </div>
     
    </div>)
}
export default JoinPage;