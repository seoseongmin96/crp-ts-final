import React, {useState} from 'react';
import { NextPage } from 'next';
import Upload from '@/components/plagiarism/Upload';

const UploadPage: NextPage = () =>{
    const onChange =(e: React.FormEvent<HTMLInputElement> ) => {
        e.preventDefault() 
    }
    return <Upload onChange={onChange}/>
}
export default UploadPage;