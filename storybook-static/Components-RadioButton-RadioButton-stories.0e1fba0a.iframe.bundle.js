'use strict';
(self.webpackChunkmy_ui_library = self.webpackChunkmy_ui_library || []).push([
  [615],
  {
    './src/Components/RadioButton/RadioButton.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => RadioButton_stories,
        });
      __webpack_require__('./node_modules/react/index.js');
      var styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      const StyledLabel = styled_components_browser_esm.Ay.label`
  display: flex;
  align-items: center;
`,
        StyledInput = styled_components_browser_esm.Ay.input`
  margin-right: 5px;
`,
        RadioButton = (_ref) => {
          let { label, name, value, checked, onChange } = _ref;
          return (0, jsx_runtime.jsxs)(StyledLabel, {
            children: [
              (0, jsx_runtime.jsx)(StyledInput, {
                type: 'radio',
                name,
                value,
                checked,
                onChange: (event) => onChange(event),
              }),
              label,
            ],
          });
        },
        RadioButton_RadioButton = RadioButton;
      try {
        (RadioButton.displayName = 'RadioButton'),
          (RadioButton.__docgenInfo = {
            description: '',
            displayName: 'RadioButton',
            props: {
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !0,
                type: { name: 'string' },
              },
              name: {
                defaultValue: null,
                description: '',
                name: 'name',
                required: !0,
                type: { name: 'string' },
              },
              value: {
                defaultValue: null,
                description: '',
                name: 'value',
                required: !0,
                type: { name: 'string' },
              },
              checked: {
                defaultValue: null,
                description: '',
                name: 'checked',
                required: !1,
                type: { name: 'boolean' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !0,
                type: {
                  name: '(event: ChangeEvent<HTMLInputElement>) => void',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/Components/RadioButton/RadioButton.tsx#RadioButton'
            ] = {
              docgenInfo: RadioButton.__docgenInfo,
              name: 'RadioButton',
              path: 'src/Components/RadioButton/RadioButton.tsx#RadioButton',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const RadioButton_stories = {
          title: 'Components/RadioButton',
          component: RadioButton_RadioButton,
          argTypes: { checked: { control: 'boolean' } },
        },
        Default = ((args) =>
          (0, jsx_runtime.jsx)(RadioButton_RadioButton, { ...args })).bind({});
      Default.args = {
        label: 'Option 1',
        name: 'example',
        value: 'option1',
        checked: !1,
        onChange: (event) => console.log('Selected:', event.target.value),
      };
      const __namedExportsOrder = ['Default'];
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: 'args => <RadioButton {...args} />',
            ...Default.parameters?.docs?.source,
          },
        },
      };
    },
  },
]);
//# sourceMappingURL=Components-RadioButton-RadioButton-stories.0e1fba0a.iframe.bundle.js.map
