function enableButton(text) {
  var button = document.getElementById('submitButton');
  button.removeAttribute('disabled');
  button.innerHTML = text || 'Register';
}

function disableButton(text) {
  var button = document.getElementById('submitButton');
  button.addAttribute('disabled', true);
  button.innerHTML = text || 'Loading...';
}


window.onload = function () {
  var userId;
  var displayName;

  // Send form
  document.getElementById('phoneForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var phoneNumber = e.target.elements['phone'].value;

    if (!/^\d{8,}$/.test(phoneNumber)) {
      return window.alert('Please type a valid phone number (only numbers, at least 8 digits)');
    }
    if (!userId || !displayName) {
      return window.alert('Error loading profile. Reopen the page.');
    }

    const data = [
      ['userId', userId],
      ['name', displayName],
      ['phone', phoneNumber],
    ].map(([field, value]) => field + '=' + value)
    .join('&');

    const request = new XMLHttpRequest();

    request.addEventListener('load', function (evt) {
      if (this.readyState === 4 && this.status === 200) {
        window.alert('Registered!');
        liff.closeWindow();
      } else {
        window.alert('Could\'t process your registration. Please try again later.');
      }
      enableButton();
    });

    request.addEventListener('error', function (evt) {
      window.alert('Request error. Please try again later.');
      enableButton();
    });

    request.open('GET', 'https://tom-line-msg.herokuapp.com/api/push?' + data, true);
    request.send();
    disableButton('Registering...');
  });

  // Line
  try {
    liff.init(function () {
      liff.getProfile()
        .then(function (profile) {
          userId = profile.userId
          displayName = profile.displayName;
          enableButton();
        })
        .catch(function (err) {
          window.alert('Profile fetching error. Please try again later.');
        });
      });
    } catch (err) {
      console.error(err);
      window.alert('Initialization error. Please try again later.');
  }
};
