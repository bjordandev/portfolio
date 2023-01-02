function getCSSVariable(name: string): string | null {
  try {
    return getComputedStyle(document.documentElement).getPropertyValue(name);
  } catch(err) {
    console.error(`getCSSVariable: ${err}`);
    return null;
  }
}

function setCSSVariable(name: string, value: string): void {
  try {
    document.documentElement.
           style.
           setProperty(name, value);
  } catch(err) {
    console.error(`setCSSVariables: ${err}`);
  }
}

function mergeClasses(classes: string[]) {
  return classes.filter(item => item.length > 0).join(' ');
}

export {
  getCSSVariable,
  setCSSVariable,
  mergeClasses
}