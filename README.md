# Junkipal - a Junkipedia List Assistant
This Chrome extension allows users to easily add social media accounts to a Junkipedia list with a single click. The extension extracts the Twitter handle from the URL and sends it to the Junkipedia API, automatically managing authentication and handling errors.

## Features

- **One-click Add**: Add Twitter accounts to a Junkipedia list directly from a Twitter profile page.
- **Persistent Settings**: Stores the Junkipedia List ID and API Token securely using Chrome's storage, allowing for quick additions without repeated configuration.
- **Automatic Authentication**: Handles authentication with the Junkipedia API during initialization and re-authenticates when necessary.

## Installation

1. **Clone or Download the Repository**: 
   ```bash
   git clone https://github.com/pbenzoni/junkipedia-twitter-list-manager.git
   ```

2. Load the Extension into Chrome:

- Open chrome://extensions/ in your Chrome browser.
- Enable "Developer mode" (top-right corner).
- Click "Load unpacked" and select the folder where you saved the extension.

3. Configure the Extension:

- Click on the extension icon in Chrome’s toolbar.
- Enter your Junkipedia List ID and API Token in the popup.
- Save the settings.

## Usage

Navigate to a Profile, like https://x.com/username (formerly twitter.com/username).

Add Account to Junkipedia:

Click the "+JP" button that appears on the page (bottom-right corner). A notification will confirm whether the account was successfully added or if there was an error.

## Supported sites:
          "https://*.x.com/*", 
          "https://*.twitter.com/*", 
          "https://*.rumble.com/*", 
          "https://*.bitchute.com/channel/*",
          "https://*.facebook.com/*",
          "https://*.youtube.com/*",
          "https://*.instagram.com/*",
          "https://*.tiktok.com/@*",
          "https://*.gettr.com/*",
          "https://*.gab.com/*",
          "https://*.ok.ru/*",
          "https://*.parler.com/*",
          "https://*.substack.com/*",
          "https://*.t.me/*",
          "https://*.threads.net/@*",
          "https://*.truthsocial.com/*",
          "https://*.vk.com/*",
