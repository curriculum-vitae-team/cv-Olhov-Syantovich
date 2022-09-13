import { ILanguageProficiencyInput } from '@interfaces/inputs/ILanguageProficiencyInput';
import { ISkillMasteryInput } from '@interfaces/inputs/ISkillMasteryInput';

export interface ICvInput {
  name: string;
  description: string;
  userId?: string;
  projectsIds: string[];
  skills: ISkillMasteryInput[];
  languages: ILanguageProficiencyInput[];
  is_template: boolean;
}
