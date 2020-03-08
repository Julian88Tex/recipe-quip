module.exports = (Franz) => {
  const getMessages = function getMessages() {
    
    let directCount = 0;
    let indirectCount = 0;

    badges = document.getElementsByClassName('unread badge-count');
    notifications = document.getElementsByClassName('unseen-notifications badge-count');

    if (badges.length == 0) {
    }
    else {
      for (let i = 0; i < badges.length; i ++) {
        directCount += parseInt(badges[i].innerText);
      }
    }

    if (notifications.length == 0) {
    }
    else {
      for (let i = 0; i < notifications.length; i ++) {
        directCount += parseInt(notifications[i].innerText);
      }
    }

    Franz.setBadge(directCount, indirectCount);
    
  };

  
  Franz.loop(getMessages);
  
};
