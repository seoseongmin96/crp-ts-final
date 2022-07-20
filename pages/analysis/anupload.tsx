import React, {useState} from 'react';
import { NextPage } from 'next';
import AnUpload from '@/components/analysis/Anupload';

const AnUploadPage: NextPage = () =>{
    const onChange =(e: React.FormEvent<HTMLInputElement> ) => {
        e.preventDefault() 
    }
    return <AnUpload onChange={onChange}/>
}
export default AnUploadPage;