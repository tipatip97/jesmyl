export interface CmMp3Rule {
  w: number;
  url: string;
  attr: string;
  query: string;
  textQuery?: string;
  isHTML?: 1;
}

export interface CmMp3ContainsPageResult {
  html: string;
  rule: CmMp3Rule;
}
