import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19 21C20.7514 20.3192 22 19.0219 22 16.7771C22 13.0188 18.5 9 15 9C11.5 9 8 13.0188 8 16.7771C8 19.0219 9.24858 20.3192 11 21',
  d2: 'M16 9.00935C15.4708 5.45852 12.2544 2 9.03788 2C5.51894 2 2 6.13953 2 10.0107C2 13.61 5.04202 14.8444 8.29768 15',
  d3: 'M7.5 5L6.5 6',
  d4: 'M10.5 5L11.5 6',
  d5: 'M15 12C17 12 19 14.226 19 16.3077C19 17.5561 18.1523 18.2754 17.0951 18.6513C16.6449 18.8113 16.3021 19.2104 16.3021 19.6882V20.718C16.3021 21.426 15.7281 22 15.0201 22C14.312 22 13.7381 21.426 13.7381 20.718V19.6882C13.7381 19.2104 13.3955 18.8109 12.9447 18.6526C11.8758 18.2771 11 17.5575 11 16.3077C11 14.226 13 12 15 12Z',
  d6: 'M2 10.0107C2 6.13953 5.51894 2 9.03788 2C12.2544 2 15.4708 5.45852 16 9.00935V9.10629C15.6687 9.03667 15.3344 9 15 9C12.0516 9 9.10324 11.8519 8.24711 14.9975C5.01059 14.8315 2 13.5913 2 10.0107Z',
  d7: 'M22 16.7771C22 13.0188 18.5 9 15 9C11.5 9 8 13.0188 8 16.7771C8 19.0219 9.24858 20.3192 11 21H13.7692C13.7488 20.9093 13.7381 20.8149 13.7381 20.718V19.6882C13.7381 19.2104 13.3955 18.8109 12.9447 18.6526C11.8758 18.2771 11 17.5575 11 16.3077C11 14.226 13 12 15 12C17 12 19 14.226 19 16.3077C19 17.5561 18.1523 18.2754 17.0951 18.6513C16.6449 18.8113 16.3021 19.2104 16.3021 19.6882V20.718C16.3021 20.8149 16.2913 20.9093 16.271 21H19C20.7514 20.3192 22 19.0219 22 16.7771Z',
  d8: 'M18.9385 12.246C20.0871 13.5304 20.8125 15.1856 20.8125 16.7135C20.8125 17.6054 20.5677 18.247 20.1967 18.7269C19.8173 19.2175 19.2549 19.6039 18.524 19.8867C18.0253 20.0797 17.7782 20.6385 17.9721 21.1348C18.1659 21.6312 18.7273 21.8772 19.226 21.6842C20.1918 21.3105 21.0825 20.7432 21.7321 19.9031C22.39 19.0523 22.75 17.9862 22.75 16.7135C22.75 14.6175 21.7801 12.523 20.3857 10.9638C18.9974 9.41131 17.0587 8.25 15 8.25C12.9413 8.25 11.0026 9.41131 9.61429 10.9638C8.21993 12.523 7.25 14.6175 7.25 16.7135C7.25 17.9862 7.61001 19.0523 8.26792 19.9031C8.91748 20.7432 9.80821 21.3105 10.774 21.6842C11.2727 21.8772 11.8341 21.6312 12.0279 21.1348C12.2218 20.6385 11.9747 20.0797 11.476 19.8867C10.7451 19.6039 10.1827 19.2175 9.80332 18.7269C9.43227 18.247 9.1875 17.6054 9.1875 16.7135C9.1875 15.1856 9.91288 13.5304 11.0615 12.246C12.2161 10.9548 13.668 10.1785 15 10.1785C16.332 10.1785 17.7839 10.9548 18.9385 12.246Z',
  d9: 'M14.0644 3.65026C12.7016 2.24879 10.9115 1.25 9.03788 1.25C6.98988 1.25 5.04061 2.4419 3.63318 4.06175C2.21974 5.68853 1.25 7.8599 1.25 10.0107C1.25 12.0638 2.13807 13.5052 3.51207 14.4208C4.02809 14.7647 4.60473 15.0296 5.21616 15.2298C5.49515 15.3212 5.63465 15.3669 5.74999 15.3014C5.86534 15.236 5.90089 15.0788 5.97198 14.7643C6.38179 12.9516 7.32287 11.2756 8.49593 9.96386C10.0653 8.20894 12.3803 6.75 14.9998 6.75C15.0317 6.75 15.0635 6.75022 15.0953 6.75065C15.5969 6.75744 15.8477 6.76083 15.9366 6.61337C16.0255 6.46591 15.9179 6.26895 15.7029 5.87504C15.2568 5.05778 14.6981 4.30201 14.0644 3.65026ZM8.03099 5.12408C8.32388 4.83119 8.32388 4.35631 8.03099 4.06342C7.7381 3.77053 7.26322 3.77053 6.97033 4.06342L6.28608 4.74767C5.99318 5.04057 5.99318 5.51544 6.28608 5.80833C6.57897 6.10123 7.05384 6.10123 7.34674 5.80833L8.03099 5.12408ZM11.031 4.06342C10.7381 3.77053 10.2632 3.77053 9.97033 4.06342C9.67744 4.35631 9.67744 4.83119 9.97033 5.12408L10.6546 5.80833C10.9475 6.10123 11.4223 6.10123 11.7152 5.80833C12.0081 5.51544 12.0081 5.04057 11.7152 4.74767L11.031 4.06342Z',
  d10: 'M12.0452 13.2254C12.8 12.3866 13.8617 11.75 15 11.75C16.1383 11.75 17.2 12.3866 17.9548 13.2254C18.7123 14.0672 19.25 15.2089 19.25 16.3679C19.25 17.9176 18.1817 18.7602 17.0993 19.1529C16.9056 19.2232 16.8361 19.3666 16.8361 19.4544V20.8947C16.8361 21.9193 16.0221 22.75 15.018 22.75C14.0138 22.75 13.1999 21.9193 13.1999 20.8947V19.4544C13.1999 19.3661 13.1301 19.2236 12.9386 19.1549C11.8568 18.7671 10.75 17.9292 10.75 16.3679C10.75 15.2089 11.2877 14.0672 12.0452 13.2254Z',
  d11: 'M9.03788 1.25C10.9115 1.25 12.7016 2.24879 14.0644 3.65026C14.6981 4.30201 15.2568 5.05778 15.7029 5.87504C15.9179 6.26895 16.0255 6.46591 15.9366 6.61337C15.8477 6.76083 15.5969 6.75744 15.0953 6.75065C15.0635 6.75022 15.0317 6.75 14.9998 6.75C12.3803 6.75 10.0653 8.20894 8.49593 9.96386C7.32287 11.2756 6.38179 12.9516 5.97198 14.7643C5.90089 15.0788 5.86534 15.236 5.74999 15.3014C5.63465 15.3669 5.49515 15.3212 5.21616 15.2298C4.60473 15.0296 4.02809 14.7647 3.51207 14.4208C2.13807 13.5052 1.25 12.0638 1.25 10.0107C1.25 7.8599 2.21974 5.68853 3.63318 4.06175C5.04061 2.4419 6.98988 1.25 9.03788 1.25Z',
  d12: 'M8.03099 4.06342C8.32388 4.35631 8.32388 4.83119 8.03099 5.12408L7.34674 5.80833C7.05384 6.10123 6.57897 6.10123 6.28608 5.80833C5.99318 5.51544 5.99318 5.04057 6.28608 4.74767L6.97033 4.06342C7.26322 3.77053 7.7381 3.77053 8.03099 4.06342ZM9.97033 4.06342C10.2632 3.77053 10.7381 3.77053 11.031 4.06342L11.7152 4.74767C12.0081 5.04057 12.0081 5.51544 11.7152 5.80833C11.4223 6.10123 10.9475 6.10123 10.6546 5.80833L9.97033 5.12408C9.67744 4.83119 9.67744 4.35631 9.97033 4.06342Z',
  d13: 'M8 5L6.5 6.5',
  d14: 'M10 5L11.5 6.5',
  d15: 'M14.0644 3.65026C15.3404 4.96256 16.3123 6.69664 16.6732 8.50508C18.0737 8.92902 19.3619 9.84542 20.3723 10.9805C21.78 12.5619 22.7496 14.6771 22.7496 16.7771C22.7496 18.0476 22.3929 19.0982 21.7507 19.9325C21.1151 20.7584 20.238 21.3233 19.2714 21.699L18.7279 20.301C19.5127 19.9959 20.1356 19.5717 20.5621 19.0176C20.9821 18.4719 21.2496 17.7514 21.2496 16.7771C21.2496 15.1189 20.4693 13.3455 19.2519 11.9779C18.0299 10.605 16.4683 9.75 14.9996 9.75C13.5309 9.75 11.9694 10.605 10.7473 11.9779C9.52996 13.3455 8.74962 15.1189 8.74962 16.7771C8.74962 17.7514 9.01716 18.4719 9.43719 19.0176C9.86368 19.5717 10.4866 19.9959 11.2714 20.301L10.7279 21.699C9.76125 21.3233 8.88414 20.7584 8.24849 19.9325C7.60638 19.0982 7.24962 18.0476 7.24962 16.7771C7.24962 16.4094 7.27936 16.0412 7.33597 15.6754C5.95327 15.5189 4.59837 15.1447 3.51207 14.4208C2.13807 13.5052 1.25 12.0638 1.25 10.0107C1.25 7.8599 2.21975 5.68853 3.63318 4.06175C5.04061 2.4419 6.98988 1.25 9.03788 1.25C10.9115 1.25 12.7016 2.24879 14.0644 3.65026ZM5.96875 5.96973L7.46875 4.46973L8.52941 5.53039L7.02941 7.03039L5.96875 5.96973ZM10.5293 4.46973L12.0293 5.96973L10.9686 7.03039L9.46864 5.53039L10.5293 4.46973Z',
  d16: 'M11.6956 12.8659C12.5393 11.9472 13.7258 11.25 14.998 11.25C16.2703 11.25 17.4568 11.9472 18.3005 12.8659C19.1471 13.7878 19.748 15.0383 19.748 16.3077C19.748 18.005 18.5541 18.9279 17.3444 19.358C17.1279 19.4349 17.0501 19.592 17.0501 19.6882V20.718C17.0501 21.8402 16.1404 22.75 15.0181 22.75C13.8959 22.75 12.9861 21.8402 12.9861 20.718V19.6882C12.9861 19.5914 12.9082 19.4353 12.6942 19.3602C11.4851 18.9354 10.248 18.0177 10.248 16.3077C10.248 15.0383 10.849 13.7878 11.6956 12.8659Z',
};

export const IconMochiStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mochi-stroke-rounded IconMochiStrokeRounded"
    >
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMochiDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mochi-duotone-rounded IconMochiDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMochiTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mochi-twotone-rounded IconMochiTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMochiSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mochi-solid-rounded IconMochiSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMochiBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mochi-bulk-rounded IconMochiBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
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

export const IconMochiStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mochi-stroke-sharp IconMochiStrokeSharp"
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
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMochiSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mochi-solid-sharp IconMochiSolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfMochi: TheIconSelfPack = {
  name: 'Mochi',
  StrokeRounded: IconMochiStrokeRounded,
  DuotoneRounded: IconMochiDuotoneRounded,
  TwotoneRounded: IconMochiTwotoneRounded,
  SolidRounded: IconMochiSolidRounded,
  BulkRounded: IconMochiBulkRounded,
  StrokeSharp: IconMochiStrokeSharp,
  SolidSharp: IconMochiSolidSharp,
};