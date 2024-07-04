const toFixed = (value: Number, locale = "en"): string => {
  return value.toLocaleString(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export { toFixed };
