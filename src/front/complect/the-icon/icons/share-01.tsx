import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.3927 8.03168L18.6457 6.51461C17.3871 5.42153 16.8937 4.83352 16.2121 5.04139C15.3622 5.30059 15.642 6.93609 15.642 7.48824C14.3206 7.48824 12.9468 7.38661 11.6443 7.59836C7.34453 8.29742 6 11.3566 6 14.6525C7.21697 13.9065 8.43274 13.0746 9.8954 12.7289C11.7212 12.2973 13.7603 12.5032 15.642 12.5032C15.642 13.0554 15.3622 14.6909 16.2121 14.9501C16.9844 15.1856 17.3871 14.5699 18.6457 13.4769L20.3927 11.9598C21.4642 11.0293 22 10.564 22 9.99574C22 9.4275 21.4642 8.96223 20.3927 8.03168Z',
  d2: 'M10.5676 3C6.70735 3.00694 4.68594 3.10152 3.39411 4.39073C2 5.78202 2 8.02125 2 12.4997C2 16.9782 2 19.2174 3.3941 20.6087C4.78821 22 7.03198 22 11.5195 22C16.0071 22 18.2509 22 19.645 20.6087C20.6156 19.64 20.9104 18.2603 21 16',
  d3: 'M3.39124 4.39124C2 5.78249 2 8.02166 2 12.5C2 16.9783 2 19.2175 3.39124 20.6088C4.78249 22 7.02166 22 11.5 22C15.9783 22 18.2175 22 19.6088 20.6088C21 19.2175 21 16.9783 21 12.5C21 12.1274 21 11.7702 20.9992 11.4278C20.8209 11.588 20.6187 11.7635 20.3927 11.9598L18.6457 13.4769C18.3862 13.7023 18.163 13.9074 17.9655 14.0889C17.2053 14.7877 16.8252 15.137 16.2121 14.9501C15.505 14.7345 15.5798 13.5662 15.625 12.8617C15.6341 12.7194 15.642 12.596 15.642 12.5032C15.1865 12.5032 14.7217 12.4912 14.253 12.479C12.7856 12.4409 11.2792 12.4018 9.8954 12.7289C8.60723 13.0334 7.51056 13.715 6.43591 14.3829C6.29034 14.4733 6.14518 14.5635 6 14.6525C6 11.3566 7.34453 8.29741 11.6443 7.59836C12.6292 7.43825 13.6547 7.4573 14.6676 7.47612C14.9943 7.48219 15.3197 7.48824 15.642 7.48824C15.642 7.39544 15.6341 7.27205 15.625 7.12973C15.5798 6.42523 15.505 5.25703 16.2121 5.04139C16.7883 4.86564 17.2301 5.25879 18.1135 6.04509C18.275 6.18881 18.4512 6.34568 18.6457 6.51461L20.3927 8.03168C20.593 8.20561 20.7745 8.36329 20.9374 8.50842C20.824 6.53597 20.5051 5.28761 19.6088 4.39124C18.2175 3 15.9783 3 11.5 3C7.02166 3 4.78249 3 3.39124 4.39124Z',
  d4: 'M20.9227 7.50072C21.4258 7.93777 21.8594 8.31445 22.1606 8.6561C22.4781 9.01613 22.75 9.44718 22.75 9.99908C22.75 10.551 22.4781 10.982 22.1606 11.3421C21.8593 11.6837 21.4258 12.0604 20.9227 12.4974L20.9227 12.4974L19.1375 14.0484C18.6544 14.4682 18.2073 14.9413 17.6913 15.3215C17.1892 15.6914 16.6041 15.8599 15.9933 15.6736C15.5284 15.5317 15.2444 15.1985 15.0857 14.8609C14.9357 14.5416 14.8812 14.19 14.8602 13.8949C14.8443 13.6713 14.8459 13.4484 14.8532 13.2487C14.6476 13.2444 14.4421 13.2391 14.238 13.2338L14.2372 13.2337L14.224 13.2334C13.7326 13.2206 13.2412 13.2079 12.7497 13.2091C11.7987 13.2115 10.8988 13.2673 10.0679 13.4638C8.75165 13.7751 7.659 14.5208 6.39197 15.2979C6.16051 15.4398 5.87046 15.4455 5.63358 15.3128C5.39671 15.1801 5.25 14.9297 5.25 14.6581C5.25 12.9181 5.60328 11.1609 6.59273 9.72845C7.59733 8.27401 9.20037 7.23784 11.524 6.8599C12.6241 6.68095 13.7938 6.7109 14.8525 6.73058C14.8458 6.53581 14.8448 6.3198 14.8602 6.1032C14.8812 5.80812 14.9357 5.45651 15.0857 5.13727C15.2444 4.79964 15.5284 4.46645 15.9933 4.3246C16.6516 4.12374 17.1904 4.35788 17.6443 4.67769C18.0515 4.96454 18.5558 5.4443 19.1375 5.9497L20.9227 7.50071L20.9227 7.50072Z',
  d5: 'M11.5676 2.9982C11.5686 3.55049 11.1217 3.99901 10.5694 4C8.62278 4.0035 7.23416 4.03097 6.17716 4.20171C5.14922 4.36776 4.54646 4.6535 4.1005 5.09856C3.62057 5.57751 3.32459 6.23878 3.16531 7.42105C3.00213 8.63229 3 10.2322 3 12.4997C3 14.7673 3.00213 16.3672 3.16531 17.5784C3.32458 18.7607 3.62057 19.4219 4.10049 19.9009C4.5807 20.3801 5.24413 20.6759 6.42976 20.835C7.64395 20.9979 9.24755 21 11.5195 21C13.7915 21 15.3951 20.9979 16.6093 20.835C17.7949 20.6759 18.4584 20.3801 18.9386 19.9009C19.6121 19.2287 19.9116 18.2125 20.0008 15.9604C20.0227 15.4086 20.4877 14.9789 21.0396 15.0008C21.5914 15.0226 22.0211 15.4877 21.9992 16.0396C21.9093 18.3081 21.6191 20.0514 20.3514 21.3165C19.4375 22.2286 18.2819 22.6285 16.8753 22.8172C15.5126 23 13.7746 23 11.5939 23H11.4452C9.26452 23 7.52646 23 6.16379 22.8172C4.75712 22.6285 3.60161 22.2286 2.68771 21.3165C1.77353 20.4042 1.37247 19.2502 1.18322 17.8454C0.999957 16.4851 0.999976 14.7502 1 12.5743V12.4251C0.999977 10.2492 0.999959 8.51432 1.18322 7.15402C1.37247 5.74923 1.77354 4.59524 2.68772 3.68291C3.53359 2.83875 4.58744 2.43259 5.85822 2.22731C7.09995 2.02672 8.65215 2.00344 10.5658 2C11.1181 1.99901 11.5666 2.44592 11.5676 2.9982Z',
  d6: 'M12 3H3V21H21V15',
  d7: 'M14.9957 5.01726V7.96194H12.8224C10.6458 7.96194 8.84654 8.63306 7.7436 10.4687C6.93852 11.7233 6.98817 13.0603 6.98828 15.5579C6.98828 15.5625 6.99208 15.5663 6.99671 15.5664C7.02022 15.5668 7.02717 15.5701 7.03235 15.5664C8.41104 14.5813 10.0073 13.0393 13.1697 13.0393C13.8498 13.0393 13.0786 13.0393 14.9957 13.0393V15.9739C14.9957 15.9813 15.0046 15.9852 15.0101 15.9801L20.9973 10.5039C21.0009 10.5006 21.0009 10.4949 20.9973 10.4915L15.0101 5.01107C15.0046 5.00604 14.9957 5.00988 14.9957 5.01726Z',
  d8: 'M14.6979 4.31357C14.97 4.19377 15.2873 4.24609 15.5066 4.44693L21.5066 9.94226C21.6616 10.0843 21.7499 10.2848 21.75 10.495C21.7501 10.7053 21.6619 10.9059 21.507 11.048L15.507 16.5527C15.2878 16.7538 14.9705 16.8063 14.6981 16.6866C14.4258 16.5669 14.25 16.2975 14.25 16V13.7893C12.6732 13.7938 11.8883 13.8246 11.1493 14.0281C10.9847 14.0734 10.8222 14.1249 10.6621 14.1827C9.83926 14.4792 9.11202 14.9906 7.43579 16.1873C7.20716 16.3505 6.9065 16.3723 6.65674 16.2437C6.40698 16.1152 6.25 15.8578 6.25 15.5769V15.5477V15.5477C6.25 14.3897 6.24999 13.4803 6.30267 12.7454C6.35632 11.9969 6.46735 11.373 6.71826 10.7964C7.34195 9.36306 8.53285 8.23561 10.0172 7.65032C10.6104 7.41645 11.2534 7.31211 12.0332 7.26145C12.6425 7.22188 13.3674 7.21369 14.25 7.21199V5.00002C14.25 4.70265 14.4257 4.43336 14.6979 4.31357Z',
  d9: 'M2 3C2 2.44772 2.44772 2 3 2H12V4H4V20H20V15H22V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V3Z',
} as const;

export const IconShare01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-01-stroke-rounded IconShare01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconShare01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-01-duotone-rounded IconShare01DuotoneRounded"
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
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const IconShare01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-01-twotone-rounded IconShare01TwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShare01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-01-solid-rounded IconShare01SolidRounded"
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

export const IconShare01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-01-bulk-rounded IconShare01BulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShare01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-01-stroke-sharp IconShare01StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShare01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-01-solid-sharp IconShare01SolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfShare01: TheIconSelfPack = {
  name: 'Share01',
  StrokeRounded: IconShare01StrokeRounded,
  DuotoneRounded: IconShare01DuotoneRounded,
  TwotoneRounded: IconShare01TwotoneRounded,
  SolidRounded: IconShare01SolidRounded,
  BulkRounded: IconShare01BulkRounded,
  StrokeSharp: IconShare01StrokeSharp,
  SolidSharp: IconShare01SolidSharp,
};