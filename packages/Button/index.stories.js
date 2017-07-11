import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './index'

storiesOf('Button', module)
  .add('with default', () => (
    <Button
      text={'leke'}
    />
))
