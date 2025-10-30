import React, { useState, useRef, useEffect } from 'react';
import { districtPaths } from '../data/tamilNaduSvgPaths';

const TamilNaduMap = ({ selectedDistrict, onDistrictSelect }) => {
  const [hoveredDistrict, setHoveredDistrict] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const svgRef = useRef(null);

  const handleMouseMove = (e) => {
    if (svgRef.current) {
      const CTM = svgRef.current.getScreenCTM();
      if (CTM) {
        setTooltipPos({
          x: (e.clientX - CTM.e) / CTM.a,
          y: (e.clientY - CTM.f) / CTM.d,
        });
      }
    }
  };

  useEffect(() => {
    const svgEl = svgRef.current;
    if (svgEl) {
        svgEl.addEventListener('mousemove', handleMouseMove);
        return () => svgEl.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const getDistrictClass = (districtName) => {
    if (selectedDistrict === districtName) {
      return 'fill-primary-600';
    }
    if (hoveredDistrict === districtName) {
      return 'fill-primary-400';
    }
    return 'fill-gray-300';
  };

  return (
    <div className="bg-gray-100 p-2 sm:p-4 rounded-lg border border-gray-200 relative aspect-w-4 aspect-h-5 max-h-[600px]">
      <svg
        ref={svgRef}
        viewBox="0 0 800 900"
        className="w-full h-full"
      >
        <g onMouseLeave={() => setHoveredDistrict(null)}>
          {districtPaths.map((district) => (
            <path
              key={district.id}
              id={district.id}
              d={district.d}
              className={`district-path ${getDistrictClass(district.name)}`}
              onMouseEnter={() => {
                setHoveredDistrict(district.name);
                onDistrictSelect(district.name);
              }}
            />
          ))}
        </g>
        {hoveredDistrict && (
          <g className="pointer-events-none">
            <rect 
              x={tooltipPos.x + 15} 
              y={tooltipPos.y} 
              width={hoveredDistrict.length * 8 + 16} 
              height="30" 
              rx="5"
              className="fill-gray-800/90"
            />
            <text
              x={tooltipPos.x + 23}
              y={tooltipPos.y + 15}
              dy=".3em"
              className="text-sm fill-white font-medium"
            >
              {hoveredDistrict}
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};

export default TamilNaduMap;
