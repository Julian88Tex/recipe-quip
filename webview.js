module.exports = (Franz) => {
  const getMessages = function getMessages() {
    
    let directCount = 0;
    let indirectCount = 0;

    badges = document.getElementsByClassName('unread badge-count');

    if (badges.length == 0) {
      directCount = 0;
      indirectCount = 0;
    }
    else {
      for (let i = 0; i < badges.length; i ++) {
        directCount += parseInt(badges[i].innerText);
      }
    }

    Franz.setBadge(directCount, indirectCount);
    
  };

  
  Franz.loop(getMessages);
  
};
