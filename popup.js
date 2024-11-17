document.getElementById("fileInput").addEventListener("change", async event => {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = e => {
      const urls = e.target.result.split("\n").map(line => line.trim());
      chrome.storage.local.set({ linkedinUrls: urls });
      alert("CSV loaded!");
    };
  
    reader.readAsText(file);
  });
  
  document.getElementById("startBtn").addEventListener("click", () => {
    chrome.runtime.sendMessage({ start: true });
  });
  