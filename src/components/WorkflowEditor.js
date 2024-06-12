// src/components/WorkflowEditor.js

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const WorkflowEditor = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr('width', '100%')
      .attr('height', '600px')
      .style('border', '1px solid black');

    const drag = d3.drag()
      .on('start', function(event, d) {
        d3.select(this).raise().attr('stroke', 'black');
      })
      .on('drag', function(event, d) {
        d3.select(this).attr('x', d.x = event.x).attr('y', d.y = event.y);
      });

    const nodes = [
      { id: 'input', label: 'Input', x: 50, y: 100 },
      { id: 'output', label: 'Output', x: 200, y: 100 },
      { id: 'process', label: 'Process', x: 350, y: 100 }
    ];

    svg.selectAll('rect')
      .data(nodes)
      .enter()
      .append('rect')
      .attr('x', d => d.x)
      .attr('y', d => d.y)
      .attr('width', 100)
      .attr('height', 50)
      .attr('fill', 'lightblue')
      .call(drag);

    svg.selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .attr('x', d => d.x + 50)
      .attr('y', d => d.y + 25)
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .text(d => d.label);
  }, []);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default WorkflowEditor;
