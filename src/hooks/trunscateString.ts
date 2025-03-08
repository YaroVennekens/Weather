const truncateDescription = (message: string | null, nostring: string | null,  amountofwords: number | null) => {
  
  if (!message) return nostring;

  const words = message.split(' ');
  const wordLimit = amountofwords ?? words.length;

  return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : message;
  
};
export default truncateDescription;
