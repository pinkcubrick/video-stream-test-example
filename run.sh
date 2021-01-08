do_chrome() {
    rm -rf chrome
    mkdir -p chrome/allure-results
    cp conf.js spec.js chrome/
    sed "s/const BROWSER_NAME = 'chrome'/const BROWSER_NAME = 'chrome'/g" conf.js > chrome/conf.js
    sed "s/const BROWSER_NAME = 'chrome'/const BROWSER_NAME = 'chrome'/g" spec.js > chrome/spec.js
    cd chrome
    protractor conf.js
    cd ..
    cp chrome/allure-results/* allure-results/
}

do_firefox() {
    rm -rf firefox
    mkdir -p firefox/allure-results
    cp conf.js spec.js firefox/
    sed "s/const BROWSER_NAME = 'chrome'/const BROWSER_NAME = 'firefox'/g" conf.js > firefox/conf.js
    sed "s/const BROWSER_NAME = 'chrome'/const BROWSER_NAME = 'firefox'/g" spec.js > firefox/spec.js
    cd firefox
    protractor conf.js
    cd ..
    cp firefox/allure-results/* allure-results/
}

rm -rf allure-results
mkdir allure-results

# run test
do_chrome
do_firefox

# show test results
allure serve ./allure-results
