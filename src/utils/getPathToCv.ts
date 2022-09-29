import { ICv } from '@interfaces/ICv';
import { PathEnum } from '@templates/router/router.types';

export const getPathToCvs = (cvs: ICv[], id: string): string =>
  cvs.length
    ? PathEnum.cvDetails.replace(':id', id as string).replace(':cvId', cvs[0].id as string)
    : PathEnum.employeeCv.replace(':id', id as string);
