import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import "./Lists.scss";

export default function Lists() {
  return (
    <div className="lists-container">
      <div className="header-content flex between">Списки</div>
      <div className="content-container flex between column">
        <div className="list-item flex">
          <EvaIcon name="star" className="main-big-gap" />
          <div>Избранное</div>
        </div>
        <div className="list-item flex">
          <EvaIcon name="calendar" className="main-big-gap" />
          <div>События</div>
        </div>
        <div className="thematic-item flex column custom-align-items">
          <div className="title">Тематические:</div>
          <div className="item flex">
            <EvaIcon name="car" className="main-big-gap" />
            <div>Детские</div>
          </div>
          <div className="item flex">
            <EvaIcon name="headphones" className="main-big-gap" />
            <div>Молодёжные</div>
          </div>
        </div>
      </div>
    </div>
  );
}
