import 'package:flutter_web/material.dart';

class underConstru extends StatefulWidget {
  underConstru({
    Key key
  }): super(key: key);

  _underConstruState createState() => _underConstruState();
}

class _underConstruState extends State < underConstru > {
  @override
  Widget build(BuildContext context) {
    var _deviceWidth = MediaQuery.of(context).size.width;
    var _deviceHeight = MediaQuery.of(context).size.height;
    var _fontSize = [];
    if (_deviceWidth > 735) {
      _fontSize = [45.0, 30.0, 20.0];
    } else {
      _fontSize = [_deviceWidth / 20, _deviceWidth / 30, _deviceWidth / 35];
    }
    return Scaffold(
      body: Stack(
        children: < Widget > [
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: < Widget > [
              Container(
                alignment: Alignment.center,
                child: Image.asset(
                  'underConstruction.png',
                  // height:
                  // _deviceWidth > 735 ? _deviceHeight / 2 : _deviceHeight / 1.5,
                  width:
                  _deviceWidth > 735 ? _deviceWidth / 2 : _deviceWidth / 1.5,
                ),
                // height: _deviceHeight,
                // width: _deviceWidth,
              ),
              Container(
                height: 30.0,
              ),
              Container(
                height: 3,
                width: _deviceWidth > 735 ? _deviceWidth / 2 : _deviceWidth / 1.5,
                color: Colors.black.withOpacity(0.6),
              ),
              Container(
                height: 30.0,
              ),
              Container(
                child: Text(
                  'UNDER CONSTRUCTION',
                  style: TextStyle(fontSize: _fontSize[0]),
                ),
              ),
              Container(
                child: Text(
                  'PLEASE COME BACK LATER',
                  style: TextStyle(fontSize: _fontSize[1]),
                ),
              ),
              // Container(
              //   child: Text(
              //     '2019 Graduation Party',
              //     style: TextStyle(fontSize: _fontSize[2]),
              //   ),
              // )
            ],
          ),
          Align(
            alignment: Alignment.bottomRight,
            child: Container(
              margin: EdgeInsets.only(right: _deviceWidth / 25, bottom: 10.0),
              child: Text(
                'Designed by Freepik',
                style: TextStyle(color: Colors.black54, fontSize: _fontSize[2]),
              ),
            ),
          )
        ],
      ));
  }
}