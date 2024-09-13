import { useNavigate } from "react-router"
import { useEffect, useState } from 'react'
import { aumentarCont, printCont, returnCont, resetCont } from './Cont'



const Results = () => {

    var cont = returnCont();
    var finalScore = cont * 10;

    const navigate = useNavigate();

    const exitSurvey = () => {
        submitScore();
        navigate('/home');
        printCont()
    }

    const [avgScore,setAvgScore]  = useState(0.0)
    var [references,setReferences] = useState([{}]);
    const [promedio] = useState({
        score : finalScore
    });

    const fetchAvgScore = async () => {
        const response = await fetch ("http://localhost:3000/score");
        const data = await response.json();
        setAvgScore(data[0].promedio_general);
        console.log(avgScore);
    };

    const submitScore = async () => {
        const res = await fetch ("http://localhost:3000/score", {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(promedio),
        });
    }

    const fetchReferences = async () => {
        const response = await fetch ("http://localhost:3000/reference")
        const data = await response.json();
        console.log(data);
        references = data;
        console.log (references);
        console.log (references.length);
    }

    useEffect (() => {
        fetchReferences();
        fetchAvgScore();
    }, [])

    return (
        <div className=" flex flex-col bg-[#FFF8E8] w-screen h-screen items-center">
                
            <div className=" flex justify-center h-[70px] w-[1000px] bg-[#16325B] rounded-xl items-center text-white mt-[50px]  font-medium font-style: italic text-lg">
                Despertando Saberes: Racismo en México
            </div>

            <div className="flex flex-row">
                <div className="flex flex-col justify-center h-[200px] w-[300px] bg-[#458088] rounded-xl items-center text-white mt-[25px] font-medium font-style: italic text-xl text-center px-3 mr-[100px]">
                    <div>
                        Tu score en esta encuesta es...
                    </div>
                    
                    <div className="mt-3 text-3xl">
                        {finalScore}
                    </div>
                </div>

                <div className="flex flex-col justify-center h-[200px] w-[300px] bg-[#458088] rounded-xl items-center text-white mt-[25px] font-medium font-style: italic text-base text-center px-3">
                    <div>
                        El score promedio de los usuarios es:
                    </div>
                    
                    <div className="mt-3 text-3xl">
                        {avgScore}
                    </div>

                    <div className="mt-3">
                        Compáralo con tu score y reflexiona
                    </div>

                </div>
            </div>

            <div className="flex flex flex-col justify-center h-[350px] w-[600px] bg-[#76ABA1] rounded-xl items-center text-white px-3 font-medium font-style: italic text-base text-center mt-5 mb-5">
                <div className=" py-3 mt-1 mb-5">
                    Si quieres mejorar tu score y más conciente acerca del racismo en México, puedes visitar las siguientes referencias:
                </div>
                <div className="text-center flex flex-col h-[200px] w-[500px] bg-[#458088] overflow-y-auto rounded-xl flex justify-center items-center font-medium font-style: italic text-xs text-">
                    <div className="mt-[0px] px-2 text-[#458088]">
                        https://img1.wsimg.com/blobby/go/2162eb29-0e52-4c83-bfc7-3b4e7a757f73/Informe%20Sombra.pdf
                    </div>
                    <div className="py-3 px-2">
                    https://lausanne.org/es/global-analysis/justicia-racial-en-mexico-y-america-latina?gad_source=1&gclid=CjwKCAjwxY-3BhAuEiwAu7Y6s-ITPV2S3-ZD_4CvzvwJD9fNzNywUuwHEIvI0G9w4mj5vT_WjUVFXxoCYRoQAvD_BwE
                    </div>
                    <div className="py-3 px-2">
                        https://img1.wsimg.com/blobby/go/2162eb29-0e52-4c83-bfc7-3b4e7a757f73/Informe%20Sombra.pdf
                    </div>
                    <div className="py-3 px-2">
                        https://www.cephcis.unam.mx/wp-content/uploads/2020/04/14-elites.pdf
                    </div>
                    <div className="py-3 px-2">
                        https://img1.wsimg.com/blobby/go/2162eb29-0e52-4c83-bfc7-3b4e7a757f73/Durban.pdf
                    </div>
                </div>
                
            </div>

                <button onClick={exitSurvey} className="flex justify-center h-[20px] w-[400px] bg-[#16325B] rounded-xl items-center text-white font-medium font-style: italic text-base py-5 px-3 mb-5">
                    Terminar encuesta
                </button>
                
        </div>
    )
};

export default Results;