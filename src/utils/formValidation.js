export const validateEmail = (email) => {
  const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return regex.test(email);
};

// export const validatePhone = (phone) => {
//   const regex = /^\+?[1-9]\d{1,14}$/;
//   return regex.test(phone);
// };

export const validatePhone = (phone) => {
  const regex = /^\d{10}$/;
  return regex.test(phone);
};


