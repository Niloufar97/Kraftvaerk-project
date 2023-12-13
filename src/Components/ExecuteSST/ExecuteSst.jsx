import React, { useState, useEffect } from "react";
import "./ExecuteSst.css";
import GetToken from "../../GetToken";
import Button from "../Button";
import ResultPagesHeader from "../ResultPagesHeader";
import TableFooter from "../TableFooter";

function ExecuteSst() {

  const [testsData, setTestsData] = useState([]);

  useEffect(() => {
    updatePage()
  }, []);

  function updatePage() {
    fetch('/api/getTests', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': GetToken(),
      },
    })
      .then(response => response.json())
      .then(data => setTestsData(data.sort((a, b) => {
        return new Date(b.Timestamp).getTime() - new Date(a.Timestamp).getTime()
      })));
  }

  function deleteTest(testId, runId) {
    fetch('/api/deleteTests', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': GetToken(),
      },

      body: JSON.stringify({
        "ids": [
          {
            "testId": testId,
            "runnerId": runId,
          }
        ]
      }),
    })
      .then(() => updatePage());
  }

  function executeTest(testId, testName) {
    fetch('/api/runSIT', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': GetToken(),
      },

      body: JSON.stringify({
        "testName": testName,
        "type": "SST",
        "id": testId,
        "notify": false
      }),
    })
      .then(() => alert("Your test is being executed"));
  }

  return (
    <>
      <div className="execute-container">
        <ResultPagesHeader />

        <div className="tableDiv">
          <table>
            <thead className="results-tb-head">
              <tr>
                <th>TestName</th>
                <th>Uploaded By</th>
                <th>Uploadtime</th>
                <th>Last execute</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody className="results-tb-body">
              {testsData.map((testData) => {
                return (
                  <tr key={testData.RowKey}>
                    <td>{testData.testName}</td>
                    <td>{testData.uploadedBy}</td>
                    <td>{new Date(testData.Timestamp).toLocaleString()}</td>
                    <td>{new Date(testData.Timestamp).toLocaleString()}</td>
                    <td>
                      <Button btnName="Execute" color="#448aff" onClick={() => executeTest(testData.RowKey, testData.testName)}/>
                    </td>
                    <td>
                      <Button btnName="Edit" color="#009688" />
                    </td>
                    <td>
                      <Button btnName="Delete" color="#ff5252" onClick={() => deleteTest(testData.sstjson, testData.RowKey)} />
                    </td>
                  </tr>
                )
              })}

            </tbody>
            <TableFooter data={testsData}/>
          </table>
        </div>
      </div>
    </>
  );
}
export default ExecuteSst;
