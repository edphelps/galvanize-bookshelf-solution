(function() {
  'use strict';

  $('.button-collapse').sideNav();
  $('.login').click(function(event) {
    var email = $('#email').val().trim();
    var password = $('#password').val();

    // Validation
    if(!email) {
      return Materialize.toast('Please enter an email.', 2000);
    }

    if(email.indexOf('@') < 0) {
      return Materialize.toast('Please enter a valid email.', 2000);
    }

    if(!password) {
      return Materialize.toast('Please enter a password.', 2000);
    }

    var $xhr = $.ajax({
      url: 'http://localhost:8000/users/authentication',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        email: email,
        password: password
      })
    });

    $xhr.done(function() {
      if($xhr.status !== 200) {
        return Materialize.toast('User could not be logged in. Please try again.');
      }

      Materialize.toast('User Logged in', 2000);
    });

    $xhr.fail(function() {
      Materialize.toast('User could not be logged in. Please try again.');
    });
  });
})();
