document.getElementById('saveButton').addEventListener('click', () => {
    const listId = document.getElementById('listId').value;
    const apiToken = document.getElementById('apiToken').value;
  
    chrome.storage.sync.set({ listId, apiToken }, () => {
      alert('Configuration updated!');
    });
  });
  
  // Load saved settings when the popup is opened
  document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get(['listId', 'apiToken'], (items) => {
      if (items.listId) document.getElementById('listId').value = items.listId;
      if (items.apiToken) document.getElementById('apiToken').value = items.apiToken;
    });
  });