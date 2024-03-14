import { createTheme } from "@mui/material";

export const colors = {
  primaryColor: {
    one: "#495E57",
    two: "#F4CE14",
  },

  secondaryColor: {
    one: "#EE9972",
    two: "#FBDABB",
    three: "#EDEFEE",
    four: "#333333",
  },
  white: "#FFFFFF",
  black: "#000000",
  grey: "#EDEFEE",
};

const theme = createTheme({
  palette: {
    // primary:{
    //     main: '#000000',
    // }
    customColor: {
      primaryColor: {
        one: "#495E57",
        two: "#F4CE14",
      },

      secondaryColor: {
        one: "#EE9972",
        two: "#FBDABB",
        three: "#EDEFEE",
        four: "#333333",
      },
      white: "#FFFFFF",
      black: "#000000",
      grey: "#EDEFEE",

      //   primaryColorOne: "#FEEBE7",
      //   primaryColorTwo: "#FEEBE7",
      //   secondaryColorOne: "#FEEBE7",
      //   secondaryColorTwo: "#FEEBE7",
      //   secondaryColorThree: "#FEEBE7",
      //   secondaryColorFour: "#FEEBE7",

      //   gradientOne: colors.gradientOne,
      //   gradientTwo: colors.gradientTwo,
    },
  },

  typography: {
    fontFamily: "'Karla', 'Markazi', 'Roboto', sans-serif",
    v1: {
      fontSize: "3.5rem",
      fontFamily: "Roboto, sans-serif",
      fontWeight: "bold",
      color: colors.primaryColor.two,
    },
    v2: {
      fontSize: "2rem",
      fontFamily: "Markazi, sans-serif",
      fontWeight: "regular",
      marginBottom: "15px",
      color: colors.white,
    },
    v3: {
      fontSize: "1.25rem",
      fontFamily: "Roboto, sans-serif",
      fontWeight: "300",
      marginBottom: "72px",
      color: colors.white,
      width: "30vw",
    },
    v4: {
      fontSize: "2.5rem",
      fontFamily: "karla, sans-serif",
      fontWeight: "bold",
      color: colors.black,
      // width: "30vw",
    },
    mealName:{
      fontSize: "1.2rem",
      fontFamily: "'Markazi', sans-serif",
      fontWeight: "600",
      color: colors.black,
    },
    mealPrice:{
      fontSize: "1rem",
      fontFamily: "'karla', sans-serif",
      fontWeight: "600",
      color: colors.secondaryColor.one,
      
    },
    mealDetail:{
      
      fontSize: "1rem",
      fontFamily: "'karla', sans-serif",
      fontWeight: "400",
      color: colors.primaryColor.one,
  
    },
    mealDelivery:{
      fontSize: "1rem",
      fontFamily: "'karla', sans-serif",
      fontWeight: "700",
      color: colors.black,
      
    },
    footerMain:{
      fontSize: "1.25rem",
      fontFamily: "'karla', sans-serif",
      fontWeight: "700",
      color: colors.primaryColor.one,
      
    },
    footerItem:{
      fontSize: "1.1rem",
      fontFamily: "'karla', sans-serif",
      fontWeight: "400",
      color: colors.black,

    },
  },
});

export default theme;
