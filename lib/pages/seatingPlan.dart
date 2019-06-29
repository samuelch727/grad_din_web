import 'package:flutter_web/material.dart';
import 'package:grad_din_web2/function.dart';
import 'package:grad_din_web2/data.dart' as data;
import 'package:flutter_web/cupertino.dart';

class seatingPlanMainPage extends StatefulWidget {
  seatingPlanMainPage({Key key}) : super(key: key);

  _seatingPlanMainPageState createState() => _seatingPlanMainPageState();
}

class _seatingPlanMainPageState extends State<seatingPlanMainPage> {
  @override
  Widget build(BuildContext context) {
    var _deviceWidth = MediaQuery.of(context).size.width;
    var _deviceHeight = MediaQuery.of(context).size.height;
    return Container(
      padding: EdgeInsets.fromLTRB(10, 30, 10, 30),
      color: Colors.black,
      child: Wrap(
        alignment: WrapAlignment.center,
        children: <Widget>[
          Container(
            padding: EdgeInsets.fromLTRB(50, 0, 50, 0),
            width: 400,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Text(
                  'Seating Plan',
                  style: TextStyle(
                      fontSize: 30.0, color: Color.fromARGB(255, 255, 69, 58)),
                ),
                Row(
                  children: <Widget>[
                    // Text(
                    //   'For Student Only',
                    //   style: TextStyle(
                    //     fontSize: 20.0,
                    //     color: Color.fromARGB(200, 255, 69, 58)),
                    // ),
                    Container(
                      width: 5,
                    ),
                    // Container(
                    //   padding: EdgeInsets.all(5),
                    //   child: Text(
                    //     'Available Soon',
                    //   ),
                    //   decoration: BoxDecoration(
                    //     color: Colors.amber,
                    //     borderRadius: BorderRadius.all(Radius.circular(3))),
                    // )
                  ],
                ),
                Container(
                  height: 10,
                ),
                Container(
                  child: Text(
                    // 'Seating plan for PLKLFC Graduration Party 2019. You may request for chaging seat.',
                    'Seating plan for PLKLFC Graduration Party 2019.',
                    style: TextStyle(fontSize: 20.0, color: Colors.white),
                  ),
                  width: 400,
                ),
                Container(
                  height: 10,
                ),
                FlatButton(
                  disabledColor: Colors.amber,
                  disabledTextColor: Colors.black,
                  textColor: Colors.white,
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(5.0)),
                  // color: Colors.pinkAccent,
                  color: Colors.redAccent,
                  child: Container(
                    child: Text(
                      'Learn More',
                      style: TextStyle(fontSize: 20),
                    ),
                    // color: Colors.white,
                  ),
                  onPressed: () {
                    if (_deviceWidth < 750) {
                      Navigator.push(
                        context,
                        CupertinoPageRoute(
                            builder: (context) => seatingPlanMoreMobile()),
                      );
                    } else {
                      Navigator.push(
                        context,
                        CupertinoPageRoute(
                            builder: (context) => seatingPlanMore()),
                      );
                    }
                    // Navigator.push(
                    //   context,
                    //   CupertinoPageRoute(
                    //       builder: (context) => seatingPlanHandler()),
                    // );
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
              height: (_deviceWidth / 1.3) / 1.5857725083 > 380 / 1.5857725083
                  ? 380 / 1.5857725083
                  : (_deviceWidth / 1.3) / 1.5857725083,
              width: _deviceWidth / 1.3 > 380 ? 380 : _deviceWidth / 1.3,
              child: Container(
                child: Stack(
                  children: <Widget>[
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
                      children: <Widget>[
                        Text(
                          'Chris Wong',
                          style: TextStyle(color: Colors.white, fontSize: 30),
                        ),
                        // Spacer(),
                        Row(
                          children: <Widget>[
                            Icon(
                              Icons.airline_seat_recline_normal,
                              color: Colors.white,
                              size: 40,
                            ),
                            Text(
                              ' A',
                              style:
                                  TextStyle(color: Colors.white, fontSize: 30),
                            ),
                          ],
                        )
                      ],
                    ),
                  ],
                ),
                padding: _deviceWidth > 500
                    ? EdgeInsets.all(20.0)
                    : EdgeInsets.all(15.0),
              )),
        ],
      ),
    );
  }
}

class seatingPlanHandler extends StatefulWidget {
  seatingPlanHandler({Key key}) : super(key: key);

  _seatingPlanHandlerState createState() => _seatingPlanHandlerState();
}

