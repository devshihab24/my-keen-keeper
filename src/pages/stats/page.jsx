import React, { useContext } from "react";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { ActivityContext } from "../../context/ActivityContext";

const Stats = () => {
    const { activity } = useContext(ActivityContext);
    // console.log(activity);
    const getChartData = (activity) =>{
        const counts = {call:0, video:0, text:0}
        activity.forEach(item => {
            if(counts[item.a_type] !== undefined){
                counts[item.a_type]++;
            }
        });
        return [
            {name: "Call", value: counts.call, fill: "#44CF6C"},
            {name: "Text", value: counts.text, fill: "#034C3C"},
            {name: "Video", value: counts.video, fill: "#32A287"}
        ]
    }
  const data = getChartData(activity);
  return (
    <div className=" flex justify-center items-center py-10">
      
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            nameKey="name"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="fill"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend></Legend>
          <Tooltip></Tooltip>
        </PieChart>
    </div>
  );
};

export default Stats;
