import {
  Link,
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  import_react_router_dom,
  useCatch
} from "/build/_shared/chunk-Z65QXQ3Z.js";
import {
  React,
  __commonJS,
  __toModule,
  init_react,
  require_object_assign,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    init_react();
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React6 = require_react();
        var _assign = require_object_assign();
        var REACT_ELEMENT_TYPE = 60103;
        var REACT_PORTAL_TYPE = 60106;
        exports.Fragment = 60107;
        var REACT_STRICT_MODE_TYPE = 60108;
        var REACT_PROFILER_TYPE = 60114;
        var REACT_PROVIDER_TYPE = 60109;
        var REACT_CONTEXT_TYPE = 60110;
        var REACT_FORWARD_REF_TYPE = 60112;
        var REACT_SUSPENSE_TYPE = 60113;
        var REACT_SUSPENSE_LIST_TYPE = 60120;
        var REACT_MEMO_TYPE = 60115;
        var REACT_LAZY_TYPE = 60116;
        var REACT_BLOCK_TYPE = 60121;
        var REACT_SERVER_BLOCK_TYPE = 60122;
        var REACT_FUNDAMENTAL_TYPE = 60117;
        var REACT_SCOPE_TYPE = 60119;
        var REACT_OPAQUE_ID_TYPE = 60128;
        var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
        var REACT_OFFSCREEN_TYPE = 60130;
        var REACT_LEGACY_HIDDEN_TYPE = 60131;
        if (typeof Symbol === "function" && Symbol.for) {
          var symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor("react.element");
          REACT_PORTAL_TYPE = symbolFor("react.portal");
          exports.Fragment = symbolFor("react.fragment");
          REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
          REACT_PROFILER_TYPE = symbolFor("react.profiler");
          REACT_PROVIDER_TYPE = symbolFor("react.provider");
          REACT_CONTEXT_TYPE = symbolFor("react.context");
          REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
          REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
          REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
          REACT_MEMO_TYPE = symbolFor("react.memo");
          REACT_LAZY_TYPE = symbolFor("react.lazy");
          REACT_BLOCK_TYPE = symbolFor("react.block");
          REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
          REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
          REACT_SCOPE_TYPE = symbolFor("react.scope");
          REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
          REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
          REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
        }
        var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format, args);
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return "" + item;
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var functionName = innerType.displayName || innerType.name || "";
          return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentName(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case exports.Fragment:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                return getComponentName(type.type);
              case REACT_BLOCK_TYPE:
                return getComponentName(type._render);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentName(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: _assign({}, props, {
                  value: prevLog
                }),
                info: _assign({}, props, {
                  value: prevInfo
                }),
                warn: _assign({}, props, {
                  value: prevWarn
                }),
                error: _assign({}, props, {
                  value: prevError
                }),
                group: _assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: _assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: _assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype2 = Component.prototype;
          return !!(prototype2 && prototype2.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_BLOCK_TYPE:
                return describeFunctionComponentFrame(type._render);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(Object.prototype.hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var hasOwnProperty7 = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty7.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty7.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self2) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self2 && ReactCurrentOwner.current.stateNode !== self2) {
              var componentName = getComponentName(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self2, source, owner, props) {
          var element = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            ref,
            props,
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self2
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config, maybeKey, source, self2) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self2);
            }
            for (propName in config) {
              if (hasOwnProperty7.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentName(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (Array.isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentName(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentName(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function jsxWithValidation(type, props, key, isStaticChildren, source, self2) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (Array.isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentName(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self2);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (Array.isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            if (type === exports.Fragment) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        exports.jsx = jsx;
        exports.jsxs = jsxs;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module2) {
    init_react();
    "use strict";
    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "node_modules/tslib/tslib.js"(exports, module2) {
    init_react();
    var __extends2;
    var __assign8;
    var __rest2;
    var __decorate2;
    var __param2;
    var __metadata2;
    var __awaiter9;
    var __generator8;
    var __exportStar2;
    var __values2;
    var __read2;
    var __spread2;
    var __spreadArrays2;
    var __spreadArray2;
    var __await2;
    var __asyncGenerator2;
    var __asyncDelegator2;
    var __asyncValues2;
    var __makeTemplateObject2;
    var __importStar2;
    var __importDefault2;
    var __classPrivateFieldGet2;
    var __classPrivateFieldSet2;
    var __createBinding2;
    (function(factory) {
      var root2 = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root2, createExporter(exports2)));
        });
      } else if (typeof module2 === "object" && typeof module2.exports === "object") {
        factory(createExporter(root2, createExporter(module2.exports)));
      } else {
        factory(createExporter(root2));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root2) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v) {
          return exports2[id] = previous ? previous(id, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b)
          if (Object.prototype.hasOwnProperty.call(b, p))
            d[p] = b[p];
      };
      __extends2 = function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __2() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__2.prototype = b.prototype, new __2());
      };
      __assign8 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest2 = function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      __decorate2 = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param2 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata2 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter9 = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result2) {
            result2.done ? resolve(result2.value) : adopt(result2.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator8 = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __exportStar2 = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding2(o, m, p);
      };
      __createBinding2 = Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __values2 = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read2 = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spread2 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read2(arguments[i]));
        return ar;
      };
      __spreadArrays2 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __spreadArray2 = function(to, from2, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from2.length, ar; i < l; i++) {
            if (ar || !(i in from2)) {
              if (!ar)
                ar = Array.prototype.slice.call(from2, 0, i);
              ar[i] = from2[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from2));
      };
      __await2 = function(v) {
        return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
      };
      __asyncGenerator2 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator2 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await2(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues2 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({ value: v2, done: d });
          }, reject);
        }
      };
      __makeTemplateObject2 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      var __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      };
      __importStar2 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result2 = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding2(result2, mod, k);
        }
        __setModuleDefault(result2, mod);
        return result2;
      };
      __importDefault2 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet2 = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      exporter("__extends", __extends2);
      exporter("__assign", __assign8);
      exporter("__rest", __rest2);
      exporter("__decorate", __decorate2);
      exporter("__param", __param2);
      exporter("__metadata", __metadata2);
      exporter("__awaiter", __awaiter9);
      exporter("__generator", __generator8);
      exporter("__exportStar", __exportStar2);
      exporter("__createBinding", __createBinding2);
      exporter("__values", __values2);
      exporter("__read", __read2);
      exporter("__spread", __spread2);
      exporter("__spreadArrays", __spreadArrays2);
      exporter("__spreadArray", __spreadArray2);
      exporter("__await", __await2);
      exporter("__asyncGenerator", __asyncGenerator2);
      exporter("__asyncDelegator", __asyncDelegator2);
      exporter("__asyncValues", __asyncValues2);
      exporter("__makeTemplateObject", __makeTemplateObject2);
      exporter("__importStar", __importStar2);
      exporter("__importDefault", __importDefault2);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
    });
  }
});

// node_modules/backo2/index.js
var require_backo2 = __commonJS({
  "node_modules/backo2/index.js"(exports, module2) {
    init_react();
    module2.exports = Backoff;
    function Backoff(opts) {
      opts = opts || {};
      this.ms = opts.min || 100;
      this.max = opts.max || 1e4;
      this.factor = opts.factor || 2;
      this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
      this.attempts = 0;
    }
    Backoff.prototype.duration = function() {
      var ms = this.ms * Math.pow(this.factor, this.attempts++);
      if (this.jitter) {
        var rand = Math.random();
        var deviation = Math.floor(rand * this.jitter * ms);
        ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
      }
      return Math.min(ms, this.max) | 0;
    };
    Backoff.prototype.reset = function() {
      this.attempts = 0;
    };
    Backoff.prototype.setMin = function(min) {
      this.ms = min;
    };
    Backoff.prototype.setMax = function(max) {
      this.max = max;
    };
    Backoff.prototype.setJitter = function(jitter) {
      this.jitter = jitter;
    };
  }
});

// node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "node_modules/eventemitter3/index.js"(exports, module2) {
    init_react();
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = Object.create(null);
      if (!new Events().__proto__)
        prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt])
        emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn)
        emitter._events[evt].push(listener);
      else
        emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0)
        emitter._events = new Events();
      else
        delete emitter._events[evt];
    }
    function EventEmitter() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0)
        return names;
      for (name in events = this._events) {
        if (has.call(events, name))
          names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers)
        return [];
      if (handlers.fn)
        return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };
    EventEmitter.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners)
        return 0;
      if (listeners.fn)
        return 1;
      return listeners.length;
    };
    EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return false;
      var listeners = this._events[evt], len = arguments.length, args, i;
      if (listeners.fn) {
        if (listeners.once)
          this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once)
            this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args)
                for (j = 1, args = new Array(len - 1); j < len; j++) {
                  args[j - 1] = arguments[j];
                }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        }
        if (events.length)
          this._events[evt] = events.length === 1 ? events[0] : events;
        else
          clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt])
          clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.addListener = EventEmitter.prototype.on;
    EventEmitter.prefixed = prefix;
    EventEmitter.EventEmitter = EventEmitter;
    if (typeof module2 !== "undefined") {
      module2.exports = EventEmitter;
    }
  }
});

// node_modules/subscriptions-transport-ws/dist/utils/is-string.js
var require_is_string = __commonJS({
  "node_modules/subscriptions-transport-ws/dist/utils/is-string.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isString(value) {
      return typeof value === "string";
    }
    exports.default = isString;
  }
});

// node_modules/subscriptions-transport-ws/dist/utils/is-object.js
var require_is_object = __commonJS({
  "node_modules/subscriptions-transport-ws/dist/utils/is-object.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isObject(value) {
      return value !== null && typeof value === "object";
    }
    exports.default = isObject;
  }
});

// node_modules/graphql/jsutils/nodejsCustomInspectSymbol.js
var require_nodejsCustomInspectSymbol = __commonJS({
  "node_modules/graphql/jsutils/nodejsCustomInspectSymbol.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var nodejsCustomInspectSymbol2 = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : void 0;
    var _default = nodejsCustomInspectSymbol2;
    exports.default = _default;
  }
});

// node_modules/graphql/jsutils/inspect.js
var require_inspect = __commonJS({
  "node_modules/graphql/jsutils/inspect.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = inspect2;
    var _nodejsCustomInspectSymbol = _interopRequireDefault(require_nodejsCustomInspectSymbol());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _typeof2(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof2 = function _typeof3(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof2 = function _typeof3(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof2(obj);
    }
    var MAX_ARRAY_LENGTH2 = 10;
    var MAX_RECURSIVE_DEPTH2 = 2;
    function inspect2(value) {
      return formatValue2(value, []);
    }
    function formatValue2(value, seenValues) {
      switch (_typeof2(value)) {
        case "string":
          return JSON.stringify(value);
        case "function":
          return value.name ? "[function ".concat(value.name, "]") : "[function]";
        case "object":
          if (value === null) {
            return "null";
          }
          return formatObjectValue2(value, seenValues);
        default:
          return String(value);
      }
    }
    function formatObjectValue2(value, previouslySeenValues) {
      if (previouslySeenValues.indexOf(value) !== -1) {
        return "[Circular]";
      }
      var seenValues = [].concat(previouslySeenValues, [value]);
      var customInspectFn = getCustomFn2(value);
      if (customInspectFn !== void 0) {
        var customValue = customInspectFn.call(value);
        if (customValue !== value) {
          return typeof customValue === "string" ? customValue : formatValue2(customValue, seenValues);
        }
      } else if (Array.isArray(value)) {
        return formatArray2(value, seenValues);
      }
      return formatObject2(value, seenValues);
    }
    function formatObject2(object, seenValues) {
      var keys = Object.keys(object);
      if (keys.length === 0) {
        return "{}";
      }
      if (seenValues.length > MAX_RECURSIVE_DEPTH2) {
        return "[" + getObjectTag2(object) + "]";
      }
      var properties = keys.map(function(key) {
        var value = formatValue2(object[key], seenValues);
        return key + ": " + value;
      });
      return "{ " + properties.join(", ") + " }";
    }
    function formatArray2(array, seenValues) {
      if (array.length === 0) {
        return "[]";
      }
      if (seenValues.length > MAX_RECURSIVE_DEPTH2) {
        return "[Array]";
      }
      var len = Math.min(MAX_ARRAY_LENGTH2, array.length);
      var remaining = array.length - len;
      var items = [];
      for (var i = 0; i < len; ++i) {
        items.push(formatValue2(array[i], seenValues));
      }
      if (remaining === 1) {
        items.push("... 1 more item");
      } else if (remaining > 1) {
        items.push("... ".concat(remaining, " more items"));
      }
      return "[" + items.join(", ") + "]";
    }
    function getCustomFn2(object) {
      var customInspectFn = object[String(_nodejsCustomInspectSymbol.default)];
      if (typeof customInspectFn === "function") {
        return customInspectFn;
      }
      if (typeof object.inspect === "function") {
        return object.inspect;
      }
    }
    function getObjectTag2(object) {
      var tag = Object.prototype.toString.call(object).replace(/^\[object /, "").replace(/]$/, "");
      if (tag === "Object" && typeof object.constructor === "function") {
        var name = object.constructor.name;
        if (typeof name === "string" && name !== "") {
          return name;
        }
      }
      return tag;
    }
  }
});

// node_modules/graphql/jsutils/invariant.js
var require_invariant = __commonJS({
  "node_modules/graphql/jsutils/invariant.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = invariant3;
    function invariant3(condition, message) {
      var booleanCondition = Boolean(condition);
      if (!booleanCondition) {
        throw new Error(message != null ? message : "Unexpected invariant triggered.");
      }
    }
  }
});

// node_modules/graphql/jsutils/defineInspect.js
var require_defineInspect = __commonJS({
  "node_modules/graphql/jsutils/defineInspect.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = defineInspect2;
    var _invariant = _interopRequireDefault(require_invariant());
    var _nodejsCustomInspectSymbol = _interopRequireDefault(require_nodejsCustomInspectSymbol());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function defineInspect2(classObject) {
      var fn = classObject.prototype.toJSON;
      typeof fn === "function" || (0, _invariant.default)(0);
      classObject.prototype.inspect = fn;
      if (_nodejsCustomInspectSymbol.default) {
        classObject.prototype[_nodejsCustomInspectSymbol.default] = fn;
      }
    }
  }
});

// node_modules/graphql/language/ast.js
var require_ast = __commonJS({
  "node_modules/graphql/language/ast.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isNode = isNode2;
    exports.Token = exports.Location = void 0;
    var _defineInspect = _interopRequireDefault(require_defineInspect());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var Location2 = /* @__PURE__ */ function() {
      function Location3(startToken, endToken, source) {
        this.start = startToken.start;
        this.end = endToken.end;
        this.startToken = startToken;
        this.endToken = endToken;
        this.source = source;
      }
      var _proto = Location3.prototype;
      _proto.toJSON = function toJSON() {
        return {
          start: this.start,
          end: this.end
        };
      };
      return Location3;
    }();
    exports.Location = Location2;
    (0, _defineInspect.default)(Location2);
    var Token2 = /* @__PURE__ */ function() {
      function Token3(kind, start, end, line, column, prev, value) {
        this.kind = kind;
        this.start = start;
        this.end = end;
        this.line = line;
        this.column = column;
        this.value = value;
        this.prev = prev;
        this.next = null;
      }
      var _proto2 = Token3.prototype;
      _proto2.toJSON = function toJSON() {
        return {
          kind: this.kind,
          value: this.value,
          line: this.line,
          column: this.column
        };
      };
      return Token3;
    }();
    exports.Token = Token2;
    (0, _defineInspect.default)(Token2);
    function isNode2(maybeNode) {
      return maybeNode != null && typeof maybeNode.kind === "string";
    }
  }
});

// node_modules/graphql/language/visitor.js
var require_visitor = __commonJS({
  "node_modules/graphql/language/visitor.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.visit = visit2;
    exports.visitInParallel = visitInParallel2;
    exports.getVisitFn = getVisitFn2;
    exports.BREAK = exports.QueryDocumentKeys = void 0;
    var _inspect = _interopRequireDefault(require_inspect());
    var _ast = require_ast();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var QueryDocumentKeys2 = {
      Name: [],
      Document: ["definitions"],
      OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
      VariableDefinition: ["variable", "type", "defaultValue", "directives"],
      Variable: ["name"],
      SelectionSet: ["selections"],
      Field: ["alias", "name", "arguments", "directives", "selectionSet"],
      Argument: ["name", "value"],
      FragmentSpread: ["name", "directives"],
      InlineFragment: ["typeCondition", "directives", "selectionSet"],
      FragmentDefinition: [
        "name",
        "variableDefinitions",
        "typeCondition",
        "directives",
        "selectionSet"
      ],
      IntValue: [],
      FloatValue: [],
      StringValue: [],
      BooleanValue: [],
      NullValue: [],
      EnumValue: [],
      ListValue: ["values"],
      ObjectValue: ["fields"],
      ObjectField: ["name", "value"],
      Directive: ["name", "arguments"],
      NamedType: ["name"],
      ListType: ["type"],
      NonNullType: ["type"],
      SchemaDefinition: ["description", "directives", "operationTypes"],
      OperationTypeDefinition: ["type"],
      ScalarTypeDefinition: ["description", "name", "directives"],
      ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
      FieldDefinition: ["description", "name", "arguments", "type", "directives"],
      InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
      InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
      UnionTypeDefinition: ["description", "name", "directives", "types"],
      EnumTypeDefinition: ["description", "name", "directives", "values"],
      EnumValueDefinition: ["description", "name", "directives"],
      InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
      DirectiveDefinition: ["description", "name", "arguments", "locations"],
      SchemaExtension: ["directives", "operationTypes"],
      ScalarTypeExtension: ["name", "directives"],
      ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
      InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
      UnionTypeExtension: ["name", "directives", "types"],
      EnumTypeExtension: ["name", "directives", "values"],
      InputObjectTypeExtension: ["name", "directives", "fields"]
    };
    exports.QueryDocumentKeys = QueryDocumentKeys2;
    var BREAK2 = Object.freeze({});
    exports.BREAK = BREAK2;
    function visit2(root2, visitor) {
      var visitorKeys = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : QueryDocumentKeys2;
      var stack = void 0;
      var inArray = Array.isArray(root2);
      var keys = [root2];
      var index = -1;
      var edits = [];
      var node = void 0;
      var key = void 0;
      var parent = void 0;
      var path = [];
      var ancestors = [];
      var newRoot = root2;
      do {
        index++;
        var isLeaving = index === keys.length;
        var isEdited = isLeaving && edits.length !== 0;
        if (isLeaving) {
          key = ancestors.length === 0 ? void 0 : path[path.length - 1];
          node = parent;
          parent = ancestors.pop();
          if (isEdited) {
            if (inArray) {
              node = node.slice();
            } else {
              var clone = {};
              for (var _i2 = 0, _Object$keys2 = Object.keys(node); _i2 < _Object$keys2.length; _i2++) {
                var k = _Object$keys2[_i2];
                clone[k] = node[k];
              }
              node = clone;
            }
            var editOffset = 0;
            for (var ii = 0; ii < edits.length; ii++) {
              var editKey = edits[ii][0];
              var editValue = edits[ii][1];
              if (inArray) {
                editKey -= editOffset;
              }
              if (inArray && editValue === null) {
                node.splice(editKey, 1);
                editOffset++;
              } else {
                node[editKey] = editValue;
              }
            }
          }
          index = stack.index;
          keys = stack.keys;
          edits = stack.edits;
          inArray = stack.inArray;
          stack = stack.prev;
        } else {
          key = parent ? inArray ? index : keys[index] : void 0;
          node = parent ? parent[key] : newRoot;
          if (node === null || node === void 0) {
            continue;
          }
          if (parent) {
            path.push(key);
          }
        }
        var result2 = void 0;
        if (!Array.isArray(node)) {
          if (!(0, _ast.isNode)(node)) {
            throw new Error("Invalid AST Node: ".concat((0, _inspect.default)(node), "."));
          }
          var visitFn = getVisitFn2(visitor, node.kind, isLeaving);
          if (visitFn) {
            result2 = visitFn.call(visitor, node, key, parent, path, ancestors);
            if (result2 === BREAK2) {
              break;
            }
            if (result2 === false) {
              if (!isLeaving) {
                path.pop();
                continue;
              }
            } else if (result2 !== void 0) {
              edits.push([key, result2]);
              if (!isLeaving) {
                if ((0, _ast.isNode)(result2)) {
                  node = result2;
                } else {
                  path.pop();
                  continue;
                }
              }
            }
          }
        }
        if (result2 === void 0 && isEdited) {
          edits.push([key, node]);
        }
        if (isLeaving) {
          path.pop();
        } else {
          var _visitorKeys$node$kin;
          stack = {
            inArray,
            index,
            keys,
            edits,
            prev: stack
          };
          inArray = Array.isArray(node);
          keys = inArray ? node : (_visitorKeys$node$kin = visitorKeys[node.kind]) !== null && _visitorKeys$node$kin !== void 0 ? _visitorKeys$node$kin : [];
          index = -1;
          edits = [];
          if (parent) {
            ancestors.push(parent);
          }
          parent = node;
        }
      } while (stack !== void 0);
      if (edits.length !== 0) {
        newRoot = edits[edits.length - 1][1];
      }
      return newRoot;
    }
    function visitInParallel2(visitors) {
      var skipping = new Array(visitors.length);
      return {
        enter: function enter(node) {
          for (var i = 0; i < visitors.length; i++) {
            if (skipping[i] == null) {
              var fn = getVisitFn2(visitors[i], node.kind, false);
              if (fn) {
                var result2 = fn.apply(visitors[i], arguments);
                if (result2 === false) {
                  skipping[i] = node;
                } else if (result2 === BREAK2) {
                  skipping[i] = BREAK2;
                } else if (result2 !== void 0) {
                  return result2;
                }
              }
            }
          }
        },
        leave: function leave(node) {
          for (var i = 0; i < visitors.length; i++) {
            if (skipping[i] == null) {
              var fn = getVisitFn2(visitors[i], node.kind, true);
              if (fn) {
                var result2 = fn.apply(visitors[i], arguments);
                if (result2 === BREAK2) {
                  skipping[i] = BREAK2;
                } else if (result2 !== void 0 && result2 !== false) {
                  return result2;
                }
              }
            } else if (skipping[i] === node) {
              skipping[i] = null;
            }
          }
        }
      };
    }
    function getVisitFn2(visitor, kind, isLeaving) {
      var kindVisitor = visitor[kind];
      if (kindVisitor) {
        if (!isLeaving && typeof kindVisitor === "function") {
          return kindVisitor;
        }
        var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;
        if (typeof kindSpecificVisitor === "function") {
          return kindSpecificVisitor;
        }
      } else {
        var specificVisitor = isLeaving ? visitor.leave : visitor.enter;
        if (specificVisitor) {
          if (typeof specificVisitor === "function") {
            return specificVisitor;
          }
          var specificKindVisitor = specificVisitor[kind];
          if (typeof specificKindVisitor === "function") {
            return specificKindVisitor;
          }
        }
      }
    }
  }
});

// node_modules/graphql/language/blockString.js
var require_blockString = __commonJS({
  "node_modules/graphql/language/blockString.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.dedentBlockStringValue = dedentBlockStringValue;
    exports.getBlockStringIndentation = getBlockStringIndentation;
    exports.printBlockString = printBlockString2;
    function dedentBlockStringValue(rawString) {
      var lines = rawString.split(/\r\n|[\n\r]/g);
      var commonIndent = getBlockStringIndentation(rawString);
      if (commonIndent !== 0) {
        for (var i = 1; i < lines.length; i++) {
          lines[i] = lines[i].slice(commonIndent);
        }
      }
      var startLine = 0;
      while (startLine < lines.length && isBlank(lines[startLine])) {
        ++startLine;
      }
      var endLine = lines.length;
      while (endLine > startLine && isBlank(lines[endLine - 1])) {
        --endLine;
      }
      return lines.slice(startLine, endLine).join("\n");
    }
    function isBlank(str) {
      for (var i = 0; i < str.length; ++i) {
        if (str[i] !== " " && str[i] !== "	") {
          return false;
        }
      }
      return true;
    }
    function getBlockStringIndentation(value) {
      var _commonIndent;
      var isFirstLine = true;
      var isEmptyLine = true;
      var indent2 = 0;
      var commonIndent = null;
      for (var i = 0; i < value.length; ++i) {
        switch (value.charCodeAt(i)) {
          case 13:
            if (value.charCodeAt(i + 1) === 10) {
              ++i;
            }
          case 10:
            isFirstLine = false;
            isEmptyLine = true;
            indent2 = 0;
            break;
          case 9:
          case 32:
            ++indent2;
            break;
          default:
            if (isEmptyLine && !isFirstLine && (commonIndent === null || indent2 < commonIndent)) {
              commonIndent = indent2;
            }
            isEmptyLine = false;
        }
      }
      return (_commonIndent = commonIndent) !== null && _commonIndent !== void 0 ? _commonIndent : 0;
    }
    function printBlockString2(value) {
      var indentation = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var preferMultipleLines = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      var isSingleLine = value.indexOf("\n") === -1;
      var hasLeadingSpace = value[0] === " " || value[0] === "	";
      var hasTrailingQuote = value[value.length - 1] === '"';
      var hasTrailingSlash = value[value.length - 1] === "\\";
      var printAsMultipleLines = !isSingleLine || hasTrailingQuote || hasTrailingSlash || preferMultipleLines;
      var result2 = "";
      if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
        result2 += "\n" + indentation;
      }
      result2 += indentation ? value.replace(/\n/g, "\n" + indentation) : value;
      if (printAsMultipleLines) {
        result2 += "\n";
      }
      return '"""' + result2.replace(/"""/g, '\\"""') + '"""';
    }
  }
});

// node_modules/graphql/language/printer.js
var require_printer = __commonJS({
  "node_modules/graphql/language/printer.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.print = print2;
    var _visitor = require_visitor();
    var _blockString = require_blockString();
    function print2(ast) {
      return (0, _visitor.visit)(ast, {
        leave: printDocASTReducer2
      });
    }
    var MAX_LINE_LENGTH2 = 80;
    var printDocASTReducer2 = {
      Name: function Name2(node) {
        return node.value;
      },
      Variable: function Variable2(node) {
        return "$" + node.name;
      },
      Document: function Document3(node) {
        return join2(node.definitions, "\n\n") + "\n";
      },
      OperationDefinition: function OperationDefinition2(node) {
        var op = node.operation;
        var name = node.name;
        var varDefs = wrap3("(", join2(node.variableDefinitions, ", "), ")");
        var directives = join2(node.directives, " ");
        var selectionSet = node.selectionSet;
        return !name && !directives && !varDefs && op === "query" ? selectionSet : join2([op, join2([name, varDefs]), directives, selectionSet], " ");
      },
      VariableDefinition: function VariableDefinition2(_ref) {
        var variable = _ref.variable, type = _ref.type, defaultValue = _ref.defaultValue, directives = _ref.directives;
        return variable + ": " + type + wrap3(" = ", defaultValue) + wrap3(" ", join2(directives, " "));
      },
      SelectionSet: function SelectionSet2(_ref2) {
        var selections = _ref2.selections;
        return block2(selections);
      },
      Field: function Field2(_ref3) {
        var alias = _ref3.alias, name = _ref3.name, args = _ref3.arguments, directives = _ref3.directives, selectionSet = _ref3.selectionSet;
        var prefix = wrap3("", alias, ": ") + name;
        var argsLine = prefix + wrap3("(", join2(args, ", "), ")");
        if (argsLine.length > MAX_LINE_LENGTH2) {
          argsLine = prefix + wrap3("(\n", indent2(join2(args, "\n")), "\n)");
        }
        return join2([argsLine, join2(directives, " "), selectionSet], " ");
      },
      Argument: function Argument2(_ref4) {
        var name = _ref4.name, value = _ref4.value;
        return name + ": " + value;
      },
      FragmentSpread: function FragmentSpread2(_ref5) {
        var name = _ref5.name, directives = _ref5.directives;
        return "..." + name + wrap3(" ", join2(directives, " "));
      },
      InlineFragment: function InlineFragment2(_ref6) {
        var typeCondition = _ref6.typeCondition, directives = _ref6.directives, selectionSet = _ref6.selectionSet;
        return join2(["...", wrap3("on ", typeCondition), join2(directives, " "), selectionSet], " ");
      },
      FragmentDefinition: function FragmentDefinition2(_ref7) {
        var name = _ref7.name, typeCondition = _ref7.typeCondition, variableDefinitions = _ref7.variableDefinitions, directives = _ref7.directives, selectionSet = _ref7.selectionSet;
        return "fragment ".concat(name).concat(wrap3("(", join2(variableDefinitions, ", "), ")"), " ") + "on ".concat(typeCondition, " ").concat(wrap3("", join2(directives, " "), " ")) + selectionSet;
      },
      IntValue: function IntValue2(_ref8) {
        var value = _ref8.value;
        return value;
      },
      FloatValue: function FloatValue2(_ref9) {
        var value = _ref9.value;
        return value;
      },
      StringValue: function StringValue2(_ref10, key) {
        var value = _ref10.value, isBlockString = _ref10.block;
        return isBlockString ? (0, _blockString.printBlockString)(value, key === "description" ? "" : "  ") : JSON.stringify(value);
      },
      BooleanValue: function BooleanValue2(_ref11) {
        var value = _ref11.value;
        return value ? "true" : "false";
      },
      NullValue: function NullValue2() {
        return "null";
      },
      EnumValue: function EnumValue2(_ref12) {
        var value = _ref12.value;
        return value;
      },
      ListValue: function ListValue2(_ref13) {
        var values = _ref13.values;
        return "[" + join2(values, ", ") + "]";
      },
      ObjectValue: function ObjectValue2(_ref14) {
        var fields = _ref14.fields;
        return "{" + join2(fields, ", ") + "}";
      },
      ObjectField: function ObjectField2(_ref15) {
        var name = _ref15.name, value = _ref15.value;
        return name + ": " + value;
      },
      Directive: function Directive2(_ref16) {
        var name = _ref16.name, args = _ref16.arguments;
        return "@" + name + wrap3("(", join2(args, ", "), ")");
      },
      NamedType: function NamedType2(_ref17) {
        var name = _ref17.name;
        return name;
      },
      ListType: function ListType2(_ref18) {
        var type = _ref18.type;
        return "[" + type + "]";
      },
      NonNullType: function NonNullType2(_ref19) {
        var type = _ref19.type;
        return type + "!";
      },
      SchemaDefinition: addDescription2(function(_ref20) {
        var directives = _ref20.directives, operationTypes = _ref20.operationTypes;
        return join2(["schema", join2(directives, " "), block2(operationTypes)], " ");
      }),
      OperationTypeDefinition: function OperationTypeDefinition2(_ref21) {
        var operation = _ref21.operation, type = _ref21.type;
        return operation + ": " + type;
      },
      ScalarTypeDefinition: addDescription2(function(_ref22) {
        var name = _ref22.name, directives = _ref22.directives;
        return join2(["scalar", name, join2(directives, " ")], " ");
      }),
      ObjectTypeDefinition: addDescription2(function(_ref23) {
        var name = _ref23.name, interfaces = _ref23.interfaces, directives = _ref23.directives, fields = _ref23.fields;
        return join2(["type", name, wrap3("implements ", join2(interfaces, " & ")), join2(directives, " "), block2(fields)], " ");
      }),
      FieldDefinition: addDescription2(function(_ref24) {
        var name = _ref24.name, args = _ref24.arguments, type = _ref24.type, directives = _ref24.directives;
        return name + (hasMultilineItems2(args) ? wrap3("(\n", indent2(join2(args, "\n")), "\n)") : wrap3("(", join2(args, ", "), ")")) + ": " + type + wrap3(" ", join2(directives, " "));
      }),
      InputValueDefinition: addDescription2(function(_ref25) {
        var name = _ref25.name, type = _ref25.type, defaultValue = _ref25.defaultValue, directives = _ref25.directives;
        return join2([name + ": " + type, wrap3("= ", defaultValue), join2(directives, " ")], " ");
      }),
      InterfaceTypeDefinition: addDescription2(function(_ref26) {
        var name = _ref26.name, interfaces = _ref26.interfaces, directives = _ref26.directives, fields = _ref26.fields;
        return join2(["interface", name, wrap3("implements ", join2(interfaces, " & ")), join2(directives, " "), block2(fields)], " ");
      }),
      UnionTypeDefinition: addDescription2(function(_ref27) {
        var name = _ref27.name, directives = _ref27.directives, types = _ref27.types;
        return join2(["union", name, join2(directives, " "), types && types.length !== 0 ? "= " + join2(types, " | ") : ""], " ");
      }),
      EnumTypeDefinition: addDescription2(function(_ref28) {
        var name = _ref28.name, directives = _ref28.directives, values = _ref28.values;
        return join2(["enum", name, join2(directives, " "), block2(values)], " ");
      }),
      EnumValueDefinition: addDescription2(function(_ref29) {
        var name = _ref29.name, directives = _ref29.directives;
        return join2([name, join2(directives, " ")], " ");
      }),
      InputObjectTypeDefinition: addDescription2(function(_ref30) {
        var name = _ref30.name, directives = _ref30.directives, fields = _ref30.fields;
        return join2(["input", name, join2(directives, " "), block2(fields)], " ");
      }),
      DirectiveDefinition: addDescription2(function(_ref31) {
        var name = _ref31.name, args = _ref31.arguments, repeatable = _ref31.repeatable, locations = _ref31.locations;
        return "directive @" + name + (hasMultilineItems2(args) ? wrap3("(\n", indent2(join2(args, "\n")), "\n)") : wrap3("(", join2(args, ", "), ")")) + (repeatable ? " repeatable" : "") + " on " + join2(locations, " | ");
      }),
      SchemaExtension: function SchemaExtension2(_ref32) {
        var directives = _ref32.directives, operationTypes = _ref32.operationTypes;
        return join2(["extend schema", join2(directives, " "), block2(operationTypes)], " ");
      },
      ScalarTypeExtension: function ScalarTypeExtension2(_ref33) {
        var name = _ref33.name, directives = _ref33.directives;
        return join2(["extend scalar", name, join2(directives, " ")], " ");
      },
      ObjectTypeExtension: function ObjectTypeExtension2(_ref34) {
        var name = _ref34.name, interfaces = _ref34.interfaces, directives = _ref34.directives, fields = _ref34.fields;
        return join2(["extend type", name, wrap3("implements ", join2(interfaces, " & ")), join2(directives, " "), block2(fields)], " ");
      },
      InterfaceTypeExtension: function InterfaceTypeExtension2(_ref35) {
        var name = _ref35.name, interfaces = _ref35.interfaces, directives = _ref35.directives, fields = _ref35.fields;
        return join2(["extend interface", name, wrap3("implements ", join2(interfaces, " & ")), join2(directives, " "), block2(fields)], " ");
      },
      UnionTypeExtension: function UnionTypeExtension2(_ref36) {
        var name = _ref36.name, directives = _ref36.directives, types = _ref36.types;
        return join2(["extend union", name, join2(directives, " "), types && types.length !== 0 ? "= " + join2(types, " | ") : ""], " ");
      },
      EnumTypeExtension: function EnumTypeExtension2(_ref37) {
        var name = _ref37.name, directives = _ref37.directives, values = _ref37.values;
        return join2(["extend enum", name, join2(directives, " "), block2(values)], " ");
      },
      InputObjectTypeExtension: function InputObjectTypeExtension2(_ref38) {
        var name = _ref38.name, directives = _ref38.directives, fields = _ref38.fields;
        return join2(["extend input", name, join2(directives, " "), block2(fields)], " ");
      }
    };
    function addDescription2(cb) {
      return function(node) {
        return join2([node.description, cb(node)], "\n");
      };
    }
    function join2(maybeArray) {
      var _maybeArray$filter$jo;
      var separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter(function(x) {
        return x;
      }).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : "";
    }
    function block2(array) {
      return wrap3("{\n", indent2(join2(array, "\n")), "\n}");
    }
    function wrap3(start, maybeString) {
      var end = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
      return maybeString != null && maybeString !== "" ? start + maybeString + end : "";
    }
    function indent2(str) {
      return wrap3("  ", str.replace(/\n/g, "\n  "));
    }
    function isMultiline2(str) {
      return str.indexOf("\n") !== -1;
    }
    function hasMultilineItems2(maybeArray) {
      return maybeArray != null && maybeArray.some(isMultiline2);
    }
  }
});

// node_modules/graphql/language/kinds.js
var require_kinds = __commonJS({
  "node_modules/graphql/language/kinds.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Kind = void 0;
    var Kind2 = Object.freeze({
      NAME: "Name",
      DOCUMENT: "Document",
      OPERATION_DEFINITION: "OperationDefinition",
      VARIABLE_DEFINITION: "VariableDefinition",
      SELECTION_SET: "SelectionSet",
      FIELD: "Field",
      ARGUMENT: "Argument",
      FRAGMENT_SPREAD: "FragmentSpread",
      INLINE_FRAGMENT: "InlineFragment",
      FRAGMENT_DEFINITION: "FragmentDefinition",
      VARIABLE: "Variable",
      INT: "IntValue",
      FLOAT: "FloatValue",
      STRING: "StringValue",
      BOOLEAN: "BooleanValue",
      NULL: "NullValue",
      ENUM: "EnumValue",
      LIST: "ListValue",
      OBJECT: "ObjectValue",
      OBJECT_FIELD: "ObjectField",
      DIRECTIVE: "Directive",
      NAMED_TYPE: "NamedType",
      LIST_TYPE: "ListType",
      NON_NULL_TYPE: "NonNullType",
      SCHEMA_DEFINITION: "SchemaDefinition",
      OPERATION_TYPE_DEFINITION: "OperationTypeDefinition",
      SCALAR_TYPE_DEFINITION: "ScalarTypeDefinition",
      OBJECT_TYPE_DEFINITION: "ObjectTypeDefinition",
      FIELD_DEFINITION: "FieldDefinition",
      INPUT_VALUE_DEFINITION: "InputValueDefinition",
      INTERFACE_TYPE_DEFINITION: "InterfaceTypeDefinition",
      UNION_TYPE_DEFINITION: "UnionTypeDefinition",
      ENUM_TYPE_DEFINITION: "EnumTypeDefinition",
      ENUM_VALUE_DEFINITION: "EnumValueDefinition",
      INPUT_OBJECT_TYPE_DEFINITION: "InputObjectTypeDefinition",
      DIRECTIVE_DEFINITION: "DirectiveDefinition",
      SCHEMA_EXTENSION: "SchemaExtension",
      SCALAR_TYPE_EXTENSION: "ScalarTypeExtension",
      OBJECT_TYPE_EXTENSION: "ObjectTypeExtension",
      INTERFACE_TYPE_EXTENSION: "InterfaceTypeExtension",
      UNION_TYPE_EXTENSION: "UnionTypeExtension",
      ENUM_TYPE_EXTENSION: "EnumTypeExtension",
      INPUT_OBJECT_TYPE_EXTENSION: "InputObjectTypeExtension"
    });
    exports.Kind = Kind2;
  }
});

// node_modules/graphql/utilities/getOperationAST.js
var require_getOperationAST = __commonJS({
  "node_modules/graphql/utilities/getOperationAST.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getOperationAST = getOperationAST;
    var _kinds = require_kinds();
    function getOperationAST(documentAST, operationName) {
      var operation = null;
      for (var _i2 = 0, _documentAST$definiti2 = documentAST.definitions; _i2 < _documentAST$definiti2.length; _i2++) {
        var definition = _documentAST$definiti2[_i2];
        if (definition.kind === _kinds.Kind.OPERATION_DEFINITION) {
          var _definition$name;
          if (operationName == null) {
            if (operation) {
              return null;
            }
            operation = definition;
          } else if (((_definition$name = definition.name) === null || _definition$name === void 0 ? void 0 : _definition$name.value) === operationName) {
            return definition;
          }
        }
      }
      return operation;
    }
  }
});

// node_modules/subscriptions-transport-ws/node_modules/symbol-observable/lib/ponyfill.js
var require_ponyfill = __commonJS({
  "node_modules/subscriptions-transport-ws/node_modules/symbol-observable/lib/ponyfill.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = symbolObservablePonyfill2;
    function symbolObservablePonyfill2(root2) {
      var result2;
      var _Symbol = root2.Symbol;
      if (typeof _Symbol === "function") {
        if (_Symbol.observable) {
          result2 = _Symbol.observable;
        } else {
          result2 = _Symbol("observable");
          _Symbol.observable = result2;
        }
      } else {
        result2 = "@@observable";
      }
      return result2;
    }
  }
});

// node_modules/subscriptions-transport-ws/node_modules/symbol-observable/lib/index.js
var require_lib = __commonJS({
  "node_modules/subscriptions-transport-ws/node_modules/symbol-observable/lib/index.js"(exports, module2) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _ponyfill = require_ponyfill();
    var _ponyfill2 = _interopRequireDefault(_ponyfill);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var root2;
    if (typeof self !== "undefined") {
      root2 = self;
    } else if (typeof window !== "undefined") {
      root2 = window;
    } else if (typeof global !== "undefined") {
      root2 = global;
    } else if (typeof module2 !== "undefined") {
      root2 = module2;
    } else {
      root2 = Function("return this")();
    }
    var result2 = (0, _ponyfill2["default"])(root2);
    exports["default"] = result2;
  }
});

// node_modules/subscriptions-transport-ws/dist/protocol.js
var require_protocol = __commonJS({
  "node_modules/subscriptions-transport-ws/dist/protocol.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GRAPHQL_SUBSCRIPTIONS = exports.GRAPHQL_WS = void 0;
    var GRAPHQL_WS = "graphql-ws";
    exports.GRAPHQL_WS = GRAPHQL_WS;
    var GRAPHQL_SUBSCRIPTIONS = "graphql-subscriptions";
    exports.GRAPHQL_SUBSCRIPTIONS = GRAPHQL_SUBSCRIPTIONS;
  }
});

// node_modules/subscriptions-transport-ws/dist/defaults.js
var require_defaults = __commonJS({
  "node_modules/subscriptions-transport-ws/dist/defaults.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WS_TIMEOUT = exports.MIN_WS_TIMEOUT = void 0;
    var MIN_WS_TIMEOUT = 1e3;
    exports.MIN_WS_TIMEOUT = MIN_WS_TIMEOUT;
    var WS_TIMEOUT = 3e4;
    exports.WS_TIMEOUT = WS_TIMEOUT;
  }
});

// node_modules/subscriptions-transport-ws/dist/message-types.js
var require_message_types = __commonJS({
  "node_modules/subscriptions-transport-ws/dist/message-types.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MessageTypes = function() {
      function MessageTypes2() {
        throw new Error("Static Class");
      }
      MessageTypes2.GQL_CONNECTION_INIT = "connection_init";
      MessageTypes2.GQL_CONNECTION_ACK = "connection_ack";
      MessageTypes2.GQL_CONNECTION_ERROR = "connection_error";
      MessageTypes2.GQL_CONNECTION_KEEP_ALIVE = "ka";
      MessageTypes2.GQL_CONNECTION_TERMINATE = "connection_terminate";
      MessageTypes2.GQL_START = "start";
      MessageTypes2.GQL_DATA = "data";
      MessageTypes2.GQL_ERROR = "error";
      MessageTypes2.GQL_COMPLETE = "complete";
      MessageTypes2.GQL_STOP = "stop";
      MessageTypes2.SUBSCRIPTION_START = "subscription_start";
      MessageTypes2.SUBSCRIPTION_DATA = "subscription_data";
      MessageTypes2.SUBSCRIPTION_SUCCESS = "subscription_success";
      MessageTypes2.SUBSCRIPTION_FAIL = "subscription_fail";
      MessageTypes2.SUBSCRIPTION_END = "subscription_end";
      MessageTypes2.INIT = "init";
      MessageTypes2.INIT_SUCCESS = "init_success";
      MessageTypes2.INIT_FAIL = "init_fail";
      MessageTypes2.KEEP_ALIVE = "keepalive";
      return MessageTypes2;
    }();
    exports.default = MessageTypes;
  }
});

// node_modules/subscriptions-transport-ws/dist/client.js
var require_client = __commonJS({
  "node_modules/subscriptions-transport-ws/dist/client.js"(exports) {
    init_react();
    "use strict";
    var __assign8 = exports && exports.__assign || function() {
      __assign8 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign8.apply(this, arguments);
    };
    var __awaiter9 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result2) {
          result2.done ? resolve(result2.value) : adopt(result2.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator8 = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    var __spreadArrays2 = exports && exports.__spreadArrays || function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++)
        s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
      return r;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SubscriptionClient = void 0;
    var _global = typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : {};
    var NativeWebSocket = _global.WebSocket || _global.MozWebSocket;
    var Backoff = require_backo2();
    var eventemitter3_1 = require_eventemitter3();
    var is_string_1 = require_is_string();
    var is_object_1 = require_is_object();
    var printer_1 = require_printer();
    var getOperationAST_1 = require_getOperationAST();
    var symbol_observable_1 = require_lib();
    var protocol_1 = require_protocol();
    var defaults_1 = require_defaults();
    var message_types_1 = require_message_types();
    var SubscriptionClient3 = function() {
      function SubscriptionClient4(url, options, webSocketImpl, webSocketProtocols) {
        var _a5 = options || {}, _b = _a5.connectionCallback, connectionCallback = _b === void 0 ? void 0 : _b, _c = _a5.connectionParams, connectionParams = _c === void 0 ? {} : _c, _d = _a5.minTimeout, minTimeout = _d === void 0 ? defaults_1.MIN_WS_TIMEOUT : _d, _e = _a5.timeout, timeout = _e === void 0 ? defaults_1.WS_TIMEOUT : _e, _f = _a5.reconnect, reconnect = _f === void 0 ? false : _f, _g = _a5.reconnectionAttempts, reconnectionAttempts = _g === void 0 ? Infinity : _g, _h = _a5.lazy, lazy = _h === void 0 ? false : _h, _j = _a5.inactivityTimeout, inactivityTimeout = _j === void 0 ? 0 : _j, _k = _a5.wsOptionArguments, wsOptionArguments = _k === void 0 ? [] : _k;
        this.wsImpl = webSocketImpl || NativeWebSocket;
        if (!this.wsImpl) {
          throw new Error("Unable to find native implementation, or alternative implementation for WebSocket!");
        }
        this.wsProtocols = webSocketProtocols || protocol_1.GRAPHQL_WS;
        this.connectionCallback = connectionCallback;
        this.url = url;
        this.operations = {};
        this.nextOperationId = 0;
        this.minWsTimeout = minTimeout;
        this.wsTimeout = timeout;
        this.unsentMessagesQueue = [];
        this.reconnect = reconnect;
        this.reconnecting = false;
        this.reconnectionAttempts = reconnectionAttempts;
        this.lazy = !!lazy;
        this.inactivityTimeout = inactivityTimeout;
        this.closedByUser = false;
        this.backoff = new Backoff({ jitter: 0.5 });
        this.eventEmitter = new eventemitter3_1.EventEmitter();
        this.middlewares = [];
        this.client = null;
        this.maxConnectTimeGenerator = this.createMaxConnectTimeGenerator();
        this.connectionParams = this.getConnectionParams(connectionParams);
        this.wsOptionArguments = wsOptionArguments;
        if (!this.lazy) {
          this.connect();
        }
      }
      Object.defineProperty(SubscriptionClient4.prototype, "status", {
        get: function() {
          if (this.client === null) {
            return this.wsImpl.CLOSED;
          }
          return this.client.readyState;
        },
        enumerable: false,
        configurable: true
      });
      SubscriptionClient4.prototype.close = function(isForced, closedByUser) {
        if (isForced === void 0) {
          isForced = true;
        }
        if (closedByUser === void 0) {
          closedByUser = true;
        }
        this.clearInactivityTimeout();
        if (this.client !== null) {
          this.closedByUser = closedByUser;
          if (isForced) {
            this.clearCheckConnectionInterval();
            this.clearMaxConnectTimeout();
            this.clearTryReconnectTimeout();
            this.unsubscribeAll();
            this.sendMessage(void 0, message_types_1.default.GQL_CONNECTION_TERMINATE, null);
          }
          this.client.close();
          this.client.onopen = null;
          this.client.onclose = null;
          this.client.onerror = null;
          this.client.onmessage = null;
          this.client = null;
          this.eventEmitter.emit("disconnected");
          if (!isForced) {
            this.tryReconnect();
          }
        }
      };
      SubscriptionClient4.prototype.request = function(request) {
        var _a5;
        var getObserver = this.getObserver.bind(this);
        var executeOperation = this.executeOperation.bind(this);
        var unsubscribe = this.unsubscribe.bind(this);
        var opId;
        this.clearInactivityTimeout();
        return _a5 = {}, _a5[symbol_observable_1.default] = function() {
          return this;
        }, _a5.subscribe = function(observerOrNext, onError, onComplete) {
          var observer = getObserver(observerOrNext, onError, onComplete);
          opId = executeOperation(request, function(error, result2) {
            if (error === null && result2 === null) {
              if (observer.complete) {
                observer.complete();
              }
            } else if (error) {
              if (observer.error) {
                observer.error(error[0]);
              }
            } else {
              if (observer.next) {
                observer.next(result2);
              }
            }
          });
          return {
            unsubscribe: function() {
              if (opId) {
                unsubscribe(opId);
                opId = null;
              }
            }
          };
        }, _a5;
      };
      SubscriptionClient4.prototype.on = function(eventName, callback, context) {
        var handler = this.eventEmitter.on(eventName, callback, context);
        return function() {
          handler.off(eventName, callback, context);
        };
      };
      SubscriptionClient4.prototype.onConnected = function(callback, context) {
        return this.on("connected", callback, context);
      };
      SubscriptionClient4.prototype.onConnecting = function(callback, context) {
        return this.on("connecting", callback, context);
      };
      SubscriptionClient4.prototype.onDisconnected = function(callback, context) {
        return this.on("disconnected", callback, context);
      };
      SubscriptionClient4.prototype.onReconnected = function(callback, context) {
        return this.on("reconnected", callback, context);
      };
      SubscriptionClient4.prototype.onReconnecting = function(callback, context) {
        return this.on("reconnecting", callback, context);
      };
      SubscriptionClient4.prototype.onError = function(callback, context) {
        return this.on("error", callback, context);
      };
      SubscriptionClient4.prototype.unsubscribeAll = function() {
        var _this = this;
        Object.keys(this.operations).forEach(function(subId) {
          _this.unsubscribe(subId);
        });
      };
      SubscriptionClient4.prototype.applyMiddlewares = function(options) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          var queue = function(funcs, scope) {
            var next = function(error) {
              if (error) {
                reject(error);
              } else {
                if (funcs.length > 0) {
                  var f = funcs.shift();
                  if (f) {
                    f.applyMiddleware.apply(scope, [options, next]);
                  }
                } else {
                  resolve(options);
                }
              }
            };
            next();
          };
          queue(__spreadArrays2(_this.middlewares), _this);
        });
      };
      SubscriptionClient4.prototype.use = function(middlewares) {
        var _this = this;
        middlewares.map(function(middleware) {
          if (typeof middleware.applyMiddleware === "function") {
            _this.middlewares.push(middleware);
          } else {
            throw new Error("Middleware must implement the applyMiddleware function.");
          }
        });
        return this;
      };
      SubscriptionClient4.prototype.getConnectionParams = function(connectionParams) {
        return function() {
          return new Promise(function(resolve, reject) {
            if (typeof connectionParams === "function") {
              try {
                return resolve(connectionParams.call(null));
              } catch (error) {
                return reject(error);
              }
            }
            resolve(connectionParams);
          });
        };
      };
      SubscriptionClient4.prototype.executeOperation = function(options, handler) {
        var _this = this;
        if (this.client === null) {
          this.connect();
        }
        var opId = this.generateOperationId();
        this.operations[opId] = { options, handler };
        this.applyMiddlewares(options).then(function(processedOptions) {
          _this.checkOperationOptions(processedOptions, handler);
          if (_this.operations[opId]) {
            _this.operations[opId] = { options: processedOptions, handler };
            _this.sendMessage(opId, message_types_1.default.GQL_START, processedOptions);
          }
        }).catch(function(error) {
          _this.unsubscribe(opId);
          handler(_this.formatErrors(error));
        });
        return opId;
      };
      SubscriptionClient4.prototype.getObserver = function(observerOrNext, error, complete) {
        if (typeof observerOrNext === "function") {
          return {
            next: function(v) {
              return observerOrNext(v);
            },
            error: function(e) {
              return error && error(e);
            },
            complete: function() {
              return complete && complete();
            }
          };
        }
        return observerOrNext;
      };
      SubscriptionClient4.prototype.createMaxConnectTimeGenerator = function() {
        var minValue = this.minWsTimeout;
        var maxValue = this.wsTimeout;
        return new Backoff({
          min: minValue,
          max: maxValue,
          factor: 1.2
        });
      };
      SubscriptionClient4.prototype.clearCheckConnectionInterval = function() {
        if (this.checkConnectionIntervalId) {
          clearInterval(this.checkConnectionIntervalId);
          this.checkConnectionIntervalId = null;
        }
      };
      SubscriptionClient4.prototype.clearMaxConnectTimeout = function() {
        if (this.maxConnectTimeoutId) {
          clearTimeout(this.maxConnectTimeoutId);
          this.maxConnectTimeoutId = null;
        }
      };
      SubscriptionClient4.prototype.clearTryReconnectTimeout = function() {
        if (this.tryReconnectTimeoutId) {
          clearTimeout(this.tryReconnectTimeoutId);
          this.tryReconnectTimeoutId = null;
        }
      };
      SubscriptionClient4.prototype.clearInactivityTimeout = function() {
        if (this.inactivityTimeoutId) {
          clearTimeout(this.inactivityTimeoutId);
          this.inactivityTimeoutId = null;
        }
      };
      SubscriptionClient4.prototype.setInactivityTimeout = function() {
        var _this = this;
        if (this.inactivityTimeout > 0 && Object.keys(this.operations).length === 0) {
          this.inactivityTimeoutId = setTimeout(function() {
            if (Object.keys(_this.operations).length === 0) {
              _this.close();
            }
          }, this.inactivityTimeout);
        }
      };
      SubscriptionClient4.prototype.checkOperationOptions = function(options, handler) {
        var query = options.query, variables = options.variables, operationName = options.operationName;
        if (!query) {
          throw new Error("Must provide a query.");
        }
        if (!handler) {
          throw new Error("Must provide an handler.");
        }
        if (!is_string_1.default(query) && !getOperationAST_1.getOperationAST(query, operationName) || operationName && !is_string_1.default(operationName) || variables && !is_object_1.default(variables)) {
          throw new Error("Incorrect option types. query must be a string or a document,`operationName` must be a string, and `variables` must be an object.");
        }
      };
      SubscriptionClient4.prototype.buildMessage = function(id, type, payload) {
        var payloadToReturn = payload && payload.query ? __assign8(__assign8({}, payload), { query: typeof payload.query === "string" ? payload.query : printer_1.print(payload.query) }) : payload;
        return {
          id,
          type,
          payload: payloadToReturn
        };
      };
      SubscriptionClient4.prototype.formatErrors = function(errors) {
        if (Array.isArray(errors)) {
          return errors;
        }
        if (errors && errors.errors) {
          return this.formatErrors(errors.errors);
        }
        if (errors && errors.message) {
          return [errors];
        }
        return [{
          name: "FormatedError",
          message: "Unknown error",
          originalError: errors
        }];
      };
      SubscriptionClient4.prototype.sendMessage = function(id, type, payload) {
        this.sendMessageRaw(this.buildMessage(id, type, payload));
      };
      SubscriptionClient4.prototype.sendMessageRaw = function(message) {
        switch (this.status) {
          case this.wsImpl.OPEN:
            var serializedMessage = JSON.stringify(message);
            try {
              JSON.parse(serializedMessage);
            } catch (e) {
              this.eventEmitter.emit("error", new Error("Message must be JSON-serializable. Got: " + message));
            }
            this.client.send(serializedMessage);
            break;
          case this.wsImpl.CONNECTING:
            this.unsentMessagesQueue.push(message);
            break;
          default:
            if (!this.reconnecting) {
              this.eventEmitter.emit("error", new Error("A message was not sent because socket is not connected, is closing or is already closed. Message was: " + JSON.stringify(message)));
            }
        }
      };
      SubscriptionClient4.prototype.generateOperationId = function() {
        return String(++this.nextOperationId);
      };
      SubscriptionClient4.prototype.tryReconnect = function() {
        var _this = this;
        if (!this.reconnect || this.backoff.attempts >= this.reconnectionAttempts) {
          return;
        }
        if (!this.reconnecting) {
          Object.keys(this.operations).forEach(function(key) {
            _this.unsentMessagesQueue.push(_this.buildMessage(key, message_types_1.default.GQL_START, _this.operations[key].options));
          });
          this.reconnecting = true;
        }
        this.clearTryReconnectTimeout();
        var delay = this.backoff.duration();
        this.tryReconnectTimeoutId = setTimeout(function() {
          _this.connect();
        }, delay);
      };
      SubscriptionClient4.prototype.flushUnsentMessagesQueue = function() {
        var _this = this;
        this.unsentMessagesQueue.forEach(function(message) {
          _this.sendMessageRaw(message);
        });
        this.unsentMessagesQueue = [];
      };
      SubscriptionClient4.prototype.checkConnection = function() {
        if (this.wasKeepAliveReceived) {
          this.wasKeepAliveReceived = false;
          return;
        }
        if (!this.reconnecting) {
          this.close(false, true);
        }
      };
      SubscriptionClient4.prototype.checkMaxConnectTimeout = function() {
        var _this = this;
        this.clearMaxConnectTimeout();
        this.maxConnectTimeoutId = setTimeout(function() {
          if (_this.status !== _this.wsImpl.OPEN) {
            _this.reconnecting = true;
            _this.close(false, true);
          }
        }, this.maxConnectTimeGenerator.duration());
      };
      SubscriptionClient4.prototype.connect = function() {
        var _a5;
        var _this = this;
        this.client = new ((_a5 = this.wsImpl).bind.apply(_a5, __spreadArrays2([void 0, this.url, this.wsProtocols], this.wsOptionArguments)))();
        this.checkMaxConnectTimeout();
        this.client.onopen = function() {
          return __awaiter9(_this, void 0, void 0, function() {
            var connectionParams, error_1;
            return __generator8(this, function(_a6) {
              switch (_a6.label) {
                case 0:
                  if (!(this.status === this.wsImpl.OPEN))
                    return [3, 4];
                  this.clearMaxConnectTimeout();
                  this.closedByUser = false;
                  this.eventEmitter.emit(this.reconnecting ? "reconnecting" : "connecting");
                  _a6.label = 1;
                case 1:
                  _a6.trys.push([1, 3, , 4]);
                  return [4, this.connectionParams()];
                case 2:
                  connectionParams = _a6.sent();
                  this.sendMessage(void 0, message_types_1.default.GQL_CONNECTION_INIT, connectionParams);
                  this.flushUnsentMessagesQueue();
                  return [3, 4];
                case 3:
                  error_1 = _a6.sent();
                  this.sendMessage(void 0, message_types_1.default.GQL_CONNECTION_ERROR, error_1);
                  this.flushUnsentMessagesQueue();
                  return [3, 4];
                case 4:
                  return [2];
              }
            });
          });
        };
        this.client.onclose = function() {
          if (!_this.closedByUser) {
            _this.close(false, false);
          }
        };
        this.client.onerror = function(err) {
          _this.eventEmitter.emit("error", err);
        };
        this.client.onmessage = function(_a6) {
          var data = _a6.data;
          _this.processReceivedData(data);
        };
      };
      SubscriptionClient4.prototype.processReceivedData = function(receivedData) {
        var parsedMessage;
        var opId;
        try {
          parsedMessage = JSON.parse(receivedData);
          opId = parsedMessage.id;
        } catch (e) {
          throw new Error("Message must be JSON-parseable. Got: " + receivedData);
        }
        if ([
          message_types_1.default.GQL_DATA,
          message_types_1.default.GQL_COMPLETE,
          message_types_1.default.GQL_ERROR
        ].indexOf(parsedMessage.type) !== -1 && !this.operations[opId]) {
          this.unsubscribe(opId);
          return;
        }
        switch (parsedMessage.type) {
          case message_types_1.default.GQL_CONNECTION_ERROR:
            if (this.connectionCallback) {
              this.connectionCallback(parsedMessage.payload);
            }
            break;
          case message_types_1.default.GQL_CONNECTION_ACK:
            this.eventEmitter.emit(this.reconnecting ? "reconnected" : "connected", parsedMessage.payload);
            this.reconnecting = false;
            this.backoff.reset();
            this.maxConnectTimeGenerator.reset();
            if (this.connectionCallback) {
              this.connectionCallback();
            }
            break;
          case message_types_1.default.GQL_COMPLETE:
            var handler = this.operations[opId].handler;
            delete this.operations[opId];
            handler.call(this, null, null);
            break;
          case message_types_1.default.GQL_ERROR:
            this.operations[opId].handler(this.formatErrors(parsedMessage.payload), null);
            delete this.operations[opId];
            break;
          case message_types_1.default.GQL_DATA:
            var parsedPayload = !parsedMessage.payload.errors ? parsedMessage.payload : __assign8(__assign8({}, parsedMessage.payload), { errors: this.formatErrors(parsedMessage.payload.errors) });
            this.operations[opId].handler(null, parsedPayload);
            break;
          case message_types_1.default.GQL_CONNECTION_KEEP_ALIVE:
            var firstKA = typeof this.wasKeepAliveReceived === "undefined";
            this.wasKeepAliveReceived = true;
            if (firstKA) {
              this.checkConnection();
            }
            if (this.checkConnectionIntervalId) {
              clearInterval(this.checkConnectionIntervalId);
              this.checkConnection();
            }
            this.checkConnectionIntervalId = setInterval(this.checkConnection.bind(this), this.wsTimeout);
            break;
          default:
            throw new Error("Invalid message type!");
        }
      };
      SubscriptionClient4.prototype.unsubscribe = function(opId) {
        if (this.operations[opId]) {
          delete this.operations[opId];
          this.setInactivityTimeout();
          this.sendMessage(opId, message_types_1.default.GQL_STOP, void 0);
        }
      };
      return SubscriptionClient4;
    }();
    exports.SubscriptionClient = SubscriptionClient3;
  }
});

// node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/helpers/bind.js
var require_bind = __commonJS({
  "node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/helpers/bind.js"(exports, module2) {
    init_react();
    "use strict";
    module2.exports = function bind2(fn, thisArg) {
      return function wrap3() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        return fn.apply(thisArg, args);
      };
    };
  }
});

// node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/utils.js
var require_utils = __commonJS({
  "node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/utils.js"(exports, module2) {
    init_react();
    "use strict";
    var bind2 = require_bind();
    var toString3 = Object.prototype.toString;
    function isArray(val) {
      return toString3.call(val) === "[object Array]";
    }
    function isUndefined(val) {
      return typeof val === "undefined";
    }
    function isBuffer(val) {
      return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
    }
    function isArrayBuffer(val) {
      return toString3.call(val) === "[object ArrayBuffer]";
    }
    function isFormData(val) {
      return typeof FormData !== "undefined" && val instanceof FormData;
    }
    function isArrayBufferView(val) {
      var result2;
      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        result2 = ArrayBuffer.isView(val);
      } else {
        result2 = val && val.buffer && val.buffer instanceof ArrayBuffer;
      }
      return result2;
    }
    function isString(val) {
      return typeof val === "string";
    }
    function isNumber(val) {
      return typeof val === "number";
    }
    function isObject(val) {
      return val !== null && typeof val === "object";
    }
    function isPlainObject(val) {
      if (toString3.call(val) !== "[object Object]") {
        return false;
      }
      var prototype2 = Object.getPrototypeOf(val);
      return prototype2 === null || prototype2 === Object.prototype;
    }
    function isDate(val) {
      return toString3.call(val) === "[object Date]";
    }
    function isFile(val) {
      return toString3.call(val) === "[object File]";
    }
    function isBlob(val) {
      return toString3.call(val) === "[object Blob]";
    }
    function isFunction(val) {
      return toString3.call(val) === "[object Function]";
    }
    function isStream(val) {
      return isObject(val) && isFunction(val.pipe);
    }
    function isURLSearchParams(val) {
      return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
    }
    function trim(str) {
      return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
    }
    function isStandardBrowserEnv() {
      if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
        return false;
      }
      return typeof window !== "undefined" && typeof document !== "undefined";
    }
    function forEach2(obj, fn) {
      if (obj === null || typeof obj === "undefined") {
        return;
      }
      if (typeof obj !== "object") {
        obj = [obj];
      }
      if (isArray(obj)) {
        for (var i = 0, l = obj.length; i < l; i++) {
          fn.call(null, obj[i], i, obj);
        }
      } else {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn.call(null, obj[key], key, obj);
          }
        }
      }
    }
    function merge() {
      var result2 = {};
      function assignValue(val, key) {
        if (isPlainObject(result2[key]) && isPlainObject(val)) {
          result2[key] = merge(result2[key], val);
        } else if (isPlainObject(val)) {
          result2[key] = merge({}, val);
        } else if (isArray(val)) {
          result2[key] = val.slice();
        } else {
          result2[key] = val;
        }
      }
      for (var i = 0, l = arguments.length; i < l; i++) {
        forEach2(arguments[i], assignValue);
      }
      return result2;
    }
    function extend(a, b, thisArg) {
      forEach2(b, function assignValue(val, key) {
        if (thisArg && typeof val === "function") {
          a[key] = bind2(val, thisArg);
        } else {
          a[key] = val;
        }
      });
      return a;
    }
    function stripBOM(content) {
      if (content.charCodeAt(0) === 65279) {
        content = content.slice(1);
      }
      return content;
    }
    module2.exports = {
      isArray,
      isArrayBuffer,
      isBuffer,
      isFormData,
      isArrayBufferView,
      isString,
      isNumber,
      isObject,
      isPlainObject,
      isUndefined,
      isDate,
      isFile,
      isBlob,
      isFunction,
      isStream,
      isURLSearchParams,
      isStandardBrowserEnv,
      forEach: forEach2,
      merge,
      extend,
      trim,
      stripBOM
    };
  }
});

// node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/helpers/buildURL.js
var require_buildURL = __commonJS({
  "node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/helpers/buildURL.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils();
    function encode(val) {
      return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    module2.exports = function buildURL(url, params, paramsSerializer) {
      if (!params) {
        return url;
      }
      var serializedParams;
      if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
      } else if (utils.isURLSearchParams(params)) {
        serializedParams = params.toString();
      } else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
          if (val === null || typeof val === "undefined") {
            return;
          }
          if (utils.isArray(val)) {
            key = key + "[]";
          } else {
            val = [val];
          }
          utils.forEach(val, function parseValue2(v) {
            if (utils.isDate(v)) {
              v = v.toISOString();
            } else if (utils.isObject(v)) {
              v = JSON.stringify(v);
            }
            parts.push(encode(key) + "=" + encode(v));
          });
        });
        serializedParams = parts.join("&");
      }
      if (serializedParams) {
        var hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) {
          url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
      }
      return url;
    };
  }
});

// node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/core/InterceptorManager.js
var require_InterceptorManager = __commonJS({
  "node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/core/InterceptorManager.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils();
    function InterceptorManager() {
      this.handlers = [];
    }
    InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    };
    InterceptorManager.prototype.eject = function eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    };
    InterceptorManager.prototype.forEach = function forEach2(fn) {
      utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    };
    module2.exports = InterceptorManager;
  }
});

// node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/helpers/normalizeHeaderName.js
var require_normalizeHeaderName = __commonJS({
  "node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/helpers/normalizeHeaderName.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils();
    module2.exports = function normalizeHeaderName(headers, normalizedName) {
      utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
          headers[normalizedName] = value;
          delete headers[name];
        }
      });
    };
  }
});

// node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/core/enhanceError.js
var require_enhanceError = __commonJS({
  "node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/core/enhanceError.js"(exports, module2) {
    init_react();
    "use strict";
    module2.exports = function enhanceError(error, config, code, request, response) {
      error.config = config;
      if (code) {
        error.code = code;
      }
      error.request = request;
      error.response = response;
      error.isAxiosError = true;
      error.toJSON = function toJSON() {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code
        };
      };
      return error;
    };
  }
});

// node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/core/createError.js
var require_createError = __commonJS({
  "node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/core/createError.js"(exports, module2) {
    init_react();
    "use strict";
    var enhanceError = require_enhanceError();
    module2.exports = function createError(message, config, code, request, response) {
      var error = new Error(message);
      return enhanceError(error, config, code, request, response);
    };
  }
});

// node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/core/settle.js
var require_settle = __commonJS({
  "node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/core/settle.js"(exports, module2) {
    init_react();
    "use strict";
    var createError = require_createError();
    module2.exports = function settle(resolve, reject, response) {
      var validateStatus = response.config.validateStatus;
      if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
      } else {
        reject(createError("Request failed with status code " + response.status, response.config, null, response.request, response));
      }
    };
  }
});

// node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/helpers/cookies.js
var require_cookies = __commonJS({
  "node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/helpers/cookies.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils();
    module2.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + "=" + encodeURIComponent(value));
          if (utils.isNumber(expires)) {
            cookie.push("expires=" + new Date(expires).toGMTString());
          }
          if (utils.isString(path)) {
            cookie.push("path=" + path);
          }
          if (utils.isString(domain)) {
            cookie.push("domain=" + domain);
          }
          if (secure === true) {
            cookie.push("secure");
          }
          document.cookie = cookie.join("; ");
        },
        read: function read(name) {
          var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
          return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove2(name) {
          this.write(name, "", Date.now() - 864e5);
        }
      };
    }() : function nonStandardBrowserEnv() {
      return {
        write: function write() {
        },
        read: function read() {
          return null;
        },
        remove: function remove2() {
        }
      };
    }();
  }
});

// node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/helpers/isAbsoluteURL.js
var require_isAbsoluteURL = __commonJS({
  "node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/helpers/isAbsoluteURL.js"(exports, module2) {
    init_react();
    "use strict";
    module2.exports = function isAbsoluteURL(url) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
    };
  }
});

// node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/helpers/combineURLs.js
var require_combineURLs = __commonJS({
  "node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/helpers/combineURLs.js"(exports, module2) {
    init_react();
    "use strict";
    module2.exports = function combineURLs(baseURL, relativeURL) {
      return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
    };
  }
});

// node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/core/buildFullPath.js
var require_buildFullPath = __commonJS({
  "node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/core/buildFullPath.js"(exports, module2) {
    init_react();
    "use strict";
    var isAbsoluteURL = require_isAbsoluteURL();
    var combineURLs = require_combineURLs();
    module2.exports = function buildFullPath(baseURL, requestedURL) {
      if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
      }
      return requestedURL;
    };
  }
});

// node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/helpers/parseHeaders.js
var require_parseHeaders = __commonJS({
  "node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/helpers/parseHeaders.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils();
    var ignoreDuplicateOf = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent"
    ];
    module2.exports = function parseHeaders(headers) {
      var parsed = {};
      var key;
      var val;
      var i;
      if (!headers) {
        return parsed;
      }
      utils.forEach(headers.split("\n"), function parser(line) {
        i = line.indexOf(":");
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
          if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
            return;
          }
          if (key === "set-cookie") {
            parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
          }
        }
      });
      return parsed;
    };
  }
});

// node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/helpers/isURLSameOrigin.js
var require_isURLSameOrigin = __commonJS({
  "node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/helpers/isURLSameOrigin.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils();
    module2.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement("a");
      var originURL;
      function resolveURL(url) {
        var href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin(requestURL) {
        var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }() : function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    }();
  }
});

// node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/adapters/xhr.js
var require_xhr = __commonJS({
  "node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/adapters/xhr.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils();
    var settle = require_settle();
    var cookies = require_cookies();
    var buildURL = require_buildURL();
    var buildFullPath = require_buildFullPath();
    var parseHeaders = require_parseHeaders();
    var isURLSameOrigin = require_isURLSameOrigin();
    var createError = require_createError();
    module2.exports = function xhrAdapter(config) {
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        var responseType = config.responseType;
        if (utils.isFormData(requestData)) {
          delete requestHeaders["Content-Type"];
        }
        var request = new XMLHttpRequest();
        if (config.auth) {
          var username = config.auth.username || "";
          var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
          requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
        }
        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        request.timeout = config.timeout;
        function onloadend() {
          if (!request) {
            return;
          }
          var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
          var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
          var response = {
            data: responseData,
            status: request.status,
            statusText: request.statusText,
            headers: responseHeaders,
            config,
            request
          };
          settle(resolve, reject, response);
          request = null;
        }
        if ("onloadend" in request) {
          request.onloadend = onloadend;
        } else {
          request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) {
              return;
            }
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
              return;
            }
            setTimeout(onloadend);
          };
        }
        request.onabort = function handleAbort() {
          if (!request) {
            return;
          }
          reject(createError("Request aborted", config, "ECONNABORTED", request));
          request = null;
        };
        request.onerror = function handleError() {
          reject(createError("Network Error", config, null, request));
          request = null;
        };
        request.ontimeout = function handleTimeout() {
          var timeoutErrorMessage = "timeout of " + config.timeout + "ms exceeded";
          if (config.timeoutErrorMessage) {
            timeoutErrorMessage = config.timeoutErrorMessage;
          }
          reject(createError(timeoutErrorMessage, config, config.transitional && config.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request));
          request = null;
        };
        if (utils.isStandardBrowserEnv()) {
          var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
          if (xsrfValue) {
            requestHeaders[config.xsrfHeaderName] = xsrfValue;
          }
        }
        if ("setRequestHeader" in request) {
          utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
              delete requestHeaders[key];
            } else {
              request.setRequestHeader(key, val);
            }
          });
        }
        if (!utils.isUndefined(config.withCredentials)) {
          request.withCredentials = !!config.withCredentials;
        }
        if (responseType && responseType !== "json") {
          request.responseType = config.responseType;
        }
        if (typeof config.onDownloadProgress === "function") {
          request.addEventListener("progress", config.onDownloadProgress);
        }
        if (typeof config.onUploadProgress === "function" && request.upload) {
          request.upload.addEventListener("progress", config.onUploadProgress);
        }
        if (config.cancelToken) {
          config.cancelToken.promise.then(function onCanceled(cancel) {
            if (!request) {
              return;
            }
            request.abort();
            reject(cancel);
            request = null;
          });
        }
        if (!requestData) {
          requestData = null;
        }
        request.send(requestData);
      });
    };
  }
});

// node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/defaults.js
var require_defaults2 = __commonJS({
  "node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/defaults.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils();
    var normalizeHeaderName = require_normalizeHeaderName();
    var enhanceError = require_enhanceError();
    var DEFAULT_CONTENT_TYPE = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    function setContentTypeIfUnset(headers, value) {
      if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
        headers["Content-Type"] = value;
      }
    }
    function getDefaultAdapter() {
      var adapter;
      if (typeof XMLHttpRequest !== "undefined") {
        adapter = require_xhr();
      } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
        adapter = require_xhr();
      }
      return adapter;
    }
    function stringifySafely(rawValue, parser, encoder) {
      if (utils.isString(rawValue)) {
        try {
          (parser || JSON.parse)(rawValue);
          return utils.trim(rawValue);
        } catch (e) {
          if (e.name !== "SyntaxError") {
            throw e;
          }
        }
      }
      return (encoder || JSON.stringify)(rawValue);
    }
    var defaults = {
      transitional: {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
      },
      adapter: getDefaultAdapter(),
      transformRequest: [function transformRequest(data, headers) {
        normalizeHeaderName(headers, "Accept");
        normalizeHeaderName(headers, "Content-Type");
        if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
          return data;
        }
        if (utils.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils.isURLSearchParams(data)) {
          setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
          return data.toString();
        }
        if (utils.isObject(data) || headers && headers["Content-Type"] === "application/json") {
          setContentTypeIfUnset(headers, "application/json");
          return stringifySafely(data);
        }
        return data;
      }],
      transformResponse: [function transformResponse(data) {
        var transitional = this.transitional;
        var silentJSONParsing = transitional && transitional.silentJSONParsing;
        var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
        var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
        if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
          try {
            return JSON.parse(data);
          } catch (e) {
            if (strictJSONParsing) {
              if (e.name === "SyntaxError") {
                throw enhanceError(e, this, "E_JSON_PARSE");
              }
              throw e;
            }
          }
        }
        return data;
      }],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
      }
    };
    defaults.headers = {
      common: {
        "Accept": "application/json, text/plain, */*"
      }
    };
    utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
      defaults.headers[method] = {};
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
    });
    module2.exports = defaults;
  }
});

// node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/core/transformData.js
var require_transformData = __commonJS({
  "node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/core/transformData.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils();
    var defaults = require_defaults2();
    module2.exports = function transformData(data, headers, fns) {
      var context = this || defaults;
      utils.forEach(fns, function transform(fn) {
        data = fn.call(context, data, headers);
      });
      return data;
    };
  }
});

// node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/cancel/isCancel.js
var require_isCancel = __commonJS({
  "node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/cancel/isCancel.js"(exports, module2) {
    init_react();
    "use strict";
    module2.exports = function isCancel(value) {
      return !!(value && value.__CANCEL__);
    };
  }
});

// node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/core/dispatchRequest.js
var require_dispatchRequest = __commonJS({
  "node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/core/dispatchRequest.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils();
    var transformData = require_transformData();
    var isCancel = require_isCancel();
    var defaults = require_defaults2();
    function throwIfCancellationRequested(config) {
      if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
      }
    }
    module2.exports = function dispatchRequest(config) {
      throwIfCancellationRequested(config);
      config.headers = config.headers || {};
      config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
      config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
      utils.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
        delete config.headers[method];
      });
      var adapter = config.adapter || defaults.adapter;
      return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
        return response;
      }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config);
          if (reason && reason.response) {
            reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
          }
        }
        return Promise.reject(reason);
      });
    };
  }
});

// node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/core/mergeConfig.js
var require_mergeConfig = __commonJS({
  "node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/core/mergeConfig.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils();
    module2.exports = function mergeConfig(config1, config2) {
      config2 = config2 || {};
      var config = {};
      var valueFromConfig2Keys = ["url", "method", "data"];
      var mergeDeepPropertiesKeys = ["headers", "auth", "proxy", "params"];
      var defaultToConfig2Keys = [
        "baseURL",
        "transformRequest",
        "transformResponse",
        "paramsSerializer",
        "timeout",
        "timeoutMessage",
        "withCredentials",
        "adapter",
        "responseType",
        "xsrfCookieName",
        "xsrfHeaderName",
        "onUploadProgress",
        "onDownloadProgress",
        "decompress",
        "maxContentLength",
        "maxBodyLength",
        "maxRedirects",
        "transport",
        "httpAgent",
        "httpsAgent",
        "cancelToken",
        "socketPath",
        "responseEncoding"
      ];
      var directMergeKeys = ["validateStatus"];
      function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
          return utils.merge(target, source);
        } else if (utils.isPlainObject(source)) {
          return utils.merge({}, source);
        } else if (utils.isArray(source)) {
          return source.slice();
        }
        return source;
      }
      function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) {
          config[prop] = getMergedValue(config1[prop], config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          config[prop] = getMergedValue(void 0, config1[prop]);
        }
      }
      utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          config[prop] = getMergedValue(void 0, config2[prop]);
        }
      });
      utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
      utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          config[prop] = getMergedValue(void 0, config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          config[prop] = getMergedValue(void 0, config1[prop]);
        }
      });
      utils.forEach(directMergeKeys, function merge(prop) {
        if (prop in config2) {
          config[prop] = getMergedValue(config1[prop], config2[prop]);
        } else if (prop in config1) {
          config[prop] = getMergedValue(void 0, config1[prop]);
        }
      });
      var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys).concat(directMergeKeys);
      var otherKeys = Object.keys(config1).concat(Object.keys(config2)).filter(function filterAxiosKeys(key) {
        return axiosKeys.indexOf(key) === -1;
      });
      utils.forEach(otherKeys, mergeDeepProperties);
      return config;
    };
  }
});

// node_modules/@nhost/hasura-auth-js/node_modules/axios/package.json
var require_package = __commonJS({
  "node_modules/@nhost/hasura-auth-js/node_modules/axios/package.json"(exports, module2) {
    module2.exports = {
      name: "axios",
      version: "0.21.4",
      description: "Promise based HTTP client for the browser and node.js",
      main: "index.js",
      scripts: {
        test: "grunt test",
        start: "node ./sandbox/server.js",
        build: "NODE_ENV=production grunt build",
        preversion: "npm test",
        version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
        postversion: "git push && git push --tags",
        examples: "node ./examples/server.js",
        coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
        fix: "eslint --fix lib/**/*.js"
      },
      repository: {
        type: "git",
        url: "https://github.com/axios/axios.git"
      },
      keywords: [
        "xhr",
        "http",
        "ajax",
        "promise",
        "node"
      ],
      author: "Matt Zabriskie",
      license: "MIT",
      bugs: {
        url: "https://github.com/axios/axios/issues"
      },
      homepage: "https://axios-http.com",
      devDependencies: {
        coveralls: "^3.0.0",
        "es6-promise": "^4.2.4",
        grunt: "^1.3.0",
        "grunt-banner": "^0.6.0",
        "grunt-cli": "^1.2.0",
        "grunt-contrib-clean": "^1.1.0",
        "grunt-contrib-watch": "^1.0.0",
        "grunt-eslint": "^23.0.0",
        "grunt-karma": "^4.0.0",
        "grunt-mocha-test": "^0.13.3",
        "grunt-ts": "^6.0.0-beta.19",
        "grunt-webpack": "^4.0.2",
        "istanbul-instrumenter-loader": "^1.0.0",
        "jasmine-core": "^2.4.1",
        karma: "^6.3.2",
        "karma-chrome-launcher": "^3.1.0",
        "karma-firefox-launcher": "^2.1.0",
        "karma-jasmine": "^1.1.1",
        "karma-jasmine-ajax": "^0.1.13",
        "karma-safari-launcher": "^1.0.0",
        "karma-sauce-launcher": "^4.3.6",
        "karma-sinon": "^1.0.5",
        "karma-sourcemap-loader": "^0.3.8",
        "karma-webpack": "^4.0.2",
        "load-grunt-tasks": "^3.5.2",
        minimist: "^1.2.0",
        mocha: "^8.2.1",
        sinon: "^4.5.0",
        "terser-webpack-plugin": "^4.2.3",
        typescript: "^4.0.5",
        "url-search-params": "^0.10.0",
        webpack: "^4.44.2",
        "webpack-dev-server": "^3.11.0"
      },
      browser: {
        "./lib/adapters/http.js": "./lib/adapters/xhr.js"
      },
      jsdelivr: "dist/axios.min.js",
      unpkg: "dist/axios.min.js",
      typings: "./index.d.ts",
      dependencies: {
        "follow-redirects": "^1.14.0"
      },
      bundlesize: [
        {
          path: "./dist/axios.min.js",
          threshold: "5kB"
        }
      ]
    };
  }
});

// node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/helpers/validator.js
var require_validator = __commonJS({
  "node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/helpers/validator.js"(exports, module2) {
    init_react();
    "use strict";
    var pkg = require_package();
    var validators = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
      validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
      };
    });
    var deprecatedWarnings = {};
    var currentVerArr = pkg.version.split(".");
    function isOlderVersion(version2, thanVersion) {
      var pkgVersionArr = thanVersion ? thanVersion.split(".") : currentVerArr;
      var destVer = version2.split(".");
      for (var i = 0; i < 3; i++) {
        if (pkgVersionArr[i] > destVer[i]) {
          return true;
        } else if (pkgVersionArr[i] < destVer[i]) {
          return false;
        }
      }
      return false;
    }
    validators.transitional = function transitional(validator, version2, message) {
      var isDeprecated = version2 && isOlderVersion(version2);
      function formatMessage(opt, desc) {
        return "[Axios v" + pkg.version + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
      }
      return function(value, opt, opts) {
        if (validator === false) {
          throw new Error(formatMessage(opt, " has been removed in " + version2));
        }
        if (isDeprecated && !deprecatedWarnings[opt]) {
          deprecatedWarnings[opt] = true;
          console.warn(formatMessage(opt, " has been deprecated since v" + version2 + " and will be removed in the near future"));
        }
        return validator ? validator(value, opt, opts) : true;
      };
    };
    function assertOptions(options, schema, allowUnknown) {
      if (typeof options !== "object") {
        throw new TypeError("options must be an object");
      }
      var keys = Object.keys(options);
      var i = keys.length;
      while (i-- > 0) {
        var opt = keys[i];
        var validator = schema[opt];
        if (validator) {
          var value = options[opt];
          var result2 = value === void 0 || validator(value, opt, options);
          if (result2 !== true) {
            throw new TypeError("option " + opt + " must be " + result2);
          }
          continue;
        }
        if (allowUnknown !== true) {
          throw Error("Unknown option " + opt);
        }
      }
    }
    module2.exports = {
      isOlderVersion,
      assertOptions,
      validators
    };
  }
});

// node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/core/Axios.js
var require_Axios = __commonJS({
  "node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/core/Axios.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils();
    var buildURL = require_buildURL();
    var InterceptorManager = require_InterceptorManager();
    var dispatchRequest = require_dispatchRequest();
    var mergeConfig = require_mergeConfig();
    var validator = require_validator();
    var validators = validator.validators;
    function Axios(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    Axios.prototype.request = function request(config) {
      if (typeof config === "string") {
        config = arguments[1] || {};
        config.url = arguments[0];
      } else {
        config = config || {};
      }
      config = mergeConfig(this.defaults, config);
      if (config.method) {
        config.method = config.method.toLowerCase();
      } else if (this.defaults.method) {
        config.method = this.defaults.method.toLowerCase();
      } else {
        config.method = "get";
      }
      var transitional = config.transitional;
      if (transitional !== void 0) {
        validator.assertOptions(transitional, {
          silentJSONParsing: validators.transitional(validators.boolean, "1.0.0"),
          forcedJSONParsing: validators.transitional(validators.boolean, "1.0.0"),
          clarifyTimeoutError: validators.transitional(validators.boolean, "1.0.0")
        }, false);
      }
      var requestInterceptorChain = [];
      var synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      var responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      var promise;
      if (!synchronousRequestInterceptors) {
        var chain = [dispatchRequest, void 0];
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);
        promise = Promise.resolve(config);
        while (chain.length) {
          promise = promise.then(chain.shift(), chain.shift());
        }
        return promise;
      }
      var newConfig = config;
      while (requestInterceptorChain.length) {
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected(error);
          break;
        }
      }
      try {
        promise = dispatchRequest(newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      while (responseInterceptorChain.length) {
        promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
      }
      return promise;
    };
    Axios.prototype.getUri = function getUri(config) {
      config = mergeConfig(this.defaults, config);
      return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
    };
    utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
      Axios.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          url,
          data: (config || {}).data
        }));
      };
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      Axios.prototype[method] = function(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          url,
          data
        }));
      };
    });
    module2.exports = Axios;
  }
});

// node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/cancel/Cancel.js
var require_Cancel = __commonJS({
  "node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/cancel/Cancel.js"(exports, module2) {
    init_react();
    "use strict";
    function Cancel(message) {
      this.message = message;
    }
    Cancel.prototype.toString = function toString3() {
      return "Cancel" + (this.message ? ": " + this.message : "");
    };
    Cancel.prototype.__CANCEL__ = true;
    module2.exports = Cancel;
  }
});

// node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/cancel/CancelToken.js
var require_CancelToken = __commonJS({
  "node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/cancel/CancelToken.js"(exports, module2) {
    init_react();
    "use strict";
    var Cancel = require_Cancel();
    function CancelToken(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      var token = this;
      executor(function cancel(message) {
        if (token.reason) {
          return;
        }
        token.reason = new Cancel(message);
        resolvePromise(token.reason);
      });
    }
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    };
    CancelToken.source = function source() {
      var cancel;
      var token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    };
    module2.exports = CancelToken;
  }
});

// node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/helpers/spread.js
var require_spread = __commonJS({
  "node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/helpers/spread.js"(exports, module2) {
    init_react();
    "use strict";
    module2.exports = function spread(callback) {
      return function wrap3(arr) {
        return callback.apply(null, arr);
      };
    };
  }
});

// node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/helpers/isAxiosError.js
var require_isAxiosError = __commonJS({
  "node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/helpers/isAxiosError.js"(exports, module2) {
    init_react();
    "use strict";
    module2.exports = function isAxiosError(payload) {
      return typeof payload === "object" && payload.isAxiosError === true;
    };
  }
});

// node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/axios.js
var require_axios = __commonJS({
  "node_modules/@nhost/hasura-auth-js/node_modules/axios/lib/axios.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils();
    var bind2 = require_bind();
    var Axios = require_Axios();
    var mergeConfig = require_mergeConfig();
    var defaults = require_defaults2();
    function createInstance(defaultConfig2) {
      var context = new Axios(defaultConfig2);
      var instance = bind2(Axios.prototype.request, context);
      utils.extend(instance, Axios.prototype, context);
      utils.extend(instance, context);
      return instance;
    }
    var axios5 = createInstance(defaults);
    axios5.Axios = Axios;
    axios5.create = function create(instanceConfig) {
      return createInstance(mergeConfig(axios5.defaults, instanceConfig));
    };
    axios5.Cancel = require_Cancel();
    axios5.CancelToken = require_CancelToken();
    axios5.isCancel = require_isCancel();
    axios5.all = function all(promises) {
      return Promise.all(promises);
    };
    axios5.spread = require_spread();
    axios5.isAxiosError = require_isAxiosError();
    module2.exports = axios5;
    module2.exports.default = axios5;
  }
});

// node_modules/@nhost/hasura-auth-js/node_modules/axios/index.js
var require_axios2 = __commonJS({
  "node_modules/@nhost/hasura-auth-js/node_modules/axios/index.js"(exports, module2) {
    init_react();
    module2.exports = require_axios();
  }
});

// node_modules/strict-uri-encode/index.js
var require_strict_uri_encode = __commonJS({
  "node_modules/strict-uri-encode/index.js"(exports, module2) {
    init_react();
    "use strict";
    module2.exports = (str) => encodeURIComponent(str).replace(/[!'()*]/g, (x) => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);
  }
});

// node_modules/decode-uri-component/index.js
var require_decode_uri_component = __commonJS({
  "node_modules/decode-uri-component/index.js"(exports, module2) {
    init_react();
    "use strict";
    var token = "%[a-f0-9]{2}";
    var singleMatcher = new RegExp(token, "gi");
    var multiMatcher = new RegExp("(" + token + ")+", "gi");
    function decodeComponents(components, split2) {
      try {
        return decodeURIComponent(components.join(""));
      } catch (err) {
      }
      if (components.length === 1) {
        return components;
      }
      split2 = split2 || 1;
      var left = components.slice(0, split2);
      var right = components.slice(split2);
      return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
    }
    function decode(input) {
      try {
        return decodeURIComponent(input);
      } catch (err) {
        var tokens = input.match(singleMatcher);
        for (var i = 1; i < tokens.length; i++) {
          input = decodeComponents(tokens, i).join("");
          tokens = input.match(singleMatcher);
        }
        return input;
      }
    }
    function customDecodeURIComponent(input) {
      var replaceMap = {
        "%FE%FF": "\uFFFD\uFFFD",
        "%FF%FE": "\uFFFD\uFFFD"
      };
      var match = multiMatcher.exec(input);
      while (match) {
        try {
          replaceMap[match[0]] = decodeURIComponent(match[0]);
        } catch (err) {
          var result2 = decode(match[0]);
          if (result2 !== match[0]) {
            replaceMap[match[0]] = result2;
          }
        }
        match = multiMatcher.exec(input);
      }
      replaceMap["%C2"] = "\uFFFD";
      var entries = Object.keys(replaceMap);
      for (var i = 0; i < entries.length; i++) {
        var key = entries[i];
        input = input.replace(new RegExp(key, "g"), replaceMap[key]);
      }
      return input;
    }
    module2.exports = function(encodedURI) {
      if (typeof encodedURI !== "string") {
        throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof encodedURI + "`");
      }
      try {
        encodedURI = encodedURI.replace(/\+/g, " ");
        return decodeURIComponent(encodedURI);
      } catch (err) {
        return customDecodeURIComponent(encodedURI);
      }
    };
  }
});

// node_modules/split-on-first/index.js
var require_split_on_first = __commonJS({
  "node_modules/split-on-first/index.js"(exports, module2) {
    init_react();
    "use strict";
    module2.exports = (string, separator) => {
      if (!(typeof string === "string" && typeof separator === "string")) {
        throw new TypeError("Expected the arguments to be of type `string`");
      }
      if (separator === "") {
        return [string];
      }
      const separatorIndex = string.indexOf(separator);
      if (separatorIndex === -1) {
        return [string];
      }
      return [
        string.slice(0, separatorIndex),
        string.slice(separatorIndex + separator.length)
      ];
    };
  }
});

// node_modules/filter-obj/index.js
var require_filter_obj = __commonJS({
  "node_modules/filter-obj/index.js"(exports, module2) {
    init_react();
    "use strict";
    module2.exports = function(obj, predicate) {
      var ret = {};
      var keys = Object.keys(obj);
      var isArr = Array.isArray(predicate);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var val = obj[key];
        if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
          ret[key] = val;
        }
      }
      return ret;
    };
  }
});

// node_modules/query-string/index.js
var require_query_string = __commonJS({
  "node_modules/query-string/index.js"(exports) {
    init_react();
    "use strict";
    var strictUriEncode = require_strict_uri_encode();
    var decodeComponent = require_decode_uri_component();
    var splitOnFirst = require_split_on_first();
    var filterObject = require_filter_obj();
    var isNullOrUndefined = (value) => value === null || value === void 0;
    var encodeFragmentIdentifier = Symbol("encodeFragmentIdentifier");
    function encoderForArrayFormat(options) {
      switch (options.arrayFormat) {
        case "index":
          return (key) => (result2, value) => {
            const index = result2.length;
            if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
              return result2;
            }
            if (value === null) {
              return [...result2, [encode(key, options), "[", index, "]"].join("")];
            }
            return [
              ...result2,
              [encode(key, options), "[", encode(index, options), "]=", encode(value, options)].join("")
            ];
          };
        case "bracket":
          return (key) => (result2, value) => {
            if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
              return result2;
            }
            if (value === null) {
              return [...result2, [encode(key, options), "[]"].join("")];
            }
            return [...result2, [encode(key, options), "[]=", encode(value, options)].join("")];
          };
        case "comma":
        case "separator":
        case "bracket-separator": {
          const keyValueSep = options.arrayFormat === "bracket-separator" ? "[]=" : "=";
          return (key) => (result2, value) => {
            if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
              return result2;
            }
            value = value === null ? "" : value;
            if (result2.length === 0) {
              return [[encode(key, options), keyValueSep, encode(value, options)].join("")];
            }
            return [[result2, encode(value, options)].join(options.arrayFormatSeparator)];
          };
        }
        default:
          return (key) => (result2, value) => {
            if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
              return result2;
            }
            if (value === null) {
              return [...result2, encode(key, options)];
            }
            return [...result2, [encode(key, options), "=", encode(value, options)].join("")];
          };
      }
    }
    function parserForArrayFormat(options) {
      let result2;
      switch (options.arrayFormat) {
        case "index":
          return (key, value, accumulator) => {
            result2 = /\[(\d*)\]$/.exec(key);
            key = key.replace(/\[\d*\]$/, "");
            if (!result2) {
              accumulator[key] = value;
              return;
            }
            if (accumulator[key] === void 0) {
              accumulator[key] = {};
            }
            accumulator[key][result2[1]] = value;
          };
        case "bracket":
          return (key, value, accumulator) => {
            result2 = /(\[\])$/.exec(key);
            key = key.replace(/\[\]$/, "");
            if (!result2) {
              accumulator[key] = value;
              return;
            }
            if (accumulator[key] === void 0) {
              accumulator[key] = [value];
              return;
            }
            accumulator[key] = [].concat(accumulator[key], value);
          };
        case "comma":
        case "separator":
          return (key, value, accumulator) => {
            const isArray = typeof value === "string" && value.includes(options.arrayFormatSeparator);
            const isEncodedArray = typeof value === "string" && !isArray && decode(value, options).includes(options.arrayFormatSeparator);
            value = isEncodedArray ? decode(value, options) : value;
            const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map((item) => decode(item, options)) : value === null ? value : decode(value, options);
            accumulator[key] = newValue;
          };
        case "bracket-separator":
          return (key, value, accumulator) => {
            const isArray = /(\[\])$/.test(key);
            key = key.replace(/\[\]$/, "");
            if (!isArray) {
              accumulator[key] = value ? decode(value, options) : value;
              return;
            }
            const arrayValue = value === null ? [] : value.split(options.arrayFormatSeparator).map((item) => decode(item, options));
            if (accumulator[key] === void 0) {
              accumulator[key] = arrayValue;
              return;
            }
            accumulator[key] = [].concat(accumulator[key], arrayValue);
          };
        default:
          return (key, value, accumulator) => {
            if (accumulator[key] === void 0) {
              accumulator[key] = value;
              return;
            }
            accumulator[key] = [].concat(accumulator[key], value);
          };
      }
    }
    function validateArrayFormatSeparator(value) {
      if (typeof value !== "string" || value.length !== 1) {
        throw new TypeError("arrayFormatSeparator must be single character string");
      }
    }
    function encode(value, options) {
      if (options.encode) {
        return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
      }
      return value;
    }
    function decode(value, options) {
      if (options.decode) {
        return decodeComponent(value);
      }
      return value;
    }
    function keysSorter(input) {
      if (Array.isArray(input)) {
        return input.sort();
      }
      if (typeof input === "object") {
        return keysSorter(Object.keys(input)).sort((a, b) => Number(a) - Number(b)).map((key) => input[key]);
      }
      return input;
    }
    function removeHash(input) {
      const hashStart = input.indexOf("#");
      if (hashStart !== -1) {
        input = input.slice(0, hashStart);
      }
      return input;
    }
    function getHash(url) {
      let hash = "";
      const hashStart = url.indexOf("#");
      if (hashStart !== -1) {
        hash = url.slice(hashStart);
      }
      return hash;
    }
    function extract(input) {
      input = removeHash(input);
      const queryStart = input.indexOf("?");
      if (queryStart === -1) {
        return "";
      }
      return input.slice(queryStart + 1);
    }
    function parseValue2(value, options) {
      if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === "string" && value.trim() !== "")) {
        value = Number(value);
      } else if (options.parseBooleans && value !== null && (value.toLowerCase() === "true" || value.toLowerCase() === "false")) {
        value = value.toLowerCase() === "true";
      }
      return value;
    }
    function parse2(query, options) {
      options = Object.assign({
        decode: true,
        sort: true,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: false,
        parseBooleans: false
      }, options);
      validateArrayFormatSeparator(options.arrayFormatSeparator);
      const formatter = parserForArrayFormat(options);
      const ret = Object.create(null);
      if (typeof query !== "string") {
        return ret;
      }
      query = query.trim().replace(/^[?#&]/, "");
      if (!query) {
        return ret;
      }
      for (const param of query.split("&")) {
        if (param === "") {
          continue;
        }
        let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, " ") : param, "=");
        value = value === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(options.arrayFormat) ? value : decode(value, options);
        formatter(decode(key, options), value, ret);
      }
      for (const key of Object.keys(ret)) {
        const value = ret[key];
        if (typeof value === "object" && value !== null) {
          for (const k of Object.keys(value)) {
            value[k] = parseValue2(value[k], options);
          }
        } else {
          ret[key] = parseValue2(value, options);
        }
      }
      if (options.sort === false) {
        return ret;
      }
      return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result2, key) => {
        const value = ret[key];
        if (Boolean(value) && typeof value === "object" && !Array.isArray(value)) {
          result2[key] = keysSorter(value);
        } else {
          result2[key] = value;
        }
        return result2;
      }, Object.create(null));
    }
    exports.extract = extract;
    exports.parse = parse2;
    exports.stringify = (object, options) => {
      if (!object) {
        return "";
      }
      options = Object.assign({
        encode: true,
        strict: true,
        arrayFormat: "none",
        arrayFormatSeparator: ","
      }, options);
      validateArrayFormatSeparator(options.arrayFormatSeparator);
      const shouldFilter = (key) => options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === "";
      const formatter = encoderForArrayFormat(options);
      const objectCopy = {};
      for (const key of Object.keys(object)) {
        if (!shouldFilter(key)) {
          objectCopy[key] = object[key];
        }
      }
      const keys = Object.keys(objectCopy);
      if (options.sort !== false) {
        keys.sort(options.sort);
      }
      return keys.map((key) => {
        const value = object[key];
        if (value === void 0) {
          return "";
        }
        if (value === null) {
          return encode(key, options);
        }
        if (Array.isArray(value)) {
          if (value.length === 0 && options.arrayFormat === "bracket-separator") {
            return encode(key, options) + "[]";
          }
          return value.reduce(formatter(key), []).join("&");
        }
        return encode(key, options) + "=" + encode(value, options);
      }).filter((x) => x.length > 0).join("&");
    };
    exports.parseUrl = (url, options) => {
      options = Object.assign({
        decode: true
      }, options);
      const [url_, hash] = splitOnFirst(url, "#");
      return Object.assign({
        url: url_.split("?")[0] || "",
        query: parse2(extract(url), options)
      }, options && options.parseFragmentIdentifier && hash ? { fragmentIdentifier: decode(hash, options) } : {});
    };
    exports.stringifyUrl = (object, options) => {
      options = Object.assign({
        encode: true,
        strict: true,
        [encodeFragmentIdentifier]: true
      }, options);
      const url = removeHash(object.url).split("?")[0] || "";
      const queryFromUrl = exports.extract(object.url);
      const parsedQueryFromUrl = exports.parse(queryFromUrl, { sort: false });
      const query = Object.assign(parsedQueryFromUrl, object.query);
      let queryString2 = exports.stringify(query, options);
      if (queryString2) {
        queryString2 = `?${queryString2}`;
      }
      let hash = getHash(object.url);
      if (object.fragmentIdentifier) {
        hash = `#${options[encodeFragmentIdentifier] ? encode(object.fragmentIdentifier, options) : object.fragmentIdentifier}`;
      }
      return `${url}${queryString2}${hash}`;
    };
    exports.pick = (input, filter, options) => {
      options = Object.assign({
        parseFragmentIdentifier: true,
        [encodeFragmentIdentifier]: false
      }, options);
      const { url, query, fragmentIdentifier } = exports.parseUrl(input, options);
      return exports.stringifyUrl({
        url,
        query: filterObject(query, filter),
        fragmentIdentifier
      }, options);
    };
    exports.exclude = (input, filter, options) => {
      const exclusionFilter = Array.isArray(filter) ? (key) => !filter.includes(key) : (key, value) => !filter(key, value);
      return exports.pick(input, exclusionFilter, options);
    };
  }
});

// node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/helpers/bind.js
var require_bind2 = __commonJS({
  "node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/helpers/bind.js"(exports, module2) {
    init_react();
    "use strict";
    module2.exports = function bind2(fn, thisArg) {
      return function wrap3() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        return fn.apply(thisArg, args);
      };
    };
  }
});

// node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/utils.js
var require_utils2 = __commonJS({
  "node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/utils.js"(exports, module2) {
    init_react();
    "use strict";
    var bind2 = require_bind2();
    var toString3 = Object.prototype.toString;
    function isArray(val) {
      return toString3.call(val) === "[object Array]";
    }
    function isUndefined(val) {
      return typeof val === "undefined";
    }
    function isBuffer(val) {
      return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
    }
    function isArrayBuffer(val) {
      return toString3.call(val) === "[object ArrayBuffer]";
    }
    function isFormData(val) {
      return typeof FormData !== "undefined" && val instanceof FormData;
    }
    function isArrayBufferView(val) {
      var result2;
      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        result2 = ArrayBuffer.isView(val);
      } else {
        result2 = val && val.buffer && val.buffer instanceof ArrayBuffer;
      }
      return result2;
    }
    function isString(val) {
      return typeof val === "string";
    }
    function isNumber(val) {
      return typeof val === "number";
    }
    function isObject(val) {
      return val !== null && typeof val === "object";
    }
    function isPlainObject(val) {
      if (toString3.call(val) !== "[object Object]") {
        return false;
      }
      var prototype2 = Object.getPrototypeOf(val);
      return prototype2 === null || prototype2 === Object.prototype;
    }
    function isDate(val) {
      return toString3.call(val) === "[object Date]";
    }
    function isFile(val) {
      return toString3.call(val) === "[object File]";
    }
    function isBlob(val) {
      return toString3.call(val) === "[object Blob]";
    }
    function isFunction(val) {
      return toString3.call(val) === "[object Function]";
    }
    function isStream(val) {
      return isObject(val) && isFunction(val.pipe);
    }
    function isURLSearchParams(val) {
      return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
    }
    function trim(str) {
      return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
    }
    function isStandardBrowserEnv() {
      if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
        return false;
      }
      return typeof window !== "undefined" && typeof document !== "undefined";
    }
    function forEach2(obj, fn) {
      if (obj === null || typeof obj === "undefined") {
        return;
      }
      if (typeof obj !== "object") {
        obj = [obj];
      }
      if (isArray(obj)) {
        for (var i = 0, l = obj.length; i < l; i++) {
          fn.call(null, obj[i], i, obj);
        }
      } else {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn.call(null, obj[key], key, obj);
          }
        }
      }
    }
    function merge() {
      var result2 = {};
      function assignValue(val, key) {
        if (isPlainObject(result2[key]) && isPlainObject(val)) {
          result2[key] = merge(result2[key], val);
        } else if (isPlainObject(val)) {
          result2[key] = merge({}, val);
        } else if (isArray(val)) {
          result2[key] = val.slice();
        } else {
          result2[key] = val;
        }
      }
      for (var i = 0, l = arguments.length; i < l; i++) {
        forEach2(arguments[i], assignValue);
      }
      return result2;
    }
    function extend(a, b, thisArg) {
      forEach2(b, function assignValue(val, key) {
        if (thisArg && typeof val === "function") {
          a[key] = bind2(val, thisArg);
        } else {
          a[key] = val;
        }
      });
      return a;
    }
    function stripBOM(content) {
      if (content.charCodeAt(0) === 65279) {
        content = content.slice(1);
      }
      return content;
    }
    module2.exports = {
      isArray,
      isArrayBuffer,
      isBuffer,
      isFormData,
      isArrayBufferView,
      isString,
      isNumber,
      isObject,
      isPlainObject,
      isUndefined,
      isDate,
      isFile,
      isBlob,
      isFunction,
      isStream,
      isURLSearchParams,
      isStandardBrowserEnv,
      forEach: forEach2,
      merge,
      extend,
      trim,
      stripBOM
    };
  }
});

// node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/helpers/buildURL.js
var require_buildURL2 = __commonJS({
  "node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/helpers/buildURL.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils2();
    function encode(val) {
      return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    module2.exports = function buildURL(url, params, paramsSerializer) {
      if (!params) {
        return url;
      }
      var serializedParams;
      if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
      } else if (utils.isURLSearchParams(params)) {
        serializedParams = params.toString();
      } else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
          if (val === null || typeof val === "undefined") {
            return;
          }
          if (utils.isArray(val)) {
            key = key + "[]";
          } else {
            val = [val];
          }
          utils.forEach(val, function parseValue2(v) {
            if (utils.isDate(v)) {
              v = v.toISOString();
            } else if (utils.isObject(v)) {
              v = JSON.stringify(v);
            }
            parts.push(encode(key) + "=" + encode(v));
          });
        });
        serializedParams = parts.join("&");
      }
      if (serializedParams) {
        var hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) {
          url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
      }
      return url;
    };
  }
});

// node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/core/InterceptorManager.js
var require_InterceptorManager2 = __commonJS({
  "node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/core/InterceptorManager.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils2();
    function InterceptorManager() {
      this.handlers = [];
    }
    InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    };
    InterceptorManager.prototype.eject = function eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    };
    InterceptorManager.prototype.forEach = function forEach2(fn) {
      utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    };
    module2.exports = InterceptorManager;
  }
});

// node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/helpers/normalizeHeaderName.js
var require_normalizeHeaderName2 = __commonJS({
  "node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/helpers/normalizeHeaderName.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils2();
    module2.exports = function normalizeHeaderName(headers, normalizedName) {
      utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
          headers[normalizedName] = value;
          delete headers[name];
        }
      });
    };
  }
});

// node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/core/enhanceError.js
var require_enhanceError2 = __commonJS({
  "node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/core/enhanceError.js"(exports, module2) {
    init_react();
    "use strict";
    module2.exports = function enhanceError(error, config, code, request, response) {
      error.config = config;
      if (code) {
        error.code = code;
      }
      error.request = request;
      error.response = response;
      error.isAxiosError = true;
      error.toJSON = function toJSON() {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code
        };
      };
      return error;
    };
  }
});

// node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/core/createError.js
var require_createError2 = __commonJS({
  "node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/core/createError.js"(exports, module2) {
    init_react();
    "use strict";
    var enhanceError = require_enhanceError2();
    module2.exports = function createError(message, config, code, request, response) {
      var error = new Error(message);
      return enhanceError(error, config, code, request, response);
    };
  }
});

// node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/core/settle.js
var require_settle2 = __commonJS({
  "node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/core/settle.js"(exports, module2) {
    init_react();
    "use strict";
    var createError = require_createError2();
    module2.exports = function settle(resolve, reject, response) {
      var validateStatus = response.config.validateStatus;
      if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
      } else {
        reject(createError("Request failed with status code " + response.status, response.config, null, response.request, response));
      }
    };
  }
});

// node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/helpers/cookies.js
var require_cookies2 = __commonJS({
  "node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/helpers/cookies.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils2();
    module2.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + "=" + encodeURIComponent(value));
          if (utils.isNumber(expires)) {
            cookie.push("expires=" + new Date(expires).toGMTString());
          }
          if (utils.isString(path)) {
            cookie.push("path=" + path);
          }
          if (utils.isString(domain)) {
            cookie.push("domain=" + domain);
          }
          if (secure === true) {
            cookie.push("secure");
          }
          document.cookie = cookie.join("; ");
        },
        read: function read(name) {
          var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
          return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove2(name) {
          this.write(name, "", Date.now() - 864e5);
        }
      };
    }() : function nonStandardBrowserEnv() {
      return {
        write: function write() {
        },
        read: function read() {
          return null;
        },
        remove: function remove2() {
        }
      };
    }();
  }
});

// node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/helpers/isAbsoluteURL.js
var require_isAbsoluteURL2 = __commonJS({
  "node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/helpers/isAbsoluteURL.js"(exports, module2) {
    init_react();
    "use strict";
    module2.exports = function isAbsoluteURL(url) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
    };
  }
});

// node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/helpers/combineURLs.js
var require_combineURLs2 = __commonJS({
  "node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/helpers/combineURLs.js"(exports, module2) {
    init_react();
    "use strict";
    module2.exports = function combineURLs(baseURL, relativeURL) {
      return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
    };
  }
});

// node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/core/buildFullPath.js
var require_buildFullPath2 = __commonJS({
  "node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/core/buildFullPath.js"(exports, module2) {
    init_react();
    "use strict";
    var isAbsoluteURL = require_isAbsoluteURL2();
    var combineURLs = require_combineURLs2();
    module2.exports = function buildFullPath(baseURL, requestedURL) {
      if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
      }
      return requestedURL;
    };
  }
});

// node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/helpers/parseHeaders.js
var require_parseHeaders2 = __commonJS({
  "node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/helpers/parseHeaders.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils2();
    var ignoreDuplicateOf = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent"
    ];
    module2.exports = function parseHeaders(headers) {
      var parsed = {};
      var key;
      var val;
      var i;
      if (!headers) {
        return parsed;
      }
      utils.forEach(headers.split("\n"), function parser(line) {
        i = line.indexOf(":");
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
          if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
            return;
          }
          if (key === "set-cookie") {
            parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
          }
        }
      });
      return parsed;
    };
  }
});

// node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/helpers/isURLSameOrigin.js
var require_isURLSameOrigin2 = __commonJS({
  "node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/helpers/isURLSameOrigin.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils2();
    module2.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement("a");
      var originURL;
      function resolveURL(url) {
        var href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin(requestURL) {
        var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }() : function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    }();
  }
});

// node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/adapters/xhr.js
var require_xhr2 = __commonJS({
  "node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/adapters/xhr.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils2();
    var settle = require_settle2();
    var cookies = require_cookies2();
    var buildURL = require_buildURL2();
    var buildFullPath = require_buildFullPath2();
    var parseHeaders = require_parseHeaders2();
    var isURLSameOrigin = require_isURLSameOrigin2();
    var createError = require_createError2();
    module2.exports = function xhrAdapter(config) {
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        var responseType = config.responseType;
        if (utils.isFormData(requestData)) {
          delete requestHeaders["Content-Type"];
        }
        var request = new XMLHttpRequest();
        if (config.auth) {
          var username = config.auth.username || "";
          var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
          requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
        }
        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        request.timeout = config.timeout;
        function onloadend() {
          if (!request) {
            return;
          }
          var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
          var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
          var response = {
            data: responseData,
            status: request.status,
            statusText: request.statusText,
            headers: responseHeaders,
            config,
            request
          };
          settle(resolve, reject, response);
          request = null;
        }
        if ("onloadend" in request) {
          request.onloadend = onloadend;
        } else {
          request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) {
              return;
            }
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
              return;
            }
            setTimeout(onloadend);
          };
        }
        request.onabort = function handleAbort() {
          if (!request) {
            return;
          }
          reject(createError("Request aborted", config, "ECONNABORTED", request));
          request = null;
        };
        request.onerror = function handleError() {
          reject(createError("Network Error", config, null, request));
          request = null;
        };
        request.ontimeout = function handleTimeout() {
          var timeoutErrorMessage = "timeout of " + config.timeout + "ms exceeded";
          if (config.timeoutErrorMessage) {
            timeoutErrorMessage = config.timeoutErrorMessage;
          }
          reject(createError(timeoutErrorMessage, config, config.transitional && config.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request));
          request = null;
        };
        if (utils.isStandardBrowserEnv()) {
          var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
          if (xsrfValue) {
            requestHeaders[config.xsrfHeaderName] = xsrfValue;
          }
        }
        if ("setRequestHeader" in request) {
          utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
              delete requestHeaders[key];
            } else {
              request.setRequestHeader(key, val);
            }
          });
        }
        if (!utils.isUndefined(config.withCredentials)) {
          request.withCredentials = !!config.withCredentials;
        }
        if (responseType && responseType !== "json") {
          request.responseType = config.responseType;
        }
        if (typeof config.onDownloadProgress === "function") {
          request.addEventListener("progress", config.onDownloadProgress);
        }
        if (typeof config.onUploadProgress === "function" && request.upload) {
          request.upload.addEventListener("progress", config.onUploadProgress);
        }
        if (config.cancelToken) {
          config.cancelToken.promise.then(function onCanceled(cancel) {
            if (!request) {
              return;
            }
            request.abort();
            reject(cancel);
            request = null;
          });
        }
        if (!requestData) {
          requestData = null;
        }
        request.send(requestData);
      });
    };
  }
});

// node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/defaults.js
var require_defaults3 = __commonJS({
  "node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/defaults.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils2();
    var normalizeHeaderName = require_normalizeHeaderName2();
    var enhanceError = require_enhanceError2();
    var DEFAULT_CONTENT_TYPE = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    function setContentTypeIfUnset(headers, value) {
      if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
        headers["Content-Type"] = value;
      }
    }
    function getDefaultAdapter() {
      var adapter;
      if (typeof XMLHttpRequest !== "undefined") {
        adapter = require_xhr2();
      } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
        adapter = require_xhr2();
      }
      return adapter;
    }
    function stringifySafely(rawValue, parser, encoder) {
      if (utils.isString(rawValue)) {
        try {
          (parser || JSON.parse)(rawValue);
          return utils.trim(rawValue);
        } catch (e) {
          if (e.name !== "SyntaxError") {
            throw e;
          }
        }
      }
      return (encoder || JSON.stringify)(rawValue);
    }
    var defaults = {
      transitional: {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
      },
      adapter: getDefaultAdapter(),
      transformRequest: [function transformRequest(data, headers) {
        normalizeHeaderName(headers, "Accept");
        normalizeHeaderName(headers, "Content-Type");
        if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
          return data;
        }
        if (utils.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils.isURLSearchParams(data)) {
          setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
          return data.toString();
        }
        if (utils.isObject(data) || headers && headers["Content-Type"] === "application/json") {
          setContentTypeIfUnset(headers, "application/json");
          return stringifySafely(data);
        }
        return data;
      }],
      transformResponse: [function transformResponse(data) {
        var transitional = this.transitional;
        var silentJSONParsing = transitional && transitional.silentJSONParsing;
        var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
        var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
        if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
          try {
            return JSON.parse(data);
          } catch (e) {
            if (strictJSONParsing) {
              if (e.name === "SyntaxError") {
                throw enhanceError(e, this, "E_JSON_PARSE");
              }
              throw e;
            }
          }
        }
        return data;
      }],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
      }
    };
    defaults.headers = {
      common: {
        "Accept": "application/json, text/plain, */*"
      }
    };
    utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
      defaults.headers[method] = {};
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
    });
    module2.exports = defaults;
  }
});

// node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/core/transformData.js
var require_transformData2 = __commonJS({
  "node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/core/transformData.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils2();
    var defaults = require_defaults3();
    module2.exports = function transformData(data, headers, fns) {
      var context = this || defaults;
      utils.forEach(fns, function transform(fn) {
        data = fn.call(context, data, headers);
      });
      return data;
    };
  }
});

// node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/cancel/isCancel.js
var require_isCancel2 = __commonJS({
  "node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/cancel/isCancel.js"(exports, module2) {
    init_react();
    "use strict";
    module2.exports = function isCancel(value) {
      return !!(value && value.__CANCEL__);
    };
  }
});

// node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/core/dispatchRequest.js
var require_dispatchRequest2 = __commonJS({
  "node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/core/dispatchRequest.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils2();
    var transformData = require_transformData2();
    var isCancel = require_isCancel2();
    var defaults = require_defaults3();
    function throwIfCancellationRequested(config) {
      if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
      }
    }
    module2.exports = function dispatchRequest(config) {
      throwIfCancellationRequested(config);
      config.headers = config.headers || {};
      config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
      config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
      utils.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
        delete config.headers[method];
      });
      var adapter = config.adapter || defaults.adapter;
      return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
        return response;
      }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config);
          if (reason && reason.response) {
            reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
          }
        }
        return Promise.reject(reason);
      });
    };
  }
});

// node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/core/mergeConfig.js
var require_mergeConfig2 = __commonJS({
  "node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/core/mergeConfig.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils2();
    module2.exports = function mergeConfig(config1, config2) {
      config2 = config2 || {};
      var config = {};
      var valueFromConfig2Keys = ["url", "method", "data"];
      var mergeDeepPropertiesKeys = ["headers", "auth", "proxy", "params"];
      var defaultToConfig2Keys = [
        "baseURL",
        "transformRequest",
        "transformResponse",
        "paramsSerializer",
        "timeout",
        "timeoutMessage",
        "withCredentials",
        "adapter",
        "responseType",
        "xsrfCookieName",
        "xsrfHeaderName",
        "onUploadProgress",
        "onDownloadProgress",
        "decompress",
        "maxContentLength",
        "maxBodyLength",
        "maxRedirects",
        "transport",
        "httpAgent",
        "httpsAgent",
        "cancelToken",
        "socketPath",
        "responseEncoding"
      ];
      var directMergeKeys = ["validateStatus"];
      function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
          return utils.merge(target, source);
        } else if (utils.isPlainObject(source)) {
          return utils.merge({}, source);
        } else if (utils.isArray(source)) {
          return source.slice();
        }
        return source;
      }
      function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) {
          config[prop] = getMergedValue(config1[prop], config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          config[prop] = getMergedValue(void 0, config1[prop]);
        }
      }
      utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          config[prop] = getMergedValue(void 0, config2[prop]);
        }
      });
      utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
      utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          config[prop] = getMergedValue(void 0, config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          config[prop] = getMergedValue(void 0, config1[prop]);
        }
      });
      utils.forEach(directMergeKeys, function merge(prop) {
        if (prop in config2) {
          config[prop] = getMergedValue(config1[prop], config2[prop]);
        } else if (prop in config1) {
          config[prop] = getMergedValue(void 0, config1[prop]);
        }
      });
      var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys).concat(directMergeKeys);
      var otherKeys = Object.keys(config1).concat(Object.keys(config2)).filter(function filterAxiosKeys(key) {
        return axiosKeys.indexOf(key) === -1;
      });
      utils.forEach(otherKeys, mergeDeepProperties);
      return config;
    };
  }
});

// node_modules/@nhost/hasura-storage-js/node_modules/axios/package.json
var require_package2 = __commonJS({
  "node_modules/@nhost/hasura-storage-js/node_modules/axios/package.json"(exports, module2) {
    module2.exports = {
      name: "axios",
      version: "0.21.4",
      description: "Promise based HTTP client for the browser and node.js",
      main: "index.js",
      scripts: {
        test: "grunt test",
        start: "node ./sandbox/server.js",
        build: "NODE_ENV=production grunt build",
        preversion: "npm test",
        version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
        postversion: "git push && git push --tags",
        examples: "node ./examples/server.js",
        coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
        fix: "eslint --fix lib/**/*.js"
      },
      repository: {
        type: "git",
        url: "https://github.com/axios/axios.git"
      },
      keywords: [
        "xhr",
        "http",
        "ajax",
        "promise",
        "node"
      ],
      author: "Matt Zabriskie",
      license: "MIT",
      bugs: {
        url: "https://github.com/axios/axios/issues"
      },
      homepage: "https://axios-http.com",
      devDependencies: {
        coveralls: "^3.0.0",
        "es6-promise": "^4.2.4",
        grunt: "^1.3.0",
        "grunt-banner": "^0.6.0",
        "grunt-cli": "^1.2.0",
        "grunt-contrib-clean": "^1.1.0",
        "grunt-contrib-watch": "^1.0.0",
        "grunt-eslint": "^23.0.0",
        "grunt-karma": "^4.0.0",
        "grunt-mocha-test": "^0.13.3",
        "grunt-ts": "^6.0.0-beta.19",
        "grunt-webpack": "^4.0.2",
        "istanbul-instrumenter-loader": "^1.0.0",
        "jasmine-core": "^2.4.1",
        karma: "^6.3.2",
        "karma-chrome-launcher": "^3.1.0",
        "karma-firefox-launcher": "^2.1.0",
        "karma-jasmine": "^1.1.1",
        "karma-jasmine-ajax": "^0.1.13",
        "karma-safari-launcher": "^1.0.0",
        "karma-sauce-launcher": "^4.3.6",
        "karma-sinon": "^1.0.5",
        "karma-sourcemap-loader": "^0.3.8",
        "karma-webpack": "^4.0.2",
        "load-grunt-tasks": "^3.5.2",
        minimist: "^1.2.0",
        mocha: "^8.2.1",
        sinon: "^4.5.0",
        "terser-webpack-plugin": "^4.2.3",
        typescript: "^4.0.5",
        "url-search-params": "^0.10.0",
        webpack: "^4.44.2",
        "webpack-dev-server": "^3.11.0"
      },
      browser: {
        "./lib/adapters/http.js": "./lib/adapters/xhr.js"
      },
      jsdelivr: "dist/axios.min.js",
      unpkg: "dist/axios.min.js",
      typings: "./index.d.ts",
      dependencies: {
        "follow-redirects": "^1.14.0"
      },
      bundlesize: [
        {
          path: "./dist/axios.min.js",
          threshold: "5kB"
        }
      ]
    };
  }
});

// node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/helpers/validator.js
var require_validator2 = __commonJS({
  "node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/helpers/validator.js"(exports, module2) {
    init_react();
    "use strict";
    var pkg = require_package2();
    var validators = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
      validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
      };
    });
    var deprecatedWarnings = {};
    var currentVerArr = pkg.version.split(".");
    function isOlderVersion(version2, thanVersion) {
      var pkgVersionArr = thanVersion ? thanVersion.split(".") : currentVerArr;
      var destVer = version2.split(".");
      for (var i = 0; i < 3; i++) {
        if (pkgVersionArr[i] > destVer[i]) {
          return true;
        } else if (pkgVersionArr[i] < destVer[i]) {
          return false;
        }
      }
      return false;
    }
    validators.transitional = function transitional(validator, version2, message) {
      var isDeprecated = version2 && isOlderVersion(version2);
      function formatMessage(opt, desc) {
        return "[Axios v" + pkg.version + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
      }
      return function(value, opt, opts) {
        if (validator === false) {
          throw new Error(formatMessage(opt, " has been removed in " + version2));
        }
        if (isDeprecated && !deprecatedWarnings[opt]) {
          deprecatedWarnings[opt] = true;
          console.warn(formatMessage(opt, " has been deprecated since v" + version2 + " and will be removed in the near future"));
        }
        return validator ? validator(value, opt, opts) : true;
      };
    };
    function assertOptions(options, schema, allowUnknown) {
      if (typeof options !== "object") {
        throw new TypeError("options must be an object");
      }
      var keys = Object.keys(options);
      var i = keys.length;
      while (i-- > 0) {
        var opt = keys[i];
        var validator = schema[opt];
        if (validator) {
          var value = options[opt];
          var result2 = value === void 0 || validator(value, opt, options);
          if (result2 !== true) {
            throw new TypeError("option " + opt + " must be " + result2);
          }
          continue;
        }
        if (allowUnknown !== true) {
          throw Error("Unknown option " + opt);
        }
      }
    }
    module2.exports = {
      isOlderVersion,
      assertOptions,
      validators
    };
  }
});

// node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/core/Axios.js
var require_Axios2 = __commonJS({
  "node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/core/Axios.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils2();
    var buildURL = require_buildURL2();
    var InterceptorManager = require_InterceptorManager2();
    var dispatchRequest = require_dispatchRequest2();
    var mergeConfig = require_mergeConfig2();
    var validator = require_validator2();
    var validators = validator.validators;
    function Axios(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    Axios.prototype.request = function request(config) {
      if (typeof config === "string") {
        config = arguments[1] || {};
        config.url = arguments[0];
      } else {
        config = config || {};
      }
      config = mergeConfig(this.defaults, config);
      if (config.method) {
        config.method = config.method.toLowerCase();
      } else if (this.defaults.method) {
        config.method = this.defaults.method.toLowerCase();
      } else {
        config.method = "get";
      }
      var transitional = config.transitional;
      if (transitional !== void 0) {
        validator.assertOptions(transitional, {
          silentJSONParsing: validators.transitional(validators.boolean, "1.0.0"),
          forcedJSONParsing: validators.transitional(validators.boolean, "1.0.0"),
          clarifyTimeoutError: validators.transitional(validators.boolean, "1.0.0")
        }, false);
      }
      var requestInterceptorChain = [];
      var synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      var responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      var promise;
      if (!synchronousRequestInterceptors) {
        var chain = [dispatchRequest, void 0];
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);
        promise = Promise.resolve(config);
        while (chain.length) {
          promise = promise.then(chain.shift(), chain.shift());
        }
        return promise;
      }
      var newConfig = config;
      while (requestInterceptorChain.length) {
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected(error);
          break;
        }
      }
      try {
        promise = dispatchRequest(newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      while (responseInterceptorChain.length) {
        promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
      }
      return promise;
    };
    Axios.prototype.getUri = function getUri(config) {
      config = mergeConfig(this.defaults, config);
      return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
    };
    utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
      Axios.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          url,
          data: (config || {}).data
        }));
      };
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      Axios.prototype[method] = function(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          url,
          data
        }));
      };
    });
    module2.exports = Axios;
  }
});

// node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/cancel/Cancel.js
var require_Cancel2 = __commonJS({
  "node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/cancel/Cancel.js"(exports, module2) {
    init_react();
    "use strict";
    function Cancel(message) {
      this.message = message;
    }
    Cancel.prototype.toString = function toString3() {
      return "Cancel" + (this.message ? ": " + this.message : "");
    };
    Cancel.prototype.__CANCEL__ = true;
    module2.exports = Cancel;
  }
});

// node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/cancel/CancelToken.js
var require_CancelToken2 = __commonJS({
  "node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/cancel/CancelToken.js"(exports, module2) {
    init_react();
    "use strict";
    var Cancel = require_Cancel2();
    function CancelToken(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      var token = this;
      executor(function cancel(message) {
        if (token.reason) {
          return;
        }
        token.reason = new Cancel(message);
        resolvePromise(token.reason);
      });
    }
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    };
    CancelToken.source = function source() {
      var cancel;
      var token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    };
    module2.exports = CancelToken;
  }
});

// node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/helpers/spread.js
var require_spread2 = __commonJS({
  "node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/helpers/spread.js"(exports, module2) {
    init_react();
    "use strict";
    module2.exports = function spread(callback) {
      return function wrap3(arr) {
        return callback.apply(null, arr);
      };
    };
  }
});

// node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/helpers/isAxiosError.js
var require_isAxiosError2 = __commonJS({
  "node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/helpers/isAxiosError.js"(exports, module2) {
    init_react();
    "use strict";
    module2.exports = function isAxiosError(payload) {
      return typeof payload === "object" && payload.isAxiosError === true;
    };
  }
});

// node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/axios.js
var require_axios3 = __commonJS({
  "node_modules/@nhost/hasura-storage-js/node_modules/axios/lib/axios.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils2();
    var bind2 = require_bind2();
    var Axios = require_Axios2();
    var mergeConfig = require_mergeConfig2();
    var defaults = require_defaults3();
    function createInstance(defaultConfig2) {
      var context = new Axios(defaultConfig2);
      var instance = bind2(Axios.prototype.request, context);
      utils.extend(instance, Axios.prototype, context);
      utils.extend(instance, context);
      return instance;
    }
    var axios5 = createInstance(defaults);
    axios5.Axios = Axios;
    axios5.create = function create(instanceConfig) {
      return createInstance(mergeConfig(axios5.defaults, instanceConfig));
    };
    axios5.Cancel = require_Cancel2();
    axios5.CancelToken = require_CancelToken2();
    axios5.isCancel = require_isCancel2();
    axios5.all = function all(promises) {
      return Promise.all(promises);
    };
    axios5.spread = require_spread2();
    axios5.isAxiosError = require_isAxiosError2();
    module2.exports = axios5;
    module2.exports.default = axios5;
  }
});

// node_modules/@nhost/hasura-storage-js/node_modules/axios/index.js
var require_axios4 = __commonJS({
  "node_modules/@nhost/hasura-storage-js/node_modules/axios/index.js"(exports, module2) {
    init_react();
    module2.exports = require_axios3();
  }
});

// node_modules/axios/lib/helpers/bind.js
var require_bind3 = __commonJS({
  "node_modules/axios/lib/helpers/bind.js"(exports, module2) {
    init_react();
    "use strict";
    module2.exports = function bind2(fn, thisArg) {
      return function wrap3() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        return fn.apply(thisArg, args);
      };
    };
  }
});

// node_modules/axios/lib/utils.js
var require_utils3 = __commonJS({
  "node_modules/axios/lib/utils.js"(exports, module2) {
    init_react();
    "use strict";
    var bind2 = require_bind3();
    var toString3 = Object.prototype.toString;
    function isArray(val) {
      return toString3.call(val) === "[object Array]";
    }
    function isUndefined(val) {
      return typeof val === "undefined";
    }
    function isBuffer(val) {
      return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
    }
    function isArrayBuffer(val) {
      return toString3.call(val) === "[object ArrayBuffer]";
    }
    function isFormData(val) {
      return typeof FormData !== "undefined" && val instanceof FormData;
    }
    function isArrayBufferView(val) {
      var result2;
      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        result2 = ArrayBuffer.isView(val);
      } else {
        result2 = val && val.buffer && val.buffer instanceof ArrayBuffer;
      }
      return result2;
    }
    function isString(val) {
      return typeof val === "string";
    }
    function isNumber(val) {
      return typeof val === "number";
    }
    function isObject(val) {
      return val !== null && typeof val === "object";
    }
    function isPlainObject(val) {
      if (toString3.call(val) !== "[object Object]") {
        return false;
      }
      var prototype2 = Object.getPrototypeOf(val);
      return prototype2 === null || prototype2 === Object.prototype;
    }
    function isDate(val) {
      return toString3.call(val) === "[object Date]";
    }
    function isFile(val) {
      return toString3.call(val) === "[object File]";
    }
    function isBlob(val) {
      return toString3.call(val) === "[object Blob]";
    }
    function isFunction(val) {
      return toString3.call(val) === "[object Function]";
    }
    function isStream(val) {
      return isObject(val) && isFunction(val.pipe);
    }
    function isURLSearchParams(val) {
      return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
    }
    function trim(str) {
      return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
    }
    function isStandardBrowserEnv() {
      if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
        return false;
      }
      return typeof window !== "undefined" && typeof document !== "undefined";
    }
    function forEach2(obj, fn) {
      if (obj === null || typeof obj === "undefined") {
        return;
      }
      if (typeof obj !== "object") {
        obj = [obj];
      }
      if (isArray(obj)) {
        for (var i = 0, l = obj.length; i < l; i++) {
          fn.call(null, obj[i], i, obj);
        }
      } else {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn.call(null, obj[key], key, obj);
          }
        }
      }
    }
    function merge() {
      var result2 = {};
      function assignValue(val, key) {
        if (isPlainObject(result2[key]) && isPlainObject(val)) {
          result2[key] = merge(result2[key], val);
        } else if (isPlainObject(val)) {
          result2[key] = merge({}, val);
        } else if (isArray(val)) {
          result2[key] = val.slice();
        } else {
          result2[key] = val;
        }
      }
      for (var i = 0, l = arguments.length; i < l; i++) {
        forEach2(arguments[i], assignValue);
      }
      return result2;
    }
    function extend(a, b, thisArg) {
      forEach2(b, function assignValue(val, key) {
        if (thisArg && typeof val === "function") {
          a[key] = bind2(val, thisArg);
        } else {
          a[key] = val;
        }
      });
      return a;
    }
    function stripBOM(content) {
      if (content.charCodeAt(0) === 65279) {
        content = content.slice(1);
      }
      return content;
    }
    module2.exports = {
      isArray,
      isArrayBuffer,
      isBuffer,
      isFormData,
      isArrayBufferView,
      isString,
      isNumber,
      isObject,
      isPlainObject,
      isUndefined,
      isDate,
      isFile,
      isBlob,
      isFunction,
      isStream,
      isURLSearchParams,
      isStandardBrowserEnv,
      forEach: forEach2,
      merge,
      extend,
      trim,
      stripBOM
    };
  }
});

// node_modules/axios/lib/helpers/buildURL.js
var require_buildURL3 = __commonJS({
  "node_modules/axios/lib/helpers/buildURL.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils3();
    function encode(val) {
      return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    module2.exports = function buildURL(url, params, paramsSerializer) {
      if (!params) {
        return url;
      }
      var serializedParams;
      if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
      } else if (utils.isURLSearchParams(params)) {
        serializedParams = params.toString();
      } else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
          if (val === null || typeof val === "undefined") {
            return;
          }
          if (utils.isArray(val)) {
            key = key + "[]";
          } else {
            val = [val];
          }
          utils.forEach(val, function parseValue2(v) {
            if (utils.isDate(v)) {
              v = v.toISOString();
            } else if (utils.isObject(v)) {
              v = JSON.stringify(v);
            }
            parts.push(encode(key) + "=" + encode(v));
          });
        });
        serializedParams = parts.join("&");
      }
      if (serializedParams) {
        var hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) {
          url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
      }
      return url;
    };
  }
});

// node_modules/axios/lib/core/InterceptorManager.js
var require_InterceptorManager3 = __commonJS({
  "node_modules/axios/lib/core/InterceptorManager.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils3();
    function InterceptorManager() {
      this.handlers = [];
    }
    InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    };
    InterceptorManager.prototype.eject = function eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    };
    InterceptorManager.prototype.forEach = function forEach2(fn) {
      utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    };
    module2.exports = InterceptorManager;
  }
});

// node_modules/axios/lib/helpers/normalizeHeaderName.js
var require_normalizeHeaderName3 = __commonJS({
  "node_modules/axios/lib/helpers/normalizeHeaderName.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils3();
    module2.exports = function normalizeHeaderName(headers, normalizedName) {
      utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
          headers[normalizedName] = value;
          delete headers[name];
        }
      });
    };
  }
});

// node_modules/axios/lib/core/enhanceError.js
var require_enhanceError3 = __commonJS({
  "node_modules/axios/lib/core/enhanceError.js"(exports, module2) {
    init_react();
    "use strict";
    module2.exports = function enhanceError(error, config, code, request, response) {
      error.config = config;
      if (code) {
        error.code = code;
      }
      error.request = request;
      error.response = response;
      error.isAxiosError = true;
      error.toJSON = function toJSON() {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code,
          status: this.response && this.response.status ? this.response.status : null
        };
      };
      return error;
    };
  }
});

// node_modules/axios/lib/core/createError.js
var require_createError3 = __commonJS({
  "node_modules/axios/lib/core/createError.js"(exports, module2) {
    init_react();
    "use strict";
    var enhanceError = require_enhanceError3();
    module2.exports = function createError(message, config, code, request, response) {
      var error = new Error(message);
      return enhanceError(error, config, code, request, response);
    };
  }
});

// node_modules/axios/lib/core/settle.js
var require_settle3 = __commonJS({
  "node_modules/axios/lib/core/settle.js"(exports, module2) {
    init_react();
    "use strict";
    var createError = require_createError3();
    module2.exports = function settle(resolve, reject, response) {
      var validateStatus = response.config.validateStatus;
      if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
      } else {
        reject(createError("Request failed with status code " + response.status, response.config, null, response.request, response));
      }
    };
  }
});

// node_modules/axios/lib/helpers/cookies.js
var require_cookies3 = __commonJS({
  "node_modules/axios/lib/helpers/cookies.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils3();
    module2.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + "=" + encodeURIComponent(value));
          if (utils.isNumber(expires)) {
            cookie.push("expires=" + new Date(expires).toGMTString());
          }
          if (utils.isString(path)) {
            cookie.push("path=" + path);
          }
          if (utils.isString(domain)) {
            cookie.push("domain=" + domain);
          }
          if (secure === true) {
            cookie.push("secure");
          }
          document.cookie = cookie.join("; ");
        },
        read: function read(name) {
          var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
          return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove2(name) {
          this.write(name, "", Date.now() - 864e5);
        }
      };
    }() : function nonStandardBrowserEnv() {
      return {
        write: function write() {
        },
        read: function read() {
          return null;
        },
        remove: function remove2() {
        }
      };
    }();
  }
});

// node_modules/axios/lib/helpers/isAbsoluteURL.js
var require_isAbsoluteURL3 = __commonJS({
  "node_modules/axios/lib/helpers/isAbsoluteURL.js"(exports, module2) {
    init_react();
    "use strict";
    module2.exports = function isAbsoluteURL(url) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
    };
  }
});

// node_modules/axios/lib/helpers/combineURLs.js
var require_combineURLs3 = __commonJS({
  "node_modules/axios/lib/helpers/combineURLs.js"(exports, module2) {
    init_react();
    "use strict";
    module2.exports = function combineURLs(baseURL, relativeURL) {
      return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
    };
  }
});

// node_modules/axios/lib/core/buildFullPath.js
var require_buildFullPath3 = __commonJS({
  "node_modules/axios/lib/core/buildFullPath.js"(exports, module2) {
    init_react();
    "use strict";
    var isAbsoluteURL = require_isAbsoluteURL3();
    var combineURLs = require_combineURLs3();
    module2.exports = function buildFullPath(baseURL, requestedURL) {
      if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
      }
      return requestedURL;
    };
  }
});

// node_modules/axios/lib/helpers/parseHeaders.js
var require_parseHeaders3 = __commonJS({
  "node_modules/axios/lib/helpers/parseHeaders.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils3();
    var ignoreDuplicateOf = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent"
    ];
    module2.exports = function parseHeaders(headers) {
      var parsed = {};
      var key;
      var val;
      var i;
      if (!headers) {
        return parsed;
      }
      utils.forEach(headers.split("\n"), function parser(line) {
        i = line.indexOf(":");
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
          if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
            return;
          }
          if (key === "set-cookie") {
            parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
          }
        }
      });
      return parsed;
    };
  }
});

// node_modules/axios/lib/helpers/isURLSameOrigin.js
var require_isURLSameOrigin3 = __commonJS({
  "node_modules/axios/lib/helpers/isURLSameOrigin.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils3();
    module2.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement("a");
      var originURL;
      function resolveURL(url) {
        var href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin(requestURL) {
        var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }() : function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    }();
  }
});

// node_modules/axios/lib/cancel/Cancel.js
var require_Cancel3 = __commonJS({
  "node_modules/axios/lib/cancel/Cancel.js"(exports, module2) {
    init_react();
    "use strict";
    function Cancel(message) {
      this.message = message;
    }
    Cancel.prototype.toString = function toString3() {
      return "Cancel" + (this.message ? ": " + this.message : "");
    };
    Cancel.prototype.__CANCEL__ = true;
    module2.exports = Cancel;
  }
});

// node_modules/axios/lib/adapters/xhr.js
var require_xhr3 = __commonJS({
  "node_modules/axios/lib/adapters/xhr.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils3();
    var settle = require_settle3();
    var cookies = require_cookies3();
    var buildURL = require_buildURL3();
    var buildFullPath = require_buildFullPath3();
    var parseHeaders = require_parseHeaders3();
    var isURLSameOrigin = require_isURLSameOrigin3();
    var createError = require_createError3();
    var defaults = require_defaults4();
    var Cancel = require_Cancel3();
    module2.exports = function xhrAdapter(config) {
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        var responseType = config.responseType;
        var onCanceled;
        function done() {
          if (config.cancelToken) {
            config.cancelToken.unsubscribe(onCanceled);
          }
          if (config.signal) {
            config.signal.removeEventListener("abort", onCanceled);
          }
        }
        if (utils.isFormData(requestData)) {
          delete requestHeaders["Content-Type"];
        }
        var request = new XMLHttpRequest();
        if (config.auth) {
          var username = config.auth.username || "";
          var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
          requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
        }
        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        request.timeout = config.timeout;
        function onloadend() {
          if (!request) {
            return;
          }
          var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
          var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
          var response = {
            data: responseData,
            status: request.status,
            statusText: request.statusText,
            headers: responseHeaders,
            config,
            request
          };
          settle(function _resolve(value) {
            resolve(value);
            done();
          }, function _reject(err) {
            reject(err);
            done();
          }, response);
          request = null;
        }
        if ("onloadend" in request) {
          request.onloadend = onloadend;
        } else {
          request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) {
              return;
            }
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
              return;
            }
            setTimeout(onloadend);
          };
        }
        request.onabort = function handleAbort() {
          if (!request) {
            return;
          }
          reject(createError("Request aborted", config, "ECONNABORTED", request));
          request = null;
        };
        request.onerror = function handleError() {
          reject(createError("Network Error", config, null, request));
          request = null;
        };
        request.ontimeout = function handleTimeout() {
          var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
          var transitional = config.transitional || defaults.transitional;
          if (config.timeoutErrorMessage) {
            timeoutErrorMessage = config.timeoutErrorMessage;
          }
          reject(createError(timeoutErrorMessage, config, transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request));
          request = null;
        };
        if (utils.isStandardBrowserEnv()) {
          var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
          if (xsrfValue) {
            requestHeaders[config.xsrfHeaderName] = xsrfValue;
          }
        }
        if ("setRequestHeader" in request) {
          utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
              delete requestHeaders[key];
            } else {
              request.setRequestHeader(key, val);
            }
          });
        }
        if (!utils.isUndefined(config.withCredentials)) {
          request.withCredentials = !!config.withCredentials;
        }
        if (responseType && responseType !== "json") {
          request.responseType = config.responseType;
        }
        if (typeof config.onDownloadProgress === "function") {
          request.addEventListener("progress", config.onDownloadProgress);
        }
        if (typeof config.onUploadProgress === "function" && request.upload) {
          request.upload.addEventListener("progress", config.onUploadProgress);
        }
        if (config.cancelToken || config.signal) {
          onCanceled = function(cancel) {
            if (!request) {
              return;
            }
            reject(!cancel || cancel && cancel.type ? new Cancel("canceled") : cancel);
            request.abort();
            request = null;
          };
          config.cancelToken && config.cancelToken.subscribe(onCanceled);
          if (config.signal) {
            config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
          }
        }
        if (!requestData) {
          requestData = null;
        }
        request.send(requestData);
      });
    };
  }
});

// node_modules/axios/lib/defaults.js
var require_defaults4 = __commonJS({
  "node_modules/axios/lib/defaults.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils3();
    var normalizeHeaderName = require_normalizeHeaderName3();
    var enhanceError = require_enhanceError3();
    var DEFAULT_CONTENT_TYPE = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    function setContentTypeIfUnset(headers, value) {
      if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
        headers["Content-Type"] = value;
      }
    }
    function getDefaultAdapter() {
      var adapter;
      if (typeof XMLHttpRequest !== "undefined") {
        adapter = require_xhr3();
      } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
        adapter = require_xhr3();
      }
      return adapter;
    }
    function stringifySafely(rawValue, parser, encoder) {
      if (utils.isString(rawValue)) {
        try {
          (parser || JSON.parse)(rawValue);
          return utils.trim(rawValue);
        } catch (e) {
          if (e.name !== "SyntaxError") {
            throw e;
          }
        }
      }
      return (encoder || JSON.stringify)(rawValue);
    }
    var defaults = {
      transitional: {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
      },
      adapter: getDefaultAdapter(),
      transformRequest: [function transformRequest(data, headers) {
        normalizeHeaderName(headers, "Accept");
        normalizeHeaderName(headers, "Content-Type");
        if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
          return data;
        }
        if (utils.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils.isURLSearchParams(data)) {
          setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
          return data.toString();
        }
        if (utils.isObject(data) || headers && headers["Content-Type"] === "application/json") {
          setContentTypeIfUnset(headers, "application/json");
          return stringifySafely(data);
        }
        return data;
      }],
      transformResponse: [function transformResponse(data) {
        var transitional = this.transitional || defaults.transitional;
        var silentJSONParsing = transitional && transitional.silentJSONParsing;
        var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
        var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
        if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
          try {
            return JSON.parse(data);
          } catch (e) {
            if (strictJSONParsing) {
              if (e.name === "SyntaxError") {
                throw enhanceError(e, this, "E_JSON_PARSE");
              }
              throw e;
            }
          }
        }
        return data;
      }],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
      },
      headers: {
        common: {
          "Accept": "application/json, text/plain, */*"
        }
      }
    };
    utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
      defaults.headers[method] = {};
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
    });
    module2.exports = defaults;
  }
});

// node_modules/axios/lib/core/transformData.js
var require_transformData3 = __commonJS({
  "node_modules/axios/lib/core/transformData.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils3();
    var defaults = require_defaults4();
    module2.exports = function transformData(data, headers, fns) {
      var context = this || defaults;
      utils.forEach(fns, function transform(fn) {
        data = fn.call(context, data, headers);
      });
      return data;
    };
  }
});

// node_modules/axios/lib/cancel/isCancel.js
var require_isCancel3 = __commonJS({
  "node_modules/axios/lib/cancel/isCancel.js"(exports, module2) {
    init_react();
    "use strict";
    module2.exports = function isCancel(value) {
      return !!(value && value.__CANCEL__);
    };
  }
});

// node_modules/axios/lib/core/dispatchRequest.js
var require_dispatchRequest3 = __commonJS({
  "node_modules/axios/lib/core/dispatchRequest.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils3();
    var transformData = require_transformData3();
    var isCancel = require_isCancel3();
    var defaults = require_defaults4();
    var Cancel = require_Cancel3();
    function throwIfCancellationRequested(config) {
      if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
      }
      if (config.signal && config.signal.aborted) {
        throw new Cancel("canceled");
      }
    }
    module2.exports = function dispatchRequest(config) {
      throwIfCancellationRequested(config);
      config.headers = config.headers || {};
      config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
      config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
      utils.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
        delete config.headers[method];
      });
      var adapter = config.adapter || defaults.adapter;
      return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
        return response;
      }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config);
          if (reason && reason.response) {
            reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
          }
        }
        return Promise.reject(reason);
      });
    };
  }
});

// node_modules/axios/lib/core/mergeConfig.js
var require_mergeConfig3 = __commonJS({
  "node_modules/axios/lib/core/mergeConfig.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils3();
    module2.exports = function mergeConfig(config1, config2) {
      config2 = config2 || {};
      var config = {};
      function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
          return utils.merge(target, source);
        } else if (utils.isPlainObject(source)) {
          return utils.merge({}, source);
        } else if (utils.isArray(source)) {
          return source.slice();
        }
        return source;
      }
      function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) {
          return getMergedValue(config1[prop], config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          return getMergedValue(void 0, config1[prop]);
        }
      }
      function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          return getMergedValue(void 0, config2[prop]);
        }
      }
      function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          return getMergedValue(void 0, config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          return getMergedValue(void 0, config1[prop]);
        }
      }
      function mergeDirectKeys(prop) {
        if (prop in config2) {
          return getMergedValue(config1[prop], config2[prop]);
        } else if (prop in config1) {
          return getMergedValue(void 0, config1[prop]);
        }
      }
      var mergeMap = {
        "url": valueFromConfig2,
        "method": valueFromConfig2,
        "data": valueFromConfig2,
        "baseURL": defaultToConfig2,
        "transformRequest": defaultToConfig2,
        "transformResponse": defaultToConfig2,
        "paramsSerializer": defaultToConfig2,
        "timeout": defaultToConfig2,
        "timeoutMessage": defaultToConfig2,
        "withCredentials": defaultToConfig2,
        "adapter": defaultToConfig2,
        "responseType": defaultToConfig2,
        "xsrfCookieName": defaultToConfig2,
        "xsrfHeaderName": defaultToConfig2,
        "onUploadProgress": defaultToConfig2,
        "onDownloadProgress": defaultToConfig2,
        "decompress": defaultToConfig2,
        "maxContentLength": defaultToConfig2,
        "maxBodyLength": defaultToConfig2,
        "transport": defaultToConfig2,
        "httpAgent": defaultToConfig2,
        "httpsAgent": defaultToConfig2,
        "cancelToken": defaultToConfig2,
        "socketPath": defaultToConfig2,
        "responseEncoding": defaultToConfig2,
        "validateStatus": mergeDirectKeys
      };
      utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
        var merge = mergeMap[prop] || mergeDeepProperties;
        var configValue = merge(prop);
        utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
      });
      return config;
    };
  }
});

// node_modules/axios/lib/env/data.js
var require_data = __commonJS({
  "node_modules/axios/lib/env/data.js"(exports, module2) {
    init_react();
    module2.exports = {
      "version": "0.23.0"
    };
  }
});

// node_modules/axios/lib/helpers/validator.js
var require_validator3 = __commonJS({
  "node_modules/axios/lib/helpers/validator.js"(exports, module2) {
    init_react();
    "use strict";
    var VERSION = require_data().version;
    var validators = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
      validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
      };
    });
    var deprecatedWarnings = {};
    validators.transitional = function transitional(validator, version2, message) {
      function formatMessage(opt, desc) {
        return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
      }
      return function(value, opt, opts) {
        if (validator === false) {
          throw new Error(formatMessage(opt, " has been removed" + (version2 ? " in " + version2 : "")));
        }
        if (version2 && !deprecatedWarnings[opt]) {
          deprecatedWarnings[opt] = true;
          console.warn(formatMessage(opt, " has been deprecated since v" + version2 + " and will be removed in the near future"));
        }
        return validator ? validator(value, opt, opts) : true;
      };
    };
    function assertOptions(options, schema, allowUnknown) {
      if (typeof options !== "object") {
        throw new TypeError("options must be an object");
      }
      var keys = Object.keys(options);
      var i = keys.length;
      while (i-- > 0) {
        var opt = keys[i];
        var validator = schema[opt];
        if (validator) {
          var value = options[opt];
          var result2 = value === void 0 || validator(value, opt, options);
          if (result2 !== true) {
            throw new TypeError("option " + opt + " must be " + result2);
          }
          continue;
        }
        if (allowUnknown !== true) {
          throw Error("Unknown option " + opt);
        }
      }
    }
    module2.exports = {
      assertOptions,
      validators
    };
  }
});

// node_modules/axios/lib/core/Axios.js
var require_Axios3 = __commonJS({
  "node_modules/axios/lib/core/Axios.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils3();
    var buildURL = require_buildURL3();
    var InterceptorManager = require_InterceptorManager3();
    var dispatchRequest = require_dispatchRequest3();
    var mergeConfig = require_mergeConfig3();
    var validator = require_validator3();
    var validators = validator.validators;
    function Axios(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    Axios.prototype.request = function request(config) {
      if (typeof config === "string") {
        config = arguments[1] || {};
        config.url = arguments[0];
      } else {
        config = config || {};
      }
      config = mergeConfig(this.defaults, config);
      if (config.method) {
        config.method = config.method.toLowerCase();
      } else if (this.defaults.method) {
        config.method = this.defaults.method.toLowerCase();
      } else {
        config.method = "get";
      }
      var transitional = config.transitional;
      if (transitional !== void 0) {
        validator.assertOptions(transitional, {
          silentJSONParsing: validators.transitional(validators.boolean),
          forcedJSONParsing: validators.transitional(validators.boolean),
          clarifyTimeoutError: validators.transitional(validators.boolean)
        }, false);
      }
      var requestInterceptorChain = [];
      var synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      var responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      var promise;
      if (!synchronousRequestInterceptors) {
        var chain = [dispatchRequest, void 0];
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);
        promise = Promise.resolve(config);
        while (chain.length) {
          promise = promise.then(chain.shift(), chain.shift());
        }
        return promise;
      }
      var newConfig = config;
      while (requestInterceptorChain.length) {
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected(error);
          break;
        }
      }
      try {
        promise = dispatchRequest(newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      while (responseInterceptorChain.length) {
        promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
      }
      return promise;
    };
    Axios.prototype.getUri = function getUri(config) {
      config = mergeConfig(this.defaults, config);
      return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
    };
    utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
      Axios.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          url,
          data: (config || {}).data
        }));
      };
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      Axios.prototype[method] = function(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          url,
          data
        }));
      };
    });
    module2.exports = Axios;
  }
});

// node_modules/axios/lib/cancel/CancelToken.js
var require_CancelToken3 = __commonJS({
  "node_modules/axios/lib/cancel/CancelToken.js"(exports, module2) {
    init_react();
    "use strict";
    var Cancel = require_Cancel3();
    function CancelToken(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      var token = this;
      this.promise.then(function(cancel) {
        if (!token._listeners)
          return;
        var i;
        var l = token._listeners.length;
        for (i = 0; i < l; i++) {
          token._listeners[i](cancel);
        }
        token._listeners = null;
      });
      this.promise.then = function(onfulfilled) {
        var _resolve;
        var promise = new Promise(function(resolve) {
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          token.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message) {
        if (token.reason) {
          return;
        }
        token.reason = new Cancel(message);
        resolvePromise(token.reason);
      });
    }
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    };
    CancelToken.prototype.subscribe = function subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    };
    CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      var index = this._listeners.indexOf(listener);
      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
    };
    CancelToken.source = function source() {
      var cancel;
      var token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    };
    module2.exports = CancelToken;
  }
});

// node_modules/axios/lib/helpers/spread.js
var require_spread3 = __commonJS({
  "node_modules/axios/lib/helpers/spread.js"(exports, module2) {
    init_react();
    "use strict";
    module2.exports = function spread(callback) {
      return function wrap3(arr) {
        return callback.apply(null, arr);
      };
    };
  }
});

// node_modules/axios/lib/helpers/isAxiosError.js
var require_isAxiosError3 = __commonJS({
  "node_modules/axios/lib/helpers/isAxiosError.js"(exports, module2) {
    init_react();
    "use strict";
    module2.exports = function isAxiosError(payload) {
      return typeof payload === "object" && payload.isAxiosError === true;
    };
  }
});

// node_modules/axios/lib/axios.js
var require_axios5 = __commonJS({
  "node_modules/axios/lib/axios.js"(exports, module2) {
    init_react();
    "use strict";
    var utils = require_utils3();
    var bind2 = require_bind3();
    var Axios = require_Axios3();
    var mergeConfig = require_mergeConfig3();
    var defaults = require_defaults4();
    function createInstance(defaultConfig2) {
      var context = new Axios(defaultConfig2);
      var instance = bind2(Axios.prototype.request, context);
      utils.extend(instance, Axios.prototype, context);
      utils.extend(instance, context);
      instance.create = function create(instanceConfig) {
        return createInstance(mergeConfig(defaultConfig2, instanceConfig));
      };
      return instance;
    }
    var axios5 = createInstance(defaults);
    axios5.Axios = Axios;
    axios5.Cancel = require_Cancel3();
    axios5.CancelToken = require_CancelToken3();
    axios5.isCancel = require_isCancel3();
    axios5.VERSION = require_data().version;
    axios5.all = function all(promises) {
      return Promise.all(promises);
    };
    axios5.spread = require_spread3();
    axios5.isAxiosError = require_isAxiosError3();
    module2.exports = axios5;
    module2.exports.default = axios5;
  }
});

// node_modules/axios/index.js
var require_axios6 = __commonJS({
  "node_modules/axios/index.js"(exports, module2) {
    init_react();
    module2.exports = require_axios5();
  }
});

// browser-route-module:/Users/danny/Sites/portfolio/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();

// node_modules/@nhost/react-auth/lib/esm/index.js
init_react();
var import_jsx_runtime = __toModule(require_jsx_runtime());
var import_react = __toModule(require_react());
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var AuthContext = (0, import_react.createContext)({
  user: null,
  isLoading: true,
  isAuthenticated: false
});
function NhostAuthProvider(_a5) {
  var children = _a5.children, nhost2 = _a5.nhost;
  var _b = (0, import_react.useState)({
    user: null,
    isLoading: true,
    isAuthenticated: false
  }), authContext = _b[0], setAuthContext = _b[1];
  var unsubscribe;
  var _c = (0, import_react.useState)(false), constructorHasRun = _c[0], setConstructorHasRun = _c[1];
  var constructor = function() {
    if (constructorHasRun)
      return;
    unsubscribe = nhost2.auth.onAuthStateChanged(function(_event, session) {
      setAuthContext({
        user: session === null || session === void 0 ? void 0 : session.user,
        isLoading: false,
        isAuthenticated: session !== null
      });
    });
    setConstructorHasRun(true);
  };
  constructor();
  (0, import_react.useEffect)(function() {
    return function() {
      try {
        unsubscribe();
      } catch (error) {
      }
    };
  });
  return (0, import_jsx_runtime.jsx)(AuthContext.Provider, __assign({ value: authContext }, { children }), void 0);
}

// node_modules/@nhost/react-apollo/lib/esm/index.js
init_react();
var import_jsx_runtime2 = __toModule(require_jsx_runtime());
var import_react2 = __toModule(require_react());

// node_modules/@apollo/client/core/index.js
init_react();

// node_modules/@apollo/client/utilities/globals/index.js
init_react();

// node_modules/ts-invariant/lib/invariant.esm.js
init_react();

// node_modules/tslib/modules/index.js
init_react();
var import_tslib = __toModule(require_tslib());
var {
  __extends,
  __assign: __assign2,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __exportStar,
  __createBinding,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet
} = import_tslib.default;

// node_modules/ts-invariant/lib/invariant.esm.js
var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf;
var setPrototypeOf = _a === void 0 ? function(obj, proto) {
  obj.__proto__ = proto;
  return obj;
} : _a;
var InvariantError = function(_super) {
  __extends(InvariantError2, _super);
  function InvariantError2(message) {
    if (message === void 0) {
      message = genericMessage;
    }
    var _this = _super.call(this, typeof message === "number" ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)" : message) || this;
    _this.framesToPop = 1;
    _this.name = genericMessage;
    setPrototypeOf(_this, InvariantError2.prototype);
    return _this;
  }
  return InvariantError2;
}(Error);
function invariant(condition, message) {
  if (!condition) {
    throw new InvariantError(message);
  }
}
var verbosityLevels = ["debug", "log", "warn", "error", "silent"];
var verbosityLevel = verbosityLevels.indexOf("log");
function wrapConsoleMethod(name) {
  return function() {
    if (verbosityLevels.indexOf(name) >= verbosityLevel) {
      var method = console[name] || console.log;
      return method.apply(console, arguments);
    }
  };
}
(function(invariant3) {
  invariant3.debug = wrapConsoleMethod("debug");
  invariant3.log = wrapConsoleMethod("log");
  invariant3.warn = wrapConsoleMethod("warn");
  invariant3.error = wrapConsoleMethod("error");
})(invariant || (invariant = {}));
function setVerbosity(level) {
  var old = verbosityLevels[verbosityLevel];
  verbosityLevel = Math.max(0, verbosityLevels.indexOf(level));
  return old;
}

// node_modules/@apollo/client/utilities/globals/DEV.js
init_react();

// node_modules/@apollo/client/utilities/globals/global.js
init_react();

// node_modules/@apollo/client/utilities/globals/maybe.js
init_react();
function maybe(thunk) {
  try {
    return thunk();
  } catch (_a5) {
  }
}

// node_modules/@apollo/client/utilities/globals/global.js
var global_default = maybe(function() {
  return globalThis;
}) || maybe(function() {
  return window;
}) || maybe(function() {
  return self;
}) || maybe(function() {
  return global;
}) || maybe(function() {
  return maybe.constructor("return this")();
});

// node_modules/@apollo/client/utilities/globals/DEV.js
var __ = "__";
var GLOBAL_KEY = [__, __].join("DEV");
function getDEV() {
  try {
    return Boolean(__DEV__);
  } catch (_a5) {
    Object.defineProperty(global_default, GLOBAL_KEY, {
      value: maybe(function() {
        return "development";
      }) !== "production",
      enumerable: false,
      configurable: true,
      writable: true
    });
    return global_default[GLOBAL_KEY];
  }
}
var DEV_default = getDEV();

// node_modules/@apollo/client/utilities/globals/fix-graphql.js
init_react();

// node_modules/ts-invariant/process/index.js
init_react();
function maybe2(thunk) {
  try {
    return thunk();
  } catch (_) {
  }
}
var safeGlobal = maybe2(function() {
  return globalThis;
}) || maybe2(function() {
  return window;
}) || maybe2(function() {
  return self;
}) || maybe2(function() {
  return global;
}) || maybe2(function() {
  return maybe2.constructor("return this")();
});
var needToRemove = false;
function install() {
  if (safeGlobal && !maybe2(function() {
    return "development";
  }) && !maybe2(function() {
    return process;
  })) {
    Object.defineProperty(safeGlobal, "process", {
      value: {
        env: {
          NODE_ENV: "production"
        }
      },
      configurable: true,
      enumerable: false,
      writable: true
    });
    needToRemove = true;
  }
}
install();
function remove() {
  if (needToRemove) {
    delete safeGlobal.process;
    needToRemove = false;
  }
}

// node_modules/graphql/index.mjs
init_react();

// node_modules/graphql/polyfills/symbols.mjs
init_react();
var SYMBOL_ITERATOR = typeof Symbol === "function" && Symbol.iterator != null ? Symbol.iterator : "@@iterator";
var SYMBOL_ASYNC_ITERATOR = typeof Symbol === "function" && Symbol.asyncIterator != null ? Symbol.asyncIterator : "@@asyncIterator";
var SYMBOL_TO_STRING_TAG = typeof Symbol === "function" && Symbol.toStringTag != null ? Symbol.toStringTag : "@@toStringTag";

// node_modules/graphql/language/ast.mjs
init_react();

// node_modules/graphql/jsutils/defineInspect.mjs
init_react();

// node_modules/graphql/jsutils/invariant.mjs
init_react();
function invariant2(condition, message) {
  var booleanCondition = Boolean(condition);
  if (!booleanCondition) {
    throw new Error(message != null ? message : "Unexpected invariant triggered.");
  }
}

// node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs
init_react();
var nodejsCustomInspectSymbol = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : void 0;
var nodejsCustomInspectSymbol_default = nodejsCustomInspectSymbol;

// node_modules/graphql/jsutils/defineInspect.mjs
function defineInspect(classObject) {
  var fn = classObject.prototype.toJSON;
  typeof fn === "function" || invariant2(0);
  classObject.prototype.inspect = fn;
  if (nodejsCustomInspectSymbol_default) {
    classObject.prototype[nodejsCustomInspectSymbol_default] = fn;
  }
}

// node_modules/graphql/language/ast.mjs
var Location = /* @__PURE__ */ function() {
  function Location2(startToken, endToken, source) {
    this.start = startToken.start;
    this.end = endToken.end;
    this.startToken = startToken;
    this.endToken = endToken;
    this.source = source;
  }
  var _proto = Location2.prototype;
  _proto.toJSON = function toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  };
  return Location2;
}();
defineInspect(Location);
var Token = /* @__PURE__ */ function() {
  function Token2(kind, start, end, line, column, prev, value) {
    this.kind = kind;
    this.start = start;
    this.end = end;
    this.line = line;
    this.column = column;
    this.value = value;
    this.prev = prev;
    this.next = null;
  }
  var _proto2 = Token2.prototype;
  _proto2.toJSON = function toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  };
  return Token2;
}();
defineInspect(Token);
function isNode(maybeNode) {
  return maybeNode != null && typeof maybeNode.kind === "string";
}

// node_modules/graphql/language/source.mjs
init_react();

// node_modules/graphql/jsutils/inspect.mjs
init_react();
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
var MAX_ARRAY_LENGTH = 10;
var MAX_RECURSIVE_DEPTH = 2;
function inspect(value) {
  return formatValue(value, []);
}
function formatValue(value, seenValues) {
  switch (_typeof(value)) {
    case "string":
      return JSON.stringify(value);
    case "function":
      return value.name ? "[function ".concat(value.name, "]") : "[function]";
    case "object":
      if (value === null) {
        return "null";
      }
      return formatObjectValue(value, seenValues);
    default:
      return String(value);
  }
}
function formatObjectValue(value, previouslySeenValues) {
  if (previouslySeenValues.indexOf(value) !== -1) {
    return "[Circular]";
  }
  var seenValues = [].concat(previouslySeenValues, [value]);
  var customInspectFn = getCustomFn(value);
  if (customInspectFn !== void 0) {
    var customValue = customInspectFn.call(value);
    if (customValue !== value) {
      return typeof customValue === "string" ? customValue : formatValue(customValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }
  return formatObject(value, seenValues);
}
function formatObject(object, seenValues) {
  var keys = Object.keys(object);
  if (keys.length === 0) {
    return "{}";
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return "[" + getObjectTag(object) + "]";
  }
  var properties = keys.map(function(key) {
    var value = formatValue(object[key], seenValues);
    return key + ": " + value;
  });
  return "{ " + properties.join(", ") + " }";
}
function formatArray(array, seenValues) {
  if (array.length === 0) {
    return "[]";
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return "[Array]";
  }
  var len = Math.min(MAX_ARRAY_LENGTH, array.length);
  var remaining = array.length - len;
  var items = [];
  for (var i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }
  if (remaining === 1) {
    items.push("... 1 more item");
  } else if (remaining > 1) {
    items.push("... ".concat(remaining, " more items"));
  }
  return "[" + items.join(", ") + "]";
}
function getCustomFn(object) {
  var customInspectFn = object[String(nodejsCustomInspectSymbol_default)];
  if (typeof customInspectFn === "function") {
    return customInspectFn;
  }
  if (typeof object.inspect === "function") {
    return object.inspect;
  }
}
function getObjectTag(object) {
  var tag = Object.prototype.toString.call(object).replace(/^\[object /, "").replace(/]$/, "");
  if (tag === "Object" && typeof object.constructor === "function") {
    var name = object.constructor.name;
    if (typeof name === "string" && name !== "") {
      return name;
    }
  }
  return tag;
}

// node_modules/graphql/jsutils/devAssert.mjs
init_react();
function devAssert(condition, message) {
  var booleanCondition = Boolean(condition);
  if (!booleanCondition) {
    throw new Error(message);
  }
}

// node_modules/graphql/language/source.mjs
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
var Source = /* @__PURE__ */ function() {
  function Source2(body) {
    var name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "GraphQL request";
    var locationOffset = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
      line: 1,
      column: 1
    };
    typeof body === "string" || devAssert(0, "Body must be a string. Received: ".concat(inspect(body), "."));
    this.body = body;
    this.name = name;
    this.locationOffset = locationOffset;
    this.locationOffset.line > 0 || devAssert(0, "line in locationOffset is 1-indexed and must be positive.");
    this.locationOffset.column > 0 || devAssert(0, "column in locationOffset is 1-indexed and must be positive.");
  }
  _createClass(Source2, [{
    key: SYMBOL_TO_STRING_TAG,
    get: function get() {
      return "Source";
    }
  }]);
  return Source2;
}();

// node_modules/graphql/language/blockString.mjs
init_react();
function printBlockString(value) {
  var indentation = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  var preferMultipleLines = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var isSingleLine = value.indexOf("\n") === -1;
  var hasLeadingSpace = value[0] === " " || value[0] === "	";
  var hasTrailingQuote = value[value.length - 1] === '"';
  var hasTrailingSlash = value[value.length - 1] === "\\";
  var printAsMultipleLines = !isSingleLine || hasTrailingQuote || hasTrailingSlash || preferMultipleLines;
  var result2 = "";
  if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
    result2 += "\n" + indentation;
  }
  result2 += indentation ? value.replace(/\n/g, "\n" + indentation) : value;
  if (printAsMultipleLines) {
    result2 += "\n";
  }
  return '"""' + result2.replace(/"""/g, '\\"""') + '"""';
}

// node_modules/graphql/language/visitor.mjs
init_react();
var QueryDocumentKeys = {
  Name: [],
  Document: ["definitions"],
  OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
  VariableDefinition: ["variable", "type", "defaultValue", "directives"],
  Variable: ["name"],
  SelectionSet: ["selections"],
  Field: ["alias", "name", "arguments", "directives", "selectionSet"],
  Argument: ["name", "value"],
  FragmentSpread: ["name", "directives"],
  InlineFragment: ["typeCondition", "directives", "selectionSet"],
  FragmentDefinition: [
    "name",
    "variableDefinitions",
    "typeCondition",
    "directives",
    "selectionSet"
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ["values"],
  ObjectValue: ["fields"],
  ObjectField: ["name", "value"],
  Directive: ["name", "arguments"],
  NamedType: ["name"],
  ListType: ["type"],
  NonNullType: ["type"],
  SchemaDefinition: ["description", "directives", "operationTypes"],
  OperationTypeDefinition: ["type"],
  ScalarTypeDefinition: ["description", "name", "directives"],
  ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
  FieldDefinition: ["description", "name", "arguments", "type", "directives"],
  InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
  InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
  UnionTypeDefinition: ["description", "name", "directives", "types"],
  EnumTypeDefinition: ["description", "name", "directives", "values"],
  EnumValueDefinition: ["description", "name", "directives"],
  InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
  DirectiveDefinition: ["description", "name", "arguments", "locations"],
  SchemaExtension: ["directives", "operationTypes"],
  ScalarTypeExtension: ["name", "directives"],
  ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
  InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
  UnionTypeExtension: ["name", "directives", "types"],
  EnumTypeExtension: ["name", "directives", "values"],
  InputObjectTypeExtension: ["name", "directives", "fields"]
};
var BREAK = Object.freeze({});
function visit(root2, visitor) {
  var visitorKeys = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : QueryDocumentKeys;
  var stack = void 0;
  var inArray = Array.isArray(root2);
  var keys = [root2];
  var index = -1;
  var edits = [];
  var node = void 0;
  var key = void 0;
  var parent = void 0;
  var path = [];
  var ancestors = [];
  var newRoot = root2;
  do {
    index++;
    var isLeaving = index === keys.length;
    var isEdited = isLeaving && edits.length !== 0;
    if (isLeaving) {
      key = ancestors.length === 0 ? void 0 : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();
      if (isEdited) {
        if (inArray) {
          node = node.slice();
        } else {
          var clone = {};
          for (var _i2 = 0, _Object$keys2 = Object.keys(node); _i2 < _Object$keys2.length; _i2++) {
            var k = _Object$keys2[_i2];
            clone[k] = node[k];
          }
          node = clone;
        }
        var editOffset = 0;
        for (var ii = 0; ii < edits.length; ii++) {
          var editKey = edits[ii][0];
          var editValue = edits[ii][1];
          if (inArray) {
            editKey -= editOffset;
          }
          if (inArray && editValue === null) {
            node.splice(editKey, 1);
            editOffset++;
          } else {
            node[editKey] = editValue;
          }
        }
      }
      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : void 0;
      node = parent ? parent[key] : newRoot;
      if (node === null || node === void 0) {
        continue;
      }
      if (parent) {
        path.push(key);
      }
    }
    var result2 = void 0;
    if (!Array.isArray(node)) {
      if (!isNode(node)) {
        throw new Error("Invalid AST Node: ".concat(inspect(node), "."));
      }
      var visitFn = getVisitFn(visitor, node.kind, isLeaving);
      if (visitFn) {
        result2 = visitFn.call(visitor, node, key, parent, path, ancestors);
        if (result2 === BREAK) {
          break;
        }
        if (result2 === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result2 !== void 0) {
          edits.push([key, result2]);
          if (!isLeaving) {
            if (isNode(result2)) {
              node = result2;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }
    if (result2 === void 0 && isEdited) {
      edits.push([key, node]);
    }
    if (isLeaving) {
      path.pop();
    } else {
      var _visitorKeys$node$kin;
      stack = {
        inArray,
        index,
        keys,
        edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : (_visitorKeys$node$kin = visitorKeys[node.kind]) !== null && _visitorKeys$node$kin !== void 0 ? _visitorKeys$node$kin : [];
      index = -1;
      edits = [];
      if (parent) {
        ancestors.push(parent);
      }
      parent = node;
    }
  } while (stack !== void 0);
  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }
  return newRoot;
}
function getVisitFn(visitor, kind, isLeaving) {
  var kindVisitor = visitor[kind];
  if (kindVisitor) {
    if (!isLeaving && typeof kindVisitor === "function") {
      return kindVisitor;
    }
    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;
    if (typeof kindSpecificVisitor === "function") {
      return kindSpecificVisitor;
    }
  } else {
    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;
    if (specificVisitor) {
      if (typeof specificVisitor === "function") {
        return specificVisitor;
      }
      var specificKindVisitor = specificVisitor[kind];
      if (typeof specificKindVisitor === "function") {
        return specificKindVisitor;
      }
    }
  }
}

// node_modules/graphql/language/printer.mjs
init_react();
function print(ast) {
  return visit(ast, {
    leave: printDocASTReducer
  });
}
var MAX_LINE_LENGTH = 80;
var printDocASTReducer = {
  Name: function Name(node) {
    return node.value;
  },
  Variable: function Variable(node) {
    return "$" + node.name;
  },
  Document: function Document(node) {
    return join(node.definitions, "\n\n") + "\n";
  },
  OperationDefinition: function OperationDefinition(node) {
    var op = node.operation;
    var name = node.name;
    var varDefs = wrap("(", join(node.variableDefinitions, ", "), ")");
    var directives = join(node.directives, " ");
    var selectionSet = node.selectionSet;
    return !name && !directives && !varDefs && op === "query" ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], " ");
  },
  VariableDefinition: function VariableDefinition(_ref) {
    var variable = _ref.variable, type = _ref.type, defaultValue = _ref.defaultValue, directives = _ref.directives;
    return variable + ": " + type + wrap(" = ", defaultValue) + wrap(" ", join(directives, " "));
  },
  SelectionSet: function SelectionSet(_ref2) {
    var selections = _ref2.selections;
    return block(selections);
  },
  Field: function Field(_ref3) {
    var alias = _ref3.alias, name = _ref3.name, args = _ref3.arguments, directives = _ref3.directives, selectionSet = _ref3.selectionSet;
    var prefix = wrap("", alias, ": ") + name;
    var argsLine = prefix + wrap("(", join(args, ", "), ")");
    if (argsLine.length > MAX_LINE_LENGTH) {
      argsLine = prefix + wrap("(\n", indent(join(args, "\n")), "\n)");
    }
    return join([argsLine, join(directives, " "), selectionSet], " ");
  },
  Argument: function Argument(_ref4) {
    var name = _ref4.name, value = _ref4.value;
    return name + ": " + value;
  },
  FragmentSpread: function FragmentSpread(_ref5) {
    var name = _ref5.name, directives = _ref5.directives;
    return "..." + name + wrap(" ", join(directives, " "));
  },
  InlineFragment: function InlineFragment(_ref6) {
    var typeCondition = _ref6.typeCondition, directives = _ref6.directives, selectionSet = _ref6.selectionSet;
    return join(["...", wrap("on ", typeCondition), join(directives, " "), selectionSet], " ");
  },
  FragmentDefinition: function FragmentDefinition(_ref7) {
    var name = _ref7.name, typeCondition = _ref7.typeCondition, variableDefinitions = _ref7.variableDefinitions, directives = _ref7.directives, selectionSet = _ref7.selectionSet;
    return "fragment ".concat(name).concat(wrap("(", join(variableDefinitions, ", "), ")"), " ") + "on ".concat(typeCondition, " ").concat(wrap("", join(directives, " "), " ")) + selectionSet;
  },
  IntValue: function IntValue(_ref8) {
    var value = _ref8.value;
    return value;
  },
  FloatValue: function FloatValue(_ref9) {
    var value = _ref9.value;
    return value;
  },
  StringValue: function StringValue(_ref10, key) {
    var value = _ref10.value, isBlockString = _ref10.block;
    return isBlockString ? printBlockString(value, key === "description" ? "" : "  ") : JSON.stringify(value);
  },
  BooleanValue: function BooleanValue(_ref11) {
    var value = _ref11.value;
    return value ? "true" : "false";
  },
  NullValue: function NullValue() {
    return "null";
  },
  EnumValue: function EnumValue(_ref12) {
    var value = _ref12.value;
    return value;
  },
  ListValue: function ListValue(_ref13) {
    var values = _ref13.values;
    return "[" + join(values, ", ") + "]";
  },
  ObjectValue: function ObjectValue(_ref14) {
    var fields = _ref14.fields;
    return "{" + join(fields, ", ") + "}";
  },
  ObjectField: function ObjectField(_ref15) {
    var name = _ref15.name, value = _ref15.value;
    return name + ": " + value;
  },
  Directive: function Directive(_ref16) {
    var name = _ref16.name, args = _ref16.arguments;
    return "@" + name + wrap("(", join(args, ", "), ")");
  },
  NamedType: function NamedType(_ref17) {
    var name = _ref17.name;
    return name;
  },
  ListType: function ListType(_ref18) {
    var type = _ref18.type;
    return "[" + type + "]";
  },
  NonNullType: function NonNullType(_ref19) {
    var type = _ref19.type;
    return type + "!";
  },
  SchemaDefinition: addDescription(function(_ref20) {
    var directives = _ref20.directives, operationTypes = _ref20.operationTypes;
    return join(["schema", join(directives, " "), block(operationTypes)], " ");
  }),
  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
    var operation = _ref21.operation, type = _ref21.type;
    return operation + ": " + type;
  },
  ScalarTypeDefinition: addDescription(function(_ref22) {
    var name = _ref22.name, directives = _ref22.directives;
    return join(["scalar", name, join(directives, " ")], " ");
  }),
  ObjectTypeDefinition: addDescription(function(_ref23) {
    var name = _ref23.name, interfaces = _ref23.interfaces, directives = _ref23.directives, fields = _ref23.fields;
    return join(["type", name, wrap("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ");
  }),
  FieldDefinition: addDescription(function(_ref24) {
    var name = _ref24.name, args = _ref24.arguments, type = _ref24.type, directives = _ref24.directives;
    return name + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + ": " + type + wrap(" ", join(directives, " "));
  }),
  InputValueDefinition: addDescription(function(_ref25) {
    var name = _ref25.name, type = _ref25.type, defaultValue = _ref25.defaultValue, directives = _ref25.directives;
    return join([name + ": " + type, wrap("= ", defaultValue), join(directives, " ")], " ");
  }),
  InterfaceTypeDefinition: addDescription(function(_ref26) {
    var name = _ref26.name, interfaces = _ref26.interfaces, directives = _ref26.directives, fields = _ref26.fields;
    return join(["interface", name, wrap("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ");
  }),
  UnionTypeDefinition: addDescription(function(_ref27) {
    var name = _ref27.name, directives = _ref27.directives, types = _ref27.types;
    return join(["union", name, join(directives, " "), types && types.length !== 0 ? "= " + join(types, " | ") : ""], " ");
  }),
  EnumTypeDefinition: addDescription(function(_ref28) {
    var name = _ref28.name, directives = _ref28.directives, values = _ref28.values;
    return join(["enum", name, join(directives, " "), block(values)], " ");
  }),
  EnumValueDefinition: addDescription(function(_ref29) {
    var name = _ref29.name, directives = _ref29.directives;
    return join([name, join(directives, " ")], " ");
  }),
  InputObjectTypeDefinition: addDescription(function(_ref30) {
    var name = _ref30.name, directives = _ref30.directives, fields = _ref30.fields;
    return join(["input", name, join(directives, " "), block(fields)], " ");
  }),
  DirectiveDefinition: addDescription(function(_ref31) {
    var name = _ref31.name, args = _ref31.arguments, repeatable = _ref31.repeatable, locations = _ref31.locations;
    return "directive @" + name + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + (repeatable ? " repeatable" : "") + " on " + join(locations, " | ");
  }),
  SchemaExtension: function SchemaExtension(_ref32) {
    var directives = _ref32.directives, operationTypes = _ref32.operationTypes;
    return join(["extend schema", join(directives, " "), block(operationTypes)], " ");
  },
  ScalarTypeExtension: function ScalarTypeExtension(_ref33) {
    var name = _ref33.name, directives = _ref33.directives;
    return join(["extend scalar", name, join(directives, " ")], " ");
  },
  ObjectTypeExtension: function ObjectTypeExtension(_ref34) {
    var name = _ref34.name, interfaces = _ref34.interfaces, directives = _ref34.directives, fields = _ref34.fields;
    return join(["extend type", name, wrap("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ");
  },
  InterfaceTypeExtension: function InterfaceTypeExtension(_ref35) {
    var name = _ref35.name, interfaces = _ref35.interfaces, directives = _ref35.directives, fields = _ref35.fields;
    return join(["extend interface", name, wrap("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ");
  },
  UnionTypeExtension: function UnionTypeExtension(_ref36) {
    var name = _ref36.name, directives = _ref36.directives, types = _ref36.types;
    return join(["extend union", name, join(directives, " "), types && types.length !== 0 ? "= " + join(types, " | ") : ""], " ");
  },
  EnumTypeExtension: function EnumTypeExtension(_ref37) {
    var name = _ref37.name, directives = _ref37.directives, values = _ref37.values;
    return join(["extend enum", name, join(directives, " "), block(values)], " ");
  },
  InputObjectTypeExtension: function InputObjectTypeExtension(_ref38) {
    var name = _ref38.name, directives = _ref38.directives, fields = _ref38.fields;
    return join(["extend input", name, join(directives, " "), block(fields)], " ");
  }
};
function addDescription(cb) {
  return function(node) {
    return join([node.description, cb(node)], "\n");
  };
}
function join(maybeArray) {
  var _maybeArray$filter$jo;
  var separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter(function(x) {
    return x;
  }).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : "";
}
function block(array) {
  return wrap("{\n", indent(join(array, "\n")), "\n}");
}
function wrap(start, maybeString) {
  var end = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  return maybeString != null && maybeString !== "" ? start + maybeString + end : "";
}
function indent(str) {
  return wrap("  ", str.replace(/\n/g, "\n  "));
}
function isMultiline(str) {
  return str.indexOf("\n") !== -1;
}
function hasMultilineItems(maybeArray) {
  return maybeArray != null && maybeArray.some(isMultiline);
}

// node_modules/graphql/language/index.mjs
init_react();

// node_modules/@apollo/client/utilities/globals/fix-graphql.js
function removeTemporaryGlobals() {
  return typeof Source === "function" ? remove() : remove();
}

// node_modules/@apollo/client/utilities/globals/index.js
function checkDEV() {
  __DEV__ ? invariant(typeof DEV_default === "boolean", DEV_default) : invariant(typeof DEV_default === "boolean", 36);
}
removeTemporaryGlobals();
checkDEV();

// node_modules/@apollo/client/core/ApolloClient.js
init_react();

// node_modules/@apollo/client/link/core/index.js
init_react();

// node_modules/@apollo/client/link/core/ApolloLink.js
init_react();

// node_modules/@apollo/client/utilities/index.js
init_react();

// node_modules/@apollo/client/utilities/graphql/directives.js
init_react();
function shouldInclude(_a5, variables) {
  var directives = _a5.directives;
  if (!directives || !directives.length) {
    return true;
  }
  return getInclusionDirectives(directives).every(function(_a6) {
    var directive = _a6.directive, ifArgument = _a6.ifArgument;
    var evaledValue = false;
    if (ifArgument.value.kind === "Variable") {
      evaledValue = variables && variables[ifArgument.value.name.value];
      __DEV__ ? invariant(evaledValue !== void 0, "Invalid variable referenced in @".concat(directive.name.value, " directive.")) : invariant(evaledValue !== void 0, 37);
    } else {
      evaledValue = ifArgument.value.value;
    }
    return directive.name.value === "skip" ? !evaledValue : evaledValue;
  });
}
function getDirectiveNames(root2) {
  var names = [];
  visit(root2, {
    Directive: function(node) {
      names.push(node.name.value);
    }
  });
  return names;
}
function hasDirectives(names, root2) {
  return getDirectiveNames(root2).some(function(name) {
    return names.indexOf(name) > -1;
  });
}
function hasClientExports(document2) {
  return document2 && hasDirectives(["client"], document2) && hasDirectives(["export"], document2);
}
function isInclusionDirective(_a5) {
  var value = _a5.name.value;
  return value === "skip" || value === "include";
}
function getInclusionDirectives(directives) {
  var result2 = [];
  if (directives && directives.length) {
    directives.forEach(function(directive) {
      if (!isInclusionDirective(directive))
        return;
      var directiveArguments = directive.arguments;
      var directiveName = directive.name.value;
      __DEV__ ? invariant(directiveArguments && directiveArguments.length === 1, "Incorrect number of arguments for the @".concat(directiveName, " directive.")) : invariant(directiveArguments && directiveArguments.length === 1, 38);
      var ifArgument = directiveArguments[0];
      __DEV__ ? invariant(ifArgument.name && ifArgument.name.value === "if", "Invalid argument for the @".concat(directiveName, " directive.")) : invariant(ifArgument.name && ifArgument.name.value === "if", 39);
      var ifValue = ifArgument.value;
      __DEV__ ? invariant(ifValue && (ifValue.kind === "Variable" || ifValue.kind === "BooleanValue"), "Argument for the @".concat(directiveName, " directive must be a variable or a boolean value.")) : invariant(ifValue && (ifValue.kind === "Variable" || ifValue.kind === "BooleanValue"), 40);
      result2.push({ directive, ifArgument });
    });
  }
  return result2;
}

// node_modules/@apollo/client/utilities/graphql/fragments.js
init_react();
function getFragmentQueryDocument(document2, fragmentName) {
  var actualFragmentName = fragmentName;
  var fragments = [];
  document2.definitions.forEach(function(definition) {
    if (definition.kind === "OperationDefinition") {
      throw __DEV__ ? new InvariantError("Found a ".concat(definition.operation, " operation").concat(definition.name ? " named '".concat(definition.name.value, "'") : "", ". ") + "No operations are allowed when using a fragment as a query. Only fragments are allowed.") : new InvariantError(41);
    }
    if (definition.kind === "FragmentDefinition") {
      fragments.push(definition);
    }
  });
  if (typeof actualFragmentName === "undefined") {
    __DEV__ ? invariant(fragments.length === 1, "Found ".concat(fragments.length, " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.")) : invariant(fragments.length === 1, 42);
    actualFragmentName = fragments[0].name.value;
  }
  var query = __assign2(__assign2({}, document2), { definitions: __spreadArray([
    {
      kind: "OperationDefinition",
      operation: "query",
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: {
              kind: "Name",
              value: actualFragmentName
            }
          }
        ]
      }
    }
  ], document2.definitions, true) });
  return query;
}
function createFragmentMap(fragments) {
  if (fragments === void 0) {
    fragments = [];
  }
  var symTable = {};
  fragments.forEach(function(fragment) {
    symTable[fragment.name.value] = fragment;
  });
  return symTable;
}
function getFragmentFromSelection(selection, fragmentMap) {
  switch (selection.kind) {
    case "InlineFragment":
      return selection;
    case "FragmentSpread": {
      var fragment = fragmentMap && fragmentMap[selection.name.value];
      __DEV__ ? invariant(fragment, "No fragment named ".concat(selection.name.value, ".")) : invariant(fragment, 43);
      return fragment;
    }
    default:
      return null;
  }
}

// node_modules/@apollo/client/utilities/graphql/getFromAST.js
init_react();

// node_modules/@apollo/client/utilities/graphql/storeUtils.js
init_react();

// node_modules/@apollo/client/utilities/common/objects.js
init_react();
function isNonNullObject(obj) {
  return obj !== null && typeof obj === "object";
}

// node_modules/@apollo/client/utilities/graphql/storeUtils.js
function makeReference(id) {
  return { __ref: String(id) };
}
function isReference(obj) {
  return Boolean(obj && typeof obj === "object" && typeof obj.__ref === "string");
}
function isDocumentNode(value) {
  return isNonNullObject(value) && value.kind === "Document" && Array.isArray(value.definitions);
}
function isStringValue(value) {
  return value.kind === "StringValue";
}
function isBooleanValue(value) {
  return value.kind === "BooleanValue";
}
function isIntValue(value) {
  return value.kind === "IntValue";
}
function isFloatValue(value) {
  return value.kind === "FloatValue";
}
function isVariable(value) {
  return value.kind === "Variable";
}
function isObjectValue(value) {
  return value.kind === "ObjectValue";
}
function isListValue(value) {
  return value.kind === "ListValue";
}
function isEnumValue(value) {
  return value.kind === "EnumValue";
}
function isNullValue(value) {
  return value.kind === "NullValue";
}
function valueToObjectRepresentation(argObj, name, value, variables) {
  if (isIntValue(value) || isFloatValue(value)) {
    argObj[name.value] = Number(value.value);
  } else if (isBooleanValue(value) || isStringValue(value)) {
    argObj[name.value] = value.value;
  } else if (isObjectValue(value)) {
    var nestedArgObj_1 = {};
    value.fields.map(function(obj) {
      return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
    });
    argObj[name.value] = nestedArgObj_1;
  } else if (isVariable(value)) {
    var variableValue = (variables || {})[value.name.value];
    argObj[name.value] = variableValue;
  } else if (isListValue(value)) {
    argObj[name.value] = value.values.map(function(listValue) {
      var nestedArgArrayObj = {};
      valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
      return nestedArgArrayObj[name.value];
    });
  } else if (isEnumValue(value)) {
    argObj[name.value] = value.value;
  } else if (isNullValue(value)) {
    argObj[name.value] = null;
  } else {
    throw __DEV__ ? new InvariantError('The inline argument "'.concat(name.value, '" of kind "').concat(value.kind, '"') + "is not supported. Use variables instead of inline arguments to overcome this limitation.") : new InvariantError(52);
  }
}
function storeKeyNameFromField(field, variables) {
  var directivesObj = null;
  if (field.directives) {
    directivesObj = {};
    field.directives.forEach(function(directive) {
      directivesObj[directive.name.value] = {};
      if (directive.arguments) {
        directive.arguments.forEach(function(_a5) {
          var name = _a5.name, value = _a5.value;
          return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
        });
      }
    });
  }
  var argObj = null;
  if (field.arguments && field.arguments.length) {
    argObj = {};
    field.arguments.forEach(function(_a5) {
      var name = _a5.name, value = _a5.value;
      return valueToObjectRepresentation(argObj, name, value, variables);
    });
  }
  return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export"
];
var getStoreKeyName = Object.assign(function(fieldName, args, directives) {
  if (args && directives && directives["connection"] && directives["connection"]["key"]) {
    if (directives["connection"]["filter"] && directives["connection"]["filter"].length > 0) {
      var filterKeys = directives["connection"]["filter"] ? directives["connection"]["filter"] : [];
      filterKeys.sort();
      var filteredArgs_1 = {};
      filterKeys.forEach(function(key) {
        filteredArgs_1[key] = args[key];
      });
      return "".concat(directives["connection"]["key"], "(").concat(stringify(filteredArgs_1), ")");
    } else {
      return directives["connection"]["key"];
    }
  }
  var completeFieldName = fieldName;
  if (args) {
    var stringifiedArgs = stringify(args);
    completeFieldName += "(".concat(stringifiedArgs, ")");
  }
  if (directives) {
    Object.keys(directives).forEach(function(key) {
      if (KNOWN_DIRECTIVES.indexOf(key) !== -1)
        return;
      if (directives[key] && Object.keys(directives[key]).length) {
        completeFieldName += "@".concat(key, "(").concat(stringify(directives[key]), ")");
      } else {
        completeFieldName += "@".concat(key);
      }
    });
  }
  return completeFieldName;
}, {
  setStringify: function(s) {
    var previous = stringify;
    stringify = s;
    return previous;
  }
});
var stringify = function defaultStringify(value) {
  return JSON.stringify(value, stringifyReplacer);
};
function stringifyReplacer(_key, value) {
  if (isNonNullObject(value) && !Array.isArray(value)) {
    value = Object.keys(value).sort().reduce(function(copy, key) {
      copy[key] = value[key];
      return copy;
    }, {});
  }
  return value;
}
function argumentsObjectFromField(field, variables) {
  if (field.arguments && field.arguments.length) {
    var argObj_1 = {};
    field.arguments.forEach(function(_a5) {
      var name = _a5.name, value = _a5.value;
      return valueToObjectRepresentation(argObj_1, name, value, variables);
    });
    return argObj_1;
  }
  return null;
}
function resultKeyNameFromField(field) {
  return field.alias ? field.alias.value : field.name.value;
}
function getTypenameFromResult(result2, selectionSet, fragmentMap) {
  if (typeof result2.__typename === "string") {
    return result2.__typename;
  }
  for (var _i = 0, _a5 = selectionSet.selections; _i < _a5.length; _i++) {
    var selection = _a5[_i];
    if (isField(selection)) {
      if (selection.name.value === "__typename") {
        return result2[resultKeyNameFromField(selection)];
      }
    } else {
      var typename = getTypenameFromResult(result2, getFragmentFromSelection(selection, fragmentMap).selectionSet, fragmentMap);
      if (typeof typename === "string") {
        return typename;
      }
    }
  }
}
function isField(selection) {
  return selection.kind === "Field";
}
function isInlineFragment(selection) {
  return selection.kind === "InlineFragment";
}

// node_modules/@apollo/client/utilities/graphql/getFromAST.js
function checkDocument(doc) {
  __DEV__ ? invariant(doc && doc.kind === "Document", 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : invariant(doc && doc.kind === "Document", 44);
  var operations = doc.definitions.filter(function(d) {
    return d.kind !== "FragmentDefinition";
  }).map(function(definition) {
    if (definition.kind !== "OperationDefinition") {
      throw __DEV__ ? new InvariantError('Schema type definitions not allowed in queries. Found: "'.concat(definition.kind, '"')) : new InvariantError(45);
    }
    return definition;
  });
  __DEV__ ? invariant(operations.length <= 1, "Ambiguous GraphQL document: contains ".concat(operations.length, " operations")) : invariant(operations.length <= 1, 46);
  return doc;
}
function getOperationDefinition(doc) {
  checkDocument(doc);
  return doc.definitions.filter(function(definition) {
    return definition.kind === "OperationDefinition";
  })[0];
}
function getOperationName(doc) {
  return doc.definitions.filter(function(definition) {
    return definition.kind === "OperationDefinition" && definition.name;
  }).map(function(x) {
    return x.name.value;
  })[0] || null;
}
function getFragmentDefinitions(doc) {
  return doc.definitions.filter(function(definition) {
    return definition.kind === "FragmentDefinition";
  });
}
function getQueryDefinition(doc) {
  var queryDef = getOperationDefinition(doc);
  __DEV__ ? invariant(queryDef && queryDef.operation === "query", "Must contain a query definition.") : invariant(queryDef && queryDef.operation === "query", 47);
  return queryDef;
}
function getFragmentDefinition(doc) {
  __DEV__ ? invariant(doc.kind === "Document", 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : invariant(doc.kind === "Document", 48);
  __DEV__ ? invariant(doc.definitions.length <= 1, "Fragment must have exactly one definition.") : invariant(doc.definitions.length <= 1, 49);
  var fragmentDef = doc.definitions[0];
  __DEV__ ? invariant(fragmentDef.kind === "FragmentDefinition", "Must be a fragment definition.") : invariant(fragmentDef.kind === "FragmentDefinition", 50);
  return fragmentDef;
}
function getMainDefinition(queryDoc) {
  checkDocument(queryDoc);
  var fragmentDefinition;
  for (var _i = 0, _a5 = queryDoc.definitions; _i < _a5.length; _i++) {
    var definition = _a5[_i];
    if (definition.kind === "OperationDefinition") {
      var operation = definition.operation;
      if (operation === "query" || operation === "mutation" || operation === "subscription") {
        return definition;
      }
    }
    if (definition.kind === "FragmentDefinition" && !fragmentDefinition) {
      fragmentDefinition = definition;
    }
  }
  if (fragmentDefinition) {
    return fragmentDefinition;
  }
  throw __DEV__ ? new InvariantError("Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.") : new InvariantError(51);
}
function getDefaultValues(definition) {
  var defaultValues = Object.create(null);
  var defs = definition && definition.variableDefinitions;
  if (defs && defs.length) {
    defs.forEach(function(def) {
      if (def.defaultValue) {
        valueToObjectRepresentation(defaultValues, def.variable.name, def.defaultValue);
      }
    });
  }
  return defaultValues;
}

// node_modules/@apollo/client/utilities/graphql/transform.js
init_react();

// node_modules/@apollo/client/utilities/common/filterInPlace.js
init_react();
function filterInPlace(array, test, context) {
  var target = 0;
  array.forEach(function(elem, i) {
    if (test.call(this, elem, i, array)) {
      array[target++] = elem;
    }
  }, context);
  array.length = target;
  return array;
}

// node_modules/@apollo/client/utilities/graphql/transform.js
var TYPENAME_FIELD = {
  kind: "Field",
  name: {
    kind: "Name",
    value: "__typename"
  }
};
function isEmpty(op, fragments) {
  return op.selectionSet.selections.every(function(selection) {
    return selection.kind === "FragmentSpread" && isEmpty(fragments[selection.name.value], fragments);
  });
}
function nullIfDocIsEmpty(doc) {
  return isEmpty(getOperationDefinition(doc) || getFragmentDefinition(doc), createFragmentMap(getFragmentDefinitions(doc))) ? null : doc;
}
function getDirectiveMatcher(directives) {
  return function directiveMatcher(directive) {
    return directives.some(function(dir) {
      return dir.name && dir.name === directive.name.value || dir.test && dir.test(directive);
    });
  };
}
function removeDirectivesFromDocument(directives, doc) {
  var variablesInUse = Object.create(null);
  var variablesToRemove = [];
  var fragmentSpreadsInUse = Object.create(null);
  var fragmentSpreadsToRemove = [];
  var modifiedDoc = nullIfDocIsEmpty(visit(doc, {
    Variable: {
      enter: function(node, _key, parent) {
        if (parent.kind !== "VariableDefinition") {
          variablesInUse[node.name.value] = true;
        }
      }
    },
    Field: {
      enter: function(node) {
        if (directives && node.directives) {
          var shouldRemoveField = directives.some(function(directive) {
            return directive.remove;
          });
          if (shouldRemoveField && node.directives && node.directives.some(getDirectiveMatcher(directives))) {
            if (node.arguments) {
              node.arguments.forEach(function(arg) {
                if (arg.value.kind === "Variable") {
                  variablesToRemove.push({
                    name: arg.value.name.value
                  });
                }
              });
            }
            if (node.selectionSet) {
              getAllFragmentSpreadsFromSelectionSet(node.selectionSet).forEach(function(frag) {
                fragmentSpreadsToRemove.push({
                  name: frag.name.value
                });
              });
            }
            return null;
          }
        }
      }
    },
    FragmentSpread: {
      enter: function(node) {
        fragmentSpreadsInUse[node.name.value] = true;
      }
    },
    Directive: {
      enter: function(node) {
        if (getDirectiveMatcher(directives)(node)) {
          return null;
        }
      }
    }
  }));
  if (modifiedDoc && filterInPlace(variablesToRemove, function(v) {
    return !!v.name && !variablesInUse[v.name];
  }).length) {
    modifiedDoc = removeArgumentsFromDocument(variablesToRemove, modifiedDoc);
  }
  if (modifiedDoc && filterInPlace(fragmentSpreadsToRemove, function(fs) {
    return !!fs.name && !fragmentSpreadsInUse[fs.name];
  }).length) {
    modifiedDoc = removeFragmentSpreadFromDocument(fragmentSpreadsToRemove, modifiedDoc);
  }
  return modifiedDoc;
}
var addTypenameToDocument = Object.assign(function(doc) {
  return visit(checkDocument(doc), {
    SelectionSet: {
      enter: function(node, _key, parent) {
        if (parent && parent.kind === "OperationDefinition") {
          return;
        }
        var selections = node.selections;
        if (!selections) {
          return;
        }
        var skip = selections.some(function(selection) {
          return isField(selection) && (selection.name.value === "__typename" || selection.name.value.lastIndexOf("__", 0) === 0);
        });
        if (skip) {
          return;
        }
        var field = parent;
        if (isField(field) && field.directives && field.directives.some(function(d) {
          return d.name.value === "export";
        })) {
          return;
        }
        return __assign2(__assign2({}, node), { selections: __spreadArray(__spreadArray([], selections, true), [TYPENAME_FIELD], false) });
      }
    }
  });
}, {
  added: function(field) {
    return field === TYPENAME_FIELD;
  }
});
var connectionRemoveConfig = {
  test: function(directive) {
    var willRemove = directive.name.value === "connection";
    if (willRemove) {
      if (!directive.arguments || !directive.arguments.some(function(arg) {
        return arg.name.value === "key";
      })) {
        __DEV__ && invariant.warn("Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key.");
      }
    }
    return willRemove;
  }
};
function removeConnectionDirectiveFromDocument(doc) {
  return removeDirectivesFromDocument([connectionRemoveConfig], checkDocument(doc));
}
function getArgumentMatcher(config) {
  return function argumentMatcher(argument) {
    return config.some(function(aConfig) {
      return argument.value && argument.value.kind === "Variable" && argument.value.name && (aConfig.name === argument.value.name.value || aConfig.test && aConfig.test(argument));
    });
  };
}
function removeArgumentsFromDocument(config, doc) {
  var argMatcher = getArgumentMatcher(config);
  return nullIfDocIsEmpty(visit(doc, {
    OperationDefinition: {
      enter: function(node) {
        return __assign2(__assign2({}, node), { variableDefinitions: node.variableDefinitions ? node.variableDefinitions.filter(function(varDef) {
          return !config.some(function(arg) {
            return arg.name === varDef.variable.name.value;
          });
        }) : [] });
      }
    },
    Field: {
      enter: function(node) {
        var shouldRemoveField = config.some(function(argConfig) {
          return argConfig.remove;
        });
        if (shouldRemoveField) {
          var argMatchCount_1 = 0;
          if (node.arguments) {
            node.arguments.forEach(function(arg) {
              if (argMatcher(arg)) {
                argMatchCount_1 += 1;
              }
            });
          }
          if (argMatchCount_1 === 1) {
            return null;
          }
        }
      }
    },
    Argument: {
      enter: function(node) {
        if (argMatcher(node)) {
          return null;
        }
      }
    }
  }));
}
function removeFragmentSpreadFromDocument(config, doc) {
  function enter(node) {
    if (config.some(function(def) {
      return def.name === node.name.value;
    })) {
      return null;
    }
  }
  return nullIfDocIsEmpty(visit(doc, {
    FragmentSpread: { enter },
    FragmentDefinition: { enter }
  }));
}
function getAllFragmentSpreadsFromSelectionSet(selectionSet) {
  var allFragments = [];
  selectionSet.selections.forEach(function(selection) {
    if ((isField(selection) || isInlineFragment(selection)) && selection.selectionSet) {
      getAllFragmentSpreadsFromSelectionSet(selection.selectionSet).forEach(function(frag) {
        return allFragments.push(frag);
      });
    } else if (selection.kind === "FragmentSpread") {
      allFragments.push(selection);
    }
  });
  return allFragments;
}
function buildQueryFromSelectionSet(document2) {
  var definition = getMainDefinition(document2);
  var definitionOperation = definition.operation;
  if (definitionOperation === "query") {
    return document2;
  }
  var modifiedDoc = visit(document2, {
    OperationDefinition: {
      enter: function(node) {
        return __assign2(__assign2({}, node), { operation: "query" });
      }
    }
  });
  return modifiedDoc;
}
function removeClientSetsFromDocument(document2) {
  checkDocument(document2);
  var modifiedDoc = removeDirectivesFromDocument([
    {
      test: function(directive) {
        return directive.name.value === "client";
      },
      remove: true
    }
  ], document2);
  if (modifiedDoc) {
    modifiedDoc = visit(modifiedDoc, {
      FragmentDefinition: {
        enter: function(node) {
          if (node.selectionSet) {
            var isTypenameOnly = node.selectionSet.selections.every(function(selection) {
              return isField(selection) && selection.name.value === "__typename";
            });
            if (isTypenameOnly) {
              return null;
            }
          }
        }
      }
    });
  }
  return modifiedDoc;
}

// node_modules/@apollo/client/utilities/common/mergeDeep.js
init_react();
var hasOwnProperty = Object.prototype.hasOwnProperty;
function mergeDeep() {
  var sources = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }
  return mergeDeepArray(sources);
}
function mergeDeepArray(sources) {
  var target = sources[0] || {};
  var count = sources.length;
  if (count > 1) {
    var merger = new DeepMerger();
    for (var i = 1; i < count; ++i) {
      target = merger.merge(target, sources[i]);
    }
  }
  return target;
}
var defaultReconciler = function(target, source, property) {
  return this.merge(target[property], source[property]);
};
var DeepMerger = function() {
  function DeepMerger2(reconciler) {
    if (reconciler === void 0) {
      reconciler = defaultReconciler;
    }
    this.reconciler = reconciler;
    this.isObject = isNonNullObject;
    this.pastCopies = new Set();
  }
  DeepMerger2.prototype.merge = function(target, source) {
    var _this = this;
    var context = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      context[_i - 2] = arguments[_i];
    }
    if (isNonNullObject(source) && isNonNullObject(target)) {
      Object.keys(source).forEach(function(sourceKey) {
        if (hasOwnProperty.call(target, sourceKey)) {
          var targetValue = target[sourceKey];
          if (source[sourceKey] !== targetValue) {
            var result2 = _this.reconciler.apply(_this, __spreadArray([target, source, sourceKey], context, false));
            if (result2 !== targetValue) {
              target = _this.shallowCopyForMerge(target);
              target[sourceKey] = result2;
            }
          }
        } else {
          target = _this.shallowCopyForMerge(target);
          target[sourceKey] = source[sourceKey];
        }
      });
      return target;
    }
    return source;
  };
  DeepMerger2.prototype.shallowCopyForMerge = function(value) {
    if (isNonNullObject(value)) {
      if (this.pastCopies.has(value)) {
        if (!Object.isFrozen(value))
          return value;
        this.pastCopies.delete(value);
      }
      if (Array.isArray(value)) {
        value = value.slice(0);
      } else {
        value = __assign2({ __proto__: Object.getPrototypeOf(value) }, value);
      }
      this.pastCopies.add(value);
    }
    return value;
  };
  return DeepMerger2;
}();

// node_modules/@apollo/client/utilities/observables/Observable.js
init_react();

// node_modules/zen-observable-ts/module.js
init_react();
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _defineProperties2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties2(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties2(Constructor, staticProps);
  return Constructor;
}
var hasSymbols = function() {
  return typeof Symbol === "function";
};
var hasSymbol = function(name) {
  return hasSymbols() && Boolean(Symbol[name]);
};
var getSymbol = function(name) {
  return hasSymbol(name) ? Symbol[name] : "@@" + name;
};
if (hasSymbols() && !hasSymbol("observable")) {
  Symbol.observable = Symbol("observable");
}
var SymbolIterator = getSymbol("iterator");
var SymbolObservable = getSymbol("observable");
var SymbolSpecies = getSymbol("species");
function getMethod(obj, key) {
  var value = obj[key];
  if (value == null)
    return void 0;
  if (typeof value !== "function")
    throw new TypeError(value + " is not a function");
  return value;
}
function getSpecies(obj) {
  var ctor = obj.constructor;
  if (ctor !== void 0) {
    ctor = ctor[SymbolSpecies];
    if (ctor === null) {
      ctor = void 0;
    }
  }
  return ctor !== void 0 ? ctor : Observable;
}
function isObservable(x) {
  return x instanceof Observable;
}
function hostReportError(e) {
  if (hostReportError.log) {
    hostReportError.log(e);
  } else {
    setTimeout(function() {
      throw e;
    });
  }
}
function enqueue(fn) {
  Promise.resolve().then(function() {
    try {
      fn();
    } catch (e) {
      hostReportError(e);
    }
  });
}
function cleanupSubscription(subscription) {
  var cleanup = subscription._cleanup;
  if (cleanup === void 0)
    return;
  subscription._cleanup = void 0;
  if (!cleanup) {
    return;
  }
  try {
    if (typeof cleanup === "function") {
      cleanup();
    } else {
      var unsubscribe = getMethod(cleanup, "unsubscribe");
      if (unsubscribe) {
        unsubscribe.call(cleanup);
      }
    }
  } catch (e) {
    hostReportError(e);
  }
}
function closeSubscription(subscription) {
  subscription._observer = void 0;
  subscription._queue = void 0;
  subscription._state = "closed";
}
function flushSubscription(subscription) {
  var queue = subscription._queue;
  if (!queue) {
    return;
  }
  subscription._queue = void 0;
  subscription._state = "ready";
  for (var i = 0; i < queue.length; ++i) {
    notifySubscription(subscription, queue[i].type, queue[i].value);
    if (subscription._state === "closed")
      break;
  }
}
function notifySubscription(subscription, type, value) {
  subscription._state = "running";
  var observer = subscription._observer;
  try {
    var m = getMethod(observer, type);
    switch (type) {
      case "next":
        if (m)
          m.call(observer, value);
        break;
      case "error":
        closeSubscription(subscription);
        if (m)
          m.call(observer, value);
        else
          throw value;
        break;
      case "complete":
        closeSubscription(subscription);
        if (m)
          m.call(observer);
        break;
    }
  } catch (e) {
    hostReportError(e);
  }
  if (subscription._state === "closed")
    cleanupSubscription(subscription);
  else if (subscription._state === "running")
    subscription._state = "ready";
}
function onNotify(subscription, type, value) {
  if (subscription._state === "closed")
    return;
  if (subscription._state === "buffering") {
    subscription._queue.push({
      type,
      value
    });
    return;
  }
  if (subscription._state !== "ready") {
    subscription._state = "buffering";
    subscription._queue = [{
      type,
      value
    }];
    enqueue(function() {
      return flushSubscription(subscription);
    });
    return;
  }
  notifySubscription(subscription, type, value);
}
var Subscription = /* @__PURE__ */ function() {
  function Subscription2(observer, subscriber) {
    this._cleanup = void 0;
    this._observer = observer;
    this._queue = void 0;
    this._state = "initializing";
    var subscriptionObserver = new SubscriptionObserver(this);
    try {
      this._cleanup = subscriber.call(void 0, subscriptionObserver);
    } catch (e) {
      subscriptionObserver.error(e);
    }
    if (this._state === "initializing")
      this._state = "ready";
  }
  var _proto = Subscription2.prototype;
  _proto.unsubscribe = function unsubscribe() {
    if (this._state !== "closed") {
      closeSubscription(this);
      cleanupSubscription(this);
    }
  };
  _createClass2(Subscription2, [{
    key: "closed",
    get: function() {
      return this._state === "closed";
    }
  }]);
  return Subscription2;
}();
var SubscriptionObserver = /* @__PURE__ */ function() {
  function SubscriptionObserver2(subscription) {
    this._subscription = subscription;
  }
  var _proto2 = SubscriptionObserver2.prototype;
  _proto2.next = function next(value) {
    onNotify(this._subscription, "next", value);
  };
  _proto2.error = function error(value) {
    onNotify(this._subscription, "error", value);
  };
  _proto2.complete = function complete() {
    onNotify(this._subscription, "complete");
  };
  _createClass2(SubscriptionObserver2, [{
    key: "closed",
    get: function() {
      return this._subscription._state === "closed";
    }
  }]);
  return SubscriptionObserver2;
}();
var Observable = /* @__PURE__ */ function() {
  function Observable2(subscriber) {
    if (!(this instanceof Observable2))
      throw new TypeError("Observable cannot be called as a function");
    if (typeof subscriber !== "function")
      throw new TypeError("Observable initializer must be a function");
    this._subscriber = subscriber;
  }
  var _proto3 = Observable2.prototype;
  _proto3.subscribe = function subscribe(observer) {
    if (typeof observer !== "object" || observer === null) {
      observer = {
        next: observer,
        error: arguments[1],
        complete: arguments[2]
      };
    }
    return new Subscription(observer, this._subscriber);
  };
  _proto3.forEach = function forEach2(fn) {
    var _this = this;
    return new Promise(function(resolve, reject) {
      if (typeof fn !== "function") {
        reject(new TypeError(fn + " is not a function"));
        return;
      }
      function done() {
        subscription.unsubscribe();
        resolve();
      }
      var subscription = _this.subscribe({
        next: function(value) {
          try {
            fn(value, done);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  };
  _proto3.map = function map(fn) {
    var _this2 = this;
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");
    var C = getSpecies(this);
    return new C(function(observer) {
      return _this2.subscribe({
        next: function(value) {
          try {
            value = fn(value);
          } catch (e) {
            return observer.error(e);
          }
          observer.next(value);
        },
        error: function(e) {
          observer.error(e);
        },
        complete: function() {
          observer.complete();
        }
      });
    });
  };
  _proto3.filter = function filter(fn) {
    var _this3 = this;
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");
    var C = getSpecies(this);
    return new C(function(observer) {
      return _this3.subscribe({
        next: function(value) {
          try {
            if (!fn(value))
              return;
          } catch (e) {
            return observer.error(e);
          }
          observer.next(value);
        },
        error: function(e) {
          observer.error(e);
        },
        complete: function() {
          observer.complete();
        }
      });
    });
  };
  _proto3.reduce = function reduce(fn) {
    var _this4 = this;
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");
    var C = getSpecies(this);
    var hasSeed = arguments.length > 1;
    var hasValue = false;
    var seed = arguments[1];
    var acc = seed;
    return new C(function(observer) {
      return _this4.subscribe({
        next: function(value) {
          var first = !hasValue;
          hasValue = true;
          if (!first || hasSeed) {
            try {
              acc = fn(acc, value);
            } catch (e) {
              return observer.error(e);
            }
          } else {
            acc = value;
          }
        },
        error: function(e) {
          observer.error(e);
        },
        complete: function() {
          if (!hasValue && !hasSeed)
            return observer.error(new TypeError("Cannot reduce an empty sequence"));
          observer.next(acc);
          observer.complete();
        }
      });
    });
  };
  _proto3.concat = function concat() {
    var _this5 = this;
    for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
      sources[_key] = arguments[_key];
    }
    var C = getSpecies(this);
    return new C(function(observer) {
      var subscription;
      var index = 0;
      function startNext(next) {
        subscription = next.subscribe({
          next: function(v) {
            observer.next(v);
          },
          error: function(e) {
            observer.error(e);
          },
          complete: function() {
            if (index === sources.length) {
              subscription = void 0;
              observer.complete();
            } else {
              startNext(C.from(sources[index++]));
            }
          }
        });
      }
      startNext(_this5);
      return function() {
        if (subscription) {
          subscription.unsubscribe();
          subscription = void 0;
        }
      };
    });
  };
  _proto3.flatMap = function flatMap(fn) {
    var _this6 = this;
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");
    var C = getSpecies(this);
    return new C(function(observer) {
      var subscriptions = [];
      var outer = _this6.subscribe({
        next: function(value) {
          if (fn) {
            try {
              value = fn(value);
            } catch (e) {
              return observer.error(e);
            }
          }
          var inner = C.from(value).subscribe({
            next: function(value2) {
              observer.next(value2);
            },
            error: function(e) {
              observer.error(e);
            },
            complete: function() {
              var i = subscriptions.indexOf(inner);
              if (i >= 0)
                subscriptions.splice(i, 1);
              completeIfDone();
            }
          });
          subscriptions.push(inner);
        },
        error: function(e) {
          observer.error(e);
        },
        complete: function() {
          completeIfDone();
        }
      });
      function completeIfDone() {
        if (outer.closed && subscriptions.length === 0)
          observer.complete();
      }
      return function() {
        subscriptions.forEach(function(s) {
          return s.unsubscribe();
        });
        outer.unsubscribe();
      };
    });
  };
  _proto3[SymbolObservable] = function() {
    return this;
  };
  Observable2.from = function from2(x) {
    var C = typeof this === "function" ? this : Observable2;
    if (x == null)
      throw new TypeError(x + " is not an object");
    var method = getMethod(x, SymbolObservable);
    if (method) {
      var observable = method.call(x);
      if (Object(observable) !== observable)
        throw new TypeError(observable + " is not an object");
      if (isObservable(observable) && observable.constructor === C)
        return observable;
      return new C(function(observer) {
        return observable.subscribe(observer);
      });
    }
    if (hasSymbol("iterator")) {
      method = getMethod(x, SymbolIterator);
      if (method) {
        return new C(function(observer) {
          enqueue(function() {
            if (observer.closed)
              return;
            for (var _iterator = _createForOfIteratorHelperLoose(method.call(x)), _step; !(_step = _iterator()).done; ) {
              var item = _step.value;
              observer.next(item);
              if (observer.closed)
                return;
            }
            observer.complete();
          });
        });
      }
    }
    if (Array.isArray(x)) {
      return new C(function(observer) {
        enqueue(function() {
          if (observer.closed)
            return;
          for (var i = 0; i < x.length; ++i) {
            observer.next(x[i]);
            if (observer.closed)
              return;
          }
          observer.complete();
        });
      });
    }
    throw new TypeError(x + " is not observable");
  };
  Observable2.of = function of() {
    for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      items[_key2] = arguments[_key2];
    }
    var C = typeof this === "function" ? this : Observable2;
    return new C(function(observer) {
      enqueue(function() {
        if (observer.closed)
          return;
        for (var i = 0; i < items.length; ++i) {
          observer.next(items[i]);
          if (observer.closed)
            return;
        }
        observer.complete();
      });
    });
  };
  _createClass2(Observable2, null, [{
    key: SymbolSpecies,
    get: function() {
      return this;
    }
  }]);
  return Observable2;
}();
if (hasSymbols()) {
  Object.defineProperty(Observable, Symbol("extensions"), {
    value: {
      symbol: SymbolObservable,
      hostReportError
    },
    configurable: true
  });
}

// node_modules/symbol-observable/es/index.js
init_react();

// node_modules/symbol-observable/es/ponyfill.js
init_react();
function symbolObservablePonyfill(root2) {
  var result2;
  var Symbol2 = root2.Symbol;
  if (typeof Symbol2 === "function") {
    if (Symbol2.observable) {
      result2 = Symbol2.observable;
    } else {
      if (typeof Symbol2.for === "function") {
        result2 = Symbol2.for("https://github.com/benlesh/symbol-observable");
      } else {
        result2 = Symbol2("https://github.com/benlesh/symbol-observable");
      }
      try {
        Symbol2.observable = result2;
      } catch (err) {
      }
    }
  } else {
    result2 = "@@observable";
  }
  return result2;
}

// node_modules/symbol-observable/es/index.js
var root;
if (typeof self !== "undefined") {
  root = self;
} else if (typeof window !== "undefined") {
  root = window;
} else if (typeof global !== "undefined") {
  root = global;
} else if (typeof module !== "undefined") {
  root = module;
} else {
  root = Function("return this")();
}
var result = symbolObservablePonyfill(root);

// node_modules/@apollo/client/utilities/observables/Observable.js
var prototype = Observable.prototype;
var fakeObsSymbol = "@@observable";
if (!prototype[fakeObsSymbol]) {
  prototype[fakeObsSymbol] = function() {
    return this;
  };
}

// node_modules/@apollo/client/utilities/common/cloneDeep.js
init_react();
var toString = Object.prototype.toString;
function cloneDeep(value) {
  return cloneDeepHelper(value);
}
function cloneDeepHelper(val, seen) {
  switch (toString.call(val)) {
    case "[object Array]": {
      seen = seen || new Map();
      if (seen.has(val))
        return seen.get(val);
      var copy_1 = val.slice(0);
      seen.set(val, copy_1);
      copy_1.forEach(function(child, i) {
        copy_1[i] = cloneDeepHelper(child, seen);
      });
      return copy_1;
    }
    case "[object Object]": {
      seen = seen || new Map();
      if (seen.has(val))
        return seen.get(val);
      var copy_2 = Object.create(Object.getPrototypeOf(val));
      seen.set(val, copy_2);
      Object.keys(val).forEach(function(key) {
        copy_2[key] = cloneDeepHelper(val[key], seen);
      });
      return copy_2;
    }
    default:
      return val;
  }
}

// node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js
init_react();
function deepFreeze(value) {
  var workSet = new Set([value]);
  workSet.forEach(function(obj) {
    if (isNonNullObject(obj) && shallowFreeze(obj) === obj) {
      Object.getOwnPropertyNames(obj).forEach(function(name) {
        if (isNonNullObject(obj[name]))
          workSet.add(obj[name]);
      });
    }
  });
  return value;
}
function shallowFreeze(obj) {
  if (__DEV__ && !Object.isFrozen(obj)) {
    try {
      Object.freeze(obj);
    } catch (e) {
      if (e instanceof TypeError)
        return null;
      throw e;
    }
  }
  return obj;
}
function maybeDeepFreeze(obj) {
  if (__DEV__) {
    deepFreeze(obj);
  }
  return obj;
}

// node_modules/@apollo/client/utilities/observables/iteration.js
init_react();
function iterateObserversSafely(observers, method, argument) {
  var observersWithMethod = [];
  observers.forEach(function(obs) {
    return obs[method] && observersWithMethod.push(obs);
  });
  observersWithMethod.forEach(function(obs) {
    return obs[method](argument);
  });
}

// node_modules/@apollo/client/utilities/observables/asyncMap.js
init_react();
function asyncMap(observable, mapFn, catchFn) {
  return new Observable(function(observer) {
    var next = observer.next, error = observer.error, complete = observer.complete;
    var activeCallbackCount = 0;
    var completed = false;
    var promiseQueue = {
      then: function(callback) {
        return new Promise(function(resolve) {
          return resolve(callback());
        });
      }
    };
    function makeCallback(examiner, delegate) {
      if (examiner) {
        return function(arg) {
          ++activeCallbackCount;
          var both = function() {
            return examiner(arg);
          };
          promiseQueue = promiseQueue.then(both, both).then(function(result2) {
            --activeCallbackCount;
            next && next.call(observer, result2);
            if (completed) {
              handler.complete();
            }
          }, function(error2) {
            --activeCallbackCount;
            throw error2;
          }).catch(function(caught) {
            error && error.call(observer, caught);
          });
        };
      } else {
        return function(arg) {
          return delegate && delegate.call(observer, arg);
        };
      }
    }
    var handler = {
      next: makeCallback(mapFn, next),
      error: makeCallback(catchFn, error),
      complete: function() {
        completed = true;
        if (!activeCallbackCount) {
          complete && complete.call(observer);
        }
      }
    };
    var sub = observable.subscribe(handler);
    return function() {
      return sub.unsubscribe();
    };
  });
}

// node_modules/@apollo/client/utilities/observables/Concast.js
init_react();

// node_modules/@apollo/client/utilities/observables/subclassing.js
init_react();

// node_modules/@apollo/client/utilities/common/canUse.js
init_react();
var canUseWeakMap = typeof WeakMap === "function" && !(typeof navigator === "object" && navigator.product === "ReactNative");
var canUseWeakSet = typeof WeakSet === "function";
var canUseSymbol = typeof Symbol === "function" && typeof Symbol.for === "function";

// node_modules/@apollo/client/utilities/observables/subclassing.js
function fixObservableSubclass(subclass) {
  function set(key) {
    Object.defineProperty(subclass, key, { value: Observable });
  }
  if (canUseSymbol && Symbol.species) {
    set(Symbol.species);
  }
  set("@@species");
  return subclass;
}

// node_modules/@apollo/client/utilities/observables/Concast.js
function isPromiseLike(value) {
  return value && typeof value.then === "function";
}
var Concast = function(_super) {
  __extends(Concast2, _super);
  function Concast2(sources) {
    var _this = _super.call(this, function(observer) {
      _this.addObserver(observer);
      return function() {
        return _this.removeObserver(observer);
      };
    }) || this;
    _this.observers = new Set();
    _this.addCount = 0;
    _this.promise = new Promise(function(resolve, reject) {
      _this.resolve = resolve;
      _this.reject = reject;
    });
    _this.handlers = {
      next: function(result2) {
        if (_this.sub !== null) {
          _this.latest = ["next", result2];
          iterateObserversSafely(_this.observers, "next", result2);
        }
      },
      error: function(error) {
        var sub = _this.sub;
        if (sub !== null) {
          if (sub)
            setTimeout(function() {
              return sub.unsubscribe();
            });
          _this.sub = null;
          _this.latest = ["error", error];
          _this.reject(error);
          iterateObserversSafely(_this.observers, "error", error);
        }
      },
      complete: function() {
        if (_this.sub !== null) {
          var value = _this.sources.shift();
          if (!value) {
            _this.sub = null;
            if (_this.latest && _this.latest[0] === "next") {
              _this.resolve(_this.latest[1]);
            } else {
              _this.resolve();
            }
            iterateObserversSafely(_this.observers, "complete");
          } else if (isPromiseLike(value)) {
            value.then(function(obs) {
              return _this.sub = obs.subscribe(_this.handlers);
            });
          } else {
            _this.sub = value.subscribe(_this.handlers);
          }
        }
      }
    };
    _this.cancel = function(reason) {
      _this.reject(reason);
      _this.sources = [];
      _this.handlers.complete();
    };
    _this.promise.catch(function(_) {
    });
    if (typeof sources === "function") {
      sources = [new Observable(sources)];
    }
    if (isPromiseLike(sources)) {
      sources.then(function(iterable) {
        return _this.start(iterable);
      }, _this.handlers.error);
    } else {
      _this.start(sources);
    }
    return _this;
  }
  Concast2.prototype.start = function(sources) {
    if (this.sub !== void 0)
      return;
    this.sources = Array.from(sources);
    this.handlers.complete();
  };
  Concast2.prototype.deliverLastMessage = function(observer) {
    if (this.latest) {
      var nextOrError = this.latest[0];
      var method = observer[nextOrError];
      if (method) {
        method.call(observer, this.latest[1]);
      }
      if (this.sub === null && nextOrError === "next" && observer.complete) {
        observer.complete();
      }
    }
  };
  Concast2.prototype.addObserver = function(observer) {
    if (!this.observers.has(observer)) {
      this.deliverLastMessage(observer);
      this.observers.add(observer);
      ++this.addCount;
    }
  };
  Concast2.prototype.removeObserver = function(observer, quietly) {
    if (this.observers.delete(observer) && --this.addCount < 1 && !quietly) {
      this.handlers.error(new Error("Observable cancelled prematurely"));
    }
  };
  Concast2.prototype.cleanup = function(callback) {
    var _this = this;
    var called = false;
    var once = function() {
      if (!called) {
        called = true;
        _this.observers.delete(observer);
        callback();
      }
    };
    var observer = {
      next: once,
      error: once,
      complete: once
    };
    var count = this.addCount;
    this.addObserver(observer);
    this.addCount = count;
  };
  return Concast2;
}(Observable);
fixObservableSubclass(Concast);

// node_modules/@apollo/client/utilities/common/arrays.js
init_react();
function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}

// node_modules/@apollo/client/utilities/common/errorHandling.js
init_react();
function graphQLResultHasError(result2) {
  return result2.errors && result2.errors.length > 0 || false;
}

// node_modules/@apollo/client/utilities/common/compact.js
init_react();
function compact() {
  var objects = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    objects[_i] = arguments[_i];
  }
  var result2 = Object.create(null);
  objects.forEach(function(obj) {
    if (!obj)
      return;
    Object.keys(obj).forEach(function(key) {
      var value = obj[key];
      if (value !== void 0) {
        result2[key] = value;
      }
    });
  });
  return result2;
}

// node_modules/@apollo/client/utilities/common/makeUniqueId.js
init_react();
var prefixCounts = new Map();
function makeUniqueId(prefix) {
  var count = prefixCounts.get(prefix) || 1;
  prefixCounts.set(prefix, count + 1);
  return "".concat(prefix, ":").concat(count, ":").concat(Math.random().toString(36).slice(2));
}

// node_modules/@apollo/client/utilities/common/stringifyForDisplay.js
init_react();
function stringifyForDisplay(value) {
  var undefId = makeUniqueId("stringifyForDisplay");
  return JSON.stringify(value, function(key, value2) {
    return value2 === void 0 ? undefId : value2;
  }).split(JSON.stringify(undefId)).join("<undefined>");
}

// node_modules/@apollo/client/link/utils/index.js
init_react();

// node_modules/@apollo/client/link/utils/fromError.js
init_react();
function fromError(errorValue) {
  return new Observable(function(observer) {
    observer.error(errorValue);
  });
}

// node_modules/@apollo/client/link/utils/throwServerError.js
init_react();
var throwServerError = function(response, result2, message) {
  var error = new Error(message);
  error.name = "ServerError";
  error.response = response;
  error.statusCode = response.status;
  error.result = result2;
  throw error;
};

// node_modules/@apollo/client/link/utils/validateOperation.js
init_react();
function validateOperation(operation) {
  var OPERATION_FIELDS = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ];
  for (var _i = 0, _a5 = Object.keys(operation); _i < _a5.length; _i++) {
    var key = _a5[_i];
    if (OPERATION_FIELDS.indexOf(key) < 0) {
      throw __DEV__ ? new InvariantError("illegal argument: ".concat(key)) : new InvariantError(24);
    }
  }
  return operation;
}

// node_modules/@apollo/client/link/utils/createOperation.js
init_react();
function createOperation(starting, operation) {
  var context = __assign2({}, starting);
  var setContext2 = function(next) {
    if (typeof next === "function") {
      context = __assign2(__assign2({}, context), next(context));
    } else {
      context = __assign2(__assign2({}, context), next);
    }
  };
  var getContext = function() {
    return __assign2({}, context);
  };
  Object.defineProperty(operation, "setContext", {
    enumerable: false,
    value: setContext2
  });
  Object.defineProperty(operation, "getContext", {
    enumerable: false,
    value: getContext
  });
  return operation;
}

// node_modules/@apollo/client/link/utils/transformOperation.js
init_react();
function transformOperation(operation) {
  var transformedOperation = {
    variables: operation.variables || {},
    extensions: operation.extensions || {},
    operationName: operation.operationName,
    query: operation.query
  };
  if (!transformedOperation.operationName) {
    transformedOperation.operationName = typeof transformedOperation.query !== "string" ? getOperationName(transformedOperation.query) || void 0 : "";
  }
  return transformedOperation;
}

// node_modules/@apollo/client/link/core/ApolloLink.js
function passthrough(op, forward) {
  return forward ? forward(op) : Observable.of();
}
function toLink(handler) {
  return typeof handler === "function" ? new ApolloLink(handler) : handler;
}
function isTerminating(link) {
  return link.request.length <= 1;
}
var LinkError = function(_super) {
  __extends(LinkError2, _super);
  function LinkError2(message, link) {
    var _this = _super.call(this, message) || this;
    _this.link = link;
    return _this;
  }
  return LinkError2;
}(Error);
var ApolloLink = function() {
  function ApolloLink2(request) {
    if (request)
      this.request = request;
  }
  ApolloLink2.empty = function() {
    return new ApolloLink2(function() {
      return Observable.of();
    });
  };
  ApolloLink2.from = function(links2) {
    if (links2.length === 0)
      return ApolloLink2.empty();
    return links2.map(toLink).reduce(function(x, y) {
      return x.concat(y);
    });
  };
  ApolloLink2.split = function(test, left, right) {
    var leftLink = toLink(left);
    var rightLink = toLink(right || new ApolloLink2(passthrough));
    if (isTerminating(leftLink) && isTerminating(rightLink)) {
      return new ApolloLink2(function(operation) {
        return test(operation) ? leftLink.request(operation) || Observable.of() : rightLink.request(operation) || Observable.of();
      });
    } else {
      return new ApolloLink2(function(operation, forward) {
        return test(operation) ? leftLink.request(operation, forward) || Observable.of() : rightLink.request(operation, forward) || Observable.of();
      });
    }
  };
  ApolloLink2.execute = function(link, operation) {
    return link.request(createOperation(operation.context, transformOperation(validateOperation(operation)))) || Observable.of();
  };
  ApolloLink2.concat = function(first, second) {
    var firstLink = toLink(first);
    if (isTerminating(firstLink)) {
      __DEV__ && invariant.warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
      return firstLink;
    }
    var nextLink = toLink(second);
    if (isTerminating(nextLink)) {
      return new ApolloLink2(function(operation) {
        return firstLink.request(operation, function(op) {
          return nextLink.request(op) || Observable.of();
        }) || Observable.of();
      });
    } else {
      return new ApolloLink2(function(operation, forward) {
        return firstLink.request(operation, function(op) {
          return nextLink.request(op, forward) || Observable.of();
        }) || Observable.of();
      });
    }
  };
  ApolloLink2.prototype.split = function(test, left, right) {
    return this.concat(ApolloLink2.split(test, left, right || new ApolloLink2(passthrough)));
  };
  ApolloLink2.prototype.concat = function(next) {
    return ApolloLink2.concat(this, next);
  };
  ApolloLink2.prototype.request = function(operation, forward) {
    throw __DEV__ ? new InvariantError("request is not implemented") : new InvariantError(19);
  };
  ApolloLink2.prototype.onError = function(error, observer) {
    if (observer && observer.error) {
      observer.error(error);
      return false;
    }
    throw error;
  };
  ApolloLink2.prototype.setOnError = function(fn) {
    this.onError = fn;
    return this;
  };
  return ApolloLink2;
}();

// node_modules/@apollo/client/link/core/from.js
init_react();
var from = ApolloLink.from;

// node_modules/@apollo/client/link/core/split.js
init_react();
var split = ApolloLink.split;

// node_modules/@apollo/client/link/core/execute.js
init_react();
var execute = ApolloLink.execute;

// node_modules/@apollo/client/version.js
init_react();
var version = "3.5.6";

// node_modules/@apollo/client/link/http/index.js
init_react();

// node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js
init_react();
var hasOwnProperty2 = Object.prototype.hasOwnProperty;
function parseAndCheckHttpResponse(operations) {
  return function(response) {
    return response.text().then(function(bodyText) {
      try {
        return JSON.parse(bodyText);
      } catch (err) {
        var parseError = err;
        parseError.name = "ServerParseError";
        parseError.response = response;
        parseError.statusCode = response.status;
        parseError.bodyText = bodyText;
        throw parseError;
      }
    }).then(function(result2) {
      if (response.status >= 300) {
        throwServerError(response, result2, "Response not successful: Received status code ".concat(response.status));
      }
      if (!Array.isArray(result2) && !hasOwnProperty2.call(result2, "data") && !hasOwnProperty2.call(result2, "errors")) {
        throwServerError(response, result2, "Server response was missing for query '".concat(Array.isArray(operations) ? operations.map(function(op) {
          return op.operationName;
        }) : operations.operationName, "'."));
      }
      return result2;
    });
  };
}

// node_modules/@apollo/client/link/http/serializeFetchParameter.js
init_react();
var serializeFetchParameter = function(p, label) {
  var serialized;
  try {
    serialized = JSON.stringify(p);
  } catch (e) {
    var parseError = __DEV__ ? new InvariantError("Network request failed. ".concat(label, " is not serializable: ").concat(e.message)) : new InvariantError(21);
    parseError.parseError = e;
    throw parseError;
  }
  return serialized;
};

// node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js
init_react();
var defaultHttpOptions = {
  includeQuery: true,
  includeExtensions: false
};
var defaultHeaders = {
  accept: "*/*",
  "content-type": "application/json"
};
var defaultOptions = {
  method: "POST"
};
var fallbackHttpConfig = {
  http: defaultHttpOptions,
  headers: defaultHeaders,
  options: defaultOptions
};
var defaultPrinter = function(ast, printer) {
  return printer(ast);
};
function selectHttpOptionsAndBodyInternal(operation, printer) {
  var configs = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    configs[_i - 2] = arguments[_i];
  }
  var options = {};
  var http = {};
  configs.forEach(function(config) {
    options = __assign2(__assign2(__assign2({}, options), config.options), { headers: __assign2(__assign2({}, options.headers), headersToLowerCase(config.headers)) });
    if (config.credentials) {
      options.credentials = config.credentials;
    }
    http = __assign2(__assign2({}, http), config.http);
  });
  var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
  var body = { operationName, variables };
  if (http.includeExtensions)
    body.extensions = extensions;
  if (http.includeQuery)
    body.query = printer(query, print);
  return {
    options,
    body
  };
}
function headersToLowerCase(headers) {
  if (headers) {
    var normalized_1 = Object.create(null);
    Object.keys(Object(headers)).forEach(function(name) {
      normalized_1[name.toLowerCase()] = headers[name];
    });
    return normalized_1;
  }
  return headers;
}

// node_modules/@apollo/client/link/http/checkFetcher.js
init_react();
var checkFetcher = function(fetcher) {
  if (!fetcher && typeof fetch === "undefined") {
    throw __DEV__ ? new InvariantError(`
"fetch" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:

import fetch from 'cross-fetch';
import { ApolloClient, HttpLink } from '@apollo/client';
const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql', fetch })
});
    `) : new InvariantError(20);
  }
};

// node_modules/@apollo/client/link/http/createSignalIfSupported.js
init_react();
var createSignalIfSupported = function() {
  if (typeof AbortController === "undefined")
    return { controller: false, signal: false };
  var controller = new AbortController();
  var signal = controller.signal;
  return { controller, signal };
};

// node_modules/@apollo/client/link/http/selectURI.js
init_react();
var selectURI = function(operation, fallbackURI) {
  var context = operation.getContext();
  var contextURI = context.uri;
  if (contextURI) {
    return contextURI;
  } else if (typeof fallbackURI === "function") {
    return fallbackURI(operation);
  } else {
    return fallbackURI || "/graphql";
  }
};

// node_modules/@apollo/client/link/http/createHttpLink.js
init_react();

// node_modules/@apollo/client/link/http/rewriteURIForGET.js
init_react();
function rewriteURIForGET(chosenURI, body) {
  var queryParams = [];
  var addQueryParam = function(key, value) {
    queryParams.push("".concat(key, "=").concat(encodeURIComponent(value)));
  };
  if ("query" in body) {
    addQueryParam("query", body.query);
  }
  if (body.operationName) {
    addQueryParam("operationName", body.operationName);
  }
  if (body.variables) {
    var serializedVariables = void 0;
    try {
      serializedVariables = serializeFetchParameter(body.variables, "Variables map");
    } catch (parseError) {
      return { parseError };
    }
    addQueryParam("variables", serializedVariables);
  }
  if (body.extensions) {
    var serializedExtensions = void 0;
    try {
      serializedExtensions = serializeFetchParameter(body.extensions, "Extensions map");
    } catch (parseError) {
      return { parseError };
    }
    addQueryParam("extensions", serializedExtensions);
  }
  var fragment = "", preFragment = chosenURI;
  var fragmentStart = chosenURI.indexOf("#");
  if (fragmentStart !== -1) {
    fragment = chosenURI.substr(fragmentStart);
    preFragment = chosenURI.substr(0, fragmentStart);
  }
  var queryParamsPrefix = preFragment.indexOf("?") === -1 ? "?" : "&";
  var newURI = preFragment + queryParamsPrefix + queryParams.join("&") + fragment;
  return { newURI };
}

// node_modules/@apollo/client/link/http/createHttpLink.js
var backupFetch = maybe(function() {
  return fetch;
});
var createHttpLink = function(linkOptions) {
  if (linkOptions === void 0) {
    linkOptions = {};
  }
  var _a5 = linkOptions.uri, uri = _a5 === void 0 ? "/graphql" : _a5, preferredFetch = linkOptions.fetch, _b = linkOptions.print, print2 = _b === void 0 ? defaultPrinter : _b, includeExtensions = linkOptions.includeExtensions, useGETForQueries = linkOptions.useGETForQueries, _c = linkOptions.includeUnusedVariables, includeUnusedVariables = _c === void 0 ? false : _c, requestOptions = __rest(linkOptions, ["uri", "fetch", "print", "includeExtensions", "useGETForQueries", "includeUnusedVariables"]);
  if (__DEV__) {
    checkFetcher(preferredFetch || backupFetch);
  }
  var linkConfig = {
    http: { includeExtensions },
    options: requestOptions.fetchOptions,
    credentials: requestOptions.credentials,
    headers: requestOptions.headers
  };
  return new ApolloLink(function(operation) {
    var chosenURI = selectURI(operation, uri);
    var context = operation.getContext();
    var clientAwarenessHeaders = {};
    if (context.clientAwareness) {
      var _a6 = context.clientAwareness, name_1 = _a6.name, version2 = _a6.version;
      if (name_1) {
        clientAwarenessHeaders["apollographql-client-name"] = name_1;
      }
      if (version2) {
        clientAwarenessHeaders["apollographql-client-version"] = version2;
      }
    }
    var contextHeaders = __assign2(__assign2({}, clientAwarenessHeaders), context.headers);
    var contextConfig = {
      http: context.http,
      options: context.fetchOptions,
      credentials: context.credentials,
      headers: contextHeaders
    };
    var _b2 = selectHttpOptionsAndBodyInternal(operation, print2, fallbackHttpConfig, linkConfig, contextConfig), options = _b2.options, body = _b2.body;
    if (body.variables && !includeUnusedVariables) {
      var unusedNames_1 = new Set(Object.keys(body.variables));
      visit(operation.query, {
        Variable: function(node, _key, parent) {
          if (parent && parent.kind !== "VariableDefinition") {
            unusedNames_1.delete(node.name.value);
          }
        }
      });
      if (unusedNames_1.size) {
        body.variables = __assign2({}, body.variables);
        unusedNames_1.forEach(function(name) {
          delete body.variables[name];
        });
      }
    }
    var controller;
    if (!options.signal) {
      var _c2 = createSignalIfSupported(), _controller = _c2.controller, signal = _c2.signal;
      controller = _controller;
      if (controller)
        options.signal = signal;
    }
    var definitionIsMutation = function(d) {
      return d.kind === "OperationDefinition" && d.operation === "mutation";
    };
    if (useGETForQueries && !operation.query.definitions.some(definitionIsMutation)) {
      options.method = "GET";
    }
    if (options.method === "GET") {
      var _d = rewriteURIForGET(chosenURI, body), newURI = _d.newURI, parseError = _d.parseError;
      if (parseError) {
        return fromError(parseError);
      }
      chosenURI = newURI;
    } else {
      try {
        options.body = serializeFetchParameter(body, "Payload");
      } catch (parseError2) {
        return fromError(parseError2);
      }
    }
    return new Observable(function(observer) {
      var currentFetch = preferredFetch || maybe(function() {
        return fetch;
      }) || backupFetch;
      currentFetch(chosenURI, options).then(function(response) {
        operation.setContext({ response });
        return response;
      }).then(parseAndCheckHttpResponse(operation)).then(function(result2) {
        observer.next(result2);
        observer.complete();
        return result2;
      }).catch(function(err) {
        if (err.name === "AbortError")
          return;
        if (err.result && err.result.errors && err.result.data) {
          observer.next(err.result);
        }
        observer.error(err);
      });
      return function() {
        if (controller)
          controller.abort();
      };
    });
  });
};

// node_modules/@apollo/client/link/http/HttpLink.js
init_react();
var HttpLink = function(_super) {
  __extends(HttpLink2, _super);
  function HttpLink2(options) {
    if (options === void 0) {
      options = {};
    }
    var _this = _super.call(this, createHttpLink(options).request) || this;
    _this.options = options;
    return _this;
  }
  return HttpLink2;
}(ApolloLink);

// node_modules/@apollo/client/core/QueryManager.js
init_react();

// node_modules/@wry/equality/lib/equality.esm.js
init_react();
var _a2 = Object.prototype;
var toString2 = _a2.toString;
var hasOwnProperty3 = _a2.hasOwnProperty;
var fnToStr = Function.prototype.toString;
var previousComparisons = new Map();
function equal(a, b) {
  try {
    return check(a, b);
  } finally {
    previousComparisons.clear();
  }
}
function check(a, b) {
  if (a === b) {
    return true;
  }
  var aTag = toString2.call(a);
  var bTag = toString2.call(b);
  if (aTag !== bTag) {
    return false;
  }
  switch (aTag) {
    case "[object Array]":
      if (a.length !== b.length)
        return false;
    case "[object Object]": {
      if (previouslyCompared(a, b))
        return true;
      var aKeys = definedKeys(a);
      var bKeys = definedKeys(b);
      var keyCount = aKeys.length;
      if (keyCount !== bKeys.length)
        return false;
      for (var k = 0; k < keyCount; ++k) {
        if (!hasOwnProperty3.call(b, aKeys[k])) {
          return false;
        }
      }
      for (var k = 0; k < keyCount; ++k) {
        var key = aKeys[k];
        if (!check(a[key], b[key])) {
          return false;
        }
      }
      return true;
    }
    case "[object Error]":
      return a.name === b.name && a.message === b.message;
    case "[object Number]":
      if (a !== a)
        return b !== b;
    case "[object Boolean]":
    case "[object Date]":
      return +a === +b;
    case "[object RegExp]":
    case "[object String]":
      return a == "" + b;
    case "[object Map]":
    case "[object Set]": {
      if (a.size !== b.size)
        return false;
      if (previouslyCompared(a, b))
        return true;
      var aIterator = a.entries();
      var isMap = aTag === "[object Map]";
      while (true) {
        var info = aIterator.next();
        if (info.done)
          break;
        var _a5 = info.value, aKey = _a5[0], aValue = _a5[1];
        if (!b.has(aKey)) {
          return false;
        }
        if (isMap && !check(aValue, b.get(aKey))) {
          return false;
        }
      }
      return true;
    }
    case "[object Uint16Array]":
    case "[object Uint8Array]":
    case "[object Uint32Array]":
    case "[object Int32Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object ArrayBuffer]":
      a = new Uint8Array(a);
      b = new Uint8Array(b);
    case "[object DataView]": {
      var len = a.byteLength;
      if (len === b.byteLength) {
        while (len-- && a[len] === b[len]) {
        }
      }
      return len === -1;
    }
    case "[object AsyncFunction]":
    case "[object GeneratorFunction]":
    case "[object AsyncGeneratorFunction]":
    case "[object Function]": {
      var aCode = fnToStr.call(a);
      if (aCode !== fnToStr.call(b)) {
        return false;
      }
      return !endsWith(aCode, nativeCodeSuffix);
    }
  }
  return false;
}
function definedKeys(obj) {
  return Object.keys(obj).filter(isDefinedKey, obj);
}
function isDefinedKey(key) {
  return this[key] !== void 0;
}
var nativeCodeSuffix = "{ [native code] }";
function endsWith(full, suffix) {
  var fromIndex = full.length - suffix.length;
  return fromIndex >= 0 && full.indexOf(suffix, fromIndex) === fromIndex;
}
function previouslyCompared(a, b) {
  var bSet = previousComparisons.get(a);
  if (bSet) {
    if (bSet.has(b))
      return true;
  } else {
    previousComparisons.set(a, bSet = new Set());
  }
  bSet.add(b);
  return false;
}

// node_modules/@apollo/client/cache/index.js
init_react();

// node_modules/@apollo/client/cache/core/cache.js
init_react();

// node_modules/optimism/lib/bundle.esm.js
init_react();

// node_modules/@wry/trie/lib/trie.esm.js
init_react();
var defaultMakeData = function() {
  return Object.create(null);
};
var _a3 = Array.prototype;
var forEach = _a3.forEach;
var slice = _a3.slice;
var Trie = function() {
  function Trie2(weakness, makeData) {
    if (weakness === void 0) {
      weakness = true;
    }
    if (makeData === void 0) {
      makeData = defaultMakeData;
    }
    this.weakness = weakness;
    this.makeData = makeData;
  }
  Trie2.prototype.lookup = function() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      array[_i] = arguments[_i];
    }
    return this.lookupArray(array);
  };
  Trie2.prototype.lookupArray = function(array) {
    var node = this;
    forEach.call(array, function(key) {
      return node = node.getChildTrie(key);
    });
    return node.data || (node.data = this.makeData(slice.call(array)));
  };
  Trie2.prototype.getChildTrie = function(key) {
    var map = this.weakness && isObjRef(key) ? this.weak || (this.weak = new WeakMap()) : this.strong || (this.strong = new Map());
    var child = map.get(key);
    if (!child)
      map.set(key, child = new Trie2(this.weakness, this.makeData));
    return child;
  };
  return Trie2;
}();
function isObjRef(value) {
  switch (typeof value) {
    case "object":
      if (value === null)
        break;
    case "function":
      return true;
  }
  return false;
}

// node_modules/@wry/context/lib/context.esm.js
init_react();
var currentContext = null;
var MISSING_VALUE = {};
var idCounter = 1;
var makeSlotClass = function() {
  return function() {
    function Slot2() {
      this.id = [
        "slot",
        idCounter++,
        Date.now(),
        Math.random().toString(36).slice(2)
      ].join(":");
    }
    Slot2.prototype.hasValue = function() {
      for (var context_1 = currentContext; context_1; context_1 = context_1.parent) {
        if (this.id in context_1.slots) {
          var value = context_1.slots[this.id];
          if (value === MISSING_VALUE)
            break;
          if (context_1 !== currentContext) {
            currentContext.slots[this.id] = value;
          }
          return true;
        }
      }
      if (currentContext) {
        currentContext.slots[this.id] = MISSING_VALUE;
      }
      return false;
    };
    Slot2.prototype.getValue = function() {
      if (this.hasValue()) {
        return currentContext.slots[this.id];
      }
    };
    Slot2.prototype.withValue = function(value, callback, args, thisArg) {
      var _a5;
      var slots = (_a5 = {
        __proto__: null
      }, _a5[this.id] = value, _a5);
      var parent = currentContext;
      currentContext = { parent, slots };
      try {
        return callback.apply(thisArg, args);
      } finally {
        currentContext = parent;
      }
    };
    Slot2.bind = function(callback) {
      var context = currentContext;
      return function() {
        var saved = currentContext;
        try {
          currentContext = context;
          return callback.apply(this, arguments);
        } finally {
          currentContext = saved;
        }
      };
    };
    Slot2.noContext = function(callback, args, thisArg) {
      if (currentContext) {
        var saved = currentContext;
        try {
          currentContext = null;
          return callback.apply(thisArg, args);
        } finally {
          currentContext = saved;
        }
      } else {
        return callback.apply(thisArg, args);
      }
    };
    return Slot2;
  }();
};
var globalKey = "@wry/context:Slot";
var host = Array;
var Slot = host[globalKey] || function() {
  var Slot2 = makeSlotClass();
  try {
    Object.defineProperty(host, globalKey, {
      value: host[globalKey] = Slot2,
      enumerable: false,
      writable: false,
      configurable: false
    });
  } finally {
    return Slot2;
  }
}();
var bind = Slot.bind;
var noContext = Slot.noContext;

// node_modules/optimism/lib/bundle.esm.js
function defaultDispose() {
}
var Cache = function() {
  function Cache3(max, dispose) {
    if (max === void 0) {
      max = Infinity;
    }
    if (dispose === void 0) {
      dispose = defaultDispose;
    }
    this.max = max;
    this.dispose = dispose;
    this.map = new Map();
    this.newest = null;
    this.oldest = null;
  }
  Cache3.prototype.has = function(key) {
    return this.map.has(key);
  };
  Cache3.prototype.get = function(key) {
    var node = this.getNode(key);
    return node && node.value;
  };
  Cache3.prototype.getNode = function(key) {
    var node = this.map.get(key);
    if (node && node !== this.newest) {
      var older = node.older, newer = node.newer;
      if (newer) {
        newer.older = older;
      }
      if (older) {
        older.newer = newer;
      }
      node.older = this.newest;
      node.older.newer = node;
      node.newer = null;
      this.newest = node;
      if (node === this.oldest) {
        this.oldest = newer;
      }
    }
    return node;
  };
  Cache3.prototype.set = function(key, value) {
    var node = this.getNode(key);
    if (node) {
      return node.value = value;
    }
    node = {
      key,
      value,
      newer: null,
      older: this.newest
    };
    if (this.newest) {
      this.newest.newer = node;
    }
    this.newest = node;
    this.oldest = this.oldest || node;
    this.map.set(key, node);
    return node.value;
  };
  Cache3.prototype.clean = function() {
    while (this.oldest && this.map.size > this.max) {
      this.delete(this.oldest.key);
    }
  };
  Cache3.prototype.delete = function(key) {
    var node = this.map.get(key);
    if (node) {
      if (node === this.newest) {
        this.newest = node.older;
      }
      if (node === this.oldest) {
        this.oldest = node.newer;
      }
      if (node.newer) {
        node.newer.older = node.older;
      }
      if (node.older) {
        node.older.newer = node.newer;
      }
      this.map.delete(key);
      this.dispose(node.value, key);
      return true;
    }
    return false;
  };
  return Cache3;
}();
var parentEntrySlot = new Slot();
var _a4;
var hasOwnProperty4 = Object.prototype.hasOwnProperty;
var toArray = (_a4 = Array.from, _a4 === void 0 ? function(collection) {
  var array = [];
  collection.forEach(function(item) {
    return array.push(item);
  });
  return array;
} : _a4);
function maybeUnsubscribe(entryOrDep) {
  var unsubscribe = entryOrDep.unsubscribe;
  if (typeof unsubscribe === "function") {
    entryOrDep.unsubscribe = void 0;
    unsubscribe();
  }
}
var emptySetPool = [];
var POOL_TARGET_SIZE = 100;
function assert(condition, optionalMessage) {
  if (!condition) {
    throw new Error(optionalMessage || "assertion failure");
  }
}
function valueIs(a, b) {
  var len = a.length;
  return len > 0 && len === b.length && a[len - 1] === b[len - 1];
}
function valueGet(value) {
  switch (value.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return value[0];
    case 2:
      throw value[1];
  }
}
function valueCopy(value) {
  return value.slice(0);
}
var Entry = function() {
  function Entry2(fn) {
    this.fn = fn;
    this.parents = new Set();
    this.childValues = new Map();
    this.dirtyChildren = null;
    this.dirty = true;
    this.recomputing = false;
    this.value = [];
    this.deps = null;
    ++Entry2.count;
  }
  Entry2.prototype.peek = function() {
    if (this.value.length === 1 && !mightBeDirty(this)) {
      rememberParent(this);
      return this.value[0];
    }
  };
  Entry2.prototype.recompute = function(args) {
    assert(!this.recomputing, "already recomputing");
    rememberParent(this);
    return mightBeDirty(this) ? reallyRecompute(this, args) : valueGet(this.value);
  };
  Entry2.prototype.setDirty = function() {
    if (this.dirty)
      return;
    this.dirty = true;
    this.value.length = 0;
    reportDirty(this);
    maybeUnsubscribe(this);
  };
  Entry2.prototype.dispose = function() {
    var _this = this;
    this.setDirty();
    forgetChildren(this);
    eachParent(this, function(parent, child) {
      parent.setDirty();
      forgetChild(parent, _this);
    });
  };
  Entry2.prototype.forget = function() {
    this.dispose();
  };
  Entry2.prototype.dependOn = function(dep2) {
    dep2.add(this);
    if (!this.deps) {
      this.deps = emptySetPool.pop() || new Set();
    }
    this.deps.add(dep2);
  };
  Entry2.prototype.forgetDeps = function() {
    var _this = this;
    if (this.deps) {
      toArray(this.deps).forEach(function(dep2) {
        return dep2.delete(_this);
      });
      this.deps.clear();
      emptySetPool.push(this.deps);
      this.deps = null;
    }
  };
  Entry2.count = 0;
  return Entry2;
}();
function rememberParent(child) {
  var parent = parentEntrySlot.getValue();
  if (parent) {
    child.parents.add(parent);
    if (!parent.childValues.has(child)) {
      parent.childValues.set(child, []);
    }
    if (mightBeDirty(child)) {
      reportDirtyChild(parent, child);
    } else {
      reportCleanChild(parent, child);
    }
    return parent;
  }
}
function reallyRecompute(entry, args) {
  forgetChildren(entry);
  parentEntrySlot.withValue(entry, recomputeNewValue, [entry, args]);
  if (maybeSubscribe(entry, args)) {
    setClean(entry);
  }
  return valueGet(entry.value);
}
function recomputeNewValue(entry, args) {
  entry.recomputing = true;
  entry.value.length = 0;
  try {
    entry.value[0] = entry.fn.apply(null, args);
  } catch (e) {
    entry.value[1] = e;
  }
  entry.recomputing = false;
}
function mightBeDirty(entry) {
  return entry.dirty || !!(entry.dirtyChildren && entry.dirtyChildren.size);
}
function setClean(entry) {
  entry.dirty = false;
  if (mightBeDirty(entry)) {
    return;
  }
  reportClean(entry);
}
function reportDirty(child) {
  eachParent(child, reportDirtyChild);
}
function reportClean(child) {
  eachParent(child, reportCleanChild);
}
function eachParent(child, callback) {
  var parentCount = child.parents.size;
  if (parentCount) {
    var parents = toArray(child.parents);
    for (var i = 0; i < parentCount; ++i) {
      callback(parents[i], child);
    }
  }
}
function reportDirtyChild(parent, child) {
  assert(parent.childValues.has(child));
  assert(mightBeDirty(child));
  var parentWasClean = !mightBeDirty(parent);
  if (!parent.dirtyChildren) {
    parent.dirtyChildren = emptySetPool.pop() || new Set();
  } else if (parent.dirtyChildren.has(child)) {
    return;
  }
  parent.dirtyChildren.add(child);
  if (parentWasClean) {
    reportDirty(parent);
  }
}
function reportCleanChild(parent, child) {
  assert(parent.childValues.has(child));
  assert(!mightBeDirty(child));
  var childValue = parent.childValues.get(child);
  if (childValue.length === 0) {
    parent.childValues.set(child, valueCopy(child.value));
  } else if (!valueIs(childValue, child.value)) {
    parent.setDirty();
  }
  removeDirtyChild(parent, child);
  if (mightBeDirty(parent)) {
    return;
  }
  reportClean(parent);
}
function removeDirtyChild(parent, child) {
  var dc = parent.dirtyChildren;
  if (dc) {
    dc.delete(child);
    if (dc.size === 0) {
      if (emptySetPool.length < POOL_TARGET_SIZE) {
        emptySetPool.push(dc);
      }
      parent.dirtyChildren = null;
    }
  }
}
function forgetChildren(parent) {
  if (parent.childValues.size > 0) {
    parent.childValues.forEach(function(_value, child) {
      forgetChild(parent, child);
    });
  }
  parent.forgetDeps();
  assert(parent.dirtyChildren === null);
}
function forgetChild(parent, child) {
  child.parents.delete(parent);
  parent.childValues.delete(child);
  removeDirtyChild(parent, child);
}
function maybeSubscribe(entry, args) {
  if (typeof entry.subscribe === "function") {
    try {
      maybeUnsubscribe(entry);
      entry.unsubscribe = entry.subscribe.apply(null, args);
    } catch (e) {
      entry.setDirty();
      return false;
    }
  }
  return true;
}
var EntryMethods = {
  setDirty: true,
  dispose: true,
  forget: true
};
function dep(options) {
  var depsByKey = new Map();
  var subscribe = options && options.subscribe;
  function depend(key) {
    var parent = parentEntrySlot.getValue();
    if (parent) {
      var dep_1 = depsByKey.get(key);
      if (!dep_1) {
        depsByKey.set(key, dep_1 = new Set());
      }
      parent.dependOn(dep_1);
      if (typeof subscribe === "function") {
        maybeUnsubscribe(dep_1);
        dep_1.unsubscribe = subscribe(key);
      }
    }
  }
  depend.dirty = function dirty(key, entryMethodName) {
    var dep2 = depsByKey.get(key);
    if (dep2) {
      var m_1 = entryMethodName && hasOwnProperty4.call(EntryMethods, entryMethodName) ? entryMethodName : "setDirty";
      toArray(dep2).forEach(function(entry) {
        return entry[m_1]();
      });
      depsByKey.delete(key);
      maybeUnsubscribe(dep2);
    }
  };
  return depend;
}
function makeDefaultMakeCacheKeyFunction() {
  var keyTrie = new Trie(typeof WeakMap === "function");
  return function() {
    return keyTrie.lookupArray(arguments);
  };
}
var defaultMakeCacheKey = makeDefaultMakeCacheKeyFunction();
var caches = new Set();
function wrap2(originalFunction, options) {
  if (options === void 0) {
    options = Object.create(null);
  }
  var cache = new Cache(options.max || Math.pow(2, 16), function(entry) {
    return entry.dispose();
  });
  var keyArgs = options.keyArgs;
  var makeCacheKey = options.makeCacheKey || makeDefaultMakeCacheKeyFunction();
  var optimistic = function() {
    var key = makeCacheKey.apply(null, keyArgs ? keyArgs.apply(null, arguments) : arguments);
    if (key === void 0) {
      return originalFunction.apply(null, arguments);
    }
    var entry = cache.get(key);
    if (!entry) {
      cache.set(key, entry = new Entry(originalFunction));
      entry.subscribe = options.subscribe;
      entry.forget = function() {
        return cache.delete(key);
      };
    }
    var value = entry.recompute(Array.prototype.slice.call(arguments));
    cache.set(key, entry);
    caches.add(cache);
    if (!parentEntrySlot.hasValue()) {
      caches.forEach(function(cache2) {
        return cache2.clean();
      });
      caches.clear();
    }
    return value;
  };
  Object.defineProperty(optimistic, "size", {
    get: function() {
      return cache["map"].size;
    },
    configurable: false,
    enumerable: false
  });
  function dirtyKey(key) {
    var entry = cache.get(key);
    if (entry) {
      entry.setDirty();
    }
  }
  optimistic.dirtyKey = dirtyKey;
  optimistic.dirty = function dirty() {
    dirtyKey(makeCacheKey.apply(null, arguments));
  };
  function peekKey(key) {
    var entry = cache.get(key);
    if (entry) {
      return entry.peek();
    }
  }
  optimistic.peekKey = peekKey;
  optimistic.peek = function peek() {
    return peekKey(makeCacheKey.apply(null, arguments));
  };
  function forgetKey(key) {
    return cache.delete(key);
  }
  optimistic.forgetKey = forgetKey;
  optimistic.forget = function forget() {
    return forgetKey(makeCacheKey.apply(null, arguments));
  };
  optimistic.makeCacheKey = makeCacheKey;
  optimistic.getKey = keyArgs ? function getKey() {
    return makeCacheKey.apply(null, keyArgs.apply(null, arguments));
  } : makeCacheKey;
  return Object.freeze(optimistic);
}

// node_modules/@apollo/client/cache/core/cache.js
var ApolloCache = function() {
  function ApolloCache2() {
    this.getFragmentDoc = wrap2(getFragmentQueryDocument);
  }
  ApolloCache2.prototype.batch = function(options) {
    var _this = this;
    var optimisticId = typeof options.optimistic === "string" ? options.optimistic : options.optimistic === false ? null : void 0;
    var updateResult;
    this.performTransaction(function() {
      return updateResult = options.update(_this);
    }, optimisticId);
    return updateResult;
  };
  ApolloCache2.prototype.recordOptimisticTransaction = function(transaction, optimisticId) {
    this.performTransaction(transaction, optimisticId);
  };
  ApolloCache2.prototype.transformDocument = function(document2) {
    return document2;
  };
  ApolloCache2.prototype.identify = function(object) {
    return;
  };
  ApolloCache2.prototype.gc = function() {
    return [];
  };
  ApolloCache2.prototype.modify = function(options) {
    return false;
  };
  ApolloCache2.prototype.transformForLink = function(document2) {
    return document2;
  };
  ApolloCache2.prototype.readQuery = function(options, optimistic) {
    if (optimistic === void 0) {
      optimistic = !!options.optimistic;
    }
    return this.read(__assign2(__assign2({}, options), { rootId: options.id || "ROOT_QUERY", optimistic }));
  };
  ApolloCache2.prototype.readFragment = function(options, optimistic) {
    if (optimistic === void 0) {
      optimistic = !!options.optimistic;
    }
    return this.read(__assign2(__assign2({}, options), { query: this.getFragmentDoc(options.fragment, options.fragmentName), rootId: options.id, optimistic }));
  };
  ApolloCache2.prototype.writeQuery = function(_a5) {
    var id = _a5.id, data = _a5.data, options = __rest(_a5, ["id", "data"]);
    return this.write(Object.assign(options, {
      dataId: id || "ROOT_QUERY",
      result: data
    }));
  };
  ApolloCache2.prototype.writeFragment = function(_a5) {
    var id = _a5.id, data = _a5.data, fragment = _a5.fragment, fragmentName = _a5.fragmentName, options = __rest(_a5, ["id", "data", "fragment", "fragmentName"]);
    return this.write(Object.assign(options, {
      query: this.getFragmentDoc(fragment, fragmentName),
      dataId: id,
      result: data
    }));
  };
  ApolloCache2.prototype.updateQuery = function(options, update) {
    return this.batch({
      update: function(cache) {
        var value = cache.readQuery(options);
        var data = update(value);
        if (data === void 0 || data === null)
          return value;
        cache.writeQuery(__assign2(__assign2({}, options), { data }));
        return data;
      }
    });
  };
  ApolloCache2.prototype.updateFragment = function(options, update) {
    return this.batch({
      update: function(cache) {
        var value = cache.readFragment(options);
        var data = update(value);
        if (data === void 0 || data === null)
          return value;
        cache.writeFragment(__assign2(__assign2({}, options), { data }));
        return data;
      }
    });
  };
  return ApolloCache2;
}();

// node_modules/@apollo/client/cache/core/types/common.js
init_react();
var MissingFieldError = function() {
  function MissingFieldError2(message, path, query, variables) {
    this.message = message;
    this.path = path;
    this.query = query;
    this.variables = variables;
  }
  return MissingFieldError2;
}();

// node_modules/@apollo/client/cache/inmemory/entityStore.js
init_react();

// node_modules/@apollo/client/cache/inmemory/helpers.js
init_react();
var hasOwn = Object.prototype.hasOwnProperty;
function defaultDataIdFromObject(_a5, context) {
  var __typename = _a5.__typename, id = _a5.id, _id = _a5._id;
  if (typeof __typename === "string") {
    if (context) {
      context.keyObject = id !== void 0 ? { id } : _id !== void 0 ? { _id } : void 0;
    }
    if (id === void 0)
      id = _id;
    if (id !== void 0) {
      return "".concat(__typename, ":").concat(typeof id === "number" || typeof id === "string" ? id : JSON.stringify(id));
    }
  }
}
var defaultConfig = {
  dataIdFromObject: defaultDataIdFromObject,
  addTypename: true,
  resultCaching: true,
  canonizeResults: false
};
function normalizeConfig(config) {
  return compact(defaultConfig, config);
}
function shouldCanonizeResults(config) {
  var value = config.canonizeResults;
  return value === void 0 ? defaultConfig.canonizeResults : value;
}
function getTypenameFromStoreObject(store, objectOrReference) {
  return isReference(objectOrReference) ? store.get(objectOrReference.__ref, "__typename") : objectOrReference && objectOrReference.__typename;
}
var TypeOrFieldNameRegExp = /^[_a-z][_0-9a-z]*/i;
function fieldNameFromStoreName(storeFieldName) {
  var match = storeFieldName.match(TypeOrFieldNameRegExp);
  return match ? match[0] : storeFieldName;
}
function selectionSetMatchesResult(selectionSet, result2, variables) {
  if (isNonNullObject(result2)) {
    return Array.isArray(result2) ? result2.every(function(item) {
      return selectionSetMatchesResult(selectionSet, item, variables);
    }) : selectionSet.selections.every(function(field) {
      if (isField(field) && shouldInclude(field, variables)) {
        var key = resultKeyNameFromField(field);
        return hasOwn.call(result2, key) && (!field.selectionSet || selectionSetMatchesResult(field.selectionSet, result2[key], variables));
      }
      return true;
    });
  }
  return false;
}
function storeValueIsStoreObject(value) {
  return isNonNullObject(value) && !isReference(value) && !Array.isArray(value);
}
function makeProcessedFieldsMerger() {
  return new DeepMerger();
}

// node_modules/@apollo/client/cache/inmemory/entityStore.js
var DELETE = Object.create(null);
var delModifier = function() {
  return DELETE;
};
var INVALIDATE = Object.create(null);
var EntityStore = function() {
  function EntityStore2(policies, group) {
    var _this = this;
    this.policies = policies;
    this.group = group;
    this.data = Object.create(null);
    this.rootIds = Object.create(null);
    this.refs = Object.create(null);
    this.getFieldValue = function(objectOrReference, storeFieldName) {
      return maybeDeepFreeze(isReference(objectOrReference) ? _this.get(objectOrReference.__ref, storeFieldName) : objectOrReference && objectOrReference[storeFieldName]);
    };
    this.canRead = function(objOrRef) {
      return isReference(objOrRef) ? _this.has(objOrRef.__ref) : typeof objOrRef === "object";
    };
    this.toReference = function(objOrIdOrRef, mergeIntoStore) {
      if (typeof objOrIdOrRef === "string") {
        return makeReference(objOrIdOrRef);
      }
      if (isReference(objOrIdOrRef)) {
        return objOrIdOrRef;
      }
      var id = _this.policies.identify(objOrIdOrRef)[0];
      if (id) {
        var ref = makeReference(id);
        if (mergeIntoStore) {
          _this.merge(id, objOrIdOrRef);
        }
        return ref;
      }
    };
  }
  EntityStore2.prototype.toObject = function() {
    return __assign2({}, this.data);
  };
  EntityStore2.prototype.has = function(dataId) {
    return this.lookup(dataId, true) !== void 0;
  };
  EntityStore2.prototype.get = function(dataId, fieldName) {
    this.group.depend(dataId, fieldName);
    if (hasOwn.call(this.data, dataId)) {
      var storeObject = this.data[dataId];
      if (storeObject && hasOwn.call(storeObject, fieldName)) {
        return storeObject[fieldName];
      }
    }
    if (fieldName === "__typename" && hasOwn.call(this.policies.rootTypenamesById, dataId)) {
      return this.policies.rootTypenamesById[dataId];
    }
    if (this instanceof Layer) {
      return this.parent.get(dataId, fieldName);
    }
  };
  EntityStore2.prototype.lookup = function(dataId, dependOnExistence) {
    if (dependOnExistence)
      this.group.depend(dataId, "__exists");
    if (hasOwn.call(this.data, dataId)) {
      return this.data[dataId];
    }
    if (this instanceof Layer) {
      return this.parent.lookup(dataId, dependOnExistence);
    }
    if (this.policies.rootTypenamesById[dataId]) {
      return Object.create(null);
    }
  };
  EntityStore2.prototype.merge = function(older, newer) {
    var _this = this;
    var dataId;
    if (isReference(older))
      older = older.__ref;
    if (isReference(newer))
      newer = newer.__ref;
    var existing = typeof older === "string" ? this.lookup(dataId = older) : older;
    var incoming = typeof newer === "string" ? this.lookup(dataId = newer) : newer;
    if (!incoming)
      return;
    __DEV__ ? invariant(typeof dataId === "string", "store.merge expects a string ID") : invariant(typeof dataId === "string", 1);
    var merged = new DeepMerger(storeObjectReconciler).merge(existing, incoming);
    this.data[dataId] = merged;
    if (merged !== existing) {
      delete this.refs[dataId];
      if (this.group.caching) {
        var fieldsToDirty_1 = Object.create(null);
        if (!existing)
          fieldsToDirty_1.__exists = 1;
        Object.keys(incoming).forEach(function(storeFieldName) {
          if (!existing || existing[storeFieldName] !== merged[storeFieldName]) {
            fieldsToDirty_1[storeFieldName] = 1;
            var fieldName = fieldNameFromStoreName(storeFieldName);
            if (fieldName !== storeFieldName && !_this.policies.hasKeyArgs(merged.__typename, fieldName)) {
              fieldsToDirty_1[fieldName] = 1;
            }
            if (merged[storeFieldName] === void 0 && !(_this instanceof Layer)) {
              delete merged[storeFieldName];
            }
          }
        });
        if (fieldsToDirty_1.__typename && !(existing && existing.__typename) && this.policies.rootTypenamesById[dataId] === merged.__typename) {
          delete fieldsToDirty_1.__typename;
        }
        Object.keys(fieldsToDirty_1).forEach(function(fieldName) {
          return _this.group.dirty(dataId, fieldName);
        });
      }
    }
  };
  EntityStore2.prototype.modify = function(dataId, fields) {
    var _this = this;
    var storeObject = this.lookup(dataId);
    if (storeObject) {
      var changedFields_1 = Object.create(null);
      var needToMerge_1 = false;
      var allDeleted_1 = true;
      var sharedDetails_1 = {
        DELETE,
        INVALIDATE,
        isReference,
        toReference: this.toReference,
        canRead: this.canRead,
        readField: function(fieldNameOrOptions, from2) {
          return _this.policies.readField(typeof fieldNameOrOptions === "string" ? {
            fieldName: fieldNameOrOptions,
            from: from2 || makeReference(dataId)
          } : fieldNameOrOptions, { store: _this });
        }
      };
      Object.keys(storeObject).forEach(function(storeFieldName) {
        var fieldName = fieldNameFromStoreName(storeFieldName);
        var fieldValue = storeObject[storeFieldName];
        if (fieldValue === void 0)
          return;
        var modify = typeof fields === "function" ? fields : fields[storeFieldName] || fields[fieldName];
        if (modify) {
          var newValue = modify === delModifier ? DELETE : modify(maybeDeepFreeze(fieldValue), __assign2(__assign2({}, sharedDetails_1), { fieldName, storeFieldName, storage: _this.getStorage(dataId, storeFieldName) }));
          if (newValue === INVALIDATE) {
            _this.group.dirty(dataId, storeFieldName);
          } else {
            if (newValue === DELETE)
              newValue = void 0;
            if (newValue !== fieldValue) {
              changedFields_1[storeFieldName] = newValue;
              needToMerge_1 = true;
              fieldValue = newValue;
            }
          }
        }
        if (fieldValue !== void 0) {
          allDeleted_1 = false;
        }
      });
      if (needToMerge_1) {
        this.merge(dataId, changedFields_1);
        if (allDeleted_1) {
          if (this instanceof Layer) {
            this.data[dataId] = void 0;
          } else {
            delete this.data[dataId];
          }
          this.group.dirty(dataId, "__exists");
        }
        return true;
      }
    }
    return false;
  };
  EntityStore2.prototype.delete = function(dataId, fieldName, args) {
    var _a5;
    var storeObject = this.lookup(dataId);
    if (storeObject) {
      var typename = this.getFieldValue(storeObject, "__typename");
      var storeFieldName = fieldName && args ? this.policies.getStoreFieldName({ typename, fieldName, args }) : fieldName;
      return this.modify(dataId, storeFieldName ? (_a5 = {}, _a5[storeFieldName] = delModifier, _a5) : delModifier);
    }
    return false;
  };
  EntityStore2.prototype.evict = function(options, limit) {
    var evicted = false;
    if (options.id) {
      if (hasOwn.call(this.data, options.id)) {
        evicted = this.delete(options.id, options.fieldName, options.args);
      }
      if (this instanceof Layer && this !== limit) {
        evicted = this.parent.evict(options, limit) || evicted;
      }
      if (options.fieldName || evicted) {
        this.group.dirty(options.id, options.fieldName || "__exists");
      }
    }
    return evicted;
  };
  EntityStore2.prototype.clear = function() {
    this.replace(null);
  };
  EntityStore2.prototype.extract = function() {
    var _this = this;
    var obj = this.toObject();
    var extraRootIds = [];
    this.getRootIdSet().forEach(function(id) {
      if (!hasOwn.call(_this.policies.rootTypenamesById, id)) {
        extraRootIds.push(id);
      }
    });
    if (extraRootIds.length) {
      obj.__META = { extraRootIds: extraRootIds.sort() };
    }
    return obj;
  };
  EntityStore2.prototype.replace = function(newData) {
    var _this = this;
    Object.keys(this.data).forEach(function(dataId) {
      if (!(newData && hasOwn.call(newData, dataId))) {
        _this.delete(dataId);
      }
    });
    if (newData) {
      var __META = newData.__META, rest_1 = __rest(newData, ["__META"]);
      Object.keys(rest_1).forEach(function(dataId) {
        _this.merge(dataId, rest_1[dataId]);
      });
      if (__META) {
        __META.extraRootIds.forEach(this.retain, this);
      }
    }
  };
  EntityStore2.prototype.retain = function(rootId) {
    return this.rootIds[rootId] = (this.rootIds[rootId] || 0) + 1;
  };
  EntityStore2.prototype.release = function(rootId) {
    if (this.rootIds[rootId] > 0) {
      var count = --this.rootIds[rootId];
      if (!count)
        delete this.rootIds[rootId];
      return count;
    }
    return 0;
  };
  EntityStore2.prototype.getRootIdSet = function(ids) {
    if (ids === void 0) {
      ids = new Set();
    }
    Object.keys(this.rootIds).forEach(ids.add, ids);
    if (this instanceof Layer) {
      this.parent.getRootIdSet(ids);
    } else {
      Object.keys(this.policies.rootTypenamesById).forEach(ids.add, ids);
    }
    return ids;
  };
  EntityStore2.prototype.gc = function() {
    var _this = this;
    var ids = this.getRootIdSet();
    var snapshot = this.toObject();
    ids.forEach(function(id) {
      if (hasOwn.call(snapshot, id)) {
        Object.keys(_this.findChildRefIds(id)).forEach(ids.add, ids);
        delete snapshot[id];
      }
    });
    var idsToRemove = Object.keys(snapshot);
    if (idsToRemove.length) {
      var root_1 = this;
      while (root_1 instanceof Layer)
        root_1 = root_1.parent;
      idsToRemove.forEach(function(id) {
        return root_1.delete(id);
      });
    }
    return idsToRemove;
  };
  EntityStore2.prototype.findChildRefIds = function(dataId) {
    if (!hasOwn.call(this.refs, dataId)) {
      var found_1 = this.refs[dataId] = Object.create(null);
      var root2 = this.data[dataId];
      if (!root2)
        return found_1;
      var workSet_1 = new Set([root2]);
      workSet_1.forEach(function(obj) {
        if (isReference(obj)) {
          found_1[obj.__ref] = true;
        }
        if (isNonNullObject(obj)) {
          Object.keys(obj).forEach(function(key) {
            var child = obj[key];
            if (isNonNullObject(child)) {
              workSet_1.add(child);
            }
          });
        }
      });
    }
    return this.refs[dataId];
  };
  EntityStore2.prototype.makeCacheKey = function() {
    return this.group.keyMaker.lookupArray(arguments);
  };
  return EntityStore2;
}();
var CacheGroup = function() {
  function CacheGroup2(caching, parent) {
    if (parent === void 0) {
      parent = null;
    }
    this.caching = caching;
    this.parent = parent;
    this.d = null;
    this.resetCaching();
  }
  CacheGroup2.prototype.resetCaching = function() {
    this.d = this.caching ? dep() : null;
    this.keyMaker = new Trie(canUseWeakMap);
  };
  CacheGroup2.prototype.depend = function(dataId, storeFieldName) {
    if (this.d) {
      this.d(makeDepKey(dataId, storeFieldName));
      var fieldName = fieldNameFromStoreName(storeFieldName);
      if (fieldName !== storeFieldName) {
        this.d(makeDepKey(dataId, fieldName));
      }
      if (this.parent) {
        this.parent.depend(dataId, storeFieldName);
      }
    }
  };
  CacheGroup2.prototype.dirty = function(dataId, storeFieldName) {
    if (this.d) {
      this.d.dirty(makeDepKey(dataId, storeFieldName), storeFieldName === "__exists" ? "forget" : "setDirty");
    }
  };
  return CacheGroup2;
}();
function makeDepKey(dataId, storeFieldName) {
  return storeFieldName + "#" + dataId;
}
function maybeDependOnExistenceOfEntity(store, entityId) {
  if (supportsResultCaching(store)) {
    store.group.depend(entityId, "__exists");
  }
}
(function(EntityStore2) {
  var Root = function(_super) {
    __extends(Root2, _super);
    function Root2(_a5) {
      var policies = _a5.policies, _b = _a5.resultCaching, resultCaching = _b === void 0 ? true : _b, seed = _a5.seed;
      var _this = _super.call(this, policies, new CacheGroup(resultCaching)) || this;
      _this.stump = new Stump(_this);
      _this.storageTrie = new Trie(canUseWeakMap);
      if (seed)
        _this.replace(seed);
      return _this;
    }
    Root2.prototype.addLayer = function(layerId, replay) {
      return this.stump.addLayer(layerId, replay);
    };
    Root2.prototype.removeLayer = function() {
      return this;
    };
    Root2.prototype.getStorage = function() {
      return this.storageTrie.lookupArray(arguments);
    };
    return Root2;
  }(EntityStore2);
  EntityStore2.Root = Root;
})(EntityStore || (EntityStore = {}));
var Layer = function(_super) {
  __extends(Layer2, _super);
  function Layer2(id, parent, replay, group) {
    var _this = _super.call(this, parent.policies, group) || this;
    _this.id = id;
    _this.parent = parent;
    _this.replay = replay;
    _this.group = group;
    replay(_this);
    return _this;
  }
  Layer2.prototype.addLayer = function(layerId, replay) {
    return new Layer2(layerId, this, replay, this.group);
  };
  Layer2.prototype.removeLayer = function(layerId) {
    var _this = this;
    var parent = this.parent.removeLayer(layerId);
    if (layerId === this.id) {
      if (this.group.caching) {
        Object.keys(this.data).forEach(function(dataId) {
          var ownStoreObject = _this.data[dataId];
          var parentStoreObject = parent["lookup"](dataId);
          if (!parentStoreObject) {
            _this.delete(dataId);
          } else if (!ownStoreObject) {
            _this.group.dirty(dataId, "__exists");
            Object.keys(parentStoreObject).forEach(function(storeFieldName) {
              _this.group.dirty(dataId, storeFieldName);
            });
          } else if (ownStoreObject !== parentStoreObject) {
            Object.keys(ownStoreObject).forEach(function(storeFieldName) {
              if (!equal(ownStoreObject[storeFieldName], parentStoreObject[storeFieldName])) {
                _this.group.dirty(dataId, storeFieldName);
              }
            });
          }
        });
      }
      return parent;
    }
    if (parent === this.parent)
      return this;
    return parent.addLayer(this.id, this.replay);
  };
  Layer2.prototype.toObject = function() {
    return __assign2(__assign2({}, this.parent.toObject()), this.data);
  };
  Layer2.prototype.findChildRefIds = function(dataId) {
    var fromParent = this.parent.findChildRefIds(dataId);
    return hasOwn.call(this.data, dataId) ? __assign2(__assign2({}, fromParent), _super.prototype.findChildRefIds.call(this, dataId)) : fromParent;
  };
  Layer2.prototype.getStorage = function() {
    var p = this.parent;
    while (p.parent)
      p = p.parent;
    return p.getStorage.apply(p, arguments);
  };
  return Layer2;
}(EntityStore);
var Stump = function(_super) {
  __extends(Stump2, _super);
  function Stump2(root2) {
    return _super.call(this, "EntityStore.Stump", root2, function() {
    }, new CacheGroup(root2.group.caching, root2.group)) || this;
  }
  Stump2.prototype.removeLayer = function() {
    return this;
  };
  Stump2.prototype.merge = function() {
    return this.parent.merge.apply(this.parent, arguments);
  };
  return Stump2;
}(Layer);
function storeObjectReconciler(existingObject, incomingObject, property) {
  var existingValue = existingObject[property];
  var incomingValue = incomingObject[property];
  return equal(existingValue, incomingValue) ? existingValue : incomingValue;
}
function supportsResultCaching(store) {
  return !!(store instanceof EntityStore && store.group.caching);
}

// node_modules/@apollo/client/cache/inmemory/inMemoryCache.js
init_react();

// node_modules/@apollo/client/cache/inmemory/readFromStore.js
init_react();

// node_modules/@apollo/client/cache/inmemory/object-canon.js
init_react();
function shallowCopy(value) {
  if (isNonNullObject(value)) {
    return Array.isArray(value) ? value.slice(0) : __assign2({ __proto__: Object.getPrototypeOf(value) }, value);
  }
  return value;
}
var ObjectCanon = function() {
  function ObjectCanon2() {
    this.known = new (canUseWeakSet ? WeakSet : Set)();
    this.pool = new Trie(canUseWeakMap);
    this.passes = new WeakMap();
    this.keysByJSON = new Map();
    this.empty = this.admit({});
  }
  ObjectCanon2.prototype.isKnown = function(value) {
    return isNonNullObject(value) && this.known.has(value);
  };
  ObjectCanon2.prototype.pass = function(value) {
    if (isNonNullObject(value)) {
      var copy = shallowCopy(value);
      this.passes.set(copy, value);
      return copy;
    }
    return value;
  };
  ObjectCanon2.prototype.admit = function(value) {
    var _this = this;
    if (isNonNullObject(value)) {
      var original = this.passes.get(value);
      if (original)
        return original;
      var proto = Object.getPrototypeOf(value);
      switch (proto) {
        case Array.prototype: {
          if (this.known.has(value))
            return value;
          var array = value.map(this.admit, this);
          var node = this.pool.lookupArray(array);
          if (!node.array) {
            this.known.add(node.array = array);
            if (__DEV__) {
              Object.freeze(array);
            }
          }
          return node.array;
        }
        case null:
        case Object.prototype: {
          if (this.known.has(value))
            return value;
          var proto_1 = Object.getPrototypeOf(value);
          var array_1 = [proto_1];
          var keys = this.sortedKeys(value);
          array_1.push(keys.json);
          var firstValueIndex_1 = array_1.length;
          keys.sorted.forEach(function(key) {
            array_1.push(_this.admit(value[key]));
          });
          var node = this.pool.lookupArray(array_1);
          if (!node.object) {
            var obj_1 = node.object = Object.create(proto_1);
            this.known.add(obj_1);
            keys.sorted.forEach(function(key, i) {
              obj_1[key] = array_1[firstValueIndex_1 + i];
            });
            if (__DEV__) {
              Object.freeze(obj_1);
            }
          }
          return node.object;
        }
      }
    }
    return value;
  };
  ObjectCanon2.prototype.sortedKeys = function(obj) {
    var keys = Object.keys(obj);
    var node = this.pool.lookupArray(keys);
    if (!node.keys) {
      keys.sort();
      var json = JSON.stringify(keys);
      if (!(node.keys = this.keysByJSON.get(json))) {
        this.keysByJSON.set(json, node.keys = { sorted: keys, json });
      }
    }
    return node.keys;
  };
  return ObjectCanon2;
}();
var canonicalStringify = Object.assign(function(value) {
  if (isNonNullObject(value)) {
    if (stringifyCanon === void 0) {
      resetCanonicalStringify();
    }
    var canonical = stringifyCanon.admit(value);
    var json = stringifyCache.get(canonical);
    if (json === void 0) {
      stringifyCache.set(canonical, json = JSON.stringify(canonical));
    }
    return json;
  }
  return JSON.stringify(value);
}, {
  reset: resetCanonicalStringify
});
var stringifyCanon;
var stringifyCache;
function resetCanonicalStringify() {
  stringifyCanon = new ObjectCanon();
  stringifyCache = new (canUseWeakMap ? WeakMap : Map)();
}

// node_modules/@apollo/client/cache/inmemory/readFromStore.js
function execSelectionSetKeyArgs(options) {
  return [
    options.selectionSet,
    options.objectOrReference,
    options.context,
    options.context.canonizeResults
  ];
}
var StoreReader = function() {
  function StoreReader2(config) {
    var _this = this;
    this.knownResults = new (canUseWeakMap ? WeakMap : Map)();
    this.config = compact(config, {
      addTypename: config.addTypename !== false,
      canonizeResults: shouldCanonizeResults(config)
    });
    this.canon = config.canon || new ObjectCanon();
    this.executeSelectionSet = wrap2(function(options) {
      var _a5;
      var canonizeResults = options.context.canonizeResults;
      var peekArgs = execSelectionSetKeyArgs(options);
      peekArgs[3] = !canonizeResults;
      var other = (_a5 = _this.executeSelectionSet).peek.apply(_a5, peekArgs);
      if (other) {
        if (canonizeResults) {
          return __assign2(__assign2({}, other), { result: _this.canon.admit(other.result) });
        }
        return other;
      }
      maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
      return _this.execSelectionSetImpl(options);
    }, {
      max: this.config.resultCacheMaxSize,
      keyArgs: execSelectionSetKeyArgs,
      makeCacheKey: function(selectionSet, parent, context, canonizeResults) {
        if (supportsResultCaching(context.store)) {
          return context.store.makeCacheKey(selectionSet, isReference(parent) ? parent.__ref : parent, context.varString, canonizeResults);
        }
      }
    });
    this.executeSubSelectedArray = wrap2(function(options) {
      maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
      return _this.execSubSelectedArrayImpl(options);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(_a5) {
        var field = _a5.field, array = _a5.array, context = _a5.context;
        if (supportsResultCaching(context.store)) {
          return context.store.makeCacheKey(field, array, context.varString);
        }
      }
    });
  }
  StoreReader2.prototype.resetCanon = function() {
    this.canon = new ObjectCanon();
  };
  StoreReader2.prototype.diffQueryAgainstStore = function(_a5) {
    var store = _a5.store, query = _a5.query, _b = _a5.rootId, rootId = _b === void 0 ? "ROOT_QUERY" : _b, variables = _a5.variables, _c = _a5.returnPartialData, returnPartialData = _c === void 0 ? true : _c, _d = _a5.canonizeResults, canonizeResults = _d === void 0 ? this.config.canonizeResults : _d;
    var policies = this.config.cache.policies;
    variables = __assign2(__assign2({}, getDefaultValues(getQueryDefinition(query))), variables);
    var rootRef = makeReference(rootId);
    var merger = new DeepMerger();
    var execResult = this.executeSelectionSet({
      selectionSet: getMainDefinition(query).selectionSet,
      objectOrReference: rootRef,
      enclosingRef: rootRef,
      context: {
        store,
        query,
        policies,
        variables,
        varString: canonicalStringify(variables),
        canonizeResults,
        fragmentMap: createFragmentMap(getFragmentDefinitions(query)),
        merge: function(a, b) {
          return merger.merge(a, b);
        }
      }
    });
    var missing;
    if (execResult.missing) {
      missing = [new MissingFieldError(firstMissing(execResult.missing), execResult.missing, query, variables)];
      if (!returnPartialData) {
        throw missing[0];
      }
    }
    return {
      result: execResult.result,
      complete: !missing,
      missing
    };
  };
  StoreReader2.prototype.isFresh = function(result2, parent, selectionSet, context) {
    if (supportsResultCaching(context.store) && this.knownResults.get(result2) === selectionSet) {
      var latest = this.executeSelectionSet.peek(selectionSet, parent, context, this.canon.isKnown(result2));
      if (latest && result2 === latest.result) {
        return true;
      }
    }
    return false;
  };
  StoreReader2.prototype.execSelectionSetImpl = function(_a5) {
    var _this = this;
    var selectionSet = _a5.selectionSet, objectOrReference = _a5.objectOrReference, enclosingRef = _a5.enclosingRef, context = _a5.context;
    if (isReference(objectOrReference) && !context.policies.rootTypenamesById[objectOrReference.__ref] && !context.store.has(objectOrReference.__ref)) {
      return {
        result: this.canon.empty,
        missing: "Dangling reference to missing ".concat(objectOrReference.__ref, " object")
      };
    }
    var variables = context.variables, policies = context.policies, store = context.store;
    var typename = store.getFieldValue(objectOrReference, "__typename");
    var result2 = {};
    var missing;
    if (this.config.addTypename && typeof typename === "string" && !policies.rootIdsByTypename[typename]) {
      result2 = { __typename: typename };
    }
    function handleMissing(result3, resultName) {
      var _a6;
      if (result3.missing) {
        missing = context.merge(missing, (_a6 = {}, _a6[resultName] = result3.missing, _a6));
      }
      return result3.result;
    }
    var workSet = new Set(selectionSet.selections);
    workSet.forEach(function(selection) {
      var _a6, _b;
      if (!shouldInclude(selection, variables))
        return;
      if (isField(selection)) {
        var fieldValue = policies.readField({
          fieldName: selection.name.value,
          field: selection,
          variables: context.variables,
          from: objectOrReference
        }, context);
        var resultName = resultKeyNameFromField(selection);
        if (fieldValue === void 0) {
          if (!addTypenameToDocument.added(selection)) {
            missing = context.merge(missing, (_a6 = {}, _a6[resultName] = "Can't find field '".concat(selection.name.value, "' on ").concat(isReference(objectOrReference) ? objectOrReference.__ref + " object" : "object " + JSON.stringify(objectOrReference, null, 2)), _a6));
          }
        } else if (Array.isArray(fieldValue)) {
          fieldValue = handleMissing(_this.executeSubSelectedArray({
            field: selection,
            array: fieldValue,
            enclosingRef,
            context
          }), resultName);
        } else if (!selection.selectionSet) {
          if (context.canonizeResults) {
            fieldValue = _this.canon.pass(fieldValue);
          }
        } else if (fieldValue != null) {
          fieldValue = handleMissing(_this.executeSelectionSet({
            selectionSet: selection.selectionSet,
            objectOrReference: fieldValue,
            enclosingRef: isReference(fieldValue) ? fieldValue : enclosingRef,
            context
          }), resultName);
        }
        if (fieldValue !== void 0) {
          result2 = context.merge(result2, (_b = {}, _b[resultName] = fieldValue, _b));
        }
      } else {
        var fragment = getFragmentFromSelection(selection, context.fragmentMap);
        if (fragment && policies.fragmentMatches(fragment, typename)) {
          fragment.selectionSet.selections.forEach(workSet.add, workSet);
        }
      }
    });
    var finalResult = { result: result2, missing };
    var frozen = context.canonizeResults ? this.canon.admit(finalResult) : maybeDeepFreeze(finalResult);
    if (frozen.result) {
      this.knownResults.set(frozen.result, selectionSet);
    }
    return frozen;
  };
  StoreReader2.prototype.execSubSelectedArrayImpl = function(_a5) {
    var _this = this;
    var field = _a5.field, array = _a5.array, enclosingRef = _a5.enclosingRef, context = _a5.context;
    var missing;
    function handleMissing(childResult, i) {
      var _a6;
      if (childResult.missing) {
        missing = context.merge(missing, (_a6 = {}, _a6[i] = childResult.missing, _a6));
      }
      return childResult.result;
    }
    if (field.selectionSet) {
      array = array.filter(context.store.canRead);
    }
    array = array.map(function(item, i) {
      if (item === null) {
        return null;
      }
      if (Array.isArray(item)) {
        return handleMissing(_this.executeSubSelectedArray({
          field,
          array: item,
          enclosingRef,
          context
        }), i);
      }
      if (field.selectionSet) {
        return handleMissing(_this.executeSelectionSet({
          selectionSet: field.selectionSet,
          objectOrReference: item,
          enclosingRef: isReference(item) ? item : enclosingRef,
          context
        }), i);
      }
      if (__DEV__) {
        assertSelectionSetForIdValue(context.store, field, item);
      }
      return item;
    });
    return {
      result: context.canonizeResults ? this.canon.admit(array) : array,
      missing
    };
  };
  return StoreReader2;
}();
function firstMissing(tree) {
  try {
    JSON.stringify(tree, function(_, value) {
      if (typeof value === "string")
        throw value;
      return value;
    });
  } catch (result2) {
    return result2;
  }
}
function assertSelectionSetForIdValue(store, field, fieldValue) {
  if (!field.selectionSet) {
    var workSet_1 = new Set([fieldValue]);
    workSet_1.forEach(function(value) {
      if (isNonNullObject(value)) {
        __DEV__ ? invariant(!isReference(value), "Missing selection set for object of type ".concat(getTypenameFromStoreObject(store, value), " returned for query field ").concat(field.name.value)) : invariant(!isReference(value), 5);
        Object.values(value).forEach(workSet_1.add, workSet_1);
      }
    });
  }
}

// node_modules/@apollo/client/cache/inmemory/writeToStore.js
init_react();

// node_modules/@apollo/client/cache/inmemory/policies.js
init_react();

// node_modules/@apollo/client/cache/inmemory/reactiveVars.js
init_react();
var cacheSlot = new Slot();
var cacheInfoMap = new WeakMap();
function getCacheInfo(cache) {
  var info = cacheInfoMap.get(cache);
  if (!info) {
    cacheInfoMap.set(cache, info = {
      vars: new Set(),
      dep: dep()
    });
  }
  return info;
}
function forgetCache(cache) {
  getCacheInfo(cache).vars.forEach(function(rv) {
    return rv.forgetCache(cache);
  });
}
function recallCache(cache) {
  getCacheInfo(cache).vars.forEach(function(rv) {
    return rv.attachCache(cache);
  });
}
function makeVar(value) {
  var caches2 = new Set();
  var listeners = new Set();
  var rv = function(newValue) {
    if (arguments.length > 0) {
      if (value !== newValue) {
        value = newValue;
        caches2.forEach(function(cache2) {
          getCacheInfo(cache2).dep.dirty(rv);
          broadcast(cache2);
        });
        var oldListeners = Array.from(listeners);
        listeners.clear();
        oldListeners.forEach(function(listener) {
          return listener(value);
        });
      }
    } else {
      var cache = cacheSlot.getValue();
      if (cache) {
        attach(cache);
        getCacheInfo(cache).dep(rv);
      }
    }
    return value;
  };
  rv.onNextChange = function(listener) {
    listeners.add(listener);
    return function() {
      listeners.delete(listener);
    };
  };
  var attach = rv.attachCache = function(cache) {
    caches2.add(cache);
    getCacheInfo(cache).vars.add(rv);
    return rv;
  };
  rv.forgetCache = function(cache) {
    return caches2.delete(cache);
  };
  return rv;
}
function broadcast(cache) {
  if (cache.broadcastWatches) {
    cache.broadcastWatches();
  }
}

// node_modules/@apollo/client/cache/inmemory/key-extractor.js
init_react();
var specifierInfoCache = Object.create(null);
function lookupSpecifierInfo(spec) {
  var cacheKey = JSON.stringify(spec);
  return specifierInfoCache[cacheKey] || (specifierInfoCache[cacheKey] = Object.create(null));
}
function keyFieldsFnFromSpecifier(specifier) {
  var info = lookupSpecifierInfo(specifier);
  return info.keyFieldsFn || (info.keyFieldsFn = function(object, context) {
    var extract = function(from2, key) {
      return context.readField(key, from2);
    };
    var keyObject = context.keyObject = collectSpecifierPaths(specifier, function(schemaKeyPath) {
      var extracted = extractKeyPath(context.storeObject, schemaKeyPath, extract);
      if (extracted === void 0 && object !== context.storeObject && hasOwn.call(object, schemaKeyPath[0])) {
        extracted = extractKeyPath(object, schemaKeyPath, extractKey);
      }
      __DEV__ ? invariant(extracted !== void 0, "Missing field '".concat(schemaKeyPath.join("."), "' while extracting keyFields from ").concat(JSON.stringify(object))) : invariant(extracted !== void 0, 2);
      return extracted;
    });
    return "".concat(context.typename, ":").concat(JSON.stringify(keyObject));
  });
}
function keyArgsFnFromSpecifier(specifier) {
  var info = lookupSpecifierInfo(specifier);
  return info.keyArgsFn || (info.keyArgsFn = function(args, _a5) {
    var field = _a5.field, variables = _a5.variables, fieldName = _a5.fieldName;
    var collected = collectSpecifierPaths(specifier, function(keyPath) {
      var firstKey = keyPath[0];
      var firstChar = firstKey.charAt(0);
      if (firstChar === "@") {
        if (field && isNonEmptyArray(field.directives)) {
          var directiveName_1 = firstKey.slice(1);
          var d = field.directives.find(function(d2) {
            return d2.name.value === directiveName_1;
          });
          var directiveArgs = d && argumentsObjectFromField(d, variables);
          return directiveArgs && extractKeyPath(directiveArgs, keyPath.slice(1));
        }
        return;
      }
      if (firstChar === "$") {
        var variableName = firstKey.slice(1);
        if (variables && hasOwn.call(variables, variableName)) {
          var varKeyPath = keyPath.slice(0);
          varKeyPath[0] = variableName;
          return extractKeyPath(variables, varKeyPath);
        }
        return;
      }
      if (args) {
        return extractKeyPath(args, keyPath);
      }
    });
    var suffix = JSON.stringify(collected);
    if (args || suffix !== "{}") {
      fieldName += ":" + suffix;
    }
    return fieldName;
  });
}
function collectSpecifierPaths(specifier, extractor) {
  var merger = new DeepMerger();
  return getSpecifierPaths(specifier).reduce(function(collected, path) {
    var _a5;
    var toMerge = extractor(path);
    if (toMerge !== void 0) {
      for (var i = path.length - 1; i >= 0; --i) {
        toMerge = (_a5 = {}, _a5[path[i]] = toMerge, _a5);
      }
      collected = merger.merge(collected, toMerge);
    }
    return collected;
  }, Object.create(null));
}
function getSpecifierPaths(spec) {
  var info = lookupSpecifierInfo(spec);
  if (!info.paths) {
    var paths_1 = info.paths = [];
    var currentPath_1 = [];
    spec.forEach(function(s, i) {
      if (Array.isArray(s)) {
        getSpecifierPaths(s).forEach(function(p) {
          return paths_1.push(currentPath_1.concat(p));
        });
        currentPath_1.length = 0;
      } else {
        currentPath_1.push(s);
        if (!Array.isArray(spec[i + 1])) {
          paths_1.push(currentPath_1.slice(0));
          currentPath_1.length = 0;
        }
      }
    });
  }
  return info.paths;
}
function extractKey(object, key) {
  return object[key];
}
function extractKeyPath(object, path, extract) {
  extract = extract || extractKey;
  return normalize(path.reduce(function reducer(obj, key) {
    return Array.isArray(obj) ? obj.map(function(child) {
      return reducer(child, key);
    }) : obj && extract(obj, key);
  }, object));
}
function normalize(value) {
  if (isNonNullObject(value)) {
    if (Array.isArray(value)) {
      return value.map(normalize);
    }
    return collectSpecifierPaths(Object.keys(value).sort(), function(path) {
      return extractKeyPath(value, path);
    });
  }
  return value;
}

// node_modules/@apollo/client/cache/inmemory/policies.js
getStoreKeyName.setStringify(canonicalStringify);
function argsFromFieldSpecifier(spec) {
  return spec.args !== void 0 ? spec.args : spec.field ? argumentsObjectFromField(spec.field, spec.variables) : null;
}
var nullKeyFieldsFn = function() {
  return void 0;
};
var simpleKeyArgsFn = function(_args, context) {
  return context.fieldName;
};
var mergeTrueFn = function(existing, incoming, _a5) {
  var mergeObjects = _a5.mergeObjects;
  return mergeObjects(existing, incoming);
};
var mergeFalseFn = function(_, incoming) {
  return incoming;
};
var Policies = function() {
  function Policies2(config) {
    this.config = config;
    this.typePolicies = Object.create(null);
    this.toBeAdded = Object.create(null);
    this.supertypeMap = new Map();
    this.fuzzySubtypes = new Map();
    this.rootIdsByTypename = Object.create(null);
    this.rootTypenamesById = Object.create(null);
    this.usingPossibleTypes = false;
    this.config = __assign2({ dataIdFromObject: defaultDataIdFromObject }, config);
    this.cache = this.config.cache;
    this.setRootTypename("Query");
    this.setRootTypename("Mutation");
    this.setRootTypename("Subscription");
    if (config.possibleTypes) {
      this.addPossibleTypes(config.possibleTypes);
    }
    if (config.typePolicies) {
      this.addTypePolicies(config.typePolicies);
    }
  }
  Policies2.prototype.identify = function(object, partialContext) {
    var _a5;
    var policies = this;
    var typename = partialContext && (partialContext.typename || ((_a5 = partialContext.storeObject) === null || _a5 === void 0 ? void 0 : _a5.__typename)) || object.__typename;
    if (typename === this.rootTypenamesById.ROOT_QUERY) {
      return ["ROOT_QUERY"];
    }
    var storeObject = partialContext && partialContext.storeObject || object;
    var context = __assign2(__assign2({}, partialContext), { typename, storeObject, readField: partialContext && partialContext.readField || function() {
      var options = normalizeReadFieldOptions(arguments, storeObject);
      return policies.readField(options, {
        store: policies.cache["data"],
        variables: options.variables
      });
    } });
    var id;
    var policy = typename && this.getTypePolicy(typename);
    var keyFn = policy && policy.keyFn || this.config.dataIdFromObject;
    while (keyFn) {
      var specifierOrId = keyFn(object, context);
      if (Array.isArray(specifierOrId)) {
        keyFn = keyFieldsFnFromSpecifier(specifierOrId);
      } else {
        id = specifierOrId;
        break;
      }
    }
    id = id ? String(id) : void 0;
    return context.keyObject ? [id, context.keyObject] : [id];
  };
  Policies2.prototype.addTypePolicies = function(typePolicies) {
    var _this = this;
    Object.keys(typePolicies).forEach(function(typename) {
      var _a5 = typePolicies[typename], queryType = _a5.queryType, mutationType = _a5.mutationType, subscriptionType = _a5.subscriptionType, incoming = __rest(_a5, ["queryType", "mutationType", "subscriptionType"]);
      if (queryType)
        _this.setRootTypename("Query", typename);
      if (mutationType)
        _this.setRootTypename("Mutation", typename);
      if (subscriptionType)
        _this.setRootTypename("Subscription", typename);
      if (hasOwn.call(_this.toBeAdded, typename)) {
        _this.toBeAdded[typename].push(incoming);
      } else {
        _this.toBeAdded[typename] = [incoming];
      }
    });
  };
  Policies2.prototype.updateTypePolicy = function(typename, incoming) {
    var _this = this;
    var existing = this.getTypePolicy(typename);
    var keyFields = incoming.keyFields, fields = incoming.fields;
    function setMerge(existing2, merge) {
      existing2.merge = typeof merge === "function" ? merge : merge === true ? mergeTrueFn : merge === false ? mergeFalseFn : existing2.merge;
    }
    setMerge(existing, incoming.merge);
    existing.keyFn = keyFields === false ? nullKeyFieldsFn : Array.isArray(keyFields) ? keyFieldsFnFromSpecifier(keyFields) : typeof keyFields === "function" ? keyFields : existing.keyFn;
    if (fields) {
      Object.keys(fields).forEach(function(fieldName) {
        var existing2 = _this.getFieldPolicy(typename, fieldName, true);
        var incoming2 = fields[fieldName];
        if (typeof incoming2 === "function") {
          existing2.read = incoming2;
        } else {
          var keyArgs = incoming2.keyArgs, read = incoming2.read, merge = incoming2.merge;
          existing2.keyFn = keyArgs === false ? simpleKeyArgsFn : Array.isArray(keyArgs) ? keyArgsFnFromSpecifier(keyArgs) : typeof keyArgs === "function" ? keyArgs : existing2.keyFn;
          if (typeof read === "function") {
            existing2.read = read;
          }
          setMerge(existing2, merge);
        }
        if (existing2.read && existing2.merge) {
          existing2.keyFn = existing2.keyFn || simpleKeyArgsFn;
        }
      });
    }
  };
  Policies2.prototype.setRootTypename = function(which, typename) {
    if (typename === void 0) {
      typename = which;
    }
    var rootId = "ROOT_" + which.toUpperCase();
    var old = this.rootTypenamesById[rootId];
    if (typename !== old) {
      __DEV__ ? invariant(!old || old === which, "Cannot change root ".concat(which, " __typename more than once")) : invariant(!old || old === which, 3);
      if (old)
        delete this.rootIdsByTypename[old];
      this.rootIdsByTypename[typename] = rootId;
      this.rootTypenamesById[rootId] = typename;
    }
  };
  Policies2.prototype.addPossibleTypes = function(possibleTypes) {
    var _this = this;
    this.usingPossibleTypes = true;
    Object.keys(possibleTypes).forEach(function(supertype) {
      _this.getSupertypeSet(supertype, true);
      possibleTypes[supertype].forEach(function(subtype) {
        _this.getSupertypeSet(subtype, true).add(supertype);
        var match = subtype.match(TypeOrFieldNameRegExp);
        if (!match || match[0] !== subtype) {
          _this.fuzzySubtypes.set(subtype, new RegExp(subtype));
        }
      });
    });
  };
  Policies2.prototype.getTypePolicy = function(typename) {
    var _this = this;
    if (!hasOwn.call(this.typePolicies, typename)) {
      var policy_1 = this.typePolicies[typename] = Object.create(null);
      policy_1.fields = Object.create(null);
      var supertypes = this.supertypeMap.get(typename);
      if (supertypes && supertypes.size) {
        supertypes.forEach(function(supertype) {
          var _a5 = _this.getTypePolicy(supertype), fields = _a5.fields, rest = __rest(_a5, ["fields"]);
          Object.assign(policy_1, rest);
          Object.assign(policy_1.fields, fields);
        });
      }
    }
    var inbox = this.toBeAdded[typename];
    if (inbox && inbox.length) {
      inbox.splice(0).forEach(function(policy) {
        _this.updateTypePolicy(typename, policy);
      });
    }
    return this.typePolicies[typename];
  };
  Policies2.prototype.getFieldPolicy = function(typename, fieldName, createIfMissing) {
    if (typename) {
      var fieldPolicies = this.getTypePolicy(typename).fields;
      return fieldPolicies[fieldName] || createIfMissing && (fieldPolicies[fieldName] = Object.create(null));
    }
  };
  Policies2.prototype.getSupertypeSet = function(subtype, createIfMissing) {
    var supertypeSet = this.supertypeMap.get(subtype);
    if (!supertypeSet && createIfMissing) {
      this.supertypeMap.set(subtype, supertypeSet = new Set());
    }
    return supertypeSet;
  };
  Policies2.prototype.fragmentMatches = function(fragment, typename, result2, variables) {
    var _this = this;
    if (!fragment.typeCondition)
      return true;
    if (!typename)
      return false;
    var supertype = fragment.typeCondition.name.value;
    if (typename === supertype)
      return true;
    if (this.usingPossibleTypes && this.supertypeMap.has(supertype)) {
      var typenameSupertypeSet = this.getSupertypeSet(typename, true);
      var workQueue_1 = [typenameSupertypeSet];
      var maybeEnqueue_1 = function(subtype) {
        var supertypeSet2 = _this.getSupertypeSet(subtype, false);
        if (supertypeSet2 && supertypeSet2.size && workQueue_1.indexOf(supertypeSet2) < 0) {
          workQueue_1.push(supertypeSet2);
        }
      };
      var needToCheckFuzzySubtypes = !!(result2 && this.fuzzySubtypes.size);
      var checkingFuzzySubtypes = false;
      for (var i = 0; i < workQueue_1.length; ++i) {
        var supertypeSet = workQueue_1[i];
        if (supertypeSet.has(supertype)) {
          if (!typenameSupertypeSet.has(supertype)) {
            if (checkingFuzzySubtypes) {
              __DEV__ && invariant.warn("Inferring subtype ".concat(typename, " of supertype ").concat(supertype));
            }
            typenameSupertypeSet.add(supertype);
          }
          return true;
        }
        supertypeSet.forEach(maybeEnqueue_1);
        if (needToCheckFuzzySubtypes && i === workQueue_1.length - 1 && selectionSetMatchesResult(fragment.selectionSet, result2, variables)) {
          needToCheckFuzzySubtypes = false;
          checkingFuzzySubtypes = true;
          this.fuzzySubtypes.forEach(function(regExp, fuzzyString) {
            var match = typename.match(regExp);
            if (match && match[0] === typename) {
              maybeEnqueue_1(fuzzyString);
            }
          });
        }
      }
    }
    return false;
  };
  Policies2.prototype.hasKeyArgs = function(typename, fieldName) {
    var policy = this.getFieldPolicy(typename, fieldName, false);
    return !!(policy && policy.keyFn);
  };
  Policies2.prototype.getStoreFieldName = function(fieldSpec) {
    var typename = fieldSpec.typename, fieldName = fieldSpec.fieldName;
    var policy = this.getFieldPolicy(typename, fieldName, false);
    var storeFieldName;
    var keyFn = policy && policy.keyFn;
    if (keyFn && typename) {
      var context = {
        typename,
        fieldName,
        field: fieldSpec.field || null,
        variables: fieldSpec.variables
      };
      var args = argsFromFieldSpecifier(fieldSpec);
      while (keyFn) {
        var specifierOrString = keyFn(args, context);
        if (Array.isArray(specifierOrString)) {
          keyFn = keyArgsFnFromSpecifier(specifierOrString);
        } else {
          storeFieldName = specifierOrString || fieldName;
          break;
        }
      }
    }
    if (storeFieldName === void 0) {
      storeFieldName = fieldSpec.field ? storeKeyNameFromField(fieldSpec.field, fieldSpec.variables) : getStoreKeyName(fieldName, argsFromFieldSpecifier(fieldSpec));
    }
    if (storeFieldName === false) {
      return fieldName;
    }
    return fieldName === fieldNameFromStoreName(storeFieldName) ? storeFieldName : fieldName + ":" + storeFieldName;
  };
  Policies2.prototype.readField = function(options, context) {
    var objectOrReference = options.from;
    if (!objectOrReference)
      return;
    var nameOrField = options.field || options.fieldName;
    if (!nameOrField)
      return;
    if (options.typename === void 0) {
      var typename = context.store.getFieldValue(objectOrReference, "__typename");
      if (typename)
        options.typename = typename;
    }
    var storeFieldName = this.getStoreFieldName(options);
    var fieldName = fieldNameFromStoreName(storeFieldName);
    var existing = context.store.getFieldValue(objectOrReference, storeFieldName);
    var policy = this.getFieldPolicy(options.typename, fieldName, false);
    var read = policy && policy.read;
    if (read) {
      var readOptions = makeFieldFunctionOptions(this, objectOrReference, options, context, context.store.getStorage(isReference(objectOrReference) ? objectOrReference.__ref : objectOrReference, storeFieldName));
      return cacheSlot.withValue(this.cache, read, [existing, readOptions]);
    }
    return existing;
  };
  Policies2.prototype.getReadFunction = function(typename, fieldName) {
    var policy = this.getFieldPolicy(typename, fieldName, false);
    return policy && policy.read;
  };
  Policies2.prototype.getMergeFunction = function(parentTypename, fieldName, childTypename) {
    var policy = this.getFieldPolicy(parentTypename, fieldName, false);
    var merge = policy && policy.merge;
    if (!merge && childTypename) {
      policy = this.getTypePolicy(childTypename);
      merge = policy && policy.merge;
    }
    return merge;
  };
  Policies2.prototype.runMergeFunction = function(existing, incoming, _a5, context, storage) {
    var field = _a5.field, typename = _a5.typename, merge = _a5.merge;
    if (merge === mergeTrueFn) {
      return makeMergeObjectsFunction(context.store)(existing, incoming);
    }
    if (merge === mergeFalseFn) {
      return incoming;
    }
    if (context.overwrite) {
      existing = void 0;
    }
    return merge(existing, incoming, makeFieldFunctionOptions(this, void 0, { typename, fieldName: field.name.value, field, variables: context.variables }, context, storage || Object.create(null)));
  };
  return Policies2;
}();
function makeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage) {
  var storeFieldName = policies.getStoreFieldName(fieldSpec);
  var fieldName = fieldNameFromStoreName(storeFieldName);
  var variables = fieldSpec.variables || context.variables;
  var _a5 = context.store, toReference = _a5.toReference, canRead = _a5.canRead;
  return {
    args: argsFromFieldSpecifier(fieldSpec),
    field: fieldSpec.field || null,
    fieldName,
    storeFieldName,
    variables,
    isReference,
    toReference,
    storage,
    cache: policies.cache,
    canRead,
    readField: function() {
      return policies.readField(normalizeReadFieldOptions(arguments, objectOrReference, context), context);
    },
    mergeObjects: makeMergeObjectsFunction(context.store)
  };
}
function normalizeReadFieldOptions(readFieldArgs, objectOrReference, variables) {
  var fieldNameOrOptions = readFieldArgs[0], from2 = readFieldArgs[1], argc = readFieldArgs.length;
  var options;
  if (typeof fieldNameOrOptions === "string") {
    options = {
      fieldName: fieldNameOrOptions,
      from: argc > 1 ? from2 : objectOrReference
    };
  } else {
    options = __assign2({}, fieldNameOrOptions);
    if (!hasOwn.call(options, "from")) {
      options.from = objectOrReference;
    }
  }
  if (__DEV__ && options.from === void 0) {
    __DEV__ && invariant.warn("Undefined 'from' passed to readField with arguments ".concat(stringifyForDisplay(Array.from(readFieldArgs))));
  }
  if (options.variables === void 0) {
    options.variables = variables;
  }
  return options;
}
function makeMergeObjectsFunction(store) {
  return function mergeObjects(existing, incoming) {
    if (Array.isArray(existing) || Array.isArray(incoming)) {
      throw __DEV__ ? new InvariantError("Cannot automatically merge arrays") : new InvariantError(4);
    }
    if (isNonNullObject(existing) && isNonNullObject(incoming)) {
      var eType = store.getFieldValue(existing, "__typename");
      var iType = store.getFieldValue(incoming, "__typename");
      var typesDiffer = eType && iType && eType !== iType;
      if (typesDiffer) {
        return incoming;
      }
      if (isReference(existing) && storeValueIsStoreObject(incoming)) {
        store.merge(existing.__ref, incoming);
        return existing;
      }
      if (storeValueIsStoreObject(existing) && isReference(incoming)) {
        store.merge(existing, incoming.__ref);
        return incoming;
      }
      if (storeValueIsStoreObject(existing) && storeValueIsStoreObject(incoming)) {
        return __assign2(__assign2({}, existing), incoming);
      }
    }
    return incoming;
  };
}

// node_modules/@apollo/client/cache/inmemory/writeToStore.js
function getContextFlavor(context, clientOnly, deferred) {
  var key = "".concat(clientOnly).concat(deferred);
  var flavored = context.flavors.get(key);
  if (!flavored) {
    context.flavors.set(key, flavored = context.clientOnly === clientOnly && context.deferred === deferred ? context : __assign2(__assign2({}, context), { clientOnly, deferred }));
  }
  return flavored;
}
var StoreWriter = function() {
  function StoreWriter2(cache, reader) {
    this.cache = cache;
    this.reader = reader;
  }
  StoreWriter2.prototype.writeToStore = function(store, _a5) {
    var _this = this;
    var query = _a5.query, result2 = _a5.result, dataId = _a5.dataId, variables = _a5.variables, overwrite = _a5.overwrite;
    var operationDefinition = getOperationDefinition(query);
    var merger = makeProcessedFieldsMerger();
    variables = __assign2(__assign2({}, getDefaultValues(operationDefinition)), variables);
    var context = {
      store,
      written: Object.create(null),
      merge: function(existing, incoming) {
        return merger.merge(existing, incoming);
      },
      variables,
      varString: canonicalStringify(variables),
      fragmentMap: createFragmentMap(getFragmentDefinitions(query)),
      overwrite: !!overwrite,
      incomingById: new Map(),
      clientOnly: false,
      deferred: false,
      flavors: new Map()
    };
    var ref = this.processSelectionSet({
      result: result2 || Object.create(null),
      dataId,
      selectionSet: operationDefinition.selectionSet,
      mergeTree: { map: new Map() },
      context
    });
    if (!isReference(ref)) {
      throw __DEV__ ? new InvariantError("Could not identify object ".concat(JSON.stringify(result2))) : new InvariantError(6);
    }
    context.incomingById.forEach(function(_a6, dataId2) {
      var storeObject = _a6.storeObject, mergeTree = _a6.mergeTree, fieldNodeSet = _a6.fieldNodeSet;
      var entityRef = makeReference(dataId2);
      if (mergeTree && mergeTree.map.size) {
        var applied = _this.applyMerges(mergeTree, entityRef, storeObject, context);
        if (isReference(applied)) {
          return;
        }
        storeObject = applied;
      }
      if (__DEV__ && !context.overwrite) {
        var fieldsWithSelectionSets_1 = Object.create(null);
        fieldNodeSet.forEach(function(field) {
          if (field.selectionSet) {
            fieldsWithSelectionSets_1[field.name.value] = true;
          }
        });
        var hasSelectionSet_1 = function(storeFieldName) {
          return fieldsWithSelectionSets_1[fieldNameFromStoreName(storeFieldName)] === true;
        };
        var hasMergeFunction_1 = function(storeFieldName) {
          var childTree = mergeTree && mergeTree.map.get(storeFieldName);
          return Boolean(childTree && childTree.info && childTree.info.merge);
        };
        Object.keys(storeObject).forEach(function(storeFieldName) {
          if (hasSelectionSet_1(storeFieldName) && !hasMergeFunction_1(storeFieldName)) {
            warnAboutDataLoss(entityRef, storeObject, storeFieldName, context.store);
          }
        });
      }
      store.merge(dataId2, storeObject);
    });
    store.retain(ref.__ref);
    return ref;
  };
  StoreWriter2.prototype.processSelectionSet = function(_a5) {
    var _this = this;
    var dataId = _a5.dataId, result2 = _a5.result, selectionSet = _a5.selectionSet, context = _a5.context, mergeTree = _a5.mergeTree;
    var policies = this.cache.policies;
    var incoming = Object.create(null);
    var typename = dataId && policies.rootTypenamesById[dataId] || getTypenameFromResult(result2, selectionSet, context.fragmentMap) || dataId && context.store.get(dataId, "__typename");
    if (typeof typename === "string") {
      incoming.__typename = typename;
    }
    var readField = function() {
      var options = normalizeReadFieldOptions(arguments, incoming, context.variables);
      if (isReference(options.from)) {
        var info = context.incomingById.get(options.from.__ref);
        if (info) {
          var result_1 = policies.readField(__assign2(__assign2({}, options), { from: info.storeObject }), context);
          if (result_1 !== void 0) {
            return result_1;
          }
        }
      }
      return policies.readField(options, context);
    };
    var fieldNodeSet = new Set();
    this.flattenFields(selectionSet, result2, context, typename).forEach(function(context2, field) {
      var _a6;
      var resultFieldKey = resultKeyNameFromField(field);
      var value = result2[resultFieldKey];
      fieldNodeSet.add(field);
      if (value !== void 0) {
        var storeFieldName = policies.getStoreFieldName({
          typename,
          fieldName: field.name.value,
          field,
          variables: context2.variables
        });
        var childTree = getChildMergeTree(mergeTree, storeFieldName);
        var incomingValue = _this.processFieldValue(value, field, field.selectionSet ? getContextFlavor(context2, false, false) : context2, childTree);
        var childTypename = void 0;
        if (field.selectionSet && (isReference(incomingValue) || storeValueIsStoreObject(incomingValue))) {
          childTypename = readField("__typename", incomingValue);
        }
        var merge = policies.getMergeFunction(typename, field.name.value, childTypename);
        if (merge) {
          childTree.info = {
            field,
            typename,
            merge
          };
        } else {
          maybeRecycleChildMergeTree(mergeTree, storeFieldName);
        }
        incoming = context2.merge(incoming, (_a6 = {}, _a6[storeFieldName] = incomingValue, _a6));
      } else if (__DEV__ && !context2.clientOnly && !context2.deferred && !addTypenameToDocument.added(field) && !policies.getReadFunction(typename, field.name.value)) {
        __DEV__ && invariant.error("Missing field '".concat(resultKeyNameFromField(field), "' while writing result ").concat(JSON.stringify(result2, null, 2)).substring(0, 1e3));
      }
    });
    try {
      var _b = policies.identify(result2, {
        typename,
        selectionSet,
        fragmentMap: context.fragmentMap,
        storeObject: incoming,
        readField
      }), id = _b[0], keyObject = _b[1];
      dataId = dataId || id;
      if (keyObject) {
        incoming = context.merge(incoming, keyObject);
      }
    } catch (e) {
      if (!dataId)
        throw e;
    }
    if (typeof dataId === "string") {
      var dataRef = makeReference(dataId);
      var sets = context.written[dataId] || (context.written[dataId] = []);
      if (sets.indexOf(selectionSet) >= 0)
        return dataRef;
      sets.push(selectionSet);
      if (this.reader && this.reader.isFresh(result2, dataRef, selectionSet, context)) {
        return dataRef;
      }
      var previous_1 = context.incomingById.get(dataId);
      if (previous_1) {
        previous_1.storeObject = context.merge(previous_1.storeObject, incoming);
        previous_1.mergeTree = mergeMergeTrees(previous_1.mergeTree, mergeTree);
        fieldNodeSet.forEach(function(field) {
          return previous_1.fieldNodeSet.add(field);
        });
      } else {
        context.incomingById.set(dataId, {
          storeObject: incoming,
          mergeTree: mergeTreeIsEmpty(mergeTree) ? void 0 : mergeTree,
          fieldNodeSet
        });
      }
      return dataRef;
    }
    return incoming;
  };
  StoreWriter2.prototype.processFieldValue = function(value, field, context, mergeTree) {
    var _this = this;
    if (!field.selectionSet || value === null) {
      return __DEV__ ? cloneDeep(value) : value;
    }
    if (Array.isArray(value)) {
      return value.map(function(item, i) {
        var value2 = _this.processFieldValue(item, field, context, getChildMergeTree(mergeTree, i));
        maybeRecycleChildMergeTree(mergeTree, i);
        return value2;
      });
    }
    return this.processSelectionSet({
      result: value,
      selectionSet: field.selectionSet,
      context,
      mergeTree
    });
  };
  StoreWriter2.prototype.flattenFields = function(selectionSet, result2, context, typename) {
    if (typename === void 0) {
      typename = getTypenameFromResult(result2, selectionSet, context.fragmentMap);
    }
    var fieldMap = new Map();
    var policies = this.cache.policies;
    var limitingTrie = new Trie(false);
    (function flatten(selectionSet2, inheritedContext) {
      var visitedNode = limitingTrie.lookup(selectionSet2, inheritedContext.clientOnly, inheritedContext.deferred);
      if (visitedNode.visited)
        return;
      visitedNode.visited = true;
      selectionSet2.selections.forEach(function(selection) {
        if (!shouldInclude(selection, context.variables))
          return;
        var clientOnly = inheritedContext.clientOnly, deferred = inheritedContext.deferred;
        if (!(clientOnly && deferred) && isNonEmptyArray(selection.directives)) {
          selection.directives.forEach(function(dir) {
            var name = dir.name.value;
            if (name === "client")
              clientOnly = true;
            if (name === "defer") {
              var args = argumentsObjectFromField(dir, context.variables);
              if (!args || args.if !== false) {
                deferred = true;
              }
            }
          });
        }
        if (isField(selection)) {
          var existing = fieldMap.get(selection);
          if (existing) {
            clientOnly = clientOnly && existing.clientOnly;
            deferred = deferred && existing.deferred;
          }
          fieldMap.set(selection, getContextFlavor(context, clientOnly, deferred));
        } else {
          var fragment = getFragmentFromSelection(selection, context.fragmentMap);
          if (fragment && policies.fragmentMatches(fragment, typename, result2, context.variables)) {
            flatten(fragment.selectionSet, getContextFlavor(context, clientOnly, deferred));
          }
        }
      });
    })(selectionSet, context);
    return fieldMap;
  };
  StoreWriter2.prototype.applyMerges = function(mergeTree, existing, incoming, context, getStorageArgs) {
    var _a5;
    var _this = this;
    if (mergeTree.map.size && !isReference(incoming)) {
      var e_1 = !Array.isArray(incoming) && (isReference(existing) || storeValueIsStoreObject(existing)) ? existing : void 0;
      var i_1 = incoming;
      if (e_1 && !getStorageArgs) {
        getStorageArgs = [isReference(e_1) ? e_1.__ref : e_1];
      }
      var changedFields_1;
      var getValue_1 = function(from2, name) {
        return Array.isArray(from2) ? typeof name === "number" ? from2[name] : void 0 : context.store.getFieldValue(from2, String(name));
      };
      mergeTree.map.forEach(function(childTree, storeFieldName) {
        var eVal = getValue_1(e_1, storeFieldName);
        var iVal = getValue_1(i_1, storeFieldName);
        if (iVal === void 0)
          return;
        if (getStorageArgs) {
          getStorageArgs.push(storeFieldName);
        }
        var aVal = _this.applyMerges(childTree, eVal, iVal, context, getStorageArgs);
        if (aVal !== iVal) {
          changedFields_1 = changedFields_1 || new Map();
          changedFields_1.set(storeFieldName, aVal);
        }
        if (getStorageArgs) {
          invariant(getStorageArgs.pop() === storeFieldName);
        }
      });
      if (changedFields_1) {
        incoming = Array.isArray(i_1) ? i_1.slice(0) : __assign2({}, i_1);
        changedFields_1.forEach(function(value, name) {
          incoming[name] = value;
        });
      }
    }
    if (mergeTree.info) {
      return this.cache.policies.runMergeFunction(existing, incoming, mergeTree.info, context, getStorageArgs && (_a5 = context.store).getStorage.apply(_a5, getStorageArgs));
    }
    return incoming;
  };
  return StoreWriter2;
}();
var emptyMergeTreePool = [];
function getChildMergeTree(_a5, name) {
  var map = _a5.map;
  if (!map.has(name)) {
    map.set(name, emptyMergeTreePool.pop() || { map: new Map() });
  }
  return map.get(name);
}
function mergeMergeTrees(left, right) {
  if (left === right || !right || mergeTreeIsEmpty(right))
    return left;
  if (!left || mergeTreeIsEmpty(left))
    return right;
  var info = left.info && right.info ? __assign2(__assign2({}, left.info), right.info) : left.info || right.info;
  var needToMergeMaps = left.map.size && right.map.size;
  var map = needToMergeMaps ? new Map() : left.map.size ? left.map : right.map;
  var merged = { info, map };
  if (needToMergeMaps) {
    var remainingRightKeys_1 = new Set(right.map.keys());
    left.map.forEach(function(leftTree, key) {
      merged.map.set(key, mergeMergeTrees(leftTree, right.map.get(key)));
      remainingRightKeys_1.delete(key);
    });
    remainingRightKeys_1.forEach(function(key) {
      merged.map.set(key, mergeMergeTrees(right.map.get(key), left.map.get(key)));
    });
  }
  return merged;
}
function mergeTreeIsEmpty(tree) {
  return !tree || !(tree.info || tree.map.size);
}
function maybeRecycleChildMergeTree(_a5, name) {
  var map = _a5.map;
  var childTree = map.get(name);
  if (childTree && mergeTreeIsEmpty(childTree)) {
    emptyMergeTreePool.push(childTree);
    map.delete(name);
  }
}
var warnings = new Set();
function warnAboutDataLoss(existingRef, incomingObj, storeFieldName, store) {
  var getChild = function(objOrRef) {
    var child = store.getFieldValue(objOrRef, storeFieldName);
    return typeof child === "object" && child;
  };
  var existing = getChild(existingRef);
  if (!existing)
    return;
  var incoming = getChild(incomingObj);
  if (!incoming)
    return;
  if (isReference(existing))
    return;
  if (equal(existing, incoming))
    return;
  if (Object.keys(existing).every(function(key) {
    return store.getFieldValue(incoming, key) !== void 0;
  })) {
    return;
  }
  var parentType = store.getFieldValue(existingRef, "__typename") || store.getFieldValue(incomingObj, "__typename");
  var fieldName = fieldNameFromStoreName(storeFieldName);
  var typeDotName = "".concat(parentType, ".").concat(fieldName);
  if (warnings.has(typeDotName))
    return;
  warnings.add(typeDotName);
  var childTypenames = [];
  if (!Array.isArray(existing) && !Array.isArray(incoming)) {
    [existing, incoming].forEach(function(child) {
      var typename = store.getFieldValue(child, "__typename");
      if (typeof typename === "string" && !childTypenames.includes(typename)) {
        childTypenames.push(typename);
      }
    });
  }
  __DEV__ && invariant.warn("Cache data may be lost when replacing the ".concat(fieldName, " field of a ").concat(parentType, " object.\n\nTo address this problem (which is not a bug in Apollo Client), ").concat(childTypenames.length ? "either ensure all objects of type " + childTypenames.join(" and ") + " have an ID or a custom merge function, or " : "", "define a custom merge function for the ").concat(typeDotName, " field, so InMemoryCache can safely merge these objects:\n\n  existing: ").concat(JSON.stringify(existing).slice(0, 1e3), "\n  incoming: ").concat(JSON.stringify(incoming).slice(0, 1e3), "\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n"));
}

// node_modules/@apollo/client/cache/inmemory/inMemoryCache.js
var InMemoryCache = function(_super) {
  __extends(InMemoryCache2, _super);
  function InMemoryCache2(config) {
    if (config === void 0) {
      config = {};
    }
    var _this = _super.call(this) || this;
    _this.watches = new Set();
    _this.typenameDocumentCache = new Map();
    _this.makeVar = makeVar;
    _this.txCount = 0;
    _this.config = normalizeConfig(config);
    _this.addTypename = !!_this.config.addTypename;
    _this.policies = new Policies({
      cache: _this,
      dataIdFromObject: _this.config.dataIdFromObject,
      possibleTypes: _this.config.possibleTypes,
      typePolicies: _this.config.typePolicies
    });
    _this.init();
    return _this;
  }
  InMemoryCache2.prototype.init = function() {
    var rootStore = this.data = new EntityStore.Root({
      policies: this.policies,
      resultCaching: this.config.resultCaching
    });
    this.optimisticData = rootStore.stump;
    this.resetResultCache();
  };
  InMemoryCache2.prototype.resetResultCache = function(resetResultIdentities) {
    var _this = this;
    var previousReader = this.storeReader;
    this.storeWriter = new StoreWriter(this, this.storeReader = new StoreReader({
      cache: this,
      addTypename: this.addTypename,
      resultCacheMaxSize: this.config.resultCacheMaxSize,
      canonizeResults: shouldCanonizeResults(this.config),
      canon: resetResultIdentities ? void 0 : previousReader && previousReader.canon
    }));
    this.maybeBroadcastWatch = wrap2(function(c, options) {
      return _this.broadcastWatch(c, options);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(c) {
        var store = c.optimistic ? _this.optimisticData : _this.data;
        if (supportsResultCaching(store)) {
          var optimistic = c.optimistic, rootId = c.rootId, variables = c.variables;
          return store.makeCacheKey(c.query, c.callback, canonicalStringify({ optimistic, rootId, variables }));
        }
      }
    });
    new Set([
      this.data.group,
      this.optimisticData.group
    ]).forEach(function(group) {
      return group.resetCaching();
    });
  };
  InMemoryCache2.prototype.restore = function(data) {
    this.init();
    if (data)
      this.data.replace(data);
    return this;
  };
  InMemoryCache2.prototype.extract = function(optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }
    return (optimistic ? this.optimisticData : this.data).extract();
  };
  InMemoryCache2.prototype.read = function(options) {
    var _a5 = options.returnPartialData, returnPartialData = _a5 === void 0 ? false : _a5;
    try {
      return this.storeReader.diffQueryAgainstStore(__assign2(__assign2({}, options), { store: options.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData })).result || null;
    } catch (e) {
      if (e instanceof MissingFieldError) {
        return null;
      }
      throw e;
    }
  };
  InMemoryCache2.prototype.write = function(options) {
    try {
      ++this.txCount;
      return this.storeWriter.writeToStore(this.data, options);
    } finally {
      if (!--this.txCount && options.broadcast !== false) {
        this.broadcastWatches();
      }
    }
  };
  InMemoryCache2.prototype.modify = function(options) {
    if (hasOwn.call(options, "id") && !options.id) {
      return false;
    }
    var store = options.optimistic ? this.optimisticData : this.data;
    try {
      ++this.txCount;
      return store.modify(options.id || "ROOT_QUERY", options.fields);
    } finally {
      if (!--this.txCount && options.broadcast !== false) {
        this.broadcastWatches();
      }
    }
  };
  InMemoryCache2.prototype.diff = function(options) {
    return this.storeReader.diffQueryAgainstStore(__assign2(__assign2({}, options), { store: options.optimistic ? this.optimisticData : this.data, rootId: options.id || "ROOT_QUERY", config: this.config }));
  };
  InMemoryCache2.prototype.watch = function(watch) {
    var _this = this;
    if (!this.watches.size) {
      recallCache(this);
    }
    this.watches.add(watch);
    if (watch.immediate) {
      this.maybeBroadcastWatch(watch);
    }
    return function() {
      if (_this.watches.delete(watch) && !_this.watches.size) {
        forgetCache(_this);
      }
      _this.maybeBroadcastWatch.forget(watch);
    };
  };
  InMemoryCache2.prototype.gc = function(options) {
    canonicalStringify.reset();
    var ids = this.optimisticData.gc();
    if (options && !this.txCount) {
      if (options.resetResultCache) {
        this.resetResultCache(options.resetResultIdentities);
      } else if (options.resetResultIdentities) {
        this.storeReader.resetCanon();
      }
    }
    return ids;
  };
  InMemoryCache2.prototype.retain = function(rootId, optimistic) {
    return (optimistic ? this.optimisticData : this.data).retain(rootId);
  };
  InMemoryCache2.prototype.release = function(rootId, optimistic) {
    return (optimistic ? this.optimisticData : this.data).release(rootId);
  };
  InMemoryCache2.prototype.identify = function(object) {
    if (isReference(object))
      return object.__ref;
    try {
      return this.policies.identify(object)[0];
    } catch (e) {
      __DEV__ && invariant.warn(e);
    }
  };
  InMemoryCache2.prototype.evict = function(options) {
    if (!options.id) {
      if (hasOwn.call(options, "id")) {
        return false;
      }
      options = __assign2(__assign2({}, options), { id: "ROOT_QUERY" });
    }
    try {
      ++this.txCount;
      return this.optimisticData.evict(options, this.data);
    } finally {
      if (!--this.txCount && options.broadcast !== false) {
        this.broadcastWatches();
      }
    }
  };
  InMemoryCache2.prototype.reset = function(options) {
    var _this = this;
    this.init();
    canonicalStringify.reset();
    if (options && options.discardWatches) {
      this.watches.forEach(function(watch) {
        return _this.maybeBroadcastWatch.forget(watch);
      });
      this.watches.clear();
      forgetCache(this);
    } else {
      this.broadcastWatches();
    }
    return Promise.resolve();
  };
  InMemoryCache2.prototype.removeOptimistic = function(idToRemove) {
    var newOptimisticData = this.optimisticData.removeLayer(idToRemove);
    if (newOptimisticData !== this.optimisticData) {
      this.optimisticData = newOptimisticData;
      this.broadcastWatches();
    }
  };
  InMemoryCache2.prototype.batch = function(options) {
    var _this = this;
    var update = options.update, _a5 = options.optimistic, optimistic = _a5 === void 0 ? true : _a5, removeOptimistic = options.removeOptimistic, onWatchUpdated = options.onWatchUpdated;
    var updateResult;
    var perform = function(layer) {
      var _a6 = _this, data = _a6.data, optimisticData = _a6.optimisticData;
      ++_this.txCount;
      if (layer) {
        _this.data = _this.optimisticData = layer;
      }
      try {
        return updateResult = update(_this);
      } finally {
        --_this.txCount;
        _this.data = data;
        _this.optimisticData = optimisticData;
      }
    };
    var alreadyDirty = new Set();
    if (onWatchUpdated && !this.txCount) {
      this.broadcastWatches(__assign2(__assign2({}, options), { onWatchUpdated: function(watch) {
        alreadyDirty.add(watch);
        return false;
      } }));
    }
    if (typeof optimistic === "string") {
      this.optimisticData = this.optimisticData.addLayer(optimistic, perform);
    } else if (optimistic === false) {
      perform(this.data);
    } else {
      perform();
    }
    if (typeof removeOptimistic === "string") {
      this.optimisticData = this.optimisticData.removeLayer(removeOptimistic);
    }
    if (onWatchUpdated && alreadyDirty.size) {
      this.broadcastWatches(__assign2(__assign2({}, options), { onWatchUpdated: function(watch, diff) {
        var result2 = onWatchUpdated.call(this, watch, diff);
        if (result2 !== false) {
          alreadyDirty.delete(watch);
        }
        return result2;
      } }));
      if (alreadyDirty.size) {
        alreadyDirty.forEach(function(watch) {
          return _this.maybeBroadcastWatch.dirty(watch);
        });
      }
    } else {
      this.broadcastWatches(options);
    }
    return updateResult;
  };
  InMemoryCache2.prototype.performTransaction = function(update, optimisticId) {
    return this.batch({
      update,
      optimistic: optimisticId || optimisticId !== null
    });
  };
  InMemoryCache2.prototype.transformDocument = function(document2) {
    if (this.addTypename) {
      var result2 = this.typenameDocumentCache.get(document2);
      if (!result2) {
        result2 = addTypenameToDocument(document2);
        this.typenameDocumentCache.set(document2, result2);
        this.typenameDocumentCache.set(result2, result2);
      }
      return result2;
    }
    return document2;
  };
  InMemoryCache2.prototype.broadcastWatches = function(options) {
    var _this = this;
    if (!this.txCount) {
      this.watches.forEach(function(c) {
        return _this.maybeBroadcastWatch(c, options);
      });
    }
  };
  InMemoryCache2.prototype.broadcastWatch = function(c, options) {
    var lastDiff = c.lastDiff;
    var diff = this.diff(c);
    if (options) {
      if (c.optimistic && typeof options.optimistic === "string") {
        diff.fromOptimisticTransaction = true;
      }
      if (options.onWatchUpdated && options.onWatchUpdated.call(this, c, diff, lastDiff) === false) {
        return;
      }
    }
    if (!lastDiff || !equal(lastDiff.result, diff.result)) {
      c.callback(c.lastDiff = diff, lastDiff);
    }
  };
  return InMemoryCache2;
}(ApolloCache);

// node_modules/@apollo/client/errors/index.js
init_react();
function isApolloError(err) {
  return err.hasOwnProperty("graphQLErrors");
}
var generateErrorMessage = function(err) {
  var message = "";
  if (isNonEmptyArray(err.graphQLErrors) || isNonEmptyArray(err.clientErrors)) {
    var errors = (err.graphQLErrors || []).concat(err.clientErrors || []);
    errors.forEach(function(error) {
      var errorMessage = error ? error.message : "Error message not found.";
      message += "".concat(errorMessage, "\n");
    });
  }
  if (err.networkError) {
    message += "".concat(err.networkError.message, "\n");
  }
  message = message.replace(/\n$/, "");
  return message;
};
var ApolloError = function(_super) {
  __extends(ApolloError2, _super);
  function ApolloError2(_a5) {
    var graphQLErrors = _a5.graphQLErrors, clientErrors = _a5.clientErrors, networkError = _a5.networkError, errorMessage = _a5.errorMessage, extraInfo = _a5.extraInfo;
    var _this = _super.call(this, errorMessage) || this;
    _this.graphQLErrors = graphQLErrors || [];
    _this.clientErrors = clientErrors || [];
    _this.networkError = networkError || null;
    _this.message = errorMessage || generateErrorMessage(_this);
    _this.extraInfo = extraInfo;
    _this.__proto__ = ApolloError2.prototype;
    return _this;
  }
  return ApolloError2;
}(Error);

// node_modules/@apollo/client/core/ObservableQuery.js
init_react();

// node_modules/@apollo/client/core/networkStatus.js
init_react();
var NetworkStatus;
(function(NetworkStatus2) {
  NetworkStatus2[NetworkStatus2["loading"] = 1] = "loading";
  NetworkStatus2[NetworkStatus2["setVariables"] = 2] = "setVariables";
  NetworkStatus2[NetworkStatus2["fetchMore"] = 3] = "fetchMore";
  NetworkStatus2[NetworkStatus2["refetch"] = 4] = "refetch";
  NetworkStatus2[NetworkStatus2["poll"] = 6] = "poll";
  NetworkStatus2[NetworkStatus2["ready"] = 7] = "ready";
  NetworkStatus2[NetworkStatus2["error"] = 8] = "error";
})(NetworkStatus || (NetworkStatus = {}));
function isNetworkRequestInFlight(networkStatus) {
  return networkStatus ? networkStatus < 7 : false;
}

// node_modules/@apollo/client/core/ObservableQuery.js
var assign = Object.assign;
var hasOwnProperty5 = Object.hasOwnProperty;
var warnedAboutUpdateQuery = false;
var ObservableQuery = function(_super) {
  __extends(ObservableQuery2, _super);
  function ObservableQuery2(_a5) {
    var queryManager = _a5.queryManager, queryInfo = _a5.queryInfo, options = _a5.options;
    var _this = _super.call(this, function(observer) {
      try {
        var subObserver = observer._subscription._observer;
        if (subObserver && !subObserver.error) {
          subObserver.error = defaultSubscriptionObserverErrorCallback;
        }
      } catch (_a6) {
      }
      var first = !_this.observers.size;
      _this.observers.add(observer);
      var last = _this.last;
      if (last && last.error) {
        observer.error && observer.error(last.error);
      } else if (last && last.result) {
        observer.next && observer.next(last.result);
      }
      if (first) {
        _this.reobserve().catch(function() {
        });
      }
      return function() {
        if (_this.observers.delete(observer) && !_this.observers.size) {
          _this.tearDownQuery();
        }
      };
    }) || this;
    _this.observers = new Set();
    _this.subscriptions = new Set();
    _this.isTornDown = false;
    _this.options = options;
    _this.queryId = queryInfo.queryId || queryManager.generateQueryId();
    var opDef = getOperationDefinition(options.query);
    _this.queryName = opDef && opDef.name && opDef.name.value;
    _this.initialFetchPolicy = options.fetchPolicy || "cache-first";
    _this.queryManager = queryManager;
    _this.queryInfo = queryInfo;
    return _this;
  }
  Object.defineProperty(ObservableQuery2.prototype, "variables", {
    get: function() {
      return this.options.variables;
    },
    enumerable: false,
    configurable: true
  });
  ObservableQuery2.prototype.result = function() {
    var _this = this;
    return new Promise(function(resolve, reject) {
      var observer = {
        next: function(result2) {
          resolve(result2);
          _this.observers.delete(observer);
          if (!_this.observers.size) {
            _this.queryManager.removeQuery(_this.queryId);
          }
          setTimeout(function() {
            subscription.unsubscribe();
          }, 0);
        },
        error: reject
      };
      var subscription = _this.subscribe(observer);
    });
  };
  ObservableQuery2.prototype.getCurrentResult = function(saveAsLastResult) {
    if (saveAsLastResult === void 0) {
      saveAsLastResult = true;
    }
    var lastResult = this.getLastResult(true);
    var networkStatus = this.queryInfo.networkStatus || lastResult && lastResult.networkStatus || NetworkStatus.ready;
    var result2 = __assign2(__assign2({}, lastResult), { loading: isNetworkRequestInFlight(networkStatus), networkStatus });
    var _a5 = this.options.fetchPolicy, fetchPolicy = _a5 === void 0 ? "cache-first" : _a5;
    if (fetchPolicy === "network-only" || fetchPolicy === "no-cache" || fetchPolicy === "standby" || this.queryManager.transform(this.options.query).hasForcedResolvers) {
    } else {
      var diff = this.queryInfo.getDiff();
      if (diff.complete || this.options.returnPartialData) {
        result2.data = diff.result;
      }
      if (equal(result2.data, {})) {
        result2.data = void 0;
      }
      if (diff.complete) {
        delete result2.partial;
        if (diff.complete && result2.networkStatus === NetworkStatus.loading && (fetchPolicy === "cache-first" || fetchPolicy === "cache-only")) {
          result2.networkStatus = NetworkStatus.ready;
          result2.loading = false;
        }
      } else {
        result2.partial = true;
      }
      if (__DEV__ && !diff.complete && !this.options.partialRefetch && !result2.loading && !result2.data && !result2.error) {
        logMissingFieldErrors(diff.missing);
      }
    }
    if (saveAsLastResult) {
      this.updateLastResult(result2);
    }
    return result2;
  };
  ObservableQuery2.prototype.isDifferentFromLastResult = function(newResult) {
    return !this.last || !equal(this.last.result, newResult);
  };
  ObservableQuery2.prototype.getLast = function(key, variablesMustMatch) {
    var last = this.last;
    if (last && last[key] && (!variablesMustMatch || equal(last.variables, this.variables))) {
      return last[key];
    }
  };
  ObservableQuery2.prototype.getLastResult = function(variablesMustMatch) {
    return this.getLast("result", variablesMustMatch);
  };
  ObservableQuery2.prototype.getLastError = function(variablesMustMatch) {
    return this.getLast("error", variablesMustMatch);
  };
  ObservableQuery2.prototype.resetLastResults = function() {
    delete this.last;
    this.isTornDown = false;
  };
  ObservableQuery2.prototype.resetQueryStoreErrors = function() {
    this.queryManager.resetErrors(this.queryId);
  };
  ObservableQuery2.prototype.refetch = function(variables) {
    var _a5;
    var reobserveOptions = {
      pollInterval: 0
    };
    var fetchPolicy = this.options.fetchPolicy;
    if (fetchPolicy === "standby" || fetchPolicy === "cache-and-network") {
      reobserveOptions.fetchPolicy = fetchPolicy;
    } else if (fetchPolicy === "no-cache") {
      reobserveOptions.fetchPolicy = "no-cache";
    } else {
      reobserveOptions.fetchPolicy = "network-only";
    }
    if (__DEV__ && variables && hasOwnProperty5.call(variables, "variables")) {
      var queryDef = getQueryDefinition(this.options.query);
      var vars = queryDef.variableDefinitions;
      if (!vars || !vars.some(function(v) {
        return v.variable.name.value === "variables";
      })) {
        __DEV__ && invariant.warn("Called refetch(".concat(JSON.stringify(variables), ") for query ").concat(((_a5 = queryDef.name) === null || _a5 === void 0 ? void 0 : _a5.value) || JSON.stringify(queryDef), ", which does not declare a $variables variable.\nDid you mean to call refetch(variables) instead of refetch({ variables })?"));
      }
    }
    if (variables && !equal(this.options.variables, variables)) {
      reobserveOptions.variables = this.options.variables = __assign2(__assign2({}, this.options.variables), variables);
    }
    this.queryInfo.resetLastWrite();
    return this.reobserve(reobserveOptions, NetworkStatus.refetch);
  };
  ObservableQuery2.prototype.fetchMore = function(fetchMoreOptions) {
    var _this = this;
    var combinedOptions = __assign2(__assign2({}, fetchMoreOptions.query ? fetchMoreOptions : __assign2(__assign2(__assign2({}, this.options), fetchMoreOptions), { variables: __assign2(__assign2({}, this.options.variables), fetchMoreOptions.variables) })), { fetchPolicy: "no-cache" });
    var qid = this.queryManager.generateQueryId();
    if (combinedOptions.notifyOnNetworkStatusChange) {
      this.queryInfo.networkStatus = NetworkStatus.fetchMore;
      this.observe();
    }
    return this.queryManager.fetchQuery(qid, combinedOptions, NetworkStatus.fetchMore).then(function(fetchMoreResult) {
      var data = fetchMoreResult.data;
      var updateQuery = fetchMoreOptions.updateQuery;
      if (updateQuery) {
        if (__DEV__ && !warnedAboutUpdateQuery) {
          __DEV__ && invariant.warn("The updateQuery callback for fetchMore is deprecated, and will be removed\nin the next major version of Apollo Client.\n\nPlease convert updateQuery functions to field policies with appropriate\nread and merge functions, or use/adapt a helper function (such as\nconcatPagination, offsetLimitPagination, or relayStylePagination) from\n@apollo/client/utilities.\n\nThe field policy system handles pagination more effectively than a\nhand-written updateQuery function, and you only need to define the policy\nonce, rather than every time you call fetchMore.");
          warnedAboutUpdateQuery = true;
        }
        _this.updateQuery(function(previous) {
          return updateQuery(previous, {
            fetchMoreResult: data,
            variables: combinedOptions.variables
          });
        });
      } else {
        _this.queryManager.cache.writeQuery({
          query: combinedOptions.query,
          variables: combinedOptions.variables,
          data
        });
      }
      return fetchMoreResult;
    }).finally(function() {
      _this.queryManager.stopQuery(qid);
      _this.reobserve();
    });
  };
  ObservableQuery2.prototype.subscribeToMore = function(options) {
    var _this = this;
    var subscription = this.queryManager.startGraphQLSubscription({
      query: options.document,
      variables: options.variables,
      context: options.context
    }).subscribe({
      next: function(subscriptionData) {
        var updateQuery = options.updateQuery;
        if (updateQuery) {
          _this.updateQuery(function(previous, _a5) {
            var variables = _a5.variables;
            return updateQuery(previous, {
              subscriptionData,
              variables
            });
          });
        }
      },
      error: function(err) {
        if (options.onError) {
          options.onError(err);
          return;
        }
        __DEV__ && invariant.error("Unhandled GraphQL subscription error", err);
      }
    });
    this.subscriptions.add(subscription);
    return function() {
      if (_this.subscriptions.delete(subscription)) {
        subscription.unsubscribe();
      }
    };
  };
  ObservableQuery2.prototype.setOptions = function(newOptions) {
    return this.reobserve(newOptions);
  };
  ObservableQuery2.prototype.setVariables = function(variables) {
    if (equal(this.variables, variables)) {
      return this.observers.size ? this.result() : Promise.resolve();
    }
    this.options.variables = variables;
    if (!this.observers.size) {
      return Promise.resolve();
    }
    return this.reobserve({
      fetchPolicy: this.initialFetchPolicy,
      variables
    }, NetworkStatus.setVariables);
  };
  ObservableQuery2.prototype.updateQuery = function(mapFn) {
    var queryManager = this.queryManager;
    var result2 = queryManager.cache.diff({
      query: this.options.query,
      variables: this.variables,
      returnPartialData: true,
      optimistic: false
    }).result;
    var newResult = mapFn(result2, {
      variables: this.variables
    });
    if (newResult) {
      queryManager.cache.writeQuery({
        query: this.options.query,
        data: newResult,
        variables: this.variables
      });
      queryManager.broadcastQueries();
    }
  };
  ObservableQuery2.prototype.startPolling = function(pollInterval) {
    this.options.pollInterval = pollInterval;
    this.updatePolling();
  };
  ObservableQuery2.prototype.stopPolling = function() {
    this.options.pollInterval = 0;
    this.updatePolling();
  };
  ObservableQuery2.prototype.fetch = function(options, newNetworkStatus) {
    this.queryManager.setObservableQuery(this);
    return this.queryManager.fetchQueryObservable(this.queryId, options, newNetworkStatus);
  };
  ObservableQuery2.prototype.updatePolling = function() {
    var _this = this;
    if (this.queryManager.ssrMode) {
      return;
    }
    var _a5 = this, pollingInfo = _a5.pollingInfo, pollInterval = _a5.options.pollInterval;
    if (!pollInterval) {
      if (pollingInfo) {
        clearTimeout(pollingInfo.timeout);
        delete this.pollingInfo;
      }
      return;
    }
    if (pollingInfo && pollingInfo.interval === pollInterval) {
      return;
    }
    __DEV__ ? invariant(pollInterval, "Attempted to start a polling query without a polling interval.") : invariant(pollInterval, 10);
    var info = pollingInfo || (this.pollingInfo = {});
    info.interval = pollInterval;
    var maybeFetch = function() {
      if (_this.pollingInfo) {
        if (!isNetworkRequestInFlight(_this.queryInfo.networkStatus)) {
          _this.reobserve({
            fetchPolicy: "network-only"
          }, NetworkStatus.poll).then(poll, poll);
        } else {
          poll();
        }
      }
      ;
    };
    var poll = function() {
      var info2 = _this.pollingInfo;
      if (info2) {
        clearTimeout(info2.timeout);
        info2.timeout = setTimeout(maybeFetch, info2.interval);
      }
    };
    poll();
  };
  ObservableQuery2.prototype.updateLastResult = function(newResult, variables) {
    if (variables === void 0) {
      variables = this.variables;
    }
    this.last = __assign2(__assign2({}, this.last), { result: this.queryManager.assumeImmutableResults ? newResult : cloneDeep(newResult), variables });
    if (!isNonEmptyArray(newResult.errors)) {
      delete this.last.error;
    }
    return this.last;
  };
  ObservableQuery2.prototype.reobserve = function(newOptions, newNetworkStatus) {
    var _this = this;
    this.isTornDown = false;
    var useDisposableConcast = newNetworkStatus === NetworkStatus.refetch || newNetworkStatus === NetworkStatus.fetchMore || newNetworkStatus === NetworkStatus.poll;
    var oldVariables = this.options.variables;
    var options = useDisposableConcast ? compact(this.options, newOptions) : assign(this.options, compact(newOptions));
    if (!useDisposableConcast) {
      this.updatePolling();
      if (newOptions && newOptions.variables && !newOptions.fetchPolicy && !equal(newOptions.variables, oldVariables)) {
        options.fetchPolicy = this.initialFetchPolicy;
        if (newNetworkStatus === void 0) {
          newNetworkStatus = NetworkStatus.setVariables;
        }
      }
    }
    var variables = options.variables && __assign2({}, options.variables);
    var concast = this.fetch(options, newNetworkStatus);
    var observer = {
      next: function(result2) {
        _this.reportResult(result2, variables);
      },
      error: function(error) {
        _this.reportError(error, variables);
      }
    };
    if (!useDisposableConcast) {
      if (this.concast && this.observer) {
        this.concast.removeObserver(this.observer, true);
      }
      this.concast = concast;
      this.observer = observer;
    }
    concast.addObserver(observer);
    return concast.promise;
  };
  ObservableQuery2.prototype.observe = function() {
    this.reportResult(this.getCurrentResult(false), this.variables);
  };
  ObservableQuery2.prototype.reportResult = function(result2, variables) {
    if (this.getLastError() || this.isDifferentFromLastResult(result2)) {
      this.updateLastResult(result2, variables);
      iterateObserversSafely(this.observers, "next", result2);
    }
  };
  ObservableQuery2.prototype.reportError = function(error, variables) {
    var errorResult = __assign2(__assign2({}, this.getLastResult()), { error, errors: error.graphQLErrors, networkStatus: NetworkStatus.error, loading: false });
    this.updateLastResult(errorResult, variables);
    iterateObserversSafely(this.observers, "error", this.last.error = error);
  };
  ObservableQuery2.prototype.hasObservers = function() {
    return this.observers.size > 0;
  };
  ObservableQuery2.prototype.tearDownQuery = function() {
    if (this.isTornDown)
      return;
    if (this.concast && this.observer) {
      this.concast.removeObserver(this.observer);
      delete this.concast;
      delete this.observer;
    }
    this.stopPolling();
    this.subscriptions.forEach(function(sub) {
      return sub.unsubscribe();
    });
    this.subscriptions.clear();
    this.queryManager.stopQuery(this.queryId);
    this.observers.clear();
    this.isTornDown = true;
  };
  return ObservableQuery2;
}(Observable);
fixObservableSubclass(ObservableQuery);
function defaultSubscriptionObserverErrorCallback(error) {
  __DEV__ && invariant.error("Unhandled error", error.message, error.stack);
}
function logMissingFieldErrors(missing) {
  if (__DEV__ && missing) {
    __DEV__ && invariant.debug("Missing cache result fields: ".concat(JSON.stringify(missing)), missing);
  }
}
function applyNextFetchPolicy(options) {
  var _a5 = options.fetchPolicy, fetchPolicy = _a5 === void 0 ? "cache-first" : _a5, nextFetchPolicy = options.nextFetchPolicy;
  if (nextFetchPolicy) {
    options.fetchPolicy = typeof nextFetchPolicy === "function" ? nextFetchPolicy.call(options, fetchPolicy) : nextFetchPolicy;
  }
}

// node_modules/@apollo/client/core/LocalState.js
init_react();
var LocalState = function() {
  function LocalState2(_a5) {
    var cache = _a5.cache, client = _a5.client, resolvers = _a5.resolvers, fragmentMatcher = _a5.fragmentMatcher;
    this.cache = cache;
    if (client) {
      this.client = client;
    }
    if (resolvers) {
      this.addResolvers(resolvers);
    }
    if (fragmentMatcher) {
      this.setFragmentMatcher(fragmentMatcher);
    }
  }
  LocalState2.prototype.addResolvers = function(resolvers) {
    var _this = this;
    this.resolvers = this.resolvers || {};
    if (Array.isArray(resolvers)) {
      resolvers.forEach(function(resolverGroup) {
        _this.resolvers = mergeDeep(_this.resolvers, resolverGroup);
      });
    } else {
      this.resolvers = mergeDeep(this.resolvers, resolvers);
    }
  };
  LocalState2.prototype.setResolvers = function(resolvers) {
    this.resolvers = {};
    this.addResolvers(resolvers);
  };
  LocalState2.prototype.getResolvers = function() {
    return this.resolvers || {};
  };
  LocalState2.prototype.runResolvers = function(_a5) {
    var document2 = _a5.document, remoteResult = _a5.remoteResult, context = _a5.context, variables = _a5.variables, _b = _a5.onlyRunForcedResolvers, onlyRunForcedResolvers = _b === void 0 ? false : _b;
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_c) {
        if (document2) {
          return [2, this.resolveDocument(document2, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function(localResult) {
            return __assign2(__assign2({}, remoteResult), { data: localResult.result });
          })];
        }
        return [2, remoteResult];
      });
    });
  };
  LocalState2.prototype.setFragmentMatcher = function(fragmentMatcher) {
    this.fragmentMatcher = fragmentMatcher;
  };
  LocalState2.prototype.getFragmentMatcher = function() {
    return this.fragmentMatcher;
  };
  LocalState2.prototype.clientQuery = function(document2) {
    if (hasDirectives(["client"], document2)) {
      if (this.resolvers) {
        return document2;
      }
    }
    return null;
  };
  LocalState2.prototype.serverQuery = function(document2) {
    return removeClientSetsFromDocument(document2);
  };
  LocalState2.prototype.prepareContext = function(context) {
    var cache = this.cache;
    return __assign2(__assign2({}, context), { cache, getCacheKey: function(obj) {
      return cache.identify(obj);
    } });
  };
  LocalState2.prototype.addExportedVariables = function(document2, variables, context) {
    if (variables === void 0) {
      variables = {};
    }
    if (context === void 0) {
      context = {};
    }
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a5) {
        if (document2) {
          return [2, this.resolveDocument(document2, this.buildRootValueFromCache(document2, variables) || {}, this.prepareContext(context), variables).then(function(data) {
            return __assign2(__assign2({}, variables), data.exportedVariables);
          })];
        }
        return [2, __assign2({}, variables)];
      });
    });
  };
  LocalState2.prototype.shouldForceResolvers = function(document2) {
    var forceResolvers = false;
    visit(document2, {
      Directive: {
        enter: function(node) {
          if (node.name.value === "client" && node.arguments) {
            forceResolvers = node.arguments.some(function(arg) {
              return arg.name.value === "always" && arg.value.kind === "BooleanValue" && arg.value.value === true;
            });
            if (forceResolvers) {
              return BREAK;
            }
          }
        }
      }
    });
    return forceResolvers;
  };
  LocalState2.prototype.buildRootValueFromCache = function(document2, variables) {
    return this.cache.diff({
      query: buildQueryFromSelectionSet(document2),
      variables,
      returnPartialData: true,
      optimistic: false
    }).result;
  };
  LocalState2.prototype.resolveDocument = function(document2, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
    if (context === void 0) {
      context = {};
    }
    if (variables === void 0) {
      variables = {};
    }
    if (fragmentMatcher === void 0) {
      fragmentMatcher = function() {
        return true;
      };
    }
    if (onlyRunForcedResolvers === void 0) {
      onlyRunForcedResolvers = false;
    }
    return __awaiter(this, void 0, void 0, function() {
      var mainDefinition, fragments, fragmentMap, definitionOperation, defaultOperationType, _a5, cache, client, execContext;
      return __generator(this, function(_b) {
        mainDefinition = getMainDefinition(document2);
        fragments = getFragmentDefinitions(document2);
        fragmentMap = createFragmentMap(fragments);
        definitionOperation = mainDefinition.operation;
        defaultOperationType = definitionOperation ? definitionOperation.charAt(0).toUpperCase() + definitionOperation.slice(1) : "Query";
        _a5 = this, cache = _a5.cache, client = _a5.client;
        execContext = {
          fragmentMap,
          context: __assign2(__assign2({}, context), { cache, client }),
          variables,
          fragmentMatcher,
          defaultOperationType,
          exportedVariables: {},
          onlyRunForcedResolvers
        };
        return [2, this.resolveSelectionSet(mainDefinition.selectionSet, rootValue, execContext).then(function(result2) {
          return {
            result: result2,
            exportedVariables: execContext.exportedVariables
          };
        })];
      });
    });
  };
  LocalState2.prototype.resolveSelectionSet = function(selectionSet, rootValue, execContext) {
    return __awaiter(this, void 0, void 0, function() {
      var fragmentMap, context, variables, resultsToMerge, execute2;
      var _this = this;
      return __generator(this, function(_a5) {
        fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
        resultsToMerge = [rootValue];
        execute2 = function(selection) {
          return __awaiter(_this, void 0, void 0, function() {
            var fragment, typeCondition;
            return __generator(this, function(_a6) {
              if (!shouldInclude(selection, variables)) {
                return [2];
              }
              if (isField(selection)) {
                return [2, this.resolveField(selection, rootValue, execContext).then(function(fieldResult) {
                  var _a7;
                  if (typeof fieldResult !== "undefined") {
                    resultsToMerge.push((_a7 = {}, _a7[resultKeyNameFromField(selection)] = fieldResult, _a7));
                  }
                })];
              }
              if (isInlineFragment(selection)) {
                fragment = selection;
              } else {
                fragment = fragmentMap[selection.name.value];
                __DEV__ ? invariant(fragment, "No fragment named ".concat(selection.name.value)) : invariant(fragment, 9);
              }
              if (fragment && fragment.typeCondition) {
                typeCondition = fragment.typeCondition.name.value;
                if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
                  return [2, this.resolveSelectionSet(fragment.selectionSet, rootValue, execContext).then(function(fragmentResult) {
                    resultsToMerge.push(fragmentResult);
                  })];
                }
              }
              return [2];
            });
          });
        };
        return [2, Promise.all(selectionSet.selections.map(execute2)).then(function() {
          return mergeDeepArray(resultsToMerge);
        })];
      });
    });
  };
  LocalState2.prototype.resolveField = function(field, rootValue, execContext) {
    return __awaiter(this, void 0, void 0, function() {
      var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;
      var _this = this;
      return __generator(this, function(_a5) {
        variables = execContext.variables;
        fieldName = field.name.value;
        aliasedFieldName = resultKeyNameFromField(field);
        aliasUsed = fieldName !== aliasedFieldName;
        defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
        resultPromise = Promise.resolve(defaultResult);
        if (!execContext.onlyRunForcedResolvers || this.shouldForceResolvers(field)) {
          resolverType = rootValue.__typename || execContext.defaultOperationType;
          resolverMap = this.resolvers && this.resolvers[resolverType];
          if (resolverMap) {
            resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];
            if (resolve) {
              resultPromise = Promise.resolve(cacheSlot.withValue(this.cache, resolve, [
                rootValue,
                argumentsObjectFromField(field, variables),
                execContext.context,
                { field, fragmentMap: execContext.fragmentMap }
              ]));
            }
          }
        }
        return [2, resultPromise.then(function(result2) {
          if (result2 === void 0) {
            result2 = defaultResult;
          }
          if (field.directives) {
            field.directives.forEach(function(directive) {
              if (directive.name.value === "export" && directive.arguments) {
                directive.arguments.forEach(function(arg) {
                  if (arg.name.value === "as" && arg.value.kind === "StringValue") {
                    execContext.exportedVariables[arg.value.value] = result2;
                  }
                });
              }
            });
          }
          if (!field.selectionSet) {
            return result2;
          }
          if (result2 == null) {
            return result2;
          }
          if (Array.isArray(result2)) {
            return _this.resolveSubSelectedArray(field, result2, execContext);
          }
          if (field.selectionSet) {
            return _this.resolveSelectionSet(field.selectionSet, result2, execContext);
          }
        })];
      });
    });
  };
  LocalState2.prototype.resolveSubSelectedArray = function(field, result2, execContext) {
    var _this = this;
    return Promise.all(result2.map(function(item) {
      if (item === null) {
        return null;
      }
      if (Array.isArray(item)) {
        return _this.resolveSubSelectedArray(field, item, execContext);
      }
      if (field.selectionSet) {
        return _this.resolveSelectionSet(field.selectionSet, item, execContext);
      }
    }));
  };
  return LocalState2;
}();

// node_modules/@apollo/client/core/QueryInfo.js
init_react();
var destructiveMethodCounts = new (canUseWeakMap ? WeakMap : Map)();
function wrapDestructiveCacheMethod(cache, methodName) {
  var original = cache[methodName];
  if (typeof original === "function") {
    cache[methodName] = function() {
      destructiveMethodCounts.set(cache, (destructiveMethodCounts.get(cache) + 1) % 1e15);
      return original.apply(this, arguments);
    };
  }
}
function cancelNotifyTimeout(info) {
  if (info["notifyTimeout"]) {
    clearTimeout(info["notifyTimeout"]);
    info["notifyTimeout"] = void 0;
  }
}
var QueryInfo = function() {
  function QueryInfo2(queryManager, queryId) {
    if (queryId === void 0) {
      queryId = queryManager.generateQueryId();
    }
    this.queryId = queryId;
    this.listeners = new Set();
    this.document = null;
    this.lastRequestId = 1;
    this.subscriptions = new Set();
    this.stopped = false;
    this.dirty = false;
    this.observableQuery = null;
    var cache = this.cache = queryManager.cache;
    if (!destructiveMethodCounts.has(cache)) {
      destructiveMethodCounts.set(cache, 0);
      wrapDestructiveCacheMethod(cache, "evict");
      wrapDestructiveCacheMethod(cache, "modify");
      wrapDestructiveCacheMethod(cache, "reset");
    }
  }
  QueryInfo2.prototype.init = function(query) {
    var networkStatus = query.networkStatus || NetworkStatus.loading;
    if (this.variables && this.networkStatus !== NetworkStatus.loading && !equal(this.variables, query.variables)) {
      networkStatus = NetworkStatus.setVariables;
    }
    if (!equal(query.variables, this.variables)) {
      this.lastDiff = void 0;
    }
    Object.assign(this, {
      document: query.document,
      variables: query.variables,
      networkError: null,
      graphQLErrors: this.graphQLErrors || [],
      networkStatus
    });
    if (query.observableQuery) {
      this.setObservableQuery(query.observableQuery);
    }
    if (query.lastRequestId) {
      this.lastRequestId = query.lastRequestId;
    }
    return this;
  };
  QueryInfo2.prototype.reset = function() {
    cancelNotifyTimeout(this);
    this.lastDiff = void 0;
    this.dirty = false;
  };
  QueryInfo2.prototype.getDiff = function(variables) {
    if (variables === void 0) {
      variables = this.variables;
    }
    var options = this.getDiffOptions(variables);
    if (this.lastDiff && equal(options, this.lastDiff.options)) {
      return this.lastDiff.diff;
    }
    this.updateWatch(this.variables = variables);
    var oq = this.observableQuery;
    if (oq && oq.options.fetchPolicy === "no-cache") {
      return { complete: false };
    }
    var diff = this.cache.diff(options);
    this.updateLastDiff(diff, options);
    return diff;
  };
  QueryInfo2.prototype.updateLastDiff = function(diff, options) {
    this.lastDiff = diff ? {
      diff,
      options: options || this.getDiffOptions()
    } : void 0;
  };
  QueryInfo2.prototype.getDiffOptions = function(variables) {
    var _a5;
    if (variables === void 0) {
      variables = this.variables;
    }
    return {
      query: this.document,
      variables,
      returnPartialData: true,
      optimistic: true,
      canonizeResults: (_a5 = this.observableQuery) === null || _a5 === void 0 ? void 0 : _a5.options.canonizeResults
    };
  };
  QueryInfo2.prototype.setDiff = function(diff) {
    var _this = this;
    var oldDiff = this.lastDiff && this.lastDiff.diff;
    this.updateLastDiff(diff);
    if (!this.dirty && !equal(oldDiff && oldDiff.result, diff && diff.result)) {
      this.dirty = true;
      if (!this.notifyTimeout) {
        this.notifyTimeout = setTimeout(function() {
          return _this.notify();
        }, 0);
      }
    }
  };
  QueryInfo2.prototype.setObservableQuery = function(oq) {
    var _this = this;
    if (oq === this.observableQuery)
      return;
    if (this.oqListener) {
      this.listeners.delete(this.oqListener);
    }
    this.observableQuery = oq;
    if (oq) {
      oq["queryInfo"] = this;
      this.listeners.add(this.oqListener = function() {
        if (_this.getDiff().fromOptimisticTransaction) {
          oq["observe"]();
        } else {
          oq.reobserve();
        }
      });
    } else {
      delete this.oqListener;
    }
  };
  QueryInfo2.prototype.notify = function() {
    var _this = this;
    cancelNotifyTimeout(this);
    if (this.shouldNotify()) {
      this.listeners.forEach(function(listener) {
        return listener(_this);
      });
    }
    this.dirty = false;
  };
  QueryInfo2.prototype.shouldNotify = function() {
    if (!this.dirty || !this.listeners.size) {
      return false;
    }
    if (isNetworkRequestInFlight(this.networkStatus) && this.observableQuery) {
      var fetchPolicy = this.observableQuery.options.fetchPolicy;
      if (fetchPolicy !== "cache-only" && fetchPolicy !== "cache-and-network") {
        return false;
      }
    }
    return true;
  };
  QueryInfo2.prototype.stop = function() {
    if (!this.stopped) {
      this.stopped = true;
      this.reset();
      this.cancel();
      this.cancel = QueryInfo2.prototype.cancel;
      this.subscriptions.forEach(function(sub) {
        return sub.unsubscribe();
      });
      var oq = this.observableQuery;
      if (oq)
        oq.stopPolling();
    }
  };
  QueryInfo2.prototype.cancel = function() {
  };
  QueryInfo2.prototype.updateWatch = function(variables) {
    var _this = this;
    if (variables === void 0) {
      variables = this.variables;
    }
    var oq = this.observableQuery;
    if (oq && oq.options.fetchPolicy === "no-cache") {
      return;
    }
    var watchOptions = __assign2(__assign2({}, this.getDiffOptions(variables)), { watcher: this, callback: function(diff) {
      return _this.setDiff(diff);
    } });
    if (!this.lastWatch || !equal(watchOptions, this.lastWatch)) {
      this.cancel();
      this.cancel = this.cache.watch(this.lastWatch = watchOptions);
    }
  };
  QueryInfo2.prototype.resetLastWrite = function() {
    this.lastWrite = void 0;
  };
  QueryInfo2.prototype.shouldWrite = function(result2, variables) {
    var lastWrite = this.lastWrite;
    return !(lastWrite && lastWrite.dmCount === destructiveMethodCounts.get(this.cache) && equal(variables, lastWrite.variables) && equal(result2.data, lastWrite.result.data));
  };
  QueryInfo2.prototype.markResult = function(result2, options, cacheWriteBehavior) {
    var _this = this;
    this.graphQLErrors = isNonEmptyArray(result2.errors) ? result2.errors : [];
    this.reset();
    if (options.fetchPolicy === "no-cache") {
      this.updateLastDiff({ result: result2.data, complete: true }, this.getDiffOptions(options.variables));
    } else if (cacheWriteBehavior !== 0) {
      if (shouldWriteResult(result2, options.errorPolicy)) {
        this.cache.performTransaction(function(cache) {
          if (_this.shouldWrite(result2, options.variables)) {
            cache.writeQuery({
              query: _this.document,
              data: result2.data,
              variables: options.variables,
              overwrite: cacheWriteBehavior === 1
            });
            _this.lastWrite = {
              result: result2,
              variables: options.variables,
              dmCount: destructiveMethodCounts.get(_this.cache)
            };
          } else {
            if (_this.lastDiff && _this.lastDiff.diff.complete) {
              result2.data = _this.lastDiff.diff.result;
              return;
            }
          }
          var diffOptions = _this.getDiffOptions(options.variables);
          var diff = cache.diff(diffOptions);
          if (!_this.stopped) {
            _this.updateWatch(options.variables);
          }
          _this.updateLastDiff(diff, diffOptions);
          if (diff.complete) {
            result2.data = diff.result;
          }
        });
      } else {
        this.lastWrite = void 0;
      }
    }
  };
  QueryInfo2.prototype.markReady = function() {
    this.networkError = null;
    return this.networkStatus = NetworkStatus.ready;
  };
  QueryInfo2.prototype.markError = function(error) {
    this.networkStatus = NetworkStatus.error;
    this.lastWrite = void 0;
    this.reset();
    if (error.graphQLErrors) {
      this.graphQLErrors = error.graphQLErrors;
    }
    if (error.networkError) {
      this.networkError = error.networkError;
    }
    return error;
  };
  return QueryInfo2;
}();
function shouldWriteResult(result2, errorPolicy) {
  if (errorPolicy === void 0) {
    errorPolicy = "none";
  }
  var ignoreErrors = errorPolicy === "ignore" || errorPolicy === "all";
  var writeWithErrors = !graphQLResultHasError(result2);
  if (!writeWithErrors && ignoreErrors && result2.data) {
    writeWithErrors = true;
  }
  return writeWithErrors;
}

// node_modules/@apollo/client/core/QueryManager.js
var hasOwnProperty6 = Object.prototype.hasOwnProperty;
var QueryManager = function() {
  function QueryManager2(_a5) {
    var cache = _a5.cache, link = _a5.link, _b = _a5.queryDeduplication, queryDeduplication = _b === void 0 ? false : _b, onBroadcast = _a5.onBroadcast, _c = _a5.ssrMode, ssrMode = _c === void 0 ? false : _c, _d = _a5.clientAwareness, clientAwareness = _d === void 0 ? {} : _d, localState = _a5.localState, assumeImmutableResults = _a5.assumeImmutableResults;
    this.clientAwareness = {};
    this.queries = new Map();
    this.fetchCancelFns = new Map();
    this.transformCache = new (canUseWeakMap ? WeakMap : Map)();
    this.queryIdCounter = 1;
    this.requestIdCounter = 1;
    this.mutationIdCounter = 1;
    this.inFlightLinkObservables = new Map();
    this.cache = cache;
    this.link = link;
    this.queryDeduplication = queryDeduplication;
    this.clientAwareness = clientAwareness;
    this.localState = localState || new LocalState({ cache });
    this.ssrMode = ssrMode;
    this.assumeImmutableResults = !!assumeImmutableResults;
    if (this.onBroadcast = onBroadcast) {
      this.mutationStore = Object.create(null);
    }
  }
  QueryManager2.prototype.stop = function() {
    var _this = this;
    this.queries.forEach(function(_info, queryId) {
      _this.stopQueryNoBroadcast(queryId);
    });
    this.cancelPendingFetches(__DEV__ ? new InvariantError("QueryManager stopped while query was in flight") : new InvariantError(11));
  };
  QueryManager2.prototype.cancelPendingFetches = function(error) {
    this.fetchCancelFns.forEach(function(cancel) {
      return cancel(error);
    });
    this.fetchCancelFns.clear();
  };
  QueryManager2.prototype.mutate = function(_a5) {
    var mutation = _a5.mutation, variables = _a5.variables, optimisticResponse = _a5.optimisticResponse, updateQueries = _a5.updateQueries, _b = _a5.refetchQueries, refetchQueries = _b === void 0 ? [] : _b, _c = _a5.awaitRefetchQueries, awaitRefetchQueries = _c === void 0 ? false : _c, updateWithProxyFn = _a5.update, onQueryUpdated = _a5.onQueryUpdated, _d = _a5.errorPolicy, errorPolicy = _d === void 0 ? "none" : _d, _e = _a5.fetchPolicy, fetchPolicy = _e === void 0 ? "network-only" : _e, keepRootFields = _a5.keepRootFields, context = _a5.context;
    return __awaiter(this, void 0, void 0, function() {
      var mutationId, mutationStoreValue, self2;
      return __generator(this, function(_f) {
        switch (_f.label) {
          case 0:
            __DEV__ ? invariant(mutation, "mutation option is required. You must specify your GraphQL document in the mutation option.") : invariant(mutation, 12);
            __DEV__ ? invariant(fetchPolicy === "network-only" || fetchPolicy === "no-cache", "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write.") : invariant(fetchPolicy === "network-only" || fetchPolicy === "no-cache", 13);
            mutationId = this.generateMutationId();
            mutation = this.transform(mutation).document;
            variables = this.getVariables(mutation, variables);
            if (!this.transform(mutation).hasClientExports)
              return [3, 2];
            return [4, this.localState.addExportedVariables(mutation, variables, context)];
          case 1:
            variables = _f.sent();
            _f.label = 2;
          case 2:
            mutationStoreValue = this.mutationStore && (this.mutationStore[mutationId] = {
              mutation,
              variables,
              loading: true,
              error: null
            });
            if (optimisticResponse) {
              this.markMutationOptimistic(optimisticResponse, {
                mutationId,
                document: mutation,
                variables,
                fetchPolicy,
                errorPolicy,
                context,
                updateQueries,
                update: updateWithProxyFn,
                keepRootFields
              });
            }
            this.broadcastQueries();
            self2 = this;
            return [2, new Promise(function(resolve, reject) {
              return asyncMap(self2.getObservableFromLink(mutation, __assign2(__assign2({}, context), { optimisticResponse }), variables, false), function(result2) {
                if (graphQLResultHasError(result2) && errorPolicy === "none") {
                  throw new ApolloError({
                    graphQLErrors: result2.errors
                  });
                }
                if (mutationStoreValue) {
                  mutationStoreValue.loading = false;
                  mutationStoreValue.error = null;
                }
                var storeResult = __assign2({}, result2);
                if (typeof refetchQueries === "function") {
                  refetchQueries = refetchQueries(storeResult);
                }
                if (errorPolicy === "ignore" && graphQLResultHasError(storeResult)) {
                  delete storeResult.errors;
                }
                return self2.markMutationResult({
                  mutationId,
                  result: storeResult,
                  document: mutation,
                  variables,
                  fetchPolicy,
                  errorPolicy,
                  context,
                  update: updateWithProxyFn,
                  updateQueries,
                  awaitRefetchQueries,
                  refetchQueries,
                  removeOptimistic: optimisticResponse ? mutationId : void 0,
                  onQueryUpdated,
                  keepRootFields
                });
              }).subscribe({
                next: function(storeResult) {
                  self2.broadcastQueries();
                  resolve(storeResult);
                },
                error: function(err) {
                  if (mutationStoreValue) {
                    mutationStoreValue.loading = false;
                    mutationStoreValue.error = err;
                  }
                  if (optimisticResponse) {
                    self2.cache.removeOptimistic(mutationId);
                  }
                  self2.broadcastQueries();
                  reject(err instanceof ApolloError ? err : new ApolloError({
                    networkError: err
                  }));
                }
              });
            })];
        }
      });
    });
  };
  QueryManager2.prototype.markMutationResult = function(mutation, cache) {
    var _this = this;
    if (cache === void 0) {
      cache = this.cache;
    }
    var result2 = mutation.result;
    var cacheWrites = [];
    var skipCache = mutation.fetchPolicy === "no-cache";
    if (!skipCache && shouldWriteResult(result2, mutation.errorPolicy)) {
      cacheWrites.push({
        result: result2.data,
        dataId: "ROOT_MUTATION",
        query: mutation.document,
        variables: mutation.variables
      });
      var updateQueries_1 = mutation.updateQueries;
      if (updateQueries_1) {
        this.queries.forEach(function(_a5, queryId) {
          var observableQuery = _a5.observableQuery;
          var queryName = observableQuery && observableQuery.queryName;
          if (!queryName || !hasOwnProperty6.call(updateQueries_1, queryName)) {
            return;
          }
          var updater = updateQueries_1[queryName];
          var _b = _this.queries.get(queryId), document2 = _b.document, variables = _b.variables;
          var _c = cache.diff({
            query: document2,
            variables,
            returnPartialData: true,
            optimistic: false
          }), currentQueryResult = _c.result, complete = _c.complete;
          if (complete && currentQueryResult) {
            var nextQueryResult = updater(currentQueryResult, {
              mutationResult: result2,
              queryName: document2 && getOperationName(document2) || void 0,
              queryVariables: variables
            });
            if (nextQueryResult) {
              cacheWrites.push({
                result: nextQueryResult,
                dataId: "ROOT_QUERY",
                query: document2,
                variables
              });
            }
          }
        });
      }
    }
    if (cacheWrites.length > 0 || mutation.refetchQueries || mutation.update || mutation.onQueryUpdated || mutation.removeOptimistic) {
      var results_1 = [];
      this.refetchQueries({
        updateCache: function(cache2) {
          if (!skipCache) {
            cacheWrites.forEach(function(write) {
              return cache2.write(write);
            });
          }
          var update = mutation.update;
          if (update) {
            if (!skipCache) {
              var diff = cache2.diff({
                id: "ROOT_MUTATION",
                query: _this.transform(mutation.document).asQuery,
                variables: mutation.variables,
                optimistic: false,
                returnPartialData: true
              });
              if (diff.complete) {
                result2 = __assign2(__assign2({}, result2), { data: diff.result });
              }
            }
            update(cache2, result2, {
              context: mutation.context,
              variables: mutation.variables
            });
          }
          if (!skipCache && !mutation.keepRootFields) {
            cache2.modify({
              id: "ROOT_MUTATION",
              fields: function(value, _a5) {
                var fieldName = _a5.fieldName, DELETE2 = _a5.DELETE;
                return fieldName === "__typename" ? value : DELETE2;
              }
            });
          }
        },
        include: mutation.refetchQueries,
        optimistic: false,
        removeOptimistic: mutation.removeOptimistic,
        onQueryUpdated: mutation.onQueryUpdated || null
      }).forEach(function(result3) {
        return results_1.push(result3);
      });
      if (mutation.awaitRefetchQueries || mutation.onQueryUpdated) {
        return Promise.all(results_1).then(function() {
          return result2;
        });
      }
    }
    return Promise.resolve(result2);
  };
  QueryManager2.prototype.markMutationOptimistic = function(optimisticResponse, mutation) {
    var _this = this;
    var data = typeof optimisticResponse === "function" ? optimisticResponse(mutation.variables) : optimisticResponse;
    return this.cache.recordOptimisticTransaction(function(cache) {
      try {
        _this.markMutationResult(__assign2(__assign2({}, mutation), { result: { data } }), cache);
      } catch (error) {
        __DEV__ && invariant.error(error);
      }
    }, mutation.mutationId);
  };
  QueryManager2.prototype.fetchQuery = function(queryId, options, networkStatus) {
    return this.fetchQueryObservable(queryId, options, networkStatus).promise;
  };
  QueryManager2.prototype.getQueryStore = function() {
    var store = Object.create(null);
    this.queries.forEach(function(info, queryId) {
      store[queryId] = {
        variables: info.variables,
        networkStatus: info.networkStatus,
        networkError: info.networkError,
        graphQLErrors: info.graphQLErrors
      };
    });
    return store;
  };
  QueryManager2.prototype.resetErrors = function(queryId) {
    var queryInfo = this.queries.get(queryId);
    if (queryInfo) {
      queryInfo.networkError = void 0;
      queryInfo.graphQLErrors = [];
    }
  };
  QueryManager2.prototype.transform = function(document2) {
    var transformCache = this.transformCache;
    if (!transformCache.has(document2)) {
      var transformed = this.cache.transformDocument(document2);
      var forLink = removeConnectionDirectiveFromDocument(this.cache.transformForLink(transformed));
      var clientQuery = this.localState.clientQuery(transformed);
      var serverQuery = forLink && this.localState.serverQuery(forLink);
      var cacheEntry_1 = {
        document: transformed,
        hasClientExports: hasClientExports(transformed),
        hasForcedResolvers: this.localState.shouldForceResolvers(transformed),
        clientQuery,
        serverQuery,
        defaultVars: getDefaultValues(getOperationDefinition(transformed)),
        asQuery: __assign2(__assign2({}, transformed), { definitions: transformed.definitions.map(function(def) {
          if (def.kind === "OperationDefinition" && def.operation !== "query") {
            return __assign2(__assign2({}, def), { operation: "query" });
          }
          return def;
        }) })
      };
      var add = function(doc) {
        if (doc && !transformCache.has(doc)) {
          transformCache.set(doc, cacheEntry_1);
        }
      };
      add(document2);
      add(transformed);
      add(clientQuery);
      add(serverQuery);
    }
    return transformCache.get(document2);
  };
  QueryManager2.prototype.getVariables = function(document2, variables) {
    return __assign2(__assign2({}, this.transform(document2).defaultVars), variables);
  };
  QueryManager2.prototype.watchQuery = function(options) {
    options = __assign2(__assign2({}, options), { variables: this.getVariables(options.query, options.variables) });
    if (typeof options.notifyOnNetworkStatusChange === "undefined") {
      options.notifyOnNetworkStatusChange = false;
    }
    var queryInfo = new QueryInfo(this);
    var observable = new ObservableQuery({
      queryManager: this,
      queryInfo,
      options
    });
    this.queries.set(observable.queryId, queryInfo);
    queryInfo.init({
      document: options.query,
      observableQuery: observable,
      variables: options.variables
    });
    return observable;
  };
  QueryManager2.prototype.query = function(options, queryId) {
    var _this = this;
    if (queryId === void 0) {
      queryId = this.generateQueryId();
    }
    __DEV__ ? invariant(options.query, "query option is required. You must specify your GraphQL document in the query option.") : invariant(options.query, 14);
    __DEV__ ? invariant(options.query.kind === "Document", 'You must wrap the query string in a "gql" tag.') : invariant(options.query.kind === "Document", 15);
    __DEV__ ? invariant(!options.returnPartialData, "returnPartialData option only supported on watchQuery.") : invariant(!options.returnPartialData, 16);
    __DEV__ ? invariant(!options.pollInterval, "pollInterval option only supported on watchQuery.") : invariant(!options.pollInterval, 17);
    return this.fetchQuery(queryId, options).finally(function() {
      return _this.stopQuery(queryId);
    });
  };
  QueryManager2.prototype.generateQueryId = function() {
    return String(this.queryIdCounter++);
  };
  QueryManager2.prototype.generateRequestId = function() {
    return this.requestIdCounter++;
  };
  QueryManager2.prototype.generateMutationId = function() {
    return String(this.mutationIdCounter++);
  };
  QueryManager2.prototype.stopQueryInStore = function(queryId) {
    this.stopQueryInStoreNoBroadcast(queryId);
    this.broadcastQueries();
  };
  QueryManager2.prototype.stopQueryInStoreNoBroadcast = function(queryId) {
    var queryInfo = this.queries.get(queryId);
    if (queryInfo)
      queryInfo.stop();
  };
  QueryManager2.prototype.clearStore = function(options) {
    if (options === void 0) {
      options = {
        discardWatches: true
      };
    }
    this.cancelPendingFetches(__DEV__ ? new InvariantError("Store reset while query was in flight (not completed in link chain)") : new InvariantError(18));
    this.queries.forEach(function(queryInfo) {
      if (queryInfo.observableQuery) {
        queryInfo.networkStatus = NetworkStatus.loading;
      } else {
        queryInfo.stop();
      }
    });
    if (this.mutationStore) {
      this.mutationStore = Object.create(null);
    }
    return this.cache.reset(options);
  };
  QueryManager2.prototype.getObservableQueries = function(include) {
    var _this = this;
    if (include === void 0) {
      include = "active";
    }
    var queries = new Map();
    var queryNamesAndDocs = new Map();
    var legacyQueryOptions = new Set();
    if (Array.isArray(include)) {
      include.forEach(function(desc) {
        if (typeof desc === "string") {
          queryNamesAndDocs.set(desc, false);
        } else if (isDocumentNode(desc)) {
          queryNamesAndDocs.set(_this.transform(desc).document, false);
        } else if (isNonNullObject(desc) && desc.query) {
          legacyQueryOptions.add(desc);
        }
      });
    }
    this.queries.forEach(function(_a5, queryId) {
      var oq = _a5.observableQuery, document2 = _a5.document;
      if (oq) {
        if (include === "all") {
          queries.set(queryId, oq);
          return;
        }
        var queryName = oq.queryName, fetchPolicy = oq.options.fetchPolicy;
        if (fetchPolicy === "standby" || include === "active" && !oq.hasObservers()) {
          return;
        }
        if (include === "active" || queryName && queryNamesAndDocs.has(queryName) || document2 && queryNamesAndDocs.has(document2)) {
          queries.set(queryId, oq);
          if (queryName)
            queryNamesAndDocs.set(queryName, true);
          if (document2)
            queryNamesAndDocs.set(document2, true);
        }
      }
    });
    if (legacyQueryOptions.size) {
      legacyQueryOptions.forEach(function(options) {
        var queryId = makeUniqueId("legacyOneTimeQuery");
        var queryInfo = _this.getQuery(queryId).init({
          document: options.query,
          variables: options.variables
        });
        var oq = new ObservableQuery({
          queryManager: _this,
          queryInfo,
          options: __assign2(__assign2({}, options), { fetchPolicy: "network-only" })
        });
        invariant(oq.queryId === queryId);
        queryInfo.setObservableQuery(oq);
        queries.set(queryId, oq);
      });
    }
    if (__DEV__ && queryNamesAndDocs.size) {
      queryNamesAndDocs.forEach(function(included, nameOrDoc) {
        if (!included) {
          __DEV__ && invariant.warn("Unknown query ".concat(typeof nameOrDoc === "string" ? "named " : "").concat(JSON.stringify(nameOrDoc, null, 2), " requested in refetchQueries options.include array"));
        }
      });
    }
    return queries;
  };
  QueryManager2.prototype.reFetchObservableQueries = function(includeStandby) {
    var _this = this;
    if (includeStandby === void 0) {
      includeStandby = false;
    }
    var observableQueryPromises = [];
    this.getObservableQueries(includeStandby ? "all" : "active").forEach(function(observableQuery, queryId) {
      var fetchPolicy = observableQuery.options.fetchPolicy;
      observableQuery.resetLastResults();
      if (includeStandby || fetchPolicy !== "standby" && fetchPolicy !== "cache-only") {
        observableQueryPromises.push(observableQuery.refetch());
      }
      _this.getQuery(queryId).setDiff(null);
    });
    this.broadcastQueries();
    return Promise.all(observableQueryPromises);
  };
  QueryManager2.prototype.setObservableQuery = function(observableQuery) {
    this.getQuery(observableQuery.queryId).setObservableQuery(observableQuery);
  };
  QueryManager2.prototype.startGraphQLSubscription = function(_a5) {
    var _this = this;
    var query = _a5.query, fetchPolicy = _a5.fetchPolicy, errorPolicy = _a5.errorPolicy, variables = _a5.variables, _b = _a5.context, context = _b === void 0 ? {} : _b;
    query = this.transform(query).document;
    variables = this.getVariables(query, variables);
    var makeObservable = function(variables2) {
      return _this.getObservableFromLink(query, context, variables2).map(function(result2) {
        if (fetchPolicy !== "no-cache") {
          if (shouldWriteResult(result2, errorPolicy)) {
            _this.cache.write({
              query,
              result: result2.data,
              dataId: "ROOT_SUBSCRIPTION",
              variables: variables2
            });
          }
          _this.broadcastQueries();
        }
        if (graphQLResultHasError(result2)) {
          throw new ApolloError({
            graphQLErrors: result2.errors
          });
        }
        return result2;
      });
    };
    if (this.transform(query).hasClientExports) {
      var observablePromise_1 = this.localState.addExportedVariables(query, variables, context).then(makeObservable);
      return new Observable(function(observer) {
        var sub = null;
        observablePromise_1.then(function(observable) {
          return sub = observable.subscribe(observer);
        }, observer.error);
        return function() {
          return sub && sub.unsubscribe();
        };
      });
    }
    return makeObservable(variables);
  };
  QueryManager2.prototype.stopQuery = function(queryId) {
    this.stopQueryNoBroadcast(queryId);
    this.broadcastQueries();
  };
  QueryManager2.prototype.stopQueryNoBroadcast = function(queryId) {
    this.stopQueryInStoreNoBroadcast(queryId);
    this.removeQuery(queryId);
  };
  QueryManager2.prototype.removeQuery = function(queryId) {
    this.fetchCancelFns.delete(queryId);
    this.getQuery(queryId).stop();
    this.queries.delete(queryId);
  };
  QueryManager2.prototype.broadcastQueries = function() {
    if (this.onBroadcast)
      this.onBroadcast();
    this.queries.forEach(function(info) {
      return info.notify();
    });
  };
  QueryManager2.prototype.getLocalState = function() {
    return this.localState;
  };
  QueryManager2.prototype.getObservableFromLink = function(query, context, variables, deduplication) {
    var _this = this;
    var _a5;
    if (deduplication === void 0) {
      deduplication = (_a5 = context === null || context === void 0 ? void 0 : context.queryDeduplication) !== null && _a5 !== void 0 ? _a5 : this.queryDeduplication;
    }
    var observable;
    var serverQuery = this.transform(query).serverQuery;
    if (serverQuery) {
      var _b = this, inFlightLinkObservables_1 = _b.inFlightLinkObservables, link = _b.link;
      var operation = {
        query: serverQuery,
        variables,
        operationName: getOperationName(serverQuery) || void 0,
        context: this.prepareContext(__assign2(__assign2({}, context), { forceFetch: !deduplication }))
      };
      context = operation.context;
      if (deduplication) {
        var byVariables_1 = inFlightLinkObservables_1.get(serverQuery) || new Map();
        inFlightLinkObservables_1.set(serverQuery, byVariables_1);
        var varJson_1 = canonicalStringify(variables);
        observable = byVariables_1.get(varJson_1);
        if (!observable) {
          var concast = new Concast([
            execute(link, operation)
          ]);
          byVariables_1.set(varJson_1, observable = concast);
          concast.cleanup(function() {
            if (byVariables_1.delete(varJson_1) && byVariables_1.size < 1) {
              inFlightLinkObservables_1.delete(serverQuery);
            }
          });
        }
      } else {
        observable = new Concast([
          execute(link, operation)
        ]);
      }
    } else {
      observable = new Concast([
        Observable.of({ data: {} })
      ]);
      context = this.prepareContext(context);
    }
    var clientQuery = this.transform(query).clientQuery;
    if (clientQuery) {
      observable = asyncMap(observable, function(result2) {
        return _this.localState.runResolvers({
          document: clientQuery,
          remoteResult: result2,
          context,
          variables
        });
      });
    }
    return observable;
  };
  QueryManager2.prototype.getResultsFromLink = function(queryInfo, cacheWriteBehavior, options) {
    var requestId = queryInfo.lastRequestId = this.generateRequestId();
    return asyncMap(this.getObservableFromLink(queryInfo.document, options.context, options.variables), function(result2) {
      var hasErrors = isNonEmptyArray(result2.errors);
      if (requestId >= queryInfo.lastRequestId) {
        if (hasErrors && options.errorPolicy === "none") {
          throw queryInfo.markError(new ApolloError({
            graphQLErrors: result2.errors
          }));
        }
        queryInfo.markResult(result2, options, cacheWriteBehavior);
        queryInfo.markReady();
      }
      var aqr = {
        data: result2.data,
        loading: false,
        networkStatus: queryInfo.networkStatus || NetworkStatus.ready
      };
      if (hasErrors && options.errorPolicy !== "ignore") {
        aqr.errors = result2.errors;
      }
      return aqr;
    }, function(networkError) {
      var error = isApolloError(networkError) ? networkError : new ApolloError({ networkError });
      if (requestId >= queryInfo.lastRequestId) {
        queryInfo.markError(error);
      }
      throw error;
    });
  };
  QueryManager2.prototype.fetchQueryObservable = function(queryId, options, networkStatus) {
    var _this = this;
    if (networkStatus === void 0) {
      networkStatus = NetworkStatus.loading;
    }
    var query = this.transform(options.query).document;
    var variables = this.getVariables(query, options.variables);
    var queryInfo = this.getQuery(queryId);
    var _a5 = options.fetchPolicy, fetchPolicy = _a5 === void 0 ? "cache-first" : _a5, _b = options.errorPolicy, errorPolicy = _b === void 0 ? "none" : _b, _c = options.returnPartialData, returnPartialData = _c === void 0 ? false : _c, _d = options.notifyOnNetworkStatusChange, notifyOnNetworkStatusChange = _d === void 0 ? false : _d, _e = options.context, context = _e === void 0 ? {} : _e;
    var normalized = Object.assign({}, options, {
      query,
      variables,
      fetchPolicy,
      errorPolicy,
      returnPartialData,
      notifyOnNetworkStatusChange,
      context
    });
    var fromVariables = function(variables2) {
      normalized.variables = variables2;
      return _this.fetchQueryByPolicy(queryInfo, normalized, networkStatus);
    };
    this.fetchCancelFns.set(queryId, function(reason) {
      setTimeout(function() {
        return concast.cancel(reason);
      });
    });
    var concast = new Concast(this.transform(normalized.query).hasClientExports ? this.localState.addExportedVariables(normalized.query, normalized.variables, normalized.context).then(fromVariables) : fromVariables(normalized.variables));
    concast.cleanup(function() {
      _this.fetchCancelFns.delete(queryId);
      applyNextFetchPolicy(options);
    });
    return concast;
  };
  QueryManager2.prototype.refetchQueries = function(_a5) {
    var _this = this;
    var updateCache = _a5.updateCache, include = _a5.include, _b = _a5.optimistic, optimistic = _b === void 0 ? false : _b, _c = _a5.removeOptimistic, removeOptimistic = _c === void 0 ? optimistic ? makeUniqueId("refetchQueries") : void 0 : _c, onQueryUpdated = _a5.onQueryUpdated;
    var includedQueriesById = new Map();
    if (include) {
      this.getObservableQueries(include).forEach(function(oq, queryId) {
        includedQueriesById.set(queryId, {
          oq,
          lastDiff: _this.getQuery(queryId).getDiff()
        });
      });
    }
    var results = new Map();
    if (updateCache) {
      this.cache.batch({
        update: updateCache,
        optimistic: optimistic && removeOptimistic || false,
        removeOptimistic,
        onWatchUpdated: function(watch, diff, lastDiff) {
          var oq = watch.watcher instanceof QueryInfo && watch.watcher.observableQuery;
          if (oq) {
            if (onQueryUpdated) {
              includedQueriesById.delete(oq.queryId);
              var result2 = onQueryUpdated(oq, diff, lastDiff);
              if (result2 === true) {
                result2 = oq.refetch();
              }
              if (result2 !== false) {
                results.set(oq, result2);
              }
              return result2;
            }
            if (onQueryUpdated !== null) {
              includedQueriesById.set(oq.queryId, { oq, lastDiff, diff });
            }
          }
        }
      });
    }
    if (includedQueriesById.size) {
      includedQueriesById.forEach(function(_a6, queryId) {
        var oq = _a6.oq, lastDiff = _a6.lastDiff, diff = _a6.diff;
        var result2;
        if (onQueryUpdated) {
          if (!diff) {
            var info = oq["queryInfo"];
            info.reset();
            diff = info.getDiff();
          }
          result2 = onQueryUpdated(oq, diff, lastDiff);
        }
        if (!onQueryUpdated || result2 === true) {
          result2 = oq.refetch();
        }
        if (result2 !== false) {
          results.set(oq, result2);
        }
        if (queryId.indexOf("legacyOneTimeQuery") >= 0) {
          _this.stopQueryNoBroadcast(queryId);
        }
      });
    }
    if (removeOptimistic) {
      this.cache.removeOptimistic(removeOptimistic);
    }
    return results;
  };
  QueryManager2.prototype.fetchQueryByPolicy = function(queryInfo, _a5, networkStatus) {
    var _this = this;
    var query = _a5.query, variables = _a5.variables, fetchPolicy = _a5.fetchPolicy, refetchWritePolicy = _a5.refetchWritePolicy, errorPolicy = _a5.errorPolicy, returnPartialData = _a5.returnPartialData, context = _a5.context, notifyOnNetworkStatusChange = _a5.notifyOnNetworkStatusChange;
    var oldNetworkStatus = queryInfo.networkStatus;
    queryInfo.init({
      document: query,
      variables,
      networkStatus
    });
    var readCache = function() {
      return queryInfo.getDiff(variables);
    };
    var resultsFromCache = function(diff2, networkStatus2) {
      if (networkStatus2 === void 0) {
        networkStatus2 = queryInfo.networkStatus || NetworkStatus.loading;
      }
      var data = diff2.result;
      if (__DEV__ && !returnPartialData && !equal(data, {})) {
        logMissingFieldErrors(diff2.missing);
      }
      var fromData = function(data2) {
        return Observable.of(__assign2({ data: data2, loading: isNetworkRequestInFlight(networkStatus2), networkStatus: networkStatus2 }, diff2.complete ? null : { partial: true }));
      };
      if (data && _this.transform(query).hasForcedResolvers) {
        return _this.localState.runResolvers({
          document: query,
          remoteResult: { data },
          context,
          variables,
          onlyRunForcedResolvers: true
        }).then(function(resolved) {
          return fromData(resolved.data || void 0);
        });
      }
      return fromData(data);
    };
    var cacheWriteBehavior = fetchPolicy === "no-cache" ? 0 : networkStatus === NetworkStatus.refetch && refetchWritePolicy !== "merge" ? 1 : 2;
    var resultsFromLink = function() {
      return _this.getResultsFromLink(queryInfo, cacheWriteBehavior, {
        variables,
        context,
        fetchPolicy,
        errorPolicy
      });
    };
    var shouldNotify = notifyOnNetworkStatusChange && typeof oldNetworkStatus === "number" && oldNetworkStatus !== networkStatus && isNetworkRequestInFlight(networkStatus);
    switch (fetchPolicy) {
      default:
      case "cache-first": {
        var diff = readCache();
        if (diff.complete) {
          return [
            resultsFromCache(diff, queryInfo.markReady())
          ];
        }
        if (returnPartialData || shouldNotify) {
          return [
            resultsFromCache(diff),
            resultsFromLink()
          ];
        }
        return [
          resultsFromLink()
        ];
      }
      case "cache-and-network": {
        var diff = readCache();
        if (diff.complete || returnPartialData || shouldNotify) {
          return [
            resultsFromCache(diff),
            resultsFromLink()
          ];
        }
        return [
          resultsFromLink()
        ];
      }
      case "cache-only":
        return [
          resultsFromCache(readCache(), queryInfo.markReady())
        ];
      case "network-only":
        if (shouldNotify) {
          return [
            resultsFromCache(readCache()),
            resultsFromLink()
          ];
        }
        return [resultsFromLink()];
      case "no-cache":
        if (shouldNotify) {
          return [
            resultsFromCache(queryInfo.getDiff()),
            resultsFromLink()
          ];
        }
        return [resultsFromLink()];
      case "standby":
        return [];
    }
  };
  QueryManager2.prototype.getQuery = function(queryId) {
    if (queryId && !this.queries.has(queryId)) {
      this.queries.set(queryId, new QueryInfo(this, queryId));
    }
    return this.queries.get(queryId);
  };
  QueryManager2.prototype.prepareContext = function(context) {
    if (context === void 0) {
      context = {};
    }
    var newContext = this.localState.prepareContext(context);
    return __assign2(__assign2({}, newContext), { clientAwareness: this.clientAwareness });
  };
  return QueryManager2;
}();

// node_modules/@apollo/client/core/ApolloClient.js
var hasSuggestedDevtools = false;
function mergeOptions(defaults, options) {
  return compact(defaults, options, options.variables && {
    variables: __assign2(__assign2({}, defaults.variables), options.variables)
  });
}
var ApolloClient = function() {
  function ApolloClient2(options) {
    var _this = this;
    this.defaultOptions = {};
    this.resetStoreCallbacks = [];
    this.clearStoreCallbacks = [];
    var uri = options.uri, credentials = options.credentials, headers = options.headers, cache = options.cache, _a5 = options.ssrMode, ssrMode = _a5 === void 0 ? false : _a5, _b = options.ssrForceFetchDelay, ssrForceFetchDelay = _b === void 0 ? 0 : _b, _c = options.connectToDevTools, connectToDevTools = _c === void 0 ? typeof window === "object" && !window.__APOLLO_CLIENT__ && __DEV__ : _c, _d = options.queryDeduplication, queryDeduplication = _d === void 0 ? true : _d, defaultOptions2 = options.defaultOptions, _e = options.assumeImmutableResults, assumeImmutableResults = _e === void 0 ? false : _e, resolvers = options.resolvers, typeDefs = options.typeDefs, fragmentMatcher = options.fragmentMatcher, clientAwarenessName = options.name, clientAwarenessVersion = options.version;
    var link = options.link;
    if (!link) {
      link = uri ? new HttpLink({ uri, credentials, headers }) : ApolloLink.empty();
    }
    if (!cache) {
      throw __DEV__ ? new InvariantError("To initialize Apollo Client, you must specify a 'cache' property in the options object. \nFor more information, please visit: https://go.apollo.dev/c/docs") : new InvariantError(7);
    }
    this.link = link;
    this.cache = cache;
    this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
    this.queryDeduplication = queryDeduplication;
    this.defaultOptions = defaultOptions2 || {};
    this.typeDefs = typeDefs;
    if (ssrForceFetchDelay) {
      setTimeout(function() {
        return _this.disableNetworkFetches = false;
      }, ssrForceFetchDelay);
    }
    this.watchQuery = this.watchQuery.bind(this);
    this.query = this.query.bind(this);
    this.mutate = this.mutate.bind(this);
    this.resetStore = this.resetStore.bind(this);
    this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
    if (connectToDevTools && typeof window === "object") {
      window.__APOLLO_CLIENT__ = this;
    }
    if (!hasSuggestedDevtools && __DEV__) {
      hasSuggestedDevtools = true;
      if (typeof window !== "undefined" && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
        var nav = window.navigator;
        var ua = nav && nav.userAgent;
        var url = void 0;
        if (typeof ua === "string") {
          if (ua.indexOf("Chrome/") > -1) {
            url = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm";
          } else if (ua.indexOf("Firefox/") > -1) {
            url = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/";
          }
        }
        if (url) {
          __DEV__ && invariant.log("Download the Apollo DevTools for a better development experience: " + url);
        }
      }
    }
    this.version = version;
    this.localState = new LocalState({
      cache,
      client: this,
      resolvers,
      fragmentMatcher
    });
    this.queryManager = new QueryManager({
      cache: this.cache,
      link: this.link,
      queryDeduplication,
      ssrMode,
      clientAwareness: {
        name: clientAwarenessName,
        version: clientAwarenessVersion
      },
      localState: this.localState,
      assumeImmutableResults,
      onBroadcast: connectToDevTools ? function() {
        if (_this.devToolsHookCb) {
          _this.devToolsHookCb({
            action: {},
            state: {
              queries: _this.queryManager.getQueryStore(),
              mutations: _this.queryManager.mutationStore || {}
            },
            dataWithOptimisticResults: _this.cache.extract(true)
          });
        }
      } : void 0
    });
  }
  ApolloClient2.prototype.stop = function() {
    this.queryManager.stop();
  };
  ApolloClient2.prototype.watchQuery = function(options) {
    if (this.defaultOptions.watchQuery) {
      options = mergeOptions(this.defaultOptions.watchQuery, options);
    }
    if (this.disableNetworkFetches && (options.fetchPolicy === "network-only" || options.fetchPolicy === "cache-and-network")) {
      options = __assign2(__assign2({}, options), { fetchPolicy: "cache-first" });
    }
    return this.queryManager.watchQuery(options);
  };
  ApolloClient2.prototype.query = function(options) {
    if (this.defaultOptions.query) {
      options = mergeOptions(this.defaultOptions.query, options);
    }
    __DEV__ ? invariant(options.fetchPolicy !== "cache-and-network", "The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only.") : invariant(options.fetchPolicy !== "cache-and-network", 8);
    if (this.disableNetworkFetches && options.fetchPolicy === "network-only") {
      options = __assign2(__assign2({}, options), { fetchPolicy: "cache-first" });
    }
    return this.queryManager.query(options);
  };
  ApolloClient2.prototype.mutate = function(options) {
    if (this.defaultOptions.mutate) {
      options = mergeOptions(this.defaultOptions.mutate, options);
    }
    return this.queryManager.mutate(options);
  };
  ApolloClient2.prototype.subscribe = function(options) {
    return this.queryManager.startGraphQLSubscription(options);
  };
  ApolloClient2.prototype.readQuery = function(options, optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }
    return this.cache.readQuery(options, optimistic);
  };
  ApolloClient2.prototype.readFragment = function(options, optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }
    return this.cache.readFragment(options, optimistic);
  };
  ApolloClient2.prototype.writeQuery = function(options) {
    this.cache.writeQuery(options);
    this.queryManager.broadcastQueries();
  };
  ApolloClient2.prototype.writeFragment = function(options) {
    this.cache.writeFragment(options);
    this.queryManager.broadcastQueries();
  };
  ApolloClient2.prototype.__actionHookForDevTools = function(cb) {
    this.devToolsHookCb = cb;
  };
  ApolloClient2.prototype.__requestRaw = function(payload) {
    return execute(this.link, payload);
  };
  ApolloClient2.prototype.resetStore = function() {
    var _this = this;
    return Promise.resolve().then(function() {
      return _this.queryManager.clearStore({
        discardWatches: false
      });
    }).then(function() {
      return Promise.all(_this.resetStoreCallbacks.map(function(fn) {
        return fn();
      }));
    }).then(function() {
      return _this.reFetchObservableQueries();
    });
  };
  ApolloClient2.prototype.clearStore = function() {
    var _this = this;
    return Promise.resolve().then(function() {
      return _this.queryManager.clearStore({
        discardWatches: true
      });
    }).then(function() {
      return Promise.all(_this.clearStoreCallbacks.map(function(fn) {
        return fn();
      }));
    });
  };
  ApolloClient2.prototype.onResetStore = function(cb) {
    var _this = this;
    this.resetStoreCallbacks.push(cb);
    return function() {
      _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function(c) {
        return c !== cb;
      });
    };
  };
  ApolloClient2.prototype.onClearStore = function(cb) {
    var _this = this;
    this.clearStoreCallbacks.push(cb);
    return function() {
      _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function(c) {
        return c !== cb;
      });
    };
  };
  ApolloClient2.prototype.reFetchObservableQueries = function(includeStandby) {
    return this.queryManager.reFetchObservableQueries(includeStandby);
  };
  ApolloClient2.prototype.refetchQueries = function(options) {
    var map = this.queryManager.refetchQueries(options);
    var queries = [];
    var results = [];
    map.forEach(function(result3, obsQuery) {
      queries.push(obsQuery);
      results.push(result3);
    });
    var result2 = Promise.all(results);
    result2.queries = queries;
    result2.results = results;
    result2.catch(function(error) {
      __DEV__ && invariant.debug("In client.refetchQueries, Promise.all promise rejected with error ".concat(error));
    });
    return result2;
  };
  ApolloClient2.prototype.getObservableQueries = function(include) {
    if (include === void 0) {
      include = "active";
    }
    return this.queryManager.getObservableQueries(include);
  };
  ApolloClient2.prototype.extract = function(optimistic) {
    return this.cache.extract(optimistic);
  };
  ApolloClient2.prototype.restore = function(serializedState) {
    return this.cache.restore(serializedState);
  };
  ApolloClient2.prototype.addResolvers = function(resolvers) {
    this.localState.addResolvers(resolvers);
  };
  ApolloClient2.prototype.setResolvers = function(resolvers) {
    this.localState.setResolvers(resolvers);
  };
  ApolloClient2.prototype.getResolvers = function() {
    return this.localState.getResolvers();
  };
  ApolloClient2.prototype.setLocalStateFragmentMatcher = function(fragmentMatcher) {
    this.localState.setFragmentMatcher(fragmentMatcher);
  };
  ApolloClient2.prototype.setLink = function(newLink) {
    this.link = this.queryManager.link = newLink;
  };
  return ApolloClient2;
}();

// node_modules/@apollo/client/core/index.js
setVerbosity(DEV_default ? "log" : "silent");

// node_modules/@apollo/client/react/index.js
init_react();

// node_modules/@apollo/client/react/context/index.js
init_react();

// node_modules/@apollo/client/react/context/ApolloContext.js
init_react();
var React2 = __toModule(require_react());
var contextKey = canUseSymbol ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";
function getApolloContext() {
  var context = React2.createContext[contextKey];
  if (!context) {
    Object.defineProperty(React2.createContext, contextKey, {
      value: context = React2.createContext({}),
      enumerable: false,
      writable: false,
      configurable: true
    });
    context.displayName = "ApolloContext";
  }
  return context;
}

// node_modules/@apollo/client/react/context/ApolloProvider.js
init_react();
var React3 = __toModule(require_react());
var ApolloProvider = function(_a5) {
  var client = _a5.client, children = _a5.children;
  var ApolloContext = getApolloContext();
  return React3.createElement(ApolloContext.Consumer, null, function(context) {
    if (context === void 0) {
      context = {};
    }
    if (client && context.client !== client) {
      context = Object.assign({}, context, { client });
    }
    __DEV__ ? invariant(context.client, 'ApolloProvider was not passed a client instance. Make sure you pass in your client via the "client" prop.') : invariant(context.client, 26);
    return React3.createElement(ApolloContext.Provider, { value: context }, children);
  });
};

// node_modules/@apollo/client/link/ws/index.js
init_react();
var import_subscriptions_transport_ws = __toModule(require_client());
var WebSocketLink = function(_super) {
  __extends(WebSocketLink2, _super);
  function WebSocketLink2(paramsOrClient) {
    var _this = _super.call(this) || this;
    if (paramsOrClient instanceof import_subscriptions_transport_ws.SubscriptionClient) {
      _this.subscriptionClient = paramsOrClient;
    } else {
      _this.subscriptionClient = new import_subscriptions_transport_ws.SubscriptionClient(paramsOrClient.uri, paramsOrClient.options, paramsOrClient.webSocketImpl);
    }
    return _this;
  }
  WebSocketLink2.prototype.request = function(operation) {
    return this.subscriptionClient.request(operation);
  };
  return WebSocketLink2;
}(ApolloLink);

// node_modules/@apollo/client/link/context/index.js
init_react();
function setContext(setter) {
  return new ApolloLink(function(operation, forward) {
    var request = __rest(operation, []);
    return new Observable(function(observer) {
      var handle;
      var closed = false;
      Promise.resolve(request).then(function(req) {
        return setter(req, operation.getContext());
      }).then(operation.setContext).then(function() {
        if (closed)
          return;
        handle = forward(operation).subscribe({
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer)
        });
      }).catch(observer.error.bind(observer));
      return function() {
        closed = true;
        if (handle)
          handle.unsubscribe();
      };
    });
  });
}

// node_modules/@nhost/react-apollo/lib/esm/index.js
var import_subscriptions_transport_ws2 = __toModule(require_client());
var __awaiter2 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result2) {
      result2.done ? resolve(result2.value) : adopt(result2.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var isBrowser = () => typeof window !== "undefined";
function generateApolloClient({ nhost: nhost2, graphqlUrl, headers, publicRole, fetchPolicy, cache, connectToDevTools, onError }) {
  const getAuthHeaders = () => {
    const resHeaders = Object.assign(Object.assign({}, headers), { "Sec-WebSocket-Protocol": "graphql-ws" });
    if (graphqlUrl) {
      return resHeaders;
    }
    if (nhost2 === null || nhost2 === void 0 ? void 0 : nhost2.auth.isAuthenticated()) {
      resHeaders.authorization = `Bearer ${nhost2.auth.getAccessToken()}`;
    } else {
      resHeaders.role = publicRole;
    }
    return resHeaders;
  };
  let uri = "";
  if (graphqlUrl) {
    uri = graphqlUrl;
  } else if (nhost2) {
    uri = nhost2.graphql.getUrl();
  } else {
    throw new Error("no GraphQL URL");
  }
  const wsUri = uri.startsWith("https") ? uri.replace(/^https/, "wss") : uri.replace(/^http/, "ws");
  let webSocketClient;
  if (isBrowser()) {
    webSocketClient = new import_subscriptions_transport_ws2.SubscriptionClient(wsUri, {
      lazy: true,
      reconnect: true,
      connectionParams: () => {
        const headers2 = getAuthHeaders();
        return {
          headers: headers2
        };
      }
    });
  }
  const wsLink = webSocketClient ? new WebSocketLink(webSocketClient) : null;
  const httplink = createHttpLink({
    uri
  });
  const authLink = setContext(() => {
    return {
      headers: Object.assign({}, getAuthHeaders())
    };
  });
  const link = wsLink ? split(({ query }) => {
    const mainDefinition = getMainDefinition(query);
    const kind = mainDefinition.kind;
    let operation;
    if ("operation" in mainDefinition) {
      operation = mainDefinition.operation;
    }
    return kind === "OperationDefinition" && operation === "subscription";
  }, wsLink, authLink.concat(httplink)) : httplink;
  const apolloClientOptions = {
    cache: cache || new InMemoryCache(),
    ssrMode: !isBrowser(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy
      }
    },
    connectToDevTools
  };
  if (typeof onError === "function") {
    apolloClientOptions.link = from([onError, link]);
  } else {
    apolloClientOptions.link = from([link]);
  }
  const client = new ApolloClient(apolloClientOptions);
  return { client, webSocketClient };
}
function NhostApolloProvider({ nhost: nhost2, graphqlUrl, children, headers = {}, publicRole = "public", fetchPolicy, cache = new InMemoryCache(), connectToDevTools = false, onError }) {
  const [constructorHasRun, setConstructorHasRun] = (0, import_react2.useState)(false);
  const [apolloClient, setApolloClient] = (0, import_react2.useState)(null);
  const constructor = () => {
    if (constructorHasRun)
      return;
    const { client, webSocketClient } = generateApolloClient({
      graphqlUrl,
      nhost: nhost2,
      headers,
      publicRole,
      fetchPolicy,
      cache,
      connectToDevTools,
      onError
    });
    if (graphqlUrl) {
      setApolloClient(client);
      setConstructorHasRun(true);
      return;
    }
    if (nhost2 && webSocketClient) {
      nhost2.auth.onTokenChanged(() => {
        if (webSocketClient.status === 1) {
          webSocketClient.tryReconnect();
        }
      });
      nhost2.auth.onAuthStateChanged((event, _session) => __awaiter2(this, void 0, void 0, function* () {
        if (webSocketClient.status === 1) {
          webSocketClient.close();
          webSocketClient.tryReconnect();
        }
        if (event === "SIGNED_OUT") {
          yield client.resetStore().catch((error) => {
            console.error("Error resetting Apollo client cache");
            console.error(error);
          });
        }
      }));
    }
    setApolloClient(client);
    setConstructorHasRun(true);
  };
  constructor();
  if (!apolloClient) {
    return (0, import_jsx_runtime2.jsx)("div", { children: "Apollo Client not yet available" }, void 0);
  }
  return (0, import_jsx_runtime2.jsx)(ApolloProvider, Object.assign({ client: apolloClient }, { children }), void 0);
}

// app/utils/nhost.ts
init_react();

// node_modules/@nhost/nhost-js/dist/esm/index.js
init_react();

// node_modules/@nhost/nhost-js/dist/esm/core/index.js
init_react();

// node_modules/@nhost/nhost-js/dist/esm/core/nhost-client.js
init_react();

// node_modules/@nhost/hasura-auth-js/dist/esm/index.js
init_react();

// node_modules/@nhost/hasura-auth-js/dist/esm/hasura-auth-api.js
init_react();
var import_axios = __toModule(require_axios2());
var __assign3 = function() {
  __assign3 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign3.apply(this, arguments);
};
var __awaiter3 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result2) {
      result2.done ? resolve(result2.value) : adopt(result2.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator2 = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var HasuraAuthApi = function() {
  function HasuraAuthApi2(_a5) {
    var _b = _a5.url, url = _b === void 0 ? "" : _b;
    this.url = url;
    this.httpClient = import_axios.default.create({
      baseURL: this.url,
      timeout: 1e4
    });
    this.httpClient.interceptors.response.use(function(response) {
      return response;
    }, function(error) {
      var _a6, _b2, _c;
      return Promise.reject({
        message: ((_a6 = error.response) === null || _a6 === void 0 ? void 0 : _a6.data.message) || ((_b2 = error.response) === null || _b2 === void 0 ? void 0 : _b2.data) || error.message || JSON.stringify(error),
        status: ((_c = error.response) === null || _c === void 0 ? void 0 : _c.status) || 500
      });
    });
  }
  HasuraAuthApi2.prototype.signUpEmailPassword = function(params) {
    return __awaiter3(this, void 0, void 0, function() {
      var res, error_1;
      return __generator2(this, function(_a5) {
        switch (_a5.label) {
          case 0:
            _a5.trys.push([0, 2, , 3]);
            return [4, this.httpClient.post("/signup/email-password", params)];
          case 1:
            res = _a5.sent();
            return [2, { data: res.data, error: null }];
          case 2:
            error_1 = _a5.sent();
            return [2, { data: null, error: error_1 }];
          case 3:
            return [2];
        }
      });
    });
  };
  HasuraAuthApi2.prototype.signInEmailPassword = function(params) {
    return __awaiter3(this, void 0, void 0, function() {
      var res, error_2;
      return __generator2(this, function(_a5) {
        switch (_a5.label) {
          case 0:
            _a5.trys.push([0, 2, , 3]);
            return [4, this.httpClient.post("/signin/email-password", params)];
          case 1:
            res = _a5.sent();
            return [2, { data: res.data, error: null }];
          case 2:
            error_2 = _a5.sent();
            return [2, { data: null, error: error_2 }];
          case 3:
            return [2];
        }
      });
    });
  };
  HasuraAuthApi2.prototype.signInPasswordlessEmail = function(params) {
    return __awaiter3(this, void 0, void 0, function() {
      var res, error_3;
      return __generator2(this, function(_a5) {
        switch (_a5.label) {
          case 0:
            _a5.trys.push([0, 2, , 3]);
            return [4, this.httpClient.post("/signin/passwordless/email", params)];
          case 1:
            res = _a5.sent();
            return [2, { data: res.data, error: null }];
          case 2:
            error_3 = _a5.sent();
            return [2, { data: null, error: error_3 }];
          case 3:
            return [2];
        }
      });
    });
  };
  HasuraAuthApi2.prototype.signInPasswordlessSms = function(params) {
    return __awaiter3(this, void 0, void 0, function() {
      var res, error_4;
      return __generator2(this, function(_a5) {
        switch (_a5.label) {
          case 0:
            _a5.trys.push([0, 2, , 3]);
            return [4, this.httpClient.post("/signin/passwordless/sms", params)];
          case 1:
            res = _a5.sent();
            return [2, { data: res.data, error: null }];
          case 2:
            error_4 = _a5.sent();
            return [2, { data: null, error: error_4 }];
          case 3:
            return [2];
        }
      });
    });
  };
  HasuraAuthApi2.prototype.signInPasswordlessSmsOtp = function(params) {
    return __awaiter3(this, void 0, void 0, function() {
      var res, error_5;
      return __generator2(this, function(_a5) {
        switch (_a5.label) {
          case 0:
            _a5.trys.push([0, 2, , 3]);
            return [4, this.httpClient.post("/signin/passwordless/sms/otp", params)];
          case 1:
            res = _a5.sent();
            return [2, { data: res.data, error: null }];
          case 2:
            error_5 = _a5.sent();
            return [2, { data: null, error: error_5 }];
          case 3:
            return [2];
        }
      });
    });
  };
  HasuraAuthApi2.prototype.signOut = function(params) {
    return __awaiter3(this, void 0, void 0, function() {
      var error_6;
      return __generator2(this, function(_a5) {
        switch (_a5.label) {
          case 0:
            _a5.trys.push([0, 2, , 3]);
            return [4, this.httpClient.post("/signout", params)];
          case 1:
            _a5.sent();
            return [2, { error: null }];
          case 2:
            error_6 = _a5.sent();
            return [2, { error: error_6 }];
          case 3:
            return [2];
        }
      });
    });
  };
  HasuraAuthApi2.prototype.refreshToken = function(params) {
    return __awaiter3(this, void 0, void 0, function() {
      var res, error_7;
      return __generator2(this, function(_a5) {
        switch (_a5.label) {
          case 0:
            _a5.trys.push([0, 2, , 3]);
            return [4, this.httpClient.post("/token", params)];
          case 1:
            res = _a5.sent();
            return [2, { session: res.data, error: null }];
          case 2:
            error_7 = _a5.sent();
            return [2, { session: null, error: error_7 }];
          case 3:
            return [2];
        }
      });
    });
  };
  HasuraAuthApi2.prototype.resetPassword = function(params) {
    return __awaiter3(this, void 0, void 0, function() {
      var error_8;
      return __generator2(this, function(_a5) {
        switch (_a5.label) {
          case 0:
            _a5.trys.push([0, 2, , 3]);
            return [4, this.httpClient.post("/user/password/reset", params)];
          case 1:
            _a5.sent();
            return [2, { error: null }];
          case 2:
            error_8 = _a5.sent();
            return [2, { error: error_8 }];
          case 3:
            return [2];
        }
      });
    });
  };
  HasuraAuthApi2.prototype.changePassword = function(params) {
    return __awaiter3(this, void 0, void 0, function() {
      var error_9;
      return __generator2(this, function(_a5) {
        switch (_a5.label) {
          case 0:
            _a5.trys.push([0, 2, , 3]);
            return [4, this.httpClient.post("/user/password", params, {
              headers: __assign3({}, this.generateAuthHeaders())
            })];
          case 1:
            _a5.sent();
            return [2, { error: null }];
          case 2:
            error_9 = _a5.sent();
            return [2, { error: error_9 }];
          case 3:
            return [2];
        }
      });
    });
  };
  HasuraAuthApi2.prototype.sendVerificationEmail = function(params) {
    return __awaiter3(this, void 0, void 0, function() {
      var error_10;
      return __generator2(this, function(_a5) {
        switch (_a5.label) {
          case 0:
            _a5.trys.push([0, 2, , 3]);
            return [4, this.httpClient.post("/user/email/send-verification-email", params)];
          case 1:
            _a5.sent();
            return [2, { error: null }];
          case 2:
            error_10 = _a5.sent();
            return [2, { error: error_10 }];
          case 3:
            return [2];
        }
      });
    });
  };
  HasuraAuthApi2.prototype.changeEmail = function(params) {
    return __awaiter3(this, void 0, void 0, function() {
      var error_11;
      return __generator2(this, function(_a5) {
        switch (_a5.label) {
          case 0:
            _a5.trys.push([0, 2, , 3]);
            return [4, this.httpClient.post("/user/email/change", params, {
              headers: __assign3({}, this.generateAuthHeaders())
            })];
          case 1:
            _a5.sent();
            return [2, { error: null }];
          case 2:
            error_11 = _a5.sent();
            return [2, { error: error_11 }];
          case 3:
            return [2];
        }
      });
    });
  };
  HasuraAuthApi2.prototype.deanonymize = function(params) {
    return __awaiter3(this, void 0, void 0, function() {
      var error_12;
      return __generator2(this, function(_a5) {
        switch (_a5.label) {
          case 0:
            _a5.trys.push([0, 2, , 3]);
            return [4, this.httpClient.post("/user/deanonymize", params)];
          case 1:
            _a5.sent();
            return [2, { error: null }];
          case 2:
            error_12 = _a5.sent();
            return [2, { error: error_12 }];
          case 3:
            return [2];
        }
      });
    });
  };
  HasuraAuthApi2.prototype.verifyEmail = function(params) {
    return __awaiter3(this, void 0, void 0, function() {
      var res, error_13;
      return __generator2(this, function(_a5) {
        switch (_a5.label) {
          case 0:
            _a5.trys.push([0, 2, , 3]);
            return [4, this.httpClient.post("/user/email/verify", params)];
          case 1:
            res = _a5.sent();
            return [2, { data: res.data, error: null }];
          case 2:
            error_13 = _a5.sent();
            return [2, { data: null, error: error_13 }];
          case 3:
            return [2];
        }
      });
    });
  };
  HasuraAuthApi2.prototype.setAccessToken = function(accessToken) {
    this.accessToken = accessToken;
  };
  HasuraAuthApi2.prototype.generateAuthHeaders = function() {
    if (!this.accessToken) {
      return null;
    }
    return {
      Authorization: "Bearer " + this.accessToken
    };
  };
  return HasuraAuthApi2;
}();

// node_modules/@nhost/hasura-auth-js/dist/esm/hasura-auth-client.js
init_react();
var import_query_string = __toModule(require_query_string());

// node_modules/@nhost/hasura-auth-js/dist/esm/utils/constants.js
init_react();
var NHOST_REFRESH_TOKEN = "nhostRefreshToken";

// node_modules/@nhost/hasura-auth-js/dist/esm/utils/helpers.js
init_react();
var isBrowser2 = function() {
  return typeof window !== "undefined";
};
var inMemoryLocalStorage = function() {
  function inMemoryLocalStorage2() {
    this.memory = {};
  }
  inMemoryLocalStorage2.prototype.setItem = function(key, value) {
    this.memory[key] = value;
  };
  inMemoryLocalStorage2.prototype.getItem = function(key) {
    return this.memory[key];
  };
  inMemoryLocalStorage2.prototype.removeItem = function(key) {
    delete this.memory[key];
  };
  return inMemoryLocalStorage2;
}();

// node_modules/@nhost/hasura-auth-js/dist/esm/hasura-auth-client.js
var __awaiter4 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result2) {
      result2.done ? resolve(result2.value) : adopt(result2.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator3 = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var HasuraAuthClient = function() {
  function HasuraAuthClient2(_a5) {
    var url = _a5.url, _b = _a5.autoRefreshToken, autoRefreshToken = _b === void 0 ? true : _b, _c = _a5.autoLogin, autoLogin = _c === void 0 ? true : _c, refreshIntervalTime = _a5.refreshIntervalTime, clientStorage = _a5.clientStorage, _d = _a5.clientStorageType, clientStorageType = _d === void 0 ? "web" : _d;
    this.refreshIntervalTime = refreshIntervalTime;
    if (!clientStorage) {
      if (isBrowser2()) {
        this.clientStorage = localStorage;
      } else {
        this.clientStorage = new inMemoryLocalStorage();
      }
    } else {
      this.clientStorage = clientStorage;
    }
    this.clientStorageType = clientStorageType;
    this.onTokenChangedFunctions = [];
    this.onAuthChangedFunctions = [];
    this.refreshInterval;
    this.refreshSleepCheckInterval = 0;
    this.refreshIntervalSleepCheckLastSample = Date.now();
    this.sampleRate = 2e3;
    this.url = url;
    this.autoRefreshToken = autoRefreshToken;
    this.initAuthLoading = true;
    this.session = null;
    this.api = new HasuraAuthApi({ url: this.url });
    var refreshToken = null;
    var autoLoginFromQueryParameters = false;
    if (autoLogin && isBrowser2() && window.location) {
      var urlParams = import_query_string.default.parse(window.location.toString().split("#")[1]);
      if ("refreshToken" in urlParams) {
        refreshToken = urlParams.refreshToken;
      }
      if ("otp" in urlParams && "email" in urlParams) {
        var otp = urlParams.otp, email = urlParams.email;
        this.signIn({
          otp,
          email
        });
        autoLoginFromQueryParameters = true;
      }
    }
    if (!autoLoginFromQueryParameters && autoLogin) {
      this._autoLogin(refreshToken);
    } else if (refreshToken) {
      this._setItem(NHOST_REFRESH_TOKEN, refreshToken);
    }
  }
  HasuraAuthClient2.prototype.signUp = function(params) {
    return __awaiter4(this, void 0, void 0, function() {
      var email, password, _a5, data, error, session;
      return __generator3(this, function(_b) {
        switch (_b.label) {
          case 0:
            email = params.email, password = params.password;
            if (!(email && password))
              return [3, 4];
            return [4, this.api.signUpEmailPassword(params)];
          case 1:
            _a5 = _b.sent(), data = _a5.data, error = _a5.error;
            if (error) {
              return [2, { session: null, error }];
            }
            if (!data) {
              return [2, {
                session: null,
                error: { message: "An error occurred on sign up.", status: 500 }
              }];
            }
            session = data.session;
            if (!session)
              return [3, 3];
            return [4, this._setSession(session)];
          case 2:
            _b.sent();
            _b.label = 3;
          case 3:
            return [2, { session, error: null }];
          case 4:
            return [2, {
              session: null,
              error: { message: "Incorrect parameters", status: 500 }
            }];
        }
      });
    });
  };
  HasuraAuthClient2.prototype.signIn = function(params) {
    return __awaiter4(this, void 0, void 0, function() {
      var provider, providerUrl, _a5, data, error, session, mfa, error, error, _b, data, error, session, mfa;
      return __generator3(this, function(_c) {
        switch (_c.label) {
          case 0:
            if ("provider" in params) {
              provider = params.provider;
              providerUrl = this.url + "/signin/provider/" + provider;
              if (isBrowser2()) {
                window.location.href = providerUrl;
              }
              return [2, { providerUrl, provider, session: null, mfa: null, error: null }];
            }
            if (!("email" in params && "password" in params))
              return [3, 4];
            return [4, this.api.signInEmailPassword(params)];
          case 1:
            _a5 = _c.sent(), data = _a5.data, error = _a5.error;
            if (error) {
              return [2, { session: null, mfa: null, error }];
            }
            if (!data) {
              return [2, {
                session: null,
                mfa: null,
                error: { message: "Incorrect Data", status: 500 }
              }];
            }
            session = data.session, mfa = data.mfa;
            if (!session)
              return [3, 3];
            return [4, this._setSession(session)];
          case 2:
            _c.sent();
            _c.label = 3;
          case 3:
            return [2, { session, mfa, error: null }];
          case 4:
            if (!("email" in params && !("otp" in params)))
              return [3, 6];
            return [4, this.api.signInPasswordlessEmail(params)];
          case 5:
            error = _c.sent().error;
            if (error) {
              return [2, { session: null, mfa: null, error }];
            }
            return [2, { session: null, mfa: null, error: null }];
          case 6:
            if (!("phoneNumber" in params && !("otp" in params)))
              return [3, 8];
            return [4, this.api.signInPasswordlessSms(params)];
          case 7:
            error = _c.sent().error;
            if (error) {
              return [2, { session: null, mfa: null, error }];
            }
            return [2, { session: null, mfa: null, error: null }];
          case 8:
            if (!("otp" in params))
              return [3, 10];
            return [4, this.api.signInPasswordlessSmsOtp(params)];
          case 9:
            _b = _c.sent(), data = _b.data, error = _b.error;
            if (error) {
              return [2, { session: null, mfa: null, error }];
            }
            if (!data) {
              return [2, {
                session: null,
                mfa: null,
                error: { message: "Incorrect data", status: 500 }
              }];
            }
            session = data.session, mfa = data.mfa;
            if (session) {
              this._setSession(session);
            }
            return [2, { session, mfa, error: null }];
          case 10:
            return [2, {
              session: null,
              mfa: null,
              error: { message: "Incorrect parameters", status: 500 }
            }];
        }
      });
    });
  };
  HasuraAuthClient2.prototype.signOut = function(params) {
    return __awaiter4(this, void 0, void 0, function() {
      var refreshToken, error;
      return __generator3(this, function(_a5) {
        switch (_a5.label) {
          case 0:
            return [4, this._getItem(NHOST_REFRESH_TOKEN)];
          case 1:
            refreshToken = _a5.sent();
            this._clearSession();
            return [4, this.api.signOut({
              refreshToken,
              all: params === null || params === void 0 ? void 0 : params.all
            })];
          case 2:
            error = _a5.sent().error;
            return [2, { error }];
        }
      });
    });
  };
  HasuraAuthClient2.prototype.verifyEmail = function(params) {
    return __awaiter4(this, void 0, void 0, function() {
      var _a5, data, error;
      return __generator3(this, function(_b) {
        switch (_b.label) {
          case 0:
            return [4, this.api.verifyEmail(params)];
          case 1:
            _a5 = _b.sent(), data = _a5.data, error = _a5.error;
            return [2, { data, error }];
        }
      });
    });
  };
  HasuraAuthClient2.prototype.resetPassword = function(params) {
    return __awaiter4(this, void 0, void 0, function() {
      var error;
      return __generator3(this, function(_a5) {
        switch (_a5.label) {
          case 0:
            return [4, this.api.resetPassword(params)];
          case 1:
            error = _a5.sent().error;
            return [2, { error }];
        }
      });
    });
  };
  HasuraAuthClient2.prototype.changePassword = function(params) {
    return __awaiter4(this, void 0, void 0, function() {
      var error;
      return __generator3(this, function(_a5) {
        switch (_a5.label) {
          case 0:
            return [4, this.api.changePassword(params)];
          case 1:
            error = _a5.sent().error;
            return [2, { error }];
        }
      });
    });
  };
  HasuraAuthClient2.prototype.sendVerificationEmail = function(params) {
    return __awaiter4(this, void 0, void 0, function() {
      var error;
      return __generator3(this, function(_a5) {
        switch (_a5.label) {
          case 0:
            return [4, this.api.sendVerificationEmail(params)];
          case 1:
            error = _a5.sent().error;
            return [2, { error }];
        }
      });
    });
  };
  HasuraAuthClient2.prototype.changeEmail = function(params) {
    return __awaiter4(this, void 0, void 0, function() {
      var error;
      return __generator3(this, function(_a5) {
        switch (_a5.label) {
          case 0:
            return [4, this.api.changeEmail(params)];
          case 1:
            error = _a5.sent().error;
            return [2, { error }];
        }
      });
    });
  };
  HasuraAuthClient2.prototype.deanonymize = function(params) {
    return __awaiter4(this, void 0, void 0, function() {
      var error;
      return __generator3(this, function(_a5) {
        switch (_a5.label) {
          case 0:
            return [4, this.api.deanonymize(params)];
          case 1:
            error = _a5.sent().error;
            return [2, { error }];
        }
      });
    });
  };
  HasuraAuthClient2.prototype.onTokenChanged = function(fn) {
    var _this = this;
    this.onTokenChangedFunctions.push(fn);
    var index = this.onTokenChangedFunctions.length - 1;
    var unsubscribe = function() {
      try {
        _this.onTokenChangedFunctions[index] = function() {
        };
      } catch (err) {
        console.warn("Unable to unsubscribe onTokenChanged function. Maybe the functions is already unsubscribed?");
      }
    };
    return unsubscribe;
  };
  HasuraAuthClient2.prototype.onAuthStateChanged = function(fn) {
    var _this = this;
    this.onAuthChangedFunctions.push(fn);
    var index = this.onAuthChangedFunctions.length - 1;
    var unsubscribe = function() {
      try {
        _this.onAuthChangedFunctions[index] = function() {
        };
      } catch (err) {
        console.warn("Unable to unsubscribe onAuthStateChanged function. Maybe you already did?");
      }
    };
    return unsubscribe;
  };
  HasuraAuthClient2.prototype.isAuthenticated = function() {
    return this.session !== null;
  };
  HasuraAuthClient2.prototype.isAuthenticatedAsync = function() {
    var _this = this;
    return new Promise(function(resolve) {
      if (!_this.initAuthLoading) {
        resolve(_this.isAuthenticated());
      } else {
        var unsubscribe_1 = _this.onAuthStateChanged(function(event, _session) {
          resolve(event === "SIGNED_IN");
          unsubscribe_1();
        });
      }
    });
  };
  HasuraAuthClient2.prototype.getAuthenticationStatus = function() {
    if (this.initAuthLoading)
      return { isAuthenticated: false, isLoading: true };
    return { isAuthenticated: this.session !== null, isLoading: false };
  };
  HasuraAuthClient2.prototype.getJWTToken = function() {
    return this.getAccessToken();
  };
  HasuraAuthClient2.prototype.getAccessToken = function() {
    if (!this.session) {
      return void 0;
    }
    return this.session.accessToken;
  };
  HasuraAuthClient2.prototype.refreshSession = function(refreshToken) {
    return __awaiter4(this, void 0, void 0, function() {
      var refreshTokenToUse, _a5;
      return __generator3(this, function(_b) {
        switch (_b.label) {
          case 0:
            if (!refreshToken)
              return [3, 1];
            _a5 = refreshToken;
            return [3, 3];
          case 1:
            return [4, this._getItem(NHOST_REFRESH_TOKEN)];
          case 2:
            _a5 = _b.sent();
            _b.label = 3;
          case 3:
            refreshTokenToUse = _a5;
            if (!refreshTokenToUse) {
              console.warn("no refresh token found. No way of refreshing session");
            }
            return [4, this._refreshTokens(refreshTokenToUse)];
          case 4:
            return [2, _b.sent()];
        }
      });
    });
  };
  HasuraAuthClient2.prototype.getSession = function() {
    return this.session;
  };
  HasuraAuthClient2.prototype.getUser = function() {
    return this.session ? this.session.user : null;
  };
  HasuraAuthClient2.prototype._setItem = function(key, value) {
    return __awaiter4(this, void 0, void 0, function() {
      var _a5;
      return __generator3(this, function(_b) {
        switch (_b.label) {
          case 0:
            if (typeof value !== "string") {
              console.error('value is not of type "string"');
              return [2];
            }
            _a5 = this.clientStorageType;
            switch (_a5) {
              case "web":
                return [3, 1];
              case "custom":
                return [3, 2];
              case "react-native":
                return [3, 2];
              case "capacitor":
                return [3, 4];
              case "expo-secure-storage":
                return [3, 6];
            }
            return [3, 7];
          case 1:
            if (typeof this.clientStorage.setItem !== "function") {
              console.error("this.clientStorage.setItem is not a function");
              return [3, 8];
            }
            this.clientStorage.setItem(key, value);
            return [3, 8];
          case 2:
            if (typeof this.clientStorage.setItem !== "function") {
              console.error("this.clientStorage.setItem is not a function");
              return [3, 8];
            }
            return [4, this.clientStorage.setItem(key, value)];
          case 3:
            _b.sent();
            return [3, 8];
          case 4:
            if (typeof this.clientStorage.set !== "function") {
              console.error("this.clientStorage.set is not a function");
              return [3, 8];
            }
            return [4, this.clientStorage.set({ key, value })];
          case 5:
            _b.sent();
            return [3, 8];
          case 6:
            if (typeof this.clientStorage.setItemAsync !== "function") {
              console.error("this.clientStorage.setItemAsync is not a function");
              return [3, 8];
            }
            this.clientStorage.setItemAsync(key, value);
            return [3, 8];
          case 7:
            return [3, 8];
          case 8:
            return [2];
        }
      });
    });
  };
  HasuraAuthClient2.prototype._getItem = function(key) {
    return __awaiter4(this, void 0, void 0, function() {
      var _a5, res;
      return __generator3(this, function(_b) {
        switch (_b.label) {
          case 0:
            _a5 = this.clientStorageType;
            switch (_a5) {
              case "web":
                return [3, 1];
              case "custom":
                return [3, 2];
              case "react-native":
                return [3, 2];
              case "capacitor":
                return [3, 4];
              case "expo-secure-storage":
                return [3, 6];
            }
            return [3, 7];
          case 1:
            if (typeof this.clientStorage.getItem !== "function") {
              console.error("this.clientStorage.getItem is not a function");
              return [3, 8];
            }
            return [2, this.clientStorage.getItem(key)];
          case 2:
            if (typeof this.clientStorage.getItem !== "function") {
              console.error("this.clientStorage.getItem is not a function");
              return [3, 8];
            }
            return [4, this.clientStorage.getItem(key)];
          case 3:
            return [2, _b.sent()];
          case 4:
            if (typeof this.clientStorage.get !== "function") {
              console.error("this.clientStorage.get is not a function");
              return [3, 8];
            }
            return [4, this.clientStorage.get({ key })];
          case 5:
            res = _b.sent();
            return [2, res.value];
          case 6:
            if (typeof this.clientStorage.getItemAsync !== "function") {
              console.error("this.clientStorage.getItemAsync is not a function");
              return [3, 8];
            }
            return [2, this.clientStorage.getItemAsync(key)];
          case 7:
            return [2, ""];
          case 8:
            return [2, ""];
        }
      });
    });
  };
  HasuraAuthClient2.prototype._removeItem = function(key) {
    return __awaiter4(this, void 0, void 0, function() {
      var _a5;
      return __generator3(this, function(_b) {
        switch (_b.label) {
          case 0:
            _a5 = this.clientStorageType;
            switch (_a5) {
              case "web":
                return [3, 1];
              case "custom":
                return [3, 2];
              case "react-native":
                return [3, 2];
              case "capacitor":
                return [3, 4];
              case "expo-secure-storage":
                return [3, 6];
            }
            return [3, 7];
          case 1:
            if (typeof this.clientStorage.removeItem !== "function") {
              console.error("this.clientStorage.removeItem is not a function");
              return [3, 8];
            }
            return [2, this.clientStorage.removeItem(key)];
          case 2:
            if (typeof this.clientStorage.removeItem !== "function") {
              console.error("this.clientStorage.removeItem is not a function");
              return [3, 8];
            }
            return [4, this.clientStorage.removeItem(key)];
          case 3:
            return [2, _b.sent()];
          case 4:
            if (typeof this.clientStorage.remove !== "function") {
              console.error("this.clientStorage.remove is not a function");
              return [3, 8];
            }
            return [4, this.clientStorage.remove({ key })];
          case 5:
            _b.sent();
            return [3, 8];
          case 6:
            if (typeof this.clientStorage.deleteItemAsync !== "function") {
              console.error("this.clientStorage.deleteItemAsync is not a function");
              return [3, 8];
            }
            this.clientStorage.deleteItemAsync(key);
            return [3, 8];
          case 7:
            return [3, 8];
          case 8:
            return [2];
        }
      });
    });
  };
  HasuraAuthClient2.prototype._autoLogin = function(refreshToken) {
    if (!isBrowser2()) {
      return;
    }
    this._refreshTokens(refreshToken);
  };
  HasuraAuthClient2.prototype._refreshTokens = function(paramRefreshToken) {
    return __awaiter4(this, void 0, void 0, function() {
      var refreshToken, _a5, _b, session, error, error_1;
      var _this = this;
      return __generator3(this, function(_c) {
        switch (_c.label) {
          case 0:
            _a5 = paramRefreshToken;
            if (_a5)
              return [3, 2];
            return [4, this._getItem(NHOST_REFRESH_TOKEN)];
          case 1:
            _a5 = _c.sent();
            _c.label = 2;
          case 2:
            refreshToken = _a5;
            if (!refreshToken) {
              setTimeout(function() {
                return __awaiter4(_this, void 0, void 0, function() {
                  return __generator3(this, function(_a6) {
                    switch (_a6.label) {
                      case 0:
                        return [4, this._clearSession()];
                      case 1:
                        _a6.sent();
                        return [2];
                    }
                  });
                });
              }, 0);
              return [2];
            }
            _c.label = 3;
          case 3:
            _c.trys.push([3, 8, , 9]);
            return [4, this.api.refreshToken({ refreshToken })];
          case 4:
            _b = _c.sent(), session = _b.session, error = _b.error;
            if (!error)
              return [3, 6];
            if (!(error.message === "Request failed with status code 401"))
              return [3, 6];
            return [4, this._clearSession()];
          case 5:
            _c.sent();
            return [2];
          case 6:
            if (!session)
              throw new Error("Invalid session data");
            return [4, this._setSession(session)];
          case 7:
            _c.sent();
            this.tokenChanged();
            return [3, 9];
          case 8:
            error_1 = _c.sent();
            return [3, 9];
          case 9:
            return [2];
        }
      });
    });
  };
  HasuraAuthClient2.prototype.tokenChanged = function() {
    for (var _i = 0, _a5 = this.onTokenChangedFunctions; _i < _a5.length; _i++) {
      var tokenChangedFunction = _a5[_i];
      tokenChangedFunction(this.session);
    }
  };
  HasuraAuthClient2.prototype.authStateChanged = function(_a5) {
    var event = _a5.event, session = _a5.session;
    if (event === "SIGNED_IN" && session) {
      this.api.setAccessToken(session.accessToken);
    } else {
      this.api.setAccessToken(void 0);
    }
    for (var _i = 0, _b = this.onAuthChangedFunctions; _i < _b.length; _i++) {
      var authChangedFunction = _b[_i];
      authChangedFunction(event, session);
    }
  };
  HasuraAuthClient2.prototype._clearSession = function() {
    return __awaiter4(this, void 0, void 0, function() {
      var _a5, isLoading, isAuthenticated;
      return __generator3(this, function(_b) {
        switch (_b.label) {
          case 0:
            _a5 = this.getAuthenticationStatus(), isLoading = _a5.isLoading, isAuthenticated = _a5.isAuthenticated;
            this.session = null;
            this.initAuthLoading = false;
            return [4, this._removeItem(NHOST_REFRESH_TOKEN)];
          case 1:
            _b.sent();
            if (isLoading || isAuthenticated) {
              clearInterval(this.refreshInterval);
              clearInterval(this.refreshSleepCheckInterval);
              this.authStateChanged({ event: "SIGNED_OUT", session: null });
            }
            return [2];
        }
      });
    });
  };
  HasuraAuthClient2.prototype._setSession = function(session) {
    return __awaiter4(this, void 0, void 0, function() {
      var isAuthenticated, JWTExpiresIn, refreshIntervalTime;
      var _this = this;
      return __generator3(this, function(_a5) {
        switch (_a5.label) {
          case 0:
            isAuthenticated = this.getAuthenticationStatus().isAuthenticated;
            this.session = session;
            return [4, this._setItem(NHOST_REFRESH_TOKEN, session.refreshToken)];
          case 1:
            _a5.sent();
            if (this.autoRefreshToken && !isAuthenticated) {
              JWTExpiresIn = session.accessTokenExpiresIn;
              refreshIntervalTime = this.refreshIntervalTime ? this.refreshIntervalTime : Math.max(1, JWTExpiresIn - 1);
              this.refreshInterval = setInterval(function() {
                return __awaiter4(_this, void 0, void 0, function() {
                  var refreshToken;
                  return __generator3(this, function(_a6) {
                    switch (_a6.label) {
                      case 0:
                        return [4, this._getItem(NHOST_REFRESH_TOKEN)];
                      case 1:
                        refreshToken = _a6.sent();
                        return [4, this._refreshTokens(refreshToken)];
                      case 2:
                        _a6.sent();
                        return [2];
                    }
                  });
                });
              }, refreshIntervalTime * 1e3);
              this.refreshIntervalSleepCheckLastSample = Date.now();
              this.refreshSleepCheckInterval = setInterval(function() {
                return __awaiter4(_this, void 0, void 0, function() {
                  var refreshToken;
                  return __generator3(this, function(_a6) {
                    switch (_a6.label) {
                      case 0:
                        if (!(Date.now() - this.refreshIntervalSleepCheckLastSample >= this.sampleRate * 2))
                          return [3, 3];
                        return [4, this._getItem(NHOST_REFRESH_TOKEN)];
                      case 1:
                        refreshToken = _a6.sent();
                        return [4, this._refreshTokens(refreshToken)];
                      case 2:
                        _a6.sent();
                        _a6.label = 3;
                      case 3:
                        this.refreshIntervalSleepCheckLastSample = Date.now();
                        return [2];
                    }
                  });
                });
              }, this.sampleRate);
              this.authStateChanged({ event: "SIGNED_IN", session: this.session });
            }
            this.initAuthLoading = false;
            return [2];
        }
      });
    });
  };
  return HasuraAuthClient2;
}();

// node_modules/@nhost/hasura-auth-js/dist/esm/utils/types.js
init_react();

// node_modules/@nhost/hasura-storage-js/dist/esm/index.js
init_react();

// node_modules/@nhost/hasura-storage-js/dist/esm/hasura-storage-api.js
init_react();
var import_axios2 = __toModule(require_axios4());
var __assign4 = function() {
  __assign4 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign4.apply(this, arguments);
};
var __awaiter5 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result2) {
      result2.done ? resolve(result2.value) : adopt(result2.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator4 = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var HasuraStorageApi = function() {
  function HasuraStorageApi2(_a5) {
    var url = _a5.url;
    this.url = url;
    this.httpClient = import_axios2.default.create({
      baseURL: this.url,
      timeout: 1e4
    });
  }
  HasuraStorageApi2.prototype.upload = function(params) {
    return __awaiter5(this, void 0, void 0, function() {
      var res, error_1;
      return __generator4(this, function(_a5) {
        switch (_a5.label) {
          case 0:
            _a5.trys.push([0, 2, , 3]);
            return [4, this.httpClient.post("/files", params.file, {
              headers: __assign4(__assign4({}, this.generateUploadHeaders(params)), this.generateAuthHeaders())
            })];
          case 1:
            res = _a5.sent();
            return [2, { fileMetadata: res.data, error: null }];
          case 2:
            error_1 = _a5.sent();
            return [2, { fileMetadata: null, error: error_1 }];
          case 3:
            return [2];
        }
      });
    });
  };
  HasuraStorageApi2.prototype.getPresignedUrl = function(params) {
    return __awaiter5(this, void 0, void 0, function() {
      var fileId, res, error_2;
      return __generator4(this, function(_a5) {
        switch (_a5.label) {
          case 0:
            _a5.trys.push([0, 2, , 3]);
            fileId = params.fileId;
            return [4, this.httpClient.get("/files/" + fileId + "/presignedurl", {
              headers: __assign4({}, this.generateAuthHeaders())
            })];
          case 1:
            res = _a5.sent();
            return [2, { presignedUrl: res.data, error: null }];
          case 2:
            error_2 = _a5.sent();
            return [2, { presignedUrl: null, error: error_2 }];
          case 3:
            return [2];
        }
      });
    });
  };
  HasuraStorageApi2.prototype.delete = function(params) {
    return __awaiter5(this, void 0, void 0, function() {
      var fileId, error_3;
      return __generator4(this, function(_a5) {
        switch (_a5.label) {
          case 0:
            _a5.trys.push([0, 2, , 3]);
            fileId = params.fileId;
            return [4, this.httpClient.delete("/files/" + fileId, {
              headers: __assign4({}, this.generateAuthHeaders())
            })];
          case 1:
            _a5.sent();
            return [2, { error: null }];
          case 2:
            error_3 = _a5.sent();
            return [2, { error: error_3 }];
          case 3:
            return [2];
        }
      });
    });
  };
  HasuraStorageApi2.prototype.setAccessToken = function(accessToken) {
    this.accessToken = accessToken;
  };
  HasuraStorageApi2.prototype.generateUploadHeaders = function(params) {
    var bucketId = params.bucketId, name = params.name, id = params.id;
    var uploadheaders = {};
    if (bucketId) {
      uploadheaders["x-nhost-bucket-id"] = bucketId;
    }
    if (id) {
      uploadheaders["x-nhost-file-id"] = id;
    }
    if (name) {
      uploadheaders["x-nhost-file-name"] = name;
    }
    return uploadheaders;
  };
  HasuraStorageApi2.prototype.generateAuthHeaders = function() {
    if (!this.accessToken) {
      return null;
    }
    return {
      Authorization: "Bearer " + this.accessToken
    };
  };
  return HasuraStorageApi2;
}();

// node_modules/@nhost/hasura-storage-js/dist/esm/hasura-storage-client.js
init_react();
var __assign5 = function() {
  __assign5 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign5.apply(this, arguments);
};
var __awaiter6 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result2) {
      result2.done ? resolve(result2.value) : adopt(result2.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator5 = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var HasuraStorageClient = function() {
  function HasuraStorageClient2(_a5) {
    var url = _a5.url;
    this.url = url;
    this.api = new HasuraStorageApi({ url });
  }
  HasuraStorageClient2.prototype.upload = function(params) {
    return __awaiter6(this, void 0, void 0, function() {
      var file, _a5, fileMetadata, error;
      return __generator5(this, function(_b) {
        switch (_b.label) {
          case 0:
            file = new FormData();
            file.append("file", params.file);
            return [4, this.api.upload(__assign5(__assign5({}, params), { file }))];
          case 1:
            _a5 = _b.sent(), fileMetadata = _a5.fileMetadata, error = _a5.error;
            if (error) {
              return [2, { fileMetadata: null, error }];
            }
            if (!fileMetadata) {
              return [2, { fileMetadata: null, error: new Error("Invalid file returned") }];
            }
            return [2, { fileMetadata, error: null }];
        }
      });
    });
  };
  HasuraStorageClient2.prototype.getUrl = function(params) {
    var fileId = params.fileId;
    return this.url + "/files/" + fileId;
  };
  HasuraStorageClient2.prototype.getPresignedUrl = function(params) {
    return __awaiter6(this, void 0, void 0, function() {
      var _a5, presignedUrl, error;
      return __generator5(this, function(_b) {
        switch (_b.label) {
          case 0:
            return [4, this.api.getPresignedUrl(params)];
          case 1:
            _a5 = _b.sent(), presignedUrl = _a5.presignedUrl, error = _a5.error;
            if (error) {
              return [2, { presignedUrl: null, error }];
            }
            if (!presignedUrl) {
              return [2, { presignedUrl: null, error: new Error("Invalid file id") }];
            }
            return [2, { presignedUrl, error: null }];
        }
      });
    });
  };
  HasuraStorageClient2.prototype.delete = function(params) {
    return __awaiter6(this, void 0, void 0, function() {
      var error;
      return __generator5(this, function(_a5) {
        switch (_a5.label) {
          case 0:
            return [4, this.api.delete(params)];
          case 1:
            error = _a5.sent().error;
            if (error) {
              return [2, { error }];
            }
            return [2, { error: null }];
        }
      });
    });
  };
  HasuraStorageClient2.prototype.setAccessToken = function(accessToken) {
    this.api.setAccessToken(accessToken);
  };
  return HasuraStorageClient2;
}();

// node_modules/@nhost/hasura-storage-js/dist/esm/utils/types.js
init_react();

// node_modules/@nhost/nhost-js/dist/esm/clients/functions.js
init_react();
var import_axios3 = __toModule(require_axios6());
var __assign6 = function() {
  __assign6 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign6.apply(this, arguments);
};
var __awaiter7 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result2) {
      result2.done ? resolve(result2.value) : adopt(result2.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator6 = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var NhostFunctionsClient = function() {
  function NhostFunctionsClient2(params) {
    var url = params.url;
    this.accessToken = null;
    this.instance = import_axios3.default.create({
      baseURL: url
    });
  }
  NhostFunctionsClient2.prototype.call = function(url, data, config) {
    return __awaiter7(this, void 0, void 0, function() {
      var headers, res, error_1;
      return __generator6(this, function(_a5) {
        switch (_a5.label) {
          case 0:
            headers = __assign6(__assign6({}, this.generateAccessTokenHeaders()), config === null || config === void 0 ? void 0 : config.headers);
            _a5.label = 1;
          case 1:
            _a5.trys.push([1, 3, , 4]);
            return [4, this.instance.post(url, data, __assign6(__assign6({}, config), { headers }))];
          case 2:
            res = _a5.sent();
            return [3, 4];
          case 3:
            error_1 = _a5.sent();
            if (error_1 instanceof Error) {
              return [2, { res: null, error: error_1 }];
            }
            return [3, 4];
          case 4:
            if (!res) {
              return [2, {
                res: null,
                error: Error("Unable to make post request to funtion")
              }];
            }
            return [2, { res, error: null }];
        }
      });
    });
  };
  NhostFunctionsClient2.prototype.setAccessToken = function(accessToken) {
    if (!accessToken) {
      this.accessToken = null;
      return;
    }
    this.accessToken = accessToken;
  };
  NhostFunctionsClient2.prototype.generateAccessTokenHeaders = function() {
    if (!this.accessToken) {
      return;
    }
    return {
      Authorization: "Bearer " + this.accessToken
    };
  };
  return NhostFunctionsClient2;
}();

// node_modules/@nhost/nhost-js/dist/esm/clients/graphql.js
init_react();
var import_axios4 = __toModule(require_axios6());
var __assign7 = function() {
  __assign7 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign7.apply(this, arguments);
};
var __awaiter8 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result2) {
      result2.done ? resolve(result2.value) : adopt(result2.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator7 = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var NhostGraphqlClient = function() {
  function NhostGraphqlClient2(params) {
    var url = params.url;
    this.url = url;
    this.accessToken = null;
    this.instance = import_axios4.default.create({
      baseURL: url
    });
  }
  NhostGraphqlClient2.prototype.request = function(document2, variables, config) {
    return __awaiter8(this, void 0, void 0, function() {
      var headers, operationName, responseData, res, error_1;
      return __generator7(this, function(_a5) {
        switch (_a5.label) {
          case 0:
            headers = __assign7(__assign7({}, config === null || config === void 0 ? void 0 : config.headers), this.generateAccessTokenHeaders());
            operationName = "";
            _a5.label = 1;
          case 1:
            _a5.trys.push([1, 3, , 4]);
            return [4, this.instance.post("", {
              operationName: operationName ? operationName : void 0,
              query: document2,
              variables
            }, __assign7(__assign7({}, config), { headers }))];
          case 2:
            res = _a5.sent();
            responseData = res.data;
            return [3, 4];
          case 3:
            error_1 = _a5.sent();
            if (error_1 instanceof Error) {
              return [2, { data: null, error: error_1 }];
            }
            console.error(error_1);
            return [2, { data: null, error: Error("Unable to get do GraphQL request") }];
          case 4:
            if (typeof responseData !== "object" || Array.isArray(responseData) || responseData === null) {
              return [2, {
                data: null,
                error: Error("incorrect response data from GraphQL server")
              }];
            }
            responseData = responseData;
            if (responseData.errors) {
              return [2, {
                data: null,
                error: responseData.errors
              }];
            }
            return [2, { data: responseData.data, error: null }];
        }
      });
    });
  };
  NhostGraphqlClient2.prototype.getUrl = function() {
    return this.url;
  };
  NhostGraphqlClient2.prototype.setAccessToken = function(accessToken) {
    if (!accessToken) {
      this.accessToken = null;
      return;
    }
    this.accessToken = accessToken;
  };
  NhostGraphqlClient2.prototype.generateAccessTokenHeaders = function() {
    if (!this.accessToken) {
      return;
    }
    return {
      Authorization: "Bearer " + this.accessToken
    };
  };
  return NhostGraphqlClient2;
}();

// node_modules/@nhost/nhost-js/dist/esm/core/nhost-client.js
var NhostClient = function() {
  function NhostClient2(params) {
    var _this = this;
    if (!params.backendUrl)
      throw "Please specify a `backendUrl`. Docs: [todo]!";
    var backendUrl = params.backendUrl, refreshIntervalTime = params.refreshIntervalTime, clientStorage = params.clientStorage, clientStorageType = params.clientStorageType, autoRefreshToken = params.autoRefreshToken, autoLogin = params.autoLogin;
    this.auth = new HasuraAuthClient({
      url: backendUrl + "/v1/auth",
      refreshIntervalTime,
      clientStorage,
      clientStorageType,
      autoRefreshToken,
      autoLogin
    });
    this.storage = new HasuraStorageClient({
      url: backendUrl + "/v1/storage"
    });
    this.functions = new NhostFunctionsClient({
      url: backendUrl + "/v1/functions"
    });
    this.graphql = new NhostGraphqlClient({
      url: backendUrl + "/v1/graphql"
    });
    this.storage.setAccessToken(this.auth.getAccessToken());
    this.functions.setAccessToken(this.auth.getAccessToken());
    this.graphql.setAccessToken(this.auth.getAccessToken());
    this.auth.onAuthStateChanged(function(_event, session) {
      _this.storage.setAccessToken(session === null || session === void 0 ? void 0 : session.accessToken);
      _this.functions.setAccessToken(session === null || session === void 0 ? void 0 : session.accessToken);
      _this.graphql.setAccessToken(session === null || session === void 0 ? void 0 : session.accessToken);
    });
    this.auth.onTokenChanged(function(session) {
      _this.storage.setAccessToken(session === null || session === void 0 ? void 0 : session.accessToken);
      _this.functions.setAccessToken(session === null || session === void 0 ? void 0 : session.accessToken);
      _this.graphql.setAccessToken(session === null || session === void 0 ? void 0 : session.accessToken);
    });
  }
  return NhostClient2;
}();

// app/utils/nhost.ts
var nhost = new NhostClient({
  backendUrl: "https://xflagfcmiemryomkpfoy.nhost.run"
});
(async () => {
  const todos = await nhost.graphql.request(`
    query {
      stream {
        id
        workout {
          id
          name
          notes
          reps
          time
          updated_at
          weight
          workout_type
          description
          created_at
        }
      }
    }
  `);
  console.log(JSON.stringify(todos.data, null, 2));
})();

// app/layout.tsx
init_react();
var React4 = __toModule(require_react());
function RemixLogo(props) {
  return /* @__PURE__ */ React4.createElement("svg", {
    viewBox: "0 0 659 165",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    "aria-labelledby": "remix-run-logo-title",
    role: "img",
    width: "106",
    height: "30",
    fill: "currentColor",
    ...props
  }, /* @__PURE__ */ React4.createElement("title", {
    id: "remix-run-logo-title"
  }, "Remix Logo"), /* @__PURE__ */ React4.createElement("path", {
    d: "M0 161V136H45.5416C53.1486 136 54.8003 141.638 54.8003 145V161H0Z M133.85 124.16C135.3 142.762 135.3 151.482 135.3 161H92.2283C92.2283 158.927 92.2653 157.03 92.3028 155.107C92.4195 149.128 92.5411 142.894 91.5717 130.304C90.2905 111.872 82.3473 107.776 67.7419 107.776H54.8021H0V74.24H69.7918C88.2407 74.24 97.4651 68.632 97.4651 53.784C97.4651 40.728 88.2407 32.816 69.7918 32.816H0V0H77.4788C119.245 0 140 19.712 140 51.2C140 74.752 125.395 90.112 105.665 92.672C122.32 96 132.057 105.472 133.85 124.16Z"
  }), /* @__PURE__ */ React4.createElement("path", {
    d: "M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z"
  }), /* @__PURE__ */ React4.createElement("path", {
    d: "M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z"
  }), /* @__PURE__ */ React4.createElement("path", {
    d: "M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z"
  }), /* @__PURE__ */ React4.createElement("path", {
    d: "M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z"
  }));
}
function Layout({ children }) {
  return /* @__PURE__ */ React4.createElement("div", {
    className: "remix-app"
  }, /* @__PURE__ */ React4.createElement("header", {
    className: "remix-app__header"
  }, /* @__PURE__ */ React4.createElement("div", {
    className: "container remix-app__header-content"
  }, /* @__PURE__ */ React4.createElement(Link, {
    to: "/",
    title: "Remix",
    className: "remix-app__header-home-link"
  }, /* @__PURE__ */ React4.createElement(RemixLogo, null)), /* @__PURE__ */ React4.createElement("nav", {
    "aria-label": "Main navigation",
    className: "remix-app__header-nav"
  }, /* @__PURE__ */ React4.createElement("ul", null, /* @__PURE__ */ React4.createElement("li", null, /* @__PURE__ */ React4.createElement(Link, {
    to: "/"
  }, "Home")), /* @__PURE__ */ React4.createElement("li", null, /* @__PURE__ */ React4.createElement("a", {
    href: "https://remix.run/docs"
  }, "Remix Docs")), /* @__PURE__ */ React4.createElement("li", null, /* @__PURE__ */ React4.createElement("a", {
    href: "https://github.com/remix-run/remix"
  }, "GitHub")))))), /* @__PURE__ */ React4.createElement("div", {
    className: "remix-app__main"
  }, /* @__PURE__ */ React4.createElement("div", {
    className: "container remix-app__main-content"
  }, children)), /* @__PURE__ */ React4.createElement("footer", {
    className: "remix-app__footer"
  }, /* @__PURE__ */ React4.createElement("div", {
    className: "container remix-app__footer-content"
  }, /* @__PURE__ */ React4.createElement("p", null, "\xA9 You!"))));
}
var layout_default = Layout;

// app/document.tsx
init_react();
var React5 = __toModule(require_react());
var RouteChangeAnnouncement = React5.memo(() => {
  let [hydrated, setHydrated] = React5.useState(false);
  let [innerHtml, setInnerHtml] = React5.useState("");
  let location = (0, import_react_router_dom.useLocation)();
  React5.useEffect(() => {
    setHydrated(true);
  }, []);
  let firstRenderRef = React5.useRef(true);
  React5.useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    let pageTitle = location.pathname === "/" ? "Home page" : document.title;
    setInnerHtml(`Navigated to ${pageTitle}`);
  }, [location.pathname]);
  if (!hydrated) {
    return null;
  }
  return /* @__PURE__ */ React5.createElement("div", {
    "aria-live": "assertive",
    "aria-atomic": true,
    id: "route-change-region",
    style: {
      border: "0",
      clipPath: "inset(100%)",
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: "0",
      position: "absolute",
      width: "1px",
      whiteSpace: "nowrap",
      wordWrap: "normal"
    }
  }, innerHtml);
});
function Document2({
  children,
  title
}) {
  return /* @__PURE__ */ React5.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React5.createElement("head", null, /* @__PURE__ */ React5.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React5.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React5.createElement("title", null, title) : null, /* @__PURE__ */ React5.createElement(Meta, null), /* @__PURE__ */ React5.createElement(Links, null)), /* @__PURE__ */ React5.createElement("body", null, children, /* @__PURE__ */ React5.createElement(RouteChangeAnnouncement, null), /* @__PURE__ */ React5.createElement(ScrollRestoration, null), /* @__PURE__ */ React5.createElement(Scripts, null), /* @__PURE__ */ React5.createElement(LiveReload, null)));
}
var document_default = Document2;

// app/styles/demos/remix.css
var remix_default = "/build/_assets/remix-5PPS2YMF.css";

// app/styles/global.css
var global_default2 = "/build/_assets/global-AKFP5T7A.css";

// app/styles/dark.css
var dark_default = "/build/_assets/dark-APYDFYJA.css";

// app/root.tsx
var links = () => {
  return [
    { rel: "stylesheet", href: global_default2 },
    {
      rel: "stylesheet",
      href: dark_default,
      media: "(prefers-color-scheme: dark)"
    },
    { rel: "stylesheet", href: remix_default }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement(NhostAuthProvider, {
    nhost
  }, /* @__PURE__ */ React.createElement(NhostApolloProvider, {
    nhost
  }, /* @__PURE__ */ React.createElement(document_default, null, /* @__PURE__ */ React.createElement(layout_default, null, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null)))));
}
function CatchBoundary() {
  let caught = useCatch();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(document_default, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement(layout_default, null, /* @__PURE__ */ React.createElement("h1", null, caught.status, ": ", caught.statusText), message));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(document_default, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(layout_default, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}
export {
  CatchBoundary,
  ErrorBoundary,
  App as default,
  links
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=/build/root-LLTQ3RPW.js.map
