import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5 16L10 13M14 11L19 8M12 5V10M12 14V19M5 8L10 11M14 13L19 16',
  d2: 'M20.5 9.00001V14.5M13.5 20.5L19 17.5M4.5 17.5L10.5 20.5M3.5 15V9.00001M4.5 6.5L10.5 3.5M19.5 6.5L13.5 3.5',
  d3: 'M12 9.75L14 10.875V13.125L12 14.25L10 13.125V10.875L12 9.75Z',
  d4: 'M12 5C12.8284 5 13.5 4.32843 13.5 3.5L19.4194 6.45969C19.1597 6.72938 19 7.09604 19 7.5C19 8.32843 19.6716 9 20.5 9V14.5L20.2387 15.0227C19.5348 15.1463 19 15.7607 19 16.5C19 16.7437 19.0581 16.9739 19.1613 17.1774L19 17.5L13.5 20.5C13.5 19.6716 12.8284 19 12 19C11.1716 19 10.5 19.6716 10.5 20.5L4.58063 17.5403C4.84032 17.2706 5 16.904 5 16.5C5 15.6716 4.32843 15 3.5 15V9.00001C4.32843 9.00001 5 8.32843 5 7.5C5 7.09604 4.84032 6.72938 4.58063 6.45969L10.5 3.5C10.5 4.32843 11.1716 5 12 5ZM12 9.75L14 10.875V13.125L12 14.25L10 13.125V10.875L12 9.75Z',
  d5: 'M12.0002 4C12.5524 4 13.0002 4.44772 13.0002 5V10C13.0002 10.5523 12.5524 11 12.0002 11C11.4479 11 11.0002 10.5523 11.0002 10V5C11.0002 4.44772 11.4479 4 12.0002 4ZM4.14266 7.4855C4.42681 7.01192 5.04107 6.85836 5.51465 7.14251L10.5146 10.1425C10.9882 10.4267 11.1418 11.0409 10.8576 11.5145C10.6733 11.8217 10.3502 11.9942 10.0166 12C10.3502 12.0058 10.6733 12.1783 10.8576 12.4855C11.1418 12.9591 10.9882 13.5733 10.5146 13.8575L5.51465 16.8575C5.04107 17.1416 4.42681 16.9881 4.14266 16.5145C3.85851 16.0409 4.01208 15.4267 4.48566 15.1425L9.48566 12.1425C9.64144 12.049 9.81244 12.0029 9.98191 12C9.81244 11.9971 9.64144 11.951 9.48566 11.8575L4.48566 8.85749C4.01208 8.57334 3.85851 7.95908 4.14266 7.4855ZM19.8576 7.4855C20.1418 7.95908 19.9882 8.57334 19.5146 8.85749L14.5146 11.8575C14.3589 11.951 14.1879 11.9971 14.0184 12C14.1879 12.0029 14.3589 12.049 14.5146 12.1425L19.5146 15.1425C19.9882 15.4267 20.1418 16.0409 19.8576 16.5145C19.5735 16.9881 18.9592 17.1416 18.4857 16.8575L13.4857 13.8575C13.0121 13.5733 12.8585 12.9591 13.1427 12.4855C13.327 12.1783 13.6501 12.0058 13.9837 12C13.6501 11.9942 13.327 11.8217 13.1427 11.5145C12.8585 11.0409 13.0121 10.4267 13.4857 10.1425L18.4857 7.14251C18.9592 6.85836 19.5735 7.01192 19.8576 7.4855ZM12.0002 13C12.5524 13 13.0002 13.4477 13.0002 14V19C13.0002 19.5523 12.5524 20 12.0002 20C11.4479 20 11.0002 19.5523 11.0002 19V14C11.0002 13.4477 11.4479 13 12.0002 13Z',
  d6: 'M11.3944 3.05301C11.6414 3.54698 11.4412 4.14766 10.9472 4.39465L4.94721 7.39465C4.45324 7.64164 3.85256 7.44141 3.60557 6.94743C3.35858 6.45345 3.55881 5.85278 4.05279 5.60579L10.0528 2.60579C10.5468 2.3588 11.1474 2.55903 11.3944 3.05301ZM12.6056 3.05301C12.8526 2.55903 13.4532 2.3588 13.9472 2.60579L19.9472 5.60579C20.4412 5.85278 20.6414 6.45345 20.3944 6.94743C20.1474 7.44141 19.5468 7.64164 19.0528 7.39465L13.0528 4.39465C12.5588 4.14766 12.3586 3.54698 12.6056 3.05301ZM3.5 8.00023C4.05228 8.00023 4.5 8.44795 4.5 9.00023V15.0002C4.5 15.5525 4.05228 16.0002 3.5 16.0002C2.94772 16.0002 2.5 15.5525 2.5 15.0002V9.00023C2.5 8.44795 2.94772 8.00023 3.5 8.00023ZM20.5 8.00023C21.0523 8.00023 21.5 8.44795 21.5 9.00023V14.5002C21.5 15.0525 21.0523 15.5002 20.5 15.5002C19.9477 15.5002 19.5 15.0525 19.5 14.5002V9.00023C19.5 8.44795 19.9477 8.00023 20.5 8.00023ZM3.60557 17.053C3.85256 16.559 4.45324 16.3588 4.94721 16.6058L10.9472 19.6058C11.4412 19.8528 11.6414 20.4535 11.3944 20.9474C11.1474 21.4414 10.5468 21.6416 10.0528 21.3946L4.05279 18.3946C3.55881 18.1477 3.35858 17.547 3.60557 17.053ZM19.8779 17.0214C20.1424 17.5062 19.9637 18.1137 19.4789 18.3781L13.9789 21.3781C13.494 21.6426 12.8866 21.4639 12.6221 20.9791C12.3576 20.4942 12.5363 19.8868 13.0211 19.6223L18.5211 16.6223C19.006 16.3579 19.6134 16.5365 19.8779 17.0214Z',
  d7: 'M9.5 3.5C9.5 2.11929 10.6193 1 12 1C13.3807 1 14.5 2.11929 14.5 3.5C14.5 4.88071 13.3807 6 12 6C10.6193 6 9.5 4.88071 9.5 3.5Z',
  d8: 'M1 7.5C1 6.11929 2.11929 5 3.5 5C4.88071 5 6 6.11929 6 7.5C6 8.88071 4.88071 10 3.5 10C2.11929 10 1 8.88071 1 7.5Z',
  d9: 'M18 7.5C18 6.11929 19.1193 5 20.5 5C21.8807 5 23 6.11929 23 7.5C23 8.88071 21.8807 10 20.5 10C19.1193 10 18 8.88071 18 7.5Z',
  d10: 'M1 16.5C1 15.1193 2.11929 14 3.5 14C4.88071 14 6 15.1193 6 16.5C6 17.8807 4.88071 19 3.5 19C2.11929 19 1 17.8807 1 16.5Z',
  d11: 'M18 16.5C18 15.1193 19.1193 14 20.5 14C21.8807 14 23 15.1193 23 16.5C23 17.8807 21.8807 19 20.5 19C19.1193 19 18 17.8807 18 16.5Z',
  d12: 'M9.5 20.5C9.5 19.1193 10.6193 18 12 18C13.3807 18 14.5 19.1193 14.5 20.5C14.5 21.8807 13.3807 23 12 23C10.6193 23 9.5 21.8807 9.5 20.5Z',
  d13: 'M11.5097 8.87842C11.8142 8.70719 12.1858 8.70719 12.4903 8.87842L14.4903 10.0034C14.8051 10.1805 15 10.5137 15 10.875V13.125C15 13.4863 14.8051 13.8195 14.4903 13.9966L12.4903 15.1216C12.1858 15.2928 11.8142 15.2928 11.5097 15.1216L9.50974 13.9966C9.19486 13.8195 9 13.4863 9 13.125V10.875C9 10.5137 9.19486 10.1805 9.50974 10.0034L11.5097 8.87842Z',
  d14: 'M11.2501 10V5H12.7501V10H11.2501ZM9.61426 11.6431L4.61426 8.64312L5.386 7.35688L10.386 10.3569L9.61426 11.6431ZM19.386 8.64312L14.386 11.6431L13.6143 10.3569L18.6143 7.35688L19.386 8.64312ZM10.386 13.6431L5.386 16.6431L4.61426 15.3569L9.61426 12.3569L10.386 13.6431ZM18.6143 16.6431L13.6143 13.6431L14.386 12.3569L19.386 15.3569L18.6143 16.6431ZM11.2501 19V14H12.7501V19H11.2501Z',
  d15: 'M10.8354 4.17074L4.83541 7.17074L4.16459 5.8291L10.1646 2.8291L10.8354 4.17074ZM19.1646 7.17074L13.1646 4.17074L13.8354 2.8291L19.8354 5.8291L19.1646 7.17074ZM4.25 8.99993V14.9999H2.75V8.99993H4.25ZM19.75 14.4999V8.99993H21.25V14.4999H19.75ZM4.83541 16.8291L10.8354 19.8291L10.1646 21.1707L4.16459 18.1707L4.83541 16.8291ZM13.1409 19.8415L18.6409 16.8415L19.3591 18.1583L13.8591 21.1583L13.1409 19.8415Z',
  d16: 'M9.75 3.5C9.75 2.25736 10.7574 1.25 12 1.25C13.2426 1.25 14.25 2.25736 14.25 3.5C14.25 4.74264 13.2426 5.75 12 5.75C10.7574 5.75 9.75 4.74264 9.75 3.5Z',
  d17: 'M9.75 20.5C9.75 19.2574 10.7574 18.25 12 18.25C13.2426 18.25 14.25 19.2574 14.25 20.5C14.25 21.7426 13.2426 22.75 12 22.75C10.7574 22.75 9.75 21.7426 9.75 20.5Z',
  d18: 'M1.25 7.5C1.25 6.25736 2.25736 5.25 3.5 5.25C4.74264 5.25 5.75 6.25736 5.75 7.5C5.75 8.74264 4.74264 9.75 3.5 9.75C2.25736 9.75 1.25 8.74264 1.25 7.5Z',
  d19: 'M18.25 7.5C18.25 6.25736 19.2574 5.25 20.5 5.25C21.7426 5.25 22.75 6.25736 22.75 7.5C22.75 8.74264 21.7426 9.75 20.5 9.75C19.2574 9.75 18.25 8.74264 18.25 7.5Z',
  d20: 'M18.25 16.5C18.25 15.2574 19.2574 14.25 20.5 14.25C21.7426 14.25 22.75 15.2574 22.75 16.5C22.75 17.7426 21.7426 18.75 20.5 18.75C19.2574 18.75 18.25 17.7426 18.25 16.5Z',
  d21: 'M1.25 16.5C1.25 15.2574 2.25736 14.25 3.5 14.25C4.74264 14.25 5.75 15.2574 5.75 16.5C5.75 17.7426 4.74264 18.75 3.5 18.75C2.25736 18.75 1.25 17.7426 1.25 16.5Z',
  d22: 'M11.6323 9.09632C11.8606 8.96789 12.1394 8.96789 12.3677 9.09632L14.3677 10.2213C14.6039 10.3542 14.75 10.604 14.75 10.875V13.125C14.75 13.396 14.6039 13.6458 14.3677 13.7787L12.3677 14.9037C12.1394 15.0321 11.8606 15.0321 11.6323 14.9037L9.6323 13.7787C9.39615 13.6458 9.25 13.396 9.25 13.125V10.875C9.25 10.604 9.39615 10.3542 9.6323 10.2213L11.6323 9.09632Z',
};

