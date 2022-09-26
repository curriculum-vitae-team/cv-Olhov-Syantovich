import { ISkillMastery } from '@interfaces/ISkillMastery';
import { ILanguageProficiency } from '@interfaces/ILanguageProficiency';

export interface IProfile {
  id: string;
  created_at: string;
  first_name?: string;
  last_name?: string;
  full_name?: string;
  avatar?: string;
  skills: ISkillMastery[];
  languages: ILanguageProficiency[];
}
