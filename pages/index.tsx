import Home from "@/components/Home";
import type { NextPage } from "next";
/**
 * 
 * 콜라보 테스트
 * 2022-06-21
 * Park...
 * 
 * 
*/
const HomePage: NextPage = () => {
  
  return(
    <Home onClick={function (e: any): void {
      throw new Error("Function not implemented.");
    } }/>
  )
}
export default HomePage