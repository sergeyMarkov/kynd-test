import { mapInitialsToHexColour, colours } from './colours.ts';

describe('mapInitialsToHexColour', () => {
  it('should map initials to hex colour consistently', () => {
    const result1 = mapInitialsToHexColour('AB');
    const result2 = mapInitialsToHexColour('BA');
    expect(result1).toBe(result2);
  });

  it('should handle different initials', () => {
    const resultA = mapInitialsToHexColour('A');
    const resultB = mapInitialsToHexColour('B');
    expect(resultA).not.toBe(resultB);
  });

  it('should handle empty string', () => {
    const result = mapInitialsToHexColour('');
    expect(result).toBe(colours[0]); // Assuming the default color for an empty string is the first color in the array
  });

  it('should handle non-alphabetic characters', () => {
    const result = mapInitialsToHexColour('123');
    expect(result).toBe(colours[1]); // Assuming the default color for non-alphabetic characters is the first color in the array
  });

});
