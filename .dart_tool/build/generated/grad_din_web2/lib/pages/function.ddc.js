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
  const src__widgets__basic = animation.src__widgets__basic;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__gesture_detector = animation.src__widgets__gesture_detector;
  const src__widgets__heroes = animation.src__widgets__heroes;
  const src__widgets__implicit_animations = animation.src__widgets__implicit_animations;
  const src__painting__box_decoration = animation.src__painting__box_decoration;
  const src__painting__gradient = animation$.src__painting__gradient;
  const src__painting__alignment = animation$.src__painting__alignment;
  const src__animation__curves = animation$.src__animation__curves;
  const src__painting__border_radius = animation$.src__painting__border_radius;
  const src__painting__box_shadow = animation$.src__painting__box_shadow;
  const ui$ = ui.ui;
  const src__gestures__tap = arena.src__gestures__tap;
  const src__material__colors = material.src__material__colors;
  const pages__function = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let TapDownDetailsToNull = () => (TapDownDetailsToNull = dart.constFn(dart.fnType(core.Null, [src__gestures__tap.TapDownDetails])))();
  let TapUpDetailsToNull = () => (TapUpDetailsToNull = dart.constFn(dart.fnType(core.Null, [src__gestures__tap.TapUpDetails])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let JSArrayOfBoxShadow = () => (JSArrayOfBoxShadow = dart.constFn(_interceptors.JSArray$(src__painting__box_shadow.BoxShadow)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  pages__function.cardWidget = class cardWidget extends src__widgets__framework.StatefulWidget {
    get cardHeight() {
      return this[cardHeight$];
    }
    set cardHeight(value) {
      super.cardHeight = value;
    }
    get cardWidth() {
      return this[cardWidth$];
    }
    set cardWidth(value) {
      super.cardWidth = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get image() {
      return this[image$];
    }
    set image(value) {
      super.image = value;
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
    createState() {
      return new pages__function.cardWidgetState.new({cardHeight: this.cardHeight, cardWidth: this.cardWidth, child: this.child, onPressed: this.onPressed, id: this.id, gradient: this.gradient, color: this.color, image: this.image});
    }
  };
  (pages__function.cardWidget.new = function(opts) {
    let cardHeight = opts && 'cardHeight' in opts ? opts.cardHeight : null;
    let cardWidth = opts && 'cardWidth' in opts ? opts.cardWidth : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let id = opts && 'id' in opts ? opts.id : null;
    let gradient = opts && 'gradient' in opts ? opts.gradient : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let image = opts && 'image' in opts ? opts.image : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[cardHeight$] = cardHeight;
    this[cardWidth$] = cardWidth;
    this[child$] = child;
    this[onPressed$] = onPressed;
    this[id$] = id;
    this[gradient$] = gradient;
    this[color$] = color;
    this[image$] = image;
    pages__function.cardWidget.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pages__function.cardWidget.prototype;
  dart.addTypeTests(pages__function.cardWidget);
  const cardHeight$ = Symbol("cardWidget.cardHeight");
  const cardWidth$ = Symbol("cardWidget.cardWidth");
  const child$ = Symbol("cardWidget.child");
  const onPressed$ = Symbol("cardWidget.onPressed");
  const id$ = Symbol("cardWidget.id");
  const image$ = Symbol("cardWidget.image");
  const gradient$ = Symbol("cardWidget.gradient");
  const color$ = Symbol("cardWidget.color");
  dart.setMethodSignature(pages__function.cardWidget, () => ({
    __proto__: dart.getMethods(pages__function.cardWidget.__proto__),
    createState: dart.fnType(src__widgets__framework.State$(src__widgets__framework.StatefulWidget), [])
  }));
  dart.setFieldSignature(pages__function.cardWidget, () => ({
    __proto__: dart.getFields(pages__function.cardWidget.__proto__),
    cardHeight: dart.finalFieldType(core.double),
    cardWidth: dart.finalFieldType(core.double),
    child: dart.finalFieldType(src__widgets__framework.Widget),
    onPressed: dart.finalFieldType(dart.fnType(dart.void, [])),
    id: dart.finalFieldType(core.String),
    image: dart.finalFieldType(src__painting__decoration_image.DecorationImage),
    gradient: dart.finalFieldType(src__painting__gradient.Gradient),
    color: dart.finalFieldType(ui$.Color)
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
  pages__function.cardWidgetState = class cardWidgetState extends src__widgets__framework.State$(pages__function.cardWidget) {
    get cardHeight() {
      return this[cardHeight$0];
    }
    set cardHeight(value) {
      super.cardHeight = value;
    }
    get image() {
      return this[image$0];
    }
    set image(value) {
      super.image = value;
    }
    get gradient() {
      return this[gradient$0];
    }
    set gradient(value) {
      super.gradient = value;
    }
    get color() {
      return this[color$0];
    }
    set color(value) {
      super.color = value;
    }
    get cardWidth() {
      return this[cardWidth$0];
    }
    set cardWidth(value) {
      super.cardWidth = value;
    }
    get child() {
      return this[child$0];
    }
    set child(value) {
      super.child = value;
    }
    get onPressed() {
      return this[onPressed$0];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get id() {
      return this[id$0];
    }
    set id(value) {
      super.id = value;
    }
    get pressShadowMinimizer() {
      return this[pressShadowMinimizer];
    }
    set pressShadowMinimizer(value) {
      this[pressShadowMinimizer] = value;
    }
    get pressDimensionMinimizer() {
      return this[pressDimensionMinimizer];
    }
    set pressDimensionMinimizer(value) {
      this[pressDimensionMinimizer] = value;
    }
    tapIsDown() {
      this.setState(dart.fn(() => {
        this.pressShadowMinimizer = 0.5;
        this.pressDimensionMinimizer = 0.98;
      }, VoidToNull()));
    }
    updateCard() {
      this.setState(dart.fn(() => {
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
      let heightToWidthRatio = dart.notNull(this.cardWidth) / dart.notNull(this.cardHeight);
      return new src__widgets__container.Container.new({height: dart.notNull(this.cardHeight) + 10.0, width: this.cardWidth, child: new src__widgets__basic.Stack.new({children: JSArrayOfWidget().of([new src__widgets__container.Container.new({height: this.cardHeight, width: this.cardWidth, margin: const$ || (const$ = dart.const(new src__painting__edge_insets.EdgeInsets.only({right: 10.0, top: 10.0, left: 10.0}))), $creationLocationd_0dea112b090073317d4: const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 11, file: "org-dartlang-app:///packages/grad_din_web2/pages/function.dart", parameterLocations: const$3 || (const$3 = dart.constList([const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 21, name: "height"}))), const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 41, name: "width"}))), const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 59, name: "margin"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Align.new({alignment: src__painting__alignment.Alignment.center, child: new src__widgets__gesture_detector.GestureDetector.new({onTapDown: dart.fn(details => {
                  this.tapIsDown();
                }, TapDownDetailsToNull()), onTapUp: dart.fn(details => {
                  this.tapIsUp();
                }, TapUpDetailsToNull()), onTapCancel: dart.fn(() => {
                  this.tapIsUp();
                }, VoidToNull()), onTap: dart.fn(() => async.async(core.Null, (function*() {
                  this.tapIsDown();
                  yield async.Future.delayed(const$5 || (const$5 = dart.const(new core.Duration.new({milliseconds: 150}))));
                  if (this.onPressed != null) {
                    this.onPressed();
                  }
                  this.tapIsUp();
                }).bind(this)), VoidToFutureOfNull()), child: new src__widgets__heroes.Hero.new({transitionOnUserGestures: true, tag: this.id, child: new src__widgets__implicit_animations.AnimatedContainer.new({duration: new core.Duration.new({milliseconds: 200}), curve: src__animation__curves.Curves.decelerate, margin: const$6 || (const$6 = dart.const(new src__painting__edge_insets.EdgeInsets.only({right: 10.0, top: 10.0, left: 10.0}))), height: dart.notNull(this.cardHeight) * dart.notNull(this.pressDimensionMinimizer), width: dart.notNull(this.cardHeight) * dart.notNull(this.pressDimensionMinimizer) * heightToWidthRatio, decoration: new src__painting__box_decoration.BoxDecoration.new({borderRadius: new src__painting__border_radius.BorderRadius.all(const$7 || (const$7 = dart.const(new ui$.Radius.circular(10.0)))), gradient: this.gradient != null ? this.gradient : null, color: this.color != null ? this.color : null, image: this.image != null ? this.image : null, boxShadow: JSArrayOfBoxShadow().of([new src__painting__box_shadow.BoxShadow.new({color: src__material__colors.Colors.grey._get(600), blurRadius: 15.0 * dart.notNull(this.pressShadowMinimizer)})])}), child: this.child, $creationLocationd_0dea112b090073317d4: const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 104, column: 24, file: "org-dartlang-app:///packages/grad_din_web2/pages/function.dart", parameterLocations: const$15 || (const$15 = dart.constList([const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 19, name: "duration"}))), const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 106, column: 19, name: "curve"}))), const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 107, column: 19, name: "margin"}))), const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 108, column: 21, name: "height"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 109, column: 21, name: "width"}))), const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 110, column: 21, name: "decoration"}))), const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 123, column: 21, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 101, column: 22, file: "org-dartlang-app:///packages/grad_din_web2/pages/function.dart", parameterLocations: const$20 || (const$20 = dart.constList([const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 102, column: 17, name: "transitionOnUserGestures"}))), const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 103, column: 17, name: "tag"}))), const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 104, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 83, column: 24, file: "org-dartlang-app:///packages/grad_din_web2/pages/function.dart", parameterLocations: const$27 || (const$27 = dart.constList([const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 84, column: 15, name: "onTapDown"}))), const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 15, name: "onTapUp"}))), const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 90, column: 15, name: "onTapCancel"}))), const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 93, column: 15, name: "onTap"}))), const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 101, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 15, file: "org-dartlang-app:///packages/grad_din_web2/pages/function.dart", parameterLocations: const$31 || (const$31 = dart.constList([const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 82, column: 13, name: "alignment"}))), const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 83, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 18, file: "org-dartlang-app:///packages/grad_din_web2/pages/function.dart", parameterLocations: const$34 || (const$34 = dart.constList([const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 79, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 75, column: 16, file: "org-dartlang-app:///packages/grad_din_web2/pages/function.dart", parameterLocations: const$39 || (const$39 = dart.constList([const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 76, column: 7, name: "height"}))), const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 7, name: "width"}))), const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (pages__function.cardWidgetState.new = function(opts) {
    let cardHeight = opts && 'cardHeight' in opts ? opts.cardHeight : null;
    let cardWidth = opts && 'cardWidth' in opts ? opts.cardWidth : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let id = opts && 'id' in opts ? opts.id : null;
    let gradient = opts && 'gradient' in opts ? opts.gradient : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let image = opts && 'image' in opts ? opts.image : null;
    this[pressShadowMinimizer] = 1.0;
    this[pressDimensionMinimizer] = 1.0;
    this[cardHeight$0] = cardHeight;
    this[cardWidth$0] = cardWidth;
    this[child$0] = child;
    this[onPressed$0] = onPressed;
    this[id$0] = id;
    this[gradient$0] = gradient;
    this[color$0] = color;
    this[image$0] = image;
    pages__function.cardWidgetState.__proto__.new.call(this);
    ;
  }).prototype = pages__function.cardWidgetState.prototype;
  dart.addTypeTests(pages__function.cardWidgetState);
  const cardHeight$0 = Symbol("cardWidgetState.cardHeight");
  const image$0 = Symbol("cardWidgetState.image");
  const gradient$0 = Symbol("cardWidgetState.gradient");
  const color$0 = Symbol("cardWidgetState.color");
  const cardWidth$0 = Symbol("cardWidgetState.cardWidth");
  const child$0 = Symbol("cardWidgetState.child");
  const onPressed$0 = Symbol("cardWidgetState.onPressed");
  const id$0 = Symbol("cardWidgetState.id");
  const pressShadowMinimizer = Symbol("cardWidgetState.pressShadowMinimizer");
  const pressDimensionMinimizer = Symbol("cardWidgetState.pressDimensionMinimizer");
  dart.setMethodSignature(pages__function.cardWidgetState, () => ({
    __proto__: dart.getMethods(pages__function.cardWidgetState.__proto__),
    tapIsDown: dart.fnType(dart.void, []),
    updateCard: dart.fnType(dart.void, []),
    tap: dart.fnType(dart.void, []),
    tapIsUp: dart.fnType(dart.void, []),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(pages__function.cardWidgetState, () => ({
    __proto__: dart.getFields(pages__function.cardWidgetState.__proto__),
    cardHeight: dart.finalFieldType(core.double),
    image: dart.finalFieldType(src__painting__decoration_image.DecorationImage),
    gradient: dart.finalFieldType(src__painting__gradient.Gradient),
    color: dart.finalFieldType(ui$.Color),
    cardWidth: dart.finalFieldType(core.double),
    child: dart.finalFieldType(src__widgets__framework.Widget),
    onPressed: dart.finalFieldType(dart.fnType(dart.void, [])),
    id: dart.finalFieldType(core.String),
    pressShadowMinimizer: dart.fieldType(core.double),
    pressDimensionMinimizer: dart.fieldType(core.double)
  }));
  dart.trackLibraries("packages/grad_din_web2/pages/function", {
    "package:grad_din_web2/pages/function.dart": pages__function
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/grad_din_web2/pages/function.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAee;;;;;;IACA;;;;;;IACA;;;;;;IACY;;;;;;IACZ;;;;;;IACS;;;;;;IACP;;;;;;IACH;;;;;;;AAEV,YAAO,sDAA4B,4BAAuB,uBAAkB,uBAAkB,oBAAe,mBAAc,sBAAiB,mBAAc;IAC5J;;;QAnBO;QACA;QACA;QACA;QACU;QACV;QACA;QACA;;IAPA;IACA;IACA;IACA;IACU;IACV;IACA;IACA;AARP;;EASE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA0BW;;;;;;IACS;;;;;;IACP;;;;;;IACH;;;;;;IACC;;;;;;IACA;;;;;;IACY;;;;;;IACZ;;;;;;IACT;;;;;;IACA;;;;;;;MAEF,cAAS;QACP,4BAAuB;QACvB,+BAA0B;;IAE9B;;MAGE,cAAS;;IAGX;;MAGE;IACF;;MAEE,cAAS;QACP,4BAAuB;QACvB,+BAA0B;;IAE9B;UACa;AACP,+BAA+B,aAAV,+BAAY;AACrC,YAAW,oDACU,aAAX,mBAAa,aACd,uBACI,6CACY,sBACnB,mDAAkB,wBAAmB,wBAAyB,sFAAuB,WAAW,YAAY,ssBACxG,8CACmB,kDACV,mEACE,QAAgB;kBACzB;qDAEO,QAAc;kBACrB;uDAEW;kBACX;yCAEK;kBACL;kBACA,MAAU,qBAAqB,sEAAuB;AACtD,sBAAI,kBAAa;oBACf;;kBAEF;gBACD,8CACM,6DACqB,WACrB,gBACE,uEACS,qCAAuB,cACvB,kDACA,wFAAuB,WAAW,YAAY,kBACvC,aAAX,gCAAa,sCACH,AAA0B,aAArC,gCAAa,gCAA0B,kBAAkB,cAChD,mEACa,kDAAU,yDAAgB,oBAC3C,AAAiB,iBAAL,OAAO,gBAAW,aACjC,AAAc,cAAL,OAAO,aAAQ,aAExB,AAAc,cAAL,OAAO,aAAQ,iBACpB,yBACL,oDACY,AAAI,uCAAC,kBACP,AAAK,oBAAE,yCAIlB;IAQzB;;;QAnGO;QACA;QACA;QACA;QACU;QACV;QACA;QACA;IAUH,6BAAuB;IACvB,gCAA0B;IAlBvB;IACA;IACA;IACA;IACU;IACV;IACA;IACA;AARP;;EASE","file":"function.ddc.js"}');
  // Exports:
  return {
    pages__function: pages__function
  };
});

//# sourceMappingURL=function.ddc.js.map
