import { ILanguageProficiency } from '@interfaces/ILanguageProficiency';
import { ISkillMastery } from '@interfaces/ISkillMastery';

export interface ICvInput {
  name: string;
  description: string;
  userId?: string;
  projectsIds: string[];
  skills: ISkillMastery[];
  languages: ILanguageProficiency[];
  is_template: boolean;
}
