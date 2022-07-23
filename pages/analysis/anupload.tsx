import React, {useState} from 'react';
import { NextPage } from 'next';
import AnUpload from '@/components/analysis/Anupload';

const AnUploadPage: NextPage = () =>{

    const [content, setContent] = useState("");
    const [uploadedImg, setUploadedImg] = useState({
        fileName: "",
        fillPath: ""
    });
    
    const handleButtonClick = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()

     
       
  
    };
    
    
    const onChange = (e: React.FormEvent<HTMLInputElement> ) => {
        e.preventDefault()
        setContent(e.target.files[0]);
         
      }
      
      const onSubmit = (e: React.FormEvent<HTMLFormElement> ) =>{
        e.preventDefault()
       
      }
      

    return <AnUpload onChange={onChange} onSubmit={ onSubmit}/>
}

export default AnUploadPage;