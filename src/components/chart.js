import React from 'react';

import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(arr){
  const sum = arr.reduce((a, b) => { return a + b; });
  return Math.round(sum / arr.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div className="average">{average(props.data)}{props.units}</div>
    </div>
  )
}
