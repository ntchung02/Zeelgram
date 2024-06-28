
export const formatDate = (selectedDate) => {
    const { year, month, day } = selectedDate;
    if (year && month && day) {
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    }
    return ''; 
  };
