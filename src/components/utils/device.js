const size = {
  tablet: "768px",
  laptop: "1024px",
  laptopLg: "1440px",
  desktop: "1920px"
};

export default {
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopLg: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`
};
