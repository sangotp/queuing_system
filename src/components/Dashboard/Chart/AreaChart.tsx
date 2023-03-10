import { Area, AreaConfig } from '@ant-design/plots'
import { TooltipItem } from '@antv/g2/lib/interface'

export const AreaChart = () => {
  const data = [
    {
      "day": "1",
      "quantity": 2300
    },
    {
      "day": "2",
      "quantity": 2400
    },
    {
      "day": "3",
      "quantity": 2500
    },
    {
      "day": "4",
      "quantity": 3000
    },
    {
      "day": "5",
      "quantity": 3600
    },
    {
      "day": "6",
      "quantity": 3800
    },
    {
      "day": "7",
      "quantity": 4100
    },
    {
      "day": "8",
      "quantity": 4000
    },
    {
      "day": "9",
      "quantity": 3500
    },
    {
      "day": "10",
      "quantity": 3400
    },
    {
      "day": "11",
      "quantity": 3200
    },
    {
      "day": "12",
      "quantity": 3300
    },
    {
      "day": "13",
      "quantity": 3600
    },
    {
      "day": "14",
      "quantity": 3500
    },
    {
      "day": "15",
      "quantity": 3400   
    },
    {
      "day": "16",
      "quantity": 3700
    },
    {
      "day": "17",
      "quantity": 3900
    },
    {
      "day": "18",
      "quantity": 4000
    },
    {
      "day": "19",
      "quantity": 4200
    },
    {
      "day": "20",
      "quantity": 4100
    },
    {
      "day": "21",
      "quantity": 3800
    },
    {
      "day": "22",
      "quantity": 3600
    },
    {
      "day": "23",
      "quantity": 4000
    },
    {
      "day": "24",
      "quantity": 4200
    },
    {
      "day": "25",
      "quantity": 4400
    },
    {
      "day": "26",
      "quantity": 4100
    },
    {
      "day": "27",
      "quantity": 4000
    },
    {
      "day": "28",
      "quantity": 3900
    },
    {
      "day": "29",
      "quantity": 3800
    },
    {
      "day": "30",
      "quantity": 3700
    },
    {
      "day": "31",
      "quantity": 5100
    },
  ]

  const config = {
    data,
    xField: 'day',
    yField: 'quantity',
    xAxis: {
      range: [0, 1],
    },
    width: 754,
    height: 373,
    smooth: true,
    areaStyle: {
      fill: 'l(270) 0:#ffffff 1:#5185F7',
    },
    line: {
      color: '#5185F7',
    },
    tooltip: {
      position: 'top',
      crosshairs: {
        line: {
          style: {
            stroke: '#5185F7',
            lineDash: [2, 3],
            lineWidth: 2,
          },
        },
      },
      marker: {
        fill: '#5185F7',
        lineWidth: 3,
        r: 6
      },
      domStyles: {
        // 'g2-tooltip-marker': {display: 'inline-flex',width: '20px', height: '20px'} as React.CSSProperties,
      },
      customItems: (originalItems: TooltipItem[]) => {
        // console.log(originalItems[0].mappingData)
        return originalItems;
      }
    }
  } as AreaConfig

  return (
    <Area {...config} />
  )
}