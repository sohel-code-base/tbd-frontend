import React, { useState } from 'react'
import {Button, Group, Tabs, rem, Text} from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { IconCircle, IconColorFilter, IconList, IconPlaylistAdd, IconSettings } from '@tabler/icons-react'
import _Datatable from './_Datatable'
import _Form from './_Form'
function Dashboard() {
  const {t, i18n} = useTranslation()
  const iconStyle = { width: rem(12), height: rem(12) };
  const [activeTab, setActiveTab] = useState('')
  return (
    <Tabs defaultValue="data_list" onChange={value => setActiveTab(value)}>
      <Tabs.List pos={`relative`}>
        <Tabs.Tab value="data_list" leftSection={<IconList style={iconStyle} />}>
          {t('data_list')}
          
        </Tabs.Tab>
        <Tabs.Tab value="create_new" leftSection={<IconPlaylistAdd style={iconStyle} />}>
        {t('create_new')}
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={<IconSettings style={iconStyle} />}>
          Settings
        </Tabs.Tab>
        <Button.Group display={'data_list' === activeTab ? 'block' : 'none'} pos={`absolute`} right={0}>
          <Button size='xs' color={`red.8`}><IconColorFilter size={18} /></Button>
          <Button size='xs' color={`green.8`}>CSV</Button>
          <Button size='xs' color={`blue.7`}>PDF</Button>
        </Button.Group>
        {/* <Group pos={`absolute`} right={0}>
            <Button size='xs'><Text fz={12} fw={700}>CSV</Text></Button>
            <Button size='xs'><Text fz={12} fw={700}>PDF</Text></Button>
          </Group> */}
      </Tabs.List>

      <Tabs.Panel value="data_list">
        <_Datatable />
      </Tabs.Panel>

      <Tabs.Panel value="create_new">
        <_Form />
      </Tabs.Panel>

      <Tabs.Panel value="settings">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  )
}

export default Dashboard