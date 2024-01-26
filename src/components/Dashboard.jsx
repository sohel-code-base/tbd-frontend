import React from 'react'
import {Box, Title} from '@mantine/core'
import { useTranslation } from 'react-i18next'

function Dashboard() {
  const {t, i18n} = useTranslation()
  return (
    <Box bg={`red.3`}>
        <Title>
            {t('dashboard')}
        </Title>
    </Box>
  )
}

export default Dashboard