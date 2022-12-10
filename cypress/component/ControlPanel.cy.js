import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import burgerReducer from "../../src/features/burger";
import ingredientsReducer from "../../src/features/ingredients";
import Ingredient from "../../src/components/Ingredient";
import ControlPanel from "../../src/components/ControlPanel";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

let store = configureStore({
  reducer: {
    burger: burgerReducer,
    ingredients: ingredientsReducer,
  },
});

it("Control panel component testing", () => {
  cy.viewport(1000, 1000);
  cy.mount(
    <Provider store={store}>
      <BrowserRouter>
        <DndProvider backend={HTML5Backend}>
          <ControlPanel />
        </DndProvider>
      </BrowserRouter>
    </Provider>
  );
  cy.get(".buttons").contains("+").click({ multiple: true });
  cy.get(".control-price").should("have.text", "Total price:20₪");
  cy.contains("Clear").click();
  cy.get(".control-price").should("have.text", "Total price:2₪");
  cy.get(".choose-btn").eq(1).click({ force: true });
  cy.get(".Cart")
    .eq(1)
    .should("have.css", "border", "4px solid rgb(15, 125, 235)");
  cy.get(".control-price").should("have.text", "Total price:29₪");
  cy.contains("Clear").click();
});
