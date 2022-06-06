let sleep = ms => new Promise(res => setTimeout(res, ms));

window.start = async function (cb) {

  let old = $.getScript;
  $.getScript = (...args) => {
    args[0].includes('world') && (args[0] = '/js/world.js');
    args[0].includes('Core') && (args[0] = '/js/chartingCore.js');
    return old.apply($, args);
  }

  async function resize() {
    $('.map').empty().JSC({
      mapping: {
        referenceLayers: 'World',
        projection: false
      },
      type: 'map',
      height: window.innerHeight + 40,
      width: window.innerWidth + 20,
      legendVisible: false,
      chartArea: {
        //fill: '#FFFFFF'
      },
      defaultPointOutlineWidth: 0,
      series: [{
        defaultPoint: {
          color: '#f56a0db8'
        },
        map: 'Continent:North America'
      },
      {
        defaultPoint: {
          color: '#b25313b8'
        },
        map: 'Continent:South America'
      },
      {
        defaultPoint: {
          color: 'rgba(126,177,27,0.97)'
        },
        map: 'Continent:Europe'
      },
      {
        defaultPoint: {
          color: '#376c51bc'
        },
        map: 'Continent:Asia'
      },
      {
        defaultPoint: {
          color: '#3260b660'
        },
        map: 'Continent:Africa'
      },
      {
        defaultPoint: {
          color: '#6684649f'
        },
        map: 'Continent:Oceania'
      }],
      toolbarVisible: false
    });

    // Remove unnecessary elements
    while (!$('text').length) {
      await sleep(10);
    }
    $('text').eq(0).remove();
    $('text').eq(0).remove();
    $('svg svg').eq(0).remove();
    $('rect').eq(3).remove();
    $('rect').eq(3).remove();

    let debounce;
    $('*').click(() => {
      clearTimeout(debounce);
      debounce = setTimeout(onClick, 100);
    });
  }

  resize();
  window.onresize = resize;

  // click handler
  let chosenCountry = '', chosenContinent = '';
  function onClick() {
    if (!chosenCountry) {
      return;
    }
    cb(chosenCountry, chosenContinent);
  }

  let sleepTime = 10;
  while (1) {
    await sleep(sleepTime);
    let tspans = document.querySelectorAll('tspan');
    let [country, continent] = [...tspans, '', ''].map(x => x.innerHTML || '');
    let opacity;
    if (tspans.length) {
      let tooltip = tspans[0].parentNode.parentNode;
      tooltip.style.display = 'none';
      sleepTime = 100;
      opacity = window.getComputedStyle(tooltip).opacity;
      if (opacity != 1 && chosenCountry) {
        chosenCountry = ''; chosenContinent = '';
        $('.where').empty();
      }
    }
    if (opacity == 1 && country !== chosenCountry) {
      chosenCountry = country;
      chosenContinent = continent;
      $('.where').html(chosenCountry + '<br>' + chosenContinent);
    }
  }
}