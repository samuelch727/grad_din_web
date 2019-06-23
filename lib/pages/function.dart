import 'package:flutter_web/foundation.dart';
import 'package:flutter_web/material.dart';
import 'dart:async';

class cardWidget extends StatefulWidget {
  cardWidget({
    this.cardHeight,
    this.cardWidth,
    this.child,
    this.onPressed,
    @required this.id,
    this.gradient,
    this.color,
    this.image
  });
  final double cardHeight;
  final double cardWidth;
  final Widget child;
  final GestureTapCallback onPressed;
  final String id;
  final DecorationImage image;
  final Gradient gradient;
  final Color color;
  createState() {
    return cardWidgetState(cardHeight: cardHeight, cardWidth: cardWidth, child: child, onPressed: onPressed, id: id, gradient: gradient, color: color, image: image);
  }
}


class cardWidgetState extends State < cardWidget > {
  cardWidgetState({
    this.cardHeight,
    this.cardWidth,
    this.child,
    this.onPressed,
    @required this.id,
    this.gradient,
    this.color,
    this.image
  });
  final double cardHeight;
  final DecorationImage image;
  final Gradient gradient;
  final Color color;
  final double cardWidth;
  final Widget child;
  final GestureTapCallback onPressed;
  final String id;
  var pressShadowMinimizer = 1.0;
  var pressDimensionMinimizer = 1.0;
  void tapIsDown() {
    setState(() {
      pressShadowMinimizer = 0.5;
      pressDimensionMinimizer = 0.98;
    });
  }

  void updateCard() {
    setState(() {

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
  Widget build(context) {
    var heightToWidthRatio = cardWidth / cardHeight;
    return new Container(
      height: cardHeight + 10.0,
      width: cardWidth,
      child: new Stack(
        children: < Widget > [
          Container(height: cardHeight, width: cardWidth, margin: const EdgeInsets.only(right: 10.0, top: 10.0, left: 10.0), ),
          new Align(
            alignment: Alignment.center,
            child: new GestureDetector(
              onTapDown: (TapDownDetails details) {
                tapIsDown();
              },
              onTapUp: (TapUpDetails details) {
                tapIsUp();
              },
              onTapCancel: () {
                tapIsUp();
              },
              onTap: () async {
                tapIsDown();
                await new Future.delayed(const Duration(milliseconds: 150));
                if (onPressed != null) {
                  onPressed();
                }
                tapIsUp();
              },
              child: Hero(
                transitionOnUserGestures: true,
                tag: id,
                child: AnimatedContainer(
                  duration: new Duration(milliseconds: 200),
                  curve: Curves.decelerate,
                  margin: const EdgeInsets.only(right: 10.0, top: 10.0, left: 10.0),
                    height: cardHeight * pressDimensionMinimizer,
                    width: cardHeight * pressDimensionMinimizer * heightToWidthRatio,
                    decoration: new BoxDecoration(
                      borderRadius: BorderRadius.all(const Radius.circular(10.0)),
                      gradient: gradient != null ? gradient : null,
                      color: color != null ? color : null,
                      // color: Colors.black,
                      image: image != null ? image : null,
                      boxShadow: [
                        new BoxShadow(
                          color: Colors.grey[600],
                          blurRadius: 15.0 * pressShadowMinimizer
                        )
                      ]
                    ),
                    child: child,
                ),
              ),
            ),
          )
        ],
      ),
    );
  }
}
