import { IAvatarInput } from '@interfaces/inputs/IAvatarInput';

export const compressImage = (imgSrc: string, avatar: IAvatarInput): void => {
  const canvas = document.createElement('canvas');
  const img = document.createElement('img');

  img.src = imgSrc;

  img.onload = () => {
    let width = img.width;
    let height = img.height;
    const maxWidth = 500;
    const maxHeight = 500;

    if (width > height) {
      if (width > maxWidth) {
        height = Math.floor((height *= maxWidth / width));
        width = maxWidth;
      }
    } else {
      if (height > maxHeight) {
        width = Math.floor((width *= maxHeight / height));
        height = maxHeight;
      }
    }

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');

    if (ctx) {
      ctx.drawImage(img, 0, 0, width, height);
      avatar.size = width * height;
      avatar.base64 = canvas.toDataURL('image/jpg');
    }
  };
};
