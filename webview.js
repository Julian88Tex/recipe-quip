module.exports = (Franz) => {
  const getMessages = function getMessages() {
    
    let directCount = 0;

    // searches for class which signifies unread badges (excluding notifications)
    badges = document.getElementsByClassName('unread badge-count');

    // searches for class which signifies unread notifications
    notifications = document.getElementsByClassName('unseen-notifications badge-count');

    //counts badges (excluding notifications)
    if (badges.length == 0) {
    }
    else {
      for (let i = 0; i < badges.length; i ++) {
        directCount += parseInt(badges[i].innerText);
      }
    }
    
    // counts notifications
    if (notifications.length == 0) {
    }
    else {
      for (let i = 0; i < notifications.length; i ++) {
        directCount += parseInt(notifications[i].innerText);
      }
    }

    //sends notification/badge total to Franz
    Franz.setBadge(directCount);
    
  };

  
  Franz.loop(getMessages);
  
};