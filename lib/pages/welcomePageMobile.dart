import 'package:flutter_web/material.dart';

class welcomePageMobile extends StatefulWidget {
  welcomePageMobile({Key key}) : super(key: key);

  _welcomePageMobileState createState() => _welcomePageMobileState();
}

class _welcomePageMobileState extends State<welcomePageMobile> {
  @override
  Widget build(BuildContext context) {
    var _deviceWidth = MediaQuery.of(context).size.width;
    var _deviceHeight = MediaQuery.of(context).size.height;
    var textSize = _deviceHeight * 0.02;
    return Scaffold(
      body: ListView(
          children: <Widget>[
            //  Container(height: 20.0,),
            Container(
              child: Text('Graduration Party 2019 Mobile', style: TextStyle(fontSize: 30.0)),
              margin: const EdgeInsets.only(left: 20.0, right: 20.0),
            )
          ],
        ),
    );
  }
}
