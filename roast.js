// Generated by CoffeeScript 1.8.0
(function() {
  var LongWords, filterLongWords, grade, pluralize, range, reverse, startsWith, tempConvert;

  reverse = function(str) {
    var arr, i, new_arr, _i, _ref;
    arr = str.split("");
    new_arr = [];
    for (i = _i = _ref = arr.length - 1; _i >= 0; i = _i += -1) {
      new_arr.push(arr[i]);
    }
    return new_arr.reduce(function(x, y) {
      return x + y;
    });
  };

  console.log(reverse("building"));

  filterLongWords = function(arr, num) {
    var element, new_arr, _i, _len;
    new_arr = [];
    for (_i = 0, _len = arr.length; _i < _len; _i++) {
      element = arr[_i];
      if (element.length > num) {
        new_arr.push(element);
      }
    }
    return new_arr;
  };

  LongWords = ["words", "that", "are", "amazing"];

  console.log(filterLongWords(LongWords, 4));

  range = function(int) {
    var _i, _results;
    if (int < 0) {
      console.log("Greater than zero, plis");
      return false;
    }
    return (function() {
      _results = [];
      for (var _i = 0; 0 <= int ? _i <= int : _i >= int; 0 <= int ? _i++ : _i--){ _results.push(_i); }
      return _results;
    }).apply(this);
  };

  console.log(range(6));

  startsWith = function(str1, str2) {
    return str1.indexOf(str2) === 0;
  };

  console.log(startsWith("one bright day", "one dark day, in the middle of the night"));

  grade = function(int) {
    grade = "";
    if (int < 60) {
      grade = "F";
    } else if (int >= 60 && int < 70) {
      grade = "D";
    } else if (int >= 70 && int < 80) {
      grade = "C";
    } else if (int >= 80 && int < 90) {
      grade = "B";
    } else {
      grade = "A";
    }
    return grade;
  };

  console.log(grade(78));

  pluralize = function(str, num) {
    var macbeth;
    macbeth = "is";
    if (num > 1) {
      str = str + "s";
      macbeth = "are";
    }
    return "There " + macbeth + " " + num + " " + str;
  };

  console.log(pluralize("doge", 1));

  console.log(pluralize("doge", 3));

  tempConvert = function(tmp) {
    var tmpF;
    tmpF = tmp * (9 / 5) + 32;
    return tmp + " degrees C is " + tmpF + " degrees Fahrenheit";
  };

  console.log(tempConvert(0));

  console.log(tempConvert(36));

}).call(this);