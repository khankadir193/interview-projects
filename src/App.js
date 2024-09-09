import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import AccordianComp from './Accordian/AccordianComp';
import GitHubProfileFinder from './GitHubProfile/GitHubProfileFinder';
import QrGenerator from './Qr-code-generator/QrGenerator';
import QrReader from './Qr-code-generator/QrReader';
import LightDarkMode from './LightToggle/LightDarkMode';
import ScrollIndicator from './ScrollIndicator/ScrollIndicator';
import TicTacToeApp from './TicTacToe/TicTacToeApp';
import ParentComp from './Excercise/ParentComp';
import TodoList from './TodoApp/TodoList';
import DictComp from './DictionaryApp/DictComp';
import ParentComp2 from './DynamicComponent/ParentComp';
import DynamicChild from './DynamicComponent/DynamicChild';
import DynamicParent from './DynamicComponent/DynamicParent';
import GameComp from './PaperGame.js/GameComp';
import QuizComp from './QuizApp/QuizComp';
import FilpCoin from './CoinApp/FilpCoin';
import LocFinderApp from './LocationFinder/LocFinderApp';
import PaintComp from './PainApp/PaintComp';
import HomeComp from './BlogApp/HomeComp';
import AboutComp from './BlogApp/AboutComp';
import ContainerComp from './BlogApp/ContainerComp';
import BlogComp from './BlogApp/BlogComp';
import ContactComp from './BlogApp/ContactComp';


/**
 * Renders the main application component.
 *
 * @return {JSX.Element} The rendered application component.
 */
function App() {
  return (
    <div>
      {/* Render the AccordianComp component */}
      {/* <AccordianComp name="AccordionComponent" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."/> */}
      {/* <AccordianComp name="second Accordion comp" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."/> */}
      {/* Render the GitHubProfileFinder component */}
      {/* <GitHubProfileFinder /> */}
      {/* Render the QrGenerator component */}
      {/* <QrGenerator value="7985132148" /> */}
      {/* Render the QrReader component */}
      {/* <QrReader upiID ='abdulkadirk059@oksbi' name="Abdul Kadir Khan" amount='100' note='googlePay' /> */}
      {/* Render the LightDarkMode component */}
      {/* <LightDarkMode /> */}
      {/* Render the ScrollIndicator component */}
      {/* <ScrollIndicator /> */}
      {/* tic tac toe */}
      {/* <TicTacToeApp /> */}
      {/* <ParentComp /> */}
      {/* <TodoList /> */}
      {/* <DictComp /> */}
      {/* <ParentComp2 /> */}
      {/* dynamic passing child comp into parent comp as props */}
      {/* <DynamicParent >
        <div>This  is the div content...</div>
        <DynamicChild></DynamicChild>
      </DynamicParent> */}
      {/* <GameComp /> */}
      {/* <QuizComp /> */}
      {/* <FilpCoin /> */}
      {/* <LocFinderApp /> */}
      {/* <PaintComp /> */}

      {/* routing using react router */}
      <Router>
        <ContainerComp />
        <Routes>
          <Route exact path="/" element={<HomeComp />} />
          <Route exact path="/about" element={<AboutComp />} />
          <Route exact path="/blog" element={<BlogComp />} />
          <Route exact path="/contact" element={<ContactComp />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
