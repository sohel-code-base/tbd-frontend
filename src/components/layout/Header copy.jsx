import {
    HoverCard, Group, Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    useMantineTheme,
    Image,
    ActionIcon,
    Tooltip,
    Kbd,
  } from '@mantine/core';
// import { MantineLogo } from '@mantinex/mantine-logo';
import Logo from '../../assets/images/tbd-logo.png'

import { useDisclosure, useFullscreen } from '@mantine/hooks';
import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconChevronDown,
    IconLogout,
    IconSearch,
    IconHome, IconDashboard, IconFileText,
    IconWindowMaximize,
    IconWindowMinimize
  } from '@tabler/icons-react';
import headerStyle from './../../assets/css/Header.module.css';
import { Spotlight, spotlight } from '@mantine/spotlight';
import '@mantine/spotlight/styles.css';
  
  const mockdata = [
    {
      icon: IconCode,
      title: 'Open source',
      description: 'This Pokémon’s cry is very loud and distracting',
    },
    {
      icon: IconCoin,
      title: 'Free for everyone',
      description: 'The fluid of Smeargle’s tail secretions changes',
    },
    {
      icon: IconBook,
      title: 'Documentation',
      description: 'Yanma is capable of seeing 360 degrees without',
    },
    {
      icon: IconFingerprint,
      title: 'Security',
      description: 'The shell’s rounded shape and the grooves on its.',
    },
    {
      icon: IconChartPie3,
      title: 'Analytics',
      description: 'This Pokémon uses its flying ability to quickly chase',
    },
    {
      icon: IconNotification,
      title: 'Notifications',
      description: 'Combusken battles with the intensely hot flames it spews',
    },
  ];

  const actions = [
    {
      id: 'home',
      label: 'Home',
      description: 'Get to home page',
      onClick: () => console.log('Home'),
      leftSection: <IconHome style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
    },
    {
      id: 'dashboard',
      label: 'Dashboard',
      description: 'Get full information about current system status',
      onClick: () => console.log('Dashboard'),
      leftSection: <IconDashboard style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
    },
    {
      id: 'documentation',
      label: 'Documentation',
      description: 'Visit documentation to lean more about all features',
      onClick: () => console.log('Documentation'),
      leftSection: <IconFileText style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
    },
    {
        id: 'home',
        label: 'Home',
        description: 'Get to home page',
        onClick: () => console.log('Home'),
        leftSection: <IconHome style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
      },
      {
        id: 'dashboard',
        label: 'Dashboard',
        description: 'Get full information about current system status',
        onClick: () => console.log('Dashboard'),
        leftSection: <IconDashboard style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
      },
      {
        id: 'documentation',
        label: 'Documentation',
        description: 'Visit documentation to lean more about all features',
        onClick: () => console.log('Documentation'),
        leftSection: <IconFileText style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
      },
  ];
  
  export default function Header({height}) {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();
    const { toggle, fullscreen } = useFullscreen();
  
    const links = mockdata.map((item) => (
      <UnstyledButton className={headerStyle.subLink} key={item.title} px={`var(--mantine-spacing-xs)`} py={`var(--mantine-spacing-md)`}>
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    ));
  
    return (
      <Box>
        <header className={headerStyle.header} style={{height: height}}>
          <Group justify="space-between" h="100%">
            <Group>
                <Image src={Logo} w={100} />
                <Group h="100%" gap={0} visibleFrom="sm">
                    <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                        <HoverCard.Target>
                            <Center inline fw={500} fz={`var(--mantine-font-size-sm)`} style={{cursor: 'default'}}>
                            <Box component="span" mr={5}>
                                Shortcuts
                            </Box>
                            <IconChevronDown
                                style={{ width: rem(16), height: rem(16) }}
                                color={theme.colors.blue[6]}
                            />
                            </Center>
                        </HoverCard.Target>
        
                        <HoverCard.Dropdown style={{ overflow: 'hidden' }} mt={'xs'}>
                        <Group justify="space-between" px="md">
                            <Text fw={500}>Features</Text>
                            <Anchor href="#" fz="xs">
                            View all
                            </Anchor>
                        </Group>
        
                        <Divider my="sm" />
        
                        <SimpleGrid cols={2}>
                            {links}
                        </SimpleGrid>
        
                        <div className={headerStyle.dropdownFooter}>
                            <Group justify="space-between">
                            <div>
                                <Text fw={500} fz="sm">
                                Get started
                                </Text>
                                <Text size="xs" c="dimmed">
                                Their food sources have decreased, and their numbers
                                </Text>
                            </div>
                            <Button variant="default">Get started</Button>
                            </Group>
                        </div>
                        </HoverCard.Dropdown>
                    </HoverCard>
                </Group>
            </Group>
            <Button
                leftSection={
                    <>
                    <IconSearch size={16} color="rgba(158, 158, 158, 0.3)"/>
                    <Text fz={`xs`} c={`gray.3`}>Search</Text>
                    </>
                }
                variant='transparent'
                rightSection={
                    <>
                    <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd>
                    </>
                }
                w={`50%`}
                justify="space-between"
                style={{border: `1px solid var(--mantine-color-gray-2)`}}
                color={`gray`}
                onClick={spotlight.open}
            ></Button>
            
            <Group visibleFrom="sm">
                <Tooltip label={fullscreen ? 'Normal screen' : 'Full screen'} bg={`green`}>
                    <ActionIcon onClick={toggle} variant='subtle' color={`green.3`}>
                        {fullscreen ? <IconWindowMinimize size={20}/> : <IconWindowMaximize size={20}/>}
                    </ActionIcon>
                </Tooltip>
                <Tooltip label={`Log out`} bg={`red`}>
                    <ActionIcon variant='subtle' color='red'>
                        <IconLogout size={20}/>
                    </ActionIcon>
                </Tooltip>
            </Group>
  
            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </Group>
        </header>




        <Spotlight
            actions={actions}
            nothingFound="Nothing found..."
            highlightQuery
            searchProps={{
            leftSection: <IconSearch style={{ width: rem(20), height: rem(20) }} stroke={1.5} />,
            placeholder: 'Search...',
            }}
        />
  
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />
  
            <a href="#" className={headerStyle.link}>
              Home
            </a>
            <UnstyledButton className={headerStyle.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Features
                </Box>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.blue[6]}
                />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{links}</Collapse>
            <a href="#" className={headerStyle.link}>
              Learn
            </a>
            <a href="#" className={headerStyle.link}>
              Academy
            </a>
  
            <Divider my="sm" />

            
            <Group justify="center" grow pb="xl" px="md">
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    );
  }