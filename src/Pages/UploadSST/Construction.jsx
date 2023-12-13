import Urls from "./Urls";
import { useState } from "react";
import GetToken from "../../GetToken";
import Button from "../../Components/Button";

// eslint-disable-next-line react/prop-types
function Construction({ triggle, setTriggle }) {
  const [addUrl, setAddUrl] = useState([]);
  const[nameForTest, setNameForTest] = useState('');
  const[urlsData, setUrlsData] = useState({});
  

  const addNewUrl = () => {
    const newUrl = <Urls setUrlsData={setUrlsData} />;
    
    setAddUrl([...addUrl, newUrl]);
  };
  const closeModal = () => {
    setTriggle(false);
    setAddUrl([]);
  };

  function createTest() {
   
    fetch('/api/contructSST', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': GetToken(),
        },

        body: JSON.stringify({
          "name": nameForTest,
          "sstArray": [
              {
                  "allowWarnings": false,
                  "allowedConnections": true,
                  "linksReport": false,
                  "cookies": false,
                  "coverage": false,
                  "lighthouse": false,
                  "logRequests": false,
                  "metrics": false,
                  "login": false,
                  "name": urlsData.testName,
                  "pageTimeout": 60000,
                  "screenshot": false,
                  "site": "google",
                  "url": urlsData.urlName,
                  "fTimestamp": Date.now(),
                  "throttling": false
              }
          ],
          "keep": true
        }),
    })
        .then(() => closeModal());
}

  console.log(nameForTest);
  return triggle ? (
    <div className="popup">
      <div className="popup-content">
        <h2>Edit SST array</h2>
        <div className="popup-header">
          <div className="popup-name-div">
            <input className="test-name-input" 
              value={nameForTest}
              onChange={e => setNameForTest(e.target.value)}
              placeholder="Add name for test">
            </input>
          </div>
          <div className="urlButtons">
          <Button btnName="Add Url" color="#009688" onClick={() => addNewUrl()} />
            <button className="add-login-button">Add Login</button>
            
          </div>
        </div>
        <div className="table-url">
          <table >
            <thead className="results-tb-head">
              <tr className="results-tr">
                <th className="th-results">name</th>
                <th className="th-results">url</th>
                <th className="th-results">lighthouse</th>
                <th className="th-results">linksReport</th>
                <th className="th-results">screenshot</th>
                <th className="th-results">pageTimeout</th>
                <th className="th-results">allowConnections</th>
                <th className="th-results">mobile</th>
                <th className="th-results">throttling (3gFast)</th>
                <th className="th-results">waitForSelector</th>
                <th className="th-results">clickSelector</th>
              </tr>
            </thead>
            <tbody className="results-tb-body">
              {addUrl.map((url, index) => (
                <tr key={index}>{url}</tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="urlButtons">
        <Button btnName="Close" color="#ff5252" onClick={() => closeModal()} />
        <Button btnName="Save" color="#009688" onClick={() => createTest()} />
       
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Construction;
