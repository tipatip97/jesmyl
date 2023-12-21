export const contextFieldBlankTypeDictAliases = {
  string: 'Строка',
};

export type ContextFieldBlankType = keyof typeof contextFieldBlankTypeDictAliases;

export interface ContextFieldGeneral {
  key: string;
}

export interface ContextFieldBlankImportable extends ContextFieldBlankExportable {
  w: number;
}

export interface ContextFieldValueExportable extends ContextFieldGeneral {
  value: string;
}

export interface ContextFieldBlankExportable extends ContextFieldGeneral {
  name: string;
  type: ContextFieldBlankType;
  value?: string;
  def?: string;
}
