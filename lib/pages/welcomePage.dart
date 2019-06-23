// import 'package:flutter_web_ui/ui.dart';
import 'package:flutter_web/material.dart';
import 'package:flutter_web_ui/ui.dart'
as prefix0;
import 'package:firebase/firebase.dart'
as firebase;
import 'package:grad_din_web2/system/systemColor.dart';
import 'dart:html'
as html;
import 'package:http/http.dart'
as http;
import 'dart:convert';
import 'dart:async';
import 'package:grad_din_web2/data.dart'
as data;

class welcomePage extends StatefulWidget {
  welcomePage({
    Key key
  }): super(key: key);

  _welcomePageState createState() => _welcomePageState();
}

class _welcomePageState extends State < welcomePage > {
  @override
  Widget build(BuildContext context) {
    var _deviceWidth = MediaQuery.of(context).size.width;
    var _deviceHeight = MediaQuery.of(context).size.height;
    var _fontSize = [];
    DateTime now = DateTime.now();
    DateTime events = DateTime(2019, 7, 5, 18, 15);
    final dateRemain = now.difference(events).inDays;
    if (_deviceWidth > 735) {
      _fontSize = [50.0, 30.0, 15.0];
    } else {
      _fontSize = [_deviceWidth / 10, _deviceWidth / 20, _deviceWidth / 35];
    }
    print('Date remaining: $dateRemain');
    return Scaffold(
      backgroundColor: systemColor[0],
      body: ListView(
        children: < Widget > [
          Container(
            height: _deviceHeight,
            width: _deviceWidth,
            child: Stack(
              children: < Widget > [
                Container(
                  color: Color.fromARGB(255, 215, 234, 238),
                  height: _deviceHeight,
                  width: _deviceWidth,
                ),
                Container(
                  child: Image.asset(
                    'speechDay.jpg',
                  ),
                  height: _deviceHeight,
                  width: _deviceWidth,
                ),
                Positioned.fill(
                  child: Container(
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        begin: Alignment.topCenter,
                        end: Alignment.bottomCenter,
                        stops: [
                          0.5,
                          1.0
                        ],
                        colors: [
                          Color.fromARGB(150, 50, 50, 50),
                          systemColor[0],
                        ])),
                    // color: Color.fromARGB(150, 0, 0, 0),
                  ),
                ),
                Align(
                  alignment: Alignment.center,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: < Widget > [
                      Text(
                        'Gather Around',
                        style: TextStyle(
                          fontSize: _fontSize[0], color: Colors.white),
                      ),
                      Text(
                        '2019 Graduation Party',
                        style: TextStyle(
                          color: Colors.white, fontSize: _fontSize[1]),
                      )
                    ],
                  )),
                Align(
                  alignment: Alignment.bottomCenter,
                  child: Icon(
                    Icons.expand_more,
                    color: Colors.grey,
                    size: 50,
                  ),
                ),
                Align(
                  alignment: Alignment.bottomRight,
                  child: Container(
                    margin:
                    EdgeInsets.only(right: _deviceWidth / 25, bottom: 10.0),
                    child: Text(
                      'Credit: Rachel Chan',
                      style: TextStyle(
                        color: Colors.black54, fontSize: _fontSize[2]),
                    ),
                  ),
                )
              ],
            ),
          ),
          Container(
            height: 20,
          ),
          Container(
            alignment: Alignment.center,
            child: Text(
              'Details',
              style: TextStyle(fontSize: 30.0),
            )),
          Wrap(
            alignment: WrapAlignment.center,
            children: data.detailsData
            .map(([element]) => Container(
              padding: EdgeInsets.all(20.0),
              child: ConstrainedBox(
                constraints:
                BoxConstraints(minHeight: 200, minWidth: 300),
                child: Container(
                  // width: 300.0,
                  // height: 300.0,
                  decoration: BoxDecoration(
                    borderRadius:
                    BorderRadius.all(const Radius.circular(10.0)),
                    color: systemColor[1],
                  ),
                  child: Container(
                    decoration: BoxDecoration(),
                    margin: EdgeInsets.all(10.0),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: < Widget > [
                        Container(
                          height: 50.0,
                          width: 50.0,
                          alignment: Alignment.center,
                          child: Icon(
                            element['icon'],
                            size: 30.0,
                          ),
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            color: Colors.white),
                        ),
                        // Container(
                        //   height: 10.0,
                        // ),
                        Text(
                          element['title'],
                          style: TextStyle(
                            fontSize: 25, color: Colors.black),
                        ),
                        // Container(
                        //   height: 10.0,
                        // ),
                        Text(
                          element['content'],
                          style: TextStyle(
                            fontSize: 20, color: Colors.black),
                        ),
                        // Container(
                        //   height: 10.0,
                        // ),
                        FlatButton(
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(5.0)),
                          // color: Colors.pinkAccent,
                          color: Colors.white,
                          child: Container(
                            child: Text(
                              element['buttonText'],
                              style: TextStyle(
                                fontSize: 20,
                                color: Colors.blueAccent),
                            ),
                            // color: Colors.white,
                          ),
                          onPressed: () {
                            html.window.open(
                              element['buttonLink'], 'buttonLink');
                          },
                        )
                      ],
                    )),
                ),
              )))
            .toList(),
          ),
          Container(
            height: 30.0,
          ),
          Container(
            color: Colors.grey[100],
            padding: EdgeInsets.fromLTRB(10, 5, 10, 5),
            child: Row(
              children: < Widget > [
                Container(
                  alignment: Alignment.center,
                  child: Text(
                    'Designed by Samuel Chan with ',
                    style: TextStyle(fontSize: _fontSize[2]),
                  ),
                ),
                Container(
                  child: FlutterLogo(),
                ),
                Spacer(),
                FlatButton(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(5.0)),
                  onPressed: () {
                    html.window
                      .open('mailto:plklfcgradparty2019@gmail.com', 'email');
                  },
                  child: Text(
                    'Contact Us',
                    style: TextStyle(fontSize: 20, color: Colors.blueAccent),
                  ),
                  color: Colors.white,
                ),
                Container(
                  width: 10.0,
                ),
                FlatButton(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(5.0)),
                  onPressed: () {
                    html.window
                      .open('mailto:plklfcgradparty2019@gmail.com', 'email');
                  },
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: < Widget > [
                      Container(
                        height: 20.0,
                        width: 20.0,
                        child: Image.asset(
                          'githubLogo.png',
                        ),
                      ),
                      Text(
                        ' GitHub',
                        style: TextStyle(fontSize: 20, color: Colors.white),
                      ),
                    ],
                  ),
                  color: Colors.black,
                ),
              ],
            ),
          )
        ],
      ),
    );
  }
}