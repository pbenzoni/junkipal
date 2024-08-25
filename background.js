chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "addToJunkipediaList") {
      addToJunkipediaList(request.listId, request.url, request.token)
        .then(response => sendResponse({ success: true, response }))
        .catch(error => sendResponse({ success: false, error }));
      return true; // Keep the message channel open for async response
    }
  });
  
  async function addToJunkipediaList(listId, url, token) {
    var handle = '';

    // remove any params from the url, if url ends in / delete it, 
    url = url.split('?')[0];
    if (url.endsWith('/')) {
      url = url.slice(0, -1);
    }

    if (url.includes('twitter.com/') || 
    url.includes('x.com/') ||
    url.includes('bitchute.com/channel/') ||
    url.includes('facebook.com/') ||
    url.includes('instagram.com/') ||
    url.includes('gettr.com/user/') ||
    url.includes('t.me/') ||
    url.includes('gab.com/') ||
    url.includes('ok.ru/') ||
    url.includes('rumble.com/c/')  ||
    url.includes('vk.com/') ||
    url.includes('parler.com/') ||
    url.includes('youtube.com/c/') ||
    url.includes('youtube.com/channel/') 
    ) {
      handle = url.split('/').pop();
    } 
    else if (url.includes('substack.com/')){
      handle = url.split('.')[0].split('/').pop();
    }
    else if (url.includes('threads.net/@') ||
    url.includes('tiktok.com/@') || 
    url.includes('truthsocial.com/@') ||
    url.includes('youtube.com/@') ){
      //split by @ and get the second element
      handle = url.split('@').pop();
    }
    console.log('handle to save:', handle);
    if (handle === '') {
      throw new Error('Invalid URL or site not supported');
    }
    try {
      const response = await fetch('https://www.junkipedia.org/api/v1/lists/' + listId + '/add_component', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({        
            "component_id": handle 
    })
      });
  
      if (!response.ok) {
        
        throw new Error('Network response was not ok', response);
      }
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
