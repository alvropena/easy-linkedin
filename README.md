# Easy LinkedIn

A Chrome extension to automate sending LinkedIn connection requests.

## Features

- Bulk send connection requests from a list of [LinkedIn](https://www.linkedin.com) profile URLs
- Simple CSV file upload interface
- Automatic "Connect" button clicking

## Installation

1. Download or clone this repository
2. Open Chrome and go to [`chrome://extensions/`](chrome://extensions/)
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension directory

## Usage

1. Create a CSV file containing [LinkedIn](https://www.linkedin.com) profile URLs (one URL per line)
2. Click the Easy LinkedIn extension icon in Chrome
3. Use the file input to upload your CSV file
4. Once loaded, click "Start Sending Requests" to begin the automation
5. The extension will:
   - Open each profile in a new tab
   - Click the Connect button
   - Send without a note
   - Close the tab
   - Move to the next profile

Note: Make sure you're logged into [LinkedIn](https://www.linkedin.com) before using the extension.

## Important Requirements

- The CSV file must contain valid [LinkedIn](https://www.linkedin.com) profile URLs
- Your [LinkedIn](https://www.linkedin.com) account should be logged in
- Chrome must have permission to access [LinkedIn.com](https://www.linkedin.com)
- Allow the extension to run its automation (don't close Chrome during processing)

## Privacy & Security

This extension:

- Only works on [LinkedIn.com](https://www.linkedin.com) domains
- Stores URLs temporarily in Chrome's local storage
- Does not collect or transmit any personal data

## Support

For issues, please ensure you've followed the usage instructions carefully before reporting problems in the [GitHub issues](https://github.com/issues) section.
