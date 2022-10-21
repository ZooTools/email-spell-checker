function sift3Distance(s1: string, s2: string): number {
  // sift3: http://siderite.blogspot.com/2007/04/super-fast-and-accurate-string-distance.html
  if (s1 == null || s1.length === 0) {
    if (s2 == null || s2.length === 0) {
      return 0;
    } else {
      return s2.length;
    }
  }

  if (s2 == null || s2.length === 0) {
    return s1.length;
  }

  let c = 0;
  let offset1 = 0;
  let offset2 = 0;
  let lcs = 0;
  const maxOffset = 5;

  while (c + offset1 < s1.length && c + offset2 < s2.length) {
    if (s1.charAt(c + offset1) == s2.charAt(c + offset2)) {
      lcs++;
    } else {
      offset1 = 0;
      offset2 = 0;
      for (let i = 0; i < maxOffset; i++) {
        if (c + i < s1.length && s1.charAt(c + i) == s2.charAt(c)) {
          offset1 = i;
          break;
        }
        if (c + i < s2.length && s1.charAt(c) == s2.charAt(c + i)) {
          offset2 = i;
          break;
        }
      }
    }
    c++;
  }
  return (s1.length + s2.length) / 2 - lcs;
}

export default sift3Distance;
