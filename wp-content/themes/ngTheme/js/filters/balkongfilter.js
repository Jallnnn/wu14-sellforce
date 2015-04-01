app.filter('balkong', function () {
  return function (properties, hasBalcony) {
    if (!properties) { return; }
    // console.log("properties: ", properties);
    // console.log("hasBalcony: ", hasBalcony);

    var filtered = [];

    if (hasBalcony != "1") {
      return properties;
    }

    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];
      property.propertyData.balkong = property.propertyData.balkong / 1;

      if ( property.propertyData.balkong == hasBalcony ) {
        filtered.push(property);
      }
    }
    
    return filtered;
  };
});