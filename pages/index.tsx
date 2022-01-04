import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

const Batata = styled.h1`
color:blue;
`;

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <Batata>123</Batata>
      </main>
    </div>
  )
}

export default Home
