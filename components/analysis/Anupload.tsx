import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import style from '@/styles/Float.module.css'

const fileTypes = ["JPG", "PNG", "GIF"];

 

const handleButtonClick = () => {
  alert("File Upload")
};


type Props = {
    onChange : (e: React.FormEvent<HTMLInputElement> | any ) => void
    onSubmit : (e: React.FormEvent<HTMLFormElement> ) => void
    
}

const AnUpload: React.FC<Props> = ({onChange, onSubmit}) => {

  
    return (
        <div className={style.container}>
            <form onSubmit={onSubmit}>
              <FileUploader onChange={onChange} name="file" types={fileTypes} /> <br/>
              <button type="submit" className={style.button}>분석할 악보 업로드</button>
            </form>
            <a href="#" className={style.float}>
              <img src='https://ifh.cc/g/5y48Hl.png' className={style.my} style={{width:40+"px", height:40+"px"}}/>
          </a>
        </div>
    );
}

export default AnUpload;