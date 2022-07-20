import React from 'react';

const ContactUs: React.FC = () =>{
    return(<>
        <div style={{width: 800+"px"}}>
            <form>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form4Example1">이름</label>
                    <input type="text" id="form4Example1" className="form-control" />
                </div>
    
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form4Example2">이메일</label>
                    <input type="email" id="form4Example2" className="form-control" />
                </div>
                
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form4Example3">문의내용</label>
                    <textarea className="form-control" id="form4Example3" rows={4}></textarea>
                </div>
                
                <div className="form-check d-flex justify-content-center mb-4">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form4Example4" checked />
                    <label className="form-check-label" htmlFor="form4Example4">
                        문의할 내용을 보내주시기 바랍니다.
                    </label>
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-4">제출하기</button>
            </form>
        </div>
        </>)
}

export default ContactUs;