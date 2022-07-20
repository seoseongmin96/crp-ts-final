import React from "react";
import tableStyles from '@/styles/Table.module.css'
import styles from '@/styles/Float.module.css'

const MusicSearch: React.FC = () => {
    return (<>
        <h4><b>검색 결과</b></h4><br/>
        <p>가수 : 오마이걸</p>
        <p>제목 : Real Love</p>
        <img src="https://cdnimg.melon.co.kr/cm2/album/images/109/01/248/10901248_20220328110949_500.jpg?187554cfb3e0f8abc9e6e5a3c6116b05/melon/resize/282/quality/80/optimize" width="200" height="200" alt="My Image"/><br/><br/>
        <h4><b>추천 음악</b></h4> <br/><br/>
        {/* <div style={{display:"flex", float:"left", paddingRight:30+"px"}}>
            <img src="https://img1.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202112/26/xportsnews/20211226153028653cqvn.jpg" width="200" height="200" alt="My Image"/> &nbsp;&nbsp;
            <img src="http://hobbyen.co.kr/news/data/20200217/yna1065624905284098_159.jpg" width="200" height="200" alt="My Image"/> &nbsp;&nbsp;
            <img src="https://img1.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202112/26/xportsnews/20211226153028653cqvn.jpg" width="200" height="200" alt="My Image"/> &nbsp;&nbsp;
        </div> */}
        <table className={tableStyles.table}>
        <tbody>
        <tr>
            <td> <p>가수 : 아이즈원</p>
            <p>제목 : 라비앙로즈</p><img src="https://img.hankyung.com/photo/201812/20181211100117_5c0f0c5d43631_1.jpg" width="150" height="150" alt="My Image"/></td>
           
            <td> <p>가수 : 아이즈원</p>
            <p>제목 : BLOOMIZ</p><img src="http://hobbyen.co.kr/news/data/20200217/yna1065624905284098_159.jpg" width="150" height="150" alt="My Image"/></td>
           
            <td><p>가수 : 오마이걸</p>
            <p>제목 : Dolphin</p><img src="https://img1.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202112/26/xportsnews/20211226153021657fyoh.jpg" width="150" height="150" alt="My Image"/></td>
    
            <td><p>가수 : 오마이걸</p>
            <p>제목 : Dun Dun Dance</p><img src="https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202112/26/xportsnews/20211226153025024itgu.jpg" width="150" height="150" alt="My Image"/></td>
        </tr>
        </tbody>
        </table>
        <a href="#" className={styles.float}>
          <img src='https://ifh.cc/g/5y48Hl.png' className={styles.my} style={{width:40+"px", height:40+"px"}}/>
        </a>
      </>)
}

export default MusicSearch;