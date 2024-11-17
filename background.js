let isProcessing = false;

chrome.runtime.onMessage.addListener(async (message) => {
    if (message.start && !isProcessing) {
        isProcessing = true;
        
        try {
            const { linkedinUrls } = await chrome.storage.local.get("linkedinUrls");
            
            for (const url of linkedinUrls) {
                const tab = await chrome.tabs.create({ url });
                
                await new Promise(r => setTimeout(r, 5000));
                
                await chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    func: clickConnectAndSend
                });
                
                await new Promise(r => setTimeout(r, 3000));
                
                await chrome.tabs.remove(tab.id);
            }
            
            chrome.runtime.sendMessage({ type: 'COMPLETE' });
            
        } catch (error) {
            console.error('Error:', error);
            chrome.runtime.sendMessage({ type: 'ERROR', error: error.message });
        }
        
        isProcessing = false;
    }
});

function clickConnectAndSend() {
    const connectButton = document.querySelector("button[aria-label*='Invite'][aria-label*='to connect']");
    if (connectButton) {
        connectButton.click();
        
        setTimeout(() => {
            const sendButton = document.querySelector("button[aria-label='Send without a note']");
            if (sendButton) {
                sendButton.click();
            } else {
                console.log("Send without note button not found");
            }
        }, 1000);
    }
    return !!connectButton;
}