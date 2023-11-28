
import nodemailer from 'nodemailer';

var transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
        user: 'jesmyl.job@mail.ru',
        pass: 'kDG4prazwJcvJ4p74EbW',
    },
});

var mailOptions = {
    from: 'Ski <jesmyl.job@mail.ru>',
    to: '79787694218@mail.ru',
    subject: 'Sending Email using Node.js',
    html: `<h2>Приветик всеммм!!!</h2><strong>${new Date().toISOString()}</strong>`,
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.info(error);
    } else {
        console.info('Email sent: ' + info.response);
    }
});
