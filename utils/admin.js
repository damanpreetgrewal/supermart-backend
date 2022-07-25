const bcrypt = require('bcryptjs');
const admins = [
  {
    name: 'Damanpreet Grewal',
    image: 'https://i.ibb.co/WpM5yZZ/9.png',
    email: 'damanpreetsinghgrewal92@gmail.com',
    password: '12345678',
    phone: '548-333-3036',
    role: 'Admin',
    joiningData: new Date(),
  }
];

module.exports = admins;
