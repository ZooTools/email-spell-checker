function trim(str: string): string {
  // trim() not exist in old IE!
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

export default trim;