export const IconNanoTechnologyStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="nano-technology-stroke-rounded IconNanoTechnologyStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="3.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="12" 
        cy="20.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="3.5" 
        cy="7.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="20.5" 
        cy="7.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="20.5" 
        cy="16.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="3.5" 
        cy="16.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNanoTechnologyDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="nano-technology-duotone-rounded IconNanoTechnologyDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="3.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="12" 
        cy="20.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="3.5" 
        cy="7.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="20.5" 
        cy="7.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="20.5" 
        cy="16.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="3.5" 
        cy="16.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNanoTechnologyTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="nano-technology-twotone-rounded IconNanoTechnologyTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="3.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="12" 
        cy="20.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="3.5" 
        cy="7.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="20.5" 
        cy="7.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="20.5" 
        cy="16.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="3.5" 
        cy="16.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNanoTechnologySolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="nano-technology-solid-rounded IconNanoTechnologySolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNanoTechnologyBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="nano-technology-bulk-rounded IconNanoTechnologyBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNanoTechnologyStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="nano-technology-stroke-sharp IconNanoTechnologyStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="3.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="12" 
        cy="20.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="3.5" 
        cy="7.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="20.5" 
        cy="7.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="20.5" 
        cy="16.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="3.5" 
        cy="16.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNanoTechnologySolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="nano-technology-solid-sharp IconNanoTechnologySolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfNanoTechnology: TheIconSelfPack = {
  name: 'NanoTechnology',
  StrokeRounded: IconNanoTechnologyStrokeRounded,
  DuotoneRounded: IconNanoTechnologyDuotoneRounded,
  TwotoneRounded: IconNanoTechnologyTwotoneRounded,
  SolidRounded: IconNanoTechnologySolidRounded,
  BulkRounded: IconNanoTechnologyBulkRounded,
  StrokeSharp: IconNanoTechnologyStrokeSharp,
  SolidSharp: IconNanoTechnologySolidSharp,
};