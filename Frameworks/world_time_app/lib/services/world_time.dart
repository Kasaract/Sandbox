import 'package:http/http.dart';
import 'dart:convert';

class WorldTime {

  String location; // Location name for UI
  String time; // Time in location
  String flag; // URL to asset flag icon
  String url; // Location URL for API endpoint

  WorldTime({ this.location, this.flag, this.url });

  Future<void> getTime() async {

    try {
      Response res = await get('http://worldtimeapi.org/api/timezone/$url');
      Map data = jsonDecode(res.body);
      // print(data);

      String datetime = data['datetime'];
      String offset = data['utc_offset'].substring(1,3);
      // print(datetime);
      // print(offset);

      // Create DateTime object
      DateTime now = DateTime.parse(datetime);
      now = now.add(Duration(hours: int.parse(offset)));

      // Set time property
      time = now.toString();
    }
    catch(e) {
      print('Caught error: $e');
      time = 'Could not get time data';
    }

  }

}

