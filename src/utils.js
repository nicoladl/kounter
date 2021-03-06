export const slugify = string => {
  const a =
    "àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;";
  const b =
    "aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------";
  const p = new RegExp(a.split("").join("|"), "g");

  return (
    string
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
      .replace(/&/g, "-and-") // Replace & with 'and'
      // eslint-disable-next-line
      .replace(/[^\w\-]+/g, "") // Remove all non-word characters
      // eslint-disable-next-line
      .replace(/\-\-+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, "")
  ); // Trim - from end of text
};

export const basalMetabolismCalculation = ({ weight, height, age, gender }) => {
  let basalMetabolism = 0;
  switch (gender.value) {
    case "male": {
      basalMetabolism =
        66 + 13.7 * weight.value + 5 * height.value - 6.8 * age.value;
      break;
    }

    case "female": {
      basalMetabolism =
        665 + 9.6 * weight.value + 1.9 * height.value - 4.7 * age.value;
      break;
    }

    default:
      break;
  }

  return parseInt(basalMetabolism);
};
