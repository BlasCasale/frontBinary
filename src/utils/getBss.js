export const getBss = (decimal) => {
  let binaryBss = '';
  let partial = 0;
  let copy = '';
  if (decimal[0] == '-') {
    for (let index = 1; index < decimal.length; index++) {
      copy += decimal[index];
    }
  } else {
    copy = decimal;
  }
  if (copy.length > 0) {
    let i = 0;

    while (partial <= copy) {
      i++;
      partial = Math.pow(2, i);
    }

    if ((partial == copy) && (copy != '0')) {
      binaryBss += '1';
      for (i; i > 0; i--) {
        binaryBss += '0';
      }
    } else if (copy == '0') {
      binaryBss = '0';
    } else {
      let auxDecimal = Number(copy);
      let maxNumberToAdd = Math.pow(2, i - 1);
      while (i > 0) {
        if (maxNumberToAdd < auxDecimal) {
          binaryBss += '1';
          auxDecimal = auxDecimal - maxNumberToAdd;
          i--;
          maxNumberToAdd = Math.pow(2, i - 1);
        } else if (maxNumberToAdd == auxDecimal) {
          binaryBss += '1';
          i--;
          for (i; i > 0; i--) {
            binaryBss += '0';
          }
        } else {
          binaryBss += '0';
          i--;
          maxNumberToAdd = Math.pow(2, i - 1);
        }
      }
    }
  }

  return binaryBss;
}