class _seatingPlanHandlerState extends State<seatingPlanHandler> {
  @override
  Widget build(BuildContext context) {
    var _deviceWidth = MediaQuery.of(context).size.width;
    return Scaffold(
      body: Stack(
        children: <Widget>[
          Positioned.fill(
            child: Container(
              color: Colors.black,
              child: CupertinoActivityIndicator(),
            ),
          ),
          Positioned.fill(
            child: _deviceWidth < 750 ? seatingPlanMoreMobile() : seatingPlanMore(),
          )
        ],
      ),
    );
  }
}

class seatingPlanMore extends StatefulWidget {
  seatingPlanMore({Key key}) : super(key: key);

  _seatingPlanMoreState createState() => _seatingPlanMoreState();
}

var tableDetails = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

var _dropDownValue = '6V';

class _seatingPlanMoreState extends State<seatingPlanMore> {
  @override
  Widget build(BuildContext context) {
    void updateTable(int tableNo) {
      setState(() {
        tableDetails[tableNo] = true;
      });
    }

    var _deviceWidth = MediaQuery.of(context).size.width;
    var _deviceHeight = MediaQuery.of(context).size.height;
    return Scaffold(
      body: Container(
        color: Colors.black,
        child: Column(
          children: <Widget>[
            FlatButton(
              onPressed: () {
                Navigator.pop(context);
              },
              child: Row(
                children: <Widget>[
                  Icon(
                    Icons.arrow_back_ios,
                    color: Colors.white,
                  ),
                  Text(
                    'Home',
                    style: TextStyle(fontSize: 25.0, color: Colors.white),
                  )
                ],
              ),
            ),
            Expanded(
              child: Row(
                children: <Widget>[
                  Expanded(
                      child: Column(
                    children: <Widget>[
                      Container(
                        padding: EdgeInsets.only(left: 50.0),
                        child: Text(
                          'Seating Plan',
                          style: TextStyle(
                              fontSize: 30.0, color: Colors.redAccent),
                        ),
                        alignment: Alignment.centerLeft,
                      ),
                      Container(
                        height: 30.0,
                      ),
                      Container(
                        width: _deviceWidth / 4,
                        decoration: BoxDecoration(
                          color: Colors.grey.withOpacity(0.3),
                          // borderRadius: BorderRadius.all(const Radius.circular(10.0)),
                        ),
                        // height: 30.0,
                        padding: EdgeInsets.all(10.0),
                        alignment: Alignment.center,
                        child: Text(
                          'Stage',
                          style: TextStyle(fontSize: 25.0, color: Colors.white),
                        ),
                      ),
                      Container(
                        height: 20.0,
                      ),
                      floorPlan(),
                    ],
                  )),
                  Expanded(
                    child: ListView(
                      physics: BouncingScrollPhysics(),
                      children: <Widget>[
                        Row(
                          children: <Widget>[
                            Container(
                              child: Text(
                                'Name list',
                                style: TextStyle(
                                    color: Colors.white, fontSize: 30),
                              ),
                            ),
                            Spacer(),
                            Container(
                              // color: Color.fromARGB(255, 58, 58, 60),
                              child: DropdownButton<String>(
                                style: TextStyle(color: Colors.white),
                                value: _dropDownValue,
                                onChanged: (String newValue) {
                                  setState(() {
                                    _dropDownValue = newValue;
                                    tableDetails = [
                                      false,
                                      false,
                                      false,
                                      false,
                                      false,
                                      false,
                                      false,
                                      false,
                                      false,
                                      false,
                                      false,
                                    ];
                                  });
                                  print('value changed to $_dropDownValue');
                                },
                                items: <String>[
                                  '6V',
                                  '6J',
                                  '6M',
                                  '6S',
                                  '6N',
                                  'Teacher'
                                ].map<DropdownMenuItem<String>>((String value) {
                                  return DropdownMenuItem<String>(
                                    value: value,
                                    child: Text(value),
                                  );
                                }).toList(),
                              ),
                            )
                          ],
                        ),
                        Column(
                          children: data.seatingFullList.map(([element]) {
                            int _tableNo = element['Table Number'];
                            _tableNo = _tableNo - 1;
                            var temp = null;
                            if (_dropDownValue == 'All') {
                              setState(() {
                                temp = null;
                              });
                            } else {
                              setState(() {
                                temp = _dropDownValue;
                              });
                            }
                            print('temp is $temp');
                            if (element['Class'] == temp || temp == null) {
                              if (!tableDetails[_tableNo]) {
                                updateTable(_tableNo);
                                print('$tableDetails');
                              }
                              return Container(
                                child: Container(
                                  padding: EdgeInsets.all(10),
                                  child: Row(
                                    children: <Widget>[
                                      Text(
                                        '${element['Name']}',
                                        style: TextStyle(
                                            fontSize: 20.0,
                                            color: Colors.white),
                                      ),
                                      Container(
                                        width: 10,
                                      ),
                                      Text('Table: ${element['Table Number']}',
                                          style: TextStyle(
                                              fontSize: 20.0,
                                              color: Colors.white)),
                                      Spacer(),
                                      Icon(
                                        Icons.keyboard_arrow_right,
                                        color: Colors.white,
                                      ),
                                    ],
                                  ),
                                  decoration: BoxDecoration(
                                    color: Color.fromARGB(255, 99, 99, 102),
                                    borderRadius: BorderRadius.all(
                                        const Radius.circular(10.0)),
                                  ),
                                  // height: 50.0,
                                ),
                                padding: EdgeInsets.all(10.0),
                              );
                            } else {
                              return Container();
                            }
                          }).toList(),
                        )
                      ],
                    ),
                  )
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}

class floorPlan extends StatefulWidget {
  floorPlan({Key key}) : super(key: key);

  _floorPlanState createState() => _floorPlanState();
}

class _floorPlanState extends State<floorPlan> {
  @override
  Widget build(BuildContext context) {
    var _deviceWidth = MediaQuery.of(context).size.width;
    var _deviceHeight = MediaQuery.of(context).size.height;
    return Column(
      children: <Widget>[
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: tableDetails
              .asMap()
              .map((index, [element]) {
                return MapEntry(
                    index,
                    index < 4
                        ? Container(
                            child: AnimatedContainer(
                              curve: Curves.easeInOut,
                              duration: Duration(milliseconds: 500),
                              alignment: Alignment.center,
                              child: Text(
                                '${index + 1}',
                                style: TextStyle(
                                  fontSize: 25.0,
                                  color: element ? Colors.black : Colors.white,
                                ),
                              ),
                              height: _deviceHeight / 12,
                              width: _deviceHeight / 12,
                              decoration: BoxDecoration(
                                shape: BoxShape.circle,
                                color: element
                                    ? Colors.white.withOpacity(0.8)
                                    : Colors.grey.withOpacity(0.3),
                              ),
                            ),
                            padding: EdgeInsets.all(10.0),
                          )
                        : Container());
              })
              .values
              .toList(),
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: tableDetails
              .asMap()
              .map((index, [element]) => MapEntry(
                  index,
                  index > 3
                      ? index < 8
                          ? Container(
                              child: AnimatedContainer(
                                curve: Curves.easeInOut,
                                duration: Duration(milliseconds: 500),
                                alignment: Alignment.center,
                                child: Text(
                                  '${index + 1}',
                                  style: TextStyle(
                                    fontSize: 25.0,
                                    color:
                                        element ? Colors.black : Colors.white,
                                  ),
                                ),
                                height: _deviceHeight / 12,
                                width: _deviceHeight / 12,
                                decoration: BoxDecoration(
                                  shape: BoxShape.circle,
                                  color: element
                                      ? Colors.white.withOpacity(0.8)
                                      : Colors.grey.withOpacity(0.3),
                                ),
                              ),
                              padding: EdgeInsets.all(10.0),
                            )
                          : Container()
                      : Container()))
              .values
              .toList(),
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: tableDetails
              .asMap()
              .map((index, [element]) => MapEntry(
                  index,
                  index > 7
                      ? index < 11
                          ? Container(
                              child: AnimatedContainer(
                                curve: Curves.easeInOut,
                                duration: Duration(milliseconds: 500),
                                alignment: Alignment.center,
                                child: Text(
                                  '${index + 1}',
                                  style: TextStyle(
                                    fontSize: 25.0,
                                    color:
                                        element ? Colors.black : Colors.white,
                                  ),
                                ),
                                height: _deviceHeight / 12,
                                width: _deviceHeight / 12,
                                decoration: BoxDecoration(
                                  shape: BoxShape.circle,
                                  color: element
                                      ? Colors.white.withOpacity(0.8)
                                      : Colors.grey.withOpacity(0.3),
                                ),
                              ),
                              padding: EdgeInsets.all(10.0),
                            )
                          : Container()
                      : Container()))
              .values
              .toList(),
        )
      ],
    );
  }
}

class seatingPlanMoreMobile extends StatefulWidget {
  seatingPlanMoreMobile({Key key}) : super(key: key);

  _seatingPlanMoreMobileState createState() => _seatingPlanMoreMobileState();
}

class _seatingPlanMoreMobileState extends State<seatingPlanMoreMobile> {
  @override
  Widget build(BuildContext context) {
    var _deviceWidth = MediaQuery.of(context).size.width;
    var _deviceHeight = MediaQuery.of(context).size.height;
    void updateTable(int tableNo) {
      setState(() {
        tableDetails[tableNo] = true;
      });
    }

    return Scaffold(
      body: Container(
        color: Colors.black,
        child: ListView(
          physics: BouncingScrollPhysics(),
          padding: EdgeInsets.all(10.0),
          children: <Widget>[
            FlatButton(
              onPressed: () {
                Navigator.pop(context);
              },
              child: Row(
                children: <Widget>[
                  Icon(
                    Icons.arrow_back_ios,
                    color: Colors.white,
                  ),
                  Text(
                    'Home',
                    style: TextStyle(fontSize: 25.0, color: Colors.white),
                  )
                ],
              ),
            ),
            Container(
              child: Text(
                'Seating Plan',
                style: TextStyle(fontSize: 30.0, color: Colors.redAccent),
              ),
            ),
            Container(
              height: 20,
            ),
            Container(
              // width: _deviceWidth / 4,
              decoration: BoxDecoration(
                color: Colors.grey.withOpacity(0.3),
                // borderRadius: BorderRadius.all(const Radius.circular(10.0)),
              ),
              // height: 30.0,
              padding: EdgeInsets.all(5.0),
              alignment: Alignment.center,
              child: Text(
                'Stage',
                style: TextStyle(fontSize: 25.0, color: Colors.white),
              ),
            ),
            floorPlan(),
            Row(
              children: <Widget>[
                Container(
                  child: Text(
                    'Name list',
                    style: TextStyle(color: Colors.white, fontSize: 30),
                  ),
                ),
                Spacer(),
                Container(
                  // color: Color.fromARGB(255, 58, 58, 60),
                  child: DropdownButton<String>(
                    style: TextStyle(color: Colors.white),
                    value: _dropDownValue,
                    onChanged: (String newValue) {
                      setState(() {
                        _dropDownValue = newValue;
                        tableDetails = [
                          false,
                          false,
                          false,
                          false,
                          false,
                          false,
                          false,
                          false,
                          false,
                          false,
                          false,
                        ];
                      });
                      print('value changed to $_dropDownValue');
                    },
                    items: <String>[
                      'All',
                      '6V',
                      '6J',
                      '6M',
                      '6S',
                      '6N',
                      'Teacher'
                    ].map<DropdownMenuItem<String>>((String value) {
                      return DropdownMenuItem<String>(
                        value: value,
                        child: Text(value),
                      );
                    }).toList(),
                  ),
                )
              ],
            ),
            Column(
              children: data.seatingFullList.map(([element]) {
                int _tableNo = element['Table Number'];
                _tableNo = _tableNo - 1;
                var temp = null;
                if (_dropDownValue == 'All') {
                  setState(() {
                    temp = null;
                  });
                } else {
                  setState(() {
                    temp = _dropDownValue;
                  });
                }
                print('temp is $temp');
                if (element['Class'] == temp || temp == null) {
                  if (!tableDetails[_tableNo]) {
                    updateTable(_tableNo);
                    print('$tableDetails');
                  }
                  return Container(
                    child: Container(
                      padding: EdgeInsets.all(10),
                      child: Row(
                        children: <Widget>[
                          Text(
                            '${element['Name']}',
                            style:
                                TextStyle(fontSize: 20.0, color: Colors.white),
                          ),
                          Container(
                            width: 10,
                          ),
                          Text('Table: ${element['Table Number']}',
                              style: TextStyle(
                                  fontSize: 20.0, color: Colors.white)),
                          Spacer(),
                          Icon(
                            Icons.keyboard_arrow_right,
                            color: Colors.white,
                          ),
                        ],
                      ),
                      decoration: BoxDecoration(
                        color: Color.fromARGB(255, 58, 58, 60),
                        borderRadius:
                            BorderRadius.all(const Radius.circular(10.0)),
                      ),
                      // height: 50.0,
                    ),
                    padding: EdgeInsets.all(7.0),
                  );
                } else {
                  return Container();
                }
              }).toList(),
            )
          ],
        ),
      ),
    );
  }
}
