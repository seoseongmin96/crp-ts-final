import { Article} from "@/modules/types";
import axios, { AxiosResponse } from "axios";
const SERVER = process.env.NEXT_PUBLIC_SERVER
const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
}

export const writeArticle = async (
    writeData: Article) => {
        try {
            await axios.post(`${SERVER}/articles/write`, writeData, {headers})            
        } catch (err) {
            return err;
        }
    }


export const removeBoard = async(
    removeForData : Article
) => {
    try{
        await axios.delete(`${SERVER}/articles/delete`, {data : removeForData})
    } catch (err) {
        return(err);
    }
}

export const writeComment = async(
    writeComment : Article
) => {
    try{
        console.log('>>')
        await axios.post(`${SERVER}/articles/write`, writeComment, {headers})
    } catch (err){
        return(err)
    }
}

/** 
export const findComment = async (
    commentList: Article
) => {
    try {
        console.log('>>' + JSON.stringify(commentList))
        const response = await axios.post(`${SERVER}/list/comment`, commentList, {headers})
        console.log('>>' + JSON.stringify(response.data))
        return response.data
    } catch(err) {
        return (err)
    }
}
*/