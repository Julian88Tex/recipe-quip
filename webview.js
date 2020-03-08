module.exports = (Franz) => {
  const getMessages = function getMessages() {
    
    let directCount = 0;
    let indirectCount = 0;

    this.directCount = parseInt(document.getElementsByClassName('unread-notifications badge-count')[0].innerText);
    
    Franz.setBadge(directCount, indirectCount);
    
  };

  
  Franz.loop(getMessages);
  
};
