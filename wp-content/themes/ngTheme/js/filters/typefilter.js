app.filter('typeRange', function () {
  return function (properties, typeRange) {
    if (!properties) { return; }
    // console.log("properties: ", properties);
    // console.log("typeRange: ", typeRange);

    /*
      typeRange = {
        Apartment : "",
        House : "",
        Townhouse : ""
      };
    */
    var notApplicable = true;
    for (var i in typeRange) {
      if (typeof typeRange[i] == "boolean") {
        notApplicable = false;
      }
    }

    if (notApplicable) { return properties; }


    var filtered = [];

    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];

      for (var j in typeRange) {
        if (
          typeRange[j] &&
          j == property.propertyData.bostadstyp
        ) {

          filtered.push(property);
        }
      }
    }

    return filtered;
  };
});