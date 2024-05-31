import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.9915 21C13.7121 21 13.9925 20.9956 13.9925 20.9956C17.4088 20.971 19.2922 20.8099 20.5342 19.7552C22 18.5104 22 16.5069 22 12.5C22 11.1094 22 9.96004 21.9387 9M11.9906 4C7.27213 4 4.91289 4 3.44705 5.2448C2.32426 6.19827 2.0615 7.59687 2 10',
  d2: 'M14 7C14 7 15 7 16 9C16 9 19.1765 4 22 3',
  d3: 'M2.98242 20H2.9914',
  d4: 'M2 16.2349C4.49328 16.2349 6.77053 18.5 6.77053 20.9996M10 20.9996C10 16.5 5.99511 13 2.04522 13',
  d5: 'M20.5348 19.7552C22.0006 18.5104 22.0006 16.5069 22.0006 12.5C22.0006 8.49306 22.0006 6.48959 20.5348 5.2448C19.0689 4 16.7097 4 11.9912 4C7.27276 4 4.91352 4 3.44768 5.2448C2.32489 6.19827 2.06212 7.59687 2.00062 10L1.99833 12.9909C1.99542 16.7661 1.99397 18.6536 3.16625 19.8264C4.33854 20.9991 6.22612 20.9984 10.0013 20.997L13.9931 20.9956C17.4094 20.971 19.2928 20.8099 20.5348 19.7552Z',
  d6: 'M22.6917 2.91643C22.876 3.43702 22.6035 4.00852 22.0829 4.1929C21.5492 4.3819 20.9328 4.78876 20.2797 5.36148C19.637 5.92513 19.0118 6.60205 18.4581 7.26586C17.9062 7.92736 17.4375 8.56109 17.1064 9.03008C16.9413 9.26407 16.6811 9.65443 16.5931 9.78651C16.3998 10.0906 16.0577 10.2674 15.6979 10.249C15.3379 10.2305 15.0158 10.0198 14.8546 9.69749C14.4139 8.81612 14.0186 8.46517 13.8193 8.33232C13.735 8.27611 13.678 8.25359 13.6554 8.24595C13.147 8.19874 12.749 7.77099 12.749 7.25027C12.749 6.69799 13.1967 6.25027 13.749 6.25027C14.2617 6.25027 14.6543 6.48529 14.9287 6.66822C15.203 6.85107 15.4907 7.10384 15.7794 7.4497C16.0946 7.01895 16.483 6.51128 16.9223 5.98468C17.5156 5.27349 18.214 4.51292 18.961 3.85781C19.6976 3.21179 20.5371 2.61865 21.4152 2.30765C21.9358 2.12327 22.5073 2.39583 22.6917 2.91643Z',
  d7: 'M11.0163 5.19739C9.18623 5.2003 7.81437 5.21925 6.73454 5.34208C5.48503 5.48422 4.77578 5.7525 4.27359 6.1774C3.54072 6.79747 3.20423 7.61737 3.20423 9.5855C3.19042 10.1231 2.74183 10.5477 2.20228 10.534C1.66272 10.5202 1.23652 10.0733 1.25033 9.53569C1.25033 7.70945 1.54676 5.92973 3.00843 4.69304C3.93877 3.90589 5.09859 3.56816 6.51283 3.40728C7.69455 3.27286 9.20339 3.25294 11.0165 3.25C11.5542 3.24913 11.9904 3.68542 11.9904 4.22317C11.9904 4.76093 11.554 5.19653 11.0163 5.19739Z',
  d8: 'M22.7496 12.4995C22.7496 14.3802 22.7496 15.9894 22.5585 17.1924C22.3571 18.4594 21.9258 19.4993 20.9723 20.306C20.1841 20.9728 19.2317 21.3168 18.1005 21.5042C16.9868 21.6888 15.6221 21.7331 13.9575 21.7451C13.7985 21.7462 13.759 21.7495 13.4049 21.7495C12.8652 21.7495 12.4276 21.3136 12.4276 20.7758C12.4276 20.2381 12.8652 19.8021 13.4049 19.8021C13.755 19.8021 13.7857 19.7989 13.9397 19.7978C15.6122 19.7858 16.8358 19.7397 17.7798 19.5833C18.7069 19.4296 19.2816 19.1816 19.7072 18.8216C20.1863 18.4162 20.4712 17.8747 20.628 16.8879C20.7922 15.8547 20.795 14.4825 20.795 12.4995C20.795 11.0816 20.7934 9.976 20.7324 9.08328C20.6956 8.54442 21.0604 8.04279 21.594 7.95864C22.1266 7.87461 22.6265 8.23845 22.6682 8.77609C22.7494 9.82573 22.7496 11.086 22.7496 12.4995Z',
  d9: 'M1.25 20.7991C1.25 20.2744 1.67493 19.8491 2.19912 19.8491H2.20764C2.73182 19.8491 3.15676 20.2744 3.15676 20.7991C3.15676 21.3238 2.73182 21.7491 2.20764 21.7491H2.19912C1.67493 21.7491 1.25 21.3238 1.25 20.7991Z',
  d10: 'M1.30175 13.2C1.30175 12.6753 1.72668 12.25 2.25087 12.25C6.48852 12.25 10.75 15.9657 10.75 20.7999C10.75 21.3246 10.3251 21.7499 9.80088 21.7499C9.2767 21.7499 8.85177 21.3246 8.85177 20.7999C8.85177 17.0846 5.51103 14.1501 2.25087 14.1501C1.72668 14.1501 1.30175 13.7247 1.30175 13.2ZM1.31934 16.6418C1.41978 16.1269 1.91826 15.7909 2.43273 15.8914C4.71641 16.3377 6.6405 18.3429 6.92317 20.686C6.98601 21.2069 6.61509 21.6802 6.09468 21.7431C5.57428 21.806 5.10147 21.4347 5.03863 20.9138C4.85742 19.4117 3.56772 18.0492 2.069 17.7563C1.55453 17.6557 1.2189 17.1568 1.31934 16.6418Z',
  d11: 'M14 7L16 9L22 3',
  d12: 'M12.5 20H22V8M3 10.5V5H12',
  d13: 'M22.5002 3.91421L15.793 10.6213L13.0859 7.91421L14.5002 6.5L15.793 7.79289L21.0859 2.5L22.5002 3.91421Z',
  d14: 'M1.5 5.5C1.5 4.94772 1.94772 4.5 2.5 4.5H11.5V6.5H3.5V11H1.5V5.5Z',
  d15: 'M22.5 20.5C22.5 21.0523 22.0523 21.5 21.5 21.5H12V19.5H20.5V9.5H22.5V20.5Z',
  d16: 'M1.54522 14.5C4.98016 14.5 8.5 17.5889 8.5 21.4996H10.5C10.5 16.4111 6.01006 12.5 1.54522 12.5V14.5Z',
  d17: 'M1.5 17.7349C3.4434 17.7349 5.27053 19.5547 5.27053 21.4996H7.27053C7.27053 18.4453 4.54316 15.7349 1.5 15.7349V17.7349Z',
  d18: 'M2.49553 19.5C1.94571 19.5 1.5 19.9477 1.5 20.5C1.5 21.0523 1.94571 21.5 2.49553 21.5H2.50447C3.05429 21.5 3.5 21.0523 3.5 20.5C3.5 19.9477 3.05429 19.5 2.50447 19.5H2.49553Z',
} as const;

export const IconRssConnected01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rss-connected-01-stroke-rounded IconRssConnected01StrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRssConnected01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rss-connected-01-duotone-rounded IconRssConnected01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRssConnected01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rss-connected-01-twotone-rounded IconRssConnected01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconRssConnected01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rss-connected-01-solid-rounded IconRssConnected01SolidRounded"
    >
      <path 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRssConnected01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rss-connected-01-bulk-rounded IconRssConnected01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <g 
        opacity="var(--icon-opacity)">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconRssConnected01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rss-connected-01-stroke-sharp IconRssConnected01StrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconRssConnected01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rss-connected-01-solid-sharp IconRssConnected01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
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
    </TheIconWrapper>
  );
};

export const iconPackOfRssConnected01: TheIconSelfPack = {
  name: 'RssConnected01',
  StrokeRounded: IconRssConnected01StrokeRounded,
  DuotoneRounded: IconRssConnected01DuotoneRounded,
  TwotoneRounded: IconRssConnected01TwotoneRounded,
  SolidRounded: IconRssConnected01SolidRounded,
  BulkRounded: IconRssConnected01BulkRounded,
  StrokeSharp: IconRssConnected01StrokeSharp,
  SolidSharp: IconRssConnected01SolidSharp,
};