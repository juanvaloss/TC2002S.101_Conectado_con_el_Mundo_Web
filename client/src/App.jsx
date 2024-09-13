import { Routes, Route } from 'react-router';
import Question1 from './assets/questions/Question1';
import Question2 from './assets/questions/Question2';
import Question3 from './assets/questions/Question3';
import Question4 from './assets/questions/Question4';
import Question5 from './assets/questions/Question5';
import Question6 from './assets/questions/Question6';
import Question7 from './assets/questions/Question7';
import Question8 from './assets/questions/Question8';
import Question9 from './assets/questions/Question9';
import Question10 from './assets/questions/Question10';
import Results from './assets/Results';
import Home from './assets/Home';

function App() {

  return (
    <Routes>

      <Route path="/question1" element={<Question1/>} />
      <Route path="/question2" element={<Question2/>} />
      <Route path="/question3" element={<Question3/>} />
      <Route path="/question4" element={<Question4/>} />
      <Route path="/question5" element={<Question5/>} />
      <Route path="/question6" element={<Question6/>} />
      <Route path="/question7" element={<Question7/>} />
      <Route path="/question8" element={<Question8/>} />
      <Route path="/question9" element={<Question9/>} />
      <Route path="/question10" element={<Question10/>} />
      <Route path ='/results' element = {<Results/>} />
      <Route path ='/' element = {<Home/>} />

    </Routes>
  );
}

export default App;