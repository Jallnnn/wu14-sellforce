app.filter('PriceRange', [function () {
  return function (properties, prisrange) {
    if (!properties) { return; }
    // console.log("properties: ", properties);
    // console.log("range: ", range);

    var filtered = [];
    
    var range= [];
    range[0]=prisrange.substr(0,prisrange.indexOf(';'))+"000";
    range[1]=prisrange.substr(prisrange.indexOf(';')+1,prisrange.length-1)+"000";
// console.log("range: ", range);
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