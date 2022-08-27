import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage, rootRef } from "./base";

export const HEADER_HEIGHT = "70px";
export const FOOTER_HEIGHT = "50px";

export const getImagesFromFirebase = ({ path, setImages }) => {
  const pageRef = ref(storage, path);
  listAll(pageRef)
    .then((res) => {
      Promise.all(res.items.map((item) => getDownloadURL(item))).then(
        (images) => setImages(images)
      );
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getFoldersFromFirebase = ({ setFolders }) => {
  listAll(rootRef)
    .then((res) => {
      Promise.all(res.prefixes.map((folder) => folder.name)).then(
        (folderName) => setFolders(folderName)
      );
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getFirstImageFromFolder = ({ path }) => {
  const pageRef = ref(storage, path);
  let imageRetrieved = [];
  listAll(pageRef)
    .then((res) => {
      Promise.resolve(getDownloadURL(res.items[0])).then((image) => {
        imageRetrieved.push(image.toString());
      });
    })
    .catch((error) => {
      console.error(error);
    });

  return imageRetrieved;
};
