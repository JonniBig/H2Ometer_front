import zxcvbn from 'zxcvbn';

export const calculateStrength = password => {
  const result = zxcvbn(password);
  const strength = (result.score / 4) * 100; // Normalize the score to a percentage

  return strength;
};

export const getTitle = strength => {
  if (strength === 0) {
    return 'Very weak';
  } else if (strength === 25) {
    return 'Weak';
  } else if (strength === 50) {
    return 'Medium';
  } else if (strength === 75) {
    return 'Strong';
  } else {
    return 'Very strong';
  }
};

export const getColor = strength => {
  if (strength === 0) return 'red';
  if (strength <= 25) return 'orange';
  if (strength <= 50) return 'yellow';
  if (strength <= 75) return 'lightgreen';
  return 'green';
};

export const checkPassword = {
  hasLetters: password => /[a-z]/.test(password) && /[A-Z]/.test(password),
  hasNumber: password => /\d/.test(password),
  hasSpecialSymb: password => /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password),
};
