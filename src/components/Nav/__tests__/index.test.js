import React from "react";

import { render, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import Nav from "..";

afterEach(cleanup);

describe("Nav component", () => {
  // Baseline test

  it("renders", () => {
    render(<Nav />);
  });
  // Snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(<Nav />);
    // Assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Emoji is visible", () => {
  it("inserts emoji into the h2", () => {
    // Arrange
    const { getLabelText } = render(<Nav />);
    // Assert
    expect(getLabelText("camera")).toHaveTextContent("📸");
  });
});
