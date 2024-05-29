/* eslint-disable react/prop-types */
import ClockLoader from 'react-spinners/ClockLoader'

const override = {
  display: 'block',
  margin: '50% auto',
  borderColor: '#4338ca',
  border: 'solid 2px #4338ca',
}

function Spinner({ loading }) {
  return (
    <div>
      <ClockLoader
        color='#4338ca'
        loading={loading}
        cssOverride={override}
        size={100}
      />
    </div>
  )
}

export default Spinner
