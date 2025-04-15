// format date
export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-Us', {
    month: 'short',
    year: 'numeric',
    day: '2-digit',
  });
};

// short desc
export const shortDesc = (text: string) => {
  return `${text.slice(0, 50)} ...`;
};
