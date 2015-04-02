app.filter('kommunFilt', function () {
  return function (properties, pKommun) {
    if (!properties) { return; }
    // console.log("properties: ", properties);
    // console.log("hasBalcony: ", hasBalcony);
console.log("KOMMUN: ", pKommun);
    var filtered = [];

    if (!pKommun) {
      return properties;
    }

    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];
      // property.propertyData.hiss = property.propertyData.hiss / 1;

      if ( property.propertyData.komun == pKommun ) {
        filtered.push(property);
      }
    }
    
    return filtered;
  };
});