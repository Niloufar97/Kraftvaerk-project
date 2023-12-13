import React, { useEffect, useState } from "react";
import { PieChart, Pie } from 'recharts';
import GetToken from "./../GetToken/"

function CircleDiagram() {

    const [testResults, setTestResults] = useState([]);
    const [passedTests, setPassedTests] = useState(0);
    const [failedTests, setFailedTests] = useState(0);
    const [allTests, setAllTests] = useState(0);



    useEffect(() => {
        fetch('/api/getResults', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': GetToken(),
            },
        })
            .then(response => response.json())
            .then(data => setTestResults(data));
    }, []);



    let passTests = 0;
    const getPassedTotal = (testResults) => {
        passTests = 0;
        testResults.map((testResult) => {
            passTests += testResult.passedTotal;
        })
        return passTests;
    }


    let failTests = 0;
    const getFailedTotal = (testResults) => {
        failTests = 0;
        testResults.map((testResult) => {
            failTests += testResult.failedTotal;
        })
        return failTests;
    }

    const data = [
        { name: "passed", tests: getPassedTotal(testResults)},
        { name: "failed", tests: getFailedTotal(testResults)}
    ]

    const renderCustomizedLabel = ({
        x, y, name, tests
      }) => {
        return (
          <text className="chart-legend" x={x} y={y} fill="#e0e0e3" textAnchor="middle"  dominantBaseline="central">
            {name} - {tests}
          </text>
        );
      };

    return (
        <div className="home-container">
            <div className="upper-diagram-container">
                <h2 className="upper-diagram-head">SST OVERVIEW</h2>
                <h3 className="upper-diagram-head-2">(STANDART SMOKE TEST)</h3>
                <PieChart width={550} height={350}>
                    <Pie key={data.name} data={data} label={renderCustomizedLabel} dataKey="tests" outerRadius={150} fill="rgb(85, 173, 54)" />
                </PieChart>
            </div>
        </div>
    )
};

export default CircleDiagram;
