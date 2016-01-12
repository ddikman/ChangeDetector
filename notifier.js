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
      text: "It seems that " + change.name + " has changed from \r\n"
        + change.old + "\r\n\r\nTo:\r\n" + change.new
    };

    this.transporter.sendMail(mailOptions, function(error, info){
      if(error)
        console.log('Daaang! Failed to send email: ' + error);
    });

  };

};

module.exports = notifier;
