import React from 'react';
import styles from "@/styles/Profile.module.css";
import style from '@/styles/Float.module.css'

const Profile: React.FC = () => {
return(
<>
<div className="col-md-3 text-center m-auto"> <br/><br/><br/>
    <h2>개발자 프로필</h2>
</div> <br/><br/><br/>
<div className='container h-100'>
<div className= "row d-flex justify-content-center align-items-center h-100">
<div className="card" style={{maxWidth: 20+"rem"}}>
<img src="https://ifh.cc/g/v681j8.jpg" width={"250px"} height={"400px"} className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">조현국</h5> <br/> 
        <p className="card-text">NLP <br/> Transfomer, <br/> Bert, GPT-3 <br/> Pytorch  <br/> VoiceBot,Lyrics Software Developer</p>
        
    </div>
</div> &nbsp; &nbsp;
<div className="card" style={{maxWidth: 21+"rem"}}>
    <img src="https://ifh.cc/g/adgod5.jpg" width={"250px"} height={"400px"} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">최은아</h5> <br/> 
            <p className="card-text"> GAN <br/> Tensorflow <br/> Plagiarism & Analysis Software Developer</p>
            
        </div>
</div>
<div className="card" style={{maxWidth: 20+"rem"}}>
    <img src="https://ifh.cc/g/MGlTj5.jpg" width={"250px"} height={"400px"} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">권혜민</h5> <br/> 
            <p className="card-text">GAN <br/>Tensorflow <br/> SoundSearch Software Developer </p>
            
        </div>
</div>
<div className="card" style={{maxWidth: 20+"rem"}}>
    <img src="https://ifh.cc/g/mRTjSh.jpg" width={"250px"} height={"400px"} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">서성민</h5> <br/> 
            <p className="card-text"> Type, JavaScript <br/> React, Next <br/> Composition Software Developer</p>
            
        </div>
</div>
</div>
</div>
<a href="#" className={style.float}>
<img src='https://ifh.cc/g/5y48Hl.png' className={style.my} style={{width:40+"px", height:40+"px"}}/>
</a>
<style jsx>{`
    .h2 {
        margin: 50px 0;
        
    }
`}</style>

</>)
}

export default Profile;