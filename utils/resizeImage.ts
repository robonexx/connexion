export const resizeImage = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const img = new Image();
        img.src = e.target?.result as string;
  
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
  
          const maxWidth = 600;
          const maxHeight = 600;
  
          let width = img.width;
          let height = img.height;
  
          if (width > height) {
            if (width > maxWidth) {
              height *= maxWidth / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width *= maxHeight / height;
              height = maxHeight;
            }
          }
  
          canvas.width = width;
          canvas.height = height;
  
          ctx?.drawImage(img, 0, 0, width, height);
  
          // Get the resized image as a base64-encoded JPEG
          const resizedImageData = canvas.toDataURL('image/jpeg', 0.7); // Adjust quality as needed
  
          resolve(resizedImageData);
        };
  
        img.onerror = () => {
          reject('Failed to load image');
        };
      };
  
      reader.readAsDataURL(file);
    });
  };