import style from '@/styles/Float.module.css'
import Link from 'next/link'
import React from 'react'

const List: React.FC = () => {
    return(<>
        <div className="shadow p-3 mb-5 bg-white rounded">
            <h6 className="border-bottom border-gray pb-2 mb-0">자유게시판</h6>
            <div className="media text-muted pt-3">
            <img data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1" alt="" className="mr-2 rounded"/>
            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong className="d-block text-gray-dark">@서성민</strong>
                
                저는 CRP 회사의 작곡 프로그램으로 다양한 작곡을 했습니다.
            </p>
            </div>
            <div className="media text-muted pt-3">
            <img data-src="holder.js/32x32?theme=thumb&bg=e83e8c&fg=e83e8c&size=1" alt="" className="mr-2 rounded"/>
            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong className="d-block text-gray-dark">@권혜민</strong>
                CRP 회사 프로그램을 유용하게 잘 쓰고 있습니다.
            </p>
            </div>
            <div className="media text-muted pt-3">
            <img data-src="holder.js/32x32?theme=thumb&bg=e83e8c&fg=e83e8c&size=1" alt="" className="mr-2 rounded"/>
            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong className="d-block text-gray-dark">@조현국</strong>
                챗봇과 보이스봇 기능이 정말 유용하다고 생각합니다.
            </p>
            </div>
            <div className="media text-muted pt-3">
            <img data-src="holder.js/32x32?theme=thumb&bg=6f42c1&fg=6f42c1&size=1" alt="" className="mr-2 rounded"/>
            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong className="d-block text-gray-dark">@최은아</strong>
                카페에서 나왔던 노래가 궁금했었는데 음원 인식 프로그램으로 찾을 수 있었습니다.
            </p>
            </div>
            
            <small className="d-block text-right mt-3">
            <a href="/community/updateList">업데이트</a>
            </small>
        </div>
        <a href="/community/board"><button type="submit" className="btn btn-outline-dark">글쓰기</button></a>
        <a href="#" className={style.float}>
            <img src='https://ifh.cc/g/5y48Hl.png' className={style.my} style={{width:40+"px", height:40+"px"}}/>
        </a>
    </>)
}

export default List;