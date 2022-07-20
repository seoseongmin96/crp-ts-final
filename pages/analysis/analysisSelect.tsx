import React, {useState} from 'react';
import AnalysisSelect from '@/components/analysis/AnalysisSelect';
import { NextPage } from 'next';

const AnalysisSelectPage: NextPage = () =>{

    const onChange = (e: React.FormEvent<HTMLInputElement> ) => {
        e.preventDefault()

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    }
    return <AnalysisSelect onChange={onChange}/>
}
export default AnalysisSelectPage;