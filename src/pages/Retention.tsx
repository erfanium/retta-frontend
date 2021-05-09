import { useQuery } from "react-query";
import { ResponsiveFunnel } from "@nivo/funnel";

import { getRetentionChart } from "../query";
import { Theme } from "@nivo/core";

const theme: Theme = {
  fontSize: 20,
};

const stepColors = ['#9dcef2', '#9dcef2', '#9dcef2', '#9dcef2', '#9dcef2',  '#9dcef2', '#42afff']


function Retention() {
  const { isLoading, isError, data } = useQuery(
    "getRetentionChart",
    getRetentionChart
  );

  if (isLoading) return <h3>Loading...</h3>;
  if (isError) return <h3>An error has occurred</h3>;

  const base = data.chart[0];

  return (
    <>
      <h1 className="h1">Retention</h1>
      <h6 className="pb-3 border-bottom">Last Month</h6>

      <div className="pt-3" style={{ height: "300px" }}>
        <ResponsiveFunnel
          data={data.chart.map((v, i) => ({
            id: i.toString(),
            value: ~~((v / base) * 100),
            foo: "bar",
          }))}
          direction="horizontal"
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          colors={stepColors}
          labelColor={{ from: 'color', modifiers: [ ['darker', 100] ] }}
          borderColor="#000000"
          currentPartSizeExtension={5}
          currentBorderWidth={50}
          motionDamping={1}
          shapeBlending={0}
          spacing={5}
          theme={theme}
        />
      </div>
    </>
  );
}

export default Retention;
