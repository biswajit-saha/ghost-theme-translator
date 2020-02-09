/*=====================================================
    Tests the language code or name is a valid language 
    comparing with languages.json file
=====================================================*/
const languages = require('./languages.json')

function checkLanguage(language) {
    language = language.toLowerCase();
    // check if passed language is a language code
    if (language.length === 2) {
        // user provided a code, if valid then return code
        if (languages.hasOwnProperty(language)) {
            return language;
        } else {
            // show error
            console.log('invalid code');
            process.exit(1);
        }
    } else {
        let code ='';
        for (let key of Object.keys(languages)) {
            let names = languages[key].map((item) => item.toLowerCase());
            console.log(names)
            if( names.indexOf(language) !== -1) {
                code = key;
                console.log('breaking');
                break;
            }
        }
        if (code !== '') {
            console.log(code)
            return code;
        } else {
            // show error code
            console.log('Invalid language')
            process.exit(1);
        }
    }
}

module.exports = checkLanguage;