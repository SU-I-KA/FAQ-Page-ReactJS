import react, {useState}  from 'react';
import {FaPlus, FaMinus} from 'react-icons/fa';

const Question = ({id, title, info})=>{
    const [showMore, setShowMore] = useState(false);
    return(
        <div className='question-section'>
            <div className='head'>
                <div className='question'>{title}</div>
                <div className='btn'>
                    <button className='btn-show' onClick={()=>setShowMore(!showMore)}>
                        {showMore?<FaMinus />:<FaPlus />}
                    </button>
                </div>
            </div>
            {showMore? <div className='answer'><p>{info}</p></div> : ''}

            {/* <div className='answer'>
                <p>{showMore? info:''}</p>
            </div> */}
        </div>
    )
};

export default Question;