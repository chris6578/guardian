(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{331:function(t,a,e){"use strict";e.r(a);var r=e(18),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"guardian"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#guardian"}},[t._v("#")]),t._v(" Guardian")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img.shields.io/github/license/mathieu-bour/guardian?style=flat-square",alt:"GitHub license"}}),t._v(" "),e("img",{attrs:{src:"https://img.shields.io/packagist/v/mathieu-bour/guardian?style=flat-square",alt:"Packagist Version"}}),t._v(" "),e("img",{attrs:{src:"https://img.shields.io/packagist/dt/mathieu-bour/guardian?style=flat-square",alt:"Packagist"}}),t._v(" "),e("img",{attrs:{src:"https://img.shields.io/github/issues/mathieu-bour/guardian?style=flat-square",alt:"GitHub issues"}}),t._v(" "),e("img",{attrs:{src:"https://img.shields.io/github/issues-pr/mathieu-bour/guardian?style=flat-square",alt:"GitHub pull requests"}}),t._v(" "),e("img",{attrs:{src:"https://img.shields.io/codecov/c/gh/mathieu-bour/guardian?style=flat-square",alt:"Codecov"}}),t._v(" "),e("img",{attrs:{src:"https://img.shields.io/scrutinizer/quality/g/mathieu-bour/guardian?style=flat-square",alt:"Scrutinizer code quality"}})]),t._v(" "),e("p",[t._v("Highly configurable JSON Web Token implementation for Laravel and Lumen.")]),t._v(" "),e("p",[t._v("Guardian exposes an additional authentication "),e("code",[t._v("guardian")]),t._v(" driver, which can be used like the standard "),e("code",[t._v("session")]),t._v(" or "),e("code",[t._v("token")]),t._v(" drivers.")]),t._v(" "),e("p",[t._v("Guardian follows the "),e("a",{attrs:{href:"https://semver.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Semantic Versioning specification"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("❗️ "),e("strong",[t._v("Until version 1.0.0, the "),e("code",[t._v("master")]),t._v(" branch should not be considered as stable.")]),t._v(" ❗️")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#motivations"}},[t._v("Motivations")])]),e("li",[e("a",{attrs:{href:"#acknowledgements"}},[t._v("Acknowledgements")])]),e("li",[e("a",{attrs:{href:"#prerequisites"}},[t._v("Prerequisites")])]),e("li",[e("a",{attrs:{href:"#installation"}},[t._v("Installation")]),e("ul",[e("li",[e("a",{attrs:{href:"#laravel"}},[t._v("Laravel")])]),e("li",[e("a",{attrs:{href:"#lumen"}},[t._v("Lumen")])])])]),e("li",[e("a",{attrs:{href:"#next-steps"}},[t._v("Next steps")])]),e("li",[e("a",{attrs:{href:"#alternatives"}},[t._v("Alternatives")]),e("ul",[e("li",[e("a",{attrs:{href:"#laravel-passport-https-github-com-laravel-passport"}},[t._v("laravel/passport")])]),e("li",[e("a",{attrs:{href:"#tymondesigns-jwt-auth-https-github-com-tymondesigns-jwt-auth"}},[t._v("tymondesigns/jwt-auth")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"motivations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#motivations"}},[t._v("#")]),t._v(" Motivations")]),t._v(" "),e("p",[t._v("Our company based its back-end on the Lumen Framework, and we had to choose a stateless identification and authentication method.\nWe chose to use the JSON Web Tokens which combine security and ease.\nWhile some libraries exists like "),e("a",{attrs:{href:"https://github.com/tymondesigns/jwt-auth",target:"_blank",rel:"noopener noreferrer"}},[t._v("tymondesigns/jwt-auth"),e("OutboundLink")],1),t._v(" or "),e("a",{attrs:{href:"https://github.com/laravel/passport",target:"_blank",rel:"noopener noreferrer"}},[t._v("laravel/passport"),e("OutboundLink")],1),t._v(", they did not fit our requirements.")]),t._v(" "),e("p",[t._v("We finally decided to develop our own JWT library for Lumen, which was later ported to Laravel and shared open-source.")]),t._v(" "),e("h2",{attrs:{id:"acknowledgements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgements"}},[t._v("#")]),t._v(" Acknowledgements")]),t._v(" "),e("ul",[e("li",[t._v("JWT cryptography implementation by "),e("a",{attrs:{href:"https://github.com/web-token/jwt-framework",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("web-token")]),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[t._v("Benchmarks run using "),e("a",{attrs:{href:"https://github.com/phpbench/phpbench",target:"_blank",rel:"noopener noreferrer"}},[t._v("PHPBench"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[t._v("Documentation generated by "),e("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[t._v("Tests run using "),e("a",{attrs:{href:"https://phpunit.de/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PHPUnit"),e("OutboundLink")],1),t._v(" and "),e("a",{attrs:{href:"https://github.com/mockery/mockery",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mockery"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),e("ul",[e("li",[t._v("PHP >= 7.2")]),t._v(" "),e("li",[t._v("openssl PHP extension")]),t._v(" "),e("li",[t._v("sodium PHP extension")]),t._v(" "),e("li",[t._v("Laravel/Lumen 6 or 7")])]),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("p",[t._v("Simply add Guardian to your project dependencies.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("composer require mathieu-bour/guardian\n")])])]),e("p",[t._v("Depending on the "),e("RouterLink",{attrs:{to:"/reference/configuration.html#key"}},[t._v("algorithm")]),t._v(" you want to use, install an additional library:")],1),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Algorithm")]),t._v(" "),e("th",[t._v("Library")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("ECDSA")]),t._v(" "),e("td",[e("code",[t._v("web-token/jwt-signature-algorithm-ecdsa")])])]),t._v(" "),e("tr",[e("td",[t._v("EdDSA")]),t._v(" "),e("td",[e("code",[t._v("web-token/jwt-signature-algorithm-eddsa")])])]),t._v(" "),e("tr",[e("td",[t._v("HMAC")]),t._v(" "),e("td",[e("code",[t._v("web-token/jwt-signature-algorithm-hmac")])])]),t._v(" "),e("tr",[e("td",[t._v("RSA")]),t._v(" "),e("td",[e("code",[t._v("web-token/jwt-signature-algorithm-rsa")])])])])]),t._v(" "),e("p",[t._v("If you do not know which algorithm to choose, we recommend "),e("code",[t._v("ECDSA")]),t._v(" with the "),e("code",[t._v("ES512")]),t._v(" algorithm and the "),e("code",[t._v("P-521")]),t._v(" curve.")]),t._v(" "),e("h3",{attrs:{id:"laravel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#laravel"}},[t._v("#")]),t._v(" Laravel")]),t._v(" "),e("p",[t._v("Publish the default Guardian configuration:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("php artisan vendor:publish --provider"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Windy\\Guardian\\GuardianServiceProvider"')]),t._v("\n")])])]),e("h3",{attrs:{id:"lumen"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lumen"}},[t._v("#")]),t._v(" Lumen")]),t._v(" "),e("p",[t._v("Copy the default Guardian configuration from "),e("code",[t._v("vendor/mathieu-bour/guardian/config/guardian.php")]),t._v(" to "),e("code",[t._v("config/guardian.php")]),t._v(".\nThen, add the provider to your "),e("code",[t._v("bootstrap/app.php")]),t._v(" and load the configuration with:")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$app")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("configure")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'guardian'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$app")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Windy\\"),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Guardian"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("GuardianServiceProvider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("If you want to use the "),e("code",[t._v("Guardian")]),t._v(" Facade, ensure that the application is loaded with the Facades in your "),e("code",[t._v("bootstrap/app.php")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$app")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("withFacades")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"next-steps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next steps")]),t._v(" "),e("ul",[e("li",[t._v("Learn more about "),e("a",{attrs:{href:"/reference/jwt"}},[t._v("JWT")]),t._v(".")]),t._v(" "),e("li",[t._v("Read the "),e("a",{attrs:{href:"/reference/configuration"}},[t._v("configuration")]),t._v(" reference.")]),t._v(" "),e("li",[t._v("Read our "),e("a",{attrs:{href:"/case-studies/authentication"}},[t._v("tutorial on users authentication")]),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"alternatives"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alternatives"}},[t._v("#")]),t._v(" Alternatives")]),t._v(" "),e("p",[t._v("We humbly refer here to the alternatives to Guardian that we found interesting.")]),t._v(" "),e("h3",{attrs:{id:"laravel-passport"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#laravel-passport"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/laravel/passport",target:"_blank",rel:"noopener noreferrer"}},[t._v("laravel/passport"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Passport is the official Laravel library which supports JWT authentication.")]),t._v(" "),e("blockquote",[e("p",[t._v("Laravel makes API authentication a breeze using Laravel Passport, which provides a full OAuth2 server implementation for your Laravel application in a matter of minutes.")])]),t._v(" "),e("h3",{attrs:{id:"tymondesigns-jwt-auth"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tymondesigns-jwt-auth"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/tymondesigns/jwt-auth",target:"_blank",rel:"noopener noreferrer"}},[t._v("tymondesigns/jwt-auth"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("jwt-auth is a very serious alternative to Guardian which provides a higher-level API, such as authenticating users directly from the request credentials via a Facade.\njwt-auth also provides a way to blacklist the generated where Guardian let the implementation to the developer.\nIf you are looking for a simpler way to use JWT, we highly recommend you to take a look to this library!")])])}),[],!1,null,null,null);a.default=s.exports}}]);