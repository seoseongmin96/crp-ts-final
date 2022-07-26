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

        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"  aria-expanded="false">
        회사소개
        </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a className="dropdown-item" href="/company/profile">개발자들</a></li>
        <li><a className="dropdown-item" href="/company/oursite">사이트 소개</a></li>
       
    </ul>
    </li>

    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"  aria-expanded="false">
        게시판
        </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a className="dropdown-item" href="/boards/addBoard">글쓰기</a></li>
        <li><a className="dropdown-item" href="/boards/allBoardList">게시판 목록</a></li>
       
    </ul>
    </li>

    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"  aria-expanded="false">
        프로그램
        </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a className="dropdown-item" href="/common/select">표절 프로그램</a></li>
        <li><a className="dropdown-item" href="/common/select">분석 프로그램</a></li>
        <li><a className="dropdown-item" href="/common/select">작사 프로그램</a></li>
       
    </ul>
    </li>

          <li className="nav-item">
            <a className="nav-link" href="/company/aboutSite">관련 사이트</a>
          </li>
          

        
        </ul>
        
      </div>
       
    </div>
  </nav>
  );
}

export default Nav