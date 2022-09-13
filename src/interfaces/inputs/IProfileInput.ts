import { ILanguageProficiencyInput } from '@interfaces/inputs/ILanguageProficiencyInput';
import { ISkillMasteryInput } from '@interfaces/inputs/ISkillMasteryInput';

export interface IProfileInput {
  first_name: string;
  last_name: string;
  skills: ISkillMasteryInput[];
  languages: ILanguageProficiencyInput[];
}
