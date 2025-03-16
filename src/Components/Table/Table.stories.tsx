import { Meta, StoryFn } from '@storybook/react';
import Table from './Table';
import { TableProps } from './Table.types';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    headers: { control: 'object', description: 'Array of column headers' },
    rows: { control: 'object', description: '2D array of table rows' },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    headerBackgroundColor: { control: 'color' },
    headerTextColor: { control: 'color' },
    disabled: { control: 'boolean' },
    disabledBackgroundColor: { control: 'color' },
  },
} as Meta<typeof Table>;

const Template: StoryFn<TableProps> = (args) => <Table {...args} />;

// ... existing stories

export const StyledTable = Template.bind({});
StyledTable.args = {
  headers: ['Product', 'Price', 'Quantity'],
  rows: [
    ['Laptop', '$1200', '10'],
    ['Mouse', '$25', '50'],
  ],
  backgroundColor: 'lightblue',
  textColor: 'darkblue',
  headerBackgroundColor: 'darkblue',
  headerTextColor: 'white',
};

export const DisabledTable = Template.bind({});
DisabledTable.args = {
  headers: ['Product', 'Price', 'Quantity'],
  rows: [
    ['Laptop', '$1200', '10'],
    ['Mouse', '$25', '50'],
  ],
  disabled: true,
  disabledBackgroundColor: 'lightgray',
};
