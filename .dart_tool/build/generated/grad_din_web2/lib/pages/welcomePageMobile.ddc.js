define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, animation, material, animation$) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__media_query = animation.src__widgets__media_query;
  const src__widgets__scroll_view = animation.src__widgets__scroll_view;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__material__scaffold = material.src__material__scaffold;
  const src__painting__text_style = animation$.src__painting__text_style;
  const pages__welcomePageMobile = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  pages__welcomePageMobile.welcomePageMobile = class welcomePageMobile extends src__widgets__framework.StatefulWidget {
    createState() {
      return new pages__welcomePageMobile._welcomePageMobileState.new();
    }
  };
  (pages__welcomePageMobile.welcomePageMobile.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    pages__welcomePageMobile.welcomePageMobile.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pages__welcomePageMobile.welcomePageMobile.prototype;
  dart.addTypeTests(pages__welcomePageMobile.welcomePageMobile);
  dart.setMethodSignature(pages__welcomePageMobile.welcomePageMobile, () => ({
    __proto__: dart.getMethods(pages__welcomePageMobile.welcomePageMobile.__proto__),
    createState: dart.fnType(pages__welcomePageMobile._welcomePageMobileState, [])
  }));
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  pages__welcomePageMobile._welcomePageMobileState = class _welcomePageMobileState extends src__widgets__framework.State$(pages__welcomePageMobile.welcomePageMobile) {
    build(context) {
      let _deviceWidth = src__widgets__media_query.MediaQuery.of(context).size.width;
      let _deviceHeight = src__widgets__media_query.MediaQuery.of(context).size.height;
      let textSize = dart.notNull(_deviceHeight) * 0.02;
      return new src__material__scaffold.Scaffold.new({body: new src__widgets__scroll_view.ListView.new({children: JSArrayOfWidget().of([new src__widgets__container.Container.new({child: new src__widgets__text.Text.new("Graduration Party 2019 Mobile", {style: new src__painting__text_style.TextStyle.new({fontSize: 30.0}), $creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 22, file: "org-dartlang-app:///packages/grad_din_web2/pages/welcomePageMobile.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 27, name: "data"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 60, name: "style"})))], src__widgets__widget_inspector._Location))})))}), margin: const$3 || (const$3 = dart.const(new src__painting__edge_insets.EdgeInsets.only({left: 20.0, right: 20.0}))), $creationLocationd_0dea112b090073317d4: const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 13, file: "org-dartlang-app:///packages/grad_din_web2/pages/welcomePageMobile.dart", parameterLocations: const$6 || (const$6 = dart.constList([const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 15, name: "child"}))), const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 15, name: "margin"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 13, file: "org-dartlang-app:///packages/grad_din_web2/pages/welcomePageMobile.dart", parameterLocations: const$9 || (const$9 = dart.constList([const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 11, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 12, file: "org-dartlang-app:///packages/grad_din_web2/pages/welcomePageMobile.dart", parameterLocations: const$12 || (const$12 = dart.constList([const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 7, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (pages__welcomePageMobile._welcomePageMobileState.new = function() {
    pages__welcomePageMobile._welcomePageMobileState.__proto__.new.call(this);
    ;
  }).prototype = pages__welcomePageMobile._welcomePageMobileState.prototype;
  dart.addTypeTests(pages__welcomePageMobile._welcomePageMobileState);
  dart.setMethodSignature(pages__welcomePageMobile._welcomePageMobileState, () => ({
    __proto__: dart.getMethods(pages__welcomePageMobile._welcomePageMobileState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.trackLibraries("packages/grad_din_web2/pages/welcomePageMobile", {
    "package:grad_din_web2/pages/welcomePageMobile.dart": pages__welcomePageMobile
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/grad_din_web2/pages/welcomePageMobile.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;AAK2C;IAAyB;;;QAF3C;;AAAQ,8EAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;UAOpB;AACpB,yBAA0B,AAAY,AAAK,wCAAd,OAAO;AACpC,0BAA2B,AAAY,AAAK,wCAAd,OAAO;AACrC,qBAAyB,aAAd,aAAa,IAAG;AAC/B,YAAO,iDACC,sDACgB,sBAEhB,kDACS,gCAAK,yCAAwC,uDAAoB,olBAC1D,uFAAsB,aAAa;IAK7D;;;;;EACF","file":"welcomePageMobile.ddc.js"}');
  // Exports:
  return {
    pages__welcomePageMobile: pages__welcomePageMobile
  };
});

//# sourceMappingURL=welcomePageMobile.ddc.js.map
