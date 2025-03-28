'use strict';
(self.webpackChunkmy_ui_library = self.webpackChunkmy_ui_library || []).push([
  [887],
  {
    './src/Components/Table/Table.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          DisabledTable: () => DisabledTable,
          StyledTable: () => Table_stories_StyledTable,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Table_stories,
        });
      __webpack_require__('./node_modules/react/index.js');
      var styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      const StyledTable = styled_components_browser_esm.Ay.table`
    width: 100%;
    border-collapse: collapse;
    overflow-x: auto;
    display: block;
    background-color: ${(_ref) => {
      let { backgroundColor, disabled, disabledBackgroundColor } = _ref;
      return disabled
        ? disabledBackgroundColor || '#e0e0e0'
        : backgroundColor || 'white';
    }};
    color: ${(_ref2) => {
      let { textColor } = _ref2;
      return textColor || 'black';
    }};
    opacity: ${(_ref3) => {
      let { disabled } = _ref3;
      return disabled ? 0.6 : 1;
    }};
    cursor: ${(_ref4) => {
      let { disabled } = _ref4;
      return disabled ? 'not-allowed' : 'default';
    }};
`,
        StyledTh = styled_components_browser_esm.Ay.th`
    background-color: ${(_ref5) => {
      let { headerBackgroundColor } = _ref5;
      return headerBackgroundColor || '#f4f4f4';
    }};
    color: ${(_ref6) => {
      let { headerTextColor } = _ref6;
      return headerTextColor || 'black';
    }};
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
`,
        StyledTd = styled_components_browser_esm.Ay.td`
    padding: 10px;
    border: 1px solid #ddd;
`,
        Table = (_ref7) => {
          let {
            headers,
            rows,
            backgroundColor,
            textColor,
            headerBackgroundColor,
            headerTextColor,
            disabled,
            disabledBackgroundColor,
            ...props
          } = _ref7;
          return (0, jsx_runtime.jsxs)(StyledTable, {
            ...props,
            'aria-label': 'Data Table',
            backgroundColor,
            textColor,
            headers,
            rows,
            disabled,
            disabledBackgroundColor,
            children: [
              (0, jsx_runtime.jsx)('thead', {
                children: (0, jsx_runtime.jsx)('tr', {
                  children: headers.map((header, index) =>
                    (0, jsx_runtime.jsx)(
                      StyledTh,
                      {
                        headers,
                        rows,
                        headerBackgroundColor,
                        headerTextColor,
                        children: header,
                      },
                      index
                    )
                  ),
                }),
              }),
              (0, jsx_runtime.jsx)('tbody', {
                children: rows.map((row, rowIndex) =>
                  (0, jsx_runtime.jsx)(
                    'tr',
                    {
                      children: row.map((cell, cellIndex) =>
                        (0, jsx_runtime.jsx)(
                          StyledTd,
                          { children: cell },
                          cellIndex
                        )
                      ),
                    },
                    rowIndex
                  )
                ),
              }),
            ],
          });
        },
        Table_Table = Table;
      try {
        (Table.displayName = 'Table'),
          (Table.__docgenInfo = {
            description: '',
            displayName: 'Table',
            props: {
              headers: {
                defaultValue: null,
                description: '',
                name: 'headers',
                required: !0,
                type: { name: 'string[]' },
              },
              rows: {
                defaultValue: null,
                description: '',
                name: 'rows',
                required: !0,
                type: { name: 'string[][]' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              backgroundColor: {
                defaultValue: null,
                description: '',
                name: 'backgroundColor',
                required: !1,
                type: { name: 'string' },
              },
              textColor: {
                defaultValue: null,
                description: '',
                name: 'textColor',
                required: !1,
                type: { name: 'string' },
              },
              headerBackgroundColor: {
                defaultValue: null,
                description: '',
                name: 'headerBackgroundColor',
                required: !1,
                type: { name: 'string' },
              },
              headerTextColor: {
                defaultValue: null,
                description: '',
                name: 'headerTextColor',
                required: !1,
                type: { name: 'string' },
              },
              disabled: {
                defaultValue: null,
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              disabledBackgroundColor: {
                defaultValue: null,
                description: '',
                name: 'disabledBackgroundColor',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Components/Table/Table.tsx#Table'] = {
              docgenInfo: Table.__docgenInfo,
              name: 'Table',
              path: 'src/Components/Table/Table.tsx#Table',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const Table_stories = {
          title: 'Components/Table',
          component: Table_Table,
          argTypes: {
            headers: {
              control: 'object',
              description: 'Array of column headers',
            },
            rows: { control: 'object', description: '2D array of table rows' },
            backgroundColor: { control: 'color' },
            textColor: { control: 'color' },
            headerBackgroundColor: { control: 'color' },
            headerTextColor: { control: 'color' },
            disabled: { control: 'boolean' },
            disabledBackgroundColor: { control: 'color' },
          },
        },
        Template = (args) => (0, jsx_runtime.jsx)(Table_Table, { ...args }),
        Table_stories_StyledTable = Template.bind({});
      Table_stories_StyledTable.args = {
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
      const DisabledTable = Template.bind({});
      DisabledTable.args = {
        headers: ['Product', 'Price', 'Quantity'],
        rows: [
          ['Laptop', '$1200', '10'],
          ['Mouse', '$25', '50'],
        ],
        disabled: !0,
        disabledBackgroundColor: 'lightgray',
      };
      const __namedExportsOrder = ['StyledTable', 'DisabledTable'];
      (Table_stories_StyledTable.parameters = {
        ...Table_stories_StyledTable.parameters,
        docs: {
          ...Table_stories_StyledTable.parameters?.docs,
          source: {
            originalSource: 'args => <Table {...args} />',
            ...Table_stories_StyledTable.parameters?.docs?.source,
          },
        },
      }),
        (DisabledTable.parameters = {
          ...DisabledTable.parameters,
          docs: {
            ...DisabledTable.parameters?.docs,
            source: {
              originalSource: 'args => <Table {...args} />',
              ...DisabledTable.parameters?.docs?.source,
            },
          },
        });
    },
  },
]);
//# sourceMappingURL=Components-Table-Table-stories.3a355e43.iframe.bundle.js.map
