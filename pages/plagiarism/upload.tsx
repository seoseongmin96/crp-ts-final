import React, {useState} from 'react';
import { NextPage } from 'next';
import Upload from '@/components/plagiarism/Upload';

const UploadPage: NextPage = () =>{
    const onChange =(e: React.FormEvent<HTMLInputElement> ) => {
        e.preventDefault()
         
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault() 

    }

    return <Upload onChange={onChange} onSubmit={onSubmit}/>
}
export default UploadPage;