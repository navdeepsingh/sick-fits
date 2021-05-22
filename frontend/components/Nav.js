import React from 'react'
import Link from 'next/link'
import NavStyles from './styles/NavStyles'

function Nav() {
  return (
    <NavStyles>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li>
        <Link href="/sell">Sell</Link>
      </li>
      <li>
        <Link href="/orders">Orders</Link>
      </li>
      <li>
        <Link href="/account">Account</Link>
      </li>
    </NavStyles>
  )
}

export default Nav
