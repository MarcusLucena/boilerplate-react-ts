import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Boilerplate de base para projetos com React/i,
  );
  expect(linkElement).toBeInTheDocument();
});
