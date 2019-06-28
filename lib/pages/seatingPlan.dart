import 'package:flutter_web/material.dart';
import 'package:grad_din_web2/function.dart';

class seatingPlanMainPage extends StatefulWidget {
  seatingPlanMainPage({
    Key key
  }): super(key: key);

  _seatingPlanMainPageState createState() => _seatingPlanMainPageState();
}

class _seatingPlanMainPageState extends State < seatingPlanMainPage > {
  @override
  Widget build(BuildContext context) {
    var _deviceWidth = MediaQuery.of(context).size.width;
    var _deviceHeight = MediaQuery.of(context).size.height;
    return Container(
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
                  'Seating Plan',
                  style: TextStyle(
                    fontSize: 30.0, color: Color.fromARGB(255, 255, 69, 58)),
                ),
                Row(
                  children: < Widget > [
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
                      'Available Soon',
                      style: TextStyle(fontSize: 20),
                    ),
                    // color: Colors.white,
                  ),
                  // onPressed: () {},
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
            height: (_deviceWidth / 1.3) / 1.5857725083 > 380 / 1.5857725083 ?
            380 / 1.5857725083 :
            (_deviceWidth / 1.3) / 1.5857725083,
            width: _deviceWidth / 1.3 > 380 ? 380 : _deviceWidth / 1.3,
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
                        style: TextStyle(color: Colors.white, fontSize: 30),
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
                            style:
                            TextStyle(color: Colors.white, fontSize: 30),
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
    );
  }
}

class seatingPlanMore extends StatefulWidget {
  seatingPlanMore({Key key}) : super(key: key);

  _seatingPlanMoreState createState() => _seatingPlanMoreState();
}

class _seatingPlanMoreState extends State<seatingPlanMore> {
  @override
  Widget build(BuildContext context) {
    return Container(
       
    );
  }
}