import React, {useState} from 'react';
import { NextPage } from 'next';
import Lyupload from '@/components/music/Lyupload';

const LyUploadPage: NextPage = () =>{
    const onChange =(e: React.FormEvent<HTMLInputElement> ) => {
        e.preventDefault()
         
    }
    
    return <Lyupload onChange={onChange}/>
}
export default LyUploadPage;