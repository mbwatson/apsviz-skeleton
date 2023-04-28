import PropTypes from 'prop-types'
import { ResponsiveLine } from '@nivo/line'

export const LineGraph = ({ data, height }) => {
  console.log(data)

  return (
    <div style={{ height: height, width: '100%' }}>
      <ResponsiveLine
        data={ data }
        margin={{ top: 16, right: 16, bottom: 80, left: 50 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: '0',
          max: data.length ? 'auto' : '100',
          reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'time',
          legendOffset: 36,
          legendPosition: 'middle'
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'value',
          legendOffset: -40,
          legendPosition: 'middle'
        }}
        pointSize={3}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
      />
    </div>
  )
}

LineGraph.propTypes = {
  data: PropTypes.array.isRequired,
  height: PropTypes.string.isRequired,
}
