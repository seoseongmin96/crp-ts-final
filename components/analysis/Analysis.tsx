import React from "react";
import styles from "@/styles/Profile.module.css"

const Analysis : React.FC = () => {
    return (<>
        <div>
        <img
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FWFOPQ%2FbtrCQwtuxA6%2FOHLJWJgW43Mgkqa3ImCDpk%2Fimg.jpg"
          width="500"/><br/><br/>
        <table className={styles.customers}>
        <tr>
             <th></th>
             <th>Contact</th>
        </tr>
        <tr>
            <td>악보 연주 좀 해줘</td>
            <td>연주연주연주~~~(midi화)</td>
        </tr>
        <tr>
            <td>예상 연주시간이 얼마야?</td>
            <td>1분 30초 정도 될 것 같아요~</td>
        </tr>
        <tr>
            <td>2분음표 몇개야? </td>
            <td>2분음표는 15개가 쓰인 것 같아요~</td>
        </tr>
        <tr>
            <td>박자는 어떤거 썻어?</td>
            <td>첫 시작은 4분의3박자를 썻는데 중간에 4분의2박자로 한번 변경됐어요~</td>
        </tr>
        <tr>
            <td>조표는 어떻게 쓰였어?</td>
            <td>조표는 샵하나로 시작해서 중간에 플렛으로 3번 바뀌었어요~</td>
        </tr>
        </table>
        </div>
        </>
   )
}

export default Analysis;