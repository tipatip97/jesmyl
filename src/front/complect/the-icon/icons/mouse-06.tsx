import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 6.16705C21.5974 6.96357 20.7056 7.23648 20.0082 6.77661L17.9036 5.38882C16.3163 4.34208 15.5226 3.81871 14.7447 4.05676C14.2697 4.20215 13.9138 4.59687 13.5 5.29516',
  d2: 'M2.33308 12.3211C1.56295 13.9784 2.15878 16.1103 3.80545 17.3297C4.41103 17.778 5.03988 18.2109 5.707 18.5977C6.37411 18.9846 7.06189 19.315 7.75129 19.6175C9.62623 20.44 11.7624 19.8922 12.8065 18.3938C13.53 17.3555 14.2534 16.2797 14.9104 15.137C15.5673 13.9943 16.1333 12.8273 16.6669 11.6789C17.437 10.0216 16.8413 7.88974 15.1945 6.67036C14.589 6.22198 13.9601 5.78906 13.293 5.40226C12.6259 5.01545 11.9381 4.68496 11.2487 4.38249C9.37386 3.55998 7.23754 4.10773 6.19347 5.60619C5.47 6.64449 4.74664 7.72033 4.08971 8.86302C3.43278 10.0057 2.86672 11.1728 2.33308 12.3211Z',
  d3: 'M11.6328 7.90234L10.6328 9.63439',
  d4: 'M20.4212 6.15067C20.6986 6.33359 21.1048 6.27589 21.3308 5.82889C21.5176 5.45922 21.9688 5.31103 22.3385 5.4979C22.7081 5.68476 22.8563 6.13592 22.6695 6.50559C22.0901 7.65164 20.7128 8.13976 19.5954 7.40293L17.4909 6.01514C16.6776 5.47887 16.1353 5.12351 15.702 4.92011C15.2896 4.72652 15.1011 4.73226 14.9643 4.77412C14.7779 4.83118 14.546 5.00162 14.1453 5.67772C13.9341 6.03406 13.4741 6.15173 13.1177 5.94056C12.7614 5.72938 12.6437 5.26932 12.8549 4.91298C13.2819 4.19251 13.7617 3.5735 14.5254 3.33979C15.1664 3.1436 15.7637 3.292 16.3394 3.56227C16.8829 3.8174 17.516 4.23492 18.2693 4.73169L20.4212 6.15067Z',
  d5: 'M11.5511 3.69478C9.38804 2.74583 6.85186 3.34999 5.57919 5.17653C4.85185 6.22038 4.11383 7.31723 3.44058 8.48832C2.76733 9.6594 2.19049 10.8497 1.65401 12.0042C0.716363 14.0219 1.46206 16.5259 3.36027 17.9315C3.9791 18.3897 4.63233 18.8401 5.33188 19.2457C6.03143 19.6513 6.74655 19.9943 7.45108 20.3034C9.61423 21.2524 12.1503 20.6482 13.423 18.8217C14.1503 17.7779 14.8884 16.681 15.5616 15.5099C16.2349 14.3388 16.8117 13.1485 17.3482 11.994C18.2857 9.97627 17.5403 7.47239 15.6419 6.06671C15.0231 5.60847 14.3698 5.15813 13.6703 4.75253C12.9707 4.34692 12.2557 4.00392 11.5511 3.69478ZM12.499 8.40251C12.7751 7.92422 12.6113 7.31263 12.133 7.03649C11.6547 6.76034 11.0431 6.92422 10.767 7.40251L9.76695 9.13456C9.49081 9.61285 9.65469 10.2244 10.133 10.5006C10.6113 10.7767 11.2229 10.6129 11.499 10.1346L12.499 8.40251Z',
  d6: 'M5.57921 5.17653C6.85188 3.34999 9.38805 2.74583 11.5511 3.69478C12.2558 4.00392 12.9708 4.34692 13.6703 4.75253C14.3698 5.15813 15.0231 5.60847 15.642 6.06671C17.5403 7.47239 18.2858 9.97627 17.3482 11.994C16.8117 13.1485 16.2349 14.3388 15.5617 15.5099C14.8884 16.681 14.1504 17.7779 13.423 18.8217C12.1503 20.6482 9.61424 21.2524 7.45109 20.3034C6.74657 19.9943 6.03145 19.6513 5.3319 19.2457C4.63235 18.8401 3.97911 18.3897 3.36028 17.9315C1.46207 16.5259 0.716379 14.0219 1.65402 12.0042C2.19051 10.8497 2.76735 9.6594 3.44059 8.48832C4.11385 7.31723 4.85187 6.22038 5.57921 5.17653Z',
  d7: 'M12.133 7.03649C12.6113 7.31263 12.7751 7.92422 12.499 8.40251L11.499 10.1346C11.2229 10.6129 10.6113 10.7767 10.133 10.5006C9.65469 10.2244 9.49081 9.61285 9.76695 9.13456L10.767 7.40251C11.0431 6.92422 11.6547 6.76034 12.133 7.03649Z',
  d8: 'M22 5.5L21 7.33293L14.5 3.5L13 6',
  d9: 'M2.33308 12.8211C1.56295 14.4784 2.15878 16.6103 3.80545 17.8297C4.41103 18.278 5.03988 18.7109 5.707 19.0977C6.37411 19.4846 7.06189 19.815 7.75129 20.1175C9.62623 20.94 11.7624 20.3922 12.8065 18.8938C13.53 17.8555 14.2534 16.7797 14.9104 15.637C15.5673 14.4943 16.1333 13.3273 16.6669 12.1789C17.437 10.5216 16.8413 8.38974 15.1945 7.17036C14.589 6.72198 13.9601 6.28906 13.293 5.90226C12.6259 5.51545 11.9381 5.18496 11.2487 4.88249C9.37386 4.05998 7.23754 4.60773 6.19347 6.10619C5.47 7.14449 4.74664 8.22033 4.08971 9.36302C3.43278 10.5057 2.86672 11.6728 2.33308 12.8211Z',
  d10: 'M12 8L10.6328 10.1344',
  d11: 'M13.8584 3.11424C14.0704 2.76097 14.5276 2.64481 14.8825 2.85407L20.8056 6.29312L21.4342 5.14091L22.751 5.85931L21.751 7.69225C21.6536 7.87067 21.488 8.00195 21.2921 8.05602C21.0962 8.11009 20.8867 8.08233 20.7116 7.97909L14.7617 4.52422L13.6446 6.38599L12.3584 5.61424L13.8584 3.11424Z',
  d12: 'M11.5511 4.19576C9.38804 3.2468 6.85186 3.85097 5.57919 5.6775C4.85185 6.72135 4.11383 7.8182 3.44058 8.9893C2.76733 10.1604 2.19049 11.3507 1.65401 12.5052C0.716363 14.5229 1.46206 17.0268 3.36027 18.4325C3.9791 18.8907 4.63233 19.341 5.33188 19.7467C6.03143 20.1523 6.74655 20.4953 7.45108 20.8044C9.61423 21.7533 12.1503 21.1491 13.423 19.3227C14.1503 18.2788 14.8884 17.182 15.5616 16.0109C16.2349 14.8398 16.8117 13.6495 17.3482 12.495C18.2857 10.4772 17.5403 7.97337 15.6419 6.56769C15.0231 6.10945 14.3698 5.65911 13.6703 5.25351C12.9707 4.8479 12.2557 4.50489 11.5511 4.19576ZM11.1582 7.46094L9.791 9.59533L11.4751 10.6741L12.8423 8.5397L11.1582 7.46094Z',
};

export const IconMouse06StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-06-stroke-rounded IconMouse06StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMouse06DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-06-duotone-rounded IconMouse06DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMouse06TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-06-twotone-rounded IconMouse06TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMouse06SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-06-solid-rounded IconMouse06SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouse06BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-06-bulk-rounded IconMouse06BulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouse06StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-06-stroke-sharp IconMouse06StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMouse06SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-06-solid-sharp IconMouse06SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMouse06: TheIconSelfPack = {
  name: 'Mouse06',
  StrokeRounded: IconMouse06StrokeRounded,
  DuotoneRounded: IconMouse06DuotoneRounded,
  TwotoneRounded: IconMouse06TwotoneRounded,
  SolidRounded: IconMouse06SolidRounded,
  BulkRounded: IconMouse06BulkRounded,
  StrokeSharp: IconMouse06StrokeSharp,
  SolidSharp: IconMouse06SolidSharp,
};