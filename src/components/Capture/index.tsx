import { useCallback, useRef, useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Webcam from "react-webcam";

import { SiVerizon } from "react-icons/si";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";

export default function Capture() {
  const navigate = useRouter();
  const webcamRef = useRef<any>();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [isLoadingCapture, setIsLoadingCapture] = useState(false);

  const capture = useCallback(() => {
    setIsLoadingCapture(true);
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    setIsLoadingCapture(false);
  }, [webcamRef]);

  const handleClose = useCallback(() => {
    setImage(null);
  }, [setImage]);

  return (
    <Box>
      {!image && (
        <Webcam
          videoConstraints={{ facingMode: "user" }}
          audio={false}
          ref={webcamRef}
          mirrored={true}
          screenshotFormat="image/jpeg"
        />
      )}
      {image && <img src={image} alt="selfie" />}
      {!image && <AiFillCamera onClick={capture} />}
      {image && !loading && (
        <Box>
          <button onClick={handleClose} disabled={loading}>
            {" "}
            <IoMdClose fontSize={30} />{" "}
          </button>
        </Box>
      )}
    </Box>
  );
}
export function dataURLtoFile(dataurl: any, filename: any) {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}
