app.filter('PriceRange', [function () {
  return function (properties, range) {
    if (!properties) { return; }
    // console.log("properties: ", properties);
    // console.log("range: ", range);

    var filtered = [];
    
    if (range.length === 0) {
      return properties;
    }

    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];
      property.propertyData.pris = property.propertyData.pris / 1;

      if (
        range[0] && range[1] &&
        property.propertyData.pris >= range[0] &&
        property.propertyData.pris <= range[1]) {

        filtered.push(property);
      } else if (
        range[0] && !range[1] &&
        property.propertyData.pris >= range[0]) {

        filtered.push(property);
      } else if (
        !range[0] && range[1] &&
        property.propertyData.pris <= range[1]) {

        filtered.push(property);
      } else if (!range[0] && !range[1]) {

        filtered.push(property);
      }
    }

    return filtered;
  };
}]);