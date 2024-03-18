const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? "#212529" : "#000",
      backgroundColor: state.isSelected ? "#a0a0a0" : "#212529",
    }),
  
    control: (defaultStyles) => ({
      ...defaultStyles,
      padding: "10px",
      border: "none",
      boxShadow: "none",
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
  };

  export default customStyles