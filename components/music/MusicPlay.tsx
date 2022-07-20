import React from "react";
import style from '@/styles/Float.module.css'

const MusicPlay: React.FC = () => {
    return (
        <>
        <a href="/music/musicSearch" style={{textDecoration:"none", color: "black"}}><br/><br/><br/>
            <img src="https://static.thenounproject.com/png/1310897-200.png" style={{width:100+"px"}}/>
        </a> <br/><br/><br/>
        <p>버튼을 누른 후 음악을 들려주세요.</p>
        <p>소음이 심한 경우 검색 결과 확인이 어려울 수 있습니다.</p>
        <div className="progress">
            <div className="progress-bar progress-bar-striped bg-danger progress-bar-animated" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width:500+"px"}}></div>
        </div>
        <a href="#" className={style.float}>
                <img src='https://ifh.cc/g/5y48Hl.png' className={style.my} style={{width:40+"px", height:40+"px"}}/>
            </a>
        </>
      )
}

export default MusicPlay;