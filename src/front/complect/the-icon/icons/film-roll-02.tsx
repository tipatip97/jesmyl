import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.4998 10.5H10.5075M14 7L13 8M8 13L7 14M14 14L13 13M8 8L7 7',
  d2: 'M13.5 18.5L19.3225 17.5348C20.7193 17.2917 22 18.3514 22 19.7503C22 20.9928 20.9787 22 19.7189 22H18.7',
  d3: 'M1.25 10.5C1.25 5.39137 5.39137 1.25 10.5 1.25C15.6086 1.25 19.75 5.39137 19.75 10.5C19.75 15.6086 15.6086 19.75 10.5 19.75C5.39137 19.75 1.25 15.6086 1.25 10.5ZM7.70711 6.29289C7.31658 5.90237 6.68342 5.90237 6.29289 6.29289C5.90237 6.68342 5.90237 7.31658 6.29289 7.70711L7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L7.70711 6.29289ZM14.7071 7.70711C15.0976 7.31658 15.0976 6.68342 14.7071 6.29289C14.3166 5.90237 13.6834 5.90237 13.2929 6.29289L12.2929 7.29289C11.9024 7.68342 11.9024 8.31658 12.2929 8.70711C12.6834 9.09763 13.3166 9.09763 13.7071 8.70711L14.7071 7.70711ZM10.4998 9.50002C9.94756 9.50002 9.49984 9.94774 9.49984 10.5C9.49984 11.0523 9.94756 11.5 10.4998 11.5H10.5075C11.0597 11.5 11.5075 11.0523 11.5075 10.5C11.5075 9.94774 11.0597 9.50002 10.5075 9.50002H10.4998ZM8.70711 13.7071C9.09763 13.3166 9.09763 12.6834 8.70711 12.2929C8.31658 11.9024 7.68342 11.9024 7.29289 12.2929L6.29289 13.2929C5.90237 13.6834 5.90237 14.3166 6.29289 14.7071C6.68342 15.0976 7.31658 15.0976 7.70711 14.7071L8.70711 13.7071ZM13.7071 12.2929C13.3166 11.9024 12.6834 11.9024 12.2929 12.2929C11.9024 12.6834 11.9024 13.3166 12.2929 13.7071L13.2929 14.7071C13.6834 15.0976 14.3166 15.0976 14.7071 14.7071C15.0976 14.3166 15.0976 13.6834 14.7071 13.2929L13.7071 12.2929Z',
  d4: 'M21.0001 19.7503C21.0001 18.9888 20.2956 18.3805 19.4941 18.52C19.4805 18.5224 19.4669 18.5245 19.4533 18.5263L12.1308 19.4914C11.5832 19.5636 11.0809 19.1782 11.0087 18.6307C10.9365 18.0831 11.3219 17.5808 11.8694 17.5086L19.1732 16.5459C21.1569 16.2142 23.0001 17.7216 23.0001 19.7503C23.0001 21.5581 21.518 23 19.719 23H18.7001C18.1478 23 17.7001 22.5523 17.7001 22C17.7001 21.4477 18.1478 21 18.7001 21H19.719C20.4397 21 21.0001 20.4275 21.0001 19.7503Z',
  d5: 'M13.1953 19.3511C14.7771 18.87 16.1792 17.9765 17.2766 16.7959L19.173 16.5459C21.1567 16.2142 22.9999 17.7216 22.9999 19.7503C22.9999 21.5581 21.5178 23 19.7188 23H18.6999C18.1476 23 17.6999 22.5523 17.6999 22C17.6999 21.4477 18.1476 21 18.6999 21H19.7188C20.4394 21 20.9999 20.4275 20.9999 19.7503C20.9999 18.9888 20.2953 18.3805 19.4938 18.52C19.4803 18.5224 19.4667 18.5245 19.453 18.5263L13.1953 19.3511Z',
  d6: 'M10.5 1.25C5.39137 1.25 1.25 5.39137 1.25 10.5C1.25 15.6086 5.39137 19.75 10.5 19.75C15.6086 19.75 19.75 15.6086 19.75 10.5C19.75 5.39137 15.6086 1.25 10.5 1.25Z',
  d7: 'M6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L8.70711 7.29289C9.09763 7.68342 9.09763 8.31658 8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289ZM14.7071 6.29289C15.0976 6.68342 15.0976 7.31658 14.7071 7.70711L13.7071 8.70711C13.3166 9.09763 12.6834 9.09763 12.2929 8.70711C11.9024 8.31658 11.9024 7.68342 12.2929 7.29289L13.2929 6.29289C13.6834 5.90237 14.3166 5.90237 14.7071 6.29289ZM9.49984 10.5C9.49984 9.94774 9.94756 9.50002 10.4998 9.50002H10.5075C11.0597 9.50002 11.5075 9.94774 11.5075 10.5C11.5075 11.0523 11.0597 11.5 10.5075 11.5H10.4998C9.94756 11.5 9.49984 11.0523 9.49984 10.5ZM8.70711 12.2929C9.09763 12.6834 9.09763 13.3166 8.70711 13.7071L7.70711 14.7071C7.31658 15.0976 6.68342 15.0976 6.29289 14.7071C5.90237 14.3166 5.90237 13.6834 6.29289 13.2929L7.29289 12.2929C7.68342 11.9024 8.31658 11.9024 8.70711 12.2929ZM12.2929 12.2929C12.6834 11.9024 13.3166 11.9024 13.7071 12.2929L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L12.2929 13.7071C11.9024 13.3166 11.9024 12.6834 12.2929 12.2929Z',
  d8: 'M10.5 19H20.5C21.3284 19 22 19.6716 22 20.5C22 21.3284 21.3284 22 20.5 22H15',
  d9: 'M1.25 10.5C1.25 5.39137 5.39137 1.25 10.5 1.25C15.6086 1.25 19.75 5.39137 19.75 10.5C19.75 13.4196 18.3973 16.0234 16.2845 17.7186L20.25 17.7085C21.6307 17.7085 22.75 18.8371 22.75 20.2292C22.75 21.6214 21.6307 22.75 20.25 22.75H14.75V20.7334H20.25C20.5261 20.7334 20.75 20.5077 20.75 20.2292C20.75 19.9508 20.5261 19.7251 20.25 19.7251L10.5 19.75C5.39137 19.75 1.25 15.6086 1.25 10.5ZM9.41436 8.00015L7.00015 5.58594L5.58594 7.00015L8.00015 9.41436L9.41436 8.00015ZM13.0002 9.41436L15.4144 7.00015L14.0002 5.58594L11.5859 8.00015L13.0002 9.41436ZM11.5076 9.50018H9.49999V11.5002H11.5076V9.50018ZM7.00015 15.4144L9.41436 13.0002L8.00015 11.5859L5.58594 14.0002L7.00015 15.4144ZM15.4144 14.0002L13.0002 11.5859L11.5859 13.0002L14.0002 15.4144L15.4144 14.0002Z',
};

