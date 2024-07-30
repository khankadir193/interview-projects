import './App.css';
import AccordianComp from './Accordian/AccordianComp';
import GitHubProfileFinder from './GitHubProfile/GitHubProfileFinder';
import QrGenerator from './Qr-code-generator/QrGenerator';

function App() {
  return (
    <div>
      {/* accordion component calling */}
      {/* <AccordianComp name="AccordionComponent" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."/> */}
      {/* <AccordianComp name="second Accordion comp" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."/> */}
      {/* gihubprofile project */}
      {/* <GitHubProfileFinder /> */}
      <QrGenerator value="Hello World..!" />
    </div>
  );
}

export default App;
