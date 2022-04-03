import { useDispatch } from "react-redux";
import { EvaIcon } from "../../../../complect/Eva";
import { isCanAddCol, isCanRedact } from "../Cm.complect";
import { setPhase } from "../Cm.store";
import { cols } from "../cols/Cols";

export function TheColAdditionButtons() {
    const dispatch = useDispatch();
    
    return isCanAddCol && [
        <button
            key='new-cat-button'
            id='new-cat-button'
            className='mbtn msm m-ok'
            onClick={() => {
              const catw = cols.addCat();
              dispatch(setPhase({ phase: 'cat', spec: catw }));
            }}
          >
          <EvaIcon name='folder-add-outline' alt='Новая категория' />
        </button>,
        <button
            key='com-new-button'
            className='mbtn m-no msm'
            onClick={() => {
              const comw = cols.addCom();
              dispatch(setPhase({ phase: 'editor', spec: comw }));
            }}
          >
          <EvaIcon name='file-add-outline' alt='Новая песня' />
        </button>
      ];
}

