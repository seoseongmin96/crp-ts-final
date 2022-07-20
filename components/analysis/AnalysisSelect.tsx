import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];
type Props = {
    onChange : (e: React.FormEvent<HTMLInputElement> | any ) => void
   
  }
const AnalysisSelect : React.FC<Props> = ({onChange}) => {
    return (
        <div style={{margin: "0 auto"}}>
            <form action="/analysis/analysis">
              <FileUploader onChange={onChange} name="file" types={fileTypes} /> <br/>
              <button type="submit" className="btn btn-outline-dark">악보 등록</button>
            </form>
        </div>
    );
}

export default AnalysisSelect;