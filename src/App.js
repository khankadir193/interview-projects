import './App.css';
import AccordianComp from './Accordian/AccordianComp';
import GitHubProfileFinder from './GitHubProfile/GitHubProfileFinder';
import QrGenerator from './Qr-code-generator/QrGenerator';
import QrReader from './Qr-code-generator/QrReader';

function App() {
  return (
    <div>
      {/* accordion component calling */}
      {/* <AccordianComp name="AccordionComponent" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."/> */}
      {/* <AccordianComp name="second Accordion comp" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."/> */}
      {/* gihubprofile project */}
      {/* <GitHubProfileFinder /> */}
      {/* <QrGenerator value="7985132148" /> */}
      <QrReader upiID ='abdulkadirk059@oksbi' name="Abdul Kadir Khan" amount='100' note='googlePay' />
    </div>
  );
}

export default App;
