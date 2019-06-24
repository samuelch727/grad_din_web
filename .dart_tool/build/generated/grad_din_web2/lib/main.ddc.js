define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/grad_din_web2/pages/welcomePage'], function(dart_sdk, animation, material, welcomePage) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__media_query = animation.src__widgets__media_query;
  const src__widgets__binding = animation.src__widgets__binding;
  const src__material__app = material.src__material__app;
  const src__material__theme_data = material.src__material__theme_data;
  const src__material__scaffold = material.src__material__scaffold;
  const pages__welcomePage = welcomePage.pages__welcomePage;
  const main = Object.create(dart.library);
  main.MyApp = class MyApp extends src__widgets__framework.StatefulWidget {
    createState() {
      return new main._MyAppState.new();
    }
  };
  (main.MyApp.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.MyApp.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    createState: dart.fnType(main._MyAppState, [])
  }));
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  main._MyAppState = class _MyAppState extends src__widgets__framework.State$(main.MyApp) {
    build(context) {
      return new src__material__app.MaterialApp.new({theme: src__material__theme_data.ThemeData.new({fontFamily: "NotoSans"}), title: "Graduration Party 2019", home: new main.homePage.new({$creationLocationd_0dea112b090073317d4: const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 13, file: "org-dartlang-app:///packages/grad_din_web2/main.dart", parameterLocations: const$ || (const$ = dart.constList([], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 12, file: "org-dartlang-app:///packages/grad_din_web2/main.dart", parameterLocations: const$4 || (const$4 = dart.constList([const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 7, name: "theme"}))), const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 7, name: "title"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 7, name: "home"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (main._MyAppState.new = function() {
    main._MyAppState.__proto__.new.call(this);
    ;
  }).prototype = main._MyAppState.prototype;
  dart.addTypeTests(main._MyAppState);
  dart.setMethodSignature(main._MyAppState, () => ({
    __proto__: dart.getMethods(main._MyAppState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  main.homePage = class homePage extends src__widgets__framework.StatefulWidget {
    createState() {
      return new main._homePageState.new();
    }
  };
  (main.homePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.homePage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.homePage.prototype;
  dart.addTypeTests(main.homePage);
  dart.setMethodSignature(main.homePage, () => ({
    __proto__: dart.getMethods(main.homePage.__proto__),
    createState: dart.fnType(main._homePageState, [])
  }));
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  main._homePageState = class _homePageState extends src__widgets__framework.State$(main.homePage) {
    build(context) {
      let deviceWidth = src__widgets__media_query.MediaQuery.of(context).size.width;
      core.print(deviceWidth);
      return new src__material__scaffold.Scaffold.new({body: new pages__welcomePage.welcomePage.new({$creationLocationd_0dea112b090073317d4: const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 13, file: "org-dartlang-app:///packages/grad_din_web2/main.dart", parameterLocations: const$6 || (const$6 = dart.constList([], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 12, file: "org-dartlang-app:///packages/grad_din_web2/main.dart", parameterLocations: const$9 || (const$9 = dart.constList([const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 7, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (main._homePageState.new = function() {
    main._homePageState.__proto__.new.call(this);
    ;
  }).prototype = main._homePageState.prototype;
  dart.addTypeTests(main._homePageState);
  dart.setMethodSignature(main._homePageState, () => ({
    __proto__: dart.getMethods(main._homePageState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  let const$11;
  let const$12;
  main.main = function() {
    return src__widgets__binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 6, column: 23, file: "org-dartlang-app:///packages/grad_din_web2/main.dart", parameterLocations: const$11 || (const$11 = dart.constList([], src__widgets__widget_inspector._Location))})))}));
  };
  dart.trackLibraries("packages/grad_din_web2/main", {
    "package:grad_din_web2/main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/grad_din_web2/main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;AAU+B;IAAa;;;QAF/B;;AAAQ,8CAAW,GAAG;;EAAC;;;;;;;;;;;;;;UAOR;AACxB,YAAO,gDACE,qDAAsB,qBACtB,gCACD;IAEV;;;;;EACF;;;;;;;;AAKkC;IAAgB;;;QAFlC;;AAAQ,iDAAW,GAAG;;EAAC;;;;;;;;;;;;UAOX;AACpB,wBAAyB,AAAY,AAAK,wCAAd,OAAO;MACvC,WAAM,WAAW;AACjB,YAAO,iDAEC;IAGV;;;;;EACF;;;;;;;;;AApCe,wCAAO;EAAQ","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
