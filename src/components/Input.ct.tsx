import { test, expect } from '@playwright/experimental-ct-react';
import React from 'react';
import Input from './Input';

test('should work', async ({ mount }) => {
  const component = await mount(<Input />);
  await expect(component).toBeVisible();
  
  const textbox = component.getByRole('textbox');
  await textbox.fill('foo');
  await expect(textbox).toHaveValue('foo');
});