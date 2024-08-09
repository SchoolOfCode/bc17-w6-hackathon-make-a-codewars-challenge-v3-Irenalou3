import { expect, test } from "vitest";
import { treasureFinder } from "./main.js";

import { expect, test } from "vitest";
import { treasureFinder } from "./main.js";

// Testing typical cases
test("should return correct outcome and sum when numbers are present", () => {
    const result1 = treasureFinder("a1b2c3");
    expect(result1.outcome).toBe("treasure_found");
    expect(result1.sum).toBe(6);

    const result2 = treasureFinder("1v7g9j");
    expect(result2.outcome).toBe("treasure_found");
    expect(result2.sum).toBe(17);
});

// Testing edge cases
test("should return correct outcome and sum when no numbers are found", () => {
    const result1 = treasureFinder("abcdef");
    expect(result1.outcome).toBe("no_treasure");
    expect(result1.sum).toBe(0);

    const result2 = treasureFinder("");
    expect(result2.outcome).toBe("no_treasure");
    expect(result2.sum).toBe(0);
});

test("should correctly handle a string with a single digit", () => {
    const result = treasureFinder("4");
    expect(result.outcome).toBe("treasure_found");
    expect(result.sum).toBe(4);
});

test("should handle zeros in the string", () => {
    const result1 = treasureFinder("a0b0c0");
    expect(result1.outcome).toBe("treasure_found");
    expect(result1.sum).toBe(0);

    const result2 = treasureFinder("0");
    expect(result2.outcome).toBe("treasure_found");
    expect(result2.sum).toBe(0);
});

test("should handle large numbers correctly", () => {
    const result1 = treasureFinder("100a200");
    expect(result1.outcome).toBe("treasure_found");
    expect(result1.sum).toBe(300);

    const result2 = treasureFinder("9999a1");
    expect(result2.outcome).toBe("treasure_found");
    expect(result2.sum).toBe(10000);
});

test("should correctly sum multiple digit numbers", () => {
    const result = treasureFinder("a123b456c789");
    expect(result.outcome).toBe("treasure_found");
    expect(result.sum).toBe(1368);
});

test("should correctly handle strings with numbers and non-number characters", () => {
    const result1 = treasureFinder("abc123def456");
    expect(result1.outcome).toBe("treasure_found");
    expect(result1.sum).toBe(579);

    const result2 = treasureFinder("xyz0mno5");
    expect(result2.outcome).toBe("treasure_found");
    expect(result2.sum).toBe(5);
});


