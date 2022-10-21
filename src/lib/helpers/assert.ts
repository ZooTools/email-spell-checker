function assert(condition: boolean, message: string): void {
  if (!condition) {
    throw new Error(message);
  }
}

export default assert;
