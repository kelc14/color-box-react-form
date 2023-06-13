import { render, fireEvent } from "@testing-library/react";
import Box from "./Box";

// smoke test
it("renders without crashing", function () {
  render(<Box key={1} id={1} backgroundColor="red" width={200} height={200} />);
});

// snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(
    <Box key={1} id={1} backgroundColor="red" width={200} height={200} />
  );
  expect(asFragment()).toMatchSnapshot();
});
