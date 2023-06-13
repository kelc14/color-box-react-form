import { render, fireEvent, getByRole } from "@testing-library/react";
import BoxList from "./BoxList";

// smoke test
it("renders without crashing", function () {
  render(<BoxList />);
});

// snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

// functionality tests
it("can add a new box", function () {
  const { getByLabelText, queryByText } = render(<BoxList />);

  // no boxes yet  (so no remove buttons)
  expect(queryByText("X")).not.toBeInTheDocument();

  const colorInput = getByLabelText("Color");
  const widthInput = getByLabelText("Width");
  const heightInput = getByLabelText("Height");
  const addBtn = queryByText("ADD");

  // fill out the form:
  fireEvent.change(colorInput, { target: { value: "red" } });
  fireEvent.change(widthInput, { target: { value: 100 } });
  fireEvent.change(heightInput, { target: { value: 200 } });
  fireEvent.click(addBtn);

  // item exists (remove button)
  expect(queryByText("X")).toBeInTheDocument();
});

// it("works when you click on the right arrow", function () {
//   const { container } = render(
//     <Carousel photos={TEST_IMAGES} title="images for testing" />
//   );
//   // expect the first image to show, but not the second
//   expect(
//     container.querySelector('img[alt="testing image 1"]')
//   ).toBeInTheDocument();
//   expect(
//     container.querySelector('img[alt="testing image 2"]')
//   ).not.toBeInTheDocument();

//   // move forward in the carousel
//   const rightArrow = container.querySelector(".bi-arrow-right-circle");
//   fireEvent.click(rightArrow);

//   // expect the second image to show, but not the first
//   expect(
//     container.querySelector('img[alt="testing image 1"]')
//   ).not.toBeInTheDocument();
//   expect(
//     container.querySelector('img[alt="testing image 2"]')
//   ).toBeInTheDocument();
// });

// it("works when you click on the left arrow", function () {
//   const { container } = render(
//     <Carousel photos={TEST_IMAGES} title="images for testing" />
//   );
//   // expect the first image to show, but not the second
//   expect(
//     container.querySelector('img[alt="testing image 1"]')
//   ).toBeInTheDocument();
//   expect(
//     container.querySelector('img[alt="testing image 2"]')
//   ).not.toBeInTheDocument();

//   // move forward in the carousel
//   const leftArrow = container.querySelector(".bi-arrow-left-circle");
//   fireEvent.click(leftArrow);
//   console.log(TEST_IMAGES);

//   // expect the second image to show, but not the first
//   expect(
//     container.querySelector('img[alt="testing image 1"]')
//   ).not.toBeInTheDocument();
//   expect(
//     container.querySelector('img[alt="testing image 3"]')
//   ).toBeInTheDocument();
// });
