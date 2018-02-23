# Shopify Theme Validator

Basic Chrome extension to check if the theme's ID is set to null or a valid number. Returning null indicates the theme was manually uploaded (zip) or possibly an unlicenced theme version.

## Manually Install Extension

In Chrome go to [chrome://extensions/](chrome://extensions/) and choose the Load unpacked extension option.

## Customization

In the `content.js` file there is an optional variable where you can set your Shopify Partner ID.  When a valid ID is set an additional link will display in the console to request admin access. 