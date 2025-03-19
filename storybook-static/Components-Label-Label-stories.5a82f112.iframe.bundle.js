'use strict';
(self.webpackChunkmy_ui_library = self.webpackChunkmy_ui_library || []).push([
  [971],
  {
    './src/Components/Label/Label.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Label_stories,
        });
      __webpack_require__('./node_modules/react/index.js');
      var styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      const StyledLabel = styled_components_browser_esm.Ay.label`
  color: ${(props) => (props.disabled ? '#ccc' : '#333')};
  font-size: 16px;
  background-color: ${(props) => props.backgroundColor || 'transparent'}; // Use background color
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
`,
        Label = (_ref) => {
          let { text, disabled, backgroundColor } = _ref;
          return (0, jsx_runtime.jsx)(StyledLabel, {
            disabled,
            backgroundColor,
            children: text,
          });
        },
        Label_Label = Label;
      try {
        (Label.displayName = 'Label'),
          (Label.__docgenInfo = {
            description: '',
            displayName: 'Label',
            props: {
              text: {
                defaultValue: null,
                description: '',
                name: 'text',
                required: !0,
                type: { name: 'string' },
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
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Components/Label/Label.tsx#Label'] = {
              docgenInfo: Label.__docgenInfo,
              name: 'Label',
              path: 'src/Components/Label/Label.tsx#Label',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const Label_stories = {
          title: 'Components/Label',
          component: Label_Label,
          argTypes: {
            text: { control: 'text' },
            disabled: { control: 'boolean' },
            backgroundColor: { control: 'color' },
          },
        },
        Template = (args) => (0, jsx_runtime.jsx)(Label_Label, { ...args }),
        Default = Template.bind({});
      Default.args = { text: 'Label Text' };
      const Disabled = Template.bind({});
      Disabled.args = { text: 'Disabled Label', disabled: !0 };
      const __namedExportsOrder = ['Default', 'Disabled'];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: 'args => <Label {...args} />',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource: 'args => <Label {...args} />',
              ...Disabled.parameters?.docs?.source,
            },
          },
        });
    },
  },
]);
//# sourceMappingURL=Components-Label-Label-stories.5a82f112.iframe.bundle.js.map
