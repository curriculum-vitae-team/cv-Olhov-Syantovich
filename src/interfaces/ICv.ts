import { IUser } from '@interfaces/IUser';
import { IProject } from '@interfaces/IProject';
import { ISkillMastery } from '@interfaces/ISkillMastery';
import { ILanguageProficiency } from '@interfaces/ILanguageProficiency';

export interface ICv {
  id: string;
  created_at: string;
  name: string;
  description: string;
  user?: IUser;
  projects?: IProject[];
  skills: ISkillMastery[];
  languages: ILanguageProficiency[];
  is_template: boolean;
}
