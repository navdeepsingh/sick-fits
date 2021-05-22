import styled from 'styled-components'
import Link from 'next/link'
import Nav from './Nav'

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2px;
  background: red;
  transform: skew(-7deg);
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`

const HeaderStyles = styled.h1`
  .bar {
    border-bottom: 10px solid var(--black, black);
  }
`

export default function Header() {
  return (
    <header>
      <div className="bar">
        <Logo>
          <Link href="/">Sick Fits</Link>
        </Logo>
        <Nav />
      </div>
      <div className="sub-bar">{/* <Search /> */}</div>
    </header>
  )
}
