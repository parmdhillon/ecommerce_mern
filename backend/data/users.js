import bcrypt from 'bcryptjs';

const user = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('12345'),
    isAdmin: true,
  },
  {
    name: 'Parminder Singh',
    email: 'parm@example.com',
    password: bcrypt.hashSync('12345'),
  },
  {
    name: 'Deepinder Singh',
    email: 'deep@example.com',
    password: bcrypt.hashSync('12345'),
  },
];

export default user;
