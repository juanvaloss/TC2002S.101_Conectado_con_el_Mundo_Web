import { useNavigate } from "react-router"
import { useEffect, useState } from 'react'
import { aumentarCont, printCont} from '../Cont'



const Question10 = () => {

    const navigate = useNavigate();

    
    const goNextQuestion = () => {
        navigate('/results');
        printCont()
    }

    const correctAnswer = () => {
        printCont()
        navigate('/results');
        aumentarCont();
        printCont()
    }
    
 
    const [pregunta,setPregunta] = useState('');


    const fetchQuestion = async () => {
        const response = await fetch ("http://localhost:3000/question/10");
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

            <div className="flex justify-center h-[150px] w-[700px] bg-[#458088] rounded-xl items-center text-white mt-[100px] font-medium font-style: italic text-xl text-center px-3">
                {pregunta}
            </div>

            <div className="flex flex-row">
                <button onClick={goNextQuestion} className="flex justify-center h-[70px] w-[400px] bg-[#76ABA1] rounded-xl items-center text-white mt-[100px] font-medium font-style: italic text-base mr-[120px] px-3">
                    Afecta más a los indígenas
                </button>

                <button onClick={goNextQuestion} className="flex justify-center h-[70px] w-[400px] bg-[#76ABA1] rounded-xl items-center text-white mt-[100px] font-medium font-style: italic text-base px-3">
                    Afecta más a los afrodescendientes
                </button>
            </div>

            <div className="flex flex-row">
                <button onClick={goNextQuestion} className="flex justify-center h-[70px] w-[400px] bg-[#76ABA1] rounded-xl items-center text-white mt-[50px] font-medium font-style: italic text-base mr-[120px] px-3">
                    Ninguno de estos grupos es afectado
                </button>

                <button onClick={correctAnswer} className="flex justify-center h-[70px] w-[400px] bg-[#76ABA1] rounded-xl items-center text-white mt-[50px] font-medium font-style: italic text-base px-3">
                    Los 2 son igual de afectados por esta problemática
                </button>
            </div>
                
        </div>
    )
};

export default Question10;