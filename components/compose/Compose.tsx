import React from 'react'
import styles from '@/styles/Float.module.css'
import {Button, Col, Form, Row} from "react-bootstrap";

type Props = {
   
    onClick : (e: React.FormEvent<HTMLFormElement> ) => void
}

const Compose: React.FC<Props> = ({onClick}) => {
    return (<>
        <div>
        <p>tone.js</p>
        <img src="https://blog.kakaocdn.net/dn/kZB1w/btrlvCrTY2V/AYD3ZjXUkzO6Nkf5YOPk3k/img.jpg" alt="Alps" style={{width:800}}/><br/><br/><br/><br/>
        </div>
        <div className="text-center text-md-left">
                            <a className="btn btn-white">
                            <Button onClick={e=>document.getElementById('contact-form')}>저장하기</Button></a>
                        </div>
        <a href="#" className={styles.float}>
            <img src='https://ifh.cc/g/5y48Hl.png' className={styles.my} style={{width:40+"px", height:40+"px"}}/>
        </a></>
      )
}

export default Compose;