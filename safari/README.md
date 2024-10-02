# Safari Support

https://developer.apple.com/documentation/safariservices/safari_web_extensions/converting_a_web_extension_for_safari

* Build the project with `npm run build`
* From the project root folder run `xcrun safari-web-extension-converter ./dist --project-location ./safari`

As of April 2022 `bookmarks` and `sessions` are not supported by Safari, therefore there is no way to port to safari
