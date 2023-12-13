import React from "react";
import GoToUrlButton from "./GoToUrlButton";
import AdditionalDetailsButton from "./AdditionalDetailsButton";
import Button from "../Button";

function ResultsDetailsSST() {
    const date = new Date();
    const resultsData = [
        {
            id: 1,
            testName: "Test1",
            initBy: "redi-school",
            status: "done",
            result: "0 of 1 passed",
            time: { date },
            duration: "0.06 sec",
            queueDuration: "1.73 sec",
            errorCount: 1,
            warningsCount: 0,
            url: "https://google.com/"
        },
        {
            id: 2,
            testName: "Test2",
            initBy: "redi-school",
            status: "done",
            result: "1 of 1 passed",
            time: { date },
            duration: "0.10 sec",
            queueDuration: "0.93 sec",
            errorCount: 1,
            warningsCount: 0,
            url: "https://www.w3schools.com/"
        }
    ];

    const resultDetails = resultsData[0];

    console.log(resultDetails.url);

    return (
        <div className="detailsSST-container">


            <div className="detailsSST-text-area">
                <h2 className="dtl-h2">Combined Averages</h2>
                <h3 className="dtl-h3">Overall results:</h3>
                <p className="dtl-p">Name: {resultDetails.testName}</p>
                <p className="dtl-p">Uploaded name: {resultDetails.testName}</p>
                <p className="dtl-p">ErrorsCount: {resultDetails.errorCount}</p>
                <p className="dtl-p">warningsCount: {resultDetails.warningsCount}</p>
                <p className="dtl-p">Passed: {resultDetails.status}</p>
                <p className="dtl-p">InitBy: {resultDetails.initBy}</p>
                <p className="dtl-p">Executed on: </p>
                <p className="dtl-p">Ran for: {resultDetails.duration}</p>
            </div>



            <div className="results-table">
                <table>
                    <thead className="results-tb-head">
                        <tr className="results-tr">
                            <th className="th-results">Status</th>
                            <th className="th-results">Site name</th>
                            <th className="th-results">Errors</th>
                            <th className="th-results">Warnings</th>
                            <th className="th-results">Broken links</th>
                            <th className="th-results">Performance</th>
                            <th className="th-results">Accessibility</th>
                            <th className="th-results">Best practices</th>
                            <th className="th-results">SEO Start time</th>
                            <th className="th-results">Start time</th>
                            <th className="th-results">End time</th>
                            <th className="th-results"></th>
                            <th className="th-results"></th>
                        </tr>
                    </thead>
                    <tbody className="results-tb-body">
                       
                                <tr className="results-tb-tr-body" key={resultDetails.id}>
                                    <td className="td-results">{resultDetails.status}</td>
                                    <td className="td-results">{resultDetails.initBy}</td>
                                    <td className="td-results">{resultDetails.status}</td>
                                    <td className="td-results">{resultDetails.result}</td>
                                    <td className="td-results"></td>
                                    <td className="td-results">{resultDetails.duration}</td>
                                    <td className="td-results">{resultDetails.queueDuration}</td>
                                    <td className="td-results"></td>
                                    <td className="td-results"></td>
                                    <td className="td-results"></td>
                                    <td className="td-results"></td>
                                    <td className="td-results">{<GoToUrlButton url={resultDetails.url}/>}</td>
                                    <td className="td-results">{<Button btnName="Details" color="#009688"/>}</td>
                                </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default ResultsDetailsSST;