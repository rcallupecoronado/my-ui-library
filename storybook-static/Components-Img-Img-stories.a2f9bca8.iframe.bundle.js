'use strict';
(self.webpackChunkmy_ui_library = self.webpackChunkmy_ui_library || []).push([
  [207],
  {
    './src/Components/Img/Img.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Img_stories,
        });
      __webpack_require__('./node_modules/react/index.js');
      var styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        lodash = __webpack_require__('./node_modules/lodash/lodash.js'),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      const StyledImg = styled_components_browser_esm.Ay.img`
    width: ${(_ref) => {
      let { width } = _ref;
      return width || '100px';
    }};
    height: ${(_ref2) => {
      let { height } = _ref2;
      return height || '100px';
    }};
    object-fit: cover;
    opacity: ${(_ref3) => {
      let { disabled } = _ref3;
      return disabled ? 0.5 : 1;
    }};
    cursor: ${(_ref4) => {
      let { disabled } = _ref4;
      return disabled ? 'not-allowed' : 'default';
    }};
    background-color: ${(_ref5) => {
      let { backgroundColor } = _ref5;
      return backgroundColor || 'transparent';
    }};
`,
        Img = (_ref6) => {
          let { src, alt, width, height, disabled, backgroundColor, ...rest } =
            _ref6;
          const filteredProps = (0, lodash.omit)(rest, [
            'disabled',
            'backgroundColor',
          ]);
          return (0, jsx_runtime.jsx)(StyledImg, {
            src,
            alt,
            width,
            height,
            disabled,
            backgroundColor,
            ...filteredProps,
          });
        },
        Img_Img = Img;
      try {
        (Img.displayName = 'Img'),
          (Img.__docgenInfo = {
            description: '',
            displayName: 'Img',
            props: {
              src: {
                defaultValue: null,
                description: '',
                name: 'src',
                required: !0,
                type: { name: 'string' },
              },
              alt: {
                defaultValue: null,
                description: '',
                name: 'alt',
                required: !0,
                type: { name: 'string' },
              },
              width: {
                defaultValue: null,
                description: '',
                name: 'width',
                required: !1,
                type: { name: 'string' },
              },
              height: {
                defaultValue: null,
                description: '',
                name: 'height',
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
            (STORYBOOK_REACT_CLASSES['src/Components/Img/Img.tsx#Img'] = {
              docgenInfo: Img.__docgenInfo,
              name: 'Img',
              path: 'src/Components/Img/Img.tsx#Img',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const Img_stories = {
          title: 'Components/Img',
          component: Img_Img,
          argTypes: {
            src: { control: 'text', description: 'Image source URL' },
            alt: {
              control: 'text',
              description: 'Alternative text for the image',
            },
            width: { control: 'text', description: 'width of the image' },
            height: { control: 'text', description: 'height of the image' },
            disabled: { control: 'boolean', description: 'Disable the image' },
            backgroundColor: {
              control: 'color',
              description: 'Background color of the image',
            },
          },
        },
        Template = (args) => (0, jsx_runtime.jsx)(Img_Img, { ...args }),
        Default = Template.bind({});
      Default.args = {
        src: 'https://www.rrc.ca/marcom/wp-content/uploads/sites/1/sites/99/2022/08/RRC-NDC_Exterior-0557-web_banner-1536x614.jpg',
        alt: 'Red River College',
      };
      const Disabled = Template.bind({});
      Disabled.args = {
        src: 'https://www.rrc.ca/marcom/wp-content/uploads/sites/1/sites/99/2022/08/RRC-NDC_Exterior-0557-web_banner-1536x614.jpg',
        alt: 'Red River College',
        disabled: !0,
      };
      const __namedExportsOrder = ['Default', 'Disabled'];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: 'args => <Img {...args} />',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource: 'args => <Img {...args} />',
              ...Disabled.parameters?.docs?.source,
            },
          },
        });
    },
  },
]);
//# sourceMappingURL=Components-Img-Img-stories.a2f9bca8.iframe.bundle.js.map
