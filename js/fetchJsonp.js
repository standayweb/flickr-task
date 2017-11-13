// @flow

// incase there is ever multiple requests
let unique = 0;

// jsonp requires doing some interesting stuff with the dom
const fetchJsonp = (url: string) =>
  new Promise(resolve => {
    const script = document.createElement('script');
    const name = `_jsonp_${unique}`;
    unique += 1;

    let cbUrl;
    if (url.match(/\?/)) {
      cbUrl = `${url}&jsoncallback=${name}`;
    } else {
      cbUrl = `${url}?jsoncallback=${name}`;
    }

    script.src = cbUrl;
    window[name] = (json: Object) => {
      resolve(new Response(JSON.stringify(json)));
      script.outerHTML = '';
      delete window[name];
    };

    if (document.body) {
      document.body.appendChild(script);
    }
  });

export default fetchJsonp;
