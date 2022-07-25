import React, { useState } from "react";


type Props = {
    onChange : (e: React.FormEvent<HTMLInputElement> | any ) => void
    onSubmit : (e: React.FormEvent<HTMLFormElement> ) => void
    
}

const FileUpload: React.FC<Props> = ({onChange, onSubmit}) =>{
  //파일 미리볼 url을 저장해줄 state
  const [fileImage, setFileImage] = useState("");

  // 파일 저장
  const handleChangeFileImage = (e:any) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSaveFileImage = () => {
    alert(`파일명 : ***jpg`)
  };


  // 파일 삭제
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };

  return (<div className="col-md-3 text-center m-auto">
    <form onSubmit={onSubmit}><br/>
      <h1>이미지 미리보기</h1> <br/>
      <table>
        <tbody>
          <tr>
            
            <td>
              <div>
                {fileImage && (
                  <img
                    alt="sample"
                    src={fileImage}
                    style={{ margin: "auto" }}
                  />
                )}
                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <input
                    onChange={handleChangeFileImage}
                    name="imgUpload"
                    type="file"
                    accept="image/*"
                    
                  /><br/><br/><br/>

                    <button
                    style={{
                      backgroundColor: "gray",
                      color: "white",
                      width: "70px",
                      height: "40px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleSaveFileImage()}
                  >
                    업로드
                  </button>
                  <button
                    style={{
                      backgroundColor: "gray",
                      color: "white",
                      width: "55px",
                      height: "40px",
                      cursor: "pointer",
                      
                    }}
                    onClick={() => deleteFileImage()}
                  >
                    삭제
                  </button> 
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
    </div>
  );
}

export default FileUpload;