const t=document.querySelector("div[data-city='1']"),e=document.querySelector("div[data-city='2']"),c=document.querySelector("div[data-city='3']"),i=document.querySelector("div[data-city='4']"),r=document.querySelector("div[data-city='5']"),n=document.querySelector("div[data-city='6']"),a=document.querySelector("div[data-city='21']"),s=document.querySelector("div[data-city='22']"),o=document.querySelector("div[data-city='23']"),_=document.querySelector("div[data-city='24']"),d=document.querySelector("div[data-city='25']"),l=document.querySelector("div[data-city='26']"),u=[t,e,c,i,r,n],y=[a,s,o,_,d,l],p=document.querySelector(".header_form"),m=document.querySelector(".main");document.querySelector(".footer_form").addEventListener("submit",(function(t){t.preventDefault();const e=t.currentTarget.elements.footer_input.value.trim(),c=t.currentTarget.elements.footer_select.value;b(e,c).then((t=>console.log(t))).catch((t=>console.log(t.message)))})),p.addEventListener("submit",(function(t){t.preventDefault();const e=t.currentTarget.elements.header_city.value.trim();v(e).then((t=>{var e;m.innerHTML=`\n        <div class="big_city_card">\n        <div class="city_item_title_wrapper">\n            <h2 class="big_city_card_title">${(e=t).location.name}</h2>\n             <img class="circle_big " src="${e.current.condition.icon}" alt="weather icon"> \n          </div>\n          <div class="big_city_card_country_wrapper"><h3 class="big_city_card_country">${e.location.country}</h3>\n                  <p class="big_city_card_condition">${e.current.condition.text}</p></div>\n            <div class="big_city_card_wrapper_bottom"> \n          <div class="big_city_card_wrapper_text">\n            <p class="big_city_card_text">Wind:  ${e.current.wind_kph} kph</p>\n            <p class="big_city_card_text">Pressure:  ${e.current.pressure_mb} mb</p>\n            <p class="big_city_card_text">Humidity:  ${e.current.humidity}%</p>\n            <p class="big_city_card_text">Wind direction: ${e.current.wind_dir}</p>\n            <p class="big_city_card_text">Gust:  ${e.current.gust_kph} kph</p>\n            <p class="big_city_card_text">UV: ${e.current.uv}</p>\n         </div>\n         <div class="big_city_card_temp_wrapper">  \n                 <h3 class="big_city_card_temp_title">${e.current.temp_c}C&#176;</h3>\n          <p class="big_city_card_real_feel">Real feel ${e.current.feelslike_c}C&#176</p></div>\n      </div>     \n      </div>\n    `})).catch((t=>console.log(t.message))).finally((()=>{})),t.currentTarget.elements.header_city.value=""}));const h=["Kyiv","Lviv","Odesa","Doha","Mirissa","Krabi"],v=async t=>{const e=await fetch(`http://api.weatherapi.com/v1/current.json?key=53d51b3de44f43c5a8f183833232309&q=${t}`);if(!e.ok)throw new Error(e.statusText);return e.json()};(async()=>{const t=h.map((async t=>{const e=await fetch(`http://api.weatherapi.com/v1/current.json?key=53d51b3de44f43c5a8f183833232309&q=${t}`);if(!e.ok)throw new Error(e.statusText);return e.json()}));return await Promise.all(t)})().then((t=>{t.forEach(((t,e)=>{var c;console.log(t),u[e].innerHTML=` <div class="city_item_title_wrapper">\n            <h2 class="city_item_title">${(c=t).location.name}</h2>\n            <img class="circle" src="${c.current.condition.icon}" alt="weather icon">\n          </div>\n          <h3 class="city_item_temp_title">${c.current.temp_c}C&#176;</h3>\n          <p class="real_feel">Real feel ${c.current.feelslike_c}C&#176</p>\n          <div class="city_item_text_wrapper">\n            <p class="city_item_text">Wind: ${c.current.wind_kph} kph</p>\n            <p class="city_item_text">Pressure: ${c.current.pressure_mb} mb</p>\n          </div>`,y[e].innerHTML=function(t){return` \n      <h2 class="city_item_back_name">${t.location.name}</h2>\n                  <h3 class="city_item_back_region">${t.location.region}</h3>\n            <h3 class="city_item_back_country"> ${t.location.country}</h3>\n         <p class="city_item_back_text">Condition: ${t.current.condition.text}</p>\n            <p class="city_item_back_text">Humidity: ${t.current.humidity}%</p>\n            <p class="city_item_back_text">Wind direction: ${t.current.wind_dir}</p>\n            <p class="city_item_back_text">Gust: ${t.current.gust_kph} kph</p>\n            <p class="city_item_back_text">UV: ${t.current.uv}</p>\n            <p class="city_item_back_text">Last updated: ${t.current.last_updated}</p>\n        `}(t)}))}));const b=async(t,e)=>{const c=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=53d51b3de44f43c5a8f183833232309&q=${t}&days=${e}`);if(!c.ok)throw new Error(c.statusText);return c.json()};
//# sourceMappingURL=index.393fe9a7.js.map