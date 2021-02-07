const html = `<!DOCTYPE html>
<html>
  <head>
    <title>Booster.js Code Builder</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script><script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.min.js"></script>
  </head>
  <body>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="jumbotron mb-0 text-white">
            <h1 class="display-6"><b>WEBSITE BOOSTER</b><br>Code Builder</h1>
            <p class="lead">This is a simple website to help you get started with <a href="https://github.com/viperadnan-git/website-booster" target="_blank">booster.js</a></p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card text-white bg-dark">
            <div class="card-body">
              <form action="/getcode" method="POST" id="form">
                <div class="form-group"><label for="domain_link"><b>Website Link</b></label><input type="url" class="form-control" id="domain_link" name="domain_link" placeholder="https://viperadnan-git.github.io/" required></div>
                <div class="custom-control custom-switch"><input type="checkbox" class="custom-control-input" name="advance_option" id="advance_option"><label class="custom-control-label" for="advance_option">Advance options</label></div>
                <div id="advance-options" class="section collapse">
                  <div class="form-group"><label for="mobile_upstream"><b>Mobile View Link</b></label><input type="url" class="form-control form-control-sm" name="mobile_upstream" id="mobile_upstream" placeholder="https://m.viperadnan-git.github.io/"> <small class="text-muted">Link of website for mobile view devices. (optional)</small></div>
                  <div class="form-group">
                    <label for="blocked_region"><b>Blocked Countries</b></label>
                    <select multiple class="form-control form-control-sm" id="blocked_region" name="blocked_region">
                      <option value="" selected hidden disabled>Select Countries</option>
                      <option value="AF">Afghanistan</option>
                      <option value="AX">Åland Islands</option>
                      <option value="AL">Albania</option>
                      <option value="DZ">Algeria</option>
                      <option value="AS">American Samoa</option>
                      <option value="AD">Andorra</option>
                      <option value="AO">Angola</option>
                      <option value="AI">Anguilla</option>
                      <option value="AQ">Antarctica</option>
                      <option value="AG">Antigua and Barbuda</option>
                      <option value="AR">Argentina</option>
                      <option value="AM">Armenia</option>
                      <option value="AW">Aruba</option>
                      <option value="AU">Australia</option>
                      <option value="AT">Austria</option>
                      <option value="AZ">Azerbaijan</option>
                      <option value="BS">Bahamas</option>
                      <option value="BH">Bahrain</option>
                      <option value="BD">Bangladesh</option>
                      <option value="BB">Barbados</option>
                      <option value="BY">Belarus</option>
                      <option value="BE">Belgium</option>
                      <option value="BZ">Belize</option>
                      <option value="BJ">Benin</option>
                      <option value="BM">Bermuda</option>
                      <option value="BT">Bhutan</option>
                      <option value="BO">Bolivia, Plurinational State of</option>
                      <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                      <option value="BA">Bosnia and Herzegovina</option>
                      <option value="BW">Botswana</option>
                      <option value="BV">Bouvet Island</option>
                      <option value="BR">Brazil</option>
                      <option value="IO">British Indian Ocean Territory</option>
                      <option value="BN">Brunei Darussalam</option>
                      <option value="BG">Bulgaria</option>
                      <option value="BF">Burkina Faso</option>
                      <option value="BI">Burundi</option>
                      <option value="KH">Cambodia</option>
                      <option value="CM">Cameroon</option>
                      <option value="CA">Canada</option>
                      <option value="CV">Cape Verde</option>
                      <option value="KY">Cayman Islands</option>
                      <option value="CF">Central African Republic</option>
                      <option value="TD">Chad</option>
                      <option value="CL">Chile</option>
                      <option value="CN">China</option>
                      <option value="CX">Christmas Island</option>
                      <option value="CC">Cocos (Keeling) Islands</option>
                      <option value="CO">Colombia</option>
                      <option value="KM">Comoros</option>
                      <option value="CG">Congo</option>
                      <option value="CD">Congo, the Democratic Republic of the</option>
                      <option value="CK">Cook Islands</option>
                      <option value="CR">Costa Rica</option>
                      <option value="CI">Côte d'Ivoire</option>
                      <option value="HR">Croatia</option>
                      <option value="CU">Cuba</option>
                      <option value="CW">Curaçao</option>
                      <option value="CY">Cyprus</option>
                      <option value="CZ">Czech Republic</option>
                      <option value="DK">Denmark</option>
                      <option value="DJ">Djibouti</option>
                      <option value="DM">Dominica</option>
                      <option value="DO">Dominican Republic</option>
                      <option value="EC">Ecuador</option>
                      <option value="EG">Egypt</option>
                      <option value="SV">El Salvador</option>
                      <option value="GQ">Equatorial Guinea</option>
                      <option value="ER">Eritrea</option>
                      <option value="EE">Estonia</option>
                      <option value="ET">Ethiopia</option>
                      <option value="FK">Falkland Islands (Malvinas)</option>
                      <option value="FO">Faroe Islands</option>
                      <option value="FJ">Fiji</option>
                      <option value="FI">Finland</option>
                      <option value="FR">France</option>
                      <option value="GF">French Guiana</option>
                      <option value="PF">French Polynesia</option>
                      <option value="TF">French Southern Territories</option>
                      <option value="GA">Gabon</option>
                      <option value="GM">Gambia</option>
                      <option value="GE">Georgia</option>
                      <option value="DE">Germany</option>
                      <option value="GH">Ghana</option>
                      <option value="GI">Gibraltar</option>
                      <option value="GR">Greece</option>
                      <option value="GL">Greenland</option>
                      <option value="GD">Grenada</option>
                      <option value="GP">Guadeloupe</option>
                      <option value="GU">Guam</option>
                      <option value="GT">Guatemala</option>
                      <option value="GG">Guernsey</option>
                      <option value="GN">Guinea</option>
                      <option value="GW">Guinea-Bissau</option>
                      <option value="GY">Guyana</option>
                      <option value="HT">Haiti</option>
                      <option value="HM">Heard Island and McDonald Islands</option>
                      <option value="VA">Holy See (Vatican City State)</option>
                      <option value="HN">Honduras</option>
                      <option value="HK">Hong Kong</option>
                      <option value="HU">Hungary</option>
                      <option value="IS">Iceland</option>
                      <option value="IN">India</option>
                      <option value="ID">Indonesia</option>
                      <option value="IR">Iran, Islamic Republic of</option>
                      <option value="IQ">Iraq</option>
                      <option value="IE">Ireland</option>
                      <option value="IM">Isle of Man</option>
                      <option value="IL">Israel</option>
                      <option value="IT">Italy</option>
                      <option value="JM">Jamaica</option>
                      <option value="JP">Japan</option>
                      <option value="JE">Jersey</option>
                      <option value="JO">Jordan</option>
                      <option value="KZ">Kazakhstan</option>
                      <option value="KE">Kenya</option>
                      <option value="KI">Kiribati</option>
                      <option value="KP">Korea, Democratic People's Republic of</option>
                      <option value="KR">Korea, Republic of</option>
                      <option value="KW">Kuwait</option>
                      <option value="KG">Kyrgyzstan</option>
                      <option value="LA">Lao People's Democratic Republic</option>
                      <option value="LV">Latvia</option>
                      <option value="LB">Lebanon</option>
                      <option value="LS">Lesotho</option>
                      <option value="LR">Liberia</option>
                      <option value="LY">Libya</option>
                      <option value="LI">Liechtenstein</option>
                      <option value="LT">Lithuania</option>
                      <option value="LU">Luxembourg</option>
                      <option value="MO">Macao</option>
                      <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                      <option value="MG">Madagascar</option>
                      <option value="MW">Malawi</option>
                      <option value="MY">Malaysia</option>
                      <option value="MV">Maldives</option>
                      <option value="ML">Mali</option>
                      <option value="MT">Malta</option>
                      <option value="MH">Marshall Islands</option>
                      <option value="MQ">Martinique</option>
                      <option value="MR">Mauritania</option>
                      <option value="MU">Mauritius</option>
                      <option value="YT">Mayotte</option>
                      <option value="MX">Mexico</option>
                      <option value="FM">Micronesia, Federated States of</option>
                      <option value="MD">Moldova, Republic of</option>
                      <option value="MC">Monaco</option>
                      <option value="MN">Mongolia</option>
                      <option value="ME">Montenegro</option>
                      <option value="MS">Montserrat</option>
                      <option value="MA">Morocco</option>
                      <option value="MZ">Mozambique</option>
                      <option value="MM">Myanmar</option>
                      <option value="NA">Namibia</option>
                      <option value="NR">Nauru</option>
                      <option value="NP">Nepal</option>
                      <option value="NL">Netherlands</option>
                      <option value="NC">New Caledonia</option>
                      <option value="NZ">New Zealand</option>
                      <option value="NI">Nicaragua</option>
                      <option value="NE">Niger</option>
                      <option value="NG">Nigeria</option>
                      <option value="NU">Niue</option>
                      <option value="NF">Norfolk Island</option>
                      <option value="MP">Northern Mariana Islands</option>
                      <option value="NO">Norway</option>
                      <option value="OM">Oman</option>
                      <option value="PK">Pakistan</option>
                      <option value="PW">Palau</option>
                      <option value="PS">Palestinian Territory, Occupied</option>
                      <option value="PA">Panama</option>
                      <option value="PG">Papua New Guinea</option>
                      <option value="PY">Paraguay</option>
                      <option value="PE">Peru</option>
                      <option value="PH">Philippines</option>
                      <option value="PN">Pitcairn</option>
                      <option value="PL">Poland</option>
                      <option value="PT">Portugal</option>
                      <option value="PR">Puerto Rico</option>
                      <option value="QA">Qatar</option>
                      <option value="RE">Réunion</option>
                      <option value="RO">Romania</option>
                      <option value="RU">Russian Federation</option>
                      <option value="RW">Rwanda</option>
                      <option value="BL">Saint Barthélemy</option>
                      <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                      <option value="KN">Saint Kitts and Nevis</option>
                      <option value="LC">Saint Lucia</option>
                      <option value="MF">Saint Martin (French part)</option>
                      <option value="PM">Saint Pierre and Miquelon</option>
                      <option value="VC">Saint Vincent and the Grenadines</option>
                      <option value="WS">Samoa</option>
                      <option value="SM">San Marino</option>
                      <option value="ST">Sao Tome and Principe</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="SN">Senegal</option>
                      <option value="RS">Serbia</option>
                      <option value="SC">Seychelles</option>
                      <option value="SL">Sierra Leone</option>
                      <option value="SG">Singapore</option>
                      <option value="SX">Sint Maarten (Dutch part)</option>
                      <option value="SK">Slovakia</option>
                      <option value="SI">Slovenia</option>
                      <option value="SB">Solomon Islands</option>
                      <option value="SO">Somalia</option>
                      <option value="ZA">South Africa</option>
                      <option value="GS">South Georgia and the South Sandwich Islands</option>
                      <option value="SS">South Sudan</option>
                      <option value="ES">Spain</option>
                      <option value="LK">Sri Lanka</option>
                      <option value="SD">Sudan</option>
                      <option value="SR">Suriname</option>
                      <option value="SJ">Svalbard and Jan Mayen</option>
                      <option value="SZ">Swaziland</option>
                      <option value="SE">Sweden</option>
                      <option value="CH">Switzerland</option>
                      <option value="SY">Syrian Arab Republic</option>
                      <option value="TW">Taiwan, Province of China</option>
                      <option value="TJ">Tajikistan</option>
                      <option value="TZ">Tanzania, United Republic of</option>
                      <option value="TH">Thailand</option>
                      <option value="TL">Timor-Leste</option>
                      <option value="TG">Togo</option>
                      <option value="TK">Tokelau</option>
                      <option value="TO">Tonga</option>
                      <option value="TT">Trinidad and Tobago</option>
                      <option value="TN">Tunisia</option>
                      <option value="TR">Turkey</option>
                      <option value="TM">Turkmenistan</option>
                      <option value="TC">Turks and Caicos Islands</option>
                      <option value="TV">Tuvalu</option>
                      <option value="UG">Uganda</option>
                      <option value="UA">Ukraine</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="GB">United Kingdom</option>
                      <option value="US">United States</option>
                      <option value="UM">United States Minor Outlying Islands</option>
                      <option value="UY">Uruguay</option>
                      <option value="UZ">Uzbekistan</option>
                      <option value="VU">Vanuatu</option>
                      <option value="VE">Venezuela, Bolivarian Republic of</option>
                      <option value="VN">Viet Nam</option>
                      <option value="VG">Virgin Islands, British</option>
                      <option value="VI">Virgin Islands, U.S.</option>
                      <option value="WF">Wallis and Futuna</option>
                      <option value="EH">Western Sahara</option>
                      <option value="YE">Yemen</option>
                      <option value="ZM">Zambia</option>
                      <option value="ZW">Zimbabwe</option>
                    </select>
                    <small class="text-muted">Countries where website is to be blocked. (optional)</small>
                  </div>
                  <div class="form-group"><label for="blocked_ip"><b>Blocked IPs</b></label><input class="form-control form-control-sm" name="blocked_ip" id="blocked_ip" placeholder="192.0.0.1 192.168.0.1"> <small class="text-muted">List of blocked IPs seperated by space. (optional)</small></div>
                  <div class="form-row"><label class="col"><b>Cache TTL</b></label><input type="number" class="form-control form-control-sm col-8" id="cache_ttl" name="cache_ttl" value="5" placeholder="5"></div>
                  <div class="section section custom-control custom-switch"><input type="checkbox" class="custom-control-input" id="scrape_shield" name="scrape_shield" checked><label class="custom-control-label" for="scrape_shield">Scrape Shield</label></div>
                  <div class="section custom-control custom-switch"><input type="checkbox" class="custom-control-input" id="minify_html" name="minify_html" checked><label class="custom-control-label" for="minify_html">Minify HTML</label></div>
                  <div class="section custom-control custom-switch"><input type="checkbox" class="custom-control-input" id="minify_css" name="minify_css" checked><label class="custom-control-label" for="minify_css">Minify CSS</label></div>
                  <div class="section custom-control custom-switch"><input type="checkbox" class="custom-control-input" id="minify_js" name="minify_js" checked><label class="custom-control-label" for="minify_js">Minify JavaScript</label></div>
                  <div class="section custom-control custom-switch"><input type="checkbox" class="custom-control-input" id="polish" name="polish"><label class="custom-control-label" for="polish">Polish</label></div>
                  <div class="section custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="mirage" name="mirage" checked><label class="custom-control-label" for="mirage">Mirage</label></div>
                  <div class="section custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" name="cache_everything" id="cache_everything"><label class="custom-control-label" for="cache_everything">Cache Everything</label></div>
                </div>
                <br><button type="submit" class="btn btn-primary">Get Code</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="section row justify-content-center" id="result" style="display:none">
        <div class="col-md-8">
          <div class="card text-white bg-dark" id="success" style="display:none">
            <div class="card-body">
              <h5 class="card-title">Code Generated Successfully !</h5>
              <p class="card-text">Copy the following code and paste in <a href="https://workers.cloudflare.com/" target="_blank">CloudFlare Workers</a></p>
              <button class="btn btn-primary" data-clipboard-target="#code">Copy the code to clipboard</button>
              <textarea class="form-control mt-3" id="code" rows="100"></textarea>
            </div>
          </div>
          <div class="card text-white bg-dark" id="failed" style="display:none">
            <div class="card-body">
              <h5 class="card-title">Failed to generate the code.</h5>
              <p class="card-text" id="failed_message"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style>body{background-color:#000}.container .jumbotron{background-color:#000}.section{margin-top:10px}</style>
    <script>new ClipboardJS(".btn");
      form.onsubmit = e => {
        e.preventDefault();
        fetch(form.action, {
          method: form.method,
          body: new URLSearchParams(new FormData(form))
        }).then(r => {
          if (!r.ok) {
            result.style.display = "flex";
            failed.style.display = "flex";
            success.style.display = "none";
            return r.text().then(t => {
              failed_message.textContent = t;
            });
          }
          return r.text().then(t => {
            result.style.display = "flex";
            success.style.display = "flex";
            failed.style.display = "none";
            code.textContent = t;
          });
        });
      };
      $("input[id=advance_option]").change(function() {
        if ($(this).is(":checked")) {
            $("#advance-options").removeClass("collapse");
        } else {
            $("#advance-options").addClass("collapse");
        }
      });
    </script>
  </body>
</html>`;

