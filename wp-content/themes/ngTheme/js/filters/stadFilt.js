app.filter('stadFilt', function () {
  return function (properties, pStad) {
    if (!properties) { return; }
    console.log("STAD: ", pStad);
    // console.log("hasBalcony: ", hasBalcony);

    var filtered = [];

    if (!pStad) {
      return properties;
    }

    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];
      // property.propertyData.hiss = property.propertyData.hiss / 1;

      if ( property.propertyData.stad == pStad ) {
        filtered.push(property);
      }
    }
    
    return filtered;
  };
});