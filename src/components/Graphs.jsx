import React from 'react'
import { Bar, Doughnut, Line } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export const BarChart = ({
  valueX,
  valueY,
  legend,
  responsive,
  viewGrid,
  indexAxis,
  maxHeight,
  minHeight,
  maintainAspectRatio,
  aspectRatio,
  height,
  activatePlugins,
  datasets = [{
    label: "Random data",
    data: valueY,
    backgroundColor: [
      '#EE3D56',
      '#F7931D',
      '#00A94E',
      '#BCBDC0',
    ],
    borderColor: [
      '#EE3D56',
      '#F7931D',
      '#00A94E',
      '#BCBDC0',
    ],
    borderWidth: 1,
  }] }) => {
  return <Bar
    data={{
      labels: valueX,
      datasets: datasets,
      datalabels: { align: 'center', anchor: 'center' }
    }}
    plugins={activatePlugins && [ChartDataLabels]}
    options={{
      indexAxis: indexAxis,
      plugins: {
        datalabels: {
          display: true,
          align: 'center',
          anchor: 'center',
          color: 'white',
          font: { weight: 'bold' },
          formatter: (value, context) => {
            const datasets = context?.chart?.data?.datasets
            const dataset = datasets?.[1]
            const data = dataset?.data
            const maxDataValue = !!data ? Math?.max(...data) : 0
            const percentage = ((value / maxDataValue) * 100).toFixed(2)
            return `${percentage}%`
          },
        },
      },
      layout: {
        padding: {
          top: 24,
          right: 16,
          bottom: 0,
          left: 8,
        },
      },
      elements: {
        line: { fill: false },
        point: {
          hoverRadius: 7,
          radius: 5,
        },
      },
      responsive: responsive,
      maintainAspectRatio: maintainAspectRatio,
      minHeight: minHeight, // Ajusta el valor del alto mínimo aquí
      maxHeight: maxHeight, // Ajusta el valor del alto máximo aquí
      aspectRatio: aspectRatio, // Ajusta el valor de la proporción del ancho y alto (aspectRatio) aquí
      scales: {
        x: {
          stacked: true,
          border: { display: viewGrid },
          grid: { display: viewGrid },
        },
        y: {
          stacked: true,
          border: { display: viewGrid },
          grid: { display: viewGrid },
        },
      },
    }}
    height={height}
  />
}

export const DoughnutChart = (props) => {
  const data = {
    labels: props.labels,
    datasets: [
      {
        label: props.label,
        data: props.data,
        backgroundColor: props.backgroundColor ?? [
          'rgb(10, 166, 224, 0.6)',
          'rgb(129, 211, 237, 0.6)',
          'rgb(19, 248, 198, 0.6)',
        ],
        borderColor: props.borderColor ?? [
          'rgb(10, 166, 224, 1)',
          'rgb(129, 211, 237, 1)',
          'rgb(19, 248, 198, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  return (

    <div className="card-body" style={{ height: 182 }}>
      {(props.data.length > 0) ?
        <Doughnut data={data} options={{
          responsive: true,
          maintainAspectRatio: false
        }} />
        :
        <div className="row">
          <img className="d-flex" src={"https://i.ibb.co/8rgwq0Q/no-graph.png"} />
        </div>
      }
    </div>
  )
}


export const LineChart = ({
  valueX,
  valueY,
  responsive,
  legend,
  maxHeight,
  minHeight,
  maintainAspectRatio,
  aspectRatio,
  height,
  viewGrid,
  datasets = [{
    label: 'Random Data',
    data: valueY,
    backgroundColor: 'rgb(129, 211, 237, 0.6)',
    borderColor: 'rgb(10, 166, 224, 1)',
    borderWidth: 1,
  }] }) => {

  const data = {
    labels: valueX,
    datasets: datasets,
  }

  const options = {
    plugins: {
      legend: legend
    },
    responsive: responsive,
    maintainAspectRatio: maintainAspectRatio,
    minHeight: minHeight, // Ajusta el valor del alto mínimo aquí
    maxHeight: maxHeight, // Ajusta el valor del alto máximo aquí

    aspectRatio: aspectRatio, // Ajusta el valor de la proporción del ancho y alto (aspectRatio) aquí
    scales: {
      x: {
        stacked: true,
        display: true,
        grid: {
          display: viewGrid,
        }
      },
      y: {
        display: true,
        grid: {
          display: viewGrid,
        }
      },
    },
  }

  return <Line data={data} options={options} height={height} />
}

export default BarChart
