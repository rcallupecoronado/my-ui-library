'use strict';
(self.webpackChunkmy_ui_library = self.webpackChunkmy_ui_library || []).push([
  [535],
  {
    './src/Components/HeroImage/HeroImage.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => HeroImage_stories,
        });
      __webpack_require__('./node_modules/react/index.js');
      var styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        lodash = __webpack_require__('./node_modules/lodash/lodash.js'),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      const StyledHeroImage = styled_components_browser_esm.Ay.div`
    width: 100%;
    height: 300px;
    background-image: ${(_ref) => {
      let { src } = _ref;
      return `url(${src || 'default-image.png'})`;
    }};
    background-size: cover;
    background-position: center;
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
    background-color: ${(props) => props.backgroundColor || 'transparent'};
`,
        HeroImage = (_ref2) => {
          let { src, alt, disabled, backgroundColor, ...rest } = _ref2;
          const filteredProps = (0, lodash.omit)(rest, ['backgroundColor']);
          return (0, jsx_runtime.jsx)(StyledHeroImage, {
            src,
            'data-testid': 'hero-image',
            disabled,
            backgroundColor,
            ...filteredProps,
          });
        },
        HeroImage_HeroImage = HeroImage;
      try {
        (HeroImage.displayName = 'HeroImage'),
          (HeroImage.__docgenInfo = {
            description: '',
            displayName: 'HeroImage',
            props: {
              src: {
                defaultValue: null,
                description: '',
                name: 'src',
                required: !1,
                type: { name: 'string' },
              },
              alt: {
                defaultValue: null,
                description: '',
                name: 'alt',
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
            (STORYBOOK_REACT_CLASSES[
              'src/Components/HeroImage/HeroImage.tsx#HeroImage'
            ] = {
              docgenInfo: HeroImage.__docgenInfo,
              name: 'HeroImage',
              path: 'src/Components/HeroImage/HeroImage.tsx#HeroImage',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const HeroImage_stories = {
          title: 'Components/HeroImage',
          component: HeroImage_HeroImage,
          argTypes: {
            src: { control: 'text' },
            disabled: { control: 'boolean' },
            backgroundColor: { control: 'color' },
          },
        },
        Template = (args) =>
          (0, jsx_runtime.jsx)(HeroImage_HeroImage, { ...args }),
        Default = Template.bind({});
      Default.args = {
        src: 'https://www.rrc.ca/marcom/wp-content/uploads/sites/1/sites/99/2022/08/RRC-NDC_Exterior-0557-web_banner-1536x614.jpg',
      };
      const Disabled = Template.bind({});
      Disabled.args = {
        src: 'https://www.rrc.ca/marcom/wp-content/uploads/sites/1/sites/99/2022/08/RRC-NDC_Exterior-0557-web_banner-1536x614.jpg',
        disabled: !0,
      };
      const __namedExportsOrder = ['Default', 'Disabled'];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: 'args => <HeroImage {...args} />',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource: 'args => <HeroImage {...args} />',
              ...Disabled.parameters?.docs?.source,
            },
          },
        });
    },
  },
]);
//# sourceMappingURL=Components-HeroImage-HeroImage-stories.00a502e8.iframe.bundle.js.map