const script = `const config = {
  basic: {
    upstream: 'UPSTREAM_LINK',
    mobileRedirect: 'MOBILE_UPSTREAM',
  },

  firewall: {
    blockedRegion: [BLOCKED_REGION],
    blockedIPAddress: [BLOCKED_IP],
    scrapeShield: true,
  },

  routes: {},

  optimization: {
    cacheEverything: false,
    cacheTtl: 5,
    mirage: true,
    polish: 'off',
    minify: {
      javascript: true,
      css: true,
      html: true,
    },
  },
};

async function isMobile(userAgent) {
  const agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  return agents.any((agent) => userAgent.indexOf(agent) > 0);
}

async function fetchAndApply(request) {
  const region = request.headers.get('cf-ipcountry') || '';
  const ipAddress = request.headers.get('cf-connecting-ip') || '';
  const userAgent = request.headers.get('user-agent') || '';

  if (region !== '' && config.firewall.blockedRegion.includes(region.toUpperCase())) {
    return new Response(
      'Access denied: website is not available in your region.',
      {
        status: 403,
      },
    );
  } if (ipAddress !== '' && config.firewall.blockedIPAddress.includes(ipAddress)) {
    return new Response(
      'Access denied: Your IP address is blocked.',
      {
        status: 403,
      },
    );
  }

  const requestURL = new URL(request.url);
  let upstreamURL = null;

  if (userAgent && isMobile(userAgent) === true) {
    upstreamURL = new URL(config.basic.mobileRedirect);
  } else if (region && region.toUpperCase() in config.routes) {
    upstreamURL = new URL(config.routes[region.toUpperCase()]);
  } else {
    upstreamURL = new URL(config.basic.upstream);
  }

  requestURL.protocol = upstreamURL.protocol;
  requestURL.host = upstreamURL.host;
  requestURL.pathname = upstreamURL.pathname + requestURL.pathname;

  let newRequest;
  if (request.method === 'GET' || request.method === 'HEAD') {
    newRequest = new Request(requestURL, {
      cf: {
        cacheEverything: config.optimization.cacheEverything,
        cacheTtl: config.optimization.cacheTtl,
        mirage: config.optimization.mirage,
        polish: config.optimization.polish,
        minify: config.optimization.minify,
        scrapeShield: config.firewall.scrapeShield,
      },
      method: request.method,
      headers: request.headers,
    });
  } else {
    const requestBody = await request.text();
    newRequest = new Request(requestURL, {
      cf: {
        cacheEverything: config.optimization.cacheEverything,
        cacheTtl: config.optimization.cacheTtl,
        mirage: config.optimization.mirage,
        polish: config.optimization.polish,
        minify: config.optimization.minify,
        scrapeShield: config.firewall.scrapeShield,
      },
      method: request.method,
      headers: request.headers,
      body: requestBody,
    });
  }

  const fetchedResponse = await fetch(newRequest);

  const modifiedResponseHeaders = new Headers(fetchedResponse.headers);
  if (modifiedResponseHeaders.has('x-pjax-url')) {
    const pjaxURL = new URL(modifiedResponseHeaders.get('x-pjax-url'));
    pjaxURL.protocol = requestURL.protocol;
    pjaxURL.host = requestURL.host;
    pjaxURL.pathname = pjaxURL.path.replace(requestURL.pathname, '/');

    modifiedResponseHeaders.set(
      'x-pjax-url',
      pjaxURL.href,
    );
  }

  return new Response(
    fetchedResponse.body,
    {
      headers: modifiedResponseHeaders,
      status: fetchedResponse.status,
      statusText: fetchedResponse.statusText,
    },
  );
}

// eslint-disable-next-line no-restricted-globals
addEventListener('fetch', (event) => {
  event.respondWith(fetchAndApply(event.request));
});`;

