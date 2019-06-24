define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/gestures/arena', 'packages/flutter_web/material'], function(dart_sdk, animation, animation$, ui, arena, material) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__painting__decoration_image = animation.src__painting__decoration_image;
  const src__widgets__container = animation.src__widgets__container;
  const src__painting__box_decoration = animation.src__painting__box_decoration;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__gesture_detector = animation.src__widgets__gesture_detector;
  const src__widgets__heroes = animation.src__widgets__heroes;
  const src__widgets__implicit_animations = animation.src__widgets__implicit_animations;
  const src__painting__gradient = animation$.src__painting__gradient;
  const src__painting__border_radius = animation$.src__painting__border_radius;
  const src__painting__alignment = animation$.src__painting__alignment;
  const src__animation__curves = animation$.src__animation__curves;
  const src__painting__box_shadow = animation$.src__painting__box_shadow;
  const ui$ = ui.ui;
  const src__gestures__tap = arena.src__gestures__tap;
  const src__material__colors = material.src__material__colors;
  const $function = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let TapDownDetailsToNull = () => (TapDownDetailsToNull = dart.constFn(dart.fnType(core.Null, [src__gestures__tap.TapDownDetails])))();
  let TapUpDetailsToNull = () => (TapUpDetailsToNull = dart.constFn(dart.fnType(core.Null, [src__gestures__tap.TapUpDetails])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let JSArrayOfBoxShadow = () => (JSArrayOfBoxShadow = dart.constFn(_interceptors.JSArray$(src__painting__box_shadow.BoxShadow)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  $function.customCard = class customCard extends src__widgets__framework.StatefulWidget {
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get gradient() {
      return this[gradient$];
    }
    set gradient(value) {
      super.gradient = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get image() {
      return this[image$];
    }
    set image(value) {
      super.image = value;
    }
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get enablePressDown() {
      return this[enablePressDown$];
    }
    set enablePressDown(value) {
      this[enablePressDown$] = value;
    }
    createState() {
      return new $function._customCardState.new();
    }
  };
  ($function.customCard.new = function(opts) {
    let height = opts && 'height' in opts ? opts.height : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let id = opts && 'id' in opts ? opts.id : null;
    let gradient = opts && 'gradient' in opts ? opts.gradient : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let image = opts && 'image' in opts ? opts.image : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let enablePressDown = opts && 'enablePressDown' in opts ? opts.enablePressDown : true;
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[height$] = height;
    this[child$] = child;
    this[width$] = width;
    this[id$] = id;
    this[gradient$] = gradient;
    this[color$] = color;
    this[image$] = image;
    this[onPressed$] = onPressed;
    this[enablePressDown$] = enablePressDown;
    $function.customCard.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = $function.customCard.prototype;
  dart.addTypeTests($function.customCard);
  const height$ = Symbol("customCard.height");
  const child$ = Symbol("customCard.child");
  const width$ = Symbol("customCard.width");
  const id$ = Symbol("customCard.id");
  const gradient$ = Symbol("customCard.gradient");
  const color$ = Symbol("customCard.color");
  const image$ = Symbol("customCard.image");
  const onPressed$ = Symbol("customCard.onPressed");
  const enablePressDown$ = Symbol("customCard.enablePressDown");
  dart.setMethodSignature($function.customCard, () => ({
    __proto__: dart.getMethods($function.customCard.__proto__),
    createState: dart.fnType($function._customCardState, [])
  }));
  dart.setFieldSignature($function.customCard, () => ({
    __proto__: dart.getFields($function.customCard.__proto__),
    height: dart.finalFieldType(dart.dynamic),
    child: dart.finalFieldType(src__widgets__framework.Widget),
    width: dart.finalFieldType(core.double),
    id: dart.finalFieldType(core.String),
    gradient: dart.finalFieldType(src__painting__gradient.Gradient),
    color: dart.finalFieldType(ui$.Color),
    image: dart.finalFieldType(src__painting__decoration_image.DecorationImage),
    onPressed: dart.finalFieldType(dart.fnType(dart.void, [])),
    enablePressDown: dart.fieldType(core.bool)
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
  $function._customCardState = class _customCardState extends src__widgets__framework.State$($function.customCard) {
    tapIsDown() {
      this.setState(dart.fn(() => {
        this.pressShadowMinimizer = 0.5;
        this.pressDimensionMinimizer = 0.98;
      }, VoidToNull()));
    }
    tap() {
      this.tapIsDown();
    }
    tapIsUp() {
      this.setState(dart.fn(() => {
        this.pressShadowMinimizer = 1.0;
        this.pressDimensionMinimizer = 1.0;
      }, VoidToNull()));
    }
    build(context) {
      if (this.widget.onPressed != null) {
        this.widget.enablePressDown = true;
      }
      let heightToWidthRatio = dart.notNull(this.widget.width) / dart.notNull(core.num._check(this.widget.height));
      return new src__widgets__container.Container.new({height: core.double._check(dart.dsend(this.widget.height, '+', [10])), width: this.widget.width, decoration: new src__painting__box_decoration.BoxDecoration.new({borderRadius: new src__painting__border_radius.BorderRadius.all(const$ || (const$ = dart.const(new ui$.Radius.circular(10.0))))}), child: new src__widgets__basic.Stack.new({children: JSArrayOfWidget().of([new src__widgets__container.Container.new({height: core.double._check(this.widget.height), width: this.widget.width, margin: const$0 || (const$0 = dart.const(new src__painting__edge_insets.EdgeInsets.only({right: 0.0, top: 10.0, left: 0.0}))), $creationLocationd_0dea112b090073317d4: const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 71, column: 11, file: "org-dartlang-app:///packages/grad_din_web2/function.dart", parameterLocations: const$4 || (const$4 = dart.constList([const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 72, column: 13, name: "height"}))), const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 13, name: "width"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 74, column: 13, name: "margin"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Align.new({alignment: src__painting__alignment.Alignment.center, child: new src__widgets__gesture_detector.GestureDetector.new({onTapDown: dart.fn(details => {
                  if (dart.test(this.widget.enablePressDown)) {
                    this.tapIsDown();
                  }
                }, TapDownDetailsToNull()), onTapUp: dart.fn(details => {
                  if (dart.test(this.widget.enablePressDown)) {
                    this.tapIsUp();
                  }
                }, TapUpDetailsToNull()), onTapCancel: dart.fn(() => {
                  if (dart.test(this.widget.enablePressDown)) {
                    this.tapIsUp();
                  }
                }, VoidToNull()), onTap: dart.fn(() => async.async(core.Null, (function*() {
                  if (dart.test(this.widget.enablePressDown)) {
                    this.tapIsDown();
                    yield async.Future.delayed(const$6 || (const$6 = dart.const(new core.Duration.new({milliseconds: 120}))));
                    if (this.widget.onPressed != null) {
                      this.widget.onPressed();
                    }
                    this.tapIsUp();
                  }
                }).bind(this)), VoidToFutureOfNull()), child: new src__widgets__heroes.Hero.new({transitionOnUserGestures: true, tag: this.widget.id, child: new src__widgets__implicit_animations.AnimatedContainer.new({duration: new core.Duration.new({milliseconds: 200}), curve: src__animation__curves.Curves.decelerate, margin: const$7 || (const$7 = dart.const(new src__painting__edge_insets.EdgeInsets.only({right: 0.0, top: 10.0, left: 0.0}))), height: core.double._check(dart.dsend(this.widget.height, '*', [this.pressDimensionMinimizer])), width: core.double._check(dart.dsend(dart.dsend(this.widget.height, '*', [this.pressDimensionMinimizer]), '*', [heightToWidthRatio])), decoration: new src__painting__box_decoration.BoxDecoration.new({borderRadius: new src__painting__border_radius.BorderRadius.all(const$8 || (const$8 = dart.const(new ui$.Radius.circular(10.0)))), gradient: this.widget.gradient != null ? this.widget.gradient : null, color: this.widget.color != null ? this.widget.color : null, image: this.widget.image != null ? this.widget.image : null, boxShadow: dart.test(this.widget.enablePressDown) ? JSArrayOfBoxShadow().of([new src__painting__box_shadow.BoxShadow.new({color: src__material__colors.Colors.grey._get(600), blurRadius: 15.0 * dart.notNull(this.pressShadowMinimizer)})]) : null}), child: this.widget.child, $creationLocationd_0dea112b090073317d4: const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 107, column: 24, file: "org-dartlang-app:///packages/grad_din_web2/function.dart", parameterLocations: const$16 || (const$16 = dart.constList([const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 108, column: 19, name: "duration"}))), const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 109, column: 19, name: "curve"}))), const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 110, column: 19, name: "margin"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 112, column: 21, name: "height"}))), const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 113, column: 21, name: "width"}))), const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 116, column: 21, name: "decoration"}))), const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 131, column: 21, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 104, column: 22, file: "org-dartlang-app:///packages/grad_din_web2/function.dart", parameterLocations: const$21 || (const$21 = dart.constList([const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 17, name: "transitionOnUserGestures"}))), const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 106, column: 17, name: "tag"}))), const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 107, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 24, file: "org-dartlang-app:///packages/grad_din_web2/function.dart", parameterLocations: const$28 || (const$28 = dart.constList([const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 79, column: 15, name: "onTapDown"}))), const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 84, column: 15, name: "onTapUp"}))), const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 89, column: 15, name: "onTapCancel"}))), const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 94, column: 15, name: "onTap"}))), const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 104, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 76, column: 15, file: "org-dartlang-app:///packages/grad_din_web2/function.dart", parameterLocations: const$32 || (const$32 = dart.constList([const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 13, name: "alignment"}))), const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 69, column: 18, file: "org-dartlang-app:///packages/grad_din_web2/function.dart", parameterLocations: const$35 || (const$35 = dart.constList([const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 70, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 62, column: 16, file: "org-dartlang-app:///packages/grad_din_web2/function.dart", parameterLocations: const$41 || (const$41 = dart.constList([const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 7, name: "height"}))), const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 65, column: 7, name: "width"}))), const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 66, column: 7, name: "decoration"}))), const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 69, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  ($function._customCardState.new = function() {
    this.pressShadowMinimizer = 1.0;
    this.pressDimensionMinimizer = 1.0;
    $function._customCardState.__proto__.new.call(this);
    ;
  }).prototype = $function._customCardState.prototype;
  dart.addTypeTests($function._customCardState);
  dart.setMethodSignature($function._customCardState, () => ({
    __proto__: dart.getMethods($function._customCardState.__proto__),
    tapIsDown: dart.fnType(dart.void, []),
    tap: dart.fnType(dart.void, []),
    tapIsUp: dart.fnType(dart.void, []),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature($function._customCardState, () => ({
    __proto__: dart.getFields($function._customCardState.__proto__),
    pressShadowMinimizer: dart.fieldType(core.double),
    pressDimensionMinimizer: dart.fieldType(core.double)
  }));
  dart.trackLibraries("packages/grad_din_web2/function", {
    "package:grad_din_web2/function.dart": $function
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/grad_din_web2/function.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAeQ;;;;;;IACO;;;;;;IACA;;;;;;IACA;;;;;;IACE;;;;;;IACH;;;;;;IACU;;;;;;IACG;;;;;;IACpB;;;;;;;AAE6B;IAAkB;;;QArB7C;QACA;QACA;QACU;QACV;QACA;QACA;QACA;QACA,6EAAkB;QACnB;;IATC;IACA;IACA;IACU;IACV;IACA;IACA;IACA;IACA;AAEH,wDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAmBjB,cAAS;QACP,4BAAuB;QACvB,+BAA0B;;IAE9B;;MAGE;IACF;;MAGE,cAAS;QACP,4BAAuB;QACvB,+BAA0B;;IAE9B;UAE0B;AACxB,UAAM,AAAO,yBAAa;QACxB,AAAO,8BAAkB;;AAEvB,+BAAkC,aAAb,AAAO,kDAAQ,AAAO;AAO/C,YAAW,uEAEa,WAAd,AAAO,0BAAS,cACjB,AAAO,+BACF,mEACiB,kDAAU,uDAAgB,mBAE5C,6CACY,sBACnB,sEACU,AAAO,4BACR,AAAO,2BACA,wFAAuB,UAAU,YAAY,+rBAEzD,8CACmB,kDACV,mEACE,QAAgB;AACzB,gCAAI,AAAO;oBACT;;qDAGK,QAAc;AACrB,gCAAI,AAAO;oBACT;;uDAGS;AACX,gCAAI,AAAO;oBACT;;yCAGG;AACL,gCAAI,AAAO;oBACT;oBACA,MAAU,qBAAqB,sEAAuB;AACtD,wBAAI,AAAO,yBAAa;sBACtB,AAAO;;oBAET;;gBAEH,8CACM,6DACqB,WACrB,AAAO,uBACL,uEACS,qCAAuB,cACvB,kDAER,wFAAuB,UAAU,YAAY,oCAC3B,WAAd,AAAO,0BAAS,2DAEA,WADH,WAAd,AAAO,0BACd,sCACA,kBAAkB,iBACF,mEAED,kDAAU,yDAAgB,oBAEvC,AAAO,AAAiB,wBAAL,OAAO,AAAO,uBAAW,aACrC,AAAO,AAAc,qBAAL,OAAO,AAAO,oBAAQ,aAEtC,AAAO,AAAc,qBAAL,OAAO,AAAO,oBAAQ,2BAClC,AAAO,+BAClB,yBACM,oDACY,AAAI,uCAAC,kBACP,AAAK,oBAAE,iCAEvB,eACK,AAAO;IAQhC;;;IA5GI,4BAAuB;IACvB,+BAA0B;;;EA4GhC","file":"function.ddc.js"}');
  // Exports:
  return {
    $function: $function
  };
});

//# sourceMappingURL=function.ddc.js.map
