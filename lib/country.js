import { number_to_good_writing } from '../lib/conversion_number.js';

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

let title = urlParams.get('title');

if (title.split("-").length > 1){
    title = title.replace(/-/g, " ");
}


let title_html = document.querySelector("title");
title_html.innerText = title + " page by Bluz0";


function create(tag, container, text=null) {
    const element = document.createElement(tag);
    element.innerText = text;
    container.appendChild(element);
    return element;
}

let page = document.querySelector(".page-country");

axios.get("https://restcountries.com/v3.1/name/" + title).then(response => {

    console.log(response.data);
    
    let flag_div = create("div",page);
    flag_div.style.marginTop = "162px";
    flag_div.style.marginLeft = "80px";
    flag_div.style.height = "370px";
    flag_div.style.width = "550px";
    let country_flag = response.data[0].flags.png;
    let flag_img = create("img",flag_div);
    flag_img.src = country_flag;
    flag_img.style.height = "370px";
    flag_img.style.width = "550px";

    let title_country = create("h1",page,title);
    title_country.style.fontSize = "30px";
    title_country.style.position = "absolute";
    title_country.style.top = "260px";
    title_country.style.left = "740px";
    title_country.style.fontWeight = "bold";

    let info_native = create("div",page);
    info_native.style.position = "absolute";
    info_native.style.display = "flex";
    info_native.style.top = "350px";
    info_native.style.left = "740px";
    let language = Object.keys(response.data[0].languages);
    let was_hard_damn = response.data[0].name.nativeName[language[0]].common;
    let native_name = create("h3",info_native,"Native Name: ");
    let native_name_text = create("p",info_native,was_hard_damn);
    native_name_text.style.paddingTop = "3px";
    native_name_text.style.paddingLeft = "5px";

    let population = create("div",page);
    population.style.position = "absolute";
    population.style.display = "flex";
    population.style.top = "390px";
    population.style.left = "740px";
    let population_title = create("h3",population,"Population: ");
    let population_data = create("p",population,number_to_good_writing(response.data[0].population));
    population_data.style.paddingTop = "3px";
    population_data.style.paddingLeft = "5px";

    let region = create("div",page);
    region.style.position = "absolute";
    region.style.display = "flex";
    region.style.top = "430px";
    region.style.left = "740px";
    let region_title = create("h3",region,"Region: ");
    let region_data = create("p",region,response.data[0].region);
    region_data.style.paddingTop = "3px";
    region_data.style.paddingLeft = "5px";

    let sub_region = create("div",page);
    sub_region.style.position = "absolute";
    sub_region.style.display = "flex";
    sub_region.style.top = "470px";
    sub_region.style.left = "740px";
    let sub_region_title = create("h3",sub_region,"Sub Region: ");
    let sub_region_data = create("p",sub_region,response.data[0].subregion);
    sub_region_data.style.paddingTop = "3px";
    sub_region_data.style.paddingLeft = "5px";

    let capital = create("div",page);
    capital.style.position = "absolute";
    capital.style.display = "flex";
    capital.style.top = "510px";
    capital.style.left = "740px";
    let capital_title = create("h3",capital,"Capital: ");
    let capital_data = create("p",capital,response.data[0].capital);
    capital_data.style.paddingTop = "3px";
    capital_data.style.paddingLeft = "5px";

    let domain = create("div",page);
    domain.style.position = "absolute";
    domain.style.display = "flex";
    domain.style.top = "350px";
    domain.style.left = "1140px";
    let domain_title = create("h3",domain,"Top Level Domain: ");
    let domain_data = create("p",domain,response.data[0].tld);
    domain_data.style.paddingTop = "3px";
    domain_data.style.paddingLeft = "5px";

    let currency = create("div",page);
    currency.style.position = "absolute";
    currency.style.display = "flex";
    currency.style.top = "390px";
    currency.style.left = "1140px";
    let currency_title = create("h3",currency,"Currencies: ");
    let currency_data = create("p",currency,response.data[0].currencies[Object.keys(response.data[0].currencies)[0]].name);
    currency_data.style.paddingTop = "3px";
    currency_data.style.paddingLeft = "5px";

    let language_div = create("div",page);
    language_div.style.position = "absolute";
    language_div.style.display = "flex";
    language_div.style.top = "430px";
    language_div.style.left = "1140px";
    let language_title = create("h3",language_div,"Languages: ");
    let the_language = response.data[0].languages;
    let final_language ="";
    let res = ",";
    let cpt = 0;
    let my_head_hurt = Object.keys(the_language).forEach((key) => {
        final_language += the_language[key]+res;
        cpt++;
        if (cpt == Object.keys(the_language).length){
            final_language = final_language.slice(0,-1);
        }
    });
    let language_data = create("p",language_div,final_language);
    language_data.style.paddingTop = "3px";
    language_data.style.paddingLeft = "5px";

    let border_div = create("div",page);
    border_div.style.position = "absolute";
    border_div.style.display = "flex";
    border_div.style.top = "570px";
    border_div.style.left = "740px";
    let border_title = create("h3",border_div,"Border Countries: ");
    let border_data = create("div",border_div);
    border_data.style.display = "flex";
    border_data.style.flexWrap = "wrap";
    border_data.style.marginLeft = "20px";
    let border_countries = response.data[0].borders;
    if (border_countries.length == 0){
        let no_border = create("p",border_data,"No border countries");
        no_border.style.paddingTop = "3px";
        no_border.style.paddingLeft = "5px";
    }
    else{
        border_countries.forEach((border) => {
            let border_country = create("p",border_data,border);
            border_country.className = "border_country";
            border_country.style.border = "1px solid transparent";
            border_country.style.width = "53px";
            border_country.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
            border_country.style.paddingTop = "3px";
            border_country.style.paddingLeft = "20px";
            border_country.style.marginRight = "5px";
            border_country.style.marginBottom = "5px";
            border_country.style.borderRadius = "5px";
        });
    }






    
});