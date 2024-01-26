// updated date and time converter
export const convertDate = (inputDate: string) => {
    const date = new Date(inputDate);
    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    return formattedDate;
};

/* export const convertDate = (inputDate: string) => {
    return new Date(inputDate).toLocaleString().substring(0, 10);
  }; */