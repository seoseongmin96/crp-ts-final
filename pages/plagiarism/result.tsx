import React, {useState} from 'react';
import Result from '@/components/plagiarism/Result';
import { NextPage } from 'next';

const ResultPage: NextPage = () =>{

    const [result, setResult] = useState<any>(null);

    const onChange = (e: React.FormEvent<HTMLInputElement>) =>{
        e.preventDefault()
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }


    return <Result onChange={onChange} onSubmit={onSubmit}/>
}
export default ResultPage;