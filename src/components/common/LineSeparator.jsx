import React from 'react'
import PropTypes from 'prop-types'

const LineSeparator = (props) => {

   const { style, size } = props

   return (
      <div
         style={{ ...{ width: size === 'big' ? '100%' : '100px' }, ...styles.container, ...style }}
      />
   )
}

const styles = {
   container: {
      margin: '20px auto',
      height: 1,
      backgroundColor: '#535C68'
   }
}

LineSeparator.propTypes = {
   style: PropTypes.any,
   size: PropTypes.string
}

LineSeparator.defaultProps = {
   size: 'small'
}

export default LineSeparator
