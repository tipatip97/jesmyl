import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 19.6581V15.0065C2.5 14.2973 2.5 13.9426 2.6313 13.9033C2.76259 13.8639 2.9637 14.1693 3.36592 14.7799C4.75816 16.8937 7.10621 19.2417 9.21998 20.634C9.83065 21.0362 10.136 21.2373 10.0966 21.3686C10.0573 21.4999 9.70263 21.4999 8.99336 21.4999H4.34177C3.47355 21.4999 3.03944 21.4999 2.76972 21.2302C2.5 20.9605 2.5 20.5264 2.5 19.6581Z',
  d2: 'M21.5004 4.34177V8.99336C21.5004 9.70263 21.5004 10.0573 21.3691 10.0966C21.2378 10.136 21.0367 9.83065 20.6345 9.21998C19.2422 7.10621 16.8942 4.75816 14.7804 3.36592C14.1697 2.9637 13.8644 2.76259 13.9038 2.6313C13.9431 2.5 14.2978 2.5 15.007 2.5H19.6586C20.5268 2.5 20.9609 2.5 21.2307 2.76972C21.5004 3.03944 21.5004 3.47355 21.5004 4.34177Z',
  d3: 'M2.5 4.4V6.62599C2.5 7.40261 2.5 7.79093 2.64463 8.14009C2.78926 8.48926 3.06384 8.76384 3.61299 9.31299L14.687 20.387C15.2362 20.9362 15.5107 21.2107 15.8599 21.3554C16.2091 21.5 16.5974 21.5 17.374 21.5H19.6C20.4957 21.5 20.9435 21.5 21.2218 21.2218C21.5 20.9435 21.5 20.4957 21.5 19.6V17.374C21.5 16.5974 21.5 16.2091 21.3554 15.8599C21.2107 15.5107 20.9362 15.2362 20.387 14.687L9.31299 3.61299C8.76384 3.06384 8.48926 2.78926 8.14009 2.64463C7.79093 2.5 7.40261 2.5 6.62599 2.5H4.4C3.50433 2.5 3.0565 2.5 2.77825 2.77825C2.5 3.0565 2.5 3.50433 2.5 4.4Z',
  d4: 'M2.5 19.6825V15.0921C2.5 14.3921 2.5 14.0422 2.62957 14.0033C2.75914 13.9645 2.9576 14.2658 3.35452 14.8684C4.72845 16.9544 7.0456 19.2716 9.13156 20.6455C9.73419 21.0424 10.0355 21.2409 9.99667 21.3704C9.95783 21.5 9.60786 21.5 8.90792 21.5H4.31753C3.46074 21.5 3.03234 21.5 2.76617 21.2338C2.5 20.9677 2.5 20.5393 2.5 19.6825Z',
  d5: 'M21.5 4.31753V8.90792C21.5 9.60786 21.5 9.95783 21.3704 9.99667C21.2409 10.0355 21.0424 9.73419 20.6455 9.13156C19.2716 7.0456 16.9544 4.72845 14.8684 3.35452C14.2658 2.9576 13.9645 2.75914 14.0033 2.62957C14.0422 2.5 14.3921 2.5 15.0921 2.5H19.6825C20.5393 2.5 20.9677 2.5 21.2338 2.76617C21.5 3.03234 21.5 3.46074 21.5 4.31753Z',
  d6: 'M2.5 19.6567V15.0051C2.5 14.2958 2.5 13.9412 2.6313 13.9018C2.76259 13.8625 2.9637 14.1678 3.36592 14.7785C4.75816 16.8922 7.10621 19.2403 9.21998 20.6325C9.83065 21.0347 10.136 21.2358 10.0966 21.3671C10.0573 21.4984 9.70263 21.4984 8.99336 21.4984H4.34177C3.47355 21.4984 3.03944 21.4984 2.76972 21.2287C2.5 20.959 2.5 20.5249 2.5 19.6567Z',
  d7: 'M21.4984 4.34177V8.99336C21.4984 9.70263 21.4984 10.0573 21.3671 10.0966C21.2358 10.136 21.0347 9.83065 20.6325 9.21998C19.2403 7.10621 16.8922 4.75816 14.7785 3.36592C14.1678 2.9637 13.8625 2.76259 13.9018 2.6313C13.9412 2.5 14.2958 2.5 15.0051 2.5H19.6567C20.5249 2.5 20.959 2.5 21.2287 2.76972C21.4984 3.03944 21.4984 3.47355 21.4984 4.34177Z',
  d8: 'M3.94793 14.4254L3.96728 14.4548C5.28871 16.461 7.53881 18.7111 9.54507 20.0326L9.57445 20.0519L9.57447 20.0519C9.85116 20.2341 10.1001 20.3981 10.272 20.5342C10.3579 20.6022 10.4723 20.6996 10.5637 20.8217C10.6466 20.9324 10.8257 21.2205 10.7145 21.5914C10.6058 21.9542 10.3086 22.099 10.1733 22.1491C10.0295 22.2023 9.88069 22.2211 9.77346 22.2308C9.55948 22.25 9.26862 22.25 8.94857 22.25L4.31291 22.25L4.2697 22.25C3.87774 22.2501 3.5128 22.2501 3.21482 22.21C2.88458 22.1656 2.52797 22.0602 2.23382 21.766C1.93968 21.4719 1.83421 21.1153 1.78981 20.785C1.74975 20.487 1.7498 20.1221 1.74985 19.7301L1.74986 19.6869V15.0869L1.74985 15.0513C1.74983 14.7312 1.7498 14.4404 1.76907 14.2264C1.77873 14.1192 1.79753 13.9704 1.85078 13.8265C1.90087 13.6913 2.04566 13.3941 2.40844 13.2854C2.77931 13.1742 3.0674 13.3532 3.17816 13.4361C3.30025 13.5275 3.39767 13.642 3.46568 13.7279C3.60177 13.8998 3.76571 14.1487 3.94793 14.4254Z',
  d9: 'M20.7849 1.78996C21.1151 1.83436 21.4717 1.93983 21.7659 2.23398C22.06 2.52812 22.1655 2.88473 22.2099 3.21497C22.2499 3.51295 22.2499 3.87789 22.2498 4.26986L22.2498 4.31306L22.2498 8.94872C22.2499 9.26877 22.2499 9.55963 22.2306 9.77362C22.221 9.88084 22.2022 10.0296 22.1489 10.1735C22.0988 10.3087 21.954 10.6059 21.5913 10.7146C21.2204 10.8258 20.9323 10.6468 20.8215 10.5639C20.6994 10.4725 20.602 10.358 20.534 10.2721C20.3979 10.1002 20.234 9.85131 20.0518 9.57462L20.0518 9.5746L20.0324 9.54522C18.711 7.53896 16.4609 5.28886 14.4546 3.96743L14.4253 3.94808C14.1485 3.76586 13.8996 3.60192 13.7277 3.46583C13.6418 3.39782 13.5274 3.3004 13.436 3.17831C13.3531 3.06755 13.174 2.77946 13.2852 2.40859C13.3939 2.04581 13.6911 1.90103 13.8264 1.85094C13.9702 1.79768 14.119 1.77888 14.2262 1.76923C14.4402 1.74996 14.7311 1.74998 15.0511 1.75001L15.0867 1.75001H19.6868L19.73 1.75C20.1219 1.74995 20.4869 1.7499 20.7849 1.78996Z',
  d10: 'M6.74392 1.75008C7.40427 1.74939 7.93692 1.74883 8.42711 1.95188C8.91731 2.15492 9.29356 2.53196 9.76 2.99938L9.84333 3.08282L20.9173 14.1568L21.0008 14.2402C21.4682 14.7066 21.8452 15.0829 22.0483 15.5731C22.2513 16.0632 22.2508 16.5959 22.2501 17.2562L22.25 17.3742L22.25 19.6442C22.2501 20.054 22.2501 20.4333 22.2085 20.7425C22.1626 21.0844 22.0538 21.4505 21.7521 21.7522C21.4504 22.0539 21.0842 22.1627 20.7424 22.2087C20.4331 22.2503 20.0539 22.2502 19.6441 22.2502L17.374 22.2502L17.2561 22.2502C16.5957 22.2509 16.0631 22.2515 15.5729 22.0484C15.0827 21.8454 14.7065 21.4684 14.24 21.0009L14.1567 20.9175L3.08267 9.84348L2.99923 9.76015C2.53181 9.29371 2.15477 8.91746 1.95173 8.42727C1.74868 7.93707 1.74924 7.40442 1.74993 6.74408L1.75001 6.62615V4.40016L1.75 4.35608L1.75 4.35607C1.74995 3.94631 1.7499 3.56704 1.79148 3.25782C1.83744 2.91595 1.94623 2.54978 2.24793 2.24808C2.54963 1.94638 2.9158 1.83759 3.25766 1.79163C3.56689 1.75005 3.94615 1.7501 4.35592 1.75016L4.35592 1.75016L4.40001 1.75016H6.626L6.74392 1.75008Z',
  d11: 'M13.5 2.5H21.5008V10.5L13.5 2.5Z',
  d12: 'M10.5011 21.5H2.50037V13.5L10.5011 21.5Z',
  d13: 'M21.5 21.5V15.5L8.5 2.5H2.5V8.5L15.5 21.5H21.5Z',
  d14: 'M11.6892 1.75H22.2508V12.3105L11.6892 1.75Z',
  d15: 'M12.3119 22.25H1.75036V11.6895L12.3119 22.25Z',
  d16: 'M1.75 1.75H8.81066L22.25 15.1893V22.25H15.1893L1.75 8.81066V1.75Z',
};

export const IconAppleNewsStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-news-stroke-rounded IconAppleNewsStrokeRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAppleNewsDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-news-duotone-rounded IconAppleNewsDuotoneRounded"
    >
      <path 
        d={d.d4} 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAppleNewsTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-news-twotone-rounded IconAppleNewsTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAppleNewsSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-news-solid-rounded IconAppleNewsSolidRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconAppleNewsBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-news-bulk-rounded IconAppleNewsBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconAppleNewsStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-news-stroke-sharp IconAppleNewsStrokeSharp"
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
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAppleNewsSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-news-solid-sharp IconAppleNewsSolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfAppleNews: TheIconSelfPack = {
  name: 'AppleNews',
  StrokeRounded: IconAppleNewsStrokeRounded,
  DuotoneRounded: IconAppleNewsDuotoneRounded,
  TwotoneRounded: IconAppleNewsTwotoneRounded,
  SolidRounded: IconAppleNewsSolidRounded,
  BulkRounded: IconAppleNewsBulkRounded,
  StrokeSharp: IconAppleNewsStrokeSharp,
  SolidSharp: IconAppleNewsSolidSharp,
};