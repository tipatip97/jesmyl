import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 8.83422H2.94868C3.59418 8.83422 4.22251 8.62547 4.74055 8.23892L9.64341 4.58048C10.2089 4.15855 10.9104 3.82155 11.5581 4.10011C12.6065 4.55106 13.2876 5.8233 11.7157 7.38052L10.0063 8.9781L20.4294 8.9781C22.4726 9.03433 22.5739 12.3231 20.4294 12.4638H14.4894C14.6805 13.9441 13.6371 20.9177 9.21687 19.9012C9.00686 19.853 8.79375 19.8048 8.58346 19.7577C7.6647 19.552 6.02726 18.944 5.06998 18.2735C4.07344 17.5756 3.08083 17.8219 2 17.8219',
  d2: 'M6.31081 18.9985C7.78747 19.7056 10.6774 20.6732 12.0382 19.3211C14.1833 17.1895 14.576 14.2082 14.5 12.5H20.25C21.2165 12.5 22 11.7165 22 10.75C22 9.7835 21.2165 9 20.25 9H10L12.3287 6.78341C12.9689 6.05938 12.8628 4.96519 12.0947 4.36948C11.4556 3.87385 10.5466 3.87719 9.91137 4.37749L5.57638 7.65863C4.82117 8.23025 4.44353 8.51608 4.00268 8.6732C3.96356 8.68714 3.92415 8.70028 3.88447 8.71263C3.43724 8.85181 2.95816 8.85181 2 8.85181V17.8919H3.61802C4.54364 17.8919 5.51198 18.6159 6.31081 18.9985Z',
  d3: 'M2 8.83397H2.94868C3.59418 8.83397 4.22251 8.62522 4.74055 8.23867L9.64341 4.58023C10.2089 4.1583 10.9104 3.8213 11.5581 4.09986C12.6065 4.55081 13.2876 5.82305 11.7157 7.38027L10.0063 8.97785H20.4294C22.4726 9.03408 22.5739 12.3229 20.4294 12.4636H14.4894C14.6805 13.9439 13.6371 20.9175 9.21687 19.901C9.00686 19.8528 8.79375 19.8046 8.58346 19.7575C7.6647 19.5518 6.02726 18.9438 5.06998 18.2733C4.07344 17.5754 3.08083 17.8217 2 17.8217',
  d4: 'M20.4294 8.97803C22.4726 9.03426 22.5739 12.323 20.4294 12.4637H14.4894C14.6805 13.944 13.6371 20.9176 9.21687 19.9011C9.00686 19.8529 8.79375 19.8047 8.58346 19.7576C7.6647 19.5519 6.02726 18.9439 5.06998 18.2734C4.07344 17.5755 3.08083 17.8218 2 17.8218',
  d5: 'M2 8.83422H2.94868C3.59418 8.83422 4.22251 8.62547 4.74055 8.23892L9.64341 4.58048C10.2089 4.15855 10.9104 3.82155 11.5581 4.10011C12.6065 4.55106 13.2876 5.8233 11.7157 7.38052L10.0063 8.9781H20.4294C22.4726 9.03433 22.5739 12.3231 20.4294 12.4638H14.4894C14.6805 13.9441 13.6371 20.9177 9.21687 19.9012C9.00686 19.853 8.79375 19.8048 8.58346 19.7577C7.6647 19.552 6.02726 18.944 5.06998 18.2735C4.07344 17.5756 3.08083 17.8219 2 17.8219',
  d6: 'M20.25 8.25024C21.6307 8.25024 22.75 9.36953 22.75 10.7502C22.75 12.131 21.6307 13.2502 20.25 13.2502H15.2525C15.1894 15.1141 14.6138 17.8193 12.5668 19.8533C11.6249 20.7893 10.2471 20.8447 9.1069 20.674C7.93015 20.4978 6.7641 20.0473 5.98688 19.6751C5.77359 19.5559 4.8798 19.0744 4.67654 18.9728C4.24372 18.7564 3.89992 18.6421 3.61802 18.6421C3.35274 18.6421 3.08205 18.6422 2.87858 18.625C2.65905 18.6066 2.41913 18.5643 2.18353 18.44C1.87161 18.2754 1.61668 18.0205 1.45214 17.7086C1.32786 17.473 1.28555 17.2331 1.26708 17.0135C1.24996 16.8101 1.24998 16.5664 1.25 16.3011L1.25 10.7166C1.24997 10.4089 1.24995 10.1254 1.27336 9.88957C1.29882 9.63296 1.39965 9.16986 1.66177 8.90775C1.88929 8.63774 2.22105 8.48858 2.4938 8.38264C2.78506 8.26951 3.17067 8.14952 3.63451 8.00519C3.94162 7.89574 4.33239 7.65984 5.12375 7.06086L9.45347 3.78372C10.359 3.07504 11.6452 3.07203 12.5543 3.77706C13.6612 4.63549 13.8207 6.22852 12.8906 7.28045L11.8758 8.25024L20.25 8.25024Z',
  d7: 'M2.02448 8.95046L4.0663 8.95039L9.91645 4.49666C10.0355 4.40602 10.1668 4.33236 10.3012 4.26671V4.26671C10.4467 4.19565 10.5978 4.13507 10.7568 4.10416C10.8283 4.09026 10.8696 4.09024 11.0434 4.08994C11.3042 4.08949 11.522 4.11336 11.7945 4.23497C11.9299 4.29542 12.0962 4.42772 12.1913 4.50059C12.5706 4.79115 12.7785 5.29115 12.7941 5.80498C12.8096 6.31573 12.562 6.67528 12.1905 7.02437C11.4596 7.71101 10.8274 8.27928 9.99387 9.09713L19.935 9.09682C20.4638 9.0951 21.0902 9.19563 21.4382 9.56187C22.1951 10.4231 22.2008 11.2008 21.4459 12.111C21.0975 12.4938 20.551 12.5809 20.0085 12.5826L14.4787 12.5828C14.6452 15.1702 13.6367 17.8312 12.351 19.1221C11.4799 20.1076 10.5807 20.21 9.12769 19.9918C7.44973 19.6937 6.43538 19.1415 4.07945 17.9893L2.07706 17.9893',
  d8: 'M9.45342 3.78375C10.359 3.07504 11.6452 3.07202 12.5543 3.77706C13.6612 4.63549 13.8207 6.22852 12.8906 7.28045L12.8692 7.30464L11.8758 8.25024L20.25 8.25024C21.6307 8.25024 22.75 9.36953 22.75 10.7502C22.75 12.131 21.6307 13.2502 20.25 13.2502H15.2525C15.1894 15.1141 14.6138 17.8193 12.5668 19.8533C11.6249 20.7893 10.2471 20.8447 9.1069 20.674C7.93015 20.4978 6.76409 20.0473 5.98688 19.6751C5.58726 19.4838 5.01006 19.2071 4.53288 18.9782L3.8321 18.6421H1.25V8.10205H3.75076L9.45342 3.78375Z',
} as const;

export const IconHandPointingRight01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-right-01-stroke-rounded IconHandPointingRight01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingRight01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-right-01-duotone-rounded IconHandPointingRight01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
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

export const IconHandPointingRight01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-right-01-twotone-rounded IconHandPointingRight01TwotoneRounded"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingRight01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-right-01-solid-rounded IconHandPointingRight01SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingRight01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-right-01-bulk-rounded IconHandPointingRight01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingRight01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-right-01-stroke-sharp IconHandPointingRight01StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingRight01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-right-01-solid-sharp IconHandPointingRight01SolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHandPointingRight01: TheIconSelfPack = {
  name: 'HandPointingRight01',
  StrokeRounded: IconHandPointingRight01StrokeRounded,
  DuotoneRounded: IconHandPointingRight01DuotoneRounded,
  TwotoneRounded: IconHandPointingRight01TwotoneRounded,
  SolidRounded: IconHandPointingRight01SolidRounded,
  BulkRounded: IconHandPointingRight01BulkRounded,
  StrokeSharp: IconHandPointingRight01StrokeSharp,
  SolidSharp: IconHandPointingRight01SolidSharp,
};