async function handleRequest(request) {
  let url = new URL(request.url);
  let path = url.pathname;
  switch (path) {
    case "/getcode":
      if (request.method === "POST") {
        const p = await readRequestBody(request);
        let code = script;
        code = code.replace("UPSTREAM_LINK", p.domain_link);
        if (p.advance_option && p.mobile_upstream) {
          code = code.replace("MOBILE_UPSTREAM", p.mobile_upstream);
        } else {
          code = code.replace("MOBILE_UPSTREAM", p.domain_link);
        }
        if (p.advance_option && p.blocked_region[0]) {
          const rgn = p.blocked_region.join("', '");
          code = code.replace("BLOCKED_REGION", "'" + rgn + "'");
        } else {
          code = code.replace("BLOCKED_REGION", "");
        }
        if (p.advance_option && p.blocked_ip) {
          const rgi = p.blocked_ip.replace(" ", "', '");
          code = code.replace("BLOCKED_IP", "'" + rgi + "'");
        } else {
          code = code.replace("BLOCKED_IP", "");
        }
        if (p.advance_option) {
          if (p.cache_ttl) {
            code = code.replace("cacheTtl: 5", "cacheTtl: " + p.cache_ttl);
          }
          if (!p.scrape_shield) {
            code = code.replace("scrapeShield: true", "scrapeShield: false");
          }
          if (p.cache_everything) {
            code = code.replace(
              "cacheEverything: false,",
              "cacheEverything: true,"
            );
          }
          if (!p.minify_html) {
            code = code.replace("html: true", "html: false");
          }
          if (!p.minify_css) {
            code = code.replace("css: true,", "css: false,");
          }
          if (!p.minify_js) {
            code = code.replace("javascript: true", "javascript: false");
          }
          if (p.polish) {
            code = code.replace("polish: 'off'", "polish: 'on'");
          }
          if (!p.mirage) {
            code = code.replace("mirage: true", "mirage: false");
          }
        }
        return new Response(code, {
          status: 200,
          headers: {
            "content-type": "text/javascript",
          },
        });
      }
    default:
      return new Response(html, {
        status: 200,
        headers: {
          "content-type": "text/html;charset=UTF-8",
        },
      });
  }
}

async function readRequestBody(request) {
  const { headers } = request;
  const contentType = headers.get("content-type") || "";
  if (contentType.includes("form")) {
    const formData = await request.formData();
    const body = {};
    for (const entry of formData.entries()) {
      body[entry[0]] = entry[1];
    }
    body.blocked_region = formData.getAll("blocked_region");
    return body;
  }
}

addEventListener("fetch", (event) => {
  return event.respondWith(handleRequest(event.request));
});
