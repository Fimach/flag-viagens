console.log("script.js started");

const content_sections_list = document.querySelectorAll(".content-body .content-section");
// const search_button = document.querySelector("#search-button");
const search_input = document.querySelector("#search-input");

function normalize_text(text) {
    // replace special accentuated chars by normal ones eg: Ç->C, Á->A, Õ->O
    // to be used by the searching funcionality to ensure special chars are not removing wanted results
    // making the search criteria not taking in consideration those special chars for filtering items
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

function search_sections_by_text() {
    const search_text = normalize_text(search_input.value);
    for (const content_section of content_sections_list) {
        let text_found = false;
        console.log('search_text: "' + search_text + '"');
        if (search_text === '') {
            text_found = true;
        } else {
            const section_text = normalize_text(content_section.innerText);
            const section_title_text = normalize_text(content_section.querySelector('.section-title').innerText);
            const section_items_text = normalize_text(content_section.querySelector('.section-body').innerText);
        if (section_text.includes(search_text)) {
                text_found = true;
                console.log(search_text, 'found in section_text', section_text);
            }
            // doing this way becasue some items where not being taken in consideration 
            // because they where hidden in the search div and only visibile on mouse :hover
            // not exactly sure what was causing that, sometimes it seems to work as expected
            // so telling javascript to search also in the nested items in the HTML DOM seems to fix this
            else if (section_title_text.includes(search_text)) {
                text_found = true;
                console.log(search_text, 'found in section_title_text', section_title_text);
            }
            else if (section_items_text.includes(search_text)) {
                text_found = true;
                console.log(search_text, 'found in section_items_text', section_items_text);
            }    
        }

        if (text_found === true) {
            content_section.parentElement.style.display = 'block';
        } else {
            content_section.parentElement.style.display = 'none';
        }
    }
}

if (search_input != null) {
    search_input.addEventListener("keyup", function(e) {
        // if (e.key === 'Enter' || e.keyCode === 13) {
            search_sections_by_text();
        // }
    });    
}

const random_page_link = document.querySelector("#random-page-link");
const pages_available = [
    'portugal',
    'trilhos',
    'europa',
    'africa',
]
const random_nr = Math.floor(Math.random() * pages_available.length);
random_page_link.href = '/details_' + pages_available[random_nr] + '.html';

console.log("script.js ended");