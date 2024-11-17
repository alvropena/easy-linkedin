chrome.runtime.onMessage.addListener(async (message) => {
    if (message.start) {
      chrome.storage.local.get("linkedinUrls", async ({ linkedinUrls }) => {
        for (const url of linkedinUrls) {
          await chrome.tabs.create({ url });
  
          // Wait for the page to load
          await new Promise(r => setTimeout(r, 5000)); // Adjust delay if needed
  
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => {
              const button = document.querySelector("button[aria-label*='Connect']");
              if (button) button.click();
            }
          });
  
          await new Promise(r => setTimeout(r, 3000)); // Adjust delay for request
        }
      });
    }
  });
  