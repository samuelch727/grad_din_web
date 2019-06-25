import 'package:flutter_web/material.dart';
import 'package:grad_din_web2/function.dart';
import 'package:grad_din_web2/system/systemColor.dart';
import 'dart:html'
as html;
import 'package:grad_din_web2/data.dart'
as data;
import 'dart:async';
import 'function.dart';

class welcomePage extends StatefulWidget {
  welcomePage({
    Key key
  }): super(key: key);

  _welcomePageState createState() => _welcomePageState();
}

class _welcomePageState extends State < welcomePage > {
  @override
  var dateRemain;
  var hoursRemain;
  var minutesRemain;
  var secondRemain;
  DateTime now;
  Timer timer;
  DateTime events = DateTime(2019, 7, 5, 18, 15);
  void checkTime() {
    timer = Timer.periodic(
      const Duration(seconds: 1),
        (Timer timer) => setState(() {
          now = DateTime.now();
          dateRemain = events.difference(now).inDays;
          hoursRemain = events.difference(now).inHours - dateRemain * 24;
          minutesRemain = events.difference(now).inMinutes -
            events.difference(now).inHours * 60;
        }));
  }

  @override
  void dispose() {
    timer.cancel();
    super.dispose();
  }

  void bookAlert() {
    print('alert');
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          content: Column(
            children: < Widget > [
              Flexible(
                // color: Colors.white,
                child: SingleChildScrollView(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: < Widget > [
                      Text(
                        'Event Introduction',
                        style: TextStyle(fontSize: 30),
                      ),
                      Text('Time and Date: July 5, 2019, at 1815'),
                      Text(
                        'Venue: ClubONE Kornhill in Vogue, 201 & 301, Kornhill Apartment, 2 Kornhill Road, Quarry Bay'),
                      Container(
                        height: 20.0,
                      ),
                      Text(
                        'System Introduction ',
                        style: TextStyle(fontSize: 30),
                      ),
                      Text(
                        'This system is used for preserving the seats for the PLKLFC Graduation Dinner 2019. Graduates can get entry information and preserve the seat^ by selecting the table and seat through this system. Most of the seats can be selected except table A and B, and no need to seat according to classes. After you finished the preservation process, you will receive an email with detailed information about your preservation. Please be reminded to keep the emailed ticket for the entry of the event. The staff member MAY request you to show the QR code for the entry registration. Please DO NOT apply for 2 tickets. Otherwise, we may cancel your second preservation. '),
                      Container(
                        height: 20,
                      ),
                      Text(
                        'Disclaimer',
                        style: TextStyle(fontSize: 30),
                      ),
                      Text(
                        '*All information related to the time and the location of the event, the invitation card shall prevail.'),
                      Text(
                        '^If you want to change your seat, please cancel your original ticket, then apply another one.'),
                      Container(
                        height: 10,
                      ),
                      Text(
                        'All your personal information will be deleted once this event is ended.'),
                      Container(
                        height: 10,
                      ),
                      Text(
                        'If you have any question please feel free to contact 6M Pang Chun Hei, Elston (Tel: 54042097 Email: plklfcgradparty2019@gmail.com)')
                    ],
                  ),
                ),
              ),
            ],
          ),
          title: Text('Terms of service'),
          actions: < Widget > [
            FlatButton(
              color: Colors.red[100],
              child: Text(
                'Close',
                style: TextStyle(color: Colors.red[900], fontSize: 20),
              ),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
            FlatButton(
              color: Colors.green[100],
              child: Text(
                'I Understand',
                style: TextStyle(color: Colors.green[900], fontSize: 20),
              ),
              onPressed: () {
                html.window.open(
                  'https://elstondeveloping.ticketleap.com/plklfc-2019-graddin/',
                  'buttonLink');
              },
            )
          ],
        );
      });
    // AlertDialog dialog = new AlertDialog(
    // content: ListView(
    //   children: < Widget > [
    //     Text(
    //       'Event Introduction Time and Date: July 5, 2019, at 1815 Venue: ClubONE Kornhill in Vogue, 201 & 301, Kornhill Apartment, 2 Kornhill Road, Quarry Bay'),
    //     Container(
    //       height: 10.0,
    //     ),
    //     Text(
    //       'System Introduction This system is used for preserving the seats for the PLKLFC Graduation Dinner 2019. Graduates can get entry information and preserve the seat^ by selecting the table and seat through this system. Most of the seats can be selected except table A and B, and no need to seat according to classes. After you finished the preservation process, you will receive an email with detailed information about your preservation. Please be reminded to keep the emailed ticket for the entry of the event. The staff member MAY request you to show the QR code for the entry registration. Please DO NOT apply for 2 tickets. Otherwise, we may cancel your second preservation. '),
    //     Text(
    //       'Disclaimer *All information related to the time and the location of the event, the invitation card shall prevail. ^If you want to change your seat, please cancel your original ticket, then apply another one. All your personal information will be deleted once this event is ended. If you have any question please feel free to contact 6M Pang Chun Hei, Elston (Tel: 54042097 Email: plklfcgradparty2019@gmail.com) or 6M Chan Sze Nok, Samuel. (Tel: 54065096 Email: plklfcgradparty2019@gmail.com)')
    //   ],
    // ),
    //   content: Text('test'),
    //   actions: <Widget>[],
    // );
    // showDialog(context: context, child: dialog);
  }

  Widget build(BuildContext context) {
    now = DateTime.now();
    dateRemain = events.difference(now).inDays;
    hoursRemain = events.difference(now).inHours - dateRemain * 24;
    minutesRemain =
      events.difference(now).inMinutes - events.difference(now).inHours * 60;
    checkTime();
    var _deviceWidth = MediaQuery.of(context).size.width;
    var _deviceHeight = MediaQuery.of(context).size.height;
    var _fontSize = [];
    if (_deviceWidth > 735) {
      _fontSize = [50.0, 30.0, 15.0];
    } else {
      _fontSize = [_deviceWidth / 10, _deviceWidth / 20, _deviceWidth / 35];
    }
    return Scaffold(
      backgroundColor: systemColor[0],
      body: ListView(
        physics: BouncingScrollPhysics(),
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
                  alignment: Alignment.topCenter,
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
                      ),
                      Container(
                        height: _deviceHeight / 30,
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: < Widget > [
                          Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: < Widget > [
                              Text(
                                '$dateRemain',
                                style: TextStyle(
                                  fontSize: _fontSize[0],
                                  color: Colors.white),
                              ),
                              Text(
                                'Days',
                                style: TextStyle(
                                  fontSize: _fontSize[2],
                                  color: Colors.grey[300]),
                              ),
                            ],
                          ),
                          Text(
                            ' : ',
                            style: TextStyle(
                              fontSize: _fontSize[0], color: Colors.white),
                          ),
                          Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: < Widget > [
                              Text(
                                '$hoursRemain',
                                style: TextStyle(
                                  fontSize: _fontSize[0],
                                  color: Colors.white),
                              ),
                              Text(
                                'Hours',
                                style: TextStyle(
                                  fontSize: _fontSize[2],
                                  color: Colors.grey[300]),
                              ),
                            ],
                          ),
                          Text(
                            ' : ',
                            style: TextStyle(
                              fontSize: _fontSize[0], color: Colors.white),
                          ),
                          Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: < Widget > [
                              Text(
                                '$minutesRemain',
                                style: TextStyle(
                                  fontSize: _fontSize[0],
                                  color: Colors.white),
                              ),
                              Text(
                                'Min',
                                style: TextStyle(
                                  fontSize: _fontSize[2],
                                  color: Colors.grey[300]),
                              ),
                            ],
                          ),
                        ],
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
            alignment: Alignment.center,
            color: Colors.black,
          ),
          Container(
            padding: EdgeInsets.fromLTRB(10, 30, 10, 30),
            color: Colors.black,
            child: Wrap(
              alignment: WrapAlignment.center,
              children: < Widget > [
                Container(
                  padding: EdgeInsets.fromLTRB(50, 0, 50, 0),
                  width: 400,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: < Widget > [
                      Text(
                        'Booking System',
                        style: TextStyle(
                          fontSize: 30.0,
                          color: Color.fromARGB(255, 255, 69, 58)),
                      ),
                      Row(
                        children: < Widget > [
                          Text(
                            'For Student Only',
                            style: TextStyle(
                              fontSize: 20.0,
                              color: Color.fromARGB(200, 255, 69, 58)),
                          ),
                          Container(width: 5,),
                          Container(
                            padding: EdgeInsets.all(5),
                            child: Text(
                              'Preview',
                            ),
                            decoration: BoxDecoration(
                              color: Colors.amber,
                              borderRadius:
                              BorderRadius.all(Radius.circular(3))),
                          )
                        ],
                      ),
                      Container(
                        height: 10,
                      ),
                      Container(
                        child: Text(
                          'Select your seat and table you want via online booking system.',
                          style: TextStyle(fontSize: 20.0, color: Colors.white),
                        ),
                        width: 400,
                      ),
                      Container(
                        height: 10,
                      ),
                      FlatButton(
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(5.0)),
                        // color: Colors.pinkAccent,
                        color: Colors.redAccent,
                        child: Container(
                          child: Text(
                            'Book Now',
                            style: TextStyle(fontSize: 20, color: Colors.white),
                          ),
                          // color: Colors.white,
                        ),
                        onPressed: () {
                          bookAlert();
                        },
                      )
                    ],
                  ),
                ),
                customCard(
                  id: 'no',
                  enablePressDown: false,
                  gradient: LinearGradient(colors: [
                    Color(0xff8A2387),
                    Color(0xffE94057),
                    Color(0xffF27121)
                  ], begin: Alignment.topLeft, end: Alignment.bottomRight),
                  height: _deviceWidth > 600 ?
                  380 / 1.5857725083 :
                  (_deviceWidth / 1.3) / 1.5857725083,
                  width: _deviceWidth > 600 ? 380 : _deviceWidth / 1.3,
                  child: Container(
                    child: Stack(
                      children: < Widget > [
                        Container(
                          // padding: _deviceWidth > 500 ? EdgeInsets.all(20.0) : EdgeInsets.all(15.0),
                          alignment: Alignment.centerRight,
                          child: Icon(
                            Icons.keyboard_arrow_right,
                            color: Colors.white,
                            size: 35,
                          ),
                        ),
                        Column(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: < Widget > [
                            Text(
                              'Chris Wong',
                              style: TextStyle(
                                color: Colors.white, fontSize: 30),
                            ),
                            // Spacer(),
                            Row(
                              children: < Widget > [
                                Icon(
                                  Icons.airline_seat_recline_normal,
                                  color: Colors.white,
                                  size: 40,
                                ),
                                Text(
                                  ' A12',
                                  style: TextStyle(
                                    color: Colors.white, fontSize: 30),
                                ),
                              ],
                            )
                          ],
                        ),
                      ],
                    ),
                    padding: _deviceWidth > 500 ?
                    EdgeInsets.all(20.0) :
                    EdgeInsets.all(15.0),
                  )),
              ],
            ),
          ),
          _deviceWidth > 534 ?
          Container(
            color: Colors.grey[200],
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
                    html.window.open(
                      'mailto:plklfcgradparty2019@gmail.com', 'email');
                  },
                  child: Text(
                    'Contact Us',
                    style:
                    TextStyle(fontSize: 20, color: Colors.blueAccent),
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
                    html.window.open(
                      'https://github.com/samuelch727/grad_din_web',
                      'github');
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
                        style:
                        TextStyle(fontSize: 20, color: Colors.white),
                      ),
                    ],
                  ),
                  color: Colors.black,
                ),
              ],
            ),
          ) :
          Container(
            color: Colors.grey[200],
            child: Column(
              children: < Widget > [
                Container(
                  padding: EdgeInsets.all(10.0),
                  child: Wrap(
                    alignment: WrapAlignment.spaceEvenly,
                    children: < Widget > [
                      FlatButton(
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(5.0)),
                        onPressed: () {
                          html.window.open(
                            'mailto:plklfcgradparty2019@gmail.com',
                            'email');
                        },
                        child: Text(
                          'Contact Us',
                          style: TextStyle(
                            fontSize: 20, color: Colors.blueAccent),
                        ),
                        color: Colors.white,
                      ),
                      Container(
                        width: 10,
                      ),
                      FlatButton(
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(5.0)),
                        onPressed: () {
                          html.window.open(
                            'https://github.com/samuelch727/grad_din_web2',
                            'github');
                        },
                        child: Container(
                          width: 100.0,
                          child: Row(
                            mainAxisAlignment:
                            MainAxisAlignment.spaceEvenly,
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
                                style: TextStyle(
                                  fontSize: 20, color: Colors.white),
                              ),
                            ],
                          ),
                        ),
                        color: Colors.black,
                      ),
                    ],
                  ),
                ),
                Container(
                  padding: EdgeInsets.only(bottom: 10.0),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
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
                    ],
                  ),
                )
              ],
            )),
        ],
      ),
    );
  }
}