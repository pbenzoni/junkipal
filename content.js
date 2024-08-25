// Wait for the DOM to fully load
window.addEventListener('load', () => {
    // Get the Twitter handle from the URL
    const url = window.location.href

  
    // Create a button to add the Twitter handle to Junkipedia
    const addButton = document.createElement('button');
    addButton.innerText = '+ JP';
    addButton.style.position = 'fixed';
    addButton.style.bottom = '20px';
    addButton.style.right = '20px';
    addButton.style.zIndex = 1000;
    addButton.style.padding = '10px';
    addButton.style.backgroundColor = '#1DA1F2';
    addButton.style.color = '#FFFFFF';
    addButton.style.border = 'none';
    addButton.style.borderRadius = '5px';
    addButton.style.cursor = 'pointer';
    // Add a X to close the button
    
    document.body.appendChild(addButton);
  
    addButton.addEventListener('click', () => {
      chrome.storage.sync.get(['listId', 'apiToken'], ({ listId, apiToken }) => {
        if (!listId || !apiToken) {
          alert('Please configure your List ID and API Token in the extension popup.');
          return;
        }
  
        chrome.runtime.sendMessage({
          action: "addToJunkipediaList",
          listId: listId,
          url: url,
          token: apiToken
        }, (response) => {
          if (response.success) {
            alert('Account added to Junkipedia list successfully!');
          } else {
            alert('Failed to add account to Junkipedia list.');
          }
        });
      });
    });
  });