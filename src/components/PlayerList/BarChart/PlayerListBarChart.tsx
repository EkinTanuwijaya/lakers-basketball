import BarChart from "../../Template/Chart/BarChart";
interface PlayerListBarChartInterface{
    id: any;
    data: any;
}
const PlayerListBarChart = ({id,data}:PlayerListBarChartInterface) => {
    let metaData = {
        xAxis: {
          type: 'category',
          data: ['Points', 'Rebound', 'Assist']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: data ? [ data[id-1].points,data[id-1].rebound,data[id-1].assist] : [],
          }
        ],
        label: {
            show: true,
            position: 'top',
            color: 'black',
            fontWeight: 'bold'
        } 
      };
  return (
    <>
        <BarChart metaData={metaData} title="Average Stats"/>
    </>
  );
};

export default PlayerListBarChart;