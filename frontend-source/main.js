window.serviceEvents = function (action) {
  console.log(action);
  frames.countryInfo.location.href = '/country-info?country=' + action.chosenCountry;
}