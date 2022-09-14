import { ILanguageProficiency } from '@interfaces/ILanguageProficiency';
import { ISkillMastery } from '@interfaces/ISkillMastery';

export interface IProfileInput {
  first_name: string;
  last_name: string;
  skills: ISkillMastery[];
  languages: ILanguageProficiency[];
}
