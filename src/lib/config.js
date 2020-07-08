const hexStringToRGB = (color) => {
  const result = color.match(/([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i);
  return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
    result[3],
    16
  )}`;
};

export default {
  resolutions: {
    mobileL: "500px",
  },
  palette: {
    green: "#4b5435",
    greenTransparent(alpha) {
      return `rgba(${hexStringToRGB(this.green)}, ${alpha})`;
    },
    pink: "#d90755",
    pinkTransparent(alpha) {
      return `rgba(${hexStringToRGB(this.pink)}, ${alpha})`;
    },
    white: "#ffffff",
    whiteTransparent(alpha) {
      return `rgba(${hexStringToRGB(this.white)}, ${alpha})`;
    },
    offWhitePrimary: "#e8dee6",
    offWhiteSecondary: "#e8dde5",
    grey: "#7a7d7b",
  },

  borderRadius: {
    desktop: "2rem",
    mobile: "1rem",
  },
  border: {
    green: "0.1rem solid #4b5435",
    white: "0.1rem solid white",
  },
};
