import { useNavigate } from "react-router"
import { useEffect, useState } from 'react'
import { aumentarCont, printCont} from '../Cont'



const Question1 = () => {

    const navigate = useNavigate();

    
    const goNextQuestion = () => {
        navigate('/question2');
        printCont()
    }

    const correctAnswer = () => {
        printCont()
        navigate('/question2');
        aumentarCont();
        printCont()
    }
    
 
    const [pregunta,setPregunta] = useState('');


    const fetchQuestion = async () => {
        const response = await fetch ("http://localhost:3000/question/1");
        const data = await response.json();
        setPregunta(data[0].pregunta);
    };

    useEffect (() => {
        fetchQuestion();
    }, [])

    return (
        <div className=" flex flex-col bg-[#FFF8E8] w-screen h-screen items-center">
                
            <div className=" flex justify-center h-[70px] w-[1000px] bg-[#16325B] rounded-xl items-center text-white mt-[50px]  font-medium font-style: italic text-lg">
                Despertando Saberes: Racismo en México
            </div>

            <div className="flex justify-center h-[120px] w-[600px] bg-[#458088] rounded-xl items-center text-white mt-[100px] font-medium font-style: italic text-xl">
                {pregunta}
            </div>

            <div className="flex flex-row">
                <button onClick={goNextQuestion} className="flex justify-center h-[70px] w-[300px] bg-[#76ABA1] rounded-xl items-center text-white mt-[100px] font-medium font-style: italic text-xl mr-[120px]">
                    Verdadero
                </button>

                <button onClick={correctAnswer} className="flex justify-center h-[70px] w-[300px] bg-[#76ABA1] rounded-xl items-center text-white mt-[100px] font-medium font-style: italic text-xl">
                    Falso
                </button>
            </div>


                
        </div>
    )
};

export default Question1;