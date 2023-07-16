import { ReactNode } from "react";
import "./Index.scss";
import indexStoreActions from "./Index.store";
import indexStorage from "./indexStorage";
import { useDispatch } from "react-redux";

export default function Index({ content }: { content: ReactNode }) {
  const dispatch = useDispatch();

  indexStorage.initDispatches(dispatch, indexStoreActions);

  return <>{content}</>;
}
