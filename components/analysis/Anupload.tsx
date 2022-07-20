import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import style from '@/styles/Float.module.css'

const fileTypes = ["JPG", "PNG", "GIF"];

type Props = {
    onChange : (e: React.FormEvent<HTMLInputElement> | any ) => void
}
const AnUpload: React.FC<Props> = ({onChange}) => {
    return (
        <div className={style.container}>
            <form action="/analysis/analysis">
              <FileUploader onChange={onChange} name="file" types={fileTypes} /> <br/>
              <button type="submit" className={style.button}>악보 업로드</button>
            </form>
            <a href="#" className={style.float}>
              <img src='https://ifh.cc/g/5y48Hl.png' className={style.my} style={{width:40+"px", height:40+"px"}}/>
          </a>
        </div>
    );
}

export default AnUpload;