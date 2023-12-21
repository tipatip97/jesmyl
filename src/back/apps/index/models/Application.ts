import { SokiAppName } from '../../../complect/soki/soki.model';

export interface Application {
  name: SokiAppName;
  title: string;
  description: string;
  level: number;
  disabled: boolean;
  hidden: boolean;
  params?: string[];
}
