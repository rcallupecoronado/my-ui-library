'use strict';
(self.webpackChunkmy_ui_library = self.webpackChunkmy_ui_library || []).push([
  [743],
  {
    './src/Components/Dropdown/Dropdown.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Colored: () => Colored,
          Default: () => Default,
          Disabled: () => Disabled,
          DisabledColored: () => DisabledColored,
          SelectedValue: () => SelectedValue,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Dropdown_stories,
        });
      __webpack_require__('./node_modules/react/index.js');
      var styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      const StyledSelect = styled_components_browser_esm.Ay.select`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
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
    cursor: ${(_ref3) => {
      let { disabled } = _ref3;
      return disabled ? 'not-allowed' : 'default';
    }};
    opacity: ${(_ref4) => {
      let { disabled } = _ref4;
      return disabled ? 0.6 : 1;
    }};
`,
        Dropdown = (_ref5) => {
          let {
            options,
            onChange,
            disabled,
            backgroundColor,
            textColor,
            disabledBackgroundColor,
          } = _ref5;
          return (0, jsx_runtime.jsxs)(StyledSelect, {
            options,
            onChange,
            defaultValue: '',
            disabled,
            backgroundColor,
            textColor,
            disabledBackgroundColor,
            children: [
              (0, jsx_runtime.jsx)('option', {
                value: '',
                disabled: !0,
                children: 'Select an option',
              }),
              options.map((option, index) =>
                (0, jsx_runtime.jsx)(
                  'option',
                  { value: option.value, children: option.label },
                  `${option.value}-${index}`
                )
              ),
            ],
          });
        },
        Dropdown_Dropdown = Dropdown;
      try {
        (Dropdown.displayName = 'Dropdown'),
          (Dropdown.__docgenInfo = {
            description: '',
            displayName: 'Dropdown',
            props: {
              options: {
                defaultValue: null,
                description: '',
                name: 'options',
                required: !0,
                type: { name: '{ value: string; label: string; }[]' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !0,
                type: { name: '(e: ChangeEvent<HTMLSelectElement>) => void' },
              },
              disabled: {
                defaultValue: null,
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
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
            (STORYBOOK_REACT_CLASSES[
              'src/Components/Dropdown/Dropdown.tsx#Dropdown'
            ] = {
              docgenInfo: Dropdown.__docgenInfo,
              name: 'Dropdown',
              path: 'src/Components/Dropdown/Dropdown.tsx#Dropdown',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const Dropdown_stories = {
          title: 'Components/Dropdown',
          component: Dropdown_Dropdown,
          argTypes: {
            options: { control: 'object' },
            disabled: { control: 'boolean' },
            backgroundColor: { control: 'color' },
            textColor: { control: 'color' },
            disabledBackgroundColor: { control: 'color' },
          },
        },
        Template = (args) =>
          (0, jsx_runtime.jsx)(Dropdown_Dropdown, { ...args }),
        Default = Template.bind({});
      Default.args = {
        options: [
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' },
        ],
        disabled: !1,
      };
      const Disabled = Template.bind({});
      Disabled.args = {
        options: [
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' },
        ],
        disabled: !0,
      };
      const SelectedValue = Template.bind({});
      SelectedValue.args = {
        options: [
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' },
        ],
        onChange: (value) => console.log(`Selected: ${value}`),
      };
      const Colored = Template.bind({});
      Colored.args = {
        options: [
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' },
        ],
        backgroundColor: 'lightblue',
        textColor: 'darkblue',
      };
      const DisabledColored = Template.bind({});
      DisabledColored.args = {
        options: [
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' },
        ],
        disabled: !0,
        disabledBackgroundColor: 'lightgray',
      };
      const __namedExportsOrder = [
        'Default',
        'Disabled',
        'SelectedValue',
        'Colored',
        'DisabledColored',
      ];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: 'args => <Dropdown {...args} />',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource: 'args => <Dropdown {...args} />',
              ...Disabled.parameters?.docs?.source,
            },
          },
        }),
        (SelectedValue.parameters = {
          ...SelectedValue.parameters,
          docs: {
            ...SelectedValue.parameters?.docs,
            source: {
              originalSource: 'args => <Dropdown {...args} />',
              ...SelectedValue.parameters?.docs?.source,
            },
          },
        }),
        (Colored.parameters = {
          ...Colored.parameters,
          docs: {
            ...Colored.parameters?.docs,
            source: {
              originalSource: 'args => <Dropdown {...args} />',
              ...Colored.parameters?.docs?.source,
            },
          },
        }),
        (DisabledColored.parameters = {
          ...DisabledColored.parameters,
          docs: {
            ...DisabledColored.parameters?.docs,
            source: {
              originalSource: 'args => <Dropdown {...args} />',
              ...DisabledColored.parameters?.docs?.source,
            },
          },
        });
    },
  },
]);
//# sourceMappingURL=Components-Dropdown-Dropdown-stories.04028c59.iframe.bundle.js.map
