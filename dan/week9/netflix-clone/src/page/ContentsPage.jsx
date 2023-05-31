import {useState,useEffect} from 'react';
import '../css/Common.css';
import styles from '../css/Contents.module.css';
import { useNavigate } from 'react-router-dom';
import MovieRow from '../components/MovieRow';
import { useDispatch, useSelector } from "react-redux";
function ContentsPage(){

  let [billboard,setbillboard] = useState({
    title:"이태원클라쓰",
    img:"http://occ-0-325-988.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbPUTFo13d_knsWj5Max139hI4mCBgTwUTqDWqMMiWzcpI8AvH2-P_-AsSEk6zPI_Uo_YTbdi4qoZxmBLdCYppY0dW8uhIm05N46.webp?r=2a2",
    summary:"활력과 욕망이 넘치는 이태원. 한 전과자와 친구들이 꿈을 위해 뭉쳤다. 일단 시작은 술집 창업. 불합리한 세상, 막강한 적이 앞길을 막으면? 기를 쓰고 맞서 싸워야지!"
    ,logo:"https://occ-0-3682-988.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABV4hxDuy2v-2QHVS9HqlVltIIYltnHElKLgKIHdkIxD5eX1im4oiyXNIzEH3psJ50wsYy9JYU1B7Dbx7PmJGI2SsSzkc7wWjchBZKwquL14.webp?r=f59"
  })
  let items = useSelector((state) => state);
  return(<div id = "mainwrap">
    <Header />
    <div className={styles.billcon}>
    <div className={styles.billrow}>
    <div className={styles.billboardwrap}>
      <div className={styles.billboardimgwrap}>
        <img className={styles.billboardimg} src ={billboard.img}/>
        <div className={styles.billboardgrad}>

        </div>
      </div>
      <div className={styles.fillcontainer}>
      <div className={styles.billboardinfowrap}
      >
        
          <div className={styles.billboardtitleimg}>
            <img src = {billboard.logo} width = "100%"/>
          </div>
          <div className = {styles.billboardsummary}>
            {billboard.summary}
          </div>
      </div>
    </div>
    <div className={styles.bottomgrad}>

    </div>
    </div>
    </div>
   </div>
    <MovieRow title = {'최신작품'} items={items.contents} />
    <MovieRow title = {'다른작품'} items={items.contents} />
    <MovieRow title = {'액션,코미디'} items={items.contents} />
    <MovieRow title = {'그 외'} items={items.contents} />
  </div>)
}
function Header(){
  let navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });
return(<div id={styles.headerwrap} className = {styles[`${(scrollPosition==0)?'headernotscroll':'headerscroll'}`]}>
<div className={styles['menu-nav']}>
  <div className={styles.icon} onClick={()=>{navigate('/')}}>
  <img src='./images/headericon.png' ></img>
  </div>
  <ul className={styles.prinav}>
    <li className={styles.prinavtab} onClick={()=>{navigate('/')}}>홈</li>
    <li className={styles.prinavtab}>시리즈</li>
    <li className={styles.prinavtab}>영화</li>
  </ul>
  <div className={styles.endnavbar}>
    <div className={styles.endnavelement}>
    <div className={styles.searchtab}>
      <svg width="24" height="24" viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 11C14 14.3137 11.3137 17 8 17C4.68629 17 2 14.3137 2 11C2 7.68629 4.68629 5 8 5C11.3137 5 14 7.68629 14 11ZM14.3623 15.8506C12.9006 17.7649 10.5945 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 12.1076 15.7749 13.1626 15.368 14.1218L24.0022 19.1352L22.9979 20.8648L14.3623 15.8506Z"
        fill="currentColor"></path>
      </svg>
    </div>
    </div>
    <div className={styles.endnavelement}>
      <div className = {styles.accountmenuitem} onClick={()=>{navigate('/login')}}>
        <div className={styles.accountdropdownbtn}>
          <span className={styles.accountimg}>
          <img src='https://occ-0-7129-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229'/>
          </span>
          <span className={styles.caret}>

          </span>
        </div>
      </div>
    </div>
  </div>
</div>
</div>)
}
export default ContentsPage;