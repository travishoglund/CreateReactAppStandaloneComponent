import React, { Component } from "react";
const PolarAreaChart = require("react-chartjs").PolarArea;

const chartData = [
    {
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "Red",
        value: 104.75055075947729
    },
    {
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green",
        value: 126.43910862421887
    },
    {
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow",
        value: 190.91684267040236
    },
    {
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "Grey",
        value: 147.21954393030927
    },
    {
        color: "#4D5360",
        highlight: "#616774",
        label: "Dark Grey",
        value: 88.86054149229803
    }
];

const chartOptions = {
    animateRotate: true,
    animation: true,
    maintainAspectRatio: true,
    responsive: true,
    scaleBeginAtZero: true,
    scaleIntegersOnly: true,
    scaleShowLabelBackdrop: true,
    scaleShowLabels: true,
    scaleShowLine: true,
    segmentShowStroke: true,
    showScale: true,
    showTooltips: true
};

class PieChart extends Component{

    render() {
        return <PolarAreaChart data={chartData} options={chartOptions}/>
    }

}

export default PieChart;

