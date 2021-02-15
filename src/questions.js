import react from 'react';
import questions from './data';
import Question from './question';

const Questions =()=>{
    // const {id, title, info} = questions;
    return(
        <div className='questions'>
            {questions.map((quest)=>{
                return(
                    <Question key={quest.id} title={quest.title} info={quest.info} />
                )
            })}
        </div>
    )
    
};

export default Questions;