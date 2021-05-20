import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'

const Page = ({children}) => (
  <>
    <h1>Page Component</h1>
    <Header />
    {children}
  </>
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
