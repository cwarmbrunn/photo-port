import React from "react";
import { render, cleanup, fireEvent, getByText } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";

const currentPhoto = {
  name: "Park bench",
  category: "landscape",
  description: "Lorem ipsum",
  index: 1,
};

afterEach(cleanup);

describe("Modal component", () => {
  it("renders", () => {
    // Baseline render component test
  });
  // Snapshot test
});

it("matches snapshot DOM node structure", () => {
  // Arrange the snapshot - declare variables
  // Assert the match
});

describe("Click Event", () => {
  // Arrange: Render Modal
  // Act: Simulate Click Event
  // Assert: Expected matcher

  const { getByText } = render(
    <Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />
  );
});

fireEvent.click(getByText("Close this modal"));

expect(mockToggleModal).toHaveBeenCalledTimes(1);
