define(['required-module/strings'],
  function (strings) {
  return {
    printToConsole: function () {
      console.log(strings.provideText());
    }
  }
});
