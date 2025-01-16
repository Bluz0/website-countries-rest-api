import { number_to_good_writing } from './conversion_number.js';

let page = document.querySelector(".all-country");

function create(tag, container, text=null) {
    const element = document.createElement(tag);
    element.innerText = text;
    container.appendChild(element);
    return element;
}

let text_search = document.querySelector("#input-country");

axios.get("https://restcountries.com/v3.1/all").then(response => {
    

    let countries = response.data;

    countries.forEach(country => {
        let div_country = create("div",page);
        div_country.className = "country";

        // FLAG
        if(country.name.common == "Switzerland" || country.name.common == "Nepal"){ // change dimension because too small
            let flag = create("div",div_country);
            flag.style.paddingLeft = "50px";
            flag.style.paddingRight = "50px";
            flag.style.borderRadius = "5px";
            let img_flag = create("img",flag);
            img_flag.style.height = "180px";
            img_flag.style.width = "100%";
            img_flag.src = country.flags.png;
        }

        else{
            let flag = create("div",div_country);
            flag.style.borderRadius = "5px";
            let img_flag = create("img",flag);
            img_flag.style.borderRadius = "5px";
            img_flag.style.height = "180px";
            img_flag.style.width = "100%";
            img_flag.src = country.flags.png;
        }

        // TITLE
        let name_country = country.name.common;
        let name_country_title = create("h1",div_country,name_country);
        name_country_title.style.paddingTop = "20px";
        name_country_title.style.paddingLeft = "20px";
        name_country_title.style.fontSize = "20px";

        // POPULATION P

        let population_data = number_to_good_writing(country.population);
        let div_pop = create("div",div_country);
        div_pop.style.marginTop = "20px";
        div_pop.style.display = "flex";
        div_pop.style.textAlign = "center";
        let pop_title = create("h3",div_pop,"Population:");
        pop_title.style.fontSize = "15px";
        pop_title.style.paddingLeft = "20px";
        let population = create("p",div_pop,population_data); 
        population.style.paddingLeft = "2px";
        population.style.paddingTop = "2.5px";
        population.style.fontSize = "13px";

        // REGION

        let region_data = country.region;
        if(region_data == "Americas"){
            region_data = "America";
        }
        let div_region = create("div",div_country);
        div_region.style.marginTop = "8px";
        div_region.style.display = "flex";
        div_region.style.textAlign = "center";
        let region_title = create("h3",div_region,"Region:");
        region_title.style.fontSize = "15px";
        region_title.style.paddingLeft = "20px";
        let region = create("p",div_region,region_data); 
        region.className = "regionText";
        region.style.paddingLeft = "2px";
        region.style.paddingTop = "2.5px";
        region.style.fontSize = "13px";

        // CAPITAL

        let capital_data = country.capital;
        if (capital_data == null){
            capital_data = "No Data";
        }
        let div_capital = create("div",div_country);
        div_capital.style.marginTop = "8px";
        div_capital.style.display = "flex";
        div_capital.style.textAlign = "center";
        let capital_title = create("h3",div_capital,"Capital:");
        capital_title.style.fontSize = "15px";
        capital_title.style.paddingLeft = "20px";
        let capital = create("p",div_capital,capital_data); 
        capital.style.paddingLeft = "2px";
        capital.style.paddingTop = "2.5px";
        capital.style.fontSize = "13px";

    });

    let cards = page.querySelectorAll("div.country");

    function searchCountry(){
        let value_search = text_search.value;
        let cards_title = document.querySelectorAll(".country > h1");

        cards_title.forEach(card => {
        
            let card_title = card.innerText;
            let filter = value_search.toUpperCase();
            
            if(card_title.toUpperCase().indexOf(filter) > -1){
                card.parentElement.style.display = "";
                console.log(card_title,"yes");
            }

            else{
                card.parentElement.style.display = "none";
            }
        
        });
    }

    window.searchCountry = searchCountry;


    let filterActive = false;
    let arrow_filter = document.querySelector("#open-arrow");
    let filter_button = document.querySelector(".filter-region");
    filter_button.addEventListener("click", toggleFilter);

    function toggleFilter() {
        if (filterActive) {
            deactivateFilter();
            arrow_filter.style.transform = "rotate(0deg)";
        } else {
            activateFilter();
            arrow_filter.style.transform = "rotate(180deg)";
        }
        filterActive = !filterActive;
    }

    function activateFilter() {
        let proposition_div = document.querySelector(".proposition");
        let propositions = filter_button.querySelectorAll("li");

        propositions.forEach(option => {
            option.addEventListener("click", function(){
                console.log(option.innerText);

                cards.forEach(card => {
                    let region = card.querySelector(".regionText").innerText;
                    if(region == option.innerText){
                        card.style.display = "";
                    }
                    else{
                        card.style.display = "none";
                    }
                });

                
            });
            
        });


        proposition_div.style.display = "block";
    }

    function deactivateFilter() {
        let proposition_div = document.querySelector(".proposition");
        proposition_div.style.display = "none";
    }  

    function allCountries(){
        cards.forEach(card => {
            let name_country_redirection = card.querySelector("h1").innerText;
            card.style.hover = "cursor";
            card.addEventListener("click", function(){

                if (name_country_redirection.split(" ").length > 1) {
                    name_country_redirection = name_country_redirection.replace(/ /g, "-");
                }
                window.location.href = "./lib/country.html?title=" + name_country_redirection;
            });
        });
    }

    allCountries();

});

