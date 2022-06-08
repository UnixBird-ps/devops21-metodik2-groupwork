window.serviceEvents = function (action) {
  showCountryAndCapitalInfo(action);
}

function showCountryAndCapitalInfo(action) {
  console.log(action);
  let country = encodeURIComponent(action.chosenCountry);
  frames.countryInfo.location.href = '/country-info?country=' + country;
  frames.capitalInfo.location.href = '/capital-info?country=' + country;
}