import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exer } from "../../../complect/exer/Exer";
import { NavigationStorage } from "../../../complect/nav-configurer/Navigation.model";
import { printerStorage } from "../../../shared/jstorages";
import { PrinterState, PrinterStorage } from "./Printer.model";

export const printerExer = new Exer('printer', printerStorage);

const initialState: PrinterState = {
  route: printerStorage.getOr('route', ['all']),
  templates: printerStorage.getOr('templates', { text: '', humans: [{ name: 'Иванов Иван', isMan: true }] }),
};

export const slice = createSlice({
  name: "printer",
  initialState,
  reducers: {
    setPrinterRoute: (state, action: PayloadAction<NavigationStorage<PrinterStorage>>) => {
      state.route = action.payload.route;
    },
  },
});

export const {
  setPrinterRoute,
} = slice.actions;
export default slice.actions;

export const printerReducer = slice.reducer;
