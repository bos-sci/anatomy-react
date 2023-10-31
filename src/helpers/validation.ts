export const errorValueMissing = 'This is an example of an error message.';

export const getValidationMessage = (input: HTMLInputElement | HTMLTextAreaElement): string => {
  const validityState = input.validity;
  switch (true) {
    case validityState.valueMissing:
      return errorValueMissing;

    default:
      return input.validationMessage;
  }
};
