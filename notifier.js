var nodemailer = require('nodemailer');

var notifier = function(targetEmail, transport) {

  this.targetEmail = targetEmail;
  this.transporter = nodemailer.createTransport(transport);

  this.notify = function(change) {

    console.log('notifying ' + this.targetEmail + ' of change in ' + change.name);
    var mailOptions = {
      from: targetEmail,
      to: targetEmail,
      subject: 'Something has changed at ' + change.name,
      html: "<h1>It seems that " + change.name + " has changed!</h1>" +
            '<a href="' + change.url + '">' + change.url + '</a>' +
            '<p>New content:</p><pre>' + change.new +
            '</pre><p>Old content:</p><pre>' + change.new + '</pre>'
    };

    this.transporter.sendMail(mailOptions, function(error, info){
      if(error)
        console.log('Daaang! Failed to send email: ' + error);
    });

  };

};

module.exports = notifier;
