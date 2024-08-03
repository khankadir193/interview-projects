import './App.css';
import AccordianComp from './Accordian/AccordianComp';
import GitHubProfileFinder from './GitHubProfile/GitHubProfileFinder';
import QrGenerator from './Qr-code-generator/QrGenerator';
import QrReader from './Qr-code-generator/QrReader';
import LightDarkMode from './LightToggle/LightDarkMode';
import ScrollIndicator from './ScrollIndicator/ScrollIndicator';


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
      <ScrollIndicator />
    </div>
  );
}


export default App;
