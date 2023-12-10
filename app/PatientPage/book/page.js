import React from 'react'
import PropTypes from 'prop-types'
import AvailDoctor from './components/availDoctor'

const page = props => {
  return (
    <div className='container-fluid'>
        <div className='py-5'>
            <div className='container'>
                <AvailDoctor/>
            </div>
        </div>
    </div>
  )
}

page.propTypes = {}

export default page