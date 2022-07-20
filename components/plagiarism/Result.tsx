import React, {useEffect, useState} from "react"

type Props = {
    onSubmit : (e: React.FormEvent<HTMLFormElement> ) => void
    onChange : (e: React.FormEvent<HTMLInputElement> | any ) => void
}
const Result: React.FC<Props> = ({onChange,onSubmit}) => {

    const onClick = (e: any) => {
        e.preventDefault();
        setClick(1)
    }

    const [click, setClick] = useState(0)
    return(<>
    <form onSubmit={onSubmit}>
        <div >
            <img src="https://cdn.imweb.me/upload/S20200724abcb07db26ecf/0837716fc9c26.jpeg" style={{width:500+"px"}}/> &nbsp;
            <img src="https://t1.daumcdn.net/cfile/blog/216726375580C95335" style={{width:500+"px"}}/>
        </div>
        <br/><br/>
        <h5>검사 결과 ... 악보와 XX.X% 유사합니다.</h5> <br/> <br/>

        <div className="container">
	<h2>작사 키워드</h2><br/><br/>
    
	<select className="form-control">
        
	  <option>기쁨</option>
	  <option>슬픔</option>
  
	</select> <br/><br/>
    
    <button onClick={onClick} type="button" className="btn btn-primary">작사하기</button><br/><br/>
    {click === 1  ? <div className="input-group">
              <span className="input-group-text">
              <h5>
                가사
              </h5>
              </span>
              <textarea name = "content" onChange = {onChange} className="form-control" aria-label="With textarea"></textarea>
            </div>  : null}
    
</div>
</form>
    </>)
}

export default Result;