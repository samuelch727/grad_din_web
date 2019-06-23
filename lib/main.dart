import 'package:flutter_web/material.dart';
import 'package:grad_din_web2/pages/welcomePageMobile.dart';
import 'pages/welcomePage.dart';

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  MyApp({Key key}) : super(key: key);

  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(fontFamily: 'NotoSans'),
      title: 'Graduration Party 2019',
      home: homePage(),
    );
  }
}

class homePage extends StatefulWidget {
  homePage({Key key}) : super(key: key);

  _homePageState createState() => _homePageState();
}

class _homePageState extends State<homePage> {
  @override
  Widget build(BuildContext context) {
    var deviceWidth = MediaQuery.of(context).size.width;
    print(deviceWidth);
    return Scaffold(
      // body: deviceWidth > 735.0 ? welcomePage() : welcomePageMobile(),
      body: welcomePage(),
    );
  }
}