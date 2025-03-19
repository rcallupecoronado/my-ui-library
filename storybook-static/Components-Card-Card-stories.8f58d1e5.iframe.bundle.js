'use strict';
(self.webpackChunkmy_ui_library = self.webpackChunkmy_ui_library || []).push([
  [417],
  {
    './src/Components/Card/Card.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Colored: () => Colored,
          Default: () => Default,
          Disabled: () => Disabled,
          WithChildren: () => WithChildren,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Card_stories,
        });
      __webpack_require__('./node_modules/react/index.js');
      var styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      const StyledCard = styled_components_browser_esm.Ay.div`
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 5px;
    max-width: 300px;
    background-color: ${(_ref) => {
      let { backgroundColor } = _ref;
      return backgroundColor || 'white';
    }};
    opacity: ${(_ref2) => {
      let { disabled } = _ref2;
      return disabled ? 0.5 : 1;
    }};
    cursor: ${(_ref3) => {
      let { disabled } = _ref3;
      return disabled ? 'not-allowed' : 'default';
    }};
    color: ${(_ref4) => {
      let { textColor } = _ref4;
      return textColor || 'black';
    }};
`,
        Card = (_ref5) => {
          let {
            title,
            content,
            children,
            backgroundColor,
            disabled,
            textColor,
          } = _ref5;
          return (0, jsx_runtime.jsxs)(StyledCard, {
            title,
            content,
            backgroundColor,
            disabled,
            textColor,
            role: 'region',
            children: [
              (0, jsx_runtime.jsx)('h3', { children: title }),
              (0, jsx_runtime.jsx)('p', { children: content }),
              children && (0, jsx_runtime.jsx)('div', { children }),
            ],
          });
        },
        Card_Card = Card;
      try {
        (Card.displayName = 'Card'),
          (Card.__docgenInfo = {
            description: '',
            displayName: 'Card',
            props: {
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !0,
                type: { name: 'string' },
              },
              content: {
                defaultValue: null,
                description: '',
                name: 'content',
                required: !0,
                type: { name: 'string' },
              },
              backgroundColor: {
                defaultValue: null,
                description: '',
                name: 'backgroundColor',
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
              textColor: {
                defaultValue: null,
                description: '',
                name: 'textColor',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Components/Card/Card.tsx#Card'] = {
              docgenInfo: Card.__docgenInfo,
              name: 'Card',
              path: 'src/Components/Card/Card.tsx#Card',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const Card_stories = {
          title: 'Components/Card',
          component: Card_Card,
          argTypes: {
            title: { control: 'text' },
            content: { control: 'text' },
            backgroundColor: { control: 'color' },
            disabled: { control: 'boolean' },
            textColor: { control: 'color' },
          },
        },
        Template = (args) => (0, jsx_runtime.jsx)(Card_Card, { ...args }),
        Default = Template.bind({});
      Default.args = {
        title: 'Sample Card',
        content: 'This is a sample card content.',
      };
      const WithChildren = Template.bind({});
      WithChildren.args = {
        title: 'Card with Children',
        content: 'This card has child elements.',
        children: (0, jsx_runtime.jsx)('button', { children: 'Click Me' }),
      };
      const Disabled = Template.bind({});
      Disabled.args = {
        title: 'Disabled Card',
        content: 'This card is disabled.',
        disabled: !0,
      };
      const Colored = Template.bind({});
      Colored.args = {
        title: 'Colored Card',
        content: 'This card has custom colors.',
        backgroundColor: 'lightblue',
        textColor: 'darkblue',
      };
      const __namedExportsOrder = [
        'Default',
        'WithChildren',
        'Disabled',
        'Colored',
      ];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: '(args: CardProps) => <Card {...args} />',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (WithChildren.parameters = {
          ...WithChildren.parameters,
          docs: {
            ...WithChildren.parameters?.docs,
            source: {
              originalSource: '(args: CardProps) => <Card {...args} />',
              ...WithChildren.parameters?.docs?.source,
            },
          },
        }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource: '(args: CardProps) => <Card {...args} />',
              ...Disabled.parameters?.docs?.source,
            },
          },
        }),
        (Colored.parameters = {
          ...Colored.parameters,
          docs: {
            ...Colored.parameters?.docs,
            source: {
              originalSource: '(args: CardProps) => <Card {...args} />',
              ...Colored.parameters?.docs?.source,
            },
          },
        });
    },
  },
]);
//# sourceMappingURL=Components-Card-Card-stories.8f58d1e5.iframe.bundle.js.map
