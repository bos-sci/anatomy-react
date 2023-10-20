const useConcatenation = (Array: any[]): string => {
  return Array.join(' ').replace('  ', ' ').trimEnd();
};

export default useConcatenation;
