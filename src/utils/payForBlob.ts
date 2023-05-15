function generateNamespaceId() {
  return Array.from({ length: 16 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
}

function generateData() {
  return Array.from({ length: Math.floor(Math.random() * 51) * 2 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
}

function generateHexStrings() {
  return [generateNamespaceId(), generateData()];
}

export {
  generateNamespaceId, generateData, generateHexStrings,
};
