const addDataToDb = (darkMode) => {
  localStorage.setItem("darkMode", JSON.stringify(darkMode));
};

const getStoredData = () => {
  const storedData = JSON.parse(localStorage.getItem("darkMode"));

  return storedData;
};

export { addDataToDb, getStoredData };
