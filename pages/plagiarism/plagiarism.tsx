import React, {useState} from 'react';
import Result from '@/components/plagiarism/Plagiarism';
import { NextPage } from 'next';

const PlagiarismPage: NextPage = () =>{

    

    const onChange = (e: React.FormEvent<HTMLInputElement>) =>{
        e.preventDefault()
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }


    return <Result onChange={onChange} onSubmit={onSubmit}/>
}
export default PlagiarismPage;