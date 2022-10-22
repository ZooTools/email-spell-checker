const WHITESPACE_PATTERN = /\s/;

/**
 * Just in case a browser doesn't support .trim
 * Copied from https://github.com/Trott/trim
 * Credits to them
 */
function trim(str: string): string {
  if (str.trim) {
    return str.trim();
  }
  return right(left(str));
}

function left(str: string): string {
  if (str.trimLeft) return str.trimLeft();

  return str.replace(/^\s\s*/, '');
}

function right(str: string): string {
  if (str.trimRight) return str.trimRight();

  let i = str.length;
  while (WHITESPACE_PATTERN.test(str.charAt(--i)));

  return str.slice(0, i + 1);
}

export default trim;
