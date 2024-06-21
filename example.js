//U22562170
const dataset = [100, 420, 230, 850, 560, 925];

const svgWidth = 500;
const barHeight = 20;
const barMargin = 1;
const svgHeight = (barHeight + barMargin) * dataset.length;

const svg = d3.select("body")
        .append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight);
    
const xScale = d3.scaleliner()
        .domain([0, d3.max(dataset)])
        .range([50, svgWidth]);

