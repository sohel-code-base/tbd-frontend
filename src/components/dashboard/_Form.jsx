import React from 'react'
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import { Button, Group, TextInput, NumberInput, Box, Tooltip, ColorInput, Checkbox, Grid, Switch, Flex, Textarea, Autocomplete, MultiSelect, Select, rem, Text, Radio } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { IconPhoto, IconUpload, IconX } from '@tabler/icons-react';
import '@mantine/dropzone/styles.css';

function _Form() {
    const form = useForm({
        initialValues: {

        },
    
        validate: {
          name: hasLength({ min: 2, max: 10 }),
          // job: isNotEmpty('Enter your current job'),
          email: isEmail(),
          favoriteColor: matches(/^#([0-9a-f]{3}){1,2}$/),
          age: isInRange({ min: 18, max: 99 }),
          agree: isNotEmpty(),
          switch: isNotEmpty(),
          textarea: isNotEmpty(),
          autocomplete: isNotEmpty(),
          multiselect: isNotEmpty(),
          select: isNotEmpty(),
          radio: isNotEmpty(),
          file: isNotEmpty(),
        },
      });
  return (
    <Box component="form" mx="auto" onSubmit={form.onSubmit((values) => console.log(values))}>
      <Grid>
        <Grid.Col span={4}>
          <Tooltip
            label={'Name must be 2-10 characters long'}
            opened={!!form.errors.name}
            px={20}
            py={3}
            position="top-end" 
            color='red' 
            withArrow
            offset={2}
            zIndex={0}
            transitionProps={{ transition: 'pop-bottom-left', duration: 500 }}
            >
            <TextInput size='xs' label="Name" placeholder="Name" withAsterisk {...form.getInputProps('name')} />

          </Tooltip>
          <Tooltip
            label={'Invalid Email'}
            opened={!!form.errors.email}
            px={20}
            py={3}
            position="top-end" 
            color='red' 
            withArrow
            offset={2}
            zIndex={0}
            transitionProps={{ transition: 'pop-bottom-left', duration: 500 }}
            >
            <TextInput
            size='xs'
            label="Your email"
            placeholder="Your email"
            withAsterisk
            {...form.getInputProps('email')}
          />

          </Tooltip>
          
          
          <Tooltip
            label={'Enter a valid hex color'}
            opened={!!form.errors.favoriteColor}
            px={20}
            py={3}
            position="top-end" 
            color='red' 
            withArrow
            offset={2}
            zIndex={0}
            transitionProps={{ transition: 'pop-bottom-left', duration: 500 }}
            >
            <ColorInput
            size='xs'
            label="Your favorite color"
            // placeholder="Your favorite color"
            withAsterisk
            {...form.getInputProps('favoriteColor')}
          />

          </Tooltip>
          <Tooltip
            label={'You must be 18-99 years old to register'}
            opened={!!form.errors.age}
            px={20}
            py={3}
            position="top-end" 
            color='red' 
            withArrow
            offset={2}
            zIndex={0}
            transitionProps={{ transition: 'pop-bottom-left', duration: 500 }}
            >
              <NumberInput
              size='xs'
                label="Your age"
                placeholder="Your age"
                withAsterisk
                {...form.getInputProps('age')}
              />
          </Tooltip>
          <Flex
        gap="xs"
        justify="flex-start"
        align="center"
        direction="row"
        wrap="wrap"
      >
      <Tooltip
        label={'Agree terms & conditions'}
        opened={!!form.errors.agree}
        px={20}
        py={3}
        position="top-start" 
        color='red' 
        withArrow
        offset={2}
        zIndex={0}
        transitionProps={{ transition: 'pop-bottom-left', duration: 500 }}
        >
          <Checkbox
            label="Agree"
            // withAsterisk
            {...form.getInputProps('agree')}
          />
        </Tooltip>
        <Tooltip
            label={'Require switch'}
            opened={!!form.errors.switch}
            px={20}
            py={3}
            position="top-end" 
            color='red' 
            withArrow
            offset={2}
            zIndex={0}
            transitionProps={{ transition: 'pop-bottom-left', duration: 500 }}
            >
              <Switch
                size='xs'
                label="I agree"
                // withAsterisk
              
                {...form.getInputProps('switch')}
              />
          </Tooltip>
      </Flex>
      <Tooltip
            label={'Require radio'}
            opened={!!form.errors.radio}
            px={20}
            py={3}
            position="top-end" 
            color='red' 
            withArrow
            offset={2}
            zIndex={0}
            transitionProps={{ transition: 'pop-bottom-left', duration: 500 }}
            >
            <Radio.Group
                name="favoriteFramework"
                label="Select Radio"
                // description="This is anonymous"
                withAsterisk
                {...form.getInputProps('radio')}

              >
                <Group mt="xs">
                  <Radio value="react" label="React" />
                  <Radio value="svelte" label="Svelte" />
                  <Radio value="ng" label="Angular" />
                  <Radio value="vue" label="Vue" />
                </Group>
              </Radio.Group>
            </Tooltip>
      
        </Grid.Col>
        
        <Grid.Col span={4}>

        <Tooltip
            label={'Require'}
            opened={!!form.errors.textarea}
            px={20}
            py={3}
            position="top-end" 
            color='red' 
            withArrow
            offset={2}
            zIndex={0}
            transitionProps={{ transition: 'pop-bottom-left', duration: 500 }}
            >
              <Textarea
                // defaultChecked
                size='xs'
                label="I agree"
                withAsterisk
                {...form.getInputProps('textarea')}
              />
          </Tooltip>

          <Tooltip
            label={'Require'}
            opened={!!form.errors.autocomplete}
            px={20}
            py={3}
            position="top-end" 
            color='red' 
            withArrow
            offset={2}
            zIndex={0}
            transitionProps={{ transition: 'pop-bottom-left', duration: 500 }}
            >
              <Autocomplete
                label={'Autocomplete'}
                
                size='xs'
                data={[
                  { group: 'Frontend', items: ['React', 'Angular'] },
                  { group: 'Backend', items: ['Express', 'Django'] },
                ]}
                withAsterisk
                {...form.getInputProps('autocomplete')}
              />
          </Tooltip>
          <Tooltip
            label={'Require'}
            opened={!!form.errors.multiselect}
            px={20}
            py={3}
            position="top-end" 
            color='red' 
            withArrow
            offset={2}
            zIndex={0}
            transitionProps={{ transition: 'pop-bottom-left', duration: 500 }}
            >
              <MultiSelect
                label={'Multiselect'}
                
                size='xs'
                data={['React', 'Angular', 'Vue', 'Svelte']}
                clearable
                withAsterisk
                {...form.getInputProps('multiselect')}
              />
          </Tooltip>
          <Tooltip
            label={'Require'}
            opened={!!form.errors.select}
            px={20}
            py={3}
            position="top-end" 
            color='red' 
            withArrow
            offset={2}
            zIndex={0}
            transitionProps={{ transition: 'pop-bottom-left', duration: 500 }}
            >
              <Select
                label={'select'}
                
                size='xs'
                data={['React', 'Angular', 'Vue', 'Svelte']}
                clearable
                withAsterisk
                {...form.getInputProps('select')}
              />
          </Tooltip>
        
        </Grid.Col>
        <Grid.Col span={4}>
          <Tooltip
            label={'Require'}
            opened={!!form.errors.file}
            px={20}
            py={3}
            position="top-end" 
            color='red' 
            withArrow
            offset={2}
            zIndex={0}
            transitionProps={{ transition: 'pop-bottom-left', duration: 500 }}
          >
            <Dropzone
              onDrop={(files) => form.setValues({
                file: files[0],
              })}
              onReject={(files) => console.log('rejected files', files)}
              maxSize={5 * 1024 ** 2}
              accept={IMAGE_MIME_TYPE}
              {...form.getInputProps('file')}

            >
                <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
                  <Dropzone.Accept>
                    <IconUpload
                      style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
                      stroke={1.5}
                    />
                  </Dropzone.Accept>
                  <Dropzone.Reject>
                    <IconX
                      style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
                      stroke={1.5}
                    />
                  </Dropzone.Reject>
                  <Dropzone.Idle>
                    <IconPhoto
                      style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
                      stroke={1.5}
                    />
                  </Dropzone.Idle>

                  <div>
                    <Text size="xl" inline>
                      Drag images here or click to select files
                    </Text>
                    <Text size="sm" c="dimmed" inline mt={7}>
                      Attach as many files as you like, each file should not exceed 5mb
                    </Text>
                  </div>
                </Group>
            </Dropzone>
          </Tooltip>
        
        </Grid.Col>
      </Grid>
      
      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </Box>
  )
}

export default _Form