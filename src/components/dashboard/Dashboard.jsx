import React from 'react'
import {Tabs, rem} from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { IconList, IconPlaylistAdd, IconSettings } from '@tabler/icons-react'
import _Datatable from './_Datatable'
function Dashboard() {
  const {t, i18n} = useTranslation()
  const iconStyle = { width: rem(12), height: rem(12) };
  return (
    <Tabs defaultValue="data_list">
      <Tabs.List>
        <Tabs.Tab value="data_list" leftSection={<IconList style={iconStyle} />}>
          {t('data_list')}
        </Tabs.Tab>
        <Tabs.Tab value="create_new" leftSection={<IconPlaylistAdd style={iconStyle} />}>
        {t('create_new')}
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={<IconSettings style={iconStyle} />}>
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="data_list">
        <_Datatable />
      </Tabs.Panel>

      <Tabs.Panel value="create_new">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  )
}

export default Dashboard