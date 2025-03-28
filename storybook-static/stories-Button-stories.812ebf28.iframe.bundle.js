/*! For license information please see stories-Button-stories.812ebf28.iframe.bundle.js.LICENSE.txt */
'use strict';
(self.webpackChunkmy_ui_library = self.webpackChunkmy_ui_library || []).push([
  [791],
  {
    './node_modules/react/cjs/react-jsx-runtime.production.js': (
      __unused_webpack_module,
      exports
    ) => {
      var REACT_ELEMENT_TYPE = Symbol.for('react.transitional.element'),
        REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
      function jsxProd(type, config, maybeKey) {
        var key = null;
        if (
          (void 0 !== maybeKey && (key = '' + maybeKey),
          void 0 !== config.key && (key = '' + config.key),
          'key' in config)
        )
          for (var propName in ((maybeKey = {}), config))
            'key' !== propName && (maybeKey[propName] = config[propName]);
        else maybeKey = config;
        return (
          (config = maybeKey.ref),
          {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            ref: void 0 !== config ? config : null,
            props: maybeKey,
          }
        );
      }
      (exports.Fragment = REACT_FRAGMENT_TYPE),
        (exports.jsx = jsxProd),
        (exports.jsxs = jsxProd);
    },
    './node_modules/react/jsx-runtime.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      module.exports = __webpack_require__(
        './node_modules/react/cjs/react-jsx-runtime.production.js'
      );
    },
    './src/stories/Button.stories.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Large: () => Large,
          Primary: () => Primary,
          Secondary: () => Secondary,
          Small: () => Small,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './node_modules/@storybook/test/dist/index.mjs'
      );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Example/Button',
          component: __webpack_require__('./src/stories/Button.tsx').$,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
          argTypes: { backgroundColor: { control: 'color' } },
          args: {
            onClick: (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),
          },
        },
        Primary = { args: { primary: !0, label: 'Button' } },
        Secondary = { args: { label: 'Button' } },
        Large = { args: { size: 'large', label: 'Button' } },
        Small = { args: { size: 'small', label: 'Button' } },
        __namedExportsOrder = ['Primary', 'Secondary', 'Large', 'Small'];
      (Primary.parameters = {
        ...Primary.parameters,
        docs: {
          ...Primary.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    primary: true,\n    label: 'Button'\n  }\n}",
            ...Primary.parameters?.docs?.source,
          },
        },
      }),
        (Secondary.parameters = {
          ...Secondary.parameters,
          docs: {
            ...Secondary.parameters?.docs,
            source: {
              originalSource: "{\n  args: {\n    label: 'Button'\n  }\n}",
              ...Secondary.parameters?.docs?.source,
            },
          },
        }),
        (Large.parameters = {
          ...Large.parameters,
          docs: {
            ...Large.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    size: 'large',\n    label: 'Button'\n  }\n}",
              ...Large.parameters?.docs?.source,
            },
          },
        }),
        (Small.parameters = {
          ...Small.parameters,
          docs: {
            ...Small.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    size: 'small',\n    label: 'Button'\n  }\n}",
              ...Small.parameters?.docs?.source,
            },
          },
        });
    },
    './src/stories/Button.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { $: () => Button });
      __webpack_require__('./node_modules/react/index.js');
      var jsx_runtime = __webpack_require__(
        './node_modules/react/jsx-runtime.js'
      );
      const Button = (_ref) => {
        let {
          primary = !1,
          size = 'medium',
          backgroundColor,
          label,
          ...props
        } = _ref;
        const mode = primary
          ? 'storybook-button--primary'
          : 'storybook-button--secondary';
        return (0, jsx_runtime.jsx)('button', {
          type: 'button',
          className: [
            'storybook-button',
            `storybook-button--${size}`,
            mode,
          ].join(' '),
          style: { backgroundColor },
          ...props,
          children: label,
        });
      };
      try {
        (Button.displayName = 'Button'),
          (Button.__docgenInfo = {
            description: 'Primary UI component for user interaction',
            displayName: 'Button',
            props: {
              primary: {
                defaultValue: { value: 'false' },
                description:
                  'Is this the principal call to action on the page?',
                name: 'primary',
                required: !1,
                type: { name: 'boolean' },
              },
              backgroundColor: {
                defaultValue: null,
                description: 'What background color to use',
                name: 'backgroundColor',
                required: !1,
                type: { name: 'string' },
              },
              size: {
                defaultValue: { value: 'medium' },
                description: 'How large should the button be?',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"small"' },
                    { value: '"medium"' },
                    { value: '"large"' },
                  ],
                },
              },
              label: {
                defaultValue: null,
                description: 'Button contents',
                name: 'label',
                required: !0,
                type: { name: 'string' },
              },
              onClick: {
                defaultValue: null,
                description: 'Optional click handler',
                name: 'onClick',
                required: !1,
                type: { name: '(() => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Button.tsx#Button'] = {
              docgenInfo: Button.__docgenInfo,
              name: 'Button',
              path: 'src/stories/Button.tsx#Button',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
]);
