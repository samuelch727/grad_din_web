define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui'], function(dart_sdk, material, ui) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material__colors = material.src__material__colors;
  const ui$ = ui.ui;
  const system__systemColor = Object.create(dart.library);
  let JSArrayOfColor = () => (JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui$.Color)))();
  dart.defineLazy(system__systemColor, {
    /*system__systemColor.systemColor*/get systemColor() {
      return JSArrayOfColor().of([src__material__colors.Colors.white, src__material__colors.Colors.grey._get(200)]);
    },
    set systemColor(_) {}
  });
  dart.trackLibraries("packages/grad_din_web2/system/systemColor", {
    "package:grad_din_web2/system/systemColor.dart": system__systemColor
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/grad_din_web2/system/systemColor.dart"],"names":[],"mappings":";;;;;;;;;;;MAEI,+BAAW;YAAG,sBAAQ,oCAAc,AAAI,uCAAC","file":"systemColor.ddc.js"}');
  // Exports:
  return {
    system__systemColor: system__systemColor
  };
});

//# sourceMappingURL=systemColor.ddc.js.map
