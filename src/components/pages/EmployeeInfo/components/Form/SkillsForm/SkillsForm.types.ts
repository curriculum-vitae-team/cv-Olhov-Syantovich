import { ISkill } from '@interfaces/ISkill';
import { Dispatch, SetStateAction } from 'react';
import { ISkillMastery } from '@interfaces/ISkillMastery';

export type SkillsFormProps = {
  skills: ISkillMastery[];
  setSkills: Dispatch<SetStateAction<ISkillMastery[]>>;
  allSkills: ISkill[];
};
