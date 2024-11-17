let processedCount = 0;

document.getElementById("fileInput").addEventListener("change", async event => {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    
    reader.onload = e => {
        try {
            const urls = e.target.result
                .split("\n")
                .map(line => line?.trim?.())
                .filter(url => url ? url.includes('linkedin.com') : false);
            
            if (urls.length === 0) {
                updateStatus('Error: No valid LinkedIn URLs found');
                return;
            }
            
            chrome.storage.local.set({ linkedinUrls: urls });
            updateStatus(`Loaded ${urls.length} URLs`);
            document.getElementById("startBtn").disabled = false;
            
        } catch (error) {
            updateStatus('Error loading file');
            console.error(error);
        }
    };
    
    reader.readAsText(file);
});

document.getElementById("startBtn").addEventListener("click", () => {
    document.getElementById("startBtn").disabled = true;
    updateStatus('Processing...');
    processedCount = 0;
    chrome.runtime.sendMessage({ start: true });
});

chrome.runtime.onMessage.addListener((message) => {
    if (message.type === 'COMPLETE') {
        updateStatus('Completed!');
        document.getElementById("startBtn").disabled = false;
    } else if (message.type === 'ERROR') {
        updateStatus(`Error: ${message.error}`);
        document.getElementById("startBtn").disabled = false;
    }
});

function updateStatus(message) {
    document.getElementById('statusText').textContent = message;
}

function updateProcessedCount(count) {
    document.getElementById('processedCount').textContent = count;
    processedCount = count;
}