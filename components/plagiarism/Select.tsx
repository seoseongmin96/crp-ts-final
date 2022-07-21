import style from '@/styles/Float.module.css'
import React from 'react'

const Select: React.FC = () => {
    return(<><br/> <br/> <br/> 
            <div className='container h-100'>
            <div className= "row d-flex justify-content-center align-items-center h-100">

            <div className="card" style={{width: 18+"rem"}}>
            <img src="https://img.freepik.com/free-vector/illegal-pirate-paper-document-pirated-content-flat-vector-illustration_124715-1535.jpg" width={"100%"} height={"100%"} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">표절 검사를 확인해보세요</h5> <br/> 
                    <p className="card-text"></p>
                    <a href="/plagiarism/upload" className="btn btn-outline-dark">표절검사</a>
                </div>
            </div> &nbsp; &nbsp;

            <div className="card" style={{width: 18+"rem"}}>
                <img src="https://img.freepik.com/free-vector/data-analysis-illustration-flat-style-design_159144-40.jpg?w=2000" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">악보를 분석해보세요</h5> <br/> 
                        <p className="card-text"></p>
                        <a href="/analysis/anupload" className="btn btn-outline-dark">악보분석</a>
                    </div>
            </div>

            <div className="card" style={{width: 18+"rem"}}>
                <img src="https://ifh.cc/g/H8owSw.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">작사를 해보세요</h5> <br/> 
                        <p className="card-text"></p>
                        <a href="/music/lyupload" className="btn btn-outline-dark">작사하기</a>
                    </div>
            </div>

            </div>
            </div>
        <a href="#" className={style.float}>
            <img src='https://ifh.cc/g/5y48Hl.png' className={style.my} style={{width:40+"px", height:40+"px"}}/>
        </a>

    </>)
}

export default Select;