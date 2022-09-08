import { IDepartment } from '@interfaces/IDepartment';
import { IPosition } from '@interfaces/IPosition';
import { ISkillMastery } from '@interfaces/ISkillMastery';
import { ILanguageProficiency } from '@interfaces/ILanguageProficiency';

export interface IProfile {
  id: string;
  created_at: string;
  first_name?: string;
  last_name?: string;
  full_name?: string;
  department?: IDepartment;
  department_name?: string;
  position?: IPosition;
  position_name?: string;
  skills: ISkillMastery[];
  languages: ILanguageProficiency[];
}
