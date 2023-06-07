# Songsterr Banner Remover
Songsterr Banner Remover is a Chrome Extension to automatically remove the intrusive Songsterr banner that keeps obstructing tabs.

The extension detects when the banner gets added to the DOM (Songsterr will often attempt to redraw it after removal from the DOM) and also handles situations where the banner appears while navigating between different pages on Songsterr. The extension removes the banner each time it reappears, providing you with a less cluttered and more enjoyable experience on Songsterr.

![icon](./icons/128.png)

# How to Install
To install the Songsterr Banner Remover extension, follow the steps below:
1. Clone this repository or download it as a `.zip` file and extract it to a directory of your choice.
2. Open the Chrome Extensions page. by either:
    * Navigating directly to `chrome://extensions` in your Chrome browser.
    * Clicking the menu in the top right corner and selecting `⋮ → Extensions → Manage Extensions`.
    * Clicking on the `Extensions` button (jigsaw icon `🧩`) in the top right corner and selecting `⚙️ Manage Extensions`.
3. Enable `Developer Mode` if it is not already enabled by toggling the switch in the top right corner of the extensions page.
4. Click on the `Load Unpacked` button located in the top left corner of the page.
5. In the file dialog that appears, select the cloned repository or the folder where you extracted the downloaded files in step #1.
6. Click `Select Folder` to load the extension.
7. Ensure that the extension is enabled by toggling the switch next to it if it's turned off.
8. If you already have a Songsterr tab open, simply refresh the page to activate the extension.
9. Enjoy your unobstructed tabs while practicing on Songsterr!
