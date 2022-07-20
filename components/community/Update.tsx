import style from '@/styles/Float.module.css'
import Link from 'next/link'
import React from 'react'

const UpdateList: React.FC = () => {
    return(<>
        <div className="shadow p-3 mb-5 bg-white rounded">
            <h6 className="border-bottom border-gray pb-2 mb-0">자유게시판</h6>
            <div className="media text-muted pt-3">
            <img data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1" alt="" className="mr-2 rounded"/>
            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong className="d-block text-gray-dark">@TOMMY</strong>
                
                I composed various songs through a composition program of a CRP company.
            </p>
            </div>
            <div className="media text-muted pt-3">
            <img data-src="holder.js/32x32?theme=thumb&bg=e83e8c&fg=e83e8c&size=1" alt="" className="mr-2 rounded"/>
            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong className="d-block text-gray-dark">@JUSTIN</strong>
                I am using the CRP company program very well.
            </p>
            </div>
            <div className="media text-muted pt-3">
            <img data-src="holder.js/32x32?theme=thumb&bg=e83e8c&fg=e83e8c&size=1" alt="" className="mr-2 rounded"/>
            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong className="d-block text-gray-dark">@KYLE</strong>
                I think chatbot and voice bot functions are really useful.
            </p>
            </div>
            <div className="media text-muted pt-3">
            <img data-src="holder.js/32x32?theme=thumb&bg=6f42c1&fg=6f42c1&size=1" alt="" className="mr-2 rounded"/>
            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong className="d-block text-gray-dark">@SILVIA</strong>
                I was curious about the song that came out in the cafe, but I was able to find it through the music recognition program.
            </p>
            </div>
            
            <small className="d-block text-right mt-3">
            <a href="/community/list">업데이트</a>
            </small>
        </div>
        <a href="/community/board"><button type="submit" className="btn btn-outline-dark">글쓰기</button></a>
        <a href="#" className={style.float}>
            <img src='https://ifh.cc/g/5y48Hl.png' className={style.my} style={{width:40+"px", height:40+"px"}}/>
        </a>
    </>)
}

export default UpdateList;