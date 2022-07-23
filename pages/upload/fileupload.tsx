import { NextPage } from 'next';
import React, {useState} from 'react';
import FileUpload from '@/components/upload/FileUpload';



const FileUploadPage : NextPage = () => {
    const [fileImage, setFileImage] = useState("");

    const onChange = ( e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }

  return <FileUpload onChange={onChange} onSubmit={onSubmit}/>

}
export default FileUploadPage
