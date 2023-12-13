import React, { useEffect, useState } from "react";
import GetToken from "../../GetToken";
import moment from "moment/moment";
import Button from "../Button";
import { useNavigate } from 'react-router-dom';
import ResultPagesHeader from "../ResultPagesHeader";
import TableFooter from "../TableFooter";


function ResultsSST() {

    const [resultsData, setResultsData] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        updatePage()
    }, []);


    function updatePage() {
        fetch('/api/getResults', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': GetToken(),
            },
        })
            .then(response => response.json())
            .then(data => setResultsData(data.sort((a, b) => {
                return new Date(b.Timestamp).getTime() - new Date(a.Timestamp).getTime()
              })));
    };

    function deleteResult(rowID) {
        console.log(rowID);
        fetch('/api/deleteResults', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': GetToken(),
            },

            body: JSON.stringify({
                "tests": [
                    {
                        "RowKey": rowID,
                    }
                ]
            }),
        })
            .then(() => updatePage());
    }
    let a = resultsData.length
    console.log(a)
    return (
        <div className="results-container">

            <ResultPagesHeader />
            <div className="results-table">
                <table>
                    <thead className="results-tb-head">
                        <tr className="results-tr">
                            <th className="th-results">TestName</th>
                            <th className="th-results">InitBy</th>
                            <th className="th-results">Status</th>
                            <th className="th-results">Result</th>
                            <th className="th-results">Time</th>
                            <th className="th-results">Duration</th>
                            <th className="th-results">Queue duration</th>
                            <th className="th-results"></th>
                            <th className="th-results"></th>
                        </tr>
                    </thead>
                    <tbody className="results-tb-body">
                        {resultsData.map((resultData) => {
                            return (
                                <tr className="results-tb-tr-body" key={resultData.RowKey}>
                                    <td className="td-results">{resultData.testName}</td>
                                    <td className="td-results">{resultData.initBy}</td>
                                    <td className="td-results">{resultData.testStatus.overallStatus}</td>
                                    <td className="td-results">{resultData.passedTotal} of {resultData.passedTotal + resultData.failedTotal}</td>
                                    <td className="td-results">{new Date(resultData.Timestamp).toLocaleString()}</td>
                                    <td className="td-results">{moment(resultData.timeOfCompletion - resultData.timeOfInit).format("mm:ss") + " s"}</td>
                                    <td className="td-results">{moment(resultData.endOfQueue - resultData.timeOfInit).format("mm:ss") + " s"}</td>
                                    <td className="td-results">{<Button btnName="Detail" color="#009688" onClick={() => navigate('/SST/details')} />}</td>
                                    <td className="td-results">{<Button btnName="Delete" color="#ff5252" onClick={() => deleteResult(resultData.RowKey)} />}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <TableFooter data={resultsData} />
                    
                </table>

            </div>
        </div>
    )
};

export default ResultsSST;