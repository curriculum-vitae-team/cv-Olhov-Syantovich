import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Avatar as AvatarMaterial, Box, IconButton } from '@mui/material';
import { AvatarFormProps } from '@pages/EmployeeInfo/components/Info/Avatar/Avatar.types';
import {
  addSX,
  avatarSX,
  boxSX,
  closeSX,
  inputSX
} from '@pages/EmployeeInfo/components/Info/Avatar/Avatar.styles';
import { ToastStore } from '@store/toastStore/ToastsStore';
import { SeverityEnum } from '@store/toastStore/ToastsStore.type';
import { IAvatarInput } from '@interfaces/inputs/IAvatarInput';
import { Add, Close } from '@mui/icons-material';
import { compressImage } from '@utils/compressImage';

let avatar = {} as IAvatarInput;

export const Avatar: FC<AvatarFormProps> = ({
  profile,
  haveRights,
  uploadAvatar,
  deleteAvatar,
  refetch
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  useEffect(() => {
    if (avatar.base64) {
      uploadAvatar({
        variables: {
          id: profile.id,
          avatar
        }
      }).then(() => {
        avatar = {} as IAvatarInput;
        refetch();
        ToastStore.addToast(SeverityEnum.success, 'Success');
      });
    }
  }, [avatar.base64]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    if (e.target.files && e.target.files.length) {
      avatar.type = e.target.files[0].type;
      avatar.size = e.target.files[0].size;
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = () => {
      if (avatar.size > 490000) {
        compressImage(reader.result as string, avatar);
      } else {
        avatar.base64 = reader.result as string;
      }
    };
  };

  const handleDelete = () => {
    deleteAvatar({ variables: { id: profile.id } }).then(() => {
      refetch();
      ToastStore.addToast(SeverityEnum.success, 'Success');
    });
  };

  return (
    <Box sx={boxSX}>
      {haveRights && (
        <>
          {profile.avatar && (
            <IconButton sx={closeSX} onClick={handleDelete}>
              <Close />
            </IconButton>
          )}
          {isHover && <Add sx={addSX} />}
        </>
      )}
      <input
        accept="image/jpeg,image/png,image/gif,image/svg+xml"
        style={inputSX}
        type="file"
        onChange={handleChange}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      />
      <AvatarMaterial sx={avatarSX} src={profile.avatar} />
    </Box>
  );
};
