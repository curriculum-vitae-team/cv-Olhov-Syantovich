import { IUser } from '@interfaces/IUser';
import { TableEmployeeEnum } from '@pages/Employees/Employees.enum';

export const searchEmployee = (searchFields: Array<string>, search: string) => (user: IUser) => {
  for (const field of searchFields) {
    let value;
    if (field === TableEmployeeEnum.firstName || field === TableEmployeeEnum.lastName) {
      value = user.profile[field];
    } else {
      value = user[field as keyof typeof user];
    }
    if (typeof value === 'string') {
      if (value.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
    }
  }
  return false;
};
