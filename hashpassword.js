import bcrypt from 'bcryptjs';

const run = async function () {
  const plain = 'test123';
  const hashed = await bcrypt.hash(plain, 10);
  console.log(hashed);
};

run();
