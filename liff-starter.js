window.onload = function (e) {
  liff.init(function () {
    console.log('liff initialized.')
    liff.getProfile()
    .then(function (profile) {
        console.log('Got profile.')
        initializeApp(profile.userId, profile.displayName);
      })
      .catch(function (err) {
        window.alert('Something wrong. Please try again later');
      });
  });
};

function initializeApp(userId, displayName) {
  console.log('Initializing app.')

  // Send form
  document.getElementById('phoneForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var phoneNumber = e.target.elements['phone'].value;

    if (!/^\d{8}$/.test(phoneNumber)) {
      return window.alert('Please type a valid phone number (only numbers, at least 8 digits)');
    }

    const data = [
      ['userId', userId],
      ['name', displayName],
      ['phone', phoneNumber],
    ].map(([field, value]) => field + '=' + value)
    .join('&');

    const request = new XMLHttpRequest();

    request.addEventListener('load', function () {
      if (this.readyState === 4 && this.status === 200) {
        window.alert('Registered!');
        liff.closeWindow();
      } else {
        window.alert('Could\'t process your registration. Please try again later');
      }
    });

    request.addEventListener('error', function () {
      window.alert('Could\'t process your registration. Please try again later');
    });

    request.open('GET', 'https://tom-line-msg.herokuapp.com/api/push?' + data, true);
    request.send();
  });
}
