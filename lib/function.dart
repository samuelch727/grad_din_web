import 'package:flutter_web/material.dart';

class customCard extends StatefulWidget {
  customCard({
    this.height,
    this.child,
    this.width,
    @required this.id,
    this.gradient,
    this.color,
    this.image,
    this.onPressed,
    this.enablePressDown = true,
    Key key,
  }): super(key: key);
  final height;
  final Widget child;
  final double width;
  final String id;
  final Gradient gradient;
  final Color color;
  final DecorationImage image;
  final GestureTapCallback onPressed;
  bool enablePressDown;

  _customCardState createState() => _customCardState();
}

class _customCardState extends State < customCard > {
  @override
  var pressShadowMinimizer = 1.0;
  var pressDimensionMinimizer = 1.0;
  void tapIsDown() {
    setState(() {
      pressShadowMinimizer = 0.5;
      pressDimensionMinimizer = 0.98;
    });
  }

  void tap() {
    tapIsDown();
  }

  void tapIsUp() {
    setState(() {
      pressShadowMinimizer = 1.0;
      pressDimensionMinimizer = 1.0;
    });
  }

  Widget build(BuildContext context) {
    if (!(widget.onPressed == null)) {
      widget.enablePressDown = true;
    }
    var heightToWidthRatio = widget.width / widget.height;
    // debug
    // print('inputed box height: ${widget.height}');
    // print('inputed box width: ${widget.width}');
    // print('calculated ratio: $heightToWidthRatio');
    // print('minimized height: ${widget.height * 0.98}');
    // print('minimized width: ${widget.height * 0.98 * heightToWidthRatio}');
    return new Container(
      // margin: EdgeInsets.only(top: 10.0, bottom: 10.0),
      height: widget.height + 10,
      width: widget.width,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.all(const Radius.circular(10.0)),
      ),
      child: new Stack(
        children: < Widget > [
          Container(
            height: widget.height,
            width: widget.width,
            margin: const EdgeInsets.only(right: 0.0, top: 10.0, left: 0.0),
          ),
          new Align(
            alignment: Alignment.center,
            child: new GestureDetector(
              onTapDown: (TapDownDetails details) {
                if (widget.enablePressDown) {
                  tapIsDown();
                }
              },
              onTapUp: (TapUpDetails details) {
                if (widget.enablePressDown) {
                  tapIsUp();
                }
              },
              onTapCancel: () {
                if (widget.enablePressDown) {
                  tapIsUp();
                }
              },
              onTap: () async {
                if (widget.enablePressDown) {
                  tapIsDown();
                  await new Future.delayed(const Duration(milliseconds: 120));
                  if (widget.onPressed != null) {
                    widget.onPressed();
                  }
                  tapIsUp();
                }
              },
              child: Hero(
                transitionOnUserGestures: true,
                tag: widget.id,
                child: AnimatedContainer(
                  duration: new Duration(milliseconds: 200),
                  curve: Curves.decelerate,
                  margin:
                  const EdgeInsets.only(right: 0.0, top: 10.0, left: 0.0),
                    height: widget.height * pressDimensionMinimizer,
                    width: widget.height *
                    pressDimensionMinimizer *
                    heightToWidthRatio,
                    decoration: new BoxDecoration(
                      borderRadius:
                      BorderRadius.all(const Radius.circular(10.0)),
                      gradient:
                      widget.gradient != null ? widget.gradient : null,
                      color: widget.color != null ? widget.color : null,
                      // color: Colors.black,
                      image: widget.image != null ? widget.image : null,
                      boxShadow: widget.enablePressDown ?
                      [
                        new BoxShadow(
                          color: Colors.grey[600],
                          blurRadius: 15.0 * pressShadowMinimizer)
                      ] :
                      null),
                    child: widget.child,
                ),
              ),
            ),
          )
        ],
      ),
    );
  }
}