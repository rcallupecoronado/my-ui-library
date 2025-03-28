'use strict';
(self.webpackChunkmy_ui_library = self.webpackChunkmy_ui_library || []).push([
  [113],
  {
    './src/Components/Button/Button.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Button_stories,
        });
      __webpack_require__('./node_modules/react/index.js');
      var styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      const StyledButton = styled_components_browser_esm.Ay.button`
    background-color: ${(props) => (props.disabled ? '#ccc' : props.backgroundColor || '#007bff')}; // Use background color
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`,
        Button = (_ref) => {
          let { label, disabled = !1, onClick, backgroundColor } = _ref;
          return (0, jsx_runtime.jsx)(StyledButton, {
            disabled,
            onClick,
            backgroundColor,
            children: label,
          });
        },
        Button_Button = Button;
      try {
        (Button.displayName = 'Button'),
          (Button.__docgenInfo = {
            description: '',
            displayName: 'Button',
            props: {
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !0,
                type: { name: 'string' },
              },
              disabled: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !0,
                type: { name: '() => void' },
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
            (STORYBOOK_REACT_CLASSES[
              'src/Components/Button/Button.tsx#Button'
            ] = {
              docgenInfo: Button.__docgenInfo,
              name: 'Button',
              path: 'src/Components/Button/Button.tsx#Button',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const Button_stories = {
          title: 'Components/Button',
          component: Button_Button,
          argTypes: {
            label: { control: 'text' },
            disabled: { control: 'boolean' },
            backgroundColor: { control: 'color' },
          },
        },
        Default = ((args) =>
          (0, jsx_runtime.jsx)(Button_Button, { ...args })).bind({});
      Default.args = { label: 'Click Me', disabled: !1 };
      const __namedExportsOrder = ['Default'];
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: 'args => <Button {...args} />',
            ...Default.parameters?.docs?.source,
          },
        },
      };
    },
  },
]);
//# sourceMappingURL=Components-Button-Button-stories.407e64f1.iframe.bundle.js.map
