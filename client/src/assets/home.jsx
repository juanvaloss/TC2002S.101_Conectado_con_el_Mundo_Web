import { useNavigate } from "react-router"
import { useEffect, useState } from 'react'
import { aumentarCont, printCont, returnCont, resetCont } from './Cont'



const Home = () => {

    const navigate = useNavigate();

    const startSurvey = () => {
        navigate('/question1');
    }


    return (
        <div className=" flex justify-center flex-col bg-[#FFF8E8] w-screen h-screen items-center">
                
            <div className=" flex flex-col justify-center h-[170px] w-[650px] bg-[#16325B] rounded-xl items-center text-white mt-[50px]  font-medium font-style: italic text-2xl">
                <div>
                    Despertando Saberes: Racismo en México
                </div>
                <div className="text-xl mt-4">
                    Una iniciativa hecha por Juan Avalos
                </div>
            </div>

            <button onClick={startSurvey} className="flex justify-center h-[20px] w-[400px] bg-[#458088] rounded-xl items-center text-white font-medium font-style: italic text-base py-5 px-3 mb-5 mt-6">
                Iniciar Encuesta
            </button>
                
        </div>
    )
};

export default Home;