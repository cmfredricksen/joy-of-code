// next
import Head from 'next/head'

// components
import Main from '@/components/Main'
import Navigation from '@/components/Navigation'

// types
import { ReactNode } from 'react'
interface LayoutProps {
  children?: ReactNode
  title?: string
}

const Layout = ({
  children,
  title = 'Joy of Code',
}: LayoutProps): JSX.Element => (
  <>
    <Head>
      <title>{title}</title>
    </Head>

    <Navigation />

    <Main>{children}</Main>
  </>
)

export default Layout
