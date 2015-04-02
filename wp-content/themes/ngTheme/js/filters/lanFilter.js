app.filter('lanFilter', function () {
  return function (properties, pLan) {
    if (!properties) { return; }
    // console.log("properties: ", properties);
    // console.log("hasBalcony: ", hasBalcony);
// console.log("LÄN: ", pLan);
    var filtered = [];

    if (!pLan) {
      return properties;
    }

    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];
      // property.propertyData.hiss = property.propertyData.hiss / 1;

      if ( property.propertyData.lan == pLan ) {
        filtered.push(property);
      }
    }
    
    return filtered;
  };
});