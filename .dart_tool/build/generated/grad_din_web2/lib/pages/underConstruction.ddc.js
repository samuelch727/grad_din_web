define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, animation, material, animation$) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__media_query = animation.src__widgets__media_query;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__image = animation.src__widgets__image;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__text = animation.src__widgets__text;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__colors = material.src__material__colors;
  const src__painting__alignment = animation$.src__painting__alignment;
  const src__painting__text_style = animation$.src__painting__text_style;
  const pages__underConstruction = Object.create(dart.library);
  const $_get = dartx._get;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  pages__underConstruction.underConstru = class underConstru extends src__widgets__framework.StatefulWidget {
    createState() {
      return new pages__underConstruction._underConstruState.new();
    }
  };
  (pages__underConstruction.underConstru.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    pages__underConstruction.underConstru.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pages__underConstruction.underConstru.prototype;
  dart.addTypeTests(pages__underConstruction.underConstru);
  dart.setMethodSignature(pages__underConstruction.underConstru, () => ({
    __proto__: dart.getMethods(pages__underConstruction.underConstru.__proto__),
    createState: dart.fnType(pages__underConstruction._underConstruState, [])
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
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  let const$28;
  let const$29;
  let const$30;
  let const$31;
  let const$32;
  let const$33;
  let const$34;
  let const$35;
  let const$36;
  let const$37;
  let const$38;
  let const$39;
  let const$40;
  let const$41;
  let const$42;
  let const$43;
  let const$44;
  let const$45;
  let const$46;
  let const$47;
  let const$48;
  let const$49;
  let const$50;
  let const$51;
  let const$52;
  let const$53;
  pages__underConstruction._underConstruState = class _underConstruState extends src__widgets__framework.State$(pages__underConstruction.underConstru) {
    build(context) {
      let _deviceWidth = src__widgets__media_query.MediaQuery.of(context).size.width;
      let _deviceHeight = src__widgets__media_query.MediaQuery.of(context).size.height;
      let _fontSize = [];
      if (dart.notNull(_deviceWidth) > 735) {
        _fontSize = [45.0, 30.0, 20.0];
      } else {
        _fontSize = [dart.notNull(_deviceWidth) / 20, dart.notNull(_deviceWidth) / 30, dart.notNull(_deviceWidth) / 35];
      }
      return new src__material__scaffold.Scaffold.new({body: new src__widgets__basic.Stack.new({children: JSArrayOfWidget().of([new src__widgets__basic.Column.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new src__widgets__container.Container.new({alignment: src__painting__alignment.Alignment.center, child: new src__widgets__image.Image.asset("underConstruction.png", {width: dart.notNull(_deviceWidth) > 735 ? dart.notNull(_deviceWidth) / 2 : dart.notNull(_deviceWidth) / 1.5, $creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 30, file: "org-dartlang-app:///packages/grad_din_web2/pages/underConstruction.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 19, name: "name"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 19, name: "width"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 15, file: "org-dartlang-app:///packages/grad_din_web2/pages/underConstruction.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 17, name: "alignment"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({height: 30.0, $creationLocationd_0dea112b090073317d4: const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 15, file: "org-dartlang-app:///packages/grad_din_web2/pages/underConstruction.dart", parameterLocations: const$8 || (const$8 = dart.constList([const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 17, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({height: 3.0, width: dart.notNull(_deviceWidth) > 735 ? dart.notNull(_deviceWidth) / 2 : dart.notNull(_deviceWidth) / 1.5, color: src__material__colors.Colors.black.withOpacity(0.6), $creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 15, file: "org-dartlang-app:///packages/grad_din_web2/pages/underConstruction.dart", parameterLocations: const$13 || (const$13 = dart.constList([const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 17, name: "height"}))), const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 17, name: "width"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 17, name: "color"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({height: 30.0, $creationLocationd_0dea112b090073317d4: const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 15, file: "org-dartlang-app:///packages/grad_din_web2/pages/underConstruction.dart", parameterLocations: const$16 || (const$16 = dart.constList([const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 17, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({child: new src__widgets__text.Text.new("UNDER CONSTRUCTION", {style: new src__painting__text_style.TextStyle.new({fontSize: core.double._check(_fontSize[$_get](0))}), $creationLocationd_0dea112b090073317d4: const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 24, file: "org-dartlang-app:///packages/grad_din_web2/pages/underConstruction.dart", parameterLocations: const$20 || (const$20 = dart.constList([const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 53, column: 19, name: "data"}))), const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 54, column: 19, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 51, column: 15, file: "org-dartlang-app:///packages/grad_din_web2/pages/underConstruction.dart", parameterLocations: const$23 || (const$23 = dart.constList([const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({child: new src__widgets__text.Text.new("PLEASE COME BACK LATER", {style: new src__painting__text_style.TextStyle.new({fontSize: core.double._check(_fontSize[$_get](1))}), $creationLocationd_0dea112b090073317d4: const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 24, file: "org-dartlang-app:///packages/grad_din_web2/pages/underConstruction.dart", parameterLocations: const$27 || (const$27 = dart.constList([const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 59, column: 19, name: "data"}))), const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 60, column: 19, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 57, column: 15, file: "org-dartlang-app:///packages/grad_din_web2/pages/underConstruction.dart", parameterLocations: const$30 || (const$30 = dart.constList([const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 11, file: "org-dartlang-app:///packages/grad_din_web2/pages/underConstruction.dart", parameterLocations: const$34 || (const$34 = dart.constList([const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 13, name: "mainAxisAlignment"}))), const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 13, name: "children"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Align.new({alignment: src__painting__alignment.Alignment.bottomRight, child: new src__widgets__container.Container.new({margin: new src__painting__edge_insets.EdgeInsets.only({right: dart.notNull(_deviceWidth) / 25, bottom: 10.0}), child: new src__widgets__text.Text.new("Designed by Freepik", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.black54, fontSize: core.double._check(_fontSize[$_get](2))}), $creationLocationd_0dea112b090073317d4: const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 75, column: 22, file: "org-dartlang-app:///packages/grad_din_web2/pages/underConstruction.dart", parameterLocations: const$38 || (const$38 = dart.constList([const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 76, column: 17, name: "data"}))), const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 17, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 20, file: "org-dartlang-app:///packages/grad_din_web2/pages/underConstruction.dart", parameterLocations: const$42 || (const$42 = dart.constList([const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 74, column: 15, name: "margin"}))), const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 75, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 71, column: 11, file: "org-dartlang-app:///packages/grad_din_web2/pages/underConstruction.dart", parameterLocations: const$46 || (const$46 = dart.constList([const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 72, column: 13, name: "alignment"}))), const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 13, file: "org-dartlang-app:///packages/grad_din_web2/pages/underConstruction.dart", parameterLocations: const$49 || (const$49 = dart.constList([const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 12, file: "org-dartlang-app:///packages/grad_din_web2/pages/underConstruction.dart", parameterLocations: const$52 || (const$52 = dart.constList([const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 7, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (pages__underConstruction._underConstruState.new = function() {
    pages__underConstruction._underConstruState.__proto__.new.call(this);
    ;
  }).prototype = pages__underConstruction._underConstruState.prototype;
  dart.addTypeTests(pages__underConstruction._underConstruState);
  dart.setMethodSignature(pages__underConstruction._underConstruState, () => ({
    __proto__: dart.getMethods(pages__underConstruction._underConstruState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.trackLibraries("packages/grad_din_web2/pages/underConstruction", {
    "package:grad_din_web2/pages/underConstruction.dart": pages__underConstruction
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/grad_din_web2/pages/underConstruction.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;AAOsC;IAAoB;;;QAHlD;;AACF,yEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAOO;AACpB,yBAA0B,AAAY,AAAK,wCAAd,OAAO;AACpC,0BAA2B,AAAY,AAAK,wCAAd,OAAO;AACrC,sBAAY;AAChB,UAAiB,aAAb,YAAY,IAAG;QACjB,YAAY,CAAC,MAAM,MAAM;;QAEzB,YAAY,CAAc,aAAb,YAAY,IAAG,IAAiB,aAAb,YAAY,IAAG,IAAiB,aAAb,YAAY,IAAG;;AAEpE,YAAO,iDACC,6CACiB,sBACnB,uDACuC,yDAChB,sBACnB,sDACuB,kDACR,oCACX,iCAIa,aAAb,YAAY,IAAG,MAAmB,aAAb,YAAY,IAAG,IAAiB,aAAb,YAAY,IAAG,opCAK3D,mDACU,kdAEV,mDACU,YACY,aAAb,YAAY,IAAG,MAAmB,aAAb,YAAY,IAAG,IAAiB,aAAb,YAAY,IAAG,YAChD,AAAM,+CAAY,otBAElC,mDACU,wdAEV,kDACS,gCACL,8BACO,0EAAoB,AAAS,SAAA,QAAC,siCAGzC,kDACS,gCACL,kCACO,0EAAoB,AAAS,SAAA,QAAC,soDAW7C,8CACuB,uDACd,mDACc,uDAAyB,aAAb,YAAY,IAAG,YAAY,eACnD,gCACL,+BACO,oDAAwB,mEAAmB,AAAS,SAAA,QAAC;IAM1E;;;;;EACF","file":"underConstruction.ddc.js"}');
  // Exports:
  return {
    pages__underConstruction: pages__underConstruction
  };
});

//# sourceMappingURL=underConstruction.ddc.js.map
