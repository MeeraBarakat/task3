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

describe("Burger component testing", () => {
  it("Ingredient component testing", () => {
    cy.mount(
      <Provider store={store}>
        <BrowserRouter>
          <DndProvider backend={HTML5Backend}>
            <Ingredient
              Ingredient={{
                id: 3,
                name: "beef",
                path: "/images/beef.svg",
                price: 10,
              }}
            />
          </DndProvider>
        </BrowserRouter>
      </Provider>
    );
    cy.contains("+").click();
    cy.contains("1");
    cy.contains("-").click();
    cy.contains("0");
    cy.contains("beef");
    const dataTransfer = new DataTransfer();
    cy.get(".ContolPanelImage").first().trigger("dragstart", { dataTransfer });
    cy.get(".Ingredient")
      .first()
      .should("have.css", "border", "2px solid rgb(220, 220, 220)");
  });
});
