const pluralUserTypeBuilder = (userType) => {
  switch (userType) {
    case 'company':
      return 'companies';
    case 'admin':
      return 'admin';
    default:
      return 'users';
  }
};
export default pluralUserTypeBuilder;
