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

const barGroups = svg.selectAll("g")
        .data(dataset)
        .enter()
        .append("g")
        .attr("transform", (d, i) => 'translate(0, ${i * (barHeight + barMargin)})');

barGroups.append("rect")
        .attr("class", "bar")
        .attr("width", 0)
        .attr("height", barHeight)
        .transition()
        .duration(800)
        .attr("width", d => xScale(d));

barGroups.append("text")
        .attr("x", d => xScale(d) + 5)
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(d => d);