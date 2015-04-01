app.filter('hiss', function () {
  return function (properties, hashiss) {
    if (!properties) { return; }
    // console.log("properties: ", properties);
    // console.log("hasBalcony: ", hasBalcony);

    var filtered = [];

    if (hashiss != "1") {
      return properties;
    }

    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];
      property.propertyData.hiss = property.propertyData.hiss / 1;

      if ( property.propertyData.hiss == hashiss ) {
        filtered.push(property);
      }
    }
    
    return filtered;
  };
});