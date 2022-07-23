import 'bootstrap/dist/css/bootstrap.css'
import React, {useState} from 'react'
import Link from 'next/link'


const Nav: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
    <div className="container-fluid">
      <a className="navbar-brand" href="/"><img src="https://ifh.cc/g/KtohFH.png" style={{width:110+"px"}}/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
        <li className="nav-item">
            <a className="nav-link" href="/company/profile">개발자들</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/company/oursite">사이트 소개</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/site/aboutSite">관련 사이트</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="/plagiarism/select"> 프로그램 </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/upload/fileupload"> 파일업로드 </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/upload/dragdrop"> 드래그업로드 </a>
          </li>
        </ul>
        
      </div>
       
    </div>
  </nav>
  );
}

export default Nav