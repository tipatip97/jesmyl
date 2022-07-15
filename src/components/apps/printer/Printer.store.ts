import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exer } from "../../../complect/exer/Exer";
import { NavigationStorage } from "../../../complect/nav-configurer/Navigation.model";
import { printerStorage } from "../../../shared/jstorages";
import { PrinterState, PrinterStorage, Templates } from "./Printer.model";

export const printerExer = new Exer('printer', printerStorage);

const initialState: PrinterState = {
  route: printerStorage.getOr('route', ['all']),
  templates: printerStorage.get('templates'),
};

export const slice = createSlice({
  name: "printer",
  initialState,
  reducers: {
    setPrinterRoute: (state, action: PayloadAction<NavigationStorage<PrinterStorage>>) => {
      state.route = action.payload.route;
    },
    updateTemplates: (state, action: PayloadAction<Templates>) => {
      state.templates = action.payload;
    },
  },
});

export const {
  setPrinterRoute,
  updateTemplates,
} = slice.actions;
export default slice.actions;

export const printerReducer = slice.reducer;
