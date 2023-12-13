import { useState } from "react";

function Urls({setUrlsData}) {

  const[testName, setTestName] = useState('');
  const[urlName, setUrlName] = useState('');
  
  console.log("testname = " + testName);
  console.log("url = " + urlName)
  return (
    <>
        <td>
          <input type="text" placeholder="Ex. MyTest" 
           value={testName}
           onChange={e => {
            setTestName(e.target.value)
            setUrlsData({testName, urlName})
          }}
           />
        </td>
        <td>
          <input type="text" placeholder="Ex. http://www.mysite.com"
          value={urlName}
           onChange={e => {
           setUrlName(e.target.value)
           setUrlsData({testName, urlName})
        }} 
          />
        </td>
        <td>
          <input type="checkbox" />
        </td>
        <td>
          <input type="checkbox" />
        </td>
        <td>
          <input type="checkbox" />
        </td>
        <td>
          <input type="number" placeholder="6000"/>
        </td>
        <td>
          <input type="checkbox" />
        </td>
        <td>
          <input type="checkbox" />
        </td>
        <td>
          <select name="" id="throttling-select">
            <option value="None"></option>
            <option value="3g">3g</option>
            <option value="fast3g">fast3g</option>
            <option value="4g">4g</option>
          </select>
        </td>
        <td>
          <input type="text" placeholder="Ex. '.my-class'"/>
        </td>
        <td>
          <input type="checkbox" />
        </td>
        <td>
          <button className="remove-url">Remove</button>
        </td>
    </>
  );
}

export default Urls;