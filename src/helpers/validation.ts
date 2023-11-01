export const errorValueMissing = 'Please complete the required field.';

export const getValidationMessage = (input: HTMLInputElement | HTMLTextAreaElement): string => {
  const validityState = input.validity;
  switch (true) {
    case validityState.valueMissing:
      return errorValueMissing;

    default:
      return input.validationMessage;
  }
};
