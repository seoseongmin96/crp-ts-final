import React, { useState } from 'react'
import style from '@/styles/Table.module.css'


type Props = {
  onChange : (e: React.FormEvent<HTMLInputElement> | any ) => void
  onSubmit : (e: React.FormEvent<HTMLFormElement> ) => void
  
}

const FileUploader: React.FC<Props> = ({onChange, onSubmit }: Props) => {
  

  return (
  <div>
    <form onSubmit={onSubmit}>
    <div>
      <div className="col-md-3 text-center m-auto">
    <h1 className={style.h1}> <br/>
      파일을 업로드 하세요
    </h1>
    </div>
    <div className="input-group p-5">
      <input onChange={onChange} type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
      <button className="btn btn-outline-secondary" type="submit" id="inputGroupFileAddon04">
        <h5>등록</h5>
      </button>
    </div>
    </div>
    </form>
    </div>
  )
}
export default FileUploader