'use strict';
(self.webpackChunkmy_ui_library = self.webpackChunkmy_ui_library || []).push([
  [191],
  {
    './src/Components/Text/Text.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Text_stories,
        });
      __webpack_require__('./node_modules/react/index.js');
      var styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        lodash = __webpack_require__('./node_modules/lodash/lodash.js'),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      const StyledText = styled_components_browser_esm.Ay.p`
    font-size: ${(props) => props.size || '16px'};
    color: ${(props) => (props.disabled ? '#ccc' : props.color || '#000')};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
    background-color: ${(props) => props.backgroundColor || 'transparent'}; //Use background color.
`,
        Text = (_ref) => {
          let { content, size, color, disabled, backgroundColor, ...rest } =
            _ref;
          const filteredProps = (0, lodash.omit)(rest, [
            'disabled',
            'backgroundColor',
          ]);
          return (0, jsx_runtime.jsx)(StyledText, {
            size,
            color,
            disabled,
            backgroundColor,
            ...filteredProps,
            children: content,
          });
        },
        Text_Text = Text;
      try {
        (Text.displayName = 'Text'),
          (Text.__docgenInfo = {
            description: '',
            displayName: 'Text',
            props: {
              content: {
                defaultValue: null,
                description: '',
                name: 'content',
                required: !0,
                type: { name: 'string' },
              },
              size: {
                defaultValue: null,
                description: '',
                name: 'size',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              bold: {
                defaultValue: null,
                description: '',
                name: 'bold',
                required: !1,
                type: { name: 'boolean' },
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
            (STORYBOOK_REACT_CLASSES['src/Components/Text/Text.tsx#Text'] = {
              docgenInfo: Text.__docgenInfo,
              name: 'Text',
              path: 'src/Components/Text/Text.tsx#Text',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const Text_stories = {
          title: 'Components/Text',
          component: Text_Text,
          argTypes: {
            content: { control: 'text' },
            size: { control: 'text' },
            color: { control: 'color' },
            disabled: { control: 'boolean' },
            backgroundColor: { control: 'color' },
          },
        },
        Template = (args) => (0, jsx_runtime.jsx)(Text_Text, { ...args }),
        Default = Template.bind({});
      Default.args = {
        content: 'This is a sample text',
        size: '16px',
        color: '#444',
      };
      const Disabled = Template.bind({});
      Disabled.args = { content: 'Disabled Text', disabled: !0 };
      const __namedExportsOrder = ['Default', 'Disabled'];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: 'args => <Text {...args} />',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource: 'args => <Text {...args} />',
              ...Disabled.parameters?.docs?.source,
            },
          },
        });
    },
  },
]);
//# sourceMappingURL=Components-Text-Text-stories.2f62cf28.iframe.bundle.js.map
