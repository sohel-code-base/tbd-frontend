import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header'
import {useViewportSize} from '@mantine/hooks'
import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Navbar from './Navbar'
import Footer from './Footer';



function Layout() {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [navbarOpened, { toggle: toggleNavbar }] = useDisclosure(true);
    const [rightSidebarOpened, { toggle: toggleRightSideBar }] = useDisclosure(false);

  return (
    <>
        <AppShell
            header={{ height: 60 }}
            footer={{ height: 30 }}
            navbar={{ width: 200, breakpoint: 'sm', collapsed: { mobile: !mobileOpened, desktop: !navbarOpened }, }}
            aside={{ width: 50, breakpoint: 'md', collapsed: { mobile: !mobileOpened, desktop: !rightSidebarOpened } }}
            padding="xs"
        >
            <AppShell.Header bg={`gray.0`}>
      
                <Header navbarOpened={navbarOpened} toggleNavbar={toggleNavbar}  rightSidebarOpened={rightSidebarOpened} toggleRightSideBar={toggleRightSideBar} />

            </AppShell.Header>
            <AppShell.Navbar p="xs">
                <Navbar />
            </AppShell.Navbar>
            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
            <AppShell.Aside p="xs">Aside</AppShell.Aside>
            <AppShell.Footer p="5"><Footer /></AppShell.Footer>
        </AppShell>
        
    </>
  )
}

export default Layout