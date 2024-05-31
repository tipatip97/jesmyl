import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M2.5 14.5H3.03875C3.51106 14.5 3.74721 14.5 3.95256 14.4013C4.15791 14.3026 4.30544 14.1182 4.60049 13.7494L6 12L7.5 14.5L9 11L11.5 16L15 9L17 12.5L18.5 11L19.9453 13.168C20.1973 13.546 20.3233 13.735 20.5074 13.8494C20.544 13.8721 20.582 13.8925 20.6212 13.9103C20.8185 14 21.0457 14 21.5 14',
  d3: 'M15 2.5V5.5M15 21.5V14.5',
  d4: 'M15 2.5V5.5M15 21.5V13.5',
  d5: 'M14.25 2.54845C14.25 2.17525 14.25 1.98866 14.1335 1.87161C14.017 1.75457 13.8313 1.75372 13.4601 1.75202C13.0154 1.74999 12.5481 1.75 12.0572 1.75H11.9428C9.75213 1.74999 8.03144 1.74998 6.68803 1.93059C5.31137 2.11568 4.21912 2.50272 3.36092 3.36091C2.50272 4.21911 2.11569 5.31137 1.9306 6.68802C1.74998 8.03144 1.74999 9.75211 1.75 11.9428L1.75 12.0574C1.74999 12.3568 1.74998 12.6562 1.7505 12.9556C1.75115 13.3293 1.75148 13.5162 1.86859 13.6331C1.98571 13.75 2.17319 13.75 2.54814 13.75H3.03812C3.28679 13.75 3.42664 13.7494 3.531 13.7404C3.61296 13.7334 3.64116 13.7204 3.69881 13.6598C3.771 13.5839 3.85886 13.475 4.0142 13.2809L5.41372 11.5315C5.56712 11.3397 5.80468 11.2352 6.0497 11.2517C6.29471 11.2682 6.51614 11.4036 6.64249 11.6141L6.98532 12.1855C7.16146 12.4791 7.24953 12.6259 7.37161 12.6176C7.4937 12.6093 7.56112 12.452 7.69598 12.1373L8.31001 10.7046C8.42505 10.4361 8.68543 10.2589 8.97734 10.2503C9.26924 10.2417 9.53959 10.4034 9.67019 10.6646L11.1416 13.6074C11.2977 13.9196 11.3758 14.0757 11.4994 14.0757C11.623 14.0757 11.701 13.9196 11.8571 13.6074L13.4516 10.4186C13.519 10.2838 13.5583 10.217 13.5635 10.1476C13.5699 10.0634 13.526 9.97531 13.4212 9.75707C13.3111 9.52796 13.2494 9.27119 13.2494 9C13.2494 8.0335 14.0329 7.25 14.9994 7.25C15.9659 7.25 16.7494 8.0335 16.7494 9C16.7494 9.2367 16.7024 9.46242 16.6172 9.66835C16.5328 9.87249 16.4906 9.97455 16.495 10.044C16.4994 10.1134 16.5408 10.1858 16.6236 10.3307L16.9035 10.8206C17.0229 11.0295 17.0825 11.1339 17.1806 11.147C17.2786 11.1601 17.3636 11.0751 17.5337 10.905L17.969 10.4697C18.2985 10.1402 18.8649 10.1963 19.1234 10.584L20.5687 12.7519C20.7013 12.9508 20.7767 13.0629 20.8396 13.1424C20.8955 13.2132 20.9361 13.2341 21.0242 13.2412C21.1252 13.2494 21.2604 13.25 21.4994 13.25C21.5301 13.25 21.5625 13.2508 21.596 13.2517C21.7938 13.2567 22.0276 13.2626 22.158 13.1049C22.2498 12.994 22.2498 12.8296 22.2499 12.5006L22.25 11.9428C22.25 9.75214 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059C17.0815 1.8996 16.8398 1.87393 16.5866 1.85266C16.2012 1.82029 16.0085 1.8041 15.8793 1.92295C15.75 2.0418 15.75 2.24037 15.75 2.63751V5.5C15.75 5.91421 15.4142 6.25 15 6.25C14.5858 6.25 14.25 5.91421 14.25 5.5V2.54845Z',
  d6: 'M22.1439 14.8424C22.2324 14.934 22.2274 15.077 22.2174 15.3631C22.1922 16.0877 22.1479 16.7351 22.0703 17.3128C21.8852 18.6894 21.4982 19.7817 20.64 20.6399C19.7818 21.4981 18.6895 21.8851 17.3128 22.0702C17.0821 22.1012 16.8401 22.1269 16.5866 22.1482C16.2012 22.1806 16.0085 22.1967 15.8792 22.0779C15.75 21.959 15.75 21.7605 15.75 21.3633V16.5007C15.75 16.0865 15.4142 15.7507 15 15.7507C14.5858 15.7507 14.25 16.0865 14.25 16.5007V21.4523C14.25 21.8255 14.25 22.0121 14.1335 22.1292C14.017 22.2462 13.8313 22.2471 13.4601 22.2488C13.0156 22.2508 12.5486 22.2508 12.058 22.2508H11.9437C9.75297 22.2508 8.0323 22.2508 6.68889 22.0702C5.31223 21.8851 4.21998 21.4981 3.36178 20.6399C2.50358 19.7817 2.11655 18.6894 1.93146 17.3128C1.87237 16.8732 1.83261 16.3933 1.80586 15.8697C1.79114 15.5816 1.78378 15.4375 1.87248 15.3441C1.96118 15.2508 2.10744 15.2508 2.39996 15.2508C2.52455 15.2508 2.65344 15.2549 2.78447 15.2591C3.29203 15.2753 3.83166 15.2924 4.27769 15.0781C4.64283 14.9026 4.89521 14.585 5.12858 14.2913L5.55269 13.7608C5.71602 13.5566 5.79768 13.4546 5.90198 13.4616C6.00627 13.4686 6.07353 13.5807 6.20804 13.8049L6.85711 14.8867C7.00202 15.1282 7.27001 15.2681 7.55101 15.2491C7.83201 15.23 8.07864 15.0551 8.18959 14.7962L8.71286 13.5753C8.85964 13.2328 8.93303 13.0615 9.06068 13.0578C9.18833 13.054 9.27165 13.2207 9.43829 13.554L10.8294 16.3362C10.9565 16.5903 11.2162 16.7508 11.5002 16.7508C11.7843 16.7508 12.044 16.5903 12.1711 16.3362L14.6688 11.1856C14.8146 10.8848 14.8875 10.7345 15.0083 10.7305C15.129 10.7266 15.2115 10.8718 15.3764 11.1622C15.7189 11.7652 16.1942 12.602 16.349 12.8729C16.465 13.0759 16.669 13.2131 16.9007 13.2442C17.1324 13.2752 17.3653 13.1964 17.5306 13.0311L18.0386 12.523C18.1983 12.3634 18.2781 12.2836 18.3723 12.2929C18.4665 12.3023 18.5291 12.3962 18.6543 12.584C18.7538 12.7333 18.8527 12.8985 18.9547 13.0688C19.2734 13.6008 19.6221 14.1829 20.1118 14.4872C20.1758 14.527 20.2424 14.5626 20.311 14.5938C20.6729 14.7584 21.0756 14.755 21.4674 14.7517C21.5191 14.7513 21.5705 14.7508 21.6216 14.7508C21.9109 14.7508 22.0555 14.7508 22.1439 14.8424Z',
  d7: 'M21 3V21H3V3H21Z',
  d8: 'M3 14.5H4L6 12L7.5 14.5L9 11L11.5 16L15 9L17 12.5L18.5 11L20.5 14H21',
  d9: 'M15 3V5.5M15 21V14.5',
  d10: 'M14.25 5.5V2.25H3C2.58579 2.25 2.25 2.58579 2.25 3V13.75H3.63953L5.41435 11.5315C5.56775 11.3397 5.80532 11.2352 6.05033 11.2517C6.29535 11.2682 6.51678 11.4036 6.64312 11.6141L7.38845 12.8563L8.31064 10.7046C8.42568 10.4361 8.68606 10.2589 8.97797 10.2503C9.26988 10.2417 9.54022 10.4034 9.67082 10.6646L11.5 14.323L13.622 10.0789C13.389 9.78161 13.25 9.40703 13.25 9C13.25 8.0335 14.0335 7.25 15 7.25C15.9665 7.25 16.75 8.0335 16.75 9C16.75 9.37219 16.6338 9.71724 16.4357 10.0009L17.164 11.2753L17.9697 10.4697C18.1286 10.3108 18.3503 10.2315 18.5739 10.2537C18.7975 10.2758 18.9994 10.397 19.124 10.584L20.9014 13.25H21.75V3C21.75 2.58579 21.4142 2.25 21 2.25H15.75V5.5H14.25Z',
  d11: 'M21.75 14.75H20.5C20.2492 14.75 20.0151 14.6247 19.876 14.416L18.3834 12.1772L17.5303 13.0303C17.365 13.1956 17.1321 13.2744 16.9004 13.2434C16.6688 13.2123 16.4648 13.0751 16.3488 12.8721L15.1333 10.745C15.0893 10.7483 15.0449 10.75 15 10.75C14.9879 10.75 14.9758 10.7499 14.9637 10.7496L12.1708 16.3354C12.0438 16.5895 11.7841 16.75 11.5 16.75C11.2159 16.75 10.9562 16.5895 10.8292 16.3354L9.05236 12.7818L8.18936 14.7954C8.07841 15.0543 7.83178 15.2292 7.55078 15.2483C7.26978 15.2674 7.00179 15.1274 6.85688 14.8859L5.91183 13.3108L4.58565 14.9685C4.44332 15.1464 4.22784 15.25 4 15.25H2.25V21C2.25 21.4142 2.58579 21.75 3 21.75H14.25V14.5H15.75V21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V14.75Z',
} as const;

export const IconAppleStocksStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-stocks-stroke-rounded IconAppleStocksStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="15" 
        cy="9" 
        r="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconAppleStocksDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-stocks-duotone-rounded IconAppleStocksDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="15" 
        cy="9" 
        r="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconAppleStocksTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-stocks-twotone-rounded IconAppleStocksTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="15" 
        cy="9" 
        r="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconAppleStocksSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-stocks-solid-rounded IconAppleStocksSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAppleStocksBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-stocks-bulk-rounded IconAppleStocksBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAppleStocksStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-stocks-stroke-sharp IconAppleStocksStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
      <circle 
        cx="15" 
        cy="9" 
        r="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconAppleStocksSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-stocks-solid-sharp IconAppleStocksSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAppleStocks: TheIconSelfPack = {
  name: 'AppleStocks',
  StrokeRounded: IconAppleStocksStrokeRounded,
  DuotoneRounded: IconAppleStocksDuotoneRounded,
  TwotoneRounded: IconAppleStocksTwotoneRounded,
  SolidRounded: IconAppleStocksSolidRounded,
  BulkRounded: IconAppleStocksBulkRounded,
  StrokeSharp: IconAppleStocksStrokeSharp,
  SolidSharp: IconAppleStocksSolidSharp,
};