export const IconFilmRoll02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="film-roll-02-stroke-rounded IconFilmRoll02StrokeRounded"
    >
      <circle 
        cx="10.5" 
        cy="10.5" 
        r="8.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFilmRoll02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="film-roll-02-duotone-rounded IconFilmRoll02DuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="10.5" 
        cy="10.5" 
        r="8.5" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="10.5" 
        cy="10.5" 
        r="8.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFilmRoll02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="film-roll-02-twotone-rounded IconFilmRoll02TwotoneRounded"
    >
      <circle 
        cx="10.5" 
        cy="10.5" 
        r="8.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFilmRoll02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="film-roll-02-solid-rounded IconFilmRoll02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFilmRoll02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="film-roll-02-bulk-rounded IconFilmRoll02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
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

export const IconFilmRoll02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="film-roll-02-stroke-sharp IconFilmRoll02StrokeSharp"
    >
      <circle 
        cx="10.5" 
        cy="10.5" 
        r="8.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFilmRoll02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="film-roll-02-solid-sharp IconFilmRoll02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFilmRoll02: TheIconSelfPack = {
  name: 'FilmRoll02',
  StrokeRounded: IconFilmRoll02StrokeRounded,
  DuotoneRounded: IconFilmRoll02DuotoneRounded,
  TwotoneRounded: IconFilmRoll02TwotoneRounded,
  SolidRounded: IconFilmRoll02SolidRounded,
  BulkRounded: IconFilmRoll02BulkRounded,
  StrokeSharp: IconFilmRoll02StrokeSharp,
  SolidSharp: IconFilmRoll02SolidSharp